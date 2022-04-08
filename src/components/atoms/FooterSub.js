import SQS from '../../static/image/sqs.svg';

const FooterSub = () => {
    return (
        <div className="FooterSub">
            <div className="footerSub_inner">
                <div className="footerSubHeader">
                    <div className="copyright">
                        <p>Copyright © 2016-2022 Inxpect S.p.A. - All rights reserved.</p>
                    </div>
                    <div className="footerQuickNav">
                        <ul>
                            <li>
                                <a href="#none">Terms of sale</a>
                            </li>
                            <li>
                                <a href="#none">Terms of use</a>
                            </li>
                            <li>
                                <a href="#none">Privacy</a>
                            </li>
                            <li>
                                <a href="#none">Cookie</a>
                            </li>
                        </ul>
                    </div>
                    <div className="separator">
                        <div class="separator_inner"></div>
                    </div>
                </div>
                <div className="footerSubContent">
                    <div className="footerSubContent_inner">
                        <div className="footerSubContentImg">
                            <img src={SQS} alt="" />
                        </div>
                        <div className="footerSubContentInfo">
                            <p>
                                Inxpect S.p.A. Via Serpente, 91 - 25131 Brescia - Italy - <a href="#none">hello@inxpect.com</a> - T +39 030
                                5785105 <br />
                                VAT ID IT03771080987 - Cap. Soc. € 427.510,16 I.V. - R.E.A. BS 561724 - PEC:{' '}
                                <a href="#none">amministrazione@pec.inxpect.it</a> <br />
                                ISO 9001:2015 Quality Management System
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSub;
