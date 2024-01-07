class customLocalStorage {
    constructor(key) {
        this._key = key;
    }
    get() {
        return localStorage.getItem(this._key);
    }
    set(data) {
        localStorage.setItem(this._key, data)
    }
    remove() {
        localStorage.removeItem(this._key);
    }
}

export const moviesQuery = new customLocalStorage('moviesQuery');
export const moviesShort = new customLocalStorage('moviesShort');
export const savedMoviesQuery = new customLocalStorage('savedMoviesQuery');
export const savedMoviesShort = new customLocalStorage('savedMoviesShort');
export const loggedInStorage = new customLocalStorage('loggedIn');

export function eraseAll() {
    moviesQuery.remove()
    moviesShort.remove()
    savedMoviesQuery.remove()
    savedMoviesShort.remove()
    loggedInStorage.remove()
}