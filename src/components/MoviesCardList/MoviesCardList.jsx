import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList({ cards, deleteCards }) {
    cards.map(card => console.log(card.liked ? "liked" : "unliked"))
    return (
        <div className='movies-card-list'>
            {cards.map((card) => <MoviesCard card={card} status={deleteCards ? 'delete' : card.liked ? "like" : "unlike"} />)}
        </div>
    )
}
