import React from "react"
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
// import Slider from "react-slick"



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
            {/* <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <div className="d-inline-block">
                        <p className="mordern-interior-tit">Mordern Interior</p>
                        <h1 className="morder-interior-h1">Create Your Interior Design</h1>
                        <ul className="mor-int-desc" type="none">
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod
                            </li>
                            <li>
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim
                            </li>
                            <li>
                                veniam, quis nostrud exercitation.
                            </li>
                        </ul>
                        <button className="int-des-cont-btn">Contact</button>
                    </div>
                    <div className="d-inline-block">
                        <img src={interior_design} className="interior-static-image" />
                        <div className="d-inline-block int-des-border">
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5 className="categories-list">Most Popular Categories</h5>
                        </div>
                        <div>
                            <Icon className="silde-btn" icon="ic:round-chevron-left" width="24" height="24" />
                            {' '}
                            <Icon className="silde-btn" icon="ic:round-chevron-right" width="24" height="24" />
                        </div>
                    </div>
                    <br></br>
                    <div className="sild-div">
                        <Slider {...settings}>
                            <Link to="/Granite">
                                <div>
                                    <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                    <h5 className="wr-look-for-title">Granite</h5>
                                    <p className="wr-look-for">Looking for Programming & Technology</p>
                                </div>
                            </Link>
                            <Link to="/Quartz">
                                <div>
                                    <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                    <h5 className="wr-look-for-title">Quartz</h5>
                                    <p className="wr-look-for">Looking for Programming & Technology</p>
                                </div>
                            </Link>
                            <Link to="/Marble">
                                <div>
                                    <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                    <h5 className="wr-look-for-title">Marble</h5>
                                    <p className="wr-look-for">Looking for Programming & Technology</p>
                                </div>
                            </Link>
                            <div>
                                <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                <h5 className="wr-look-for-title">Kitchen Worktops</h5>
                                <p className="wr-look-for">Looking for Programming & Technology</p>
                            </div>
                            <div>
                                <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                <h5 className="wr-look-for-title">Kitchen Worktops</h5>
                                <p className="wr-look-for">Looking for Programming & Technology</p>
                            </div>
                            <div>
                                <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                <h5 className="wr-look-for-title">Kitchen Worktops</h5>
                                <p className="wr-look-for">Looking for Programming & Technology</p>
                            </div>
                            <div>
                                <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                <h5 className="wr-look-for-title">Kitchen Worktops</h5>
                                <p className="wr-look-for">Looking for Programming & Technology</p>
                            </div>
                            <div>
                                <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                <h5 className="wr-look-for-title">Kitchen Worktops</h5>
                                <p className="wr-look-for">Looking for Programming & Technology</p>
                            </div>
                            <div>
                                <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                <h5 className="wr-look-for-title">Kitchen Worktops</h5>
                                <p className="wr-look-for">Looking for Programming & Technology</p>
                            </div>
                            <div>
                                <img src={interior_design} width="290px" className="slid-img-hmp" height="300px" />
                                <h5 className="wr-look-for-title">Kitchen Worktops</h5>
                                <p className="wr-look-for">Looking for Programming & Technology</p>
                            </div>
                        </Slider>
                    </div>
                    <div className="mb-5">
                        <p className="what-we-do">What we do</p>
                        <h1 className="our-service-tit">
                            Our service
                        </h1>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between d-inline-block">
                                <button className="infrastuctures-btn">
                                    <h6>Interior Design</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod</p>
                                </button>
                                <div className="d-inline-block"><button className="infrastuctures-btn">
                                    <h6>Architecture</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod</p>
                                </button>
                                </div>
                                <div className="d-inline-block">
                                    <button className="infrastuctures-btn">
                                        <h6>Planning</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="d-inline-block col-6">
                                    <img src={interior_design_1} className="interior-static-image-1" />
                                    <div className="d-inline-block int-des-border-1">
                                    </div>
                                </div>
                                <div className="d-inline-block col-6">
                                    <p className="mordern-interior-tit">About us</p>
                                    <h1 className="morder-interior-h1-1">Interioris The Will of An Epoch Mextreo</h1>
                                    <p className="about-us-desc-hmp">There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form injected
                                        humour, or randomised words which don't look even slightly
                                        believable. If you are going to use a passage of Lorem Ipsum,
                                        sure there isn't anything embarrassing hidden the middleof text.
                                        All the Lorem Ipsum generators on the Internettend to repeat
                                        predefined chunks as necessary, making this the first true
                                        generator on the Internet.
                                    </p>
                                    <button className="int-des-cont-btn">Learn</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-inline-block">
                        <h1 className="years-of-exp-no">20</h1>
                        <h1 className="morder-interior-h1-2">Years of Successful Working
                            <br></br>
                            The Market</h1>
                        <br></br>
                        <button className="int-des-cont-btn">Read More</button>
                    </div>
                    <div className="d-inline-block">
                        <img src={interior_design_2} className="interior-static-image-3" />
                        <div className="int-des-border-3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="no-of-projects-com-by-us col-12">
                            <h2>
                                3000+ Completed Work
                                <br></br>
                                Which WE have
                                <br></br>
                                Successfully Done
                            </h2>
                            <br></br>
                            <div className="d-flex justify-content-center">
                                <div className="d-inline-block borders-spl-div">
                                    <button className="current-prj-records-btn">
                                        <span className="no-of-prjlist">980</span>
                                        <p>Project</p>
                                    </button>
                                </div>
                                <div className="d-inline-block borders-spl-div-1">
                                    <button className="current-prj-records-btn2">
                                        <span className="no-of-prjlist">520</span>
                                        <p>Happy Client</p>
                                    </button>
                                </div>
                                <div className="d-inline-block borders-spl-div">
                                    <button className="current-prj-records-btn3">
                                        <span className="no-of-prjlist">330</span>
                                        <p>Winners</p>
                                    </button>
                                </div>
                                <div className="d-inline-block borders-spl-div-2">
                                    <button className="current-prj-records-btn4">
                                        <span className="no-of-prjlist">120</span>
                                        <p>Recoment</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12">
                            <p className="mordern-interior-tit-1">
                                Testimonials
                            </p>
                            <h3 className="our-client-says">
                                Client Says about us
                            </h3>
                            <div className="d-flex justify-content-end">
                                <Icon className="silde-btn" icon="ic:round-chevron-left" width="24" height="24" />
                                {' '}
                                <Icon className="silde-btn" icon="ic:round-chevron-right" width="24" height="24" />
                            </div>
                            <div className="sild-div">
                                <Slider {...about}>
                                    <div className="client-abt-div_1">
                                        <h5>Louis Saville </h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.</p>
                                    </div>
                                    <span>
                                        <img src={ent_men} className="clint-pro-img_1" />
                                    </span>
                                    <div className="client-abt-div">
                                        <h5>Louis Saville </h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.</p>
                                    </div>
                                    <span>
                                        <img src={ent_women} className="clint-pro-img" />
                                    </span>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="row latest-news-div">
                        <div className="col-12">
                            <p className="mordern-interior-tit-1">
                                Latest News
                            </p>
                            <h3 className="our-client-says">
                                From our blog
                            </h3>
                            <br></br>
                            <br></br>
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-inline-block">
                                        <img src={interior_design_2} className="lat-blog-thumbnail" />
                                        <div className="lat-blog-border">
                                        </div>
                                    </div>
                                    <h4 className="latest-news-subtit">2020 Interior Design Trends</h4>
                                    <p className="latest-news-subtitle">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <button className="int-des-cont-btn-__1">Continue Reading</button>
                                </div>
                                <div className="col-6">
                                    <div className="d-inline-block">
                                        <img src={interior_design_2} className="lat-blog-thumbnail-2" />
                                        <div className="lat-blog-border-1">
                                        </div>
                                    </div>
                                    <h4 className="latest-news-subtit1">2020 Interior Design Trends</h4>
                                    <p className="latest-news-subtitle1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <button className="int-des-cont-btn-__2">Continue Reading</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div > */}
        </>
    )
}
export default HomePage