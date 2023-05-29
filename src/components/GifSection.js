import GifDisplay from "./GifDisplay";

function GifSection({ gifUrls, message }) {
    return (
        <>
            <section>
                <div className="wrapper">
                    <ul className="gif-group-container">
                        {(gifUrls.length > 0) ? (<GifDisplay
                            gifUrls={gifUrls}
                        />) : (<h2>{message}</h2>)
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}

export default GifSection;