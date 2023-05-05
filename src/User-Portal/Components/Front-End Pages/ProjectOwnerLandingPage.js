import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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