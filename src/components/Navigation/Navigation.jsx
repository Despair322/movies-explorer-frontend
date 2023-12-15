import { Link } from 'react-router-dom'
import './Navigation.css'


export default function Navigation() {
    return (
        <nav className='navigation'><input className="navigation__burger" id="burger" type="checkbox" />
            <label className='navigation__burger-label' for="burger">
                <span className='navigation__burger-span'></span>
                <span className='navigation__burger-span'></span>
                <span className='navigation__burger-span'></span>
            </label>
            <div className='navigation__links'>
                <Link to="/" className='navigation__link'>Главная</Link>
                <Link to="/movies" className='navigation__link'>Фильмы</Link>
                <Link to="/saved-movies" className='navigation__link'>Сохранённые фильмы</Link>
                <Link to="/profile" className='navigation__profile'>Аккаунт</Link>
            </div>
        </nav>
    )
}
