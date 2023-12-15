import './MoviesCard.css'

export default function MoviesCard({status}) {
    return (
        <div className='movie-card'>
            <img src="https://api.nomoreparties.co/uploads/stones_in_exile_b2f1b8f4b7.jpeg"
                alt="картинка" className='movie-card__image' />
            <h2 className='movie-card__title'>Пример фильма</h2>
            <button className={`movie-card__button movie-card__button_status_${status}`}></button>
            <p className='movie-card__time'>1ч 61м</p>
        </div>
    )
}
