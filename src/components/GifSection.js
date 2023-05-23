import GifDisplay from "./GifDisplay";

function GifSection({gifUrls}) {
    return (
        <>
        <section className="gif-section">
            <div className="wrapper">
                <div className="gif-group-container">
                    { (gifUrls.length > 0) ? (<GifDisplay 
                        gifUrls={gifUrls}
                    />) : (<h2>Enter a movie name, and we will summarize in 3 GIFS</h2>)
                    }
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default GifSection;