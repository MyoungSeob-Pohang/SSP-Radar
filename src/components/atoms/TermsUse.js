const TermsUse = () => {
    return (
        <div className="requiredTerms">
            <div className="requiredTermsArea">
                <div className="requiredTerms_inner">
                    {/* personal Information */}
                    <div className="requiredTerms">
                        <label>
                            I declare that I have read and understood
                            <a href="#none">the privacy notice</a>
                            provided by Inxpect SpA in accordance to art. 13 of the EU Regulation 2016/679.
                            <input id="personalInformation" type="checkbox" name="personalInformation" value="1" required="required" />
                            <span className="individualError">Mandatory</span>
                        </label>
                    </div>
                    {/* Agree to use marketing */}
                    <div className="agreeMarketing">
                        <label>
                            I hereby grant consent for the purpose specified in the section 3.b that is: "Running advertising, marketing or
                            promotional campaigns, which may include sending newsletters, by means of automated or non-automated contact
                            methods".
                            <input id="agreeMarketing" type="checkbox" name="agreeMarketing" value="1" />
                        </label>
                    </div>
                    {/* Agree on promotional activities */}
                    <div className="agreePromotional">
                        <label>
                            I hereby grant consent for the purpose specified in the section 3.c that is: "Communications with third parties
                            belonging to the same Group as the Data Controller, for the purposes of marketing and promotional activities, by
                            means of automated or non-automated contact methods".
                            <input id="agreePromotional" type="checkbox" name="agreePromotional" value="1" />
                        </label>
                    </div>
                    {/* Profiling Activity */}
                    <div className="profilingActivity">
                        <label>
                            I hereby grant consent for the purpose specified in the section 3.c that is: "Communications with third parties
                            belonging to the same Group as the Data Controller, for the purposes of marketing and promotional activities, by
                            means of automated or non-automated contact methods".
                            <input id="profilingActivity" type="checkbox" name="profilingActivity" value="1" />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TermsUse;
