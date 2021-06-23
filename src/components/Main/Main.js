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
import { CardsList } from '../CardsList/CardsList';

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

  // console.log('main', props.onLogOut);
  // console.log('main is loggedin', props.loggedIn);

  const savedArticles = props.loggedIn ? (
    <Link
      onClick={props.onSavedNewsClick}
      to='savedNewsPage'
      className={`header__saved-articles `}
    >
      Saved articles
    </Link>
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
        <div className='search-form__pic'>
          {isMobile ? (
            <>
              <Header
                headerTitle={headerTitleWhite}
                headerBg={headerBgTransparent}
              >
                <button
                  onClick={props.onNavBarClick}
                  className={`header__icon ${hamburgerWhite}`}
                ></button>
              </Header>
              <Navigator
                isOpen={props.isOpen}
                onNavBarClick={props.onNavBarClick}
                onSignIn={props.onSignIn}
                isSaved={props.isSaved}
                loggedIn={props.loggedIn}
                onLogOut={props.onLogOut}
                onSavedNewsClick={props.onSavedNewsClick}
                onClose={props.onClose}
              ></Navigator>
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

        <Search
          isSaved={props.isSaved}
          loggedIn={props.loggedIn}
          buttonType={'card__save-btn'}
        >
          <h2 className='search__title'>Search results</h2>

          <CardsList
            isSaved={props.isSaved}
            loggedIn={props.loggedIn}
            buttonType={props.buttonType}
          />
          {/* <Preloader /> */}
          {/* <NothingFound /> */}
        </Search>

        <About />
        <Footer />
      </main>
    </>
  );
}
