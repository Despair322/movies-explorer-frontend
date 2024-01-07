import { useState } from 'react';
import './MoviesCard.css'

export default function MoviesCard({ movie, onLike }) {
    function handleLikeClick(e) {
        onLike(movie, changeStatus);
    }
    function changeStatus(status) {
        movie.status = status;
        setStatus(status);
    }
    const [status, setStatus] = useState(movie.status);

    return (
        <div className='movie-card'>
            <img src={movie.image}
                alt="Постер фильма" className='movie-card__image' />
            <h2 className='movie-card__title'>{movie.nameRU}</h2>
            <button
                className={`movie-card__button movie-card__button_status_${status}`}
                onClick={handleLikeClick}></button>
            <p className='movie-card__time'>{Math.trunc(movie.duration / 60)}ч {movie.duration % 60}м</p>
        </div>
    )
}
