
import './SecretPage.css';

function SecretPage() {
  return (
    <div id="secret-page">
        <div className="section-padding">
            <div>
                {/* <h2>MLE</h2> */}
                <div className="player-wrapper">
                  <iframe width="100%" 
                          height="350" 
                          frameborder="no" 
                          allow="autoplay" 
                          // src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1618926633&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1618926633&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>

                </div>
            </div>
        </div>
    </div>
  );
}

export default SecretPage;

