import React from 'react';
function Input(props){
    return(
        <>
        <label htmlFor={props.name} className='form__input-title'>{props.name}</label>
        <input required       id={props.name+'-'+props.form}
            minLength={props.minlength}
            maxLength={props.maxlength}
        className="form__input"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholderText}
        />
   <span className={`form__input-error ${props.valid ?  '' : 'form__input-error_visible'}`} id='name-input-error'>
    {props.errorText} </span>
        </>
    )
}
export default Input;






