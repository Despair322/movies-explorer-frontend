import * as validation from '../../utils/validation';
import Authorization from '../Authorization/Authorization'

export default function Login({ onLogin }) {
    

    const email = validation.useInput('', { isEmpty: true, minLength: 3, maxLength: 30, isEmail: true });
    const password = validation.useInput('', { minLength: 8, maxLength: 30, isEmpty: true });

    function handleSubmit(e) {
        e.preventDefault();
        return onLogin({ email: email.value, password: password.value })
    }

    return (
        <Authorization
            title="Рады видеть!"
            submitText="Войти"
            isButtonDisabled={!(email.isFormValid && password.isFormValid)}
            onSubmit={handleSubmit}
        >
            <label className='authorization__form-label'>
                E-mail
                <input type="email" name="email"
                    className={`authorization__form-input ${email.isDirty && email.validationError ? "authorization__form-input_error" : ""}`}
                    onChange={email.onChange} onBlur={email.onBlur} value={email.value}
                    placeholder="Почта" minLength={3} maxLength={30} required formNoValidate />
                <span className={`authorization__form-error ${email.isDirty ? "authorization__form-error_display" : ""}`}>
                    {email.validationError}
                </span>
            </label>
            <label className='authorization__form-label'>
                Пароль
                <input type="password" name="password"
                    className={`authorization__form-input ${password.isDirty && password.validationError ? "authorization__form-input_error" : ""}`}
                    onChange={password.onChange} onBlur={password.onBlur} value={password.value}
                    placeholder="Пароль" minLength={8} maxLength={30} required formNoValidate />
                <span className={`authorization__form-error ${password.isDirty ? "authorization__form-error_display" : ""}`}>
                    {password.validationError}
                </span>
            </label>
        </Authorization>
    )
}
