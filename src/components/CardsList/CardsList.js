
import React, { useLayoutEffect, useState } from 'react';
import Card from '../Card/Card';


import './CardsList.css';



export function CardsList(props) { 
  const [displayedCards, setDisplayedCards] = useState([]);
  // const initialCount = 3;

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [count, setCount] = useState(3);
  
  
  useLayoutEffect(() => {
    let cardArray = props.cards;
    console.log('waaaat', cardArray);
    if(props.isSaved){
        setIsButtonVisible(false);
        setCount(cardArray.length);
    }
    else{
    setDisplayedCards(cardArray.slice(0, count));
    if (cardArray.length < count) {
        setIsButtonVisible(false)
    } else { setIsButtonVisible(true) }}
   
}, [count])

console.log('cards  ', displayedCards);

  return (
    <>

<section className='cards'>


          <ul className='cards__list'>
          {displayedCards.map((card, index) => {
            return       <Card
            buttonType={props.buttonType}
              //  cards={cardArray}
               keyword={props.keyword}
            loggedIn={props.loggedIn}
      isSaved={props.isSaved}
              key={index}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              onCardClick={props.onCardClick}
              buttonType={props.buttonType}
              card={card}
            />
          })}
        
              {/* <Card
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
              /> */}

             
      
     
          </ul>
          <button className={`search__show 
          ${isButtonVisible ? '' : 'search__show_hidden'}` }     onClick={() => setCount(count + 5)}>Show more</button>
        </section>

</>

);}

