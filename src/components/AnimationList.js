import '../static/css/AnimationList.scss';
import AnimationData from './atoms/AnimationItemData';
import AnimationItems from './atoms/AnimationItems';

const AnimationList = () => {
    return (
        <div className="AnimationList">
            <div className="AnimationList_inner">
                <h2>Watch animations on typical use cases</h2>
                <div className="AnimationItems">
                    {AnimationData.map((item, key) => {
                        return <AnimationItems data={item} key={key} />;
                    })}
                </div>
            </div>
        </div>
    );
};
export default AnimationList;

// Animation List
