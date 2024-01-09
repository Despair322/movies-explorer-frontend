// require('dotenv').config()
const { REACT_APP_API_URL = 'https://api.movie-explorer.dymov.nomoredomainsmonster.ru' } = process.env;

function checkResponse(res) {
    return res.ok ? res.json() : res.json()
        .then((err) => Promise.reject({ error: err, status: res.status }))
}

export const register = ({ password, email, name }) => {
    return fetch(`${REACT_APP_API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email, name })
    })
        .then(res => checkResponse(res))
};

export const authorize = ({ email, password }) => {
    return fetch(`${REACT_APP_API_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => checkResponse(res))
        .then((data) => {
            console.log(data);
        })
};

export const logout = () => {
    return fetch(`${REACT_APP_API_URL}/signout`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => checkResponse(res))
}

export const checkToken = () => {
    return fetch(`${REACT_APP_API_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => checkResponse(res))
};