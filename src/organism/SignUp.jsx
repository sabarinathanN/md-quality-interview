import React, { Fragment,useState ,useEffect} from "react";
import Input from "../atom/Input";
import { FormControl } from "@mui/material";
import SelectInput from "../atom/Select";
import { countryCodes } from '../utility/country_code';
import "./signUp.scss";
import axios from "axios";


const SignUp = () => {
  const [inputData,setInputData] = useState({
    firstName:"",
    lastName:"",
    mail:"",
    countryCode:"",
    contactNumber:"",
    password:"",
    reEnterPassword:""
  })
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setIsLoading(false);
    }
  };

  
const handleSuccess = async (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  try {
      const country = await getCountryFromCoordinates(latitude, longitude);
      const countryCode = getCountryCode(country);
      setInputData({ ...inputData, countryCode: countryCode }); // Update the state with the fetched country code
      setIsLoading(false);
  } catch (error) {
      console.error("Error getting country from coordinates:", error);
      setError("Failed to retrieve country from coordinates.");
      setIsLoading(false);
  }
};


  const handleError = (error) => {
    console.error("Error getting user location:", error);
    setError("Failed to get user location.");
    setIsLoading(false);
  };

  const getCountryFromCoordinates = async (latitude, longitude) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      if (response && response.data && response.data.address && response.data.address.country) {
        return response.data.address.country;
      } else {
        console.error("Failed to retrieve country from coordinates:", response.data);
        throw new Error("Invalid response from reverse geocoding service.");
      }
    } catch (error) {
      console.error("Error retrieving country from coordinates:", error);
      throw error;
    }
  };

  const getCountryCode = (country) => {
    const foundCountry = countryCodes.find(
      (item) => item.country === country
    );
    return foundCountry ? foundCountry.code : null;
  };
  const inputHandler = (val,name) => {
      // if(name === 'firstName'){
       
      // }
      // else if(name === "lastName"){
       
      // }
      // else if(name === "mail"){
        
      // }
      // else if(name === "countryCode"){
        
      // }
      // else if(name === "contactNumber"){
        
      // }
      // else if(name === "password"){
        
      // }
      // else if(name === "reEnterPassword"){
        
      // }
      setInputData({
        ...inputData,
        [name]: val,
      });
  };

 
  console.log(inputData);
  return (
    <Fragment>
      <div className="signup-page-container">
        <div className="signup-page-wrapper">
          <div className="signup-logo-container">
            <div className="signup-logo-wrapper">
              <img src="asset/Signuplogo.svg"></img>
            </div>
          </div>
          <div className="signup-form-container">
            <div className="signup-form-wrapper">
              <div className="signup-form-header">
                <div className="signup-form-header-wrapper">
                  <h4>Sign Up</h4>
                  <p>Join us today and unlock exclusive benefits!</p>
                </div>
              </div>
              <FormControl fullWidth>
                <div className="input-area-section-container">
                  <div className="input-area-section-wrapper">
                    <div className="input-field">
                      <Input
                        // id = {}
                        // className = {}
                        name={"firstName"}
                        placeholder = {"Enter Your Name"}
                        helperText = {"hello"}
                        // error = false
                        value = {inputData['firstName'] || ""}
                        // type = {}
                        label={"First Name"}
                        // required = false
                        // onBlur= () => null
                        onChange = {inputHandler}
                        // onFocus = () => null
                      />
                    </div>
                    <div className="input-field">
                      <Input
                        // id = {}
                        // className = {}
                        name={"lastName"}
                        placeholder = {"Enter Your Last Name"}
                        helperText = {"hello"}
                        // error = false
                        value = {inputData['lastName'] || ""}
                        // type = {}
                        label={"Last Name"}
                        // required = false
                        // onBlur= () => null
                        onChange = {inputHandler}
                        // onFocus = () => null
                      />
                    </div>
                  </div>
                </div>

                <div className="input-area-section-container">
                  <div className="input-area-section-wrapper">
                    <div className="input-field">
                      <Input
                        // id = {}
                        // className = {}
                        name={"mail"}
                        placeholder = {"Enter Your Gmail/Email Address"}
                        helperText = {"hello"}
                        // error = false
                        value = {inputData['mail'] || ""}
                        // type = {}
                        label={"Email/Gmail"}
                        // required = false
                        // onBlur= () => null
                        onChange = {inputHandler}
                        // onFocus = () => null
                      />
                    </div>
                  </div>
                </div>

                <div className="input-area-section-container">
                  <div className="input-area-section-wrapper">
                    <div className="input-field select-option">
                     <SelectInput
                     name={"countryCode"}
                     value={inputData['countryCode'] || ""}
                     label="Country Code"
                     options={countryCodes}
                     onChange = {inputHandler}
                     />
                    </div>

                    <div className="input-field">
                      <Input
                        // id = {}
                        // className = {}
                        name={"contactNumber"}
                        placeholder = {"Enter Your Contact Number"}
                        helperText = {"hello"}
                        // error = false
                        value = {inputData['contactNumber'] || ""}
                        // type = {}
                        label={"Contact Number"}
                        // required = false
                        // onBlur= () => null
                        onChange = {inputHandler}
                        // onFocus = () => null
                      />
                    </div>
                  </div>
                </div>

                <div className="input-area-section-container">
                  <div className="input-area-section-wrapper">
                    <div className="input-field">
                      <Input
                        // id = {}
                        // className = {}
                        name={"password"}
                        placeholder = {"Enter Your Password"}
                        helperText = {"hello"}
                        // error = false
                        value = {inputData['password'] || ""}
                        // type = {}
                        label={"Your Password"}
                        // required = false
                        // onBlur= () => null
                        onChange = {inputHandler}
                        // onFocus = () => null
                      />
                    </div>

                    <div className="input-field">
                      <Input
                        // id = {}
                        // className = {}
                        name={"reEnterPassword"}
                        placeholder = {"Re-enter Your Password"}
                        helperText = {"hello"}
                        // error = false
                        value = {inputData['reEnterPassword'] || ""}
                        // type = {}
                        label={"Re-enter Password"}
                        // required = false
                        // onBlur= () => null
                        onChange = {inputHandler}
                        // onFocus = () => null
                      />
                    </div>
                  </div>
                </div>
              </FormControl>
              <div className="signup-form-login-container">
                <div className="signup-form-login-area">
                  <div className="sso-login-container">
                    <div className="sso-logo-separator">
                      <div className="left-hr-line"> </div>
                      <div>or continue with</div>
                      <div className="right-hr-line"> </div>
                    </div>
                    <div className="sso-logos-contianer">
                      <ul className="sso-ullist">
                        <li className="sso-logo">
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/fluency/48/google-logo.png"
                            alt="google-logo"
                          />
                        </li>
                        <li className="sso-logo">
                          <img
                            width="50"
                            height="50"
                            src="https://img.icons8.com/ios-filled/50/mac-os.png"
                            alt="mac-os"
                          />
                        </li>
                        <li className="sso-logo">
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/facebook.png"
                            alt="facebook"
                          />
                        </li>
                      </ul>
                    </div>
                    <p className="register-content">
                      Already a member? <a href="/login">Login now</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
