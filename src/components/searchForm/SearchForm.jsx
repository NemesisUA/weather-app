import { useState } from 'react';

import './SearchForm.css';

function SearchForm({ setSearchParams, cityQuery, needSort }) {
  const [search, setSearch] = useState(cityQuery);
  const [isChecked, setChecked] = useState(needSort);

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchParams({
      city: search.trim() || '',
      needSort: isChecked
    });
  }

  return (
    <form onSubmit={handleSearch} >
      <div className="serch-engine">
        <input type='search'
          name='search'
          className='search-input'
          placeholder="Search a trip"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type='submit'>Apply</button>

        <input
          type="checkbox"
          name='needSort'
          id='sort'
          checked={isChecked}
          onChange={() => setChecked(isChecked => !isChecked)}
        />
        <label htmlFor='sort' className='sort-label'>Sort by start date</label>

      </div>
    </form>
  )
}

export default SearchForm