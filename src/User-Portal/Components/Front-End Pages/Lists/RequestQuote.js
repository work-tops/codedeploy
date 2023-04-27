import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
function RequestQuote() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className="d-flex justify-content-center align-items-center mb-3 mt-5">
                        <h4 className="fw-bolder">Request a Quote</h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center m-3">
                        <p>Give us the details of your project and we'll send it to specialist trades for you.</p>
                    </div>
                    <Row className="ms-5 me-5 mt-3">
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold fs-5">
                                            Describe Your Job
                                        </Form.Label>
                                        <Form.Control as="textarea" placeholder="
                                        Please describe your job in detail and let the trade know when's the best time to contact you" rows={8} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold fs-5">
                                            What Service do you need ?
                                        </Form.Label>
                                        <Form.Control type="text"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold fs-5">
                                            When You Would like the job to start ?
                                        </Form.Label>
                                        <Row>
                                            <Col lg={1}>
                                                <Form.Check type="radio" name="check-job-to-start" className="ms-5 mt-3" />
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Check.Label className="ms-5 mt-3">
                                                    I'm flexible on the start date
                                                </Form.Check.Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={1}>
                                                <Form.Check type="radio" name="check-job-to-start" className="ms-5 mt-3" />
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Check.Label className="ms-5 mt-3">
                                                    It's urgent (within 48 hours)
                                                </Form.Check.Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={1}>
                                                <Form.Check type="radio" name="check-job-to-start" className="ms-5 mt-3" />
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Check.Label className="ms-5 mt-3">
                                                    Within 2 weeks
                                                </Form.Check.Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={1}>
                                                <Form.Check type="radio" name="check-job-to-start" className="ms-5 mt-3" />
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Check.Label className="ms-5 mt-3">
                                                    Within 1 month
                                                </Form.Check.Label>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={1}>
                                                <Form.Check type="radio" name="check-job-to-start" className="ms-5 mt-3" />
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Check.Label className="ms-5 mt-3">
                                                    I'm budgeting / researching
                                                </Form.Check.Label>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="fw-semibold fs-5">
                                            Tell us About You
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
                                    <div className="d-flex justify-content-center align-items-center mb-3 mt-3">
                                        <Button className="m-2 text-white border-0" style={{ background: "#0d406b" }}
                                        >Request Quote
                                        </Button>
                                    </div>
                                    <p className="text-center" style={{ fontSize: '14px' }}>We will create a Myproject account for you (unless already created). Read our terms of use and privacy notice.</p>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default RequestQuote