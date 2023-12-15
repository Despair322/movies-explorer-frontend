import './Profile.css'

export default function Profile() {
    const name = "Виталий";
    const email = "pochta@yandex.ru";
    return (
        <main className="profile">
            <h1 className="profile__title">Привет, {name}!</h1>
            <input type="checkbox" name="edit" id="edit" className='profile__checkbox' />
            <form action="/" className="profile__form">
                <label className="profile__label">
                    Имя
                    <input type="text" name="name" className="profile__input" value={name}/>
                </label>
                <span className='profile__line'></span>
                <label className="profile__label">
                    Почта
                    <input type="text" name="email" className="profile__input" value={email} disabled />
                </label>
                <button type="submit" className="profile__submit">Сохранить</button>
            </form>

            <label className="profile__edit" htmlFor='edit'>
                Редактировать
            </label>
            <button type="button" className="profile__exit">Выйти из аккаунта</button>
        </main>
    )
}
