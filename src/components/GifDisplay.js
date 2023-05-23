const GifDisplay = ({gifUrls}) => {
    return ( gifUrls.map((indivisualGifUrl) => {
        return (
            <div className="gif-container">
                <iframe src={indivisualGifUrl} width="100%" height="100%"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
            )
        })
    )
                
}

export default GifDisplay;