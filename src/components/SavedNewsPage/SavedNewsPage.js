import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '../../utils/hooks/mediaquery';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigator } from '../Navigator/Navigator';
import { Link } from 'react-router-dom';
import * as saveApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {
  headerBgWhite,
  headerTitleBlack,
  hamburgerBlack,
} from '../../utils/constants/constants.js';
import './SavedNewsPage.css';
import * as articles from '../../utils/MainApi';
import { CardsList } from '../CardsList/CardsList';
import { NewsCardsList } from '../CardsList/NewsCardsList';
import { SavedArticles } from '../SavedArticles/SavedArticles';

function SavedNewsPage(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isMobile = useMediaQuery('(max-width: 750px)');
  const isTable = useMediaQuery('(max-width: 1140px)');
  const [savedCards, setSavedCards] = useState([]);
  const [length, setLength] = useState(0);

let cardsLength = 0;
  useEffect(() => {

    saveApi
      .getSavedArticles()
      .then((res) => {
        setSavedCards(res);
    setLength(res.length);
      })
      .catch((err) => console.log(err));
  }, [length]);

  function getKeywords() {
    let keywords = [];
    savedCards.forEach((card) => {
      keywords.push(card.keyword);
    });

    function sortByOccurance(arr) {
      let frequency = {};

      arr.forEach((value) => {
        frequency[value] = 0;
      });
      var uniques = arr.filter((value) => {
        return ++frequency[value] === 1;
      });
      return uniques.sort((a, b) => {
        return frequency[b] - frequency[a];
      });
    }
    const keywordsList = sortByOccurance(keywords);
    const keywordsDisplay = keywordsList.join(', ');
    if (keywordsList.length <= 3) {
      return keywordsDisplay;
    }
    const keywordCut = keywordsList.slice(0, 2);
    const display =
      keywordCut.join(', ') + `, and ${keywordsList.length - 2} others`;
    return display;
  }

  function handleChange(cardID) {
    const newCards = savedCards.filter((c) => c._id !== cardID);
    setSavedCards(newCards);
    setLength(length - 1)
  }

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
            {currentUser.name}, you have {length} saved articles
          </h1>
          <p className='saved-news__keywords'>
            By keywords:{' '}
            <span className='saved-news__keywords_span'>{getKeywords()}</span>
          </p>
        </div>

        <SavedArticles>
          <NewsCardsList
            loggedIn={true}
            savedCards={savedCards}
            onChange={handleChange}
          />
        </SavedArticles>
        <Footer />
      </div>
    </>
  );
}

export default SavedNewsPage;
