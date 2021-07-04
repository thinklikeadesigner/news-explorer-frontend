import React, { useState } from 'react';
import { Header } from '../Header/Header';
import './SearchForm.css';

function SearchForm(props) {
  const [keyword, setKeyword] = useState('');
  const [keywordValid, setKeywordValid] = useState(true);
  const searchField = document.querySelector('.search-bar__input');

  function onSearchChange(e) {
    setKeyword(e.target.value);
    if (keyword !== '') {
      setKeywordValid(true);
      document.querySelector('.search-bar__button').disabled = false;
    }
  }
  function disableSearch() {
    searchField.style.pointerEvents = 'none';
    searchField.disabled = true;
  }
  function enableSearch() {
    searchField.style.pointerEvents = 'auto';
    searchField.disabled = false;
  }
  function submission(e) {
    e.preventDefault();
    disableSearch();
    if (!keyword) {
      enableSearch();
      return;
    }
    props.onSearch(keyword);
    setTimeout(enableSearch, 1000);
    setKeyword('')
  
  }

  return (
    <>
      <section className='search-form'>
        <div className='search-form_container'>
          <h1 className='search-form__title'>What's going on in the world?</h1>
          <p className='search-form__subtitle'>
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <div className='search-bar__container'>
            <form className='search-bar__form' onSubmit={submission}>
              <input
                onChange={onSearchChange}
                onFocus={() => setKeywordValid(false)}
                className='search-bar__input'
                placeholder='Enter topic'
                value={keyword}
              />

              <button
                className={`search-bar__button ${
                  keywordValid ? '' : 'search-bar__button_disabled'
                }`}
                type='submit'
                disabled
              >
                Search
              </button>
            </form>
            <span
              className={`form__input-error ${
                keywordValid ? '' : 'form__input-error_visible'
              }`}
              id='name-input-error'
            >
              Please enter a keyword
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchForm;
