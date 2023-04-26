import React from "react";
import { Card, Button,Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import YourProjects from "../YourProjects";
import SellerLandingPage from "../SellerLandingPage";
function AddProductCard() {
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
                        <h3 className="text-center">Please Add your Product Here</h3>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <Link to="/user/addproduct">
                            <Button className="btn text-white btn-outline-success">Add Product</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
                </Col>
            </Row>
        </>
    )
}
export default AddProductCard