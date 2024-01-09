import React, { useEffect, useState } from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { moviesFiltredStorage, moviesQuery, moviesShort, moviesStorage } from "../../utils/LocalStorage";
import { moviesApi } from '../../utils/MoviesApi'
import { useContainerQuery } from 'react-container-query';
import { mainApi } from '../../utils/MainApi';
import { movieProxy } from '../../utils/Proxy';
import { movieFilter } from '../../utils/MovieFilter';
import { CONTAINERQUERY, COUNTOFCARDS } from '../../utils/consts';

const MyCustomWrapper = React.forwardRef((props, ref) => {
    return <div ref={ref} >{props.children}</div>
});

export default function Movies() {

    const [movies, setMovies] = useState([]);

    const [filtredMovies, setFiltredMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [short, setShort] = useState(false);

    const [params, containerRef] = useContainerQuery(CONTAINERQUERY);
    const [preloaderIsActive, setPreloaderIsActive] = useState(false)
    const [outputRows, setOuputRows] = useState(0);

    useEffect(() => {
        setPreloaderIsActive(true);
        const localMovies = JSON.parse(moviesStorage.get());
        if (localMovies && localMovies.length > 0)
            setMovies(localMovies)


        const localQuery = moviesQuery.get();
        if (localQuery) {
            setQuery(localQuery);
        }

        const localShort = moviesShort.get();

        if (localShort) {

            setShort(localShort ? localShort === 'false' ? false : true : false);
        }
        const localFiltredMovies = JSON.parse(moviesFiltredStorage.get());
        if (localFiltredMovies) {
            setFiltredMovies(localFiltredMovies);
        }

        setPreloaderIsActive(false);
    }, [])



    useEffect(() => {
        moviesStorage.set(JSON.stringify(movies));
    }, [movies])

    useEffect(() => {
        moviesFiltredStorage.set(JSON.stringify(filtredMovies));
    }, [filtredMovies])

    // useEffect(() => {
    //     console.log('фильтрация карточек');
    //     setPreloaderIsActive(true);
    //     setFiltredMovies(movieFilter(movies,
    //         { query: query, short: short }));
    //     setPreloaderIsActive(false);
    // }, [query])

    function calculateOutput() {
        return params.one ? COUNTOFCARDS.one.start + (COUNTOFCARDS.one.add * outputRows)
            : params.two ? COUNTOFCARDS.two.start + (COUNTOFCARDS.two.add * outputRows)
                : params.three ? COUNTOFCARDS.three.start + (COUNTOFCARDS.three.add * outputRows)
                    : COUNTOFCARDS.four.start + (COUNTOFCARDS.four.add * outputRows);
    }


    async function handleSearch(data) {
        if (!movies || movies.length === 0) {
            await moviesApi.getMovies()
                .then(async (moviesFromApi) => {
                    const proxyMovies = moviesFromApi.map(item => movieProxy(item));
                    await mainApi.getMovies()
                        .then(res => {
                            const likedIDs = res.map(movie => movie.movieId);
                            setMovies(proxyMovies.map(movie => {
                                const position = likedIDs.indexOf(movie.movieId);
                                const id = position !== -1 ? res[position]._id : 0;
                                return ({
                                    ...movie,
                                    status: id ? 'like' : 'unlike',
                                    id: id,
                                })
                            }))
                        })
                        .catch(err => {
                            setMovies(proxyMovies.map(movie => {
                                return ({
                                    ...movie,
                                    status: 'unlike',
                                    id: 0,
                                })
                            }))
                            console.log(err)
                        })
                })
        }
        setQuery(data);
        moviesQuery.set(data);
        setOuputRows(0);
        setFiltredMovies(movieFilter(movies,
            { query: data, short: short }));
    }

    function handleShortChange(state) {
        const shortStatus = state ? state === 'false' ? false : true : false;
        setShort(shortStatus);
        moviesShort.set(shortStatus);
        setFiltredMovies(movieFilter(movies,
            { query: query, short: state }));
    }

    async function toggleLike(movie, setStatus) {
        if (movie.status === 'like') {
            handleDislike(movie.id)
                .then(res => {
                    setStatus('unlike')
                    console.log(movies);
                    movies.map(item => {
                        if (movie.movieId === item.movieId) {
                            return movie;
                        }
                        return item;
                    })
                    setMovies([...movies])
                })
        }
        else {
            handleLike(movie)
                .then(res => {
                    movie.id = res._id
                    console.log('установка лайка');
                    setStatus('like');
                    movies.map(item => {
                        if (movie.movieId === item.movieId) {
                            return movie;
                        }
                        return item;
                    })
                    setMovies([...movies])
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
                short={short}
                setShort={setShort}
                onShort={handleShortChange}
            />
            <MyCustomWrapper ref={containerRef}>
                <MoviesCardList movies={filtredMovies.slice(0, calculateOutput())}
                    onLike={toggleLike} preloaderIsActive={preloaderIsActive} 
                    freshStart={!movies || movies.length === 0} freshStartText={"Найдите фильмы!"}/>
            </MyCustomWrapper>
            <div className='movies__devider'>
                {filtredMovies.length > calculateOutput() ?
                    <button className='movies__add-more' onClick={handleMoreButton}>Ещё</button>
                    : ''
                }
            </div>
        </main>
    )
}
