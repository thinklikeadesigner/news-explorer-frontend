import React from 'react';

import './NothingFound.css';

export function NothingFound(props) {
  //BUG for some reason the picture isnt showing

  return (
    <>
      <div
        className={`nothing-found
    `}
      >
        <div className='nothing-found__pic'></div>
        <h2 className='nothing-found__title'>{props.noResults && !props.resultError ? 'Nothing found' : 'Something went wrong'}</h2>
        <p className='nothing-found__subtitle'>
          {props.noResults && !props.resultError ? 'Sorry, but nothing matched your search terms.' : 'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.'}
        </p>
      </div>
    </>
  );
}
