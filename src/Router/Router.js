import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectDetails from "../Components/Project/ProjectDetails";
import ProjectListing from "../Components/Project/ProjectListing";
import SignUpPage from "../Components/User/SignUpPage";
import SignUpForm from "../Components/User/SignupForm";
import PostAProject from "../Components/Project/PostAProject";
import AiProducts from "../Components/Product/AiProducts";
import AiProductDetails from "../Components/Product/AiProductDetails";
import AiAddSeller from "../Components/Seller/AiAddSeller";
import AllSeller from "../Components/Seller/AllSeller";

const Routers = () => {
    return (
        <Switch>
            <Route path='/postproject'><PostAProject /></Route>
            <Route path='/addseller'><AiAddSeller /></Route>
            <Route path='/aiproductdetails'><AiProductDetails /></Route>
            <Route path='/aiproducts'><AiProducts /></Route>
            <Route path='/'><AiProducts /></Route>
            <Route path='/projectdetails'><ProjectDetails /></Route>
            <Route path='/projectlisting'><ProjectListing /></Route>
            <Route path='/signupform'><SignUpForm /></Route>
            <Route path='/signuppage'><SignUpPage /></Route>
            <Route path='/allseller'><AllSeller /></Route>
        </Switch>

    )
}
export default Routers