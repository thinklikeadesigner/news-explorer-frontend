
function checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject('Error!' + res.statusText);
    }
  }
  

export function    saveArticle({keyword, title, text, date, source, link}) {
        return fetch(this._baseUrl + '/articles', {
            headers: this._headers,
            method:"POST",
            body: JSON.stringify({
                keyword,
                title,
                text,
                date,
                source,
                link
            })  
        }).then((res) => checkResponse(res));
    }
    export function   getSavedArticles(){
        return fetch(this._baseUrl +'/articles',{
            headers: this._headers
        })
        .then((res) => checkResponse(res));
    }
    export function  removeArticle(articleId){
        return fetch(this._baseUrl + `/articles/` + articleId, {
            headers: this._headers,
            method: "DELETE"
        })
        .then((res) => checkResponse(res));
    }




