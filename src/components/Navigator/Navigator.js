
import React, { useState } from 'react';
import { Header } from '../Header/Header';
import './Navigator.css';
import '../SavedNewsPage/SavedNewsPage.css';
import {headerBgBlack, headerBgTransparent, headerBgWhite, headerTitleBlack, headerTitleWhite, hamburger, hamburgerBlack, hamburgerWhite, hiddenNavDrawer, showNavDrawer } from '../../utils/constants/constants.js';
export function Navigator(props) { 
  const [isNavOpen, setIsNavOpen] = useState(false);
  
function handleNavOpen(e) {
  e.preventDefault();
  setIsNavOpen(!isNavOpen);
}


  
  return (
    <>
    <div className={`navigator`}>
    <Header headerTitle={props.headerTitle} headerBg={isNavOpen ? headerBgBlack : props.headerBg} >
<button onClick={handleNavOpen} className={`header__icon ${isNavOpen ?   'header__icon_x' : props.hamburgerColor}`}></button> 
    </Header>
  <div className={`navigator__drawer ${isNavOpen ? showNavDrawer : hiddenNavDrawer}`}>
  <div className="navigator__links">
  <p className={`header__home header__home_navigator`}>Home</p>
  <button className={`header__button`}>Sign in
</button>
</div>
</div>
</div>
</>

);}

