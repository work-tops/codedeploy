import React from "react";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function SignUpForm() {
    return (
        <div className="row">
            <div className="col-12 prj-det-header">
                <HeaderPage />
            </div>
            <div className="col-12">
                <Menubar />
            </div>
            <div className="col-12">
                <div className="bg-form">
                    <fieldset className="form-field">
                        <h1 className="signup-tit">Start living your work dream</h1>
                        {/* <p className="note">What do you want to do?(You Can dit this Later)</p>
                <button className="work">
                    I WANT TO WORK
                    <br></br>
                    AS A FREELANCER</button>
                <button className="hiring">I WANT TO HIRE A FREELANCER</button> */}
                        <label className="signup-sub-tit">Sign Up as a project owner</label>
                        <form>
                            <input type="text" id="fname" placeholder="First Name" />
                            <input type="text" id="lname" placeholder="Last Name" />
                            <input type="email" id="email" placeholder="Email" />
                            <input type="password" id="password" placeholder="Password" />
                            <p className="terms-and-conditions">
                                By Signing up you accept MyProject's Terms of Service.
                                I have read and understood MyProject's Privacy Policy.
                            </p>
                            <button id="sign-up">SIGN UP</button>
                            <Link to="signuppage" role="button"><input type="button" id="back" value="Back" /></Link>
                        </form>
                    </fieldset>
                </div>
            </div>
            <div className="col-12">
                <Footer />
            </div>
        </div>
    )
}
export default SignUpForm
