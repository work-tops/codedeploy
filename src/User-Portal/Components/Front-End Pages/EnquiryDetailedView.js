import { useState, React } from "react";
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../Projectimages/Handyman.jpg'
import { Link } from "react-router-dom";
import file from '../Projectimages/BathroomFitting.jpg'
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
                                    <Button as={Link} to="/Enquirescard" className="bg-danger text-uppercase border-0">Close the Enquiry </Button>
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
                                            <h5 className="mb-3 fs-0 text-uppercase">Customer Details</h5>
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
                                            <h5 className="mb-3 fs-0 text-uppercase">Title</h5>
                                            <h6 className="mb-0">Kitchen Worktops</h6>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h5 className="mb-3 text-uppercase fs-0">Requirements</h5>
                                            <h6 className="mb-2">Within 2 weeks</h6>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h5 className="mb-3 text-uppercase fs-0">Postcode</h5>
                                            <h6 className="mb-2">CB236DX</h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <h5 className="mb-3 text-uppercase fs-0">Description</h5>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
                                                dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit,,Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </p>
                                        </Form.Group>

                                    </Form>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 mb-2">
                                <div className='bg-white  p-3 d-flex justify-content-between text-uppercase'>
                                    <h5 className="mb-3 text-uppercase fs-0">Message</h5>
                                    <Button style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 text-uppercase">
                                        Create Estimate
                                    </Button>
                                    <Button style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 text-uppercase">
                                        Reply the Enquiry
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


                                    <Card className="mb-3" style={{ background: '#f3f3f3' }}>
                                        <Card.Body>
                                            <Row>
                                                <Col className="" lg={3}>
                                                    <img src={profile} height="60px" width="60px" className="m-3 rounded-circle" />
                                                </Col>
                                                <Col className="" lg={9}>
                                                    <p style={{ fontSize: '14px' }} className="text-justify mb-0">
                                                        How are you? Sir / Madam Please send admin access details to website,
                                                        Bitrix and email host.Also Price £200.00
                                                    </p>
                                                    {/* <Button
                                                                    onClick={handleShow}
                                                                    style={{ background: '#003f6b', fontSize: '14px' }}
                                                                    className="btn mb-3 text-uppercase border-0">
                                                                    Reply
                                                                </Button> */}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-3" style={{ background: '#f3f3f3' }}>
                                        <Card.Body>
                                            <Row>
                                                <Col className="" lg={9}>
                                                    <p style={{ fontSize: '14px' }} className="text-justify mb-0">
                                                        How are you? Sir / Madam Please send admin access details to website,
                                                        Bitrix and email host.Also Price £200.00
                                                    </p>
                                                    {/* <Button
                                                                    onClick={handleShow}
                                                                    style={{ background: '#003f6b', fontSize: '14px' }}
                                                                    className="btn mb-3 text-uppercase border-0">
                                                                    Reply
                                                                </Button> */}
                                                </Col>
                                                <Col className="" lg={3}>
                                                    <img src={file} height="60px" width="60px" className="m-3 rounded-circle" />
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