import { useState, FormEvent, ChangeEvent } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import FormInput from '../form-input/FormInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../redux/actions/user/userAction';
import Button from '../button/Button';
import { SignUpContainer } from './register.style';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formField, setFormField] = useState(initialState);
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const resetForm = () => {
    setFormField(initialState);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetForm();
      navigate('/');
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('User already exist');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account Register here...</h2>
      <span>Register with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default Register;
