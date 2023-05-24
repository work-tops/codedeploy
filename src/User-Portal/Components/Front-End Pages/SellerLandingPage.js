import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import Menubar from "../Menubar/Menubar";
import PostPg from "../Post/PostPg";
import YourProjectsSeller from "./YourProjects";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import AddProductCard from "./MiniCard/AddProductCard";
function SellerLandingPage() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mb-3">
                    <PostPg />
                </Col>
            </Row>
        </>
    )
}
export default SellerLandingPage
