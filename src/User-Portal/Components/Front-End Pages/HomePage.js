import React from "react";
import HeaderPage from "../Header/HeaderPage"
import Footer from "../Footer/Footer"
import Menubar from "../Menubar/Menubar"
import interior_design from "../Images/interior-design-cost-in-mumbai.jpg"
import { Icon } from '@iconify/react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <HeaderPage />
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
                    <div>
                        <p className="what-we-do">What we do</p>
                        <h1 className="our-service-tit">
                            Our service
                        </h1>
                        <div className="row">
                            <div className="col-4">
                                <button className="infrastuctures-btn">
                                    <h6>Interior Design</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod</p>
                                </button></div>
                            <div className="col-4"><button className="infrastuctures-btn">
                                <h6>Architecture</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod</p>
                            </button>
                            </div>
                            <div className="col-4">
                                <button className="infrastuctures-btn">
                                    <h6>Planning</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default HomePage