import React, { useState } from 'react'
import './Authorization.css'
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Authorization({ title, submitText, isButtonDisabled, onSubmit, children }) {
    const location = useLocation();
    const [authorizationError, setAuthorizationError] = useState('');
    const [localIsButtonDisabled, setLocalIsButtonDisabled] = useState(false)
    function handleSubmit(e) {
        setLocalIsButtonDisabled(true);
        return onSubmit(e)
            .then(data => {
                setAuthorizationError('')
            })
            .catch(err => setAuthorizationError(err.error.message))
            .finally(() => {
                setLocalIsButtonDisabled(false)
            });
    }

    return (
        <div className='authorization'>
            <Link to="/" className='authorization__home'>
                <img src={logo} alt="логотип" className='authorization__logo' />
            </Link>
            <h1 className='authorization__title'>{title}</h1>
            <form action="#" className='authorization__form' onSubmit={handleSubmit}>
                {children}
                <p className='authorization__error'>
                    {authorizationError}
                </p>
                <button type="submit" className='authorization__form-button' disabled={isButtonDisabled || localIsButtonDisabled}>{submitText}</button>
                {location.pathname === "/signup" ?
                    <p className='authorization__text'>Уже зарегистрированы? <Link to="/signin" className='authorization__link'>Войти</Link></p>
                    : <p className='authorization__text'>Ещё не зарегистрированы? <Link to="/signup" className='authorization__link'>Регистрация</Link></p>}
            </form>
        </div>
    )
}
