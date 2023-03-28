import Register from '../../components/register/Register';
import Login from '../../components/login/Login';
import { AuthenticationContainer } from './auth.style';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <Login />
      <Register />
    </AuthenticationContainer>
  );
};

export default Authentication;
