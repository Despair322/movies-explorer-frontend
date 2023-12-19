import SectionHeader from '../SectionHeader/SectionHeader'
import './Techs.css'

export default function Techs() {
    return (
        <section className="techs">
            <SectionHeader title="Технологии" />
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="techs__list">
                <li className="techs__list-item">
                    <a href="https://developer.mozilla.org/ru/docs/Learn/HTML"
                        className="techs__link"
                        target='_blank' rel='noopener noreferrer'><span className="techs__link-text">HTML</span></a>
                </li>
                <li className="techs__list-item">
                    <a href="https://developer.mozilla.org/ru/docs/Learn/CSS"
                        className="techs__link"
                        target='_blank' rel='noopener noreferrer'><span className="techs__link-text">CSS</span></a>
                </li>
                <li className="techs__list-item">
                    <a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript"
                        className="techs__link"
                        target='_blank' rel='noopener noreferrer'><span className="techs__link-text">JS</span></a>
                </li>
                <li className="techs__list-item">
                    <a href="https://react.dev/"
                        className="techs__link"
                        target='_blank' rel='noopener noreferrer'><span className="techs__link-text">React</span></a>
                </li>
                <li className="techs__list-item">
                    <a href="https://git-scm.com/"
                        className="techs__link"
                        target='_blank' rel='noopener noreferrer'><span className="techs__link-text">Git</span></a>
                </li>
                <li className="techs__list-item">
                    <a href="https://expressjs.com/ru/"
                        className="techs__link"
                        target='_blank' rel='noopener noreferrer'><span className="techs__link-text">Express.js</span></a>
                </li>
                <li className="techs__list-item">
                    <a href="https://www.mongodb.com/"
                        className="techs__link"
                        target='_blank' rel='noopener noreferrer'><span className="techs__link-text">mongoDB</span></a>
                </li>
            </ul>
        </section>
    )
}
