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

  // const currentUser = React.useContext(CurrentUserContext);

  // const isOwn = props.card.owner === currentUser._id;

  // const cardDeleteButtonClassName = `card__delete-btn ${
  //   isOwn ? "card_show-delete-btn card_show-delete-btn" : "card__delete-btn"
  // }`;

  // const isLiked = props.card.likes?.some((i) =>
  //  i._id === currentUser.id
  // );

  // const cardLikeButtonClassName = `card__heart ${
  //   isLiked ? " card__heart_active" : "card__heart"
  // }`;

  const [isShown, setIsShown] = useState(false);
  
console.log('cardbutton', props.isSaved);
  return (
    <>
           {isShown &&  <div className='card__hoverbox'> 
        <p className='card__hoverbox-text'>
       { props.isSaved?
            'Remove from saved' : 'Sign in to save articles' }
        
        </p>
        </div>
        }
     <div className='card___container'>

        </div>
        <div className='card__icon-text_container'>
        <button 
         onMouseEnter={() => setIsShown(true)}
         onMouseLeave={() => setIsShown(false)}
        className={props.buttonType
         } /> 
        </div>
        </>
     
  );
}

export default CardButton;
