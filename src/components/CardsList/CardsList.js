
import React from 'react';
import Card from '../Card/Card';


import './CardsList.css';



export function CardsList(props) { 
  
  // console.log('cardslist 1 ', props.isSaved);
  return (
    <>

<section className='cards'>


          <ul className='cards__list'>
   
              <Card
              loggedIn={props.loggedIn}
        isSaved={props.isSaved}
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                buttonType={props.buttonType}
                // card={card}
              />
              <Card
              loggedIn={props.loggedIn}
               isSaved={props.isSaved}
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                buttonType={props.buttonType}
                // card={card}
              />
              <Card
              loggedIn={props.loggedIn}
               isSaved={props.isSaved}
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                buttonType={props.buttonType}
                // card={card}
              />
                <Card
              loggedIn={props.loggedIn}
               isSaved={props.isSaved}
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                buttonType={props.buttonType}
                // card={card}
              />
                <Card
              loggedIn={props.loggedIn}
               isSaved={props.isSaved}
               buttonType={props.buttonType}
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                // card={card}
              />
                <Card
              loggedIn={props.loggedIn}
               isSaved={props.isSaved}
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                buttonType={props.buttonType}
                // card={card}
              />

             
      
     
          </ul>
        </section>

</>

);}

