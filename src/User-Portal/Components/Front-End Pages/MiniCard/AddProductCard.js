import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import YourProjects from "../YourProjects";
import SellerLandingPage from "../SellerLandingPage";
import FrontEndAllProducts from "../FrontendAllProducts";
function AddProductCard() {
    const productLength = sessionStorage.getItem("productlength")
    return (
        <>
            <Row>
                <Col lg={12}>
                    <SellerLandingPage />
                </Col>
                <Col lg={12}>
                    <div className="container">
                        <FrontEndAllProducts />
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default AddProductCard