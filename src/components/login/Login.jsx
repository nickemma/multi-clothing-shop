import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import './login.scss';
import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/Firebase.config';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const logUserGoogle = async () => {
    await signInWithGooglePopup();
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
      await signInAuthWithEmailAndPassword(email, password);

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
    <div className="sign-in-container">
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logUserGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
