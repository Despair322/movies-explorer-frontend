import SectionHeader from '../SectionHeader/SectionHeader'
import './AboutProject.css'

export default function AboutProject() {
    return (
        <section className="about-project">
            <SectionHeader title="О проекте" />
            <div className="about-project__articles-container">
                <article className="about-project__article">
                    <h3 className="about-project__subtitle">
                        Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </article>

                <article className="about-project__article">
                    <h3 className="about-project__subtitle">
                        На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about-project__timings">
                <p className="about-project__week-text about-project__week-text_position_back">
                    1 неделя
                </p>
                <p className="about-project__week-text
                 about-project__week-text_position_front">
                    4 недели
                </p>
                <p className="about-project__end-text
                 about-project__end-text_position_back">
                    Back-end
                </p>
                <p className="about-project__end-text
                 about-project__end-text_position_front">
                    Front-end
                </p>
            </div>
        </section>
    )
}
