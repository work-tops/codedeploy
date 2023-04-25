
import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SellerLandingPage from "../SellerLandingPage";
function ProposalCard() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <SellerLandingPage />
                </Col>
                <Col lg={12}>
                    <Card className="m-5">
                        <Card.Body>
                            <h1 className="text-center">Coming Soon...</h1>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default ProposalCard