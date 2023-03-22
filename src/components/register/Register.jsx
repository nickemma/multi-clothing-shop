import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import './register.scss';
import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/Firebase.config';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const navigate = useNavigate();
  const [formField, setFormField] = useState(initialState);
  const { displayName, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const resetForm = () => {
    setFormField(initialState);
  };

  const handleSubmit = async (e) => {
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
      const { user } = await createAuthWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('User already exist');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
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
    </div>
  );
};

export default Register;
