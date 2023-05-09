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
                            <img src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTKPFQ2xkQ7dLyfk2V8MUCOwyx2Gre0wGxHTyZaJA8svDFmGn2a-Wbvs628WHzM1B60HM3gzHf5kIDINBYUtF_PSvLzz0LM8VzqWzUsb-wDfnTkSD3j2-vvObqiX4n3sKcOiy4Si3172Y5ZGlhueKM-8UhCYFbI4Ak_pwKdPJaOWn8Ivbv8NlWcmUPfg/s600/MP-logo.png"} width="100px" />
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