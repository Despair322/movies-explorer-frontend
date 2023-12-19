import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'


export default function Navigation() {
    const activeLink = useLocation().pathname;
    return (
        <nav className='navigation'><input className="navigation__burger" id="burger" type="checkbox" />
            <label className='navigation__burger-label' for="burger">
                <span className='navigation__burger-span'></span>
                <span className='navigation__burger-span'></span>
                <span className='navigation__burger-span'></span>
            </label>
            <span className='navigation__overlay'></span>
            <ul className='navigation__list'>
                <li className='navigation__list-item'>
                    <Link to="/"
                        className={`navigation__link ${activeLink === '/' ? "navigation__link_active" : null}`}>
                        Главная</Link>
                </li>
                <li className='navigation__list-item'>
                    <Link to="/movies"
                        className={`navigation__link ${activeLink === '/movies' ? "navigation__link_active" : null}`}>
                        Фильмы</Link>
                </li>
                <li className='navigation__list-item'>
                    <Link to="/saved-movies" className={`navigation__link ${activeLink === '/saved-movies' ? "navigation__link_active" : null}`}>
                        Сохранённые фильмы
                    </Link>
                </li>
                <li className='navigation__list-item'>
                    <Link to="/profile" className='navigation__profile'>Аккаунт</Link>
                </li>
            </ul>
        </nav>
    )
}
