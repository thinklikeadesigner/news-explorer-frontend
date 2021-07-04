


import React, { useLayoutEffect, useState } from 'react';
import Card from '../Card/Card';

import './CardsList.css';

export function CardsList(props) {
  const [displayedCards, setDisplayedCards] = useState([]);

  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [count, setCount] = useState(3);

  useLayoutEffect(() => {
      setDisplayedCards(props.cards?.slice(0, count));
      if (props.cards?.length < count) {
        setIsButtonVisible(false);
      } else {
        setIsButtonVisible(true);
      }

  }, [count]);



  function handleDelete(cardID) {
    const newCards = props.savedCards.filter((c) =>  c._id !== cardID );
    props.setSavedCards(newCards)
  
  }
  

  return (
    <>
     <h2 className='search__title'>Search results</h2>
      <section className='cards'>
        <ul className='cards__list'>
          { displayedCards?.map((card, index) => {
                return (
                  <Card
                    key={index}
                    keyword={props.keyword}
                    buttonType={'card__save-btn'}
                    title={card.title}
                    text={card.description}
                    date={card.publishedAt}
                    source={card.source.name}
                    link={card.url}
                    image={card.urlToImage}
                    savedArticles={props.savedArticles}
                    onSignIn={props.onSignIn}
                    
                    loggedIn={props.loggedIn}
                    isSaved={props.isSaved}
                    onCardLike={props.onCardLike}
               
                  />
                );
              })}
        </ul>
{isButtonVisible && <button
          className={`search__show 
       `}
          onClick={() => setCount(count + 5)}
        >
          Show more
        </button>}
      </section>
    </>
  );
}
