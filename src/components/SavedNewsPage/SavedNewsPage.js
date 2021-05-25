import React from 'react';
import { Header } from '../Header/Header';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SavedNewsPage.css';


function SavedNewsPage() {
  return (
      <>
      <div className="saved-news">
      <Header headerTitleBlack="header__title_black" headerSavedArticlesBlack="header__saved-articles_black" headerButtonBlack="header__button_black" headerIconSaved="header__icon_saved" homeSaved="header__home_saved">
      <p className={`header__saved-articles header__saved-articles_black`}>Saved articles</p>
      <button className={`header__button header__button_black`}>Elise
<div className={`header__icon header__icon_black`}></div> 
</button>
      </Header>
    <div className="saved-news__intro">
    <p className="saved-news__subtitle">Saved articles</p>
    <h1 className="saved-news__title">Elise, you have 5 saved articles</h1>
    <p className="saved-news__keywords">By keywords: <span className='saved-news__keywords_span'>Nature, Yellowstone, and 2 other</span></p>
  </div>
  </div>
  </>
  );
}

export default SavedNewsPage;


