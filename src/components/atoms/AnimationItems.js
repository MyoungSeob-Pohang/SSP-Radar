const AnimationItems = ({ data }) => {
    return (
        <div className="AnimationItem">
            <a href="#none">
                <div className="AnimationItemImg" id={'AnimationImg' + (data.id + 1)}></div>
                <div className="AnimationItemInfo">
                    <div className="AnimationItemInfo_Title">{data.title}</div>
                    <div className="AnimationItemInfo_Content">{data.subTitle}</div>
                </div>
            </a>
        </div>
    );
};
export default AnimationItems;
