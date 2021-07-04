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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGQxZGFjMjEwNjExMGFjYzM5YzlkZSIsImlhdCI6MTYyNTM1OTUzNywiZXhwIjoxNjI1OTY0MzM3fQ.vg0N5pdo2evP7d4u3kubbwr_DLf4vjs28aL0mzufKB4`,
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGQxZGFjMjEwNjExMGFjYzM5YzlkZSIsImlhdCI6MTYyNTM1OTUzNywiZXhwIjoxNjI1OTY0MzM3fQ.vg0N5pdo2evP7d4u3kubbwr_DLf4vjs28aL0mzufKB4`,
    },
  }).then((res) => checkResponse(res));
}
export function removeArticle(articleId) {
  return fetch(baseUrl + `/articles/` + articleId, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGQxZGFjMjEwNjExMGFjYzM5YzlkZSIsImlhdCI6MTYyNTM1OTUzNywiZXhwIjoxNjI1OTY0MzM3fQ.vg0N5pdo2evP7d4u3kubbwr_DLf4vjs28aL0mzufKB4`,
    },
    method: 'DELETE',
  }).then((res) => {
    console.log('response', res);
    checkResponse(res);
  });
}
