
import React from 'react';
import './Header.css';
export function Header(props) { 
  
  

  
  return (
  <header className={`header `}>
  {/* <div className={`header__container ${props.headerlogout}`}> */}
  <div className={`header__container ${props.headerBg}`}>
    <p className={`header__title ${props.headerTitle}`}>NewsExplorer</p>
    <div className="header__nav">

    
    
     {props.children}


    </div>
    

  </div>
</header>
);}


//  MAKEME ADD TO logged in PAGE for a white logout or black logout 
// REFACTOR SO SAVED MEANS LOGGED IN
