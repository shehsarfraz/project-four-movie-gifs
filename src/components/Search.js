import { useState } from 'react';

function Search({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = searchValue.trim().toLowerCase();

    if (!trimmedValue) {
      alert('Please enter a search query.');
      return;
    }

    onSearch(trimmedValue);
  };

  return (
    <>
      <section className="search-section">
        <div className="wrapper">
          <div className="search-container">
            <form className="input-container" onSubmit={handleSubmit}>
              <label htmlFor="search">Search Movies</label>
              <input
                type="text"
                id="search"
                value={searchValue}
                onChange={handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;