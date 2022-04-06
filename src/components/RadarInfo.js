import RadarInfoText from './atoms/RadarInfoText';
import RadarInfoEffect from './atoms/RadarInfoEffect';
import '../static/css/RadarInfo.scss';

const RadarInfo = () => {
    return (
        <div className="RadarInfo">
            <RadarInfoText />
            <RadarInfoEffect />
        </div>
    );
};
export default RadarInfo;
