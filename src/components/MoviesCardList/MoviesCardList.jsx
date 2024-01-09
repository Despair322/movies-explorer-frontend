import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

export default function MoviesCardList({ movies, onLike, preloaderIsActive, freshStart, freshStartText }) {
    return (
        <div className={'movies-card-list ' + (movies.length === 0 ? 'movie-card-list_empty' : '')}>
            {!preloaderIsActive ?
                movies.length > 0 ?
                    movies.map((movie) =>
                        <MoviesCard movie={movie}
                            onLike={onLike} key={movie.movieId}
                        />)
                    : <p className='movie-card-list__no-movies'>{freshStart ? freshStartText : "Ничего не найдено"}</p>
                :
                <Preloader />
            }

        </div>
    )
}
