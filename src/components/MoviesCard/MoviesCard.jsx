import './MoviesCard.css'

export default function MoviesCard({ card, status }) {
    return (
        <div className='movie-card'>
            <img src={card.image}
                alt="Постер фильма" className='movie-card__image' />
            <h2 className='movie-card__title'>{card.name}</h2>
            <button className={`movie-card__button movie-card__button_status_${status}`}></button>
            <p className='movie-card__time'>{card.hours}ч {card.minutes}м</p>
        </div>
    )
}
