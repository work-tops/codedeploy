import React from "react";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import Register from "../User/Register";
import Footer from "../Footer/Footer";
function SignUpPage(){
    return(
        <div className="row">
        <div className="col-12">
        <HeaderPage/>
        </div>
        <div className="col-12">
        <Menubar/>
        </div>
        <div className="col-12">
        <Register/>
        </div>
        <div className="col-12">
        <Footer/>
        </div>
        </div>
    )
}
export default SignUpPage