import GifDisplay from "./GifDisplay";

function GifSection({gifUrls, errorMessage}) {
    return (
        <>
            <section className="gif-section">
                <div className="wrapper">
                    <div className="gif-group-container">
                        {gifUrls.length > 0 ? (
                            <GifDisplay gifUrls={gifUrls} />
                        ) : (
                            <>
                                <h2>Search movies, get GIFS</h2>
                                {errorMessage && <p>{errorMessage}</p>}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default GifSection;