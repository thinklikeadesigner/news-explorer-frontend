import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../../utils/hooks/mediaquery';
import Card from '../Card/Card';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigator } from '../Navigator/Navigator';
import { Link } from "react-router-dom";

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
  console.log('saved is loggedin', props.loggedIn);
  console.log('cardslist 2', props.isSaved);

  return (
    <>
      <div className={`saved-news`}>
        {isMobile ? (
//             <Navigator
//             isOpen={props.isOpen}
//             onNavBarClick={props.onNavBarClick}
//               onSignIn={props.onSignIn}
//             >
//               <Header headerTitle={props.isOpen ? headerTitleWhite : headerTitleBlack} headerBg={props.isOpen ? headerBgBlack : headerBgWhite} >
// <button onClick={props.onNavBarClick} className={`header__icon ${props.isOpen ?   'header__icon_x' : hamburgerBlack}`}></button> 
//     </Header>
//     <div></div>
//             </Navigator>
<>
<Header headerTitle={headerTitleBlack} headerBg={headerBgWhite} >
<button onClick={props.onNavBarClick} className={`header__icon ${ hamburgerBlack}`}></button> 
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
>

</Navigator>
</>
        ) : (
          <Header headerTitle={headerTitleBlack} headerBg={headerBgWhite}>
            <Link onClick={props.onHomeClick} to='/main'
             className={`header__home header__home_black`}>Home</Link>
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
          <CardsList isSaved={props.isSaved} />
        </SavedArticles>
        <Footer />
      </div>
    </>
  );
}

export default SavedNewsPage;
