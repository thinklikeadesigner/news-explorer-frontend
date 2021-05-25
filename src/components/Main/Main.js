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


  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>

{/* <SearchForm>

      </SearchForm>  */}
      {/* <SavedNewsPage /> */}
      <Navigator />
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
