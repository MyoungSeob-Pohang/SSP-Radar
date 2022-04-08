import Over from '../static/image/over.png';
import '../static/css/SubTitle.scss';
import Ripples from './atoms/Ripples';

const SubTitle = () => {
    return (
        <section className="SubTitle">
            <div className="subTitle_inner">
                <div className="subTitleHeader">
                    <img src={Over} alt="Sub Title" />
                    <Ripples />
                </div>
                <div className="subTitleContent">
                    <div>Imagine people and machines</div>
                    <div>together, at last.</div>
                </div>
            </div>
        </section>
    );
};
export default SubTitle;
