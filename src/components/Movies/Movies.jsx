import React, { useEffect, useState } from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { moviesQuery, moviesShort } from "../../utils/LocalStorage";
import { moviesApi } from '../../utils/MoviesApi'
import { useContainerQuery } from 'react-container-query';
import { mainApi } from '../../utils/MainApi';
import { movieProxy } from '../../utils/Proxy';
import { movieFilter } from '../../utils/MovieFilter';

const query = {
    'one': {
        maxWidth: 490,
    },
    'two': {
        minWidth: 491,
        maxWidth: 840,
    },
    'three': {
        minWidth: 841,
        maxWidth: 1040,
    },
    'four': {
        minWidth: 1041,
    },
};

const MyCustomWrapper = React.forwardRef((props, ref) => {
    return <div ref={ref} >{props.children}</div>
});

export default function Movies() {

    const [movies, setMovies] = useState([])
    const [params, containerRef] = useContainerQuery(query);
    const [preloaderIsActive, setPreloaderIsActive] = useState(false)
    const [outputRows, setOuputRows] = useState(0);

    useEffect(() => {
        const query = moviesQuery.get();
        if (query) {
            handleSearch(query);
        }
    }, [])

    function calculateOutput() {
        console.log(params);
        return params.one ? 5 + (2 * outputRows)
            : params.two ? 8 + (4 * outputRows)
                : params.three ? 12 + (3 * outputRows)
                    : 16 + (4 * outputRows);
    }

    async function handleSearch(data) {
        if (data) {
            setPreloaderIsActive(true);
            moviesApi.getMovies()
                .then(moviesFromApi => {
                    const filtredMovies = movieFilter(moviesFromApi,
                        { query: moviesQuery.get(), short: moviesShort.get() });
                    const proxyFiltredMovies = filtredMovies.map(movie => movieProxy(movie));

                    mainApi.getMovies()
                        .then(res => {
                            const likedIDs = res.map(movie => movie.movieId);
                            setMovies(proxyFiltredMovies.map(movie => {
                                const position = likedIDs.indexOf(movie.movieId);
                                const id = position !== -1 ? res[position]._id : undefined;
                                return ({
                                    ...movie,
                                    status: likedIDs.includes(movie.movieId) ? 'like' : 'unlike',
                                    id: id,
                                })
                            }))
                        })
                        .catch(err => {
                            // console.log('оч плохо');
                            setMovies(proxyFiltredMovies.map(movie => {
                                return ({
                                    ...movie,
                                    status: 'unlike',
                                    id: 0,
                                })}))
                                console.log(err)
                            })
                })
                        .catch(err => console.error(err))
                        .finally(() => { setPreloaderIsActive(false) })
                    moviesQuery.set(data);
                }
        else {
                        console.log('пустой запрос');
                    }
                    setOuputRows(0);
    }

        async function toggleLike(movie, setStatus) {
            if (movie.status === 'like') {
                handleDislike(movie.id)
                    .then(res => setStatus('unlike'))
            }
            else {
                handleLike(movie)
                    .then(res => {
                        movie.id = res._id
                        setStatus('like')
                    })
            }
        }

        async function handleLike(movie) {
            const { status, id, ...movieForCreate } = movie
            return mainApi.createMovie(movieForCreate)
                .then(res => res)
                .catch(err => console.error(err))
        }

        async function handleDislike(id) {
            mainApi.deleteMovie(id)
                .then(res => { console.log(res) })
                .catch(err => console.error(err))
        }

        function handleMoreButton() {
            setOuputRows(outputRows + 1);
        }

        return (
            <main className='movies'>
                <SearchForm onSearch={handleSearch}
                    query={moviesQuery.get()}
                    short={moviesShort}
                />
                <MyCustomWrapper ref={containerRef}>
                    <MoviesCardList movies={movies.slice(0, calculateOutput())}
                        onLike={toggleLike} preloaderIsActive={preloaderIsActive} />
                </MyCustomWrapper>
                <div className='movies__devider'>
                    {movies.length > calculateOutput() ?
                        <button className='movies__add-more' onClick={handleMoreButton}>Ещё</button>
                        : ''
                    }
                </div>
            </main>
        )
    }
