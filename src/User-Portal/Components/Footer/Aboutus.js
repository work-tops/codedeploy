import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import profile from '../Projectimages/trainer.png'
import Footer from "./Footer";
function About() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Card className="mt-4 mb-3">
                        <Card.Header className="bg-light">
                            <h1 className="">About us</h1>
                        </Card.Header>
                        <Card.Body>
                            <h4 className="mb-3">Bringing The Whole Space Together</h4>
                            <p className="mb-3">
                                <span className="fw-semibold text-900">MAI transforms your house into a home</span> by taking care of all your projects from simple to difficult ones, including painting, furnishing, bathroom upscaling, kitchen remodelling, stone worktop installations, and much more.
                            </p>
                            <p className="mb-3">
                                With MAI, locating an expert in the industry you can rely on is no more challenging.
                                Our advanced Artificial Intelligence helps you select the right fit for your project with confidence.
                            </p>
                            <p className="mb-3">
                                On the other hand, <span className="fw-semibold text-900">we enable potential individuals and companies to connect with a large network of thirsty project owners.</span>
                                We have helped thousands of individuals to pursue their professional aspirations, start their own enterprises from scratch.
                            </p>
                            <p className="mb-3">
                                Numerous traders said -
                            </p>
                            <p className="mb-3">
                                MAI has not just given me <span className="fw-semibold text-900">financial and professional freedom but has also made me fall in love with my work life.</span>
                            </p>
                            <p className="mb-3 text-900 fw-semibold">
                                Live a Life That Makes a Difference
                            </p>
                            <img src={profile} width="135px"/>      
                        </Card.Body>
                    </Card>
                </Container>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row >
        </>
    )
}
export default About