import React from "react";
import { Card, Form, Col, Row, Container, Button } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import Footer from "./Footer";
function ContactUs() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Card className="mt-4 overflow-hidden">
                        <Card.Body>
                            <div className="row">
                                <div className="col-6">
                                    <Form>
                                        <Form.Group className="mb-5">
                                            <h2>Get in Touch</h2>
                                            <p>We'd Love to talk about how we can help you</p>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: '16px' }} className="text-900 fw-semibold">Email Us</Form.Label>
                                            <p>support@myproject.ai</p>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: '16px' }} className="text-900 fw-semibold">Call Us</Form.Label>
                                            <p>+44 0000-000-000</p>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: '16px' }} className="text-900 fw-semibold">Address</Form.Label>
                                            <p>1 De La Warr Way,Cambridge,CB23 6DX.</p>
                                        </Form.Group>
                                    </Form>

                                </div>
                                <div className="col-6">
                                    <Card>
                                        <Card.Header className="text-center bg-light" as={"h4"}>
                                            General Enquiries
                                        </Card.Header>
                                        <Card.Body>
                                            <Row className="mb-4">
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-uppercase">First Name<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="First Name" />
                                                </Form.Group>
                                                <Form.Group as={Col} className="mb-3">
                                                    <Form.Label className="text-uppercase">Last Name<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control placeholder="First Name" />
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-uppercase">Details</Form.Label>
                                                <Form.Control
                                                    placeholder="Tell us About Your..."
                                                    as="textarea"
                                                    rows={5}
                                                />
                                            </Form.Group>
                                            <Button style={{ background: '#003f6b' }} className="border-0 w-100">Send Enquiry</Button>
                                            <p className="mt-3 text-center text-capitalize">We'll get back to you in 1-2 bussiness days</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </Card.Body>
                        <Footer />
                    </Card>
                </Container>
            </Row>
        </>
    )
}
export default ContactUs