import React from "react";
import Footer from "./Components/Footer";
import HeaderPage from "./Components/HeaderPage";
import Menubar from "./Components/Menubar";
import Register from "./Components/Register";
import RegisterFooter from "./Components/RegisterFooter";
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