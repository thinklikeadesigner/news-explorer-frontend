import React from 'react';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import './Navigator.css';
import '../SavedNewsPage/SavedNewsPage.css';
import {
  headerBgBlack,
  headerTitleWhite,
} from '../../utils/constants/constants.js';
export function Navigator(props) {
  const navBarLink = props.loggedIn ? (
    <>
      <Link onClick={props.onClose} to='/main' className={`navigator__link`}>
        Home
      </Link>
      <Link
        onClick={props.onClose}
        
        to='/savedNewsPage'
        className={`navigator__link navigator__link_bottom`}
      >
        Saved articles
      </Link>
    </>
  ) : (
    <Link onClick={props.onClose} to='/main' className={`navigator__link `}>
      Home
    </Link>
  );

  return (
    <>
      <div className={`navigator ${props.isOpen ? '' : 'navigator_hidden'}`}>
        <Header headerTitle={headerTitleWhite} headerBg={headerBgBlack}>
          <button
            onClick={props.onNavBarClick}
            className={`header__icon ${'header__icon_x'}`}
          ></button>
        </Header>
        <div className='navigator_container'>
          <div className={`navigator__drawer `}>
            <div className='navigator__links'>
              {navBarLink}
              <button
                onClick={props.loggedIn ? props.onLogOut : props.onSignIn}
                className={`header__button`}
              >
                {props.loggedIn ? 'Log out' : 'Sign in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
