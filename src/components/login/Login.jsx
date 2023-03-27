import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import { useDispatch } from 'react-redux';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { SignInContainer, ButtonsContainer } from './login.style';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/actions/user/userAction';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logUserGoogle = async () => {
    dispatch(googleSignInStart());
    navigate('/');
  };

  const [formField, setFormField] = useState(initialState);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const resetForm = () => {
    setFormField(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));

      resetForm();
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Invalid credentials');
      } else if (error.code === 'auth/user-not-found') {
        alert('Invalid credentials');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account, Login here...</h2>
      <span>Login with your Email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logUserGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default Login;
