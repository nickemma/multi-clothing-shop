import Register from '../../components/register/Register';
import Login from '../../components/login/Login';
import './auth.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Login />
      <Register />
    </div>
  );
};

export default Authentication;
