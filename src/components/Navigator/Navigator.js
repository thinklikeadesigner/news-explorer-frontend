
import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { useHistory, Link } from 'react-router-dom';
import './Navigator.css';
import '../SavedNewsPage/SavedNewsPage.css';
import {headerBgBlack, headerBgTransparent, headerBgWhite, headerTitleBlack, headerTitleWhite, hamburger, hamburgerBlack, hamburgerWhite, hiddenNavDrawer, showNavDrawer } from '../../utils/constants/constants.js';
export function Navigator(props) { 


  const navBarLink = props.loggedIn ? (
    <Link  to='/savedNewsPage' className={`header__saved-articles `}>Saved articles
    </Link>
  ) :  ( <Link to='/main' className={`header__home header__home_navigator`}>Home</Link>);

  
  return (
    <>
    <div className={`navigator ${props.isOpen ?   '' : 'navigator_hidden'}`}>
    <Header headerTitle={headerTitleWhite} headerBg={headerBgBlack} >
<button onClick={props.onNavBarClick} className={`header__icon ${'header__icon_x'}`}></button> 
    </Header>
<div className="navigator_container">
<div className={`navigator__drawer `}>
  <div className="navigator__links">
{navBarLink}
  <button onClick={props.onSignIn} className={`header__button`}>Sign in
</button>
</div>
</div>
</div>
</div>
</>

);}

