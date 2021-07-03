const baseUrl = 'http://localhost:3000';

function checkResponse(res) {
  if (res.ok) {
    console.log('res');
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
  return fetch(baseUrl + '/articles', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGQxZGFjMjEwNjExMGFjYzM5YzlkZSIsImlhdCI6MTYyNTI1NTY2MywiZXhwIjoxNjI1ODYwNDYzfQ.aWpXvzFjocTOCO7JNm37gH2QzN6SKA1lrNjr7n6F-VY`,
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
    console.log('what is res', res);
    if (res.ok) {
      console.log('res');
      return res.json();
    } else {
      Promise.reject('Error!' + res.statusText);
    }
  });
}

export function getSavedArticles() {
  return fetch(baseUrl + '/articles', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }).then((res) => checkResponse(res));
}
export function removeArticle(articleId) {
  return fetch(baseUrl + `/articles/` + articleId, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'DELETE',
  }).then((res) => {
    console.log('response', res);
    checkResponse(res);
  });
}
