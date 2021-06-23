import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export function Popup(props) {
  function isDisabled() {
    return !props.valid;
  }
  return (
    <div className={`modal  ${props.isOpen ? 'modal_open' : ''}`}  
    //  onClick={props.onClose}
    >
      <div className='modal__container'>
        <form
          onSubmit={props.handleSubmit}
          action='#'
          className={`form`}

          noValidate
        >
          <h2 className='form__title '>{props.title}</h2>

          {props.children}
          <button
            aria-label='Close Button'
            type='reset'
            className={`modal__close-button `}
            onClick={props.onClose}
          ></button>
          <button
            value={props.buttonText}
            type='submit'
            className={`form__button ${
              props.valid ? '' : 'form__button_disabled'
            }`}
            disabled={isDisabled()}
          >
            {props.buttonText}
          </button>
          <div className='form__link_container'>
            <span className='form__link-span'>
              or{' '}
              <button onClick={props.linkClick} className={`form__link`}>
                {props.link}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
