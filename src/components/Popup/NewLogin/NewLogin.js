import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import '../NewRegister/form.css';
import { Popup } from '../Popup';
import Input from '../Input';
export function NewLogin(props) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setIsEmailValid(validateEmail(email));
    allValid(e);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (password.length > 7) {
      setIsPasswordValid(true);
    }
    allValid(e);
  }

  function allValid(e) {
    setFormValid(e.target.closest('form').checkValidity());
  }
  function handleSignInSubmit(e) {
    e.preventDefault();
    props.handleSubmit({ email, password });
    resetForm();
  }

  function resetForm() {
    setEmail('');
    setPassword('');
    // setUser('');
    // setMessage('');
  }

  return (
    <Popup
      isOpen={props.isLoginPopupOpen}
      buttonText='Sign in'
      onClose={props.onClose}
      title='Sign in'
      link='Sign up'
      linkClick={props.linkClick}
      handleSubmit={handleSignInSubmit}
      valid={formValid}
      message={props.message}
    >
      <Input
        // GOOGLE how to catch the celebrate errors, or do live validation
        type='email'
        name='Email'
        form='sign-in'
        handleChange={handleEmailChange}
        errorText='Invalid email address'
        valid={isEmailValid}
        placeholderText='Enter email'
        minlength='2'
        noValidate
        value={email}
        maxlength='40'
      />

      <Input
        type='password'
        name='Password'
        form='sign-in'
        handleChange={handlePasswordChange}
        placeholderText='Enter Password'
        valid={isPasswordValid}
        minlength='2'
        errorText='Password requires additional characters'
        noValidate
        value={password}
        maxlength='200'
      />
    </Popup>
  );
}
