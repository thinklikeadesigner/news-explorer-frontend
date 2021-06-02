
import React, { useState } from 'react';
import { Header } from '../Header/Header';
import './Navigator.css';
import '../SavedNewsPage/SavedNewsPage.css';
import {headerBgBlack, headerBgTransparent, headerBgWhite, headerTitleBlack, headerTitleWhite, hamburger, hamburgerBlack, hamburgerWhite, hiddenNavDrawer, showNavDrawer } from '../../utils/constants/constants.js';
export function Navigator(props) { 


  
  return (
    <>
    <div className={`navigator`}>
{props.children}
  <div className={`navigator__drawer ${props.isOpen ? showNavDrawer : hiddenNavDrawer}`}>
  <div className="navigator__links">
  <p className={`header__home header__home_navigator`}>Home</p>
  <button onClick={props.onSignIn} className={`header__button`}>Sign in
</button>
</div>
</div>
</div>
</>

);}

