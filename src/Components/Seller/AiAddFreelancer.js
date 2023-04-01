import React from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";


function AiFreelancer() {
    return (
        <>
            <div className="add-seller-div row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
                        <div className="content-div">
                            <div>
                                <p className="ai-title">Freelancer/Add Freelancer</p>
                                <p className="ai-add-title">Add Freelancer</p>
                                <p className="ai-title-desc">Here you can add your freelancer</p>
                                <br></br>
                                <form className="add-seller-form">
                                    <span className="category">First Name</span> <span className="seller-email">Last Name</span>
                                    <br></br>
                                    <input id="aipro-category" type='text' />
                                    <input id="aipro-email" type='text' />
                                    <br></br>
                                    <label>Email</label>
                                    <input id="aipro-barcode" type='email' />
                                    <br></br>
                                    <span className="category">Phone Number</span> <span className="dob">Date of Birth</span>
                                    <br></br>
                                    <input id="aipro-category" type='text' />
                                    <input id="aipro-email" type='text' />
                                    <br></br>
                                    <span className="category">Company Name</span> <span className="dob">Skills</span>
                                    <br></br>
                                    <input id="aipro-category" type='text' />
                                    <input id="aipro-email" type='text' />
                                    <br></br>
                                    <label>Company Address</label>
                                    <textarea id="aipro-description"></textarea>
                                    <label>
                                        Billing Address <input type='checkbox' id="bill-check" />
                                        <span className="billing-add-note">{' '}address and the billing address are same.</span>
                                    </label>
                                    <textarea id="aipro-description"></textarea>
                                    <label>Description</label>
                                    <textarea id="aipro-description"></textarea>
                                    <br></br>
                                    <span className="category">Password</span> <span className="seller-email">Confirm Password</span>
                                    <br></br>
                                    <input id="aipro-category" type='password' />
                                    <input id="aipro-email" type='text' />
                                    <br></br>
                                    <input id="terms-conditions" type='checkbox' /><span className="agree-note">You agree to the terms and conditions.</span>
                                    <br></br>
                                    <button className="create-acc-btn">Create Account</button>
                                    <button className="cancel-btn">Cancel</button>
                                </form>
                            </div>
                            <div className="freelance-form-div">
                                <form className="freelance-form">
                                    <h5 className="form-title">Freelancer Type</h5>
                                    <input type='checkbox' id="ff-chbox" /><span>Fabricators</span>
                                    <br></br>
                                    <input type='checkbox' id="ff-chbox" /><span>Kitchen Designer</span>
                                    <br></br>
                                    <input type='checkbox' id="ff-chbox" /><span>Interior Designer</span>
                                    <br></br>
                                    <input type='checkbox' id="ff-chbox" /><span>Stone Seller</span>
                                    <br></br>
                                    <input type='checkbox' id="ff-chbox" /><span>Slink Manufacture</span>
                                    <br></br>
                                    <input type='checkbox' id="ff-chbox" /><span>Tap Seller</span>
                                    <br></br>
                                    <input type='checkbox' id="ff-chbox" /><span>Construction Company</span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AiFreelancer