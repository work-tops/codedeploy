import React from "react";
import { Card, Button,Col,Row } from "react-bootstrap";
function ProjectWishListCard() {
    return (
        <>
            <Row>
                <Col lg={12}>
                <h4 className="m-5">Your Wishlists</h4>        
            <Card className="m-5">
                <Card.Body>
                    <div className="mt-4 d-flex justify-content-center">
                        <h3 className="text-center">Empty</h3>
                    </div>
                </Card.Body>
            </Card>
                </Col>
            </Row>
        </>
    )
}
export default ProjectWishListCard