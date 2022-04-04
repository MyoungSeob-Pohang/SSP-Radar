import Ripple from '../../static/image/ripple.png';

const Ripples = () => {
    return (
        <div className="ripples">
            <div className="ripples">
                <div className="ripple">
                    <img src={Ripple} alt="" />
                </div>
                <div className="ripple">
                    <img src={Ripple} alt="" />
                </div>
                <div className="ripple">
                    <img src={Ripple} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Ripples;
