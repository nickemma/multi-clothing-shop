import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { CategoryMap } from '../../redux/constants/categoriesConstant';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBbD3P6nD9Ky0io_isC867uDKt6rwgrUoM',
  authDomain: 'multi-clothing-shop.firebaseapp.com',
  projectId: 'multi-clothing-shop',
  storageBucket: 'multi-clothing-shop.appspot.com',
  messagingSenderId: '342550270020',
  appId: '1:342550270020:web:9395d261d2bb7bf4ca2c11',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a new instance of google logged in
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// Get the auth and call it
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Create a user and get it from firebase store
export const db = getFirestore();

// Add a new document to the database
export type ObjectToAdd = {
  title: string;
};
export const addCollectionAndDocument = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

// Get the data from my database
export const getCollectionAndDocument = async () => {
  const collectionRef = collection(db, 'categories');
  const uniqueQuery = query(collectionRef);

  const querySnapShop = await getDocs(uniqueQuery);

  const categoryMap = querySnapShop.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap);
  return categoryMap;
};

// Create a user with google sign In
export type AdditionalDetails = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalDetails = {} as AdditionalDetails
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalDetails,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return userSnapShot as QueryDocumentSnapshot<UserData>;
};

// Create a user with email and password

export const createAuthWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Log a user In with email and password
export const signInAuthWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Log a user out
export const signUserOut = async () => await signOut(auth);

// leverage the single thread to create observer and manage user account for optimization
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

// leverage the single thread to convert from observer to redux saga for memoization
export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
