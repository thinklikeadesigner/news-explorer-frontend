import React from 'react';
import './Header.css';
export function Header(props) {
  return (
    <header className={`header `}>
      {/* <div className={`header__container ${props.headerlogout}`}> */}
      <div className={`header__container ${props.headerBg}`}>
        <p className={`header__title ${props.headerTitle}`}>NewsExplorer</p>
        <div className='header__nav'>{props.children}</div>
      </div>
    </header>
  );
}

