import FooterLogo from '../../static/image/footerLogo.png';
import BannerLogo from '../../static/image/bannerLogo.png';

const FooterMain = () => {
    return (
        <div className="FooterMain">
            <div className="footerMain_inner">
                {/* Products */}
                <div className="footerItem">
                    <div className="footerItemHeader">
                        <img src={FooterLogo} alt="" />
                    </div>
                    <div className="footerItemContent">
                        <h3>
                            <a href="#none">Products</a>
                        </h3>
                        <nav className="footerNav">
                            <ul className="footerNavLists">
                                <li className="footerNavItem">
                                    <ul>
                                        <li>
                                            <a href="#none" class="">
                                                100 SERIES (LBK-S01)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                200 SERIES (SBV-01)
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="footerNavItem">
                                    <ul>
                                        <li>
                                            <a href="#none" class="">
                                                200 SERIES (ISC‑B01)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                200 SERIES (ISC‑02)
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                200 SERIES (ISC‑03)
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="footerNavItem">
                                    <ul>
                                        <li>
                                            <a href="#none" class="">
                                                Inxpect Safety Application
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                Accessories
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Learn / support */}
                <div className="footerItem">
                    <div className="footerItemHeader"></div>
                    <div className="footerItemContent">
                        {/* Learn */}
                        <h3>
                            <a href="#none">Learn</a>
                        </h3>
                        <nav className="footerNav">
                            <ul className="footerNavLists">
                                <li className="footerNavItem">
                                    <ul>
                                        <li>
                                            <a href="#none" class="">
                                                Radar education
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                Safety standards
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* Support */}
                        <h3>
                            <a href="#none">Support</a>
                        </h3>
                        <nav className="footerNav">
                            <ul className="footerNavLists">
                                <li className="footerNavItem">
                                    <ul>
                                        <li>
                                            <a href="#none" class="">
                                                Faq
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                RMA
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Resources / Sales Network / About Us / News */}
                <div className="footerItem">
                    <div className="footerItemHeader">
                        <div className="footerSocialsLinks">
                            <a target="_blank" href="none" class="vimeo">
                                Vimeo
                            </a>
                            <a target="_blank" href="none" class="twitter">
                                Twitter
                            </a>
                            <a target="_blank" href="none" class="linkedin">
                                Linkedin
                            </a>
                        </div>
                    </div>
                    <div className="footerItemContent">
                        {/* Resources */}
                        <h3>
                            <a href="#none">Resources</a>
                        </h3>
                        <nav className="footerNav">
                            <ul className="footerNavLists">
                                <li className="footerNavItem">
                                    <ul>
                                        <li>
                                            <a href="#none" class="">
                                                Downloads
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                Videos
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* Sales Network */}
                        <h3>
                            <a href="#none">Sales Network</a>
                        </h3>
                        {/* About Us */}
                        <h3>
                            <a href="#none">About Us</a>
                        </h3>
                        <nav className="footerNav">
                            <ul className="footerNavLists">
                                <li className="footerNavItem">
                                    <ul>
                                        <li>
                                            <a href="#none" class="">
                                                Company
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#none" class="">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* News */}
                        <h3>
                            <a href="#none">News</a>
                        </h3>
                    </div>
                </div>

                {/* Banner */}
                <div className="footerItem">
                    <div className="footerItemContent">
                        <a href="#none">
                            <div className="footerBannerArea">
                                <div className="bannerMain">
                                    <div className="bannerMainHeader">
                                        <div className="bannerMainHeaderImg">
                                            <img src={BannerLogo} alt="" />
                                        </div>
                                        <div className="bannerMainHeaderSlogan">Licensing program</div>
                                    </div>

                                    <div className="bannerMainContentInfo">
                                        <p>Do you want to use our radar technology?</p>
                                        <p>Contact Us</p>
                                    </div>
                                </div>
                                <div className="bannerImg"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMain;
