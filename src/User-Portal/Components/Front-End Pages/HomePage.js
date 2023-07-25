import React, { useState, useEffect } from "react";
import homepage from '../Projectimages/HomeFrame.png'
import { Icon } from "@iconify/react";
import temptingDiscounts from '../Projectimages/TemptingDiscounts.jpg'
import Limstone from '../Projectimages/Limstone.jpg'
import Quartzite from '../Projectimages/Quartzite.jpg'
import bussinessman from '../Projectimages/handshakebussinessman.jpg'
import twoWay from '../Projectimages/TwoWayReview.png'
import Granite from '../Projectimages/Granite.jpg'
import Sandstone from '../Projectimages/Sandstone.jpg'
import slate from '../Projectimages/Slate.jpg'
import Tiles from '../Projectimages/Titels.jpg'
import trainer from '../Projectimages/trainer.png'
import Travertine from '../Projectimages/Traventina.jpg'
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import 'swiper/css';
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import profile from '../Projectimages/Handyman.jpg'

import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import Footer from "../Footer/Footer";
function HomePage() {

    return (

        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-3">
                    <Container>
                        {/* Section-1 */}
                        <div className="mt-5  mb-5">
                            <div className="row justify-content-xl-evenly">
                                <div style={{ width: '443px', height: 'auto' }} className="col-md col-lg-5 order-md-2">
                                    <img className="img-fluid px-md-0 text-end" style={{ borderRadius: '50px 2px' }} src={homepage} alt="" />
                                </div>
                                <div className="col-md mt-3  col-lg-7 col-xl-4">
                                    <h6 className="text-900">BUILD AWESOME PROPERTIES</h6>
                                    <h1 className="fs-2  fs-sm-4 fs-md-5">
                                        <span className="typed-text-animation">Your Abode of Interior and Exterior Experts</span>
                                    </h1>

                                    <p className="" >
                                        We connect you with the most experienced and certified construction professionals who have been creating properties that mesmerise the millions.
                                    </p>
                                    <Link to="/service/categories">
                                        <button className="Home-btns">
                                            <span className="button-text">Discover Experts</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {/*Section-2 */}
                            <Container>
                                <div className="fade-down-container" >
                                    <h1 className="fs-2 text-center fs-sm-4 mt-5 mb-3 fs-md-5">Frequently Bought Materials</h1>
                                    <Swiper
                                        spaceBetween={10}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Autoplay, Pagination]}
                                        className="mySwiper mb-5"
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                            },
                                            576: {
                                                slidesPerView: 2,
                                                spaceBetween: 15,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                spaceBetween: 15,
                                            },
                                            993: {
                                                slidesPerView: 3,
                                                // spaceBetween: 10,
                                            },
                                        }}
                                    >
                                        <div style={{ width: '345px', height: 'auto' }}>
                                            <SwiperSlide>
                                                <Link to="/products">
                                                    <Card className="img-fluid image-animation" style={{ backgroundImage: `url(${Granite})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                                        <Card.Body>
                                                            <h5 className="text-light m-2">Granite</h5>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </SwiperSlide>
                                        </div>
                                        <div style={{ width: '345px', height: 'auto' }}>
                                            <SwiperSlide>
                                                <Link to="/products">
                                                    <Card className="img-fluid image-animation" style={{ backgroundImage: `url(${Limstone})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                                        <Card.Body>
                                                            <h5 className="text-light m-2">Limstone</h5>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </SwiperSlide>
                                        </div>
                                        <div style={{ width: '345px', height: 'auto' }}>
                                            <SwiperSlide>
                                                <Link to="/products">
                                                    <Card className="img-fluid image-animation" style={{ backgroundImage: `url(${Quartzite})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                                        <Card.Body>
                                                            <h5 className="text-light m-2">Quartzite</h5>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </SwiperSlide>
                                        </div>
                                        <div style={{ width: '345px', height: 'auto' }}>
                                            <SwiperSlide>
                                                <Link to="/products">
                                                    <Card className="img-fluid image-animation" style={{ backgroundImage: `url(${Sandstone})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                                        <Card.Body>
                                                            <h5 className="text-light m-2">Sandstone</h5>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </SwiperSlide>
                                        </div>
                                        <div style={{ width: '345px', height: 'auto' }}>
                                            <SwiperSlide>
                                                <Link to="/products">
                                                    <Card className="img-fluid image-animation" style={{ backgroundImage: `url(${slate})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                                        <Card.Body>
                                                            <h5 className="text-light m-2">Sinks</h5>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </SwiperSlide>
                                        </div>
                                        <div style={{ width: '345px', height: 'auto' }}>
                                            <SwiperSlide>
                                                <Link to="/products">
                                                    <Card className="img-fluid image-animation" style={{ backgroundImage: `url(${Travertine})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                                        <Card.Body>
                                                            <h5 className="text-light m-2">Traventine</h5>
                                                        </Card.Body>
                                                    </Card>
                                                </Link>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
                                </div>
                            </Container>
                            {/* Section-3 */}
                            <div className="row fade-down-container mb-5">
                                <h6 className="text-900 text-center ">CHECK OUT</h6>
                                <h1 className="fs-2 mb-4 text-center fs-sm-4 fs-md-5">Popularly Enquired Projects</h1>
                                <div className=" col-lg-4 col-md-6 mt-2 mt-lg-0">

                                    <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                        <div className=" card-body pt-4 pb-3">
                                            <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Kitchen Worktops</p>
                                            <p className="">Long lasting, easy maintenance, durable countertops</p>
                                        </div>
                                    </div>

                                </div>
                                <div className=" col-lg-4 col-md-6 mt-2 mt-lg-0">
                                    <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                        <div className=" card-body pt-4 pb-3">
                                            <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Bathroom Interiors</p>
                                            <p className="">Highly moisture-resistant wall claddings and vanity tops</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-lg-4 col-md-6 mt-2 mt-lg-0">
                                    <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                        <div className=" card-body pt-4 pb-3 ">
                                            <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Reception Desks</p>
                                            <p className="">Trendy and classy stone surfaces
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Section-4 */}
                            <div className="row justify-content-xl-evenly  mb-5">
                                <div style={{ width: '443px', height: 'auto' }} className="col-md fade-left-container mt-md-2 col-lg-5 ">
                                    <img className="img-fluid" style={{ borderRadius: '50px 2px' }} src={temptingDiscounts} alt="" />
                                </div>
                                <div className="col-md mt-3 fade-right-container col-lg-7 col-xl-4">
                                    <h6 className="text-900 text-start ">DON'T MISS</h6>
                                    <h1 className="fs-2 fs-sm-4 fs-md-5">Tempting Discounts</h1>
                                    <p className="">
                                        We keep you updated about unmissable offers from numerous sellers and
                                        traders so that you can grab the best deal from the comfort of your home.
                                    </p>
                                    <Link to="/products">
                                        <button className="Home-btns">Check Offers</button>
                                    </Link>
                                </div>
                            </div>
                            {/* Section-5 */}
                            <div className="row justify-content-xl-evenly  mb-5">

                                <div style={{ width: '443px', height: 'auto' }} className="col-md mt-md-2 fade-left-container order-md-2 col-lg-5 ">
                                    <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={bussinessman} alt="" />
                                </div>
                                <div className="col-md mt-3  fade-right-container col-lg-7 col-xl-4">
                                    <h6 className="text-900 text-start ">SUCCESSFUL TRADE EXPERTS</h6>
                                    <h1 className="fs-2 fs-sm-4 fs-md-5">Choose to become Limitless</h1>
                                    <p >
                                        Do not limit yourself to your local regions. Join our network and connect with millions of customers,
                                        nationwide, who are looking for a variety of services. You are unstoppable, give chance to the bigger
                                        self within you.
                                    </p>
                                    <Link to="/freelancer/false">
                                        <button className="Home-btns">Register Your Trade</button>
                                    </Link>
                                </div>
                            </div>
                            {/* Section-6 */}
                            <div className="row justify-content-xl-evenly  mb-5">
                                <div style={{ width: '443px', height: 'auto' }} className="col-md fade-left-container mt-md-2 col-lg-5 ">
                                    <img className="img-fluid  " style={{ borderRadius: '50px 2px' }} src={twoWay} alt="" />
                                </div>
                                <div className="col-md mt-3 fade-right-container col-lg-7 col-xl-4">
                                    <h6 className="text-900 text-start ">UNIQUE IN THE INDUSTRY</h6>
                                    <h1 className="fs-2 fs-sm-4 fs-md-5">2 Way Review Facility</h1>
                                    <p className="">
                                        Here at MAI, the project owners as well as the traders get fair opportunities to review one another.
                                        This is one of the most-unique advantages of using our platform. This increases the quality of service
                                        being provided as well as puts an insight on the compatibility with the project owner.
                                    </p>

                                </div>
                            </div>
                            {/* Section-7 */}
                            <div className="mb-5 fade-down-container text-center">
                                <h6 className="text-900 text-center">STORIES</h6>
                                <div className="col">
                                    <h1 className="fs-2 fs-sm-4 fs-md-5"></h1>
                                    <h1 className="fs-2 text-center fs-sm-4 mt-3 mb-3 fs-md-5">See What Our Users Felt</h1>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-xl-12">
                                        <div class="carousel slide theme-slider text-center" id="controlStyledExample" data-ride="carousel">

                                            <div className=" ">
                                                <div class="carousel-inner rounded">
                                                    <div class="carousel-item active">
                                                        <Card>
                                                            <Card.Body>
                                                                <div>
                                                                    <div>
                                                                        <div class="avatar avatar-4xl">
                                                                            <div class="avatar-name rounded-circle"><span>NR</span></div>
                                                                        </div>
                                                                        <h5>Nate Rees</h5>
                                                                        <div className="mb-1">
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                        </div>
                                                                        <p className="mb-0 text-center">
                                                                            Great experience all round. They were on the phone the same day to confirm the details of the order and explain the differences in the variants that I hadn't realised.
                                                                            As soon as the details were firmed up, they arranged for a specialist courier to collect the consignment and had it delivered with a couple of days.
                                                                        </p>
                                                                        <span className="text-primary" style={{ fontSize: '14px' }}>May 01, 2023</span>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>

                                                    <div class="carousel-item">
                                                        <Card>
                                                            <Card.Body>
                                                                <div>
                                                                    <div>
                                                                        <div class="avatar avatar-4xl">
                                                                            <div class="avatar-name rounded-circle"><span>FR</span></div>
                                                                        </div>
                                                                        <h5>Fran</h5>
                                                                        <div className="mb-1">
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                            <Icon icon="solar:star-bold" color="#f68f57" width="20" height="20" />
                                                                        </div>
                                                                        <p className="mb-0 text-center">
                                                                            After a last minute let down from another provider Peter and his team provided
                                                                            an absolutely amazing service - we have a stunning new worktop that’s nicer than the original and was also cheaper! Communication was good and the installers
                                                                            did a very efficient and very beautiful job. Couldn’t recommend more highly!
                                                                        </p>
                                                                        <span className="text-primary" style={{ fontSize: '14px' }}>01 May 2023</span>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#controlStyledExample" data-bs-slide="prev">
                                                        <span class="fas fa-angle-left"></span>
                                                        <span class="sr-only">Previous</span>
                                                    </button><button class="carousel-control-next" type="button" data-bs-target="#controlStyledExample" data-bs-slide="next">
                                                        <span class="fas fa-angle-right"></span>
                                                        <span class="sr-only">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default HomePage

