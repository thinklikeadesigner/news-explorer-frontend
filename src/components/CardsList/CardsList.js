
import React from 'react';
import Card from '../Card/Card';


import './CardsList.css';



export function CardsList(props) { 
  

  return (
    <>

<section className='cards'>


          <ul className='cards__list'>
   
              <Card
          
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                // card={card}
              />
              <Card
          
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                // card={card}
              />
              <Card
          
                // key={card._id}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                onCardClick={props.onCardClick}
                // card={card}
              />

             
      
     
          </ul>
        </section>

</>

);}

