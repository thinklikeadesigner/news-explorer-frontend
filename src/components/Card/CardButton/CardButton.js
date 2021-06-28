import React, { useState } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import '../../Card/card.css';

function CardButton(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {isShown && (
        <div className='card__hoverbox'>
          <p className='card__hoverbox-text'>
            {props.isSaved ? 'Remove from saved' : 'Sign in to save articles'}
          </p>
        </div>
      )}
      <div className='card___container'></div>
      <div className='card__icon-text_container'>
        <button
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={props.buttonType}
        />
      </div>
    </>
  );
}

export default CardButton;
