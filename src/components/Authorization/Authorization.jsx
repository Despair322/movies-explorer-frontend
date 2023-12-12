import React from 'react'
import './Authorization.css'
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Authorization({ title, submitText, children }) {
    const location = useLocation();
    return (
        <div className='authorization'>
            <img src={logo} alt="логотип" className='authorization__logo' />
            <h1 className='authorization__title'>{title}</h1>
            <form action="#" className='authorization__form'>
                {children}
                <button type="submit" className='authorization__form-button'>{submitText}</button>
                {location.pathname === "/signup" ?
                    <p className='authorization__text'>Уже зарегистрированы? <Link to="/signin" className='authorization__link'>Войти</Link></p>
                    : <p className='authorization__text'>Ещё не зарегистрированы? <Link to="/signup" className='authorization__link'>Регистрация</Link></p>}
            </form>
        </div>
    )
}
