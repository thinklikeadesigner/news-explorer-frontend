
import React from 'react';
import { Header } from '../Header/Header';
import './Navigator.css';
import '../SavedNewsPage/SavedNewsPage.css';
import {headerBgBlack, headerBgTransparent, headerBgWhite, headerTitleBlack, headerTitleWhite, hamburger, hamburgerBlack, hamburgerWhite, hiddenNavDrawer, showNavDrawer } from '../../utils/constants/constants.js';
export function Navigator(props) { 
  
  

  
  return (
    <>
    <div className={`navigator`}>
    <Header headerTitle={props.headerTitle} headerBg={headerBgBlack} >
<div className={`header__icon ${props.hamburgerColor}`}></div> 
    </Header>
  <div className={`navigator__drawer ${showNavDrawer}`}>
  <div className="navigator__links">
  <p className={`header__home header__home_navigator`}>Home</p>
  <button className={`header__button`}>Sign in
</button>
</div>
</div>
</div>
</>

);}

