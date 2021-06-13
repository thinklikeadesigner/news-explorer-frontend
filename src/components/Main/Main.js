import React, { useState } from 'react';
// import Card from "./Card/Card";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Footer } from "./Footer";
import { useHistory, Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import Card from '../Card/Card';
import About from '../About/About';
import './Main.css';
import { Footer } from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import { Navigator } from '../Navigator/Navigator';

import {
  headerBgTransparent,
  headerBgBlack,
  headerTitleWhite,
  hamburgerWhite,
} from '../../utils/constants/constants.js';
import { useMediaQuery } from '../../utils/hooks/mediaquery';
import { NothingFound } from '../NothingFound/NothingFound';
import { Preloader } from '../Preloader/Preloader';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';

export function Main(props) {
  const isMobile = useMediaQuery('(max-width: 750px)');
  const isTable = useMediaQuery('(max-width: 1140px)');

  const savedArticles = props.loggedIn ? (
    <p className={`header__saved-articles `}>Saved articles</p>
  ) : null;

  const headerButton = props.loggedIn ? (
    <button
      onClick={props.onLogOut}
      className={`header__button header__button_white`}
    >
      Elise
      <div className={`header__icon `}></div>
    </button>
  ) : (
    <button
      onClick={props.onSignIn}
      className={`header__button header__button_white header__button_sign-in`}
    >
      Sign in
    </button>
  );

  return (
    <>
      <main className='main'>
        <div className='search-form_pic'>
          {isMobile ? (
            <>
              <Header headerTitle={headerTitleWhite} headerBg={headerBgTransparent} >
<button onClick={props.onNavBarClick} className={`header__icon ${ hamburgerWhite}`}></button> 
    </Header>
            <Navigator
            isOpen={props.isOpen}
            onNavBarClick={props.onNavBarClick}
              onSignIn={props.onSignIn}
            >

            </Navigator>
            </>
          ) : (
            <Header
              headerTitle={headerTitleWhite}
              headerBg={headerBgTransparent}
            >
              <p className={`header__home header__home_underlined `}>Home</p>
              {savedArticles}
              {headerButton}
            </Header>
          )}

            <SearchForm />
    
        </div>

        
          <Search>  
          <h2 className="search__title">Search results</h2>
          {/* <Preloader /> */}
          {/* <NothingFound /> */}
          </Search>
        

        <About />
        <Footer />
      </main>
    </>
  );
}
