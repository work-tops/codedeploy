import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectOwnerLandingPage() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <ProjectOwnerHeader />
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>
                    <PostPg />
                </Col>
            </Row>
        </>
    )
}
export default ProjectOwnerLandingPage