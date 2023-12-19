import './Footer.css'
import { Route, Routes } from 'react-router-dom'

export default function Footer() {
  return (<Routes>
    {["/", "/movies", "/saved-movies"].map((path, index) =>
      <Route path={path} element={
        <footer className='footer'>
          <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
          <span className='footer__line'></span>
          <nav className='footer__navigation'>
            <a target='_blank' className='footer__link'
              rel='noopener noreferrer' href="https://practicum.yandex.ru">Яндекс.Практикум</a>
            <a target='_blank' className='footer__link'
              rel='noopener noreferrer' href="https://github.com/Despair322">Github</a>
            <p className='footer__date'>©{new Date().getFullYear()}</p>
          </nav>
        </footer>
      } key={index} />
    )}
  </Routes>
  )
}
