import * as validation from '../../utils/validation';
import Authorization from '../Authorization/Authorization'

export default function Register({ onRegister }) {
    const name = validation.useInput('', { minLength: 2, maxLength: 30, isEmpty: true });
    const email = validation.useInput('', { isEmpty: true, minLength: 3, maxLength: 30, isEmail: true });
    const password = validation.useInput('', { minLength: 8, maxLength: 30, isEmpty: true });

    function handleSubmit(e) {
        e.preventDefault();
        return onRegister({ name: name.value, email: email.value, password: password.value })
            .then(data => {
                return data;
            })
    }

    return (
        <Authorization
            title="Добро пожаловать!"
            submitText="Зарегистрироваться"
            isButtonDisabled={!(email.isFormValid && password.isFormValid && name.isFormValid)}
            onSubmit={handleSubmit}
        >
            <label className='authorization__form-label'>
                Имя
                <input type="text" name="name"
                    className={`authorization__form-input ${name.isDirty && name.validationError.length !== 0 ? "authorization__form-input_error" : ""}`}
                    onBlur={name.onBlur} value={name.value} onChange={name.onChange}
                    placeholder="Имя" minLength={2} maxLength={30} formNoValidate
                    autoComplete="given-name" />
                <span className={`authorization__form-error ${name.isDirty ? "authorization__form-error_display" : ""}`}>
                    {name.validationError}
                </span>
            </label>
            <label className='authorization__form-label'>
                E-mail
                <input type="email" name="email"
                    className={`authorization__form-input ${email.isDirty && email.validationError.length !== 0 ? "authorization__form-input_error" : ""}`}
                    onBlur={email.onBlur} value={email.value} onChange={email.onChange}
                    placeholder="Почта" formNoValidate minLength={3} maxLength={30} required />
                <span className={`authorization__form-error ${email.isDirty ? "authorization__form-error_display" : ""}`}>
                    {email.validationError}
                </span>
            </label>
            <label className='authorization__form-label'>
                Пароль
                <input type="password" name="password"
                    className={`authorization__form-input ${password.isDirty && password.validationError.length !== 0 ? "authorization__form-input_error" : ""}`}
                    onBlur={password.onBlur} value={password.value} onChange={password.onChange}
                    placeholder="Пароль" formNoValidate minLength={8} maxLength={30}
                    autoComplete="new-password" />
                <span className={`authorization__form-error ${password.isDirty ? "authorization__form-error_display" : ""}`}>
                    {password.validationError}
                </span>
            </label>
        </Authorization>
    )
}