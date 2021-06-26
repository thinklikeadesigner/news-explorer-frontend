


// const apiKey = process.node.API_KEY;

// MAKEME weed out the necessary api calls

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject('Error!' + res.statusText);
  }
}



const baseUrl = 'https://newsapi.org/v2/everything';
// const   baseUrl =  "http://localhost:3000";
// const   baseUrl = process.env.NODE_ENV === 'production' ? "http://api.final-countdown.students.nomoreparties.site" : "http://localhost:3000";
export const search = (keyword) => {

  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  // return fetch( baseUrl + '?q=' + keyword  + '&from=' + lastWeek +  '&to=' + today + '&' + 'sortBy=popularity&apiKey=' + 'af2333dae49940699539bd20bbcb969a', {
  return fetch( 'https://www.boredapi.com/api/activity?type=education'
  //  {
    
  // headers: {
      // Accept: 'application/json',
      // 'Content-Type': 'application/json',
      // Authorization: 'af2333dae49940699539bd20bbcb969a',
    // },
  // }
  ).then((res) => checkResponse(res)).then((res) => res);
};


// https://newsapi.org/v2/everything?q=dog&from=2021-06-17T05:00:00.000Z&to=2021-06-24T23:53:26.089Z&sortBy=popularity&apiKey=af2333dae49940699539bd20bbcb969a

export const addCard = ({ name, link }) => {
  return fetch(baseUrl + '/cards', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'POST',
    body: JSON.stringify({
      name,
      link,
    }),
  }).then((res) => checkResponse(res));
};

export const removeCard = (cardId) => {
  return fetch(baseUrl + '/cards/' + cardId, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'DELETE',
  }).then((res) => checkResponse(res));
};

export const changeCardLikeStatus = (cardId, isLiked) => {
  let apiCall;

  if (isLiked) {
    apiCall = 'PUT';
  } else {
    apiCall = 'DELETE';
  }

  return fetch(baseUrl + '/cards/likes/' + cardId, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: apiCall,
  }).then((res) => checkResponse(res));
};

export const setUserInfo = ({ name, about }) => {
  return fetch(baseUrl + '/users/me', {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      name,
      about,
    }),
  }).then((res) => checkResponse(res));
};

export const setUserAvatar = ({ avatar }) => {
  return fetch(baseUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({ avatar }),
  }).then((res) => checkResponse(res));
};

// const api = new Api({
//   baseUrl: 'https://newsapi.org/v2/everything',
//   headers: {
//     authorization: 'af2333dae49940699539bd20bbcb969a',
//     'Content-Type': 'application/json',
//   },
// });

// export const search = ({ keyword }) => {
//   return fetch(
//     baseUrl + 'q=' + keyword + '&' + 'sortBy=popularity&' + 'apiKey=' + API_KEY
//   );
// };

// var url =
//   'https://newsapi.org/v2/everything?' +
//   'q=Apple&' +
//   'from=2021-06-24&' +
//   'sortBy=popularity&' +
//   'apiKey=af2333dae49940699539bd20bbcb969a';

// var req = new Request(url);

// fetch(req).then(function (response) {
//   console.log(response.json());
// });
