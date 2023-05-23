import GifDisplay from "./GifDisplay";

function GifSection({gifUrls}) {
    return (
        <>
        <section class="gif-section">
            <div class="wrapper">
                <div class="gif-group-container">
                    <GifDisplay 
                        gifUrls={gifUrls}
                    />
                </div>
            </div>
        </section>
        </>
    )
}

export default GifSection;