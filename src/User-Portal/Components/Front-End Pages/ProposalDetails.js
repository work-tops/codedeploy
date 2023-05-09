import { React, useState } from "react";
import { Col, Container, Row, Card, Button, Dropdown, Form, Modal } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import profile_img from "../Project images/7.jpg"

function ProposalDetails() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Row>
                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12} className="mt-4">
                        <Row>
                            <Col lg={8}>
                                <Card className="mb-3">
                                    <Card.Header as="h5" className="text-capitalize bg-light">
                                        <span className="text-success me-2">#3901031</span> new kitchen worktops with island
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col lg={3}>
                                                <img src={profile_img} className="mb-3 rounded-circle" width="100px" height="100px" />
                                            </Col>
                                            <Col lg={9}>
                                                <Card style={{ border: '1px solid #003f6b' }}>
                                                    <Card.Body>
                                                        <h6 style={{ fontSize: '14px' }} className="text-700 fw-semibold">01 Apr 2023</h6>
                                                        <h5 className="mb-3">New Proposal</h5>
                                                        <p className="text-justify" style={{ fontSize: '14px' }}>
                                                            How are you? Sir / Madam Please send admin access details to website, Bitrix and email host.Also Price £200.00
                                                            your Whatsapp numberWill start nowPromise SIX star service.Please see 210 five star reviews of
                                                            many gigs that we have done in our profile Deposit £200
                                                            Many thanks David Soanes, Worthing BN11 4DT England
                                                        </p>
                                                        <p className="text-justify" style={{ fontSize: '14px' }} >
                                                            <span className="d-block mb-2 fw-semibold">
                                                                Mobile : <span className="text-primary">07900 548 590</span>
                                                            </span>
                                                            <span className="d-block mb-2 fw-semibold">
                                                                WhatsApp : <span className="text-primary">044 07900 548 590</span>
                                                            </span>
                                                            <span className="d-block mb-2 fw-semibold">
                                                                Email : <span className="text-primary">info@alwebdezine.com</span>
                                                            </span>
                                                            <span className="d-block mb-2 fw-semibold">
                                                                Skype : <span className="text-primary">info@alwebdezine.com</span>
                                                            </span>
                                                            <span className="d-block mb-3 fw-semibold">
                                                                Web : <span className="text-primary">alwebdezine.com</span>
                                                            </span>
                                                            Please see my cv at this link <a href="#">https://surl.link/q0Lck3 https://surl.link/accessRestricted.html?</a> Decline
                                                            u=34452 password is abcdFor screen sharing:------------------Windows: Please search and open Quick
                                                            Assist App and | will send you the codeApple Mac: | will send you a Zoom link. Please send your
                                                            €MAl AAAESS. ~-mmmemmroem oo
                                                            <h6 className="mt-3 mb-3">TEAM</h6>
                                                            Our team of five experts consists of graphic artists, Office 365, IT Support, Wordpress and online
                                                            marketing consultantsREFEREESReferees for email migration ( Please contact by email only )Mr
                                                            Mark Bowen mark@supportedlivinggateway.comMr Colin McGregor colin@tranquilico.comMiss
                                                            Tracie Mckenna tracie.mckenna@1stresponse.org.uk
                                                        </p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <div className="d-flex justify-content-center btn-group">
                                            <Button className="bg-transparent text-secondary border-secondary">Send Message</Button>
                                            <Button className="bg-transparent text-secondary border-secondary">Request NDA</Button>
                                            <Button className="bg-transparent text-secondary border-secondary">Request Fund</Button>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    as="textarea" id="ask_question"
                                                    placeholder='Click Here to Reply'
                                                    rows={5} />
                                            </Form.Group>
                                            <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                                <Form.Check.Input type="checkbox" />
                                                <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                                    I acknowledge that all billing regarding this Project (including follow on work) has to be conducted through PPH in order to
                                                    comply with MAI policy
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <div className="d-flex justify-content-end mb-3">
                                                <Button style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                    SEND
                                                </Button>
                                            </div>
                                        </Form>
                                        <Card>
                                            <Card.Body>
                                                <Row>
                                                    <Col className="mt-3" lg={3}>
                                                        <img src={profile_img} height="60px" width="60px" className="m-3 rounded-circle" />
                                                    </Col>
                                                    <Col className="mt-3" lg={8}>
                                                        <p style={{ fontSize: '14px' }} className="">
                                                            How are you? Sir / Madam Please send admin access details to website, Bitrix and email host.Also Price £200.00
                                                            your Whatsapp numberWill start nowPromise SIX star service.Please see 210 five star reviews of
                                                            many gigs that we have done in our profile Deposit £200
                                                            Many thanks David Soanes, Worthing BN11 4DT England
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
                            </Col>
                            <Col lg={4}>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <div className="d-flex justify-content-start">
                                            <div>
                                                <img src={profile_img} className="mb-3 me-4 rounded-circle" width="100px" height="100px" />
                                            </div>
                                            <div>
                                                <p className="fw-bold text-uppercase mt-3 text-900">Soanes IT</p>
                                                <p style={{ fontSize: '14px' }} className="fw-semibold text-capitalize text-700">Fabricator</p>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: '16px' }} className="fw-semibold text-secondary mt-2 text-capitalize">United Kingdom</p>
                                        <Card style={{ border: '1px solid #003f6b' }}>
                                            <Card.Body>
                                                <div className="d-flex justify-content-between">
                                                    <p style={{ fontSize: '14px' }} className="fw-bold" >Price:</p>
                                                    <p className="text-success fw-semibold" style={{ fontSize: '14px' }}> £ 200</p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p style={{ fontSize: '14px' }} className="fw-bold">Deposit:</p>
                                                    <p className="text-success fw-semibold" style={{ fontSize: '14px' }}>£ 200</p>
                                                </div>
                                                {/* Accept */}
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        Accept
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item className="text-success">Accept</Dropdown.Item>
                                                        <Dropdown.Item className="text-danger">Decline</Dropdown.Item>
                                                      </Dropdown.Menu>
                                                </Dropdown>
                                                {/* Accepted */}
                                                <Button className="border-0 bg-success mt-2 d-block">Accepted</Button>
                                            </Card.Body>
                                        </Card>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container >
            {/* Modal Content */}
            < Modal
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
                        <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                I Confirm That This Message Is Essential For The Submission Of My
                                Proposal And | Understand That It Will Be Publicly Posted In The
                                Project's Clarification Board And In Case It Is Used To Spam Or
                                Solely Advertise My Skills, My Rankings Will Be Severely Affected.
                            </Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                    <div className="d-flex justify-content-end mb-3">
                        <Button onClick={handleClose} style={{ background: '#003f6b' }} className="text-uppercase border-0">
                            Send
                        </Button>
                    </div>
                </Modal.Body>
            </Modal >
            {/* Modal Content */}
        </>
    )
}
export default ProposalDetails