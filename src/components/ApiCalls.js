let titleSearch = {};
    const TitleApiCall = async (searchValue) => {
        
        titleSearch[searchValue] = fetch(`/.netlify/functions/api-keys?searchTitle=${searchValue}&language=en-US&include_adult=false&include_video=false&page=1`)
            .then((res) => {
            // use if here
                try {
                    return res.json();
                }
                catch (err) {
                    setMessage('No results, try another movie');
                }
            })
            .catch(() => {
            setMessage('Failed to fetch movie');
            });

        return titleSearch[searchValue];
    }

    export { TitleApiCall }