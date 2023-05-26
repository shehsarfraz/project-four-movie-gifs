import { useState } from 'react';

function Search({ setSearchValue, title, setTitle, setMessage, setMovieID, setGifUrls }) {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      setMovieID('');
      setGifUrls([]);
      setTitle('');
    const trimmedValue = inputValue.trim().toLowerCase();

    if (!trimmedValue) {
      setMessage('Please enter a search query');
      return;
    }
    setSearchValue(trimmedValue);

    setInputValue('');
  };

  return (
    <>
    <h3>{title}</h3>
      <section className="search-section">
        <div className="wrapper">
          <div className="search-container">
            <form className="input-container" onSubmit={handleSubmit}>
              <label className='sr-only' htmlFor="search">Search Movies</label>
              <input
                type="text"
                id="search"
                value={inputValue}
                onChange={handleInputChange}
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
