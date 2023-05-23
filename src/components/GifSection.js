import Display from "./Display";

function GifSection({gifUrls, altKeyWords}) {
    return (
        <section class="gif-section">
            <div class="wrapper">
                <div class="gif-group-container">
                    <Display 
                        gifUrls={gifUrls}
                        gifAlts={altKeyWords}
                    />
                </div>
            </div>
        </section> 
    )
}

export default GifSection;