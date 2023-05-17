import { React, useState } from "react";
import { Card, Row, Col, Container, Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from '../Projectimages/Handyman.jpg'
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import profile_1 from '../Images/employee.png'
function Notifications() {
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
            </Row>
            <Container>
                <Card className="mt-5 card overflow-hidden mb-3">
                    <Card.Header as={Col} className="bg-light">
                        <Row className="flex-between-center">
                            <Col sm="auto">
                                <h5 className="mb-1 mb-md-0">Your Notifications</h5>
                            </Col>
                            <Col sm="auto" className="fs--1">
                                {/* <Link to="#!" className="font-sans-serif ms-2 ms-sm-3">
                                    Mark all as read
                                </Link> */}
                                <Link to="#" onClick={handleShow2} className="font-sans-serif ms-2 ms-sm-3">

                                    Notification Settings

                                </Link>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body className="p-0 ">
                        <Row as={Link} to="/chat" className="notification notification-unread border-300">
                            <Col lg={1}>
                                <img src={profile_1} width={40} height={40} className="mt-3 border border-dark ms-3 mb-3 rounded-circle" />
                            </Col>
                            <Col lg={11}>
                                <p className="mt-3 mb-1 text-dark">Your Have a New Notification from a Freelancer</p>
                                <small className="fw-semibold">Just Now</small>
                            </Col>
                        </Row>
                        <Row as={Link} to="/chat" className="notification notification-read border-300">
                            <Col lg={1}>
                                <img src={profile} width={40} height={40} className="mt-3 ms-3 mb-3 rounded-circle" />
                            </Col>
                            <Col lg={11}>
                                <p className="mt-3 mb-1 text-dark">Your Have a New Notification from a Owner</p>
                                <small className="fw-semibold">15m</small>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Container>
            {/*  */}
            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <h4>Notification Settings</h4>
                </Modal.Header>
                <Modal.Body>
                    <Form.Check type="radio" className="mb-0 mt-3">
                        <Form.Check.Input name="job-start" type="radio" />
                        <Form.Check.Label
                            className="d-inline"
                            style={{ fontSize: '14px' }}
                        >
                            Get a notification each time there is activity on your page or an important update.
                        </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio" className="mb-0 mt-3">
                        <Form.Check.Input name="job-start" type="radio" />
                        <Form.Check.Label
                            className="d-inline"
                            style={{ fontSize: '14px' }}
                        >
                            Get one notification every 12-24 hours on all activity and updates.
                        </Form.Check.Label>
                    </Form.Check>
                    <Form.Check type="radio" className="mb-0 mt-3">
                        <Form.Check.Input name="job-start" type="radio" />
                        <Form.Check.Label
                            className="d-inline"
                            style={{ fontSize: '14px' }}
                        >
                            Off
                        </Form.Check.Label>
                    </Form.Check>
                    <h5 className="mt-3">Edit your notification settings for:</h5>
                    <Form.Check type="checkbox" className="mb-0 mt-3">
                        <Form.Check.Label
                            className="d-inline"
                            style={{ fontSize: '14px' }}
                        >
                            New Message from the Post Project Page
                        </Form.Check.Label>
                        <Form.Check.Input type="checkbox" />
                    </Form.Check>
                    <Form.Check type="checkbox" className="mb-0 mt-3">
                        <Form.Check.Label
                            className="d-inline"
                            style={{ fontSize: '14px' }}
                        >
                            New Query from the Post Project Page
                        </Form.Check.Label>
                        <Form.Check.Input type="checkbox" />
                    </Form.Check>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose2} className="bg-danger border-0">Cancel</Button>
                    <Button onClick={handleClose2} className="border-0">Update</Button>

                </Modal.Footer>
            </Modal>
            {/*  */}

        </>
    )
}
export default Notifications