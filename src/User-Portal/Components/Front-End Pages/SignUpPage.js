import React, { useEffect, useState } from "react";
import HeaderPage from "../Header/SellerPortalHeader";
import Menubar from "../Menubar/Menubar";
import { Link, useHistory } from "react-router-dom";
import google_logo from "../Images/google-logo.png"
import Footer from "../Footer/Footer";
import { createData } from "../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import Header from "../Header/Header";
function SignUpPage() {
    const [toggleForm, setToggleForm] = useState(1);
    const [form, setForm] = useState({})
    let history = useHistory();

    const toggleCard = async (id) => {
        setToggleForm(id);
    }
    const registerUser = async () => {
        const userObject = {
            name: form.first_name + " " + form.last_name,
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            phone: form.phone,
            password: form.password,
            confirm_password: form.password,
            role: toggleForm == 3 ? "Freelancer" : "Owner",
            terms_and_condition: true,
            is_active: true,
            is_approved: true,
            created_by: "1",
        }
        console.log('add user', userObject);
        await createData("register", userObject).then(res=>{
            console.log('response',res);
            toast.success('Signup success')
            history.push('/userlog');
        }).catch(err=>{
            toast.error(err.response.data.message);
        })
        // if (response.status === 201) {
        //     toast.success('Successfully Freelancer Added')
        //     setForm({});
        //     // clearForm();
        //     history.push('/userlog');
        // } else {
        //     toast.error('Something went wrong')
        // }
        // console.log(response);
    }
    const formSubmit = (e) => {
        // console.log('submit button triggered');
        e.preventDefault();
        registerUser();
    }
    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setForm(myData)
    }

    useEffect(() => {
        console.log('loop')
    }, [])


    return (
        <div className="row">
            <div className="col-12">
                <Header />
            </div>
            <div className="col-12">
                <Menubar />
            </div>
            <div className="col-12">
                {toggleForm == 1 &&
                    <div className="bg">
                        <fieldset className="register-field">
                            <h1 className="signup-tit">Start living your work dream</h1>
                            <p className="note">What do you want to do?(You Can dit this Later)</p>
                            <button onClick={() => { toggleCard(3) }} className="work">
                                SELLER
                                <br></br>
                                SIGN UP
                            </button>
                            <button onClick={() => { toggleCard(2) }} className="hiring">PROJECT OWNER SIGNUP</button>
                            <button className="fb-sign-in">Sign-Up With LinkedIn</button>
                            <button className="google-sign-in"><img src={google_logo} className="google-logo" /> Sign-Up With Google</button>
                            <button className="email-sign-in">Sign-Up</button>
                        </fieldset>
                    </div>
                }
                {toggleForm == 2 &&
                    <form onSubmit={(e) => { formSubmit(e) }}>
                        <div className="bg-form">
                            <fieldset className="form-field">
                                <h1 className="signup-tit">Start living your work dream</h1>
                                <label className="signup-sub-tit">Sign Up as a project owner</label>
                                <div>
                                    <input type="text" required name="first_name" value={form.first_name} onChange={(e) => { handleChange(e) }} id="fname" placeholder="First Name" />
                                    <input type="text" required name="last_name" value={form.last_name} onChange={(e) => { handleChange(e) }} id="lname" placeholder="Last Name" />
                                    <input type="email" required name="email" value={form.email} onChange={(e) => { handleChange(e) }} id="email" placeholder="Email" />
                                    <input type="password" required name="password" value={form.password} onChange={(e) => { handleChange(e) }} id="password" placeholder="Password" />
                                    <p className="terms-and-conditions">
                                        By Signing up you accept MyProject's Terms of Service.
                                        I have read and understood MyProject's Privacy Policy.
                                    </p>
                                        <button type="submit" id="sign-up" >SIGN UP</button>
                                    <input type="button" onClick={() => { toggleCard(1) }} id="back" value="Back" />
                                </div>
                            </fieldset>
                        </div>
                    </form>
                }
                {toggleForm == 3 &&
                    <form onSubmit={(e) => { formSubmit(e) }}>
                        <div className="bg-form-1">
                            <fieldset className="form-field">
                                <h1 className="signup-tit">Sign up to be a trade member</h1>
                                <p className="trd-membrt">Get your free trade profile and easily see the jobs customers are posting near you.</p>
                                <div>
                                    <label className="id-ver-label">First Name</label>
                                    <input autoComplete="off" required name="first_name" value={form.first_name} onChange={(e) => { handleChange(e) }} type="text" id="trd-ip-bx" />
                                    <label className="id-ver-label">Last Name</label>
                                    <input autoComplete="off" required name="last_name" value={form.last_name} onChange={(e) => { handleChange(e) }} type="text" id="trd-ip-bx" />
                                    <label className="id-ver-label">Email</label>
                                    <input autoComplete="off" required name="email" value={form.email} onChange={(e) => { handleChange(e) }} type="email" id="trd-ip-bx" />
                                    <label className="id-ver-label">Password</label>
                                    <input autoComplete="off" required name="password" value={form.password} onChange={(e) => { handleChange(e) }} type="password" id="trd-ip-bx" />
                                    <label className="id-ver-label">Phone Number</label>
                                    <input autoComplete="off" required name="phone" value={form.phone} onChange={(e) => { handleChange(e) }} type="text" id="trd-ip-bx" />
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="id-ver-label">Id Verification</label>
                                            <select className="id-prof-dwn">
                                                <option value="Driving License">Driving License</option>
                                                <option value="Passport">Passport</option>
                                                <option value="Bio Metric">Bio Metric</option>
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
                                        <button type="submit" id="sign-up" >SIGN UP</button>
                                    <input onClick={() => { toggleCard(1) }} type="button" id="back" value="Back" />
                                </div>
                            </fieldset>
                        </div>
                    </form>
                }
                    <Toaster />
            </div>
            <div className="col-12">
                <Footer />
            </div>
        </div>
    )
}
export default SignUpPage