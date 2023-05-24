import React, { useRef, useState } from "react";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import worktops from '../Projectimages/Conversions.jpg'
import 'swiper/css';
import HIW_1 from '../Projectimages/HIW-1.png'
import HIW_2 from '../Projectimages/HIW-2.png'
import Hiw_mindmap from '../Projectimages/HIW.png'
import { Button, Col, Row } from "react-bootstrap";
import profile from '../Projectimages/Handyman.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function HowItWorks() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-3">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="text-center">
                                <div class="col-md-11 col-lg-11 col-xl-11 pb-7 pb-xl-9 ">
                                    <h3 className="text-dark fw-light">
                                        <div style={{ position: 'relative', top: '5rem' }}>
                                            <span className="typed-start fw-bold" >
                                                A KBB Certified Platform Chosen By
                                                Professionals Who Love Doing What They Do
                                            </span>
                                            <p className="mt-3 mb-3 text-dark">
                                                Every project is precious for the right professional
                                            </p>
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <img src={worktops} className="w-100" />
                        </div>
                    </div>
                    <div className="py-3 bg-light shadow-sm">
                        <div class="container">
                            <div class="d-flex justify-content-center mb-5">
                                <ul class=" nav nav-tabs " role="tablist">
                                    <div className="d-flex flex-row">
                                        <div className="">
                                            <li class="nav-item" role="presentation">
                                                <a style={{ color: "#003f6b", fontSize: "18px" }} class="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">Project Owner</a>
                                            </li>
                                        </div>
                                        <div className="">
                                            <li class="nav-item" role="presentation">
                                                <a style={{ color: "#003f6b", fontSize: "18px" }} class="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">Freelancer</a>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div class="col-lg-12 mt-lg-0">
                                <div class="tab-content">
                                    <div class="tab-pane active show" id="tab-1" role="tabpanel">
                                        <div class="row">
                                            <div class="col-lg-12 details order-2 order-lg-1">
                                                <h2 className="text-center">
                                                    Committed to Connecting You With the Most Relevant and
                                                    Skilled Professionals
                                                </h2>
                                                <p className="text-center">
                                                    Here at MyProject.Al, all projects are welcome as we believe no job is too complicated or irrelevant in the right hands. We give you a
                                                    user-friendly experience as you navigate our pages. Al does its best job to search for the most relevant professionals for your project.
                                                    You have an advantage to review the list and choose the best one, so the right person connects with you.
                                                    All you need to do is give the best description about your requirement.
                                                </p>
                                                <div className="d-flex justify-content-center">
                                                    <Button className="mb-5" as={Link} to="/projectowner" style={{ background: '#003f6b', border: '0px' }}>Sign Up to Begin</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginBottom: '3rem' }} className="mb-5 ">
                                            <div className="container">
                                                <div className="row flex-center">
                                                    <div className="col-md col-lg-5 col-xl-4 ps-lg-6">
                                                        <img className="img-fluid px-6 px-md-0" src={HIW_2} alt="" /></div>
                                                    <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
                                                        <h2>Play with Filters</h2>
                                                        <p style={{ fontSize: '16px' }}>
                                                            Use various filters to narrow your search based on your requirement; Skill, Location, Price Range, Project Type and many
                                                            more.
                                                        </p>
                                                        <Button as={Link} to="/projectlist" style={{ background: '#003f6b', border: '0px' }}>Discover Best Professionals</Button>
                                                    </div>
                                                </div>
                                                <div className="row flex-center mt-7">
                                                    <div className="col-md col-lg-5 col-xl-4 pe-lg-6 order-md-2"><img className="img-fluid px-6 px-md-0" src={HIW_1} alt="" /></div>
                                                    <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
                                                        <h2>Describe Your Requirements</h2>
                                                        <p style={{ fontSize: '16px' }}>
                                                            Select the categories and subcategories relevantly so we can recommend
                                                            appropriate professionals. If something you are searching for is not in option
                                                            you can type “Others"in the search box and add your requirement.
                                                        </p>
                                                        <Button as={Link} to="/postproject" style={{ background: '#003f6b', border: '0px' }}>Upload My Project</Button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div style={{ marginBottom: '3rem' }} className="mb-5  bg-light text-center">

                                            <div className="row">
                                                <div className="col">
                                                    <h1 className="fs-2 fs-sm-4 fs-md-5">You Can Do a Lot</h1>
                                                </div>
                                            </div>
                                            <div className="row mt-6">
                                                <div className="col-lg-4">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-sass fs-4 text-info"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2">Check Ongoing Offers</h5>
                                                            <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                                            <p style={{ fontSize: '16px', color: '#003f6b' }} role="button" className="fw-semibold text-center">Check Current Offers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-6 mt-lg-0">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-node-js fs-5 text-success"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2">Buy Materials Directly</h5>
                                                            <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                                            <p style={{ fontSize: '16px', color: '#003f6b' }} role="button" className="fw-semibold text-center">Check Current Offers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-6 mt-lg-0">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-gulp fs-6 text-danger"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2">Browse the Services</h5>
                                                            <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                                            <p style={{ fontSize: '16px', color: '#003f6b' }} className="fw-semibold text-center">Check Current Offers</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </div> */}
                                        </div>
                                        <div style={{ marginBottom: '3rem' }} className="mb-5  text-center">
                                            <h5 className="mb-3 text-700 text-uppercase">Testimonials</h5>
                                            <div className="col">
                                                <h1 className="fs-2 mb-3 fs-sm-4 fs-md-5">Choose Best Reviewed Professionals</h1>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12 col-xl-12">
                                                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                                            <SwiperSlide>
                                                                <img src={profile} width="100px" height="100px" className="mb-3 rounded-circle" />
                                                                <h4>Peter Lverkus<span className="ms-2 text-700" style={{ fontSize: "14px" }}>/CEO at Google Inc.</span></h4>
                                                                <div className="d-flex justify-content-center">
                                                                    <p style={{ width: '50%' }}>
                                                                        It is a long established fact that a reader will be distracted by the readable content
                                                                        of a page when looking at its layout.
                                                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                                </div>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src={profile} width="100px" height="100px" className="mb-3 rounded-circle" />
                                                                <h4>Saravanan<span className="ms-2 text-700" style={{ fontSize: "14px" }}>/CEO at Google Inc.</span></h4>
                                                                <div className="d-flex justify-content-center">
                                                                    <p style={{ width: '50%' }}>
                                                                        It is a long established fact that a reader will be distracted by the readable content
                                                                        of a page when looking at its layout.
                                                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                                                </div>
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginBottom: '3rem' }} className=" bg-light text-center">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col">
                                                        <h1 className="fs-2 fs-sm-4 fs-md-5">You Can Do a Lot</h1>
                                                    </div>
                                                </div>
                                                <div className="row mt-6">
                                                    <div className="col-lg-4">
                                                        <div className="card card-span h-100">
                                                            <div className="card-span-img">
                                                                <span className="fab fa-sass fs-4 text-info"></span></div>
                                                            <div className="card-body pt-6 pb-4">
                                                                <h5 className="mb-2">Process Payment Securely</h5>
                                                                <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                                                {/* <p style={{ fontSize: '16px', color: '#003f6b' }} role="button" className="fw-semibold text-center">Check Current Offers</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 mt-6 mt-lg-0">
                                                        <div className="card card-span h-100">
                                                            <div className="card-span-img">
                                                                <span className="fab fa-node-js fs-5 text-success"></span></div>
                                                            <div className="card-body pt-6 pb-4">
                                                                <h5 className="mb-2">Rate Your Professional</h5>
                                                                <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                                                {/* <p style={{ fontSize: '16px', color: '#003f6b' }} role="button" className="fw-semibold text-center">Check Current Offers</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 mt-6 mt-lg-0">
                                                        <div className="card card-span h-100">
                                                            <div className="card-span-img">
                                                                <span className="fab fa-gulp fs-6 text-danger"></span></div>
                                                            <div className="card-body pt-6 pb-4">
                                                                <h5 className="mb-2">Follow Up on Chat</h5>
                                                                <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                                                {/* <p style={{ fontSize: '16px', color: '#003f6b' }} className="fw-semibold text-center">Check Current Offers</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="tab-2" role="tabpanel">
                                        <div class="row">
                                            <div class="col-lg-12 details order-2 order-lg-1">
                                                <h3 className="text-center">Join This Global Family of Trusted & Skilled Project Bidders</h3>
                                                <p className="text-center">
                                                    You are just one sign up away from taking the Game-Changing Decision of your Lifetime!
                                                </p>
                                                <div className="d-flex justify-content-center">
                                                    <Button as={Link} to="/freelancer/true" style={{ background: '#003f6b', border: '0px' }}>Only Trusted Bidders May Sign up Here</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="mt-5 fw-bold mb-3 text-center">HOW IT WORKS</h1>
                                        <div className="col-lg-12">
                                            <img src={Hiw_mindmap} className="w-100" />
                                        </div>
                                        <div style={{ marginBottom: '3rem' }} className="bg-light text-center">
                                            {/* <div className="container"> */}
                                            <div className="row">
                                                <div className="col mt-5">
                                                    <h1 className="fs-2 fs-sm-4 fs-md-5">You Can Do a Lot</h1>
                                                </div>
                                            </div>
                                            <div className="row mt-6">
                                                <div className="col-lg-4">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-sass fs-4 text-info"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2">Stand Out With a Strong Profile</h5>
                                                            <p>
                                                                Strengthen your profile by giving the best
                                                                information about your skills in your
                                                                dashboard. Give reason to the buyers why
                                                                they must choose you.
                                                            </p>
                                                            {/* <p style={{ fontSize: '16px', color: '#003f6b' }} role="button" className="fw-semibold text-center">Check Current Offers</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-6 mt-lg-0">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-node-js fs-5 text-success"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2">Upload Images to Promote Your Business</h5>
                                                            <p>
                                                                Your past project will help buyers make their decision, so make it attractive.
                                                                Upload your best project works. Let the world know how skilled you are!
                                                            </p>
                                                            {/* <p style={{ fontSize: '16px', color: '#003f6b' }} role="button" className="fw-semibold text-center">Check Current Offers</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-6 mt-lg-0">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-gulp fs-6 text-danger"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2">Facility to Review Your Clients</h5>
                                                            <p>
                                                                Once you complete a project, leave a review about your buyers on their profile page.
                                                            </p>
                                                            {/* <p style={{ fontSize: '16px', color: '#003f6b' }} className="fw-semibold text-center">Check Current Offers</p> */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 mt-6 mt-lg-6">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-gulp fs-6 text-danger"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2">On-Time Payments</h5>
                                                            <p>
                                                                Get paid instantly upon completion of the project
                                                            </p>
                                                            {/* <p style={{ fontSize: '16px', color: '#003f6b' }} className="fw-semibold text-center">Check Current Offers</p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-6 mt-lg-6">
                                                    <div className="card card-span h-100">
                                                        <div className="card-span-img">
                                                            <span className="fab fa-gulp fs-6 text-danger"></span></div>
                                                        <div className="card-body pt-6 pb-4">
                                                            <h5 className="mb-2"> Your Review Display page</h5>
                                                            <p>
                                                                Each project winds up with the customer reviews and stars on
                                                                your profile which helps interested buyers understand you
                                                                and increase chances of getting selected for their projects.
                                                                Highly rated professionals benefit from better rankings, a
                                                                higher profile, and greater recognition in the marketplace.
                                                            </p>
                                                            {/* <p style={{ fontSize: '16px', color: '#003f6b' }} className="fw-semibold text-center">Check Current Offers</p> */}
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </Col>
            </Row>
            {/*<div style={{marginBottom:'3rem'}} className="mb-5 " className="light bg-dark">
                <div className="bg-holder overlay" style={{ backgroundImage: `url(${worktops})`, backgroundPosition: 'center top' }}></div>
                
                <div className="container">
                    <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                            <p className="fs-3 fs-sm-4 text-white">Join our community of 20,000+ developers and content creators on their mission to build better sites and apps.</p><button className="btn btn-outline-light border-2 rounded-pill btn-lg mt-4 fs-0 py-2" type="button">Start your webapp</button>
                        </div>
                        </div>
                </div>
           </div> */}


            {/*<div style={{marginBottom:'3rem'}} className="mb-5 " className="bg-dark pt-8 pb-4 light">
                <div className="container">
                    <div className="position-absolute btn-back-to-top bg-dark"><a className="text-600" href="#banner" data-bs-offset-top="0">
                        <span className="fas fa-chevron-up" data-fa-transform="rotate-45"></span></a></div>
                        <div className="row">
                        <div className="col-lg-4">
                            <h5 className="text-uppercase text-white opacity-85 mb-3">Our Mission</h5>
                            <p className="text-600">Falcon enables front end developers to build custom streamlined user interfaces in a matter of hours, while it gives backend developers all the UI elements they need to develop their web app.And it's rich design can be easily integrated with backends whether your app is based on ruby on rails, laravel, express or any other server side system.</p>
                            <div className="icon-group mt-4"><a className="icon-item bg-white text-facebook" href="#!">
                                <span className="fab fa-medium-m"></span></a></div>
                        </div>
                        <div className="col ps-lg-6 ps-xl-8">
                            <div className="row mt-5 mt-lg-0">
                            <div className="col-6 col-md-3">
                                    <h5 className="text-uppercase text-white opacity-85 mb-3">Company</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-1"><a className="link-600" href="#!">About</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Contact</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Careers</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Blog</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Terms</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Privacy</a></li>
                                        <li><a className="link-600" href="#!">Imprint</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h5 className="text-uppercase text-white opacity-85 mb-3">Product</h5>
                                    <ul className="list-unstyled">
                                        <li className="mb-1"><a className="link-600" href="#!">Features</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Roadmap</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Changelog</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Pricing</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Docs</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">System Status</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Agencies</a></li>
                                        <li className="mb-1"><a className="link-600" href="#!">Enterprise</a></li>
                                    </ul>
                                </div>
                                <div className="col mt-5 mt-md-0">
                                    <h5 className="text-uppercase text-white opacity-85 mb-3">From the Blog</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <h5 className="fs-0 mb-0"><a className="link-600" href="#!"> Interactive graphs and charts</a></h5>
                                            <p className="text-600 opacity-50">Jan 15 • 8min read </p>
                                        </li>
                                        <li>
                                            <h5 className="fs-0 mb-0"><a className="link-600" href="#!"> Lifetime free updates</a></h5>
                                            <p className="text-600 opacity-50">Jan 5 • 3min read ★</p>
                                        </li>
                                        <li>
                                            <h5 className="fs-0 mb-0"><a className="link-600" href="#!"> Merry Christmas From us</a></h5>
                                            <p className="text-600 opacity-50">Dec 25 • 2min read</p>
                                        </li>
                                        <li>
                                            <h5 className="fs-0 mb-0"><a className="link-600" href="#!"> The New Falcon Theme</a></h5>
                                            <p className="text-600 opacity-50">Dec 23 • 10min read </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <div style={{marginBottom:'3rem'}} className="mb-5 " className="py-0 bg-dark light">
                <div>
                    <div className="container py-3">
                        <div className="row justify-content-between fs--1">
                            <div className="col-12 col-sm-auto text-center">
                                <p className="mb-0 text-600 opacity-85">Thank you for creating with Falcon <span className="d-none d-sm-inline-block">| </span> 2022 © <a className="text-white opacity-85" href="https://themewagon.com">Themewagon</a></p>
                            </div>
                            <div className="col-12 col-sm-auto text-center">
                                <p className="mb-0 text-600 opacity-85">v3.14.0</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div> */}
        </>
    )
}
export default HowItWorks