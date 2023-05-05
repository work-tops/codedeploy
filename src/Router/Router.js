import React from "react";
import { Route, Switch } from "react-router-dom";
import AiProducts from "../Components/Product/AiProducts";
import AiProductDetails from "../Components/Product/AiProductDetails";
import AllFreelancer from "../Components/Freelancer/AllFreelancer";
import AllJob from "../Components/Job/AllJob";
import AiFreelancer from "../Components/Freelancer/AiAddFreelancer";
import AddJob from "../Components/Job/AddJob";
import AllOrders from "../Components/Orders/AllOrders";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddServices from "../Components/Services/AddServices";
import GlobalCommission from "../Components/Commission/GlobalCommission";
import ServiceCommission from "../Components/Commission/ServiceCommission";
import Serviceslist from "../Components/Services/Serviceslist"
import CategoryCommission from "../Components/Commission/CategoryCommission"
import AllCategoryCommission from "../Components/Commission/AllCategoryCommission"
import AiLoginPage from "../Components/Admin/AiLoginPage";
import AllStaff from "../Components/Staff/AllStaff";
import AddStaff from "../Components/Staff/AddStaff";
import FreelancerCommission from "../Components/Commission/FreelancerCommission";
import AllFreelancerCommission from "../Components/Commission/AllFreelancerCommission";
import ProductList from "../User-Portal/Components/Front-End Pages/Lists/ProductList";
import HomePage from "../User-Portal/Components/Front-End Pages/HomePage";
// import AdvAllFreelancer from "../User-Portal/Components/AllFreelancer";

const Routers = () => {
    return (
        <Switch>
            {/* Routes for AI Pages //start */}
            {/* <Route exact path='/productlist'><ProductList /></Route> */}
            <Route exact path='/'><HomePage/></Route>
            <Route exact path='/homepage'><HomePage/></Route>
            <Route exact path='/dashboard'><Dashboard /></Route>
            <Route path='/allfreelancer'><AllFreelancer /></Route>
            <Route path='/addfreelancer'><AiFreelancer /></Route>
            <Route path='/allproduct'><AiProducts /></Route>
            <Route path='/addproduct'><AiProductDetails /></Route>
            <Route path="/alljob"><AllJob /></Route>
            <Route path='/addjob'><AddJob /></Route>
            <Route path='/allorders'><AllOrders /></Route>
            <Route path='/allservices'><Serviceslist /></Route>
            <Route path='/addservices'><AddServices /></Route>
            <Route path='/globalcommission'><GlobalCommission /></Route>
            <Route path='/servicecommission'><ServiceCommission /></Route>
            <Route path="/freelancercommission"><FreelancerCommission/></Route>
            <Route path="/allcommission"><AllCategoryCommission/></Route>
            <Route path="/allfreelancercommission"><AllFreelancerCommission/></Route>
            <Route path="/categorycommission"><CategoryCommission /></Route>
            <Route path="/allservices"><Serviceslist /></Route>
            <Route path="/ailogin"><AiLoginPage/></Route>
            <Route path="/allstaff"><AllStaff/></Route>
            <Route path="/addstaff"><AddStaff/></Route>
            {/* Routes for AI Pages //end*/}
            {/* <Route path='/advallfreelancer'><AdvAllFreelancer/></Route> */}
        </Switch>

    )
}
export default Routers