import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectOwnerHeader from "../Header/ProjectOwnerHeader";
import Menubar from "../Menubar/Menubar";
import PostPg from "../Post/PostPg";
import ProjectOwnerYourProjects from "./ProjectOwnerYourProjects";
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
                <Col lg={12}>
                    <ProjectOwnerYourProjects />
                </Col>
            </Row>
        </>
    )
}
export default ProjectOwnerLandingPage