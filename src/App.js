import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import GifSection from './components/GifSection';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {

    const [movieID, setMovieID] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [randomKeywords, setRandomKeywords] = useState([]);
    const [gifUrls, setGifUrls] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('Search movies, get GIFS');

    useEffect(() => {
        if (searchValue) {
            // for loading screen
            setMessage('Loading...');
            // empty array
            setGifUrls([]);
            // searches movie results by name, takes first result and sets movie id
            axios({
                url: `/.netlify/functions/title-search?`,
                params: {
                    query: `${searchValue}`,
                    language: 'en-US',
                    include_adult: 'false',
                    include_video: 'false',
                    page: 1,
                },
            })
                .then((res) => {
                    // use if here
                    try {
                        const movieDataID = res.data.results[0].id;
                        setMovieID(movieDataID);
                        setTitle(res.data.results[0].title);
                    }
                    catch (err) {
                        setMessage('No results, try another movie');
                    }
                }).catch(() => {
                    setMessage('Failed to fetch movie');
                });
        }
    }, [searchValue]);

    useEffect(() => {

        if (movieID) {
            // finds movie by id, set by the search fetch
            axios({
                url: `/.netlify/functions/movie-search?`,
                params: {
                    query: `${movieID}`,
                },
            })
                .then((res) => {
                    const keywords = res.data.keywords;

                    if (keywords.length >= 3) {
                        const keywordNames = keywords.map(keyword => keyword.name);
                        setKeywords(keywordNames);
                    } else {
                        // shows 'no results' when the movie exists but the keywords don't
                        setMessage('No results, try another movie');
                    }
                }).catch(() => {
                    setMessage('Failed to fetch keywords');
                });
        }
    }, [movieID, setMessage]);

    useEffect(() => {

        if (keywords.length >= 3) {
            const filteredKeywords = keywords.filter(keyword => keyword !== "based on novel or book");

            const randomKeywords = [];
            while (randomKeywords.length < 3) {
                const randomIndex = Math.floor(Math.random() * filteredKeywords.length);
                const randomKeyword = filteredKeywords[randomIndex];
                if (!randomKeywords.includes(randomKeyword)) {
                    randomKeywords.push(randomKeyword);
                }
            }

            setRandomKeywords(randomKeywords);
        }
    }, [keywords]);
    
    useEffect(() => {
        const fetchGifUrls = async () => {
            const urls = [];
            try {
                for (const keyword of randomKeywords) {
    
                    const res = await axios.get(
                        `/.netlify/functions/giphy-search?keyword=${keyword}&limit=1&offset=1&rating=g&lang=en`
                    );
                    const gifUrlsForKeyword = res.data.data;
                    urls.push(...gifUrlsForKeyword);
                }
                setGifUrls(urls);
            }
            catch {
                setMessage("Failed to fetch gifs");
            }
        };

        if (randomKeywords.length >= 3) {
            fetchGifUrls();
        }
    }, [randomKeywords]);

    return (
        <>
            <Header />
            <main>
                <GifSection
                    gifUrls={gifUrls}
                    message={message}
                />
                <Search
                    setSearchValue={setSearchValue}
                    title={title}
                    setTitle={setTitle}
                    setMessage={setMessage}
                    setMovieID={setMovieID}
                    setGifUrls={setGifUrls}
                />
            </main>
            <Footer />
        </>
    );
}

export default App;
