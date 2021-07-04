


import {newsApi} from '../utils/constants/constants';



function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject('Error!' + res.statusText);
  }
}
const API_KEY = process.env.API_KEY;
// const api = process.env.API_KEY;

// const baseUrl = 'https://newsapi.org/v2/everything';
const baseUrl = 'https://nomoreparties.co/news/v2/everything';

export const search = (keyword) => {

  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  return fetch( baseUrl
     + '?q=' + keyword  + '&from=' + lastWeek +  '&to=' + today + '&' + 'sortBy=popularity'
   + '&pageSize=100&apiKey=' + API_KEY, {
  }
  ).then((res) => checkResponse(res)).then((res) => res.articles);
  };

