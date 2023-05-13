import { useState, React } from "react";
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../Projectimages/Handyman.jpg'

function OwnerEnquiryDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Card className="mt-5 mb-3">
                                <Card.Header className="d-flex justify-content-end bg-light">
                                    <Button className="bg-danger border-0">Close the Query</Button>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <h5>
                                            "Enquiry Details: #2737"
                                        </h5>
                                        <p className="mt-3 text-900" style={{ fontSize: '14px' }}>April 21, 2019, 5:33 PM</p>
                                        <div>
                                            <h5 className="me-2 d-inline">Status: </h5>
                                            <span className="bg-success badge  rounded-pill">
                                                {' '}
                                                Completed
                                                <FontAwesomeIcon
                                                    icon="check"
                                                    className="ms-1"
                                                    transform="shrink-2"
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Row>
                                        <Col md={6} lg={3}>
                                            <h5 className="mb-3 fs-0">Customer Details</h5>
                                            <div className="d-flex">
                                                <img
                                                    src={profile}
                                                    width="30"
                                                    height="30"
                                                    className="me-3 rounded-circle"
                                                    alt="visa"
                                                />
                                                <div className="flex-1">
                                                    <h6 className=" mb-0">Peter Leverkus</h6>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h5 className="mb-3 fs-0">Title</h5>
                                            <h6 className="mb-0">Kitchen Worktops</h6>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h5 className="mb-3 text-capitalize fs-0">Requirements</h5>
                                            <h6 className="mb-2">Within 2 weeks</h6>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h5 className="mb-3 text-capitalize fs-0">Postcode</h5>
                                            <h6 className="mb-2">CB236DX</h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-900">
                                                Description
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea" id="ask_question"
                                                value={"Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,,Lorem ipsum dolor sit amet, consectetur adipiscing elit,"}
                                                placeholder='Type Your Message Here'
                                                rows={4} />
                                        </Form.Group>

                                    </Form>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 mb-2">
                                <div className='bg-white  p-3 d-flex justify-content-between text-capitalize'>
                                    <h6 style={{ fontSize: '16px' }} className="mt-3">
                                        Message
                                    </h6>
                                    <Button style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 text-uppercase">
                                        Reply the Query
                                    </Button>
                                </div>
                                <Card.Body className="position-relative">
                                    <Row>
                                        <Col xl={12}>

                                            <>
                                                <Form>
                                                    <Form.Group className="mb-3">
                                                        <Form.Control
                                                            as="textarea" id="ask_question"
                                                            placeholder='Type Your Message Here'
                                                            rows={5} />
                                                    </Form.Group>
                                                    <div className="d-flex justify-content-end mb-3">
                                                        <Button style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                            Send
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </>

                                        </Col>
                                    </Row>


                                    <h6 style={{ fontSize: '16px' }} className="mb-3">
                                        Conversations
                                    </h6>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <Row>
                                                <Col className="mt-3" lg={3}>
                                                    <img src={profile} height="60px" width="60px" className="m-3 rounded-circle" />
                                                </Col>
                                                <Col className="mt-3" lg={8}>
                                                    <p style={{ fontSize: '14px' }} className="">
                                                        Hi I'm Peter I've like to clarify some doubts here...
                                                    </p>
                                                    <Button
                                                        onClick={handleShow}
                                                        style={{ background: '#003f6b', fontSize: '14px' }}
                                                        className="btn mb-3 text-uppercase border-0">
                                                        Reply
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Card.Body>
                            </Card>
                            {/* Modal Content */}
                            <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-lg modal-90w"

                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        <h6 className="text-uppercase">
                                            Please Type Your Message
                                        </h6>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Control as="textarea" placeholder='Type Your Message Here....' rows={8} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                            <Form.Check.Input type="checkbox" />
                                            <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                                Proceed
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Form.Group>
                                    <div className="d-flex justify-content-end mb-3">
                                        <Button onClick={handleClose} style={{ background: '#003f6b' }} className="text-uppercase border-0">
                                            Send
                                        </Button>
                                    </div>
                                </Modal.Body>
                            </Modal>
                            {/* Modal Content */}

                        </Col>
                    </Row>
                </Container>
            </Row>
        </>
    )
}
export default OwnerEnquiryDetails