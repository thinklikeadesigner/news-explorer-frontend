
import React from 'react';
import { Header } from '../Header/Header';
import './Navigator.css';
import '../SavedNewsPage/SavedNewsPage.css';
export function Navigator(props) { 
  
  

  
  return (
    <>
    <div className="navigator">
    <Header headerTitleBlack="" >
    {/* <p className={`header__home`}>Home</p> */}
    {/* <p className={`header__saved-articles header__saved-articles_black`}>Saved articles</p> */}
    {/* <button className={`header__button header__button_black`}>Elise */}
{/* <div className={`header__icon`}></div>  */}
<div className={`header__icon`}></div> 
{/* </button> */}
    </Header>
  <div className="navigator__drawer">
  <div className="navigator__links">

    
    
  <p className={`header__home header__home_navigator`}>Home</p>
  <button className={`header__button`}>Sign in

</button>


</div>

  {/* <p className="saved-news__subtitle">Saved articles</p> */}
  {/* <h1 className="saved-news__title">Elise, you have 5 saved articles</h1> */}
  {/* <p className="saved-news__keywords">By keywords: <span className='saved-news__keywords_span'>Nature, Yellowstone, and 2 other</span></p> */}
</div>
</div>
</>

);}

