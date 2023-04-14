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
                        <p className="heading">Start living your work dream</p>
                        <p className="note">What do you want to do?(You Can dit this Later)</p>
                        <button className="work">
                            I WANT TO WORK
                            <br></br>
                            AS A FREELANCER</button>
                        <button className="hiring">I WANT TO HIRE A FREELANCER</button>
                        <button className="fb-sign-in">Sign-Up With LinkedIn</button>
                        <button className="google-sign-in"><img src={google_logo} className="google-logo" /> Sign-Up With Google</button>
                        <Link to="signupform" role="button">
                            <button className="email-sign-in">Sign-Up With Gmail</button>
                        </Link>
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