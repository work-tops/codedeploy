import React from "react";
import { Card, Button,Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import YourProjects from "../YourProjects";
import SellerLandingPage from "../SellerLandingPage";
function AddServiceCard() {
    return (
        <>
            <Row>
                <Col lg={12}>
                   <SellerLandingPage/>
                </Col>
                <Col lg={12}>        
            <Card className="m-5">
                <Card.Body>
                    <div className="mt-4 d-flex justify-content-center">
                        <h3 className="text-center">Please Add your Services Here</h3>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <Link to="/user/addservices">
                            <Button className="btn text-white btn-outline-success">Add Services</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
                </Col>
            </Row>
        </>
    )
}
export default AddServiceCard