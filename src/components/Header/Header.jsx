import React from 'react'
import logo from '../../images/logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header({ loggedIn }) {
  return (
    <header className='header'>
      <img src={logo} alt="логотип" className='header__logo' />

      {loggedIn ?
        <><nav className='header__navigation'>
          <Link to="/" className='header__link'>Главная</Link>
          <Link to="/signup" className='header__link'>Фильмы</Link>
          <Link to="/signup" className='header__link'>Сохранённые фильмы</Link>
          <Link to="/signup" className='header__profile'>Аккаунт</Link>
          </nav>
          <input className="header__burger" id="burger" type="checkbox" />
          <label className='header__burger-label' for="burger">
            <span className='header__burger-span'></span>
            <span className='header__burger-span'></span>
            <span className='header__burger-span'></span>
          </label>

        </> : <>
          <Link to="/signup" className='header__registration'>Регистрация</Link>
          <Link to="/signin" className='header__login'>Войти</Link>
        </>}



    </header>
  )
}
