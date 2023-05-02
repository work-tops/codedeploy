import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import logo from '../../TemplateAssets/Images/MP-logo.png'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <Row>
                <Col lg={12} className="navbar-standard">
                    <div className="m-3 d-flex justify-content-between">
                        <div>
                            <img src={logo} width="100px" />
                        </div>
                        <div className="">
                            <Link to="/privacypolicy">
                                <Button className="bg-transparent border-0 m-2">Privacy Policy</Button>
                            </Link>
                            <Link to="/termsofuse">
                                <Button className="bg-transparent border-0 m-2">Terms of Use</Button>
                            </Link>
                            <Button className="bg-transparent border-0 m-2">Cookie Settings</Button>
                            <Link to="/termsofuse">
                                <Button className="bg-transparent border-0 m-2">Contact us</Button>
                            </Link>
                        </div>
                        <div>
                            <p style={{ fontSize: '12px' }} className="text-white mt-3">CopyRight @ 2023 MyProject.ai all right reserved</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Footer