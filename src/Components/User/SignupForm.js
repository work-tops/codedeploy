import React from "react";
import FooterPageThree from "../Footer/FooterPage3";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import Register from "../User/Register";
import RegisterFooter from "../User/RegisterFooter";
import SignUpFormData from "../User/SignUpFormData";
function SignUpForm() {
    return (
        <>
            <HeaderPage />
            <Menubar />
            <SignUpFormData />
            <RegisterFooter />
        </>
    )
}
export default SignUpForm
