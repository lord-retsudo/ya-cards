export default class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.token = options.headers.authorization;
  }

  getUserInfo() {

    const url = this.baseUrl + '/users/me';
    // можно лучше
    // headers можно было целиком сделать получаемым параметром, передавать в класс объект заголовка
    return fetch(url, {
      method: 'GET',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  getInitialCards() {

    const url = this.baseUrl + '/cards';

    return fetch(url, {
      method: 'GET',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  sendUserInfo(name, about) {

    const url = this.baseUrl + '/users/me';

    return fetch(url, {
      method: 'PATCH',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });

  }

  sendCard(name, link) {

    const url = this.baseUrl + '/cards';

    return fetch(url, {
      method: 'POST',
      headers: {
        authorization: this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(response => {
        if (response.ok) return response.json();
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

}


