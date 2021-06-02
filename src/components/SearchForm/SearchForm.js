import React from 'react';
import { Header } from '../Header/Header';
import './SearchForm.css';


function SearchForm() {
  return (
      <>





<div className='search-form_container'>
            <h1 className='search-form__title'>
              What's going on in the world?
            </h1>
            <p className='search-form__subtitle'>
              Find the latest news on any topic and save them in your personal
              account.
            </p>
            <div className="search-bar">    
<input className='search-bar__input search-form__input_text' placeholder='Enter topic' />
<button className='search-bar__button' type='submit'>Search</button>
</div>
            </div>
  </>
  );
}

export default SearchForm;
