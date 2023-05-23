const GifDisplay = ({gifUrls}) => {
    return ( 
        gifUrls.map((individualGifData) => {
        return (
            <div className="gif-container" key={individualGifData.id}>
                <a href={individualGifData.url}><img src={`https://media1.giphy.com/media/${individualGifData.id}/200.gif`} alt={individualGifData.title}/></a>
            </div>
            )
        })
    )
                
}

export default GifDisplay;