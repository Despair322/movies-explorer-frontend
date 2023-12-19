import React from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import { cards } from '../../utils/consts'

export default function Movies() {
    return (
        <main className='movies'>
            <SearchForm />
            <MoviesCardList cards={cards} />
            <div className='movies__devider'>
                <button className='movies__add-more'>Ещё</button>
            </div>
        </main>
    )
}
