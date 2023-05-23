import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GifSection from './components/GifSection';
import Search from './components/Search';
import Footer from './components/Footer';

// TMDB: 9c9519dc449bbf790a84023525a11fe6

// GIPHY: eQ4TwuU0VsAbLctRXychU3MD9aPSRmtr
// https://api.giphy.com/v1/gifs/search?api_key=eQ4TwuU0VsAbLctRXychU3MD9aPSRmtr&q=&limit=50&offset=0&rating=g&lang=en

function App() {

  const [movieID, setMovieID] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [randomKeywords, setRandomKeywords] = useState([]);
  const [gifUrls, setGifUrls] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (searchValue) {
      axios({
        url: 'https://api.themoviedb.org/3/search/movie?',
        params: {
          api_key: '9c9519dc449bbf790a84023525a11fe6',
          query: `${searchValue}`,
          language: 'en-US',
          include_adult: 'false',
          include_video: 'false',
          page: 1,
        },
      })
        .then((res) => {
          const MovieID = res.data.results[0].id;
          setMovieID(MovieID);
        });
    }
  }, [searchValue]);

  useEffect(() => {
    if (movieID) {
      axios({
        url: `https://api.themoviedb.org/3/movie/${movieID}/keywords`,
        params: {
          api_key: '9c9519dc449bbf790a84023525a11fe6',
        },
      })
        .then((res) => {
          const keywords = res.data.keywords;
          const keywordNames = keywords.map(keyword => keyword.name);
          setKeywords(keywordNames);

        });
      }
    }, [movieID]);
    
    
  useEffect(() => {
    if (keywords.length > 0) {
      const filteredKeywords = keywords.filter(keyword => keyword !== "based on novel or book");

      const randomKeywords = [];
      while (randomKeywords.length < 3) {
        const randomIndex = Math.floor(Math.random() * filteredKeywords.length);
        const randomKeyword = filteredKeywords[randomIndex];
        if (!randomKeywords.includes(randomKeyword)) {
          randomKeywords.push(randomKeyword);
        }
      }
      
        if (randomKeywords.length > 0) {
          console.log(randomKeywords)
        }

      setRandomKeywords(randomKeywords);
    }
  }, [keywords]);

  useEffect(() => {
    const fetchGifUrls = async () => {
      const urls = [];

      for (const keyword of randomKeywords) {
        const res = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=eQ4TwuU0VsAbLctRXychU3MD9aPSRmtr&q=${keyword}&limit=1&offset=1&rating=g&lang=en`
        );
        const gifUrlsForKeyword = res.data.data.map((gif) => gif.embed_url); //res.data.data.map((gif) => gif.url);
        urls.push(...gifUrlsForKeyword);
      }

      setGifUrls(urls);
    };

    if (randomKeywords.length > 0) {
      fetchGifUrls();
    }
  }, [randomKeywords]);

  if (gifUrls.length > 0) {
    console.log(gifUrls);
  }

  
  return (
    <>
        <Header />
        <main>
            <GifSection 
              gifUrls={gifUrls}
            />
            <Search onSearch={setSearchValue} />
        </main>
        <Footer />
    </>
  );
}

export default App;
