import React, { useState } from 'react';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import '../../Popup/NewRegister/form.css';
import Input from '../Input';
import { Popup } from '../Popup';

export function NewRegister(props) {


  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isUserValid, setIsUserValid] = useState(true);
  const [user, setUser] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(true);

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
    if (password.length > 6) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
    allValid(e);
  }
  function handleUserChange(e) {
    setUser(e.target.value);
    setIsUserValid(true);

    allValid(e);
  }
  function allValid(e) {
    setFormValid(e.target.closest('form').checkValidity());
  }
  function signUpSubmit(e) {
    e.preventDefault();
    props.handleSubmit({ email, password, name: user });
  }

  return (
    <Popup
      isOpen={props.isRegisterPopupOpen}
      buttonText='Sign up'
      onClose={props.onClose}
      title='Sign up'
      link='Sign in'
      linkClick={props.linkClick}
      handleSubmit={signUpSubmit}
      valid={formValid}
      message={props.message}
    >
      <Input
        type='email'
        name='Email'
        form='sign-up'
        handleChange={handleEmailChange}
        errorText='Invalid email address'
        placeholderText='Enter email'
        valid={isEmailValid}
        minlength='2'
        noValidate
        value={email}
        maxlength='40'

      />

      <Input
        minlength='2'
        valid={isPasswordValid}
        errorText='Password requires additional characters'
        noValidate
        value={password}
        maxlength='200'
        type='password'
        name='Password'
        form='sign-up'
        handleChange={handlePasswordChange}
        placeholderText='Enter Password'
      />

      <Input
        minlength='2'
        errorText='name required'
        noValidate
        value={user}
        maxlength='200'
        type='text'
        name='Name'
        form='sign-up'
        handleChange={handleUserChange}
        valid={isUserValid}
        placeholderText='Enter Name'
      />
    </Popup>
  );
}
