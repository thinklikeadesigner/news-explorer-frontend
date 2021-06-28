import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import TrashCan  from '../Delete/Delete.js';
// import Save  from '../Save/Save.js';
import './card.css';
import CardButton from './CardButton/CardButton';

function Card(props) {
  
  function formatDate() {
    let articleDate = props.card.publishedAt;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let noTime = articleDate.slice(0, 10);
    let date = new Date(noTime);
    let formattedDate = `${months[date.getMonth()]} ${date.getDate()},  ${date.getFullYear()}`;
    return formattedDate
  }

  return (
    
    <li className='card'>
      <div className='card__top-left_container'>
        <div className='card__tag_container'>
          <p className='card__tag_text'>{props.keyword}</p>
        </div>
      </div>
      <div className='card__top-right_container'>
<CardButton 
  //  cards={props.cards}
isSaved={props.isSaved} 
loggedIn={props.loggedIn}
buttonType={props.buttonType}
/>

      </div>
      <img
        // TEST this is a test link
        // src='https://static.toiimg.com/photo/72975551.cms'
        src={props.card.urlToImage}
        className='card__pic'
        
        // alt={props.card.name}
        alt={'test card'}
      />
      <div className='card__text'>
        <p className='card__date'>
          {formatDate()}
          
          </p>
        <h2 className='card__title'>
          {props.card.title}
          
        </h2>
        <p className='card__paragraph'>
          {props.card.description}
        </p>
        <p className='card__source'>
          {props.card.source.name}
          </p>
        {/* <div className=''>
          <button
            aria-label='Like Button'
            onClick={handleLikeClick}
            // className={`${cardLikeButtonClassName}`}
          ></button>
          <p className=''>{
          //  props.card.likes?.length
          
          }</p>
        </div> */}
      </div>
    </li>
     
  );
}

export default Card;
