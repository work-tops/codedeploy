import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import PostPg from "../Post/PostPg";

function ProjectOwnerLandingPage() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mb-5">
                    <PostPg />
                </Col>
            </Row>
        </>
    )
}
export default ProjectOwnerLandingPage