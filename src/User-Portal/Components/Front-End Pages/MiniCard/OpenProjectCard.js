import React from "react";
import { Card, Button,Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SellerLandingPage from "../SellerLandingPage";
import ProjectOwnerLandingPage from "../ProjectOwnerLandingPage";
function OpenProjectCard() {
    return (
        <>
            <Row>
                <Col lg={12}>
                   <ProjectOwnerLandingPage/>
                </Col>
                <Col lg={12}>        
            <Card className="m-5">
                <Card.Body>
                    <div className="mt-4 d-flex justify-content-center">
                        <h3 className="text-center">Please Post a Job Here</h3>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <Link to="/postjob1">
                            <Button className="btn text-white btn-outline-success">Post Job</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
                </Col>
            </Row>
        </>
    )
}
export default OpenProjectCard