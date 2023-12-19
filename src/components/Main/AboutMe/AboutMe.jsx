import './AboutMe.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import Photo from '../../../images/800px-Friendly_Female_Koala.jpg'

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className='about-me__header-container'>
                <SectionHeader title="Студент" />
            </div>
            <img src={Photo} alt="фото"
                className="about-me__photo" />
            <h3 className="about-me__name">Евгений</h3>
            <p className="about-me__subtitle">Вольный крестьянин, 26 лет </p>
            <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
                У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="https://github.com/Despair322" className="about-me__link"
                target='_blank' rel='noopener noreferrer'>Github</a>
        </section>

    )
}
