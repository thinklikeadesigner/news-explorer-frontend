


import React, { useLayoutEffect, useState } from 'react';
import Card from '../Card/Card';
import NewsCard from '../Card/NewsCard';

import './CardsList.css';

export function NewsCardsList(props) {
console.log('cards are saved',props.savedCards)

  return (
    <>
     
      <section className='cards'>
        <ul className='cards__list'>
          {props.savedCards ? props.savedCards.map((card, index) => {
              console.log('card id is ', card._id)
                return (
                  <NewsCard
                    key={index}
                    keyword={card.keyword}
                    title={card.title}
                    text={card.text}
                    date={card.date}
                    source={card.source}
                    image={card.link}
                    image={card.image}
                    loggedIn={props.loggedIn}
                    cardId={card._id}
                    onDelete={props.onChange}
                  />
                );
              }) : null}
        </ul>

      </section>
    </>
  );
}
