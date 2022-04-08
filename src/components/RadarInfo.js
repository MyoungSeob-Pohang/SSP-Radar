import RadarInfoText from './atoms/RadarInfoText';
import RadarInfoEffect from './atoms/RadarInfoEffect';
import '../static/css/RadarInfo.scss';

const RadarInfo = () => {
    return (
        <section className="RadarInfo">
            <RadarInfoText />
            <RadarInfoEffect />
        </section>
    );
};
export default RadarInfo;
