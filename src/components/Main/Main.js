import React, { useState } from "react";
// import Card from "./Card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { Footer } from "./Footer";
import { useHistory, Link } from "react-router-dom";
import { Header } from "../Header/Header";
import Card from '../Card/Card';
import About from '../About/About';
import './Main.css';
import { Footer } from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import SavedNewsPage from '../SavedNewsPage/SavedNewsPage';
import { Navigator } from '../Navigator/Navigator';

import {headerBgBlack, headerBgTransparent, headerBgWhite, headerTitleBlack, headerTitleWhite, hamburger, hamburgerBlack, hamburgerWhite, hiddenNavDrawer, showNavDrawer } from '../../utils/constants/constants.js';
import { useMediaQuery } from '../../utils/hooks/mediaquery';
import { NothingFound } from '../NothingFound/NothingFound';
import { Preloader } from '../Preloader/Preloader';
import { Results } from '../Results/Results';
import { Search } from '../Search/Search';

export function Main({
  onCardClick,
  onAddPlace,
  onEditProfile,
  onEditAvatar,
  cards,
  onCardLike,
  onCardDelete,
  onSignOut,
}) {
  const isMobile = useMediaQuery("(max-width: 750px)");
  const isTable = useMediaQuery("(max-width: 1140px)");
  const [isNavOpen, setIsNavOpen] = useState(false);

  // for white bg navigator, switch out <Navigator /> with the on below
  // <Navigator hamburger={hamburger} hiddenNavDrawer={hiddenNavDrawer} headerTitleBlack={headerTitleBlack} headerBgWhite={headerBgWhite} />

  // for transparent mobile header use this one
/* <Navigator hamburger={hamburger} hiddenNavDrawer={hiddenNavDrawer} headerTitleBlack={headerTitleBlack} headerBgWhite={headerBgWhite} /> */
  return (
    <>





      {/* <Navigator hamburgerColor={hamburgerWhite} NavDrawer={showNavDrawer} headerTitle={headerTitleWhite} headerBg={headerBgBlack} /> */}
      {/* <Navigator hamburgerColor={hamburgerBlack} NavDrawer={hiddenNavDrawer} headerTitle={headerTitleBlack} headerBg={headerBgWhite} /> */}
      {/* <Navigator hamburgerColor={hamburgerBlack} NavDrawer={hiddenNavDrawer} headerTitle={headerTitleBlack} headerBg={headerBgTransparent} /> */}
      <main className='main'>
      
     <div className="search-form_pic">
       
{isMobile?     <Header headerTitle={headerTitleWhite} headerBg={headerBgTransparent} >
<div className={`header__icon ${hamburgerWhite}`}></div> 
    </Header> :      <Header headerTitleBlack="header__title_black"  >
      <p className={`header__home `}>Home</p>
      <p className={`header__saved-articles `}>Saved articles</p>
      <button className={`header__button header__button_white`}>Elise
<div className={`header__icon `}></div> 
</button>
      </Header>}
     { isNavOpen?  <Navigator /> : null}
      <div className="search-form_container">

<h1 className="search-form__title">What's going on in the world?</h1>
<p className="search-form__subtitle">Find the latest news on any topic and save them in your personal account.</p>
<SearchForm />
    
      </div>

          </div>

<Results >
<Search />
  {/* <Preloader /> */}
  {/* <NothingFound /> */}
</Results>

        <About />
      <Footer />
      
      </main>
    </>
  );
}
