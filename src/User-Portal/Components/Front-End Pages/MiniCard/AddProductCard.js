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
                    {/* {productLength < 1 ?(
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
                    ) : ( */}
                        <div className="m-5">
                        <FrontEndAllProducts />
                        </div>
                    {/*  )} */}
                    
                   
                </Col>
            </Row>
        </>
    )
}
export default AddProductCard