import { useState } from 'react'
import './SearchForm.css'

export default function SearchForm({ onSearch, query, short, onShort }) {

    const [searchQuery, setSearchQuery] = useState(query || '');
    const [isFieldValid, setIsFieldValid] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    
    function searchHandler(e) {
        e.preventDefault();
        if (searchQuery.length === 0) {
            setIsFieldValid(false)
        } else {
            setIsButtonDisabled(true);
            onSearch(searchQuery).finally(()=> setIsButtonDisabled(false));
        }
    }

    function queryOnChange(e) {
        if(!isFieldValid)
            setIsFieldValid(true);
        setSearchQuery(e.target.value);
    }
    function shortOnChange(e) {
        onShort(e.target.checked)
    }

    return (<>
        <form className="searchform" onSubmit={searchHandler}>
            <input className={`searchform__input ${!isFieldValid ? 'searchform__input_invalid' : ''}`} type="text" placeholder={isFieldValid ? 'Фильм' : 'Нужно ввести ключевое слово'}
                id='search' value={searchQuery} onChange={queryOnChange}/>
            <div className='searchform__search-container'>
                <button className='searchform__search-button'
                    type='submit' disabled={isButtonDisabled}>Найти</button>
            </div>
            <div className='searchform__line-container'><span className='searchform__line'></span></div>

            <div className='searchform__short-container'>
                <label className='searchform__short'>
                    <input className='searchform__short-switcher'
                        type="checkbox" onChange={shortOnChange} checked={short} />
                    Короткометражки
                </label>
            </div>
        </form>
    </>
    )
}
