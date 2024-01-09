import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { moviesStorage } from "../../utils/LocalStorage";

import React, { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import { movieFilter } from '../../utils/MovieFilter';

export default function Movies() {

    const [savedMovies, setSavedMovies] = useState([]);
    const [filtredSavedMovies, setFiltredSavedMovies] = useState([])
    const [preloaderIsActive, setPreloaderIsActive] = useState(false)
    const [savedMoviesQuery, setSavedMoviesQuery] = useState('');
    const [savedMoviesShort, setSavedMoviesShort] = useState(false);

    function setSavedMoviesStatus(movies) {
        return movies.map(movie => ({ ...movie, status: 'delete' }));
    }

    useEffect(() => {
        mainApi.getMovies()
            .then((movies) => {
                const moviesWithStatus = setSavedMoviesStatus(movies);
                setSavedMovies(moviesWithStatus);
                setFiltredSavedMovies(moviesWithStatus);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        setFiltredSavedMovies(movieFilter(savedMovies,
            { query: savedMoviesQuery, short: savedMoviesShort }));

    }, [savedMoviesQuery, savedMoviesShort])


    async function handleSearch(data) {
        setPreloaderIsActive(true);
        setSavedMoviesQuery(data);
        setPreloaderIsActive(false);
        //     .then(moviesFromApi => {
        //         setSavedMovies(setSavedMoviesStatus(
        //             movieFilter(moviesFromApi, { query: savedMoviesQuery.get(), short: savedMoviesShort.get() })
        //         ))
        //     })
        //     .catch(err => console.log(err))
        //     .finally(() => { setPreloaderIsActive(false) });
        // savedMoviesQuery.set(data || '');
    }

    async function handleShortChange(state) {
        const shortStatus = state ? state === 'false' ? false : true : false;
        setSavedMoviesShort(shortStatus);
    }

    async function handleDelete(movie) {
        mainApi.deleteMovie(movie._id)
            .then(res => {
                setSavedMovies(savedMovies.filter(tempMovie =>
                    movie.movieId !== tempMovie.movieId
                ))
                const moviesFromStorage = JSON.parse(moviesStorage.get())
                moviesStorage.set(JSON.stringify(moviesFromStorage.map(item => {
                    if (item.movieId === movie.movieId)
                        item.status = 'unlike'
                    return item;
                })))

            })
            .catch(err => console.error(err))
    }

    return (
        <main className='saved-movies'>
            <SearchForm onSearch={handleSearch}
                query={''}
                short={savedMoviesShort}
                onShort={handleShortChange}
            />
            <MoviesCardList movies={filtredSavedMovies}
                onLike={handleDelete} preloaderIsActive={preloaderIsActive} 
                freshStart={!savedMovies || savedMovies.length === 0 } freshStartText={"Нет сохраненных фильмов"}/>
            <div className='saved-movies__devider'></div>
        </main>
    )
}
