import React from "react";
import FooterPageThree from "./Components/FooterPage3";
import HeaderPage from "./Components/HeaderPage";
import Menubar from "./Components/Menubar";
import Register from "./Components/Register";
import RegisterFooter from "./Components/RegisterFooter";
import SignUpFormData from "./Components/SignUpFormData";
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
