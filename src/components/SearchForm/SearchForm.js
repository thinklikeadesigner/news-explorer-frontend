import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import './SearchForm.css';


function SearchForm() {
  return (
    // <li className={``}>
    <div className='search-form'>
      <div className='search-form_pic search-form_pic' >
          
      <Header>

      <button className={`header__button `}>Sign in
{/* <div className={`header__icon`}></div>  */}
</button>
      </Header>

      {/* <div className="middle-hero"><h1 className='hero__title'>What's going on in the world?</h1></div> */}
          
      </div>
  
    </div>
  );
}

export default SearchForm;
