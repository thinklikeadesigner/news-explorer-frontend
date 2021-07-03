/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import About from '../About/About';
import './Main.css';
import { Footer } from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import { Navigator } from '../Navigator/Navigator';
import { CardsList } from '../CardsList/CardsList';

import {
  headerBgTransparent,
  headerTitleWhite,
  hamburgerWhite,
} from '../../utils/constants/constants.js';
import { useMediaQuery } from '../../utils/hooks/mediaquery';
import { NothingFound } from '../NothingFound/NothingFound';
import { Preloader } from '../Preloader/Preloader';
import { Search } from '../Search/Search';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export function Main(props) {
  const currentUser = React.useContext(CurrentUserContext)
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
        {props.results ? (
          <Search
            isSaved={props.isSaved}
            loggedIn={props.loggedIn}
            buttonType={'card__save-btn'}
          >
            <h2 className='search__title'>Search results</h2>

            <CardsList
              buttonType={'card__save-btn'}
              cards={props.cards}
              keyword={props.keyword}
              isSaved={props.isSaved}
              loggedIn={props.loggedIn}
            />
            {/* FIXME preloader */}
            {/* FIXME nothing found pic not showing */}

            {/* Once the data is received, the preloader should disappear from the results block, and proper cards should appear. Cards should be arranged in a row of three at screen width of 1280px or more. If the browser window is resized smaller than that, the cards that don't fit should be moved to the next line. */}

            {/* <NothingFound /> */}
            {props.noResults ? <NothingFound noResults={props.noResults} /> : ''}

            {props.loading ? <Preloader /> : ''}

            {props.resultError ? <NothingFound resultError={props.resultError} /> : ''}
          </Search>
        ) : null}

        <About />
        <Footer />
      </main>
    </>
  );
}
