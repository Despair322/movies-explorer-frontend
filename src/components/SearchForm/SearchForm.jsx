import { useEffect, useState } from 'react'
import './SearchForm.css'

export default function SearchForm({ onSearch, query, short }) {

    const [searchQuery, setSearchQuery] = useState(query || '');
    const shortStatus = short.get() ? short.get() === 'false' ? false : true : false;
    const [searchShort, setSearchShort] = useState(shortStatus);

    function searchHandler(e) {
        e.preventDefault();
        onSearch(searchQuery);
    }

    function queryOnChange(e) {
        setSearchQuery(e.target.value);
    }
    function shortOnChange(e) {
        setSearchShort(e.target.checked);
    }

    useEffect(() => {
        short.set(searchShort)
    }, [searchShort])

    return (<>
        <form className="searchform" onSubmit={searchHandler}>
            <input className="searchform__input" type="text" placeholder="Фильм"
                id='search' value={searchQuery} onChange={queryOnChange} />
            <div className='searchform__search-container'>
                <button className='searchform__search-button'
                    type='submit'>Найти</button>
            </div>
            <div className='searchform__line-container'><span className='searchform__line'></span></div>

            <div className='searchform__short-container'>
                <label className='searchform__short'>
                    <input className='searchform__short-switcher'
                        type="checkbox" onChange={shortOnChange} checked={searchShort} />
                    Короткометражки
                </label>
            </div>
        </form>
    </>
    )
}
