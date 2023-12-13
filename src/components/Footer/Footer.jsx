import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <span className='footer__line'></span>
      <nav className='footer__navigation'>
        <a target='_blank' className='footer__link'
          rel='noopener noreferrer' href="https://practicum.yandex.ru">Яндекс.Практикум</a>
        <a target='_blank' className='footer__link'
          rel='noopener noreferrer' href="https://github.com/Despair322">Github</a>
        <p className='footer__date'>©2020</p>
      </nav>
    </footer>
  )
}
