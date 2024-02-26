import { useState } from 'react';

import './SearchForm.css';

function SearchForm({ setSearchParams, cityQuery, needSort }) {
  const [search, setSearch] = useState(cityQuery);
  const [isChecked, setChecked] = useState(needSort);

  const handleSearch = (e) => {
    e.preventDefault();

    const form = e.target;

    const city = form.search.value;
    const sort = form.needSort.checked;

    setSearchParams({
      city: city.trim() || '',
      needSort: sort
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

        <button type='submit'>Search</button>


        <input
          type="checkbox"
          name='needSort'
          id='sort'
          checked={isChecked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor='sort' className='sort-label'>Sort by start date</label>

      </div>
    </form>
  )
}

export default SearchForm