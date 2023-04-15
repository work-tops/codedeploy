import React from "react";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
function TradeSignUpForm() {
    return (
        <div className="row">
            <div className="col-12 prj-det-header">
                <HeaderPage />
            </div>
            <div className="col-12">
                <Menubar />
            </div>
            <div className="col-12">
                <div className="bg-form-1">
                    <fieldset className="form-field">
                        <h1 className="signup-tit">Sign up to be a trade membert</h1>
                        <p className="trd-membrt">Get your free trade profile and easily see the jobs customers are posting near you.</p>
                        <form>
                            <label className="id-ver-label">First Name</label>
                            <input autoComplete="off" type="text" id="trd-ip-bx" />
                            <label className="id-ver-label">Last Name</label>
                            <input autoComplete="off" type="text" id="trd-ip-bx" />
                            <label className="id-ver-label">Email</label>
                            <input autoComplete="off" type="email" id="trd-ip-bx" />
                            <label className="id-ver-label">Phone Number</label>
                            <input autoComplete="off" type="text" id="trd-ip-bx" />
                            <div className="row">
                                <div className="col-6">
                                    <label className="id-ver-label">Id Verification</label>
                                    <select className="id-prof-dwn">
                                        <option>Driving License</option>
                                        <option>Passport</option>
                                        <option>Bio Metric</option>
                                    </select>
                                </div>
                                <div className="col-6">
                                    <button className="upd-fil">Upload File</button>
                                </div>
                            </div>
                            <p className="terms-and-conditions">
                                <input type="checkbox" />I'd like to receive MyProject News, Advice and Tips
                                <br></br>
                                <br></br>
                                <input type="checkbox" />I agree to the MyProject terms & conditions, the Quote Tool terms &
                                conditions and the data sharing agreement
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
export default TradeSignUpForm
