import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as validation from '../../utils/validation';
import './Profile.css'

export default function Profile({ onExit, onEdit }) {
    const currentUser = useContext(CurrentUserContext);


    const name = validation.useInput(currentUser.name || '', { isEmpty: true, minLength: 2, maxLength: 30 });
    const email = validation.useInput(currentUser.email || '', { minLength: 3, maxLength: 30, isEmpty: true, isEmail: true });

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isInputsDisabled, setIsInputsDisabled] = useState(true);
    const [editionError, setEditionError] = useState('')

    useEffect(() => {
        if (currentUser.name) {
            name.setValue(currentUser.name);
            email.setValue(currentUser.email);
        }
    }, [currentUser])


    const editButtonHandler = () => {
        setIsInputsDisabled(false);
    }

    const handleProfileEdit = (e) => {
        e.preventDefault();
        setIsButtonDisabled(true);
        onEdit({ name: name.value, email: email.value })
            .then((res) => {
                setIsInputsDisabled(true);
                setEditionError('')
                alert("Информация успешно изменена")
            })
            .catch((err) => {
                setEditionError(err)
            })
            .finally(() => {
                setIsButtonDisabled(false);
            })
    }

    useEffect(() => {
        if (name.value === currentUser.name && email.value === currentUser.email)
            setIsButtonDisabled(true)
        else
            setIsButtonDisabled(!(email.isFormValid && name.isFormValid));
    }, [name, email])

    return (
        <main className="profile">

            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form action="/" className="profile__form" onSubmit={handleProfileEdit}>
                <label className="profile__label">
                    Имя
                    <input type="text" name="name"
                        className={`profile__input ${name.isDirty && name.validationError ? "profile__input_error" : ""}`}
                        value={name.value} onChange={name.onChange} onBlur={name.onBlur} disabled={isInputsDisabled}
                        placeholder='Имя' min={2} maxLength={30} required formNoValidate />
                </label>
                <span className='profile__line'></span>
                <label className="profile__label">
                    E-mail
                    <input type="text" name="email"
                        value={email.value} onChange={email.onChange} onBlur={email.onBlur} disabled={isInputsDisabled}
                        className={`profile__input ${email.isDirty && email.validationError ? "profile__input_error" : ""}`}
                        placeholder='Почта' minLength={3} maxLength={30} />
                </label>
                <p className={`profile__error ${!isInputsDisabled ? "profile__error_visible" : ""} `}>
                    {editionError}
                </p>
                <button type="submit"
                    className={`profile__submit ${!isInputsDisabled ? "profile__submit_visible" : ""} `}
                    disabled={isButtonDisabled}>Сохранить</button>
            </form>


            <button type="button" className={`profile__edit ${!isInputsDisabled ? "profile__edit_hidden" : ""}`} onClick={editButtonHandler}>Редактировать</button>
            <button type="button"
                className={`profile__exit ${!isInputsDisabled ? "profile__exit_hidden" : ""}`}
                onClick={onExit}>
                Выйти из аккаунта
            </button>
        </main>
    )
}
