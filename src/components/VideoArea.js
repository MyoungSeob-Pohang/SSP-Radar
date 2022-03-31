import '../static/css/VideoArea.scss';
import RadarVideo from '../static/video/RadarSensor.mp4';

const VideoArea = () => {
    return (
        <div className="VideoArea">
            <div className="videoPlayer">
                <video autoplay="autoplay" muted="muted" loop="loop">
                    <source src={RadarVideo} type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
            <div className="videoText">
                <h2>The first radar sensors</h2>
                <h3>certified for industrial safety</h3>
            </div>
        </div>
    );
};
export default VideoArea;
