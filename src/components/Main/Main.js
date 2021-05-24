import React from "react";
// import Card from "./Card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import { Footer } from "./Footer";
import { useHistory, Link } from "react-router-dom";
import { Header } from "../Header";
import Card from '../Card/Card';
import About from '../About/About';
import './Main.css';

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
      <Header headerlogout='header__container_log-out'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>{currentUser.email}</p>

          <Link
            style={{
              textDecoration: "none",
              color: "#A9A9A9",
              paddingLeft: 24,
            }}
            onClick={onSignOut}
            to='/login'
          >
            Log Out
          </Link>
        </div>
      </Header>
      <main className='main'>
       <About />
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
      </main>
      {/* <Footer /> */}
    </>
  );
}
