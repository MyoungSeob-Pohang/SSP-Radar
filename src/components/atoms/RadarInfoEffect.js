import wordR from '../../static/image/wordR.svg';
import wordA from '../../static/image/wordA.svg';
import wordD from '../../static/image/wordD.svg';
import timeImg from '../../static/image/time.svg';
import lightImg from '../../static/image/light.svg';
import tempImg from '../../static/image/temp.svg';
import winterImg from '../../static/image/winter.svg';
import houseImg from '../../static/image/house.svg';
import lockImg from '../../static/image/lock.svg';

const RadarInfoEffect = () => {
    return (
        <div className="RadarInfoEffect">
            <div className="RadarInfoEffect_inner">
                <div className="RadarInfoEffectItems">
                    {/* R */}
                    <div className="RadarInfoEffectItem">
                        <div className="RadarInfoEffectItem_inner">
                            <img src={wordR} alt="" />
                            <div className="RadarInfoEffectItemReveal">
                                <div className="RadarInfoEffectItemIcon">
                                    <img src={timeImg} alt="" />
                                    <div>
                                        Milliseconds <br /> reactivity
                                    </div>
                                </div>
                                <div className="RadarInfoEffectItem_line"></div>
                            </div>
                        </div>
                    </div>
                    {/* A */}
                    <div className="RadarInfoEffectItem">
                        <div className="RadarInfoEffectItem_inner">
                            <img src={wordA} alt="" />
                            <div className="RadarInfoEffectItemReveal">
                                <div className="RadarInfoEffectItemIcon">
                                    <img src={lightImg} alt="" />
                                    <div>
                                        In any lights <br /> conditions
                                    </div>
                                </div>
                                <div className="RadarInfoEffectItem_line"></div>
                            </div>
                        </div>
                    </div>
                    {/* D */}
                    <div className="RadarInfoEffectItem">
                        <div className="RadarInfoEffectItem_inner">
                            <img src={wordD} alt="" />
                            <div className="RadarInfoEffectItemReveal">
                                <div className="RadarInfoEffectItemIcon">
                                    <img src={tempImg} alt="" />
                                    <div>
                                        Resistant to dust <br /> and temperature
                                    </div>
                                </div>
                                <div className="RadarInfoEffectItem_line"></div>
                            </div>
                        </div>
                    </div>
                    {/* A */}
                    <div className="RadarInfoEffectItem">
                        <div className="RadarInfoEffectItem_inner">
                            <img src={wordA} alt="" />
                            <div className="RadarInfoEffectItemReveal">
                                <div className="RadarInfoEffectItemIcon">
                                    <img src={winterImg} alt="" />
                                    <div>
                                        In any <br /> weather
                                    </div>
                                </div>
                                <div className="RadarInfoEffectItem_line"></div>
                            </div>
                        </div>
                    </div>
                    {/* R */}
                    <div className="RadarInfoEffectItem">
                        <div className="RadarInfoEffectItem_inner">
                            <img src={wordR} alt="" />
                            <div className="RadarInfoEffectItemReveal">
                                <div className="RadarInfoEffectItemIcon">
                                    <img src={houseImg} alt="" />
                                    <div>
                                        Indoor <br /> and outdoor
                                    </div>
                                </div>
                                <div className="RadarInfoEffectItem_line"></div>
                            </div>

                            <div className="RadarInfoEffectItemReveal__2">
                                <div className="RadarInfoEffectItemIcon">
                                    <img src={lockImg} alt="" />
                                    <div>
                                        100% privacy <br /> protection
                                    </div>
                                </div>
                                <div className="RadarInfoEffectItem_line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default RadarInfoEffect;
