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
            axios({
                url: `https://api.themoviedb.org/3/movie/${movieID}/keywords`,
                params: {
                    api_key: '9c9519dc449bbf790a84023525a11fe6',
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
                        `https://api.giphy.com/v1/gifs/search?api_key=eQ4TwuU0VsAbLctRXychU3MD9aPSRmtr&q=${keyword}&limit=1&offset=1&rating=g&lang=en`
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
