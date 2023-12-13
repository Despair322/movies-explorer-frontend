import React from 'react'
import './SearchForm.css'

import searchIcon from '../../../images/search-icon.svg'

export default function SearchForm() {
    return (<>
        <div class="searchform">
            <img src={searchIcon} alt="логотип" className='searchform__icon' />
            <input className="searchform__input" type="text" placeholder="Фильм" />
            <button className='searchform__search'><span className='searchform__span'>Найти</span> </button>
            <div className='searchform__line-container'><span className='searchform__line'></span></div>
            <div className='searchform__shortfilms'>
                <input className="searchform__switch" id="short" type="checkbox" />
                <label className='searchform__shortfilms-back' for="short"><span className='searchform__shortfilms-dot'></span></label>
                <p className='searchform__shortfilms-text'>Короткометражки</p>
            </div>
        </div>
    </>
    )
}
