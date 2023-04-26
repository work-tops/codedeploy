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
import UserLogin from '../Front-End Pages/Userlogin'
import ForgetPasswordForm from "../authentication/ForgetPasswordForm";
import LoginPortal from "../Front-End Pages/LoginPortal";
import RegisterPortal from "../Front-End Pages/RegisterPortal";
import ProjectOwnerRegister from "../Front-End Pages/ProjectOwnerRegister";
import SellerRegister from "../Front-End Pages/SellerSignUp";
import FrontendAddProduct from '../Front-End Pages/FrontendAddProduct'
import FrontendAddService from "../Front-End Pages/FrontEndAddService";
import HowItWorks from "../Front-End Pages/HowItWorks";
import SellerProfile from "../Front-End Pages/SellerProfile";
import ProjectOwnerProfile from "../Front-End Pages/ProjectOwnerProfile";
import ProjectOwnerSettings from "../Front-End Pages/ProjectOwnerSettings";
import SellerSettings from "../Front-End Pages/SellerSettings";
import SellerLandingPage from "../Front-End Pages/SellerLandingPage";
import AddProductCard from "../Front-End Pages/MiniCard/AddProductCard";
import AddServiceCard from "../Front-End Pages/MiniCard/AddServiceCard";
import ProposalCard from "../Front-End Pages/MiniCard/ProposalCard";
import ProductEnquiresCard from "../Front-End Pages/MiniCard/ProductEnquiresCard";
import ReviewsCard from "../Front-End Pages/MiniCard/ReviewsCard";
import ProjectOwnerLandingPage from "../Front-End Pages/ProjectOwnerLandingPage";
import OpenProjectCard from "../Front-End Pages/MiniCard/OpenProjectCard";
import WorkStreamCard from "../Front-End Pages/MiniCard/WorkStreamCard";
import InvoicedueCard from "../Front-End Pages/MiniCard/InvoiceDueCard";
import POProductEnquiresCard from "../Front-End Pages/MiniCard/POProductEnquiryCard";
import POReviewCard from "../Front-End Pages/MiniCard/POReviewCard";
import ProductList from "../Front-End Pages/Lists/ProductList";
import ServiceList from '../Front-End Pages/Lists/ServiceList'
import FrontEndAllProducts from "../Front-End Pages/FrontendAllProducts";
import ProductDetails from "../Front-End Pages/ProductDetails";
import WishListProductCard from "../Front-End Pages/MiniCard/WishlistProductCard";
import ProjectWishListCard from "../Front-End Pages/MiniCard/ProjectWishlistCard";
import WishListSellerCard from "../Front-End Pages/MiniCard/WishlistSellerCard";
import MyProfile from "../Front-End Pages/Profile/MyProfile";
import BussinessInformation from "../Front-End Pages/Profile/BussinessInformation";
import AllServices from "../Front-End Pages/AllServices";
import PaymentInfo from "../Front-End Pages/Profile/PaymentInfo";
import Invoice from "../Front-End Pages/Profile/Invoice";
import Granite from "../Front-End Pages/Categories/Granite";
import Quartz from "../Front-End Pages/Categories/Quartz";
import Marble from "../Front-End Pages/Categories/Marble";
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
            <Route path="/homepage"><HomePage /></Route>
            <Route path='/userlog'><UserLogin /></Route>
            <Route path='/forgetpassword'><ForgetPasswordForm /></Route>
            <Route path='/loginportal'><LoginPortal /></Route>
            <Route path='/registerportal'><RegisterPortal /></Route>
            <Route path='/projectownersignup'><ProjectOwnerRegister /></Route>
            <Route path='/sellersignup'><SellerRegister /></Route>
            <Route path='/user/addproduct'><FrontendAddProduct /></Route>
            <Route path='/user/addservices'><FrontendAddService /></Route>
            <Route path='/how-it-works'><HowItWorks /></Route>
            <Route path='/Project-Owner/profile'><ProjectOwnerProfile /></Route>
            <Route path='/Project-Owner/Settings'><ProjectOwnerSettings /></Route>
            <Route path='/Seller/profile'><SellerProfile /></Route>
            <Route path='/Seller/Settings'><SellerSettings /></Route>
            <Route path='/Seller/Landing'><SellerLandingPage /></Route>
            <Route path='/addproductcard'><AddProductCard /></Route>
            <Route path='/addservicecard'><AddServiceCard /></Route>
            <Route path='/proposalcard'><ProposalCard /></Route>
            <Route path='/productenquirescard'><ProductEnquiresCard /></Route>
            <Route path='/reviewscard'><ReviewsCard /></Route>
            <Route path='/ProjectOwner/Landing'><ProjectOwnerLandingPage /></Route>
            <Route path='/openProjectCard'><OpenProjectCard /></Route>
            <Route path='/workStreamCard'><WorkStreamCard /></Route>
            <Route path='/InvoicedueCard'><InvoicedueCard /></Route>
            <Route path='/POproductenquirescard'><POProductEnquiresCard /></Route>
            <Route path='/POReviewsCard'><POReviewCard /></Route>
            <Route path='/productList'><ProductList /></Route>
            <Route path='/servicelist'><ServiceList /></Route>
            <Route path='/user/allproduct'><FrontEndAllProducts /></Route>
            <Route path='/productdetails'><ProductDetails /></Route>
            <Route path='/wishlist/product'><WishListProductCard /></Route>
            <Route path='/wishlist/project'><ProjectWishListCard /></Route>
            <Route path='/wishlist/seller'><WishListSellerCard /></Route>
            <Route path='/MyProfile'><MyProfile /></Route>
            <Route path='/user/allservices'><AllServices /></Route>
            <Route path="/BussinessInformation"><BussinessInformation /></Route>
            <Route path="/paymentinfo"><PaymentInfo /></Route>
            <Route path="/invoice"><Invoice /></Route>
            <Route path="/Granite"><Granite /></Route>
            <Route path="/Quartz"><Quartz /></Route>
            <Route path="/Marble"><Marble /></Route>
        </Switch>

    )
}
export default FrontEndRouters