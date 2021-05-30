import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { PopupWithForm } from '../PopupWithForm';
import './form.css';

export function NewRegister({
  onSetEmail,
  onSetPassword,
  onRegister,
  message,
  email,
  onSwitchToLogin,
  password,
  isOpen,
  onClose,
  name,
  onSetName,
  onSwitchPopups,
}) {
  return (
    <div className={`modal  ${isOpen ? 'modal_open' : ''}`}>
      <div className='modal__container'>
        <form
          onSubmit={onRegister}
          action='#'
          className={`form`}
          name='register'
          noValidate
        >
          <h2 className='form__title '>Sign Up</h2>
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
            value={email}
            onChange={onSetEmail}
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
            value={password}
            onChange={onSetPassword}
          />
          <span className='form__input-error' id='name-input-error'>
            error
          </span>
          <p className='form__input-title'>Name</p>
          <input
            id='job-input'
            minLength='2'
            maxLength='200'
            type='text'
            name='about'
            className='form__input'
            placeholder='Name'
            required
            // FIXME add name handler and value
            value={name}
            onChange={onSetName}
          />
          <span className='form__input-error' id='job-input-error'>
            error
          </span>
          <button type='submit' className={`form__button form__button:hover`}>
            Save
          </button>
          <div className='form__link_container'>
            <span className='form__link-span'>
              or{' '}
              <button onClick={onSwitchToLogin} className={`form__link`}>
                Sign in
              </button>
            </span>
          </div>
        </form>
        <button
          aria-label='Close Button'
          type='reset'
          className={`modal__close-button `}
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
