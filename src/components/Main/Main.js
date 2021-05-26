import React from "react";
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
  const headerTitleBlack = 'header__title_black';
  const headerTitleWhite = '';
  const hamburger = 'header__icon_hamburger';
  const headerBgWhite= "header__container_white";
  const headerBgTransparent =  "header__container_transparent";
  const headerBgBlack =  "";
  const hiddenNavDrawer = 'navigator__drawer_hidden';
  const showNavDrawer = '';
  const hamburgerBlack = 'header__icon_hamburger-black';
  const hamburgerWhite = 'header__icon_hamburger-white';

  // for white bg navigator, switch out <Navigator /> with the on below
  // <Navigator hamburger={hamburger} hiddenNavDrawer={hiddenNavDrawer} headerTitleBlack={headerTitleBlack} headerBgWhite={headerBgWhite} />

  // for transparent mobile header use this one
{/* <Navigator hamburger={hamburger} hiddenNavDrawer={hiddenNavDrawer} headerTitleBlack={headerTitleBlack} headerBgWhite={headerBgWhite} /> */}
  return (
    <>

<SearchForm hiddenNavDrawer={hiddenNavDrawer} headerTitle={headerTitleWhite} headerBg={headerBgTransparent} />


      {/* <SavedNewsPage  headerTitle={headerTitleBlack} headerBg={headerBgWhite} /> */}
      {/* <Navigator hamburgerColor={hamburgerWhite} NavDrawer={showNavDrawer} headerTitle={headerTitleWhite} headerBg={headerBgBlack} /> */}
      {/* <Navigator hamburgerColor={hamburgerBlack} NavDrawer={hiddenNavDrawer} headerTitle={headerTitleBlack} headerBg={headerBgWhite} /> */}
      {/* <Navigator hamburgerColor={hamburgerBlack} NavDrawer={hiddenNavDrawer} headerTitle={headerTitleBlack} headerBg={headerBgTransparent} /> */}
      <main className='main'>
       
        <section className='cards'>
     <Card
          
          // key={card._id}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
          onCardClick={onCardClick}
          // card={card}
        />
          {/* <ul className='cards__list'>
            {cards.map((card) => (
              <Card
          
                key={card._id}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
                onCardClick={onCardClick}
                card={card}
              />
            ))}
          </ul> */}
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}
