import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './card.css';

function Card(props) {
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

  return (
    // <li className={``}>
    <div className='card'>
      <div className='card__top-left_container'>
        {' '}
        <div className='card__tag_container'>
          <p className='card__tag_text'>Nature</p>
        </div>{' '}
      </div>{' '}
      <div className='card__top-right_container'>
        {/* <div className='card__delete_container-text'> */}
          {/* <p className='card__delete_text'>Remove from saved</p> */}
          {/* <p className='card__delete_text'>Sign in to save articles</p> */}
        {/* </div>{' '} */}
        {/* <div className='card___container'>
          <button className='card__save-btn' />
        </div> */}
        <div className='card__icon-text_container'>
          <button className='card__delete-btn' />
        </div>
      </div>
      {/* </div> */}
      <img
        // TEST this is a test link
        src='https://static.toiimg.com/photo/72975551.cms'
        // src={props.card.link}
        className='card__pic'
        onClick={handleClick}
        // alt={props.card.name}
        alt={'test card'}
      />
      <div className='card__text'>
        <p className='card__date'>November 4, 2020</p>
        <h2 className='card__title'>
          {/* {props.card.name} */}
          Everyone Needs a Special 'Sit Spot' in Nature
        </h2>
        <p className='card__paragraph'>
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className='card__source'>treehugger</p>
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
      {/* </li> */}
    </div>
  );
}

export default Card;
