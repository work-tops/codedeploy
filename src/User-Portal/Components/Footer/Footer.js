import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from '../Projectimages/MYPRJ.png'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Footer() {
    return (
        <>

            <div>

                <footer
                    className="text-center text-lg-start text-dark"
                    style={{ background: '#DBE7F1' }}
                >

                    <section
                        className="d-flex justify-content-between p-4 text-white"
                        style={{ background: '#003f6b' }}
                    >

                        <div className="me-5">
                            <span>Get connected with us on social networks:</span>
                        </div>



                        <div>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="" className="text-white me-4">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>

                    </section>



                    {/* <section className=""> */}
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <Link to="/">
                                    <img src={logo} style={{ position: 'relative', bottom: '9px' }} width="135px" />
                                </Link>
                                <Link className="text-dark" to="/aboutus">
                                    <p>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit....
                                    </p>
                                </Link>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Shopping Guide</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', background: '#003F6B', height: '2px' }}
                                />
                                <Link className="text-dark" to="/termsofuse">
                                    <p>
                                        <a className="text-dark">Terms & Conditions</a>
                                    </p>
                                </Link>
                                <Link className="text-dark" to="/privacypolicy">
                                <p>
                                    <a className="text-dark">Privacy Policy</a>
                                </p>
                                </Link>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', background: '#003F6B', height: '2px' }}
                                />
                                <Link to="/freelancer/true" className="text-dark">
                                    <p>
                                        <a className="text-dark">Trade Login</a>
                                    </p>
                                </Link>
                                <Link to="/contactus" className="text-dark">
                                    <p>
                                        <a className="text-dark">Contact Us</a>
                                    </p>
                                </Link>
                                <Link to="/Career" className="text-dark">
                                    <p>
                                        <a className="text-dark">Career</a>
                                    </p>
                                </Link>
                                <Link to="/FAQ" className="text-dark">
                                    <p>
                                        <a className="text-dark">FAQ</a>
                                    </p>
                                </Link>
                                <p>
                                    <a className="text-dark">Site Map</a>
                                </p>

                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', background: '#003F6B', height: '2px' }}
                                />
                                <p><i className="fas fa-home me-2"></i>1 De La Warr Way, Cambridge, CB23 6DX</p>
                                <p><i className="fas fa-envelope me-2"></i> info@work-tops.com</p>
                                <p><i className="fas fa-phone me-2"></i> +44 0330 113 5868</p>

                            </div>

                        </div>

                    </div>
                    {/* </section> */}



                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "#003f6b" }}

                    >
                        <span className="text-white">
                            © Copyright MyProject.ai All Rights Reserved
                        </span>
                    </div>

                </footer>

            </div>

        </>
    )
}
export default Footer