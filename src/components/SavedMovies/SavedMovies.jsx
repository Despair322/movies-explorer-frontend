import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { cards } from '../../utils/consts'


export default function Movies() {
    console.log(cards);
    return (
        <main className='saved-movies'>
            <SearchForm />
            <MoviesCardList cards={cards.filter((card) => card.liked)} deleteCards />
            <div className='saved-movies__devider'></div>
        </main>
    )
}
