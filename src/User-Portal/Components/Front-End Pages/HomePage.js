import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer"
import Menubar from "../Menubar/Menubar"
import interior_design from "../Images/interior-design-cost-in-mumbai.jpg"
import interior_design_1 from "../Images/int-design-3.jpg"
import interior_design_2 from "../Images/int-design-3.jpg"
import ent_men from "../Images/ent-1.jpg"
import ent_women from "../Images/ent-women.jpg"
import { Icon } from '@iconify/react';
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom"
// import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard"
// import Slider from "react-slick"

import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import worktops from '../Projectimages/Conversions.jpg'
import 'swiper/css';
import HIW_1 from '../Projectimages/HIW-1.png'
import HIW_2 from '../Projectimages/HIW-2.png'
import Hiw_mindmap from '../Projectimages/HIW.png'
import { Button, Col, Row, Card } from "react-bootstrap";
import profile from '../Projectimages/Handyman.jpg'
// Import Swiper styles
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, FreeMode,  } from "swiper";

function HomePage() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    const about = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    }
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-3">
                    <section>
                        <div>
                            <div className="row flex-center">
                                <div className="col-md col-lg-5 col-xl-4 pe-lg-6 order-md-2">
                                    <img className="img-fluid px-6 px-md-0 text-end" style={{ borderRadius: '50px 2px' }} src={interior_design_1} alt="" /></div>
                                <div className="col-md col-lg-5 col-xl-4 mt-4 mt-md-0">
                                    <h6 className="text-700 text-uppercase">Mordern Interior</h6>
                                    <h2>Create Your Interior Design</h2>
                                    <p style={{ fontSize: '16px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod

                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim

                                        veniam, quis nostrud exercitation.
                                    </p>
                                    <Button style={{ background: '#003f6b', border: '0px' }}>Contact</Button>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="py-3 bg-light shadow-sm">
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
                                                <h3 className="text-center">
                                                    Committed to Connecting You With the Most Relevant and
                                                    Skilled Professionals
                                                </h3>
                                                <p className="text-center">
                                                    Here at MyProject.Al, all projects are welcome as we believe no job is too complicated or irrelevant in the right hands. We give you a
                                                    user-friendly experience as you navigate our pages. Al does its best job to search for the most relevant professionals for your project.
                                                    You have an advantage to review the list and choose the best one, so the right person connects with you.
                                                    All you need to do is give the best description about your requirement.
                                                </p>
                                                <div className="d-flex justify-content-center">
                                                    <Button style={{ background: '#003f6b', border: '0px' }}>Sign Up to Begin</Button>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/specials-1.jpg" alt="" class="img-fluid" />
                                            </div>
                                        </div>
                                        <section>
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
                                                        <Button style={{ background: '#003f6b', border: '0px' }}>Discover Best Professionals</Button>
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
                                                        <Button style={{ background: '#003f6b', border: '0px' }}>Upload My Project</Button>
                                                    </div>
                                                </div>

                                            </div>
                                        </section>
                                        <section className="bg-light text-center">
                                            {/* <div className="container"> */}
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
                                        </section>
                                        <section className="text-center">
                                            <h5 className="mb-3 text-700 text-uppercase">Testimonials</h5>
                                            <div className="col">
                                                <h1 className="fs-2 mb-3 fs-sm-4 fs-md-5">Choose Best Reviewed Professionals</h1>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12 col-xl-12">
                                                        <Swiper
                                                            // spaceBetween={30}
                                                            slidesPerView={3}
                                                            freeMode={true}
                                                            autoplay={{
                                                                delay: 2500,
                                                                disableOnInteraction: false,
                                                            }}
                                                            // pagination={{
                                                            //     clickable: true,
                                                            // }}
                                                            navigation={true}
                                                            modules={[Autoplay,FreeMode]}
                                                            className="mySwiper"
                                                        >
                                                            <SwiperSlide>
                                                                <img src={interior_design_2} width="290px"/>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src={interior_design_2} width="290px"/>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src={interior_design_2} width="290px"/>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src={interior_design_2} width="290px"/>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src={interior_design_2} width="290px"/>
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img src={interior_design_2} width="290px"/>
                                                            </SwiperSlide>
                                                            </Swiper>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <section className="bg-light text-center">
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
                                        </section>
                                    </div>
                                    <div class="tab-pane" id="tab-2" role="tabpanel">
                                        <div class="row">
                                            <div class="col-lg-12 details order-2 order-lg-1">
                                                <h3 className="text-center">Join This Global Family of Trusted & Skilled Project Bidders</h3>
                                                <p className="text-center">
                                                    You are just one sign up away from taking the Game-Changing Decision of your Lifetime!
                                                </p>
                                                <div className="d-flex justify-content-center">
                                                    <Button style={{ background: '#003f6b', border: '0px' }}>Only Trusted Bidders May Sign up Here</Button>
                                                </div>
                                            </div>
                                        </div>
                                        <h1 className="mt-5 fw-bold text-center">HOW IT WORKS</h1>
                                        <div className="col-lg-12">
                                            <img src={Hiw_mindmap} className="w-100" />
                                        </div>
                                        <section className="bg-light text-center">
                                            {/* <div className="container"> */}
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
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </Col>
            </Row>
        </>
    )
}
export default HomePage