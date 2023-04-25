import React from "react";
import { Route, Switch } from "react-router-dom";
import ProposalList from "../Front-End Pages/ProposalList";
import PostJob1 from "../Front-End Pages/PostJob1";
import ListJobs from "../Front-End Pages/ListJobs";
import JobDetails from "../Front-End Pages/JobDetails";
import ProjectListing from "../Front-End Pages/ProjectListing";
import SignUpPage from "../Front-End Pages/SignUpPage";
import JobProposal from "../Front-End Pages/JobProposal";
import PostJob2 from "../Front-End Pages/PostJob2";
import HomePage from "../Front-End Pages/HomePage";
// import TradeSignUpForm from "../Front-End Pages/TradeMemberSignupForm";
import UserLogin from '../Front-End Pages/Userlogin'
import ForgetPasswordForm from "../authentication/ForgetPasswordForm";
import LoginPortal from "../Front-End Pages/LoginPortal";
import RegisterPortal from "../Front-End Pages/RegisterPortal";
import ProjectOwnerRegister from "../Front-End Pages/ProjectOwnerRegister";
import SellerRegister from "../Front-End Pages/SellerSignUp";
import FrontendAddProduct from '../Front-End Pages/FrontendAddProduct'
// import FrontEndAllProducts from "../Front-End Pages/FrontendAllProducts";
const FrontEndRouters = () => {
    return (
        <Switch>
            <Route path='/jobproposal'><JobProposal /></Route>
            <Route path='/projectlisting'><ProjectListing /></Route>
            <Route path='/signup'><SignUpPage /></Route>
            <Route path="/proposallist"><ProposalList /></Route>
            <Route path="/postjob1"><PostJob1 /></Route>
            <Route path="/postjob2"><PostJob2 /></Route>
            <Route path="/listjobs"><ListJobs /></Route>
            <Route path="/jobdetails/:jobid"><JobDetails /></Route>
            <Route path="/homepage"><HomePage/></Route>
            <Route path='/userlog'><UserLogin/></Route>
            <Route path='/forgetpassword'><ForgetPasswordForm/></Route>
            <Route path='/loginportal'><LoginPortal/></Route>
            <Route path='/registerportal'><RegisterPortal/></Route>
            <Route path='/projectownersignup'><ProjectOwnerRegister/></Route>
            <Route path='/sellersignup'><SellerRegister/></Route>
            <Route path='/user/addproduct'><FrontendAddProduct/></Route>
            {/* <Route path='/user/allproduct'><FrontEndAllProducts/></Route> */}
            <Route path="/user/"><HomePage/></Route>
        </Switch>

    )
}
export default FrontEndRouters