import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import PostPg from '../Post/PostPg'
import Menubar from '../Menubar/Menubar'
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
function ProjectOwnerLandingPage() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-3">
                    <PostPg />
                </Col>
            </Row>
        </>
    )
}
export default ProjectOwnerLandingPage