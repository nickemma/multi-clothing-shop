import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './redux/actions/user/userAction';
import Router from './routes/Router';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return <Router />;
};

export default App;
