import React from "react";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import SignUpFormData from "../User/SignUpFormData";
import Footer from "../Footer/Footer";
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
                <SignUpFormData />
            </div>
            <div className="col-12">
                <Footer/>
            </div>
        </div>
    )
}
export default SignUpForm
