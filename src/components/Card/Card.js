import React, { useState } from 'react';
import * as saveApi from '../../utils/MainApi';
import { useMediaQuery } from '../../utils/hooks/mediaquery'; 
import './card.css';

function Card(props) {
  const [cardId, setCardId] = useState('');
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [isShown, setIsShown] = useState(false);
  // const [isSaved, setIsSaved] = useState(false);
  const isMobile = useMediaQuery('(max-width: 750px)');



  function handleSaveClick(e) {
    console.log(cardId);
    e.preventDefault();
    if (isCardSaved) {
      
        saveApi
          .removeArticle(cardId)
          .then(() => {
            setIsCardSaved(false);
          })
          .catch((err) => console.log(err));
      
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
      {/* <div className='card__top-left_container'>
        <div className='card__tag_container'>
          <p className='card__tag_text'>{props.keyword}</p>
        </div>
      </div> */}
      <div className='card__top-right_container'>
        {isShown && !props.loggedIn && !isMobile && (
          <div className='card__hoverbox'>
            <p className='card__hoverbox-text'>Sign in to save articles</p>
          </div>
        )}
        <div className='card___container'></div>
        <div
          className='card__icon-text_container'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <button
            className={`card__save-btn ${
              isCardSaved ? 'card__save-btn_saved' : null
            }`}
            onClick={handleSaveClick}
            disabled={!props.loggedIn}
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
