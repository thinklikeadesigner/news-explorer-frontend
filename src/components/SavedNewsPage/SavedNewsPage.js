
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../../utils/hooks/mediaquery';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigator } from '../Navigator/Navigator';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {
  headerBgWhite,
  headerTitleBlack,
  hamburgerBlack,
} from '../../utils/constants/constants.js';
import './SavedNewsPage.css';
import * as articles from '../../utils/MainApi';
import {CardsList } from '../CardsList/CardsList';
import {NewsCardsList } from '../CardsList/NewsCardsList';
import { SavedArticles } from '../SavedArticles/SavedArticles';

function SavedNewsPage(props) {
  const currentUser = React.useContext(CurrentUserContext)
  const isMobile = useMediaQuery('(max-width: 750px)');
  const isTable = useMediaQuery('(max-width: 1140px)');
  const [savedCards, setSavedCards] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  
  function handleChange(cardID) {
    console.log('handleee')
    const newCards = savedCards.filter((c) =>  c._id !== cardID );
    setSavedCards(newCards)

}
  useEffect(() => {
    setIsSaved(true);
    articles.getSavedArticles()
        .then(res => {
          console.log("get saved articles", res)
            setSavedCards(res)
            console.log('savedcards', savedCards)
            
        })
        .catch(err => console.log(err))

}, [])

console.log(currentUser)

  return (
    <>
      <div className={`saved-news`}>
        {isMobile ? (
          <>
            <Header headerTitle={headerTitleBlack} headerBg={headerBgWhite}>
              <button
                onClick={props.onNavBarClick}
                className={`header__icon ${hamburgerBlack}`}
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
          <Header headerTitle={headerTitleBlack} headerBg={headerBgWhite}>
            <Link
              onClick={props.onHomeClick}
              to='/main'
              className={`header__home header__home_black`}
            >
              Home
            </Link>
            <p
              className={`header__saved-articles header__saved-articles_underlined`}
            >
              Saved articles
            </p>
            <button
              onClick={props.onLogOut}
              className={`header__button header__button_black`}
            >
            {currentUser.name}
              <div className={`header__icon header__icon_black`}></div>
            </button>
          </Header>
        )}

        <div className='saved-news__intro'>
          <p className='saved-news__subtitle'>Saved articles</p>
          <h1 className='saved-news__title'>
           {currentUser.name}, you have 5 saved articles
          </h1>
          <p className='saved-news__keywords'>
            By keywords:{' '}
            <span className='saved-news__keywords_span'>
              Nature, Yellowstone, and 2 other
            </span>
          </p>
        </div>

        <SavedArticles>
          {/* <CardsList loggedIn={props.loggedIn} savedCards={savedCards} isSaved={isSaved}/> */}
  <NewsCardsList     onChange={handleChange} loggedIn={props.loggedIn} savedCards={savedCards} isSaved={isSaved}/>
        </SavedArticles>
        <Footer />
      </div>
    </>
  );
}

export default SavedNewsPage;
