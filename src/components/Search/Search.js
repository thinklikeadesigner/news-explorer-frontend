
import React from 'react';
import Card from '../Card/Card';
import { CardsList } from '../CardsList/CardsList';


import './Search.css';



export function Search(props) { 
  

  return (
    <>
    <div className={`search
    `}>
<h2 className="search__title">Search results</h2>
<CardsList />
<button className="search__show">Show more</button>
</div>
</>

);}

