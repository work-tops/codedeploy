import React from "react";
import '../CSS/register.css'
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
                <button className="fb-sign-in">SIGN UP WITH FACEBOOK</button>
                <button className="email-sign-in">SIGN UP WITH EMAIL</button>
            </fieldset>
        </div>
    )
}
export default Register