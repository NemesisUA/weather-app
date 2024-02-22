import { useState } from 'react';
import './Search.css'
import { useDispatch } from 'react-redux';

function Search() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    setQuery('sorry, didn`t finished(');
  }


  return (
    <div className="serch-engine">
      <input
        className='search-input'
        placeholder="Search a trip"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default Search;