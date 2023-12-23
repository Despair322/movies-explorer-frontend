import { useNavigate } from 'react-router-dom';
import './SmthWrong.css'

export default function SmthWrong() {
    const navigate = useNavigate();
    return (
        <main className='smth-wrong'>
            <div className='smth-wrong__container'>
                <h1 className='smth-wrong__title'>404</h1>
                <p className='smth-wrong__text'>Страница не найдена</p>
            </div>
            <button type="button"
                onClick={() => navigate(-1)}
                className="smth-wrong__go-back">Назад</button>
        </main>
    )
}
