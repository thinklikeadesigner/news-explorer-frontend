import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { PopupWithForm } from '../PopupWithForm';
import '../NewRegister/form.css';

export function NewLogin(props) {
  return (
    <form
    onSubmit={props.onLogin}
    action='#'
    className={`form`}
    name='register'
    noValidate
  >
    <h2 className='form__title '>Sign In</h2>
    <p className='form__input-title'>Email</p>

    <input
      // GOOGLE how to catch the celebrate errors, or do live validation
      id='email-input'
      minLength='2'
      maxLength='40'
      name='email'
      type='text'
      className='form__input'
      placeholder='Email'
      required
      value={props.email}
      onChange={props.onSetEmail}
    />
    <span className='form__input-error' id='name-input-error'>
      error
    </span>
    <p className='form__input-title'>Password</p>
    <input
      id='password-input'
      minLength='2'
      maxLength='200'
      name='password'
      type='password'
      className='form__input'
      placeholder='Password'
      required
      value={props.password}
      onChange={props.onSetPassword}
    />
    <span className='form__input-error' id='name-input-error'>
      error
    </span>

    <button type='submit' className={`form__button `}>
      Sign in
    </button>
    <div className='form__link_container'>
      <span className='form__link-span'>
        or{' '}
        <button onClick={props.onSwitchToRegister} className={`form__link`}>
          Sign up
        </button>
      </span>
    </div>
  </form>
  );
}
