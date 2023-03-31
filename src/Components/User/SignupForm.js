import React from "react";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
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
