import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
} from 'firebase/firestore';

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
export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
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
  }, {});
  return categoryMap;
};

// Create a user with google sign In
export const createUserDocumentFromAuth = async (userAuth, additional) => {
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
        ...additional,
      });
    } catch (error) {
      console.error(error);
    }
  }
  return userRef;
};

// Create a user with email and password

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Log a user In with email and password
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Log a user out
export const signUserOut = async () => await signOut(auth);

// leverage the single thread to create observer and manage user account for optimization
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
