
import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import ProjectOwnerLandingPage from "../ProjectOwnerLandingPage";
function WorkStreamCard() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <ProjectOwnerLandingPage />
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
export default WorkStreamCard