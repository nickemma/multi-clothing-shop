import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/actions/user/userAction';
import Router from './routes/Router';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/Firebase.config';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe ? unsubscribe : undefined;
  }, [dispatch]);

  return <Router />;
};

export default App;
