import './Search.css'

function Search({ city, setCity, handleSearch }) {


  return (
    <div className="serch-engine">
      <input
        className='search-input'
        placeholder='Search your trip'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  )
}

export default Search;