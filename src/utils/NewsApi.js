


import {newsApi} from '../utils/constants/constants';

// MAKEME weed out the necessary api calls

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject('Error!' + res.statusText);
  }
}




const   baseUrl = process.env.NODE_ENV === 'production' ? "https://nomoreparties.co/news/v2/everything" : "https://newsapi.org/v2/everything";

export const search = (keyword) => {

  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  return fetch( baseUrl
     + '?q=' + keyword  + '&from=' + lastWeek +  '&to=' + today + '&' + 'sortBy=popularity'
   + '&pageSize=100&apiKey=' + newsApi, {
  }
  ).then((res) => checkResponse(res)).then((res) => res.articles);
  };
  


