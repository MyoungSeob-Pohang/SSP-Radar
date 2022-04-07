const ContactsForm = () => {
    return (
        <div className="ContactsForm">
            <div className="ContactsForm_inner">
                <form className="Form" method="POST" action="#">
                    {/* Error */}
                    <div className="ErrorForm">
                        <div className="ValidationError">
                            <p>THERE ARE ERRORS IN FILLING OUT THE FORM</p>
                        </div>
                    </div>
                    {/* Form */}
                    <div className="FormWrap">
                        {/* First Name */}
                        <div className="Fname">
                            <label>
                                Name
                                <input id="firstName" type="text" name="firstName" required="required" novalidate="novalidate" />
                                <span className="individualError">Mandatory</span>
                            </label>
                        </div>
                        {/* Last Name */}
                        <div className="Lname">
                            <label>
                                Surname
                                <input id="lastName" type="text" name="lastName" required="required" novalidate="novalidate" />
                                <span className="individualError">Mandatory</span>
                            </label>
                        </div>
                        {/* Company */}
                        <div className="Company">
                            <label>
                                Company
                                <input id="company" type="text" name="company" required="required" novalidate="novalidate" />
                                <span className="individualError">Mandatory</span>
                            </label>
                        </div>
                        {/* Email */}
                        <div className="Email">
                            <label>
                                Email
                                <input id="email" type="email" name="email" required="required" pattern="email" novalidate="novalidate" />
                                <span className="individualError">Please enter a valid email</span>
                            </label>
                        </div>
                        {/* Country Code & Phone */}
                        <div className="countryAndPhone">
                            <div className="countryArea">
                                <label>
                                    Country code
                                    <input id="countryCode" type="text" required="required" />
                                    <span className="individualError">Mandatory</span>
                                </label>
                            </div>
                            <div className="phoneArea">
                                <label>
                                    Phone
                                    <input id="phoneNumber" type="text" required="required" />
                                    <span className="individualError">Mandatory</span>
                                </label>
                            </div>
                        </div>
                        {/* Address */}
                        <div className="address">
                            <label>
                                Street Address
                                <input id="address" type="text" name="address" />
                                <span className="individualError">Mandatory</span>
                            </label>
                        </div>
                        {/* Zip Code And City */}
                        <div className="zipCodeAndCity">
                            <div className="zipCodeArea">
                                <label>
                                    Zip Code
                                    <input id="zip" type="text" name="zip" required="required" />
                                    <span className="individualError">Mandatory</span>
                                </label>
                            </div>
                            <div className="cityArea">
                                <label>
                                    City
                                    <input id="city" type="text" name="city" required="required" />
                                    <span className="individualError">Mandatory</span>
                                </label>
                            </div>
                        </div>
                        {/* Country */}
                        <div className="Country">
                            <label>
                                Country
                                <input id="country" type="text" name="country" />
                                <span className="individualError">Mandatory</span>
                            </label>
                        </div>
                        {/* Request */}
                        <div className="Country">
                            <label>
                                Request
                                <textarea id="request" type="text" name="request" required="required" />
                                <span className="individualError">Mandatory</span>
                            </label>
                        </div>
                        {/* 약관 */}
                        <div className="requiredTerms">
                            <div className="requiredTermsArea">
                                <div className="requiredTerms_inner">
                                    {/* personal Information */}
                                    <div className="requiredTerms">
                                        <label>
                                            I declare that I have read and understood
                                            <a href="#none">the privacy notice</a>
                                            provided by Inxpect SpA in accordance to art. 13 of the EU Regulation 2016/679.
                                            <input
                                                id="personalInformation"
                                                type="checkbox"
                                                name="personalInformation"
                                                value="1"
                                                required="required"
                                            />
                                            <span className="individualError">Mandatory</span>
                                        </label>
                                    </div>
                                    {/* Agree to use marketing */}
                                    <div className="agreeMarketing">
                                        <label>
                                            I hereby grant consent for the purpose specified in the section 3.b that is: "Running
                                            advertising, marketing or promotional campaigns, which may include sending newsletters, by means
                                            of automated or non-automated contact methods".
                                            <input id="agreeMarketing" type="checkbox" name="agreeMarketing" value="1" />
                                        </label>
                                    </div>
                                    {/* Agree on promotional activities */}
                                    <div className="agreePromotional">
                                        <label>
                                            I hereby grant consent for the purpose specified in the section 3.c that is: "Communications
                                            with third parties belonging to the same Group as the Data Controller, for the purposes of
                                            marketing and promotional activities, by means of automated or non-automated contact methods".
                                            <input id="agreePromotional" type="checkbox" name="agreePromotional" value="1" />
                                        </label>
                                    </div>
                                    {/* Profiling Activity */}
                                    <div className="profilingActivity">
                                        <label>
                                            I hereby grant consent for the purpose specified in the section 3.c that is: "Communications
                                            with third parties belonging to the same Group as the Data Controller, for the purposes of
                                            marketing and promotional activities, by means of automated or non-automated contact methods".
                                            <input id="profilingActivity" type="checkbox" name="profilingActivity" value="1" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default ContactsForm;
