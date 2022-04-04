import glasses from '../../static/image/glasses.jpg';
import headphones from '../../static/image/headphones.jpg';
import helmet from '../../static/image/helmet.jpg';
import radar from '../../static/image/radar.png';
import signature from '../../static/image/signature.svg';
import Ripples from './Ripples';

const IndustrialSafetyContent = () => {
    return (
        <div className="IndustrialSafetyContent">
            <div className="IndustrialSafety_Img">
                <div className="IndustrialSafety_Img_item">
                    <img src={helmet} alt="" />
                </div>
                <div className="IndustrialSafety_Img_item">
                    <img src={signature} alt="" />
                    <div className="scrollImg">
                        <div className="scrollImg_Item">
                            <img src={radar} alt="" />
                            <Ripples />
                        </div>
                    </div>
                </div>
                <div className="IndustrialSafety_Img_item">
                    <img src={headphones} alt="" />
                    <img src={glasses} alt="" />
                </div>
            </div>
        </div>
    );
};
export default IndustrialSafetyContent;
