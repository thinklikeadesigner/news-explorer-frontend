/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import About from '../About/About';
import './Main.css';
import { Footer } from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { Navigator } from '../Navigator/Navigator';

import {
  headerBgTransparent,
  headerTitleWhite,
  hamburgerWhite,
} from '../../utils/constants/constants.js';
import { useMediaQuery } from '../../utils/hooks/mediaquery';

import { Search } from '../Search/Search';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isMobile = useMediaQuery('(max-width: 750px)');
  const isTable = useMediaQuery('(max-width: 1140px)');

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
      {currentUser.name}
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

          <SearchForm onSearch={props.onSearch} />
        </div>
        {!props.noSearch && (
          <Search
            isSaved={props.isSaved}
            loggedIn={props.loggedIn}
            buttonType={'card__save-btn'}
          >
            {props.children}
          </Search>
        )}

        <About />
        <Footer />
      </main>
    </>
  );
}
