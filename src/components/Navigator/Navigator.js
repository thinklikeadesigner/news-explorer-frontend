
import React from 'react';
import { Header } from '../Header/Header';
import './Navigator.css';
import '../SavedNewsPage/SavedNewsPage.css';
export function Navigator(props) { 
  
  

  
  return (
    <>
    <div className={`navigator`}>
    <Header headerTitle={props.headerTitle} headerBg={props.headerBg} >
<div className={`header__icon ${props.hamburgerColor}`}></div> 
    </Header>
  <div className={`navigator__drawer ${props.NavDrawer}`}>
  <div className="navigator__links">
  <p className={`header__home header__home_navigator`}>Home</p>
  <button className={`header__button`}>Sign in
</button>
</div>
</div>
</div>
</>

);}

