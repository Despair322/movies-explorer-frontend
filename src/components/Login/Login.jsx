import React from 'react'
import Authorization from '../Authorization/Authorization'

export default function Login() {
    return (
        <Authorization
            title="Рады видеть!"
            submitText="Войти"
        >
            <label className='authorization__form-label'>
                E-mail
                <input type="email" name="email" className='authorization__form-input'
                placeholder="Почта" minLength={3} maxLength={30} required />
                <span className='authorization__form-error'></span>
            </label>
            <label className='authorization__form-label'>
                Пароль
                <input type="password" name="password" className='authorization__form-input'
                placeholder ="Пароль" minLength={8} maxLength={30} required/>
                <span className='authorization__form-error'>
                    Что-то пошло не так...
                </span>
            </label>
        </Authorization>
    )
}
