import MainLogo from '../../static/image/mainLogo.png';

const headerMain = () => {
    return (
        <div className="headerMain">
            <div className="headerMain_inner">
                <div className="headerNavWrap">
                    <div className="headerLogo">
                        <a href="/">
                            <img src={MainLogo} alt="Main Logo" />
                        </a>
                    </div>
                    <div className="headerMenu">
                        <nav className="headerNav">
                            <ul>
                                <li>
                                    <a href="#none">Products</a>
                                </li>
                                <li>
                                    <a href="#none">Learn</a>
                                </li>
                                <li>
                                    <a href="#none">Support</a>
                                </li>
                                <li>
                                    <a href="#none">Resources</a>
                                </li>
                                <li>
                                    <a href="#none">Sales Network</a>
                                </li>
                                <li>
                                    <a href="#none">About us</a>
                                </li>
                                <li>
                                    <a href="#none">News</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default headerMain;
