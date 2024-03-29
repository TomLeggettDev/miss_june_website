// import { useState } from 'react';
import './Watch.css';
import { videosToDisplay } from '../variables';

// const modOperator = (num, mod) => {
//     return (( num % mod ) + mod) % mod;
// }

function Watch() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const changeVideo = (prevOrNext) => {
    //     var increment = (prevOrNext == "prev") ? -1 : 1;
    //     setCurrentIndex(modOperator(currentIndex + increment, videosToDisplay.length));
    //     var n = currentIndex;
    //     var input = "#indexIndicator :nth-child(" + (n-1) + ")"
    //     var ele = document.querySelector( input );
    //     ele.style["background-color"] = "red";
    //}

    return (
    <section id="watch">
        <div className="section-padding">
            <div className="section-title-wrapper">
                <h1 className="section-title">WATCH</h1>
            </div>
            {/* <div className="videoControls">
                <a className="videoControl" onClick={() => changeVideo('prev')}>
                    <i className="fa-solid fa-angle-left fa-2xl"></i>
                </a>
            </div> */}

            <iframe src={videosToDisplay[0]}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
            </iframe>

            {/* <div className="videoControls">
                <a className="videoControl" onClick={() => changeVideo('next')}>
                    <i className="fa-solid fa-angle-right fa-2xl"></i>
                </a>
            </div> */}
        
        {/* <div id="indexIndicator"> 
            {videosToDisplay.map((video, index) => {
                return <hr className="videoIndexLine"/>
            })
        }
        </div> */}

            <div id='moreVideos'>
                <a href="https://www.youtube.com/@missjunevevo4647" target="_blank" rel="norefferer" className="Button moreVideosButton">
                    MORE VIDEOS 
                </a>
            </div>

        </div>
    </section>
  );
}

export default Watch;
