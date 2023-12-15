import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

export default function MoviesCardList() {
    return (
        <div className='movies-card-list'>
            <MoviesCard status='like'/>
            <MoviesCard status='unlike'/>
            <MoviesCard status='unlike'/>
            <MoviesCard status='delete'/>
            <MoviesCard status='delete'/>
        </div>
    )
}
