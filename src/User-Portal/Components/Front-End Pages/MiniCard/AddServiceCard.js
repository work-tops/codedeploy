import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import YourProjects from "../YourProjects";
import SellerLandingPage from "../SellerLandingPage";
import AllServices from '../AllServices'
import Footer from "../../Footer/Footer";

function AddServiceCard() {
    const serviceLength = sessionStorage.getItem("servicelength")
    return (
        <>
            <Row>
                <Col lg={12}>
                    <SellerLandingPage />
                </Col>
                <Col lg={12}>
                    <div className="ms-3 me-3 mb-3">
                        <AllServices />
                    </div>
                </Col>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default AddServiceCard