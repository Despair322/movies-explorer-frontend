import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { savedMoviesQuery, savedMoviesShort } from "../../utils/LocalStorage";
import React, { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { movieFilter } from '../../utils/MovieFilter';

export default function Movies() {

    const [savedMovies, setSavedMovies] = useState([]);
    const [preloaderIsActive, setPreloaderIsActive] = useState(false)

    function setSavedMoviesStatus(movies) {
        return movies.map(movie => ({ ...movie, status: 'delete' }));
    }

    useEffect(() => {
        handleSearch(savedMoviesQuery.get());
    }, [])

    async function handleSearch(data) {
        setPreloaderIsActive(true)
        mainApi.getMovies()
            .then(moviesFromApi => {
                setSavedMovies(setSavedMoviesStatus(
                    movieFilter(moviesFromApi, { query: savedMoviesQuery.get(), short: savedMoviesShort.get() })
                ))
            })
            .catch(err => console.log(err))
            .finally(() => { setPreloaderIsActive(false) });
        savedMoviesQuery.set(data);
    }

    async function handleDelete(movie) {
        mainApi.deleteMovie(movie._id)
            .then(res => {
                setSavedMovies(savedMovies.filter(tempMovie =>
                    movie !== tempMovie
                ))
            })
            .catch(err => console.error(err))
    }

    return (
        <main className='saved-movies'>
            <SearchForm onSearch={handleSearch}
                query={savedMoviesQuery.get()}
                short={savedMoviesShort} />
            <MoviesCardList movies={savedMovies}
                onLike={handleDelete} preloaderIsActive={preloaderIsActive} />
            <div className='saved-movies__devider'></div>
        </main>
    )
}
