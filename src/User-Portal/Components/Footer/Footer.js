import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from '../../TemplateAssets/Images/MP-logo.png'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>MAI</h3>
                                <p>
                                    A108 Adam Street
                                    New York, NY 535022
                                    United States
                                    <strong className="d-block" style={{ fontSize: "14px" }}>Phone:</strong> +1 5589 55488 55
                                    <strong className="d-block" style={{ fontSize: "14px" }}>Email:</strong> info@example.com
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            <a >Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/aboutus">
                                            <a href="#">About us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contactus">
                                            <a href="#">Contact us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/carrer">
                                            <a >Carrer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/faq">
                                            <a href="#">FAQ</a>
                                        </Link>
                                    </li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Site Map</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Policies</h4>
                                <ul>
                                    <li>
                                        <Link to="/termsofuse">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shippingpolicy">
                                            <a href="#">Shipping Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/refundpolicy">
                                            <a href="#">Refund Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/privacypolicy">
                                            <a >Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/msppolicy">
                                            <a href="#">MSP Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container footer-bottom clearfix">
                    <div className="d-flex justify-content-center">
                        © Copyright <strong className="ms-2" style={{ fontSize: "14px" }}><span>MyProject.ai</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer