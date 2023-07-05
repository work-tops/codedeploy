import React, { } from "react";
import { Route, Switch } from "react-router-dom";
import ProposalList from "../Front-End Pages/ProposalList";
import ListJobs from "../Front-End Pages/ListJobs";
import JobDetails from "../Front-End Pages/JobDetails";
import ProjectListing from "../Front-End Pages/ProjectListing";
import SignUpPage from "../Front-End Pages/SignUpPage";
import JobProposal from "../Front-End Pages/JobProposal";
import UserLogin from '../Front-End Pages/Login/UserLogin'
// import LoginPortal from "../Front-End Pages/LoginPortal";
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
import EditProduct from "../Front-End Pages/EditProduct";
import SellerList from "../Front-End Pages/Lists/SellerList";
import ServiceInformation from "../Front-End Pages/Lists/ServiceInformation";
import RequestQuote from "../Front-End Pages/Lists/RequestQuote";
import Cart from "../Front-End Pages/Cart/Cart";
import ContactUs from "../Footer/Contactus";
import PrivacyPolicy from "../Footer/PrivacyPolicy";
import TermsOfUse from "../Footer/TermsofUse";
import SellerLogin from "../Front-End Pages/Login/FreelancerLogin";
import PostProject from "../../Components/Front-End Pages/Post_Project/postProject";
import ProductList from "../Front-End Pages/ProductList/ProductLists";
import ProductGrid from "../Front-End Pages/ProductList/ProductGrid";
import PostJob1 from "../Front-End Pages/PostJob1";
import PostJob2 from "../Front-End Pages/PostJob2";
import PublicProfile from "../Front-End Pages/Profile/PublicProfile";
import ForgetPasswordFreelancer from "../Front-End Pages/Login/FreelancerForgetPassword";
import FreelanceConMail from "../Front-End Pages/Login/FreelancerConMail";
import FreelancerResetPwd from "../Front-End Pages/Login/FreelancerRestPwd";
import FreelancerLogout from "../Front-End Pages/Login/FreelancerLogout";
import UserForgetPassword from "../Front-End Pages/Login/UserForgetPassword";
import UserResetPwd from "../Front-End Pages/Login/UserResetPwd";
import UserConMail from "../Front-End Pages/Login/UserConMail";
import UserLogout from "../Front-End Pages/Login/UserLogout";
import ProposalDetails from "../Front-End Pages/ProposalDetails";
import OwnerEnquiryDetails from "../Front-End Pages/EnquiryDetailedView";
import SellerEnquiryCard from "../Front-End Pages/MiniCard/POProductEnquiryCard";
import SellerEnquiryDetails from "../Front-End Pages/SellerEnquiryDetailedView";
import GetQuote from "../Front-End Pages/Lists/GetQuote";
import Chat from "../Front-End Pages/Chat";
import FreelancerProfile from "../Front-End Pages/Profile/FreelancerProfile";
import FreelancerEditProfile from "../Front-End Pages/Login/FreelancerEditProfile";
import InvoiceFreelancerCard from "../Front-End Pages/MiniCard/InvoiceFreelancerCard";
import WorkStreamDetails from "../Front-End Pages/WorkstreamDetails";
import Checkout from "../Front-End Pages/Cart/Checkout";
import Editpostproject from "../Front-End Pages/Post_Project/Editpostproject";
import EditProposal from "../Front-End Pages/EditProposal";
import InvoiceCheckout from "../Front-End Pages/Cart/InvoiceCheckout";
import ImageSlider from "../Front-End Pages/Login/UserLogin";
import RefundPolicy from "../Footer/RefundPolicy";
import ShippingPolicy from "../Footer/ShippingPolicy";
import MSPPolicy from "../Footer/MspPolicy";
import Carrer from "../Footer/Carrer";
import FAQ from "../Footer/FAQ";
import About from "../Footer/Aboutus";
import NewEstimate from "../Front-End Pages/Profile/NewEstimate";
import AllSellerList from "../Front-End Pages/Lists/AllServiceProviderList";
import Estimate from "../Front-End Pages/Estimate";
import EditEstimate from "../Front-End Pages/Profile/EditEstimate";
import GuestCheckout from "../Front-End Pages/Cart/GuestCheckout";
import OwnerEstimate from "../Front-End Pages/OwnerEstimate";
import Notifications from '../Front-End Pages/Notifications'
import EditInvoice from "../Front-End Pages/Profile/EditInvoice";
import TextareaWithOptions from "../Front-End Pages/Profile/BussinessInformation";
import NewInvoice from "../Front-End Pages/Profile/NewInvoice";
import RepostProject from "../Front-End Pages/Post_Project/RepostProject";
import ServiceEnquiryDetails from "../Front-End Pages/EnquiryDetailedView";
import ProductEnquiryDetails from "../Front-End Pages/SellerEnquiryDetailedView";
import TraderWorkStreamDetails from "../Front-End Pages/TraderWorkstreamDetails";
const FrontEndRouters = () => {
    return (
        <Switch>
            {/* proper order routes */}
            <Route path='/Project-owner/login'><UserLogin /></Route>
            <Route path='/Project-owner/register'><SignUpPage /></Route>
            <Route path="/freelancer/:login"><SellerLogin /></Route>
            <Route path="/products"><ProductList /></Route>
            {/* <Route path="/productgrid1"><ProductGrid /></Route> */}
            <Route path="/projects"><ListJobs /></Route>
            <Route path="/jobdetails/:jobid"><JobDetails /></Route>
            <Route path='/jobproposal/:jobid/jobproposal'><JobProposal /></Route>

            <Route path='/services'><ServiceList /></Route>

            <Route path="/post-a-project"><PostProject /></Route>
            {/* proper order routes end */}

            {/* <Route path='/projectsing'><ProjectListing /></Route> */}

            {/* Proposal  */}
            <Route path="/proposal-list"><ProposalList /></Route>
            <Route path="/proposal-details"><ProposalDetails /></Route>
            {/* Proposal  */}

            {/*  */}
            <Route path='/dashboard-addproduct'><FrontendAddProduct /></Route>
            <Route path='/dashboard-addservice'><FrontendAddService /></Route>
            <Route path='/how-it-work'><HowItWorks /></Route>
            {/* <Route path='/Project-Owner/profile'><ProjectOwnerProfile /></Route> */}
            {/* <Route path='/Project-Owner/Settings'><ProjectOwnerSettings /></Route> */}
            {/* <Route path='/Seller/profile'><SellerProfile /></Route> */}
            {/* <Route path='/Seller/Settings'><SellerSettings /></Route> */}
            {/* <Route path='/Seller/Landing'><SellerLandingPage /></Route> */}
            <Route path='/dashboard-products'><AddProductCard /></Route>
            <Route path='/dashboard-services'><AddServiceCard /></Route>
            <Route path='/user/myproposals'><ProposalCard /></Route>

            {/* Enquries */}
            <Route path='/enquire'><ProductEnquiresCard /></Route>
            <Route path="/enquire-service"><ServiceEnquiryDetails /></Route>
            <Route path="/enquire-product"><ProductEnquiryDetails /></Route>
            {/* Enquries */}

            {/* Quote */}
            <Route path="/s/enquiry"><RequestQuote /></Route>
            <Route path="/p/enquiry"><GetQuote /></Route>
            {/* Quote */}
            {/* <Route path='/reviewscard'><ReviewsCard /></Route> */}
            {/* <Route path='/Project-owner/login/Landing'><ProjectOwnerLandingPage /></Route> */}
            <Route path='/dashboard/my-project'><OpenProjectCard /></Route>
            <Route path='/workStreamCard'><WorkStreamCard /></Route>

            {/* <Route path='/POReviewsCard'><POReviewCard /></Route> */}
            {/* <Route path='/productList'><ProductList /></Route> */}

            <Route path='/productdetails/:proid'><ProductDetails /></Route>
            <Route path='/wishlist/products'><WishListProductCard /></Route>
            <Route path='/wishlist/projects'><ProjectWishListCard /></Route>
            <Route path='/wishlist/followers'><WishListSellerCard /></Route>
            <Route path='/projectowner/profile'><MyProfile /></Route>
            <Route path='/user/allservices'><AllServices /></Route>
            {/* <Route path="/BussinessInformation"><TextareaWithOptions /></Route> */}
            {/* <Route path="/paymentinfo"><PaymentInfo /></Route> */}
            {/* <Route path="/invoice"><Invoice /></Route>
            <Route path="/Granite"><Granite /></Route>
            <Route path="/Quartz"><Quartz /></Route> */}
            {/* <Route path="/Marble"><Marble /></Route> */}
            {/* <Route path="/userallproduct"><FrontEndAllProducts /></Route> */}
            {/* <Route path="/userallservice"><AllServices /></Route> */}
            {/* <Route path="/editProduct"><EditProduct /></Route> */}
            <Route path="/service/categories"><SellerList /></Route>
            <Route path="/service-provider"><ServiceInformation /></Route>
            <Route path="/cart"><Cart /></Route>
            <Route path="/privacypolicy"><PrivacyPolicy /></Route>
            <Route path="/contact-us"><ContactUs /></Route>
            {/* <Route path="/refundpolicy"><RefundPolicy /></Route>
            <Route path="/shippingpolicy"><ShippingPolicy /></Route> */}
            {/* <Route path="/msppolicy"><MSPPolicy /></Route> */}
            <Route path="/termsofuse"><TermsOfUse /></Route>
            <Route path="/Career"><Carrer /></Route>
            <Route path="/faq"><FAQ /></Route>
            <Route path="/aboutus"><About /></Route>
            <Route path="/checkout"><Checkout /></Route>
            {/* <Route path="/postjob1"><PostJob1 /></Route>
            <Route path="/postjob2"><PostJob2 /></Route> */}
            {/* New Pages */}
            <Route path="/trader-profile-public"><PublicProfile /></Route>
            {/* Freelancer */}
            <Route path="/freelance/forgetpassword"><ForgetPasswordFreelancer /></Route>
            <Route path="/freelance/confirm-mail"><FreelanceConMail /></Route>
            <Route path="/freelance/reset-pwd"><FreelancerResetPwd /></Route>
            <Route path="/freelance/logout"><FreelancerLogout /></Route>
            {/* Project Owner */}
            <Route path="/user/reset-pwd"><UserResetPwd /></Route>
            <Route path="/user/confirm-mail"><UserConMail /></Route>
            <Route path="/user/logout"><UserLogout /></Route>
            <Route path="/user/forgetpassword"><UserForgetPassword /></Route>
            {/* New Pages */}

            {/* New Pages */}

            <Route path="/Notifications"><Notifications /></Route>
            <Route path="/conversation"><Chat /></Route>
            <Route path="/trader/profile"><FreelancerProfile /></Route>
            <Route path="/user/setting"><FreelancerEditProfile /></Route>
            <Route path='/p/invoices'><InvoicedueCard /></Route>
            <Route path="/t/invoices"><InvoiceFreelancerCard /></Route>
            <Route path="/work-stream"><WorkStreamDetails /></Route>
            {/* <Route path="/TraderWorkstreamDetails"><TraderWorkStreamDetails/></Route> */}
            <Route path="/EditPostProject"><Editpostproject /></Route>
            <Route path="/edit-proposal"><EditProposal /></Route>
            <Route path="/invoice/checkout"><InvoiceCheckout /></Route>
            <Route path="/new-estimate"><NewEstimate /></Route>
            <Route path="/edit-estimate"><EditEstimate /></Route>
            {/* <Route path="/Allsellerlist"><AllSellerList /></Route> */}
            <Route path="/t/estimate-list"><Estimate /></Route>
            <Route path="/g/checkout"><GuestCheckout /></Route>
            <Route path="/p/estimate-list"><OwnerEstimate /></Route>
            <Route path="/edit-invoice"><EditInvoice /></Route>
            <Route path="/new-invoice"><NewInvoice /></Route>
            <Route path="/RepostProject"><RepostProject /></Route>
            <Route path="/projectOwnerprofile"><ProjectOwnerProfile/></Route>
            {/* New Pages */}
        </Switch>

    )
}
export default FrontEndRouters