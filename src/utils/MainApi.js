const { REACT_APP_API_URL = 'https://api.movie-explorer.dymov.nomoredomainsmonster.ru' } = process.env;

class Api {
    constructor(options) {
        this._options = options;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._options.baseUrl}/users/me `, {
            headers: this._options.headers,
            credentials: this._options.credentials,
        })
            .then(this._checkResponse);
    }

    setUserInfo({ name, email }) {
        return fetch(`${this._options.baseUrl}/users/me `, {
            method: 'PATCH',
            body: JSON.stringify({ name, email }),
            credentials: this._options.credentials,
            headers: this._options.headers
        })
            .then(this._checkResponse);
    }

    createMovie(movie) {
        return fetch(`${this._options.baseUrl}/movies `, {
            method: 'POST',
            body: JSON.stringify(movie),
            credentials: this._options.credentials,
            headers: this._options.headers
        })
            .then(this._checkResponse);
    }

    deleteMovie(id) {
        return fetch(`${this._options.baseUrl}/movies/${id}`, {
            method: 'DELETE',
            credentials: this._options.credentials,
            headers: this._options.headers
        })
            .then(this._checkResponse);
    }

    getMovies() {
        return fetch(`${this._options.baseUrl}/movies `, {
            headers: this._options.headers,
            credentials: this._options.credentials,
        })
            .then(this._checkResponse);
    }
}

export const mainApi = new Api({
    baseUrl: REACT_APP_API_URL,
    credentials: 'include',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


