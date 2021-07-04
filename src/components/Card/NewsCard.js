

import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as saveApi from '../../utils/MainApi';
import './card.css';
import CardButton from './CardButton/CardButton';

function NewsCard(props) {
  const [cardId, setCardId] = useState('');
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [isShown, setIsShown] = useState(false);



function handleRemoveClick(e) {
  e.preventDefault();
  if (props.cardId) {
    setCardId(props.cardId);
    saveApi
      .removeArticle(props.cardId)
      .then(() => {
        props.onDelete(props.cardId);
      })
      .catch((err) => console.log(err));
  }
}


  function formatDate() {
    let articleDate = props.date;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let noTime = articleDate?.slice(0, 10);
    let date = new Date(noTime);
    let formattedDate = `${
      months[date.getMonth()]
    } ${date.getDate()},  ${date.getFullYear()}`;
    return formattedDate;
  }

  

  return (
    <li className='card'>
      <div className='card__top-left_container'>
        <div className='card__tag_container'>
          <p className='card__tag_text'>{props.keyword}</p>
        </div>
      </div>
      <div className='card__top-right_container'>
      {isShown  && (
        <div className='card__hoverbox'>
          <p className='card__hoverbox-text'>
          Remove from saved
          </p>
        </div>
      )}
      <div className='card___container'></div>
      <div className='card__icon-text_container'
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
      >
<button

          className={`card__delete-btn`}
          onClick={handleRemoveClick}
          />

      </div>
      </div>
      <img
        // TEST this is a test link
        // src='https://static.toiimg.com/photo/72975551.cms'
        src={props.image}
        className='card__pic'
        // alt={props.name}
        alt={'test card'}
      />
      <div className='card__text'>
        <p className='card__date'>{formatDate()}</p>
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__paragraph'>{props.text}</p>
        <p className='card__source'>{props.source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
