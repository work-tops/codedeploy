import { React, useState, useRef } from "react";
import { Card, Button, Col, Row, Container, Form, Modal, Dropdown } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import profile from '../Projectimages/Handyman.jpg'
import { Icon } from "@iconify/react";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import file from '../Projectimages/BathroomFitting.jpg'
function TraderWorkStreamDetails() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const editorRef = useRef(null);

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Col lg={12} className="mt-4">
                        <h5 className="mb-3">My Workstreams<span className="text-uppercase"></span></h5>
                        <Card className="mb-3">
                            <Card.Header className="bg-light">
                                <h5><span className="text-success me-2">#3901031</span>New Kitchen Worktops With Island</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="row g-0">
                                    <div className="col-md-4 p-x1 col-lg-8">
                                        <Card className="mb-3">
                                            <Card.Header>
                                                <h5 className="bg-transparent text-900 border-secondary">Messages</h5>
                                            </Card.Header>
                                            <Card.Body>

                                                <Card className="mb-3" style={{ background: '#f3f3f3' }}>
                                                    <Card.Body>
                                                        <Row>
                                                            <Col className="" lg={3}>
                                                                <Link to="profile_publicview">
                                                                    <img src={profile} height="60px" width="60px" className="m-3 rounded-circle" />
                                                                </Link>
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
                                                <Form className="mt-3">
                                                    <Form.Group className="mb-3">
                                                        {/* <Form.Control
                                                            as="textarea" id="ask_question"
                                                            
                                                            rows={5} /> */}
                                                        <Editor
                                                            onInit={(evt, editor) => editorRef.current = editor}
                                                            initialValue=""

                                                            init={{

                                                                height: 200,
                                                                menubar: false,
                                                                placeholder: 'Send Your Message',
                                                                // plugins: [
                                                                //     'advlist autolink lists link image charmap print preview anchor',
                                                                //     'searchreplace visualblocks code fullscreen',
                                                                //     'insertdatetime media table paste code help wordcount'
                                                                // ],
                                                                toolbar: 'undo redo | formatselect | ' +
                                                                    'bold italic  | alignleft aligncenter ' +
                                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                    'removeformat ',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                            }}
                                                        />
                                                    </Form.Group>
                                                    <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                                        <Form.Check.Input type="checkbox" />
                                                        <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                                            I acknowledge that all billing regarding this Project (including follow on work) has to be conducted through PPH in order to
                                                            comply with MAI policy
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                    <div className="d-flex justify-content-end gap-2 mb-3">
                                                        <Button style={{ background: '#003f6b', fontSize: '14px' }} className="Home-btns-1 text-uppercase border-0">
                                                            Attachments
                                                        </Button>
                                                        <Button style={{ background: '#003f6b', fontSize: '14px' }} className="Home-btns-1 text-uppercase border-0">
                                                            send
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-md-8 col-lg-4 p-x1">
                                        <Card className="mb-3">
                                            <Card.Body>
                                                <div className="d-flex justify-content-start">
                                                    <div>
                                                        <Link to="profile_publicview">
                                                            <img src={profile} className="mb-3 me-4 rounded-circle" width="100px" height="100px" />
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <p className="fw-bold text-uppercase mt-3 text-900">Soanes IT</p>
                                                        <p style={{ fontSize: '14px' }} className="fw-semibold text-capitalize text-700">Fabricator</p>
                                                    </div>
                                                </div>
                                                <p style={{ fontSize: '16px' }} className="fw-semibold text-secondary mt-2 text-capitalize">United Kingdom</p>
                                                <Card style={{ border: '1px solid #003f6b' }}>
                                                    <Card.Body>
                                                        <p style={{ fontSize: '14px' }} className="fw-bold" >Project Status</p>
                                                        <span style={{ fontSize: '14px' }} className="badge p-2 bg-success mt-2 d-block">Accepted</span>
                                                        <Button as={Link} to="/NewInvoice" style={{background:'#003f6b'}} className="Home-btns-1 mt-2 w-100">Create Invoice</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Card.Body>
                                        </Card>
                                        {/*  */}
                                        <Card>
                                            <Card.Body>
                                                {/* <h6 style={{ fontSize: '14px' }} className="text-700 fw-semibold">01 Apr 2023</h6> */}
                                                <h5 className="mb-3">New Proposal</h5>
                                                <p className="text-justify" style={{ fontSize: '14px' }}>
                                                    How are you? Sir / Madam Please send admin access details to website, Bitrix and email host.Also Price £200.00
                                                    your Whatsapp numberWill start nowPromise SIX star service.Please see 210 five star reviews of
                                                    many gigs that we have done in our profile Deposit £200
                                                    Many thanks David Soanes, Worthing BN11 4DT England
                                                </p>
                                                <p className="text-justify" style={{ fontSize: '14px' }} >
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
                                                <h6 className="mt-3 text-uppercase mb-3">Uploaded File</h6>
                                                <div className="row bg-pre mt-3">
                                                    <div className="col-4">
                                                        <img src={file} width="50px" height="50px" className="pro-pre" />
                                                    </div>
                                                    <div className="col-6 text-900 fil-name">File Name</div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
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
                </Container>
            </Row>
        </>
    )
}
export default TraderWorkStreamDetails