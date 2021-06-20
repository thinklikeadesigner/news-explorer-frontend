import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import './InfoToolTip.css'


export function InfoToolTip(props) {
  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen ? "modal_open" : ""
      }`}
    >
      <div className='modal__container'>
        <div className='infotooltip'>
            {props.isItSuccess
              ? (     <>
               <h1 className='infotooltip__message'> "Registration successfully completed."    </h1>
              <Link       onClick={props.onClose} className='infotooltip__link'to='main' >Sign in </Link>
              </>)
              : ( <h1 className='infotooltip__message'>"Oops, something went wrong! Please try again."    </h1>)}
              {/* {props.message} */}
      
        </div>
        <button
          aria-label='Close Button'
          type='reset'
          className={`modal__close-button modal__close-button_${props.name}`}
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
