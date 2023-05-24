import { useState } from 'react';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchValue) {
      alert('Please enter a search query.');
      return;
    }

    onSearch(searchValue);
  };

  return (
    <>
      <section className="search-section">
        <div className="wrapper">
          <div className="search-container">
            <form className="input-container" onSubmit={handleSubmit}>
              <label className='sr-only' htmlFor="search">Search Movies</label>
              <input
                type="text"
                id="search"
                value={searchValue}
                onChange={handleInputChange}
                placeholder='Enter a movie'
              />
                <div className="button-container">
                    <button type="submit">Search Movies</button>
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;