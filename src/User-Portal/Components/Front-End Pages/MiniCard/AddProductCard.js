import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import YourProjects from "../YourProjects";
import SellerLandingPage from "../SellerLandingPage";
import FrontEndAllProducts from "../FrontendAllProducts";
import Footer from "../../Footer/Footer";
function AddProductCard() {
    const productLength = sessionStorage.getItem("productlength")
    return (
        <>
            <Row>
                <Col lg={12}>
                    <SellerLandingPage />
                </Col>
                <Col lg={12}>
                    <div className="ms-3 me-3 mb-3">
                        <FrontEndAllProducts />
                    </div>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default AddProductCard