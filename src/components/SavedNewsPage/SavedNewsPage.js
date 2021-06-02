import React, { useEffect } from 'react';
import { useMediaQuery } from '../../utils/hooks/mediaquery';
import Card from '../Card/Card';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigator } from '../Navigator/Navigator';

import {
  headerBgBlack,
  headerBgTransparent,
  headerBgWhite,
  headerTitleBlack,
  headerTitleWhite,
  hamburger,
  hamburgerBlack,
  hamburgerWhite,
  hiddenNavDrawer,
  showNavDrawer,
} from '../../utils/constants/constants.js';
import './SavedNewsPage.css';
import { CardsList } from '../CardsList/CardsList';
import { SavedArticles } from '../SavedArticles/SavedArticles';

function SavedNewsPage(props) {
  const isMobile = useMediaQuery('(max-width: 750px)');
  const isTable = useMediaQuery('(max-width: 1140px)');

  return (
    <>
      <div className={`saved-news`}>
        {isMobile ? (
            <Navigator
            isOpen={props.isOpen}
            onNavBarClick={props.onNavBarClick}
              onSignIn={props.onSignIn}
            >
              <Header headerTitle={props.isOpen ? headerTitleWhite : headerTitleBlack} headerBg={props.isOpen ? headerBgBlack : headerBgWhite} >
<button onClick={props.onNavBarClick} className={`header__icon ${props.isOpen ?   'header__icon_x' : hamburgerBlack}`}></button> 
    </Header>
    <div></div>
            </Navigator>
        ) : (
          <Header headerTitle={headerTitleBlack} headerBg={headerBgWhite}>
            <p className={`header__home header__home_black`}>Home</p>
            <p
              className={`header__saved-articles header__saved-articles_underlined`}
            >
              Saved articles
            </p>
            <button
              onClick={props.onLogOut}
              className={`header__button header__button_black`}
            >
              Elise
              <div className={`header__icon header__icon_black`}></div>
            </button>
          </Header>
        )}

        <div className='saved-news__intro'>
          <p className='saved-news__subtitle'>Saved articles</p>
          <h1 className='saved-news__title'>
            Elise, you have 5 saved articles
          </h1>
          <p className='saved-news__keywords'>
            By keywords:{' '}
            <span className='saved-news__keywords_span'>
              Nature, Yellowstone, and 2 other
            </span>
          </p>
        </div>

        <SavedArticles>
          <CardsList />
        </SavedArticles>
        <Footer />
      </div>
    </>
  );
}

export default SavedNewsPage;
