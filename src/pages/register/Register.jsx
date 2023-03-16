import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.config';

const Register = () => {
  const logUserGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);
    console.log(userRef);
  };

  return (
    <div>
      <button onClick={logUserGoogle}>login with google</button>
    </div>
  );
};

export default Register;
