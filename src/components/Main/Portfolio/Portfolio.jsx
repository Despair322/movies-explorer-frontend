import "./Portfolio.css"

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="https://github.com/Despair322/how-to-learn"
            className="portfolio__link"
            target='_blank' rel='noopener noreferrer'>Статичный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://github.com/Despair322/russian-travel"
            className="portfolio__link"
            target='_blank' rel='noopener noreferrer'>Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://github.com/Despair322/react-mesto-api-full-gha"
            className="portfolio__link"
            target='_blank' rel='noopener noreferrer'>Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  )
}

