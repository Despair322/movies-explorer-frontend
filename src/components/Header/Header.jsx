import logo from '../../images/logo.svg'
import './Header.css'
import { Link, Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

export default function Header({ loggedIn }) {
  return (
    <Routes>
      {["/", "/movies", "/saved-movies", "/profile"].map((path, index) =>
        <Route path={path} element={
          <header className='header'>
            <Link to="/" className='header__home'>
              <img src={logo} alt="логотип" className='header__logo' />
            </Link>
            {loggedIn ?
              <Navigation />
              : <>
                <Link to="/signup" className='header__registration'>Регистрация</Link>
                <Link to="/signin" className='header__login'>Войти</Link>
              </>}
          </header>
        } key={index} />
      )}
    </Routes>

  )
}
