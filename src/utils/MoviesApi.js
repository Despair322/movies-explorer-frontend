const { REACT_APP_MOVIE_API_URL = 'https://api.nomoreparties.co/beatfilm-movies' } = process.env;

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

    getMovies() {
        return fetch(`${this._options.baseUrl}`, {
            headers: this._options.headers,
            credentials: this._options.credentials,
        })
            .then(this._checkResponse);
    }
}

export const moviesApi = new Api({
    baseUrl: REACT_APP_MOVIE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});