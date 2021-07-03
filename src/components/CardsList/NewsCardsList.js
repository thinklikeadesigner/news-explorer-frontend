


import React, { useLayoutEffect, useState } from 'react';
import Card from '../Card/Card';
import NewsCard from '../Card/NewsCard';

import './CardsList.css';

export function NewsCardsList(props) {
  const [displayedCards, setDisplayedCards] = useState([]);
//   const [savedCards, setSavedCards] = useState([]);

  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [count, setCount] = useState(3);

//   useLayoutEffect(() => {
//       setDisplayedCards(props.cards?.slice(0, count));
//       if (props.cards?.length < count) {
//         setIsButtonVisible(false);
//       } else {
//         setIsButtonVisible(true);
//       }

//   }, [count]);

//   console.log('cards  ', props.savedCards);


//   function handleDelete(cardID) {
//     console.log('new cards', cardID)
//     const newCards = props.savedCards.filter((c) =>  c._id !== cardID );
//     props.setSavedCards(newCards)
//     console.log('new cards', newCards)
  
//   }
  
// console.log('aaaaaaa', props.savedCards)

  return (
    <>
      <section className='cards'>
        <ul className='cards__list'>
          { props.savedCards?.map((card, index) => {
              console.log('card id is ', card._id)
                return (
                  <NewsCard
                    key={index}
                    keyword={card.keyword}
                    buttonType={'card__save-btn'}
                    onDelete={props.onChange}
                    title={card.title}
                    text={card.text}
                    date={card.date}
                    cardId={card._id}
                    source={card.source}
                    image={card.link}
                    image={card.image}
                    loggedIn={props.loggedIn}
                    isSaved={props.isSaved}
                  />
                );
              })}
        </ul>

      </section>
    </>
  );
}
