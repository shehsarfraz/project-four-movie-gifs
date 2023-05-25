import GifDisplay from "./GifDisplay";

function GifSection({ gifUrls, message }) {
    return (
        <>
        <section className="gif-section">
            <div className="wrapper">
                <div className="gif-group-container">
                    { (gifUrls.length > 0) ? (<GifDisplay
                        gifUrls={gifUrls}
                    />) : (<h2>{message}</h2>)
                    }

                </div>
            </div>
        </section>
        </>
    )
}

export default GifSection;