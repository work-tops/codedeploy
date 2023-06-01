import React, { useRef, useEffect } from "react";

import interior_design_1 from "../Images/int-design-3.jpg"
import interior_design_2 from "../Images/int-design-3.jpg"
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import 'swiper/css';
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import profile from '../Projectimages/Handyman.jpg'
// Import Swiper styles
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import com_work from '../Projectimages/com-work.png'
import wood from '../Images/wood-img.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import Footer from "../Footer/Footer";
function HomePage() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
    }, []);

    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //   progressCircle.current.style.setProperty('--progress', 1 - progress);
    //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };

    return (

        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Col lg={12} className="mt-3">
                        <div className="mt-5 mb-5">
                            {/* Section-1 */}
                            {/* <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5 }}
                            > */}
                            <div data-aos="fade-right" className="row  d-flex justify-content-lg-between justify-content-xl-between align-items-center">
                                <div className="col-md col-lg-5 order-md-2">
                                    <img className="img-fluid  px-md-0 text-end" style={{ borderRadius: '50px 2px' }} src={interior_design_1} alt="" />
                                </div>
                                <div className="col-md mt-3  col-lg-7 col-xl-4">
                                    <h6 className="text-700 text-uppercase">Mordern Interior</h6>
                                    <h1 className="fs-2 fs-sm-4 fs-md-5">Create Your Interior Design</h1>
                                    <p className="" style={{ fontSize: '16px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod

                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim

                                        veniam, quis nostrud exercitation.
                                    </p>
                                    <Button style={{ background: '#003f6b', border: '0px', borderRadius: '50px 2px' }}>Contact</Button>
                                </div>
                            </div>
                            {/* </motion.div> */}
                        </div>
                        {/* Special Section */}
                        <h1 className="fs-2 mt-5 fs-sm-4 mb-3 fs-md-5">Most Popular Categories</h1>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            // centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            // navigation={true}
                            modules={[Autoplay, Pagination]}
                            // onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiper mb-5"
                        >
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Granite</h5>
                                    <p className="text-light m-2">Hello World</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Granite</h5>
                                    <p className="text-light m-2">Hello World</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Granite</h5>
                                    <p className="text-light m-2">Hello World</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Granite</h5>
                                    <p className="text-light m-2">Hello World</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Granite</h5>
                                    <p className="text-light m-2">Hello World</p>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="img-fluid" style={{ backgroundImage: `url(${interior_design_1})`, backgroundSize: 'cover', borderRadius: '10px', height: '50vh' }}>
                                <Link to="/productlist">
                                    <h5 className="text-light m-2">Granite</h5>
                                    <p className="text-light m-2">Hello World</p>
                                </Link>
                            </SwiperSlide>



                        </Swiper>
                        {/* Section-2 */}

                        <div data-aos="fade-down" className="row mb-5">
                            <h6 className="text-700 text-start text-uppercase">what we do</h6>
                            <h1 className="fs-2 text-start fs-sm-4 fs-md-5">Our Service</h1>
                            <div className=" col-lg-4 col-md-4 mt-2 mt-lg-0">
                                {/* <Link to="/productlist" className="text-900"> */}
                                <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                    <div className=" card-body pt-4 pb-3">
                                        <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Check Ongoing Offers</p>
                                        <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                            <div className=" col-lg-4 col-md-4 mt-3 mt-lg-0">
                                {/* <Link to="/productlist" className="text-900"> */}
                                <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                    <div className=" card-body pt-4 pb-3">
                                        <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Buy Materials Directly</p>
                                        <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                            <div className=" col-lg-4 col-md-4 mt-3 mt-lg-0">
                                {/* <Link to="/servicelist" className="text-900"> */}
                                <div style={{ borderRadius: '50px 2px' }} className=" card card-span h-100">
                                    <div className=" card-body pt-4 pb-3 ">
                                        <p style={{ fontSize: '20px' }} className="mb-2 fw-semibold ">Browse the Services</p>
                                        <p>Check out unmissable offers from numerous sellers and traders and grab the best deal.</p>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                        </div>
                        {/* Section-3 */}
                        <div data-aos="fade-left" className="row  mb-5 d-flex justify-content-lg-between justify-content-xl-between align-items-center">
                            <div className="col-md  col-lg-5 ">
                                <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                            </div>
                            <div className="col-md mt-3  col-lg-7 col-xl-4">
                                <h6 className="text-700 text-start text-uppercase">About us</h6>
                                <h1 className="fs-2 fs-sm-4 fs-md-5">Interiors Expert</h1>
                                <p style={{ fontSize: '16px' }}>
                                    Select the categories and subcategories relevantly so we can recommend
                                    appropriate professionals. If something you are searching for is not in option
                                    you can type “Others"in the search box and add your requirement.
                                </p>
                                <Button style={{ background: '#003f6b', border: '0px', borderRadius: '50px 2px' }}>Learn</Button>
                            </div>
                        </div>
                        {/* Section-4 */}
                        <div data-aos="fade-right" >

                            <div className="row  mb-5 d-flex justify-content-lg-between justify-content-xl-between align-items-center">
                                <div className="col-md col-lg-5">
                                    <h1 style={{ fontSize: '199px', fontWeight: '700', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: `url(${wood})` }} >20</h1>
                                    <h1 className="fs-2 fs-sm-4 fs-md-5">Years of Successful Working</h1>
                                </div>
                                <div className="col-md  col-lg-5">
                                    <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                                </div>
                            </div>
                            <div style={{ backgroundImage: `url(${interior_design_2})` }} data-aos="fade-down" className="row mb-5">
                                <div className="col-12 text-center mt-3 mb-3">
                                    <div style={{ fontSize: '25px' }} className="row text-white fw-bold">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Projects</h2>
                                            <CountUp end={980} duration={5} separator="," />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Happy Clients</h2>
                                            <CountUp end={520} duration={5} separator="," />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Winners</h2>
                                            <CountUp end={330} duration={5} separator="," />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="text-white">Recommendations</h2>
                                            <CountUp end={120} duration={5} separator="," />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section-5 */}
                        <div data-aos="fade-right" className="mb-5 text-center">
                            <h5 className="mb-3 text-700 text-uppercase">Testimonials</h5>
                            <div className="col">
                                <h1 className="fs-2 mb-4 fs-sm-4 fs-md-5">Client says about us</h1>
                            </div>
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
                        {/* Section-6 */}
                        {/* <div data-aos="fade-up" className="text-center">

                            <h5 className="mb-3 text-700 text-uppercase">Latest News</h5>
                            <div className="col">
                                <h1 className="fs-2 mb-4 fs-sm-4 fs-md-5">From Our Blog</h1>
                            </div>
                            <div className="row mb-5 d-flex justify-content-lg-around justify-content-xl-around align-items-center">
                                <div className="col-md  col-lg-5 mb-3">
                                    <img className="img-fluid " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                                    <h1 className="mt-3 text-start">2020 Interior Design Trends</h1>
                                    <p className="mt-3 text-start">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua,
                                    </p>
                                </div>
                                <div className="col-md  col-lg-5 ">
                                    <img className="img-fluid  " style={{ borderRadius: '50px 2px' }} src={interior_design_2} alt="" />
                                    <h1 className="mt-3 text-start">2020 Interior Design Trends</h1>
                                    <p className="mt-3 text-start">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua,
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </Col>
                </Container>
                <Col>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default HomePage