import glasses from '../../static/image/glasses.jpg';
import headphones from '../../static/image/headphones.jpg';
import helmet from '../../static/image/helmet.jpg';
import radar from '../../static/image/radar.png';
import signature from '../../static/image/signature.svg';
import Ripples from './Ripples';
import { Controller, Scene } from 'react-scrollmagic';

const IndustrialSafetyContent = () => {
    return (
        <div className="IndustrialSafetyContent">
            <div className="IndustrialSafety_Img">
                <div className="IndustrialSafety_Img_item">
                    <img src={helmet} alt="" />
                </div>
                <div className="IndustrialSafety_Img_item">
                    <img src={signature} alt="" />
                    <Controller>
                        <Scene
                            duration={900}
                            pin=".scrollImg"
                            enabled={true}
                            offset={-210}
                            triggerElement=".scrollImg"
                            pinSettings={{ pushFollowers: false }}
                        >
                            <div className="scrollImg">
                                <div className="scrollImg_Item">
                                    <img src={radar} alt="" />
                                    <Ripples />
                                </div>
                            </div>
                        </Scene>
                    </Controller>
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
