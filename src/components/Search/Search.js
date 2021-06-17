
import React, { Children } from 'react';
import Card from '../Card/Card';
import { CardsList } from '../CardsList/CardsList';


import './Search.css';



export function Search(props) { 
  
  console.log('search', props.isSaved);

  return (
    <>
<section className="search">
{props.children}

<CardsList isSaved={props.isSaved} />
<button className="search__show">Show more</button>
{/* </div> */}
</section>
</>

);}

