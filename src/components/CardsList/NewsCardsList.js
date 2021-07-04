import React from 'react';
import NewsCard from '../Card/NewsCard';

import './CardsList.css';

export function NewsCardsList(props) {
  return (
    <>
      <h2 className='search__title'>Search results</h2>
      <section className='cards'>
        <ul className='cards__list'>
          {props.savedCards
            ? props.savedCards.map((card, index) => {
                return (
                  <NewsCard
                    key={index}
                    keyword={card.keyword}
                    title={card.title}
                    text={card.text}
                    date={card.date}
                    source={card.source}
                    link={card.link}
                    image={card.image}
                    loggedIn={props.loggedIn}
                    cardId={card._id}
                    onDelete={props.onChange}
                  />
                );
              })
            : null}
        </ul>
      </section>
    </>
  );
}
