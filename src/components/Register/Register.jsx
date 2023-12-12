import React from 'react'
import Authorization from '../Authorization/Authorization'

export default function Register() {
    return (
        <Authorization
            title="Добро пожаловать!"
            submitText="Зарегистрироваться"
        >
            <label className='authorization__form-label'>
                Имя
                <input type="text" name="name" className='authorization__form-input' />
                <p className='authorization__form-error'></p>
            </label>
            <label className='authorization__form-label'>
                E-mail
                <input type="email" name="email" className='authorization__form-input' />
                <p className='authorization__form-error'></p>
            </label>
            <label className='authorization__form-label'>
                Пароль
                <input type="password" name="password" className='authorization__form-input' />
                <p className='authorization__form-error'>
                    Что-то пошло не так...
                </p>
            </label>
        </Authorization>
    )
}