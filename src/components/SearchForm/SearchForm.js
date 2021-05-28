import React from 'react';
import { Header } from '../Header/Header';
import './SearchForm.css';


function SearchForm() {
  return (
      <>

<div className="search-bar">    
<input className='search-bar__input search-form__input_text' placeholder='Enter topic' />
<button className='search-bar__button' type='submit'>Search</button>
</div>

  </>
  );
}

export default SearchForm;
