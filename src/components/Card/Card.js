

import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as saveApi from '../../utils/MainApi';
import './card.css';
import CardButton from './CardButton/CardButton';

function Card(props) {
  const [cardId, setCardId] = useState('');
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [isShown, setIsShown] = useState(false);
  // const [isSaved, setIsSaved] = useState(false);



function handleSaveClick(e) {
  e.preventDefault();

  if(isCardSaved) {
    if (props.cardId) {
      console.log(props.cardId)
      setCardId(props.cardId);
      // console.log('card', props.cardId)
      saveApi
        .removeArticle(props.cardId)
        .then(() => {
          setIsCardSaved(false)
         props.onCardDelete(props.cardId)
        })
        .catch((err) => console.log(err));
    }

  } else {
    saveApi
    .saveArticle({
      keyword: props.keyword,
      title: props.title,
      text: props.text,
      date: props.date,
      source: props.source,
      link: props.link,
      image: props.image,
    })
    .then((res) => {
      setCardId(res._id);
      setIsCardSaved(true);
    });

  }

  // setIsCardSaved(true);
  // console.log(isCardSaved);
  // if (props.loggedIn) {
    // if (!e.target.classList.contains('card__save-btn_saved')) {
    //   saveApi
    //     .saveArticle({
    //       keyword: props.keyword,
    //       title: props.title,
    //       text: props.text,
    //       date: props.date,
    //       source: props.source,
    //       link: props.link,
    //       image: props.image,
    //     })
    //     .then((res) => {
    //       setCardId(res._id);
    //       // setIsCardSaved(true);
    //     });
    //   }
      
    // if (e.target.classList.contains('card__save-btn_saved')) {
    //   setIsSaved(false);
    //   saveApi
    //     .removeArticle(cardId)
    //     .then(() => {
    //       e.target.classList.remove('card__save-btn_saved');
    //     })
    //     .catch((err) => console.log(err));
    // }
  // }
  // return;
}



function handleDelete(cardID) {
  console.log('new cards', cardID)
  // const newCards = props.savedCards.filter((c) =>  c._id !== cardID );
  // props.setSavedCards(newCards)
  // console.log('new cards', newCards)

}


function handleRemoveClick() {
  console.log('remove')
  if (props.cardId) {
    console.log(props.cardId)
    setCardId(props.cardId);
    console.log(props.cardId)
    saveApi
      .removeArticle(props.cardId)
      .then(() => {
       props.onCardDelete(props.cardId)
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
      {isShown && !props.loggedIn && (
        <div className='card__hoverbox'>
          <p className='card__hoverbox-text'>
          'Sign in to save articles'
          </p>
        </div>
      )}
      <div className='card___container'></div>
      <div className='card__icon-text_container'>
<button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={`card__save-btn ${isCardSaved ? 'card__save-btn_saved' : null}`}
          onClick={handleDelete(props.cardId)}
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

export default Card;
