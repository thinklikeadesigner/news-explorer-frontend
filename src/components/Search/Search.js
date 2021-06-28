import React, { Children } from 'react';
import Card from '../Card/Card';
import { CardsList } from '../CardsList/CardsList';

import './Search.css';

export function Search(props) {
  return (
    <>
      <section className='search'>
        <div className='search__container'>{props.children}</div>
      </section>
    </>
  );
}
