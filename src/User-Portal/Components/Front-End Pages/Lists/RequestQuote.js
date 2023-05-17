import React from "react";
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Link } from "react-router-dom";

function RequestQuote() {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12}>
                        <div className="d-flex justify-content-center align-items-center mb-3 mt-5">
                            <h4 className="fw-bolder">Request a Quote</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center m-3">
                            <p className="text-center" style={{fontSize:'14px'}}>Give us the details of your project and we'll send it to specialist trades for you.</p>
                        </div>
                        <Row className="">

                            <Form>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-900">
                                                Describe Your Job<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control as="textarea" placeholder="
                                        Please describe your job in detail and let the trade know when's the best time to contact you" rows={5} />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-900">
                                                What Service do you need ?<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control type="text"
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-900">
                                                When You Would like the job to start ?<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            {/*  */}
                                            <Form.Check type="radio"  className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className="d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    I'm flexible on the start date
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio"  className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className=" d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    It's urgent (within 48 hours)
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio"  className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className=" d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    Within 2 weeks
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio"  className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className="d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    Within 1 month
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio"  className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className=" d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    I'm budgeting / researching
                                                </Form.Check.Label>
                                            </Form.Check>
                                            {/*  */}

                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3">
                                    <Card.Body>

                                        <Form.Group className="mb-3">
                                            <Form.Label className="fw-semibold text-900">
                                                Tell us About You<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Name"
                                            />
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Email"
                                            />
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Phone Number"
                                            />
                                            <Form.Control type="text"
                                                className="mb-3"
                                                placeholder="Postcode (of your project)"
                                            />
                                        </Form.Group>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <Button as={Link} to="/owner" className="m-2 text-white border-0" style={{ background: "#0d406b" }}
                                            >Request Quote
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <p className="text-center" style={{fontSize:'14px'}}>We will create a Myproject account for you (unless already created). Read our terms of use and privacy notice.</p>
                            </Form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default RequestQuote