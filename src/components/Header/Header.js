
import React from 'react';
import './Header.css';
export function Header(props) { 
  
  

  
  return (
  <header className="header">
  {/* <div className={`header__container ${props.headerlogout}`}> */}
  <div className={`header__container `}>
    <p className={`header__title ${props.headerTitleBlack}`}>NewsExplorer</p>
    <div className="header__nav">
    <p className={`header__home ${props.homeSaved}`}>Home</p>
    
    
     {props.children}


    </div>
    
{/* {props.children} */}
  </div>
</header>
);}


//  MAKEME ADD TO logged in PAGE for a white logout or black logout 
// REFACTOR SO SAVED MEANS LOGGED IN
