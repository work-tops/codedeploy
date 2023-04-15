import React from "react";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import { Link } from "react-router-dom";
import google_logo from "../Images/google-logo.png"
import Footer from "../Footer/Footer";
function SignUpPage() {
    return (
        <div className="row">
            <div className="col-12">
                <HeaderPage />
            </div>
            <div className="col-12">
                <Menubar />
            </div>
            <div className="col-12">
                <div className="bg">
                    <fieldset className="register-field">
                        <h1 className="signup-tit">Start living your work dream</h1>
                        <p className="note">What do you want to do?(You Can dit this Later)</p>
                        <Link to="tradesignupform" role="button">
                            <button className="work">
                                SELLER
                                <br></br>
                                SIGN UP
                            </button>
                        </Link>
                        <Link to="signupform" role="button">
                            <button className="hiring">PROJECT OWNER SIGNUP</button>
                        </Link>
                        <button className="fb-sign-in">Sign-Up With LinkedIn</button>
                        <button className="google-sign-in"><img src={google_logo} className="google-logo" /> Sign-Up With Google</button>
                        <button className="email-sign-in">Sign-Up</button>
                    </fieldset>
                </div>
            </div>
            <div className="col-12">
                <Footer />
            </div>
        </div>
    )
}
export default SignUpPage