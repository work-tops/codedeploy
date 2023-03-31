import React from "react";
import Footer from "../Footer/Footer";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import Register from "../User/Register";
import RegisterFooter from "../User/RegisterFooter";
function SignUpPage(){
    return(
        <>
        <HeaderPage/>
        <Menubar/>
        <Register/>
        <RegisterFooter/>
        </>
    )
}
export default SignUpPage