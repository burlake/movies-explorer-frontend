class Api {
    constructor(options) {
        this._url = options.baseUrl;
        // this._headers = options.headers;
        // this._authorization = options.headers.authorization;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
          .then(this._checkResponse)
      }

    getInfo(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                //authorization: this._authorization,
                "Authorization" : `Bearer ${token}`
            },
        }).then(this._checkResponse);
    }

    getCards(token) {
        return fetch(`${this._url}/cards`, {
            headers: {
                "Authorization" : `Bearer ${token}`
            },
        }).then(this._checkResponse);
    }

    setUserInfo(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        }).then(this._checkResponse);
    }

    setUserAvatar(data, token) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then(this._checkResponse);
    }

    addCard(data, token) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        }).then(this._checkResponse);
    }

    // changeLikeCardStatus(cardId, isLiked, token) {
    //     let method = 'DELETE';

    //     if (isLiked) {
    //         method = 'PUT';
    //     }
    //     return fetch(`${this._url}/cards/${cardId}/likes`, {
    //         method: method,
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }).then(this._checkResponse);
    // }

    deleteLike(cardId, token) {
        return this._request(`/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        })
      }
    
      addLike(cardId, token) {
        return this._request(`/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: {
            "Authorization" : `Bearer ${token}`
          }
        })
      }

    





    deleteCard(cardId, token) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(this._checkResponse);
    }
}

const api = new Api({
    baseUrl: "http://api.mesto1.nomoredomainsmonster.ru",
    // headers: {
    //     authorization: "ae20785e-e850-4452-960a-73f188fc9474",
    //     "Content-Type": "application/json",
    // },
});

export default api;
