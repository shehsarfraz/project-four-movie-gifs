import { useState } from 'react';

function Search({ searchValue, setSearchValue, buttonRequest, setButtonRequest, title, onSearch}) {

  const [inputValue, setInputValue] = useState('');

  let buttonValue = buttonRequest === 'search' ? 'Search Movies' : 'Refresh GIFs';

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setButtonRequest('search');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedValue = inputValue.trim().toLowerCase();

    if (!trimmedValue) {
      alert('Please enter a search query.');
      return;
    }

    setSearchValue(trimmedValue);
    setButtonRequest('refresh');
    console.log(buttonRequest);
  };

  return (
    <>
    <h2>{title}</h2>
      <section className="search-section">
        <div className="wrapper">
          <div className="search-container">
            <form className="input-container" onSubmit={handleSubmit}>
              <label className='sr-only' htmlFor="search">{buttonValue}</label>
              <input
                type="text"
                id="search"
                value={inputValue}
                onChange={handleInputChange}
              />
                <div className="button-container">
                    <button type="submit">{buttonValue}</button>
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;