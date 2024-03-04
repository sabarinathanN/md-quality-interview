import React, { Fragment, useState } from "react";
import './login-page.scss';


const LoginPage = (()=>{
    const [inputdata,setInputdata] = useState({
        email:"",
        password:""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://651eeb3c44a3a8aa4769333c.mockapi.io/details/users');
          const users = await response.json();
          const user = users.find(user => user.email === inputdata.email && user.password === inputdata.password);
          if (user) {
            alert('Login successful!');
            localStorage.setItem('user', JSON.stringify(user));
            // history.push("/loggedin");
          } else {

          }
        } catch (error) {
        }
      };
    console.log(inputdata)

    return(

        <Fragment>
            <div className="login-container">
                <div className="login-container-wrapper">
                    <div className="login-form">
                        <div className="login-form-wrapper">
                        <div className="login-form-introparagraph">
                            <div className="login-paragraph-wrapper">
                            <h4>WELCOM BACK!</h4>
                            <p>Simplyfy Your WOrkflow and boost Your Productivity with 
                                <strong> MD QUALITY APP</strong> Get stared for free</p>
                                </div>
                        </div>
                        <div className="login-form-inputarea">
                            <form  action="/loggedin">
                                <input 
                                className="input-area" 
                                type="email" 
                                placeholder="Username"
                                name="email"
                                value={inputdata.email}
                                onChange={handleInputChange}
                                ></input>
                                <input 
                                className="input-area" 
                                type="password" 
                                placeholder="Password"
                                name="password"
                                value={inputdata.password}
                                onChange={handleInputChange}
                                ></input><br></br>
                                <a>Forgot Password?</a>
                                <button type="submit" onSubmit={handleLogin}>Login</button>
                            </form>
                        </div>
                        <div className="sso-login-container">
                            <div className="sso-logo-separator">
                                <div className="left-hr-line">  </div><div>or continue with</div><div className="right-hr-line">  </div>
                            </div>
                            <div className="sso-logos-contianer">
                                <ul className="sso-ullist">
                                    <li className="sso-logo">
                                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
                                    </li>
                                    <li className="sso-logo">
                                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os"/>
                                    </li>
                                    <li className="sso-logo">
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="register-container">
                            <p className="register-content">
                                Not a member? <a>Register now</a>
                            </p>
                        </div>
                        </div>
                    </div>
                {/* /* ******************************** */}
                    <div className="login-image-area">
                        <div className="login-image-container">
                            <img className="login-image-right" src="https://www.go.ooo/img/bg-img/Login.jpg" alt="login-image"></img>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
});

export default LoginPage;