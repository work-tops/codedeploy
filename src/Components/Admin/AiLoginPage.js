import React from "react";
import ai_logo from "../../Images/login-ai.png"
import landscape from "../../Images/Landscape.png"
function AiLoginPage() {
    return (
        <>
            <div className="row">
                <div className="col-12 logo-head-bg">
                    <img src={ai_logo} alt="Ai-logo" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <h1 className="wel-tit">Welcome Staff</h1>
                        <img src={landscape} alt="Bg-img" width="100%" />
                    </div>
                    <div className="col-6">
                        <h4 className="login-heading">STAFF LOGIN</h4>
                        <p className="lo-desc">If you have an account with us , Please login here</p>
                        <input id="aiportal-email" type="email" placeholder="@ Email Address" />
                        <br></br>
                        <input id="aiportal-email" type="password" placeholder="Password" />
                        <br></br>
                        <input type="checkbox" id="rem-me" /> <span className="rem-me">Remember Me</span>
                        <span className="for-pas">Forgot Password</span>
                        <br></br>
                        <button className="ai-signup">SIGN IN</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AiLoginPage