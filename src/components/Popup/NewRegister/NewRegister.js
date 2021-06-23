import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../utils/hooks/useForm';
import './form.css';
import Input from '../Input';


export function NewRegister(props) {

const {handleChange, values, handleSubmit, errors, isValid} = useForm();


  return (
    
    <form
    onSubmit={handleSubmit}
    action='#'
    className={`form`}
    name='register'
    noValidate
  >
    <h2 className='form__title '>Sign Up</h2>
    <Input minlength='2' errorText={errors.email} noValidate value={values.email} maxlength='40' type="email" name="Email" form="sign-up" handleChange={handleChange} 
    // valid={true}
     placeholderText="Enter email" />

<Input minlength='2' errorText={errors.password} noValidate value={values.password} maxlength='200' type="password" name="Password" form="sign-up" handleChange={handleChange} 
    // valid={true}
     placeholderText="Enter Password" />

<Input minlength='2' errorText={errors.password} noValidate value={values.name} maxlength='200' type="text" name="Name" form="sign-up" handleChange={handleChange} 
    // valid={true}
     placeholderText="Enter Name" />

    <button type='submit' className={`form__button ${isValid ? '' : 'form__button_disabled'}`}>
      Sign up
      
    </button>
    <div className='form__link_container'>
      <span className='form__link-span'>
        or{' '}
        <button onClick={props.onSwitchToLogin} className={`form__link`}>
          Sign in
        </button>
      </span>
    </div>
  </form>
  );
}
