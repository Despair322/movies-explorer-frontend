import { useState } from 'react';
import './Profile.css'

export default function Profile() {
    const name = "Виталий";
    const email = "pochta@yandex.ru";
    const [isDisabled, setIsDisabled] = useState(false)
    const handleProfileEdit = (e)=> {
        e.preventDefault();
        setIsDisabled(true);
    }
    return (
        <main className="profile">
            <h1 className="profile__title">Привет, {name}!</h1>
            <input type="checkbox" name="edit" id="edit" className='profile__checkbox' />
            <form action="/" className="profile__form" onSubmit={handleProfileEdit}>
                <label className="profile__label">
                    Имя
                    <input type="text" name="name" className="profile__input" value={name} placeholder='Имя' minLength={2} maxLength={30}/>
                </label>
                <span className='profile__line'></span>
                <label className="profile__label">
                    E-mail
                    <input type="text" name="email" className="profile__input" value={email} disabled placeholder='Почта' minLength={3} maxLength={30}/>
                </label>
                <p className='profile__error'>
                    При обновлении профиля произошла ошибка.
                </p>
                <button type="submit" className="profile__submit" disabled={isDisabled}>Сохранить</button>
            </form>

            <label className="profile__edit" htmlFor='edit'>
                Редактировать
            </label>
            <button type="button" className="profile__exit">Выйти из аккаунта</button>
        </main>
    )
}
