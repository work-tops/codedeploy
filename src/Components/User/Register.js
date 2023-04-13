import React from "react";
import { Link } from "react-router-dom";
import google_logo from "../../Images/google-logo.png"
function Register() {
    return (
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
                <button className="google-sign-in"><img src={google_logo} className="google-logo"/> Sign-Up With Google</button>
                <Link to="signupform" role="button">
                    <button className="email-sign-in">Sign-Up With Gmail</button>
                </Link>
            </fieldset>
        </div>
    )
}
export default Register


