import PhoneInput from 'react-phone-input-2';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Countries from './Countries';
import 'react-phone-input-2/lib/style.css';
import TermsUse from './TermsUse';
const TermsList = () => {
    return (
        <div className="TermsList">
            <div className="FormWrap">
                {/* First Name */}
                <div className="Fname">
                    <label>
                        Name
                        <input id="firstName" type="text" name="firstName" required="required" noValidate="novalidate" />
                        <span className="individualError">Mandatory</span>
                    </label>
                </div>
                {/* Last Name */}
                <div className="Lname">
                    <label>
                        Surname
                        <input id="lastName" type="text" name="lastName" required="required" noValidate="novalidate" />
                        <span className="individualError">Mandatory</span>
                    </label>
                </div>
                {/* Company */}
                <div className="Company">
                    <label>
                        Company
                        <input id="company" type="text" name="company" required="required" noValidate="novalidate" />
                        <span className="individualError">Mandatory</span>
                    </label>
                </div>
                {/* Email */}
                <div className="Email">
                    <label>
                        Email
                        <input id="email" type="email" name="email" required="required" pattern="email" noValidate="novalidate" />
                        <span className="individualError">Please enter a valid email</span>
                    </label>
                </div>
                {/* Country Code & Phone */}
                <div className="countryAndPhone">
                    <div className="countryArea">
                        <label>
                            Country code
                            <PhoneInput
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                }}
                                country={'kr'}
                                enableSearch={true}
                            />
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
                        <Autocomplete
                            id="country-select-demo"
                            options={Countries}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.label} ({option.code}) +{option.phone}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Choose a country"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password',
                                    }}
                                />
                            )}
                        />
                        <span className="individualError">Mandatory</span>
                    </label>
                </div>
                {/* Request */}
                <div className="Request">
                    <label>
                        Request
                        <textarea id="request" type="text" name="request" required="required" />
                        <span className="individualError">Mandatory</span>
                    </label>
                </div>

                {/* 약관 */}
                <TermsUse />
            </div>
        </div>
    );
};
export default TermsList;
