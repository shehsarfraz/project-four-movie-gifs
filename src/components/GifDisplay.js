const GifDisplay = ({ gifUrls }) => {
    return (
        gifUrls.map((individualGifData) => {
            return (
                <li className="gif-container" key={individualGifData.id}>
                    <a href={individualGifData.url} target="_blank">
                        <img src={`https://media1.giphy.com/media/${individualGifData.id}/200.gif`} alt={individualGifData.title} />
                    </a>
                </li>
            )
        })
    )

}

export default GifDisplay;