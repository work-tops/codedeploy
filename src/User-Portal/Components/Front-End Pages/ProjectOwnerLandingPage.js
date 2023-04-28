import React from "react";
// import { Row, Col } from "react-bootstrap";
import ProjectOwnerHeader from "../Header/ProjectOwnerHeader";
import Menubar from "../Menubar/Menubar";
import PostPg from "../Post/PostPg";
import ProjectOwnerYourProjects from "./ProjectOwnerYourProjects";
import Footer from "../Footer/Footer";
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
                <Col lg={12}>
                    <p className="fw-semibold m-5 fs-5">Your Projects</p>
                    <div className="d-flex justify-content-around">
                        <Link to="/openProjectCard">
                            <Button className="btn bg-transparent text-dark border-0">Open Projects</Button>
                        </Link>
                        <Link to="/workStreamCard">
                            <Button className="btn bg-transparent text-dark border-0">Workstreams</Button>
                        </Link>
                        <Link to='InvoicedueCard'>
                            <Button className="btn bg-transparent text-dark border-0">Invoice Due</Button>
                        </Link>
                        <Link to='/POproductenquirescard'>
                            <Button className="btn bg-transparent text-dark border-0">Product Enquires</Button>
                        </Link>
                        <Link to="/POReviewsCard">
                            <Button className="btn bg-transparent text-dark border-0">Review</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ProjectOwnerLandingPage