import React from "react";
import '../CSS/register.css'
function SignUpFormData() {
    return (
        <div className="bg-form">
            <fieldset className="form-field">
                <p className="heading">Start living your work dream</p>
                <p className="note">What do you want to do?(You Can dit this Later)</p>
                <button className="work">
                    I WANT TO WORK
                    <br></br>
                    AS A FREELANCER</button>
                <button className="hiring">I WANT TO HIRE A FREELANCER</button>
                <form>
                    <input type="text" id="fname" placeholder="First Name" />
                    <input type="text" id="lname" placeholder="Last Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <p className="terms-and-conditions">
                        By Signing up you accept PeoplePerHour's Terms of Service.
                        I have read and understood PeoplePerHour's Privacy Policy.
                    </p>
                    <input type="button" id="sign-up" value="SIGN UP" />
                    <input type="button" id="back" value="Back" />
                </form>
            </fieldset>
        </div>
    )
}
export default SignUpFormData