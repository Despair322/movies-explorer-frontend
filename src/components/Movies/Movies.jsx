import React from 'react'
import './Movies.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import SearchForm from './SearchForm/SearchForm'
import MoviesCardList from './MoviesCardList/MoviesCardList'

export default function Movies() {
    return (<>
        <Header loggedIn={true} />
        <main className='movies'>
            <SearchForm />
            <MoviesCardList />
        </main>
        <Footer />
    </>
    )
}
