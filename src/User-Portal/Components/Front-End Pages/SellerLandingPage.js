import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import SellerPortalHeader from "../Header/SellerPortalHeader";
import Menubar from "../Menubar/Menubar";
import PostPg from "../Post/PostPg";
// import AdvancedTable from "./AdvancedTable";
import YourProjectsSeller from "./YourProjects";

function SellerLandingPage() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <SellerPortalHeader />
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>
                    <PostPg />
                </Col>
                <Col lg={12}>
                    <YourProjectsSeller/>
                </Col>
            </Row>
        </>
    )
}
export default SellerLandingPage
