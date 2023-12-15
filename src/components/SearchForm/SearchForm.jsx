import './SearchForm.css'

export default function SearchForm() {
    return (<>
        <div class="searchform">
            <input className="searchform__input" type="text" placeholder="Фильм" id='search'/>
            <dv className='searchform__search-container'><button className='searchform__search-button'>Найти</button> </dv>
            <div className='searchform__line-container'><span className='searchform__line'></span></div>

            <div className='searchform__short-container'>
                <label className='searchform__short'>
                    <input className='searchform__short-switcher' type="checkbox" />
                    Короткометражки
                </label>
            </div>
        </div>
    </>
    )
}
