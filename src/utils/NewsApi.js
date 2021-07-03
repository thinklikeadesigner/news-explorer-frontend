


import {newsApi} from '../utils/constants/constants';

// MAKEME weed out the necessary api calls

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject('Error!' + res.statusText);
  }
}

const api = process.env.API_KEY;

const baseUrl = 'https://newsapi.org/v2/everything';
// const   baseUrl =  "http://localhost:3000";
// const   baseUrl = process.env.NODE_ENV === 'production' ? "http://api.final-countdown.students.nomoreparties.site" : "http://localhost:3000";
export const search = (keyword) => {

  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  return fetch( baseUrl
     + '?q=' + keyword  + '&from=' + lastWeek +  '&to=' + today + '&' + 'sortBy=popularity'
   + '&pageSize=100&apiKey=' + newsApi, {
  }
  ).then((res) => checkResponse(res)).then((res) => res.articles);
  };
  // return fetch( 'https://datausa.io/api/data?drilldowns=Nation&measures=' + keyword
  //  {
    
  // headers: {
      // Accept: 'application/json',
      // 'Content-Type': 'application/json',
      // Authorization: 'af2333dae49940699539bd20bbcb969a',
    // },


// https://newsapi.org/v2/everything?q=dog&from=2021-06-17T05:00:00.000Z&to=2021-06-24T23:53:26.089Z&sortBy=popularity&apiKey=af2333dae49940699539bd20bbcb969a



