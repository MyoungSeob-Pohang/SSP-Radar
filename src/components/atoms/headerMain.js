import MainLogo from '../../static/image/mainLogo.png';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';

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
                                    <nav className="secondaryNav">
                                        <div className="secondaryNav_inner">
                                            <div className="secondaryNavList">
                                                {/* item 0 */}
                                                <div className="secondaryNavItem">
                                                    <div className="secondaryNavItemHeader">
                                                        <a href="#none">
                                                            <PrecisionManufacturingOutlinedIcon />
                                                            <span>Products</span>
                                                        </a>
                                                    </div>
                                                    <div className="secondaryNavItemContent">
                                                        <a href="#none">
                                                            <span>OVERVIEW</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* item 1 */}
                                                <div className="secondaryNavItem">
                                                    <div className="secondaryNavItemHeader">
                                                        <a href="#none">
                                                            <VolumeUpOutlinedIcon />
                                                            <span>Smart Sensors</span>
                                                        </a>
                                                    </div>
                                                    <div className="secondaryNavItemContent">
                                                        <a href="#none">
                                                            <span>LBK-S01</span>
                                                        </a>
                                                        <a href="#none">
                                                            <span>SBV-01</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* item 2 */}
                                                <div className="secondaryNavItem">
                                                    <div className="secondaryNavItemHeader">
                                                        <a href="#none">
                                                            <MemoryOutlinedIcon />
                                                            <span>Control units</span>
                                                        </a>
                                                    </div>
                                                    <div className="secondaryNavItemContent">
                                                        <a href="#none">
                                                            <span>ISC-B01</span>
                                                        </a>
                                                        <a href="#none">
                                                            <span>ISC-02</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* item 3 */}
                                                <div className="secondaryNavItem">
                                                    <div className="secondaryNavItemHeader">
                                                        <a href="#none">
                                                            <TerminalOutlinedIcon />
                                                            <span>Software and accessories</span>
                                                        </a>
                                                    </div>
                                                    <div className="secondaryNavItemContent">
                                                        <a href="#none">
                                                            <span>INXPECT SAFETY APPLICATION</span>
                                                        </a>
                                                        <a href="#none">
                                                            <span>ACCESSORIES</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
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
