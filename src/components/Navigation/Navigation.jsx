import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react';


export default function Navigation() {
    const activeLink = useLocation().pathname;
    const [isOpen, setIsOpen] = useState(false);
    const handleBurgerClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='navigation'>
            <button type="button" onClick={handleBurgerClick} className='navigation__burger-button'>
                <label className="navigation__burger-label">
                    <span className={`navigation__burger-span ${isOpen ? "navigation__burger-span_open" : ""}`}></span>
                    <span className={`navigation__burger-span ${isOpen ? "navigation__burger-span_open" : ""}`}></span>
                    <span className={`navigation__burger-span ${isOpen ? "navigation__burger-span_open" : ""}`}></span>
                </label></button>
            <span className={`navigation__overlay ${isOpen ? "navigation__overlay_open" : ""}`}></span>
            <ul className={`navigation__list ${isOpen ? "navigation__list_open" : ""}`}>
                <li className='navigation__list-item'>
                    <Link to="/"
                        onClick={handleBurgerClick}
                        className={`navigation__link ${activeLink === '/' ? "navigation__link_active" : null}`}>
                        Главная</Link>
                </li>
                <li className='navigation__list-item'>
                    <Link to="/movies"
                        onClick={handleBurgerClick}
                        className={`navigation__link ${activeLink === '/movies' ? "navigation__link_active" : null}`}>
                        Фильмы</Link>
                </li>
                <li className='navigation__list-item'>
                    <Link to="/saved-movies"
                        onClick={handleBurgerClick}
                        className={`navigation__link ${activeLink === '/saved-movies' ? "navigation__link_active" : null}`}>
                        Сохранённые фильмы
                    </Link>
                </li>
                <li className='navigation__list-item'>
                    <Link to="/profile"
                        onClick={handleBurgerClick}
                        className='navigation__profile'>Аккаунт</Link>
                </li>
            </ul>
        </nav>
    )
}
