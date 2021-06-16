import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { PopupWithForm } from '../PopupWithForms';
import '../NewRegister/form.css';

export function Popup(props) {
  return (
    <div className={`modal  ${props.isOpen ? 'modal_open' : ''}`}>
      <div className='modal__container'>
      {props.children}
        <button
          aria-label='Close Button'
          type='reset'
          className={`modal__close-button `}
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}
