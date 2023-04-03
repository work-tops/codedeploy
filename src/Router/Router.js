import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectDetails from "../Components/Project/ProjectDetails";
import ProjectListing from "../Components/Project/ProjectListing";
import SignUpPage from "../Components/User/SignUpPage";
import SignUpForm from "../Components/User/SignupForm";
import PostAProject from "../Components/Project/PostAProject";
import AiProducts from "../Components/Product/AiProducts";
import AiProductDetails from "../Components/Product/AiProductDetails";
import AllFreelancer from "../Components/Freelancer/AllFreelancer";
import AllJob from "../Components/Job/AllJob";
import AiFreelancer from "../Components/Freelancer/AiAddFreelancer";
import AddJob from "../Components/Job/AddJob";

const Routers = () => {
    return (
        <Switch>
            {/* Routes for AI Pages //start */}
            <Route exact path='/'><AiProducts/></Route>
            <Route path='/addfreelancer'><AiFreelancer /></Route>
            <Route path='/aiproductdetails'><AiProductDetails /></Route>
            <Route path='/aiproducts'><AiProducts /></Route>
            <Route path='/addjobs'><AddJob /></Route>
            <Route path='/allfreelancer'><AllFreelancer /></Route>
            <Route path="/alljob"><AllJob /></Route>
            {/* Routes for AI Pages //end*/}
            <Route path='/projectdetails'><ProjectDetails /></Route>
            <Route path='/postproject'><PostAProject /></Route>
            <Route path='/projectlisting'><ProjectListing /></Route>
            <Route path='/signupform'><SignUpForm /></Route>
            <Route path='/signuppage'><SignUpPage /></Route>
        </Switch>

    )
}
export default Routers