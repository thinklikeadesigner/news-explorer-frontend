// const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://morning-paper.students.nomoreparties.site';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    Promise.reject('Error!' + res.statusText);
  }
}

export function saveArticle({
  keyword,
  title,
  text,
  date,
  source,
  link,
  image,
}) {
  const token = localStorage.getItem('jwt');
  return fetch(baseUrl + '/articles', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject('Error!' + res.statusText);
    }
  });
}

export function getSavedArticles() {
  const token = localStorage.getItem('jwt');
  return fetch(baseUrl + '/articles', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
}

export function removeArticle(articleId) {
  const token = localStorage.getItem('jwt');
  return fetch(baseUrl + `/articles/` + articleId, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  }).then((res) => {
    checkResponse(res);
  });
}
