import React from "react";
import { Route, Switch } from "react-router-dom";
import AiProductDetails from "../Components/Product/AdminAddProduct";
import AllFreelancer from "../Components/Trader/AdminAllTrader";
import AllJob from "../Components/Job/AllJob";
import AiFreelancer from "../Components/Trader/AdminAddTrader";
import AddJob from "../Components/Job/AddJob";
import AllOrders from "../Components/Orders/AdminAllOrders";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddServices from "../Components/Services/AdminAddServices";
import GlobalCommission from "../Components/Commission/GlobalCommission";
import ServiceCommission from "../Components/Commission/ServiceCommission";
import Serviceslist from "../Components/Services/AdminAllServices"
import CategoryCommission from "../Components/Commission/CategoryCommission"
import AllCategoryCommission from "../Components/Commission/AllCategoryCommission"
import AiLoginPage from "../Components/Admin/AiLoginPage";
import AllStaff from "../Components/Staff/AllStaff";
import AddStaff from "../Components/Staff/AddStaff";
import FreelancerCommission from "../Components/Commission/FreelancerCommission";
import AllFreelancerCommission from "../Components/Commission/AllFreelancerCommission";
import HomePage from "../User-Portal/Components/Front-End Pages/HomePage";
import AllProducts from "../Components/Product/AdminAllProducts";
import Payments from "../Components/Payments/AdminPaymentDetails";
import AllEnquires from "../Components/Conversation/AllEnquires";
import AllReviews from "../Components/Reviews/AdminReviews";
import ConversationDetails from "../Components/Conversation/ConversationDetails";
import ShippingRate from "../Components/ShippingRate/ShippingRate";
import AllTraderTable from "../Components/Trader/AdminAllTrader";
import AddTrader from "../Components/Trader/AdminAddTrader";
import AdminPayment from "../Components/Payments/Payments";
import AllOwnersTable from "../Components/ProjectOwners/AllOwners";
// import AdvAllFreelancer from "../User-Portal/Components/AllFreelancer";

const Routers = () => {
    return (
        <Switch>
            {/* Routes for AI Pages //start */}
            {/* <Route exact path='/products'><ProductList /></Route> */}
            <Route exact path='/'><HomePage /></Route>
            <Route exact path='/homepage'><HomePage /></Route>
            <Route exact path='/dashboard'><Dashboard /></Route>
            <Route path='/AllTraders'><AllTraderTable /></Route>
            <Route path='/AddTraders'><AddTrader /></Route>
            <Route path='/allproduct'><AllProducts /></Route>
            <Route path='/addproduct'><AiProductDetails /></Route>
            <Route path="/alljob"><AllJob /></Route>
            <Route path='/addjob'><AddJob /></Route>
            <Route path='/allorders'><AllOrders /></Route>
            <Route path='/allservices'><Serviceslist /></Route>
            <Route path='/addservices'><AddServices /></Route>
            <Route path='/globalcommission'><GlobalCommission /></Route>
            <Route path='/servicecommission'><ServiceCommission /></Route>
            <Route path="/Tradercommission"><FreelancerCommission /></Route>
            <Route path="/AllCategoryCommission"><AllCategoryCommission /></Route>
            <Route path="/AllTradercommission"><AllFreelancerCommission /></Route>
            <Route path="/categorycommission"><CategoryCommission /></Route>
            <Route path="/payments"><AdminPayment /></Route>
            <Route path="/AllReviews"><AllReviews /></Route>
            <Route path="/AllEnquires"><AllEnquires /></Route>
            <Route path="/ConversationDetails"><ConversationDetails /></Route>
            <Route path="/ShippingRate"><ShippingRate /></Route>
            <Route path="/ailogin"><AiLoginPage /></Route>
            <Route path="/allstaff"><AllStaff /></Route>
            <Route path="/addstaff"><AddStaff /></Route>
            <Route path="/AllOwner"><AllOwnersTable /></Route>
            {/* Routes for AI Pages //end*/}
            {/* <Route path="/allservices"><Serviceslist /></Route> */}
            {/* <Route path='/advallfreelancer'><AdvAllFreelancer/></Route> */}
        </Switch>

    )
}
export default Routers