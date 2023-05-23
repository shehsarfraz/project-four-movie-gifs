const Display = ({gifUrls, gifAlts}) => {

    // const urls = ["https://giphy.com/embed/g8a4XudONT2aQ", "https://giphy.com/embed/La3G8N3tn4nzW", "https://giphy.com/embed/eFvs5iE6a6ntVIRaEN"];

    // const alts = ['first', 'second', 'third'];

    return gifUrls.length > 0 ? (
            <h1>Sorry the movie you are searched for is unavalable</h1>
        ) : ( 
                gifUrls.map((indivisualGifUrl) => {
                    return (
                        <div className="gif-container">
                            <iframe src={indivisualGifUrl} width="100%" height="auto"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        </div>
                    )
                })
            )

    
    // <iframe src="https://giphy.com/embed/eFvs5iE6a6ntVIRaEN" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nightlife-bladerunner-tokyo-city-eFvs5iE6a6ntVIRaEN">via GIPHY</a></p>

    // return (
    //     urls.map((ind) => {
    //         return(
    //             <div className="gif-container">
    //             <iframe src={ind} width="100%" height="100%" frameBorder="0" class="giphy-embed" ></iframe>
    //             </div>
    //         )   
    //     })
    // )
    
}

export default Display;