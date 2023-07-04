import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from '../Projectimages/My Project Final logo-01.png'
import { Link } from "react-router-dom";

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
                            <div className="text-center col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                                <Link to="/">
                                    <img src={logo} style={{ position: 'relative', bottom: '9px' }} width="135px" />
                                </Link>
                                <p className="text-start">
                                    MAI transforms your house into a home by taking care
                                    of all your projects from simple to difficult ones,
                                    including painting,furnishing,bathroom upscaling,kitchen
                                    remodelling,stone worktop installations....<Link to="/aboutus">
                                        Learn More</Link>
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className=" fw-bold">Shopping Guide</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', background: '#003F6B', height: '2px' }}
                                />
                                <Link className="text-dark" to="/termsofuse">
                                    <p >
                                        <a className="text-dark hover-mai">Terms & Conditions</a>
                                    </p>
                                </Link>
                                <Link className="text-dark" to="/privacypolicy">
                                    <p >
                                        <a className="text-dark hover-mai">Privacy Policy</a>
                                    </p>
                                </Link>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className=" fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', background: '#003F6B', height: '2px' }}
                                />
                                <Link to="/freelancer/true" className="text-dark">
                                    <p >
                                        <a className="text-dark hover-mai">Trade Login</a>
                                    </p>
                                </Link>
                                <Link to="/contactus" className="text-dark">
                                    <p >
                                        <a className="text-dark hover-mai">Contact Us</a>
                                    </p>
                                </Link>
                                <Link to="/Career" className="text-dark">
                                    <p >
                                        <a className="text-dark hover-mai">Career</a>
                                    </p>
                                </Link>
                                <Link to="/FAQ" className="text-dark">
                                    <p >
                                        <a className="hover-mai text-dark">FAQ</a>
                                    </p>
                                </Link>
                                <p >
                                    <a className="hover-mai text-dark">Site Map</a>
                                </p>

                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className=" fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: '60px', background: '#003F6B', height: '2px' }}
                                />
                                <p><i className="fas fa-home me-2"></i>1 De La Warr Way, Cambridge, CB23 6DX</p>
                                <p className=""><i className="fas fa-envelope  me-2"></i>info@myproject.ai</p>
                                <p><i className="fas fa-phone me-2"></i> +44 0330 000 5000</p>

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