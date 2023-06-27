import { useState, React, useRef } from "react";
import { Col, Container, Row, Card, Button, Form, Modal } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../Projectimages/Handyman.jpg'
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import file from '../Projectimages/BathroomFitting.jpg'
import Footer from "../Footer/Footer";
function ProductEnquiryDetails() {
    const [show, setShow] = useState(false);
    const editorRef = useRef(null);
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
                                    <Button as={Link} to="/Enquirescard" className="bg-danger  text-uppercase border-0">Close the Enquiry </Button>
                                </Card.Header>
                                <Card.Body>
                                    <div>
                                        <h5>
                                            "Enquiry Details: #2737"
                                        </h5>
                                        <p className="mt-3 text-900 text-capitalize" style={{ fontSize: '14px' }}>May 01 2023, 5:33 PM</p>
                                        <div>
                                            <h5 className="me-2 text-capitalize d-inline">Status: </h5>
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
                                            <h5 className="mb-3 fs-0 text-uppercase">Customer Name</h5>
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
                                            <h5 className="mb-3 fs-0 text-uppercase">Product Name</h5>
                                            <h6 className="mb-0">Quartz</h6>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h5 className="mb-3  text-uppercase fs-0">Requirements</h5>
                                            <h6 className="mb-2">Within 2 weeks</h6>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h5 className="mb-3  text-uppercase fs-0">Postcode</h5>
                                            <h6 className="mb-2">CB236DX</h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Form>
                                        <Row>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-900 text-uppercase">
                                                        Stone Category
                                                    </Form.Label>
                                                    <p className="text-900 text-uppercase">Quartz</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-900 text-uppercase">
                                                        Thickness
                                                    </Form.Label>
                                                    <p className="text-900 text-uppercase">20mm</p>
                                                </Form.Group>
                                            </Col>

                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-900 text-uppercase">
                                                    More Informations
                                                </Form.Label>
                                                <p className="text-900 text-uppercase">Length-3200mm , Width-1650mm</p>

                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-900 text-uppercase">
                                                    Attach Kitchen Plan
                                                </Form.Label>
                                                <div className="col-4">
                                                    <img src={file} width="50px" height="50px" className="pro-pre" />
                                                </div>
                                            </Form.Group>
                                        </Row>

                                    </Form>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 mb-2">
                                <div className='bg-light mb-3 p-3 d-flex justify-content-between text-uppercase'>
                                    <h5 className=" text-uppercase fs-0">Message</h5>
                                </div>
                                <div className="d-flex justify-content-end align-items-end">
                                    <Button as={Link} to="/NewEstimate" style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 me-2 text-uppercase">
                                        Create Estimate
                                    </Button>
                                    <Button style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 me-2 text-uppercase">
                                        Reply the Enquiry
                                    </Button>
                                </div>
                                <Card.Body className="position-relative">
                                    <Row>
                                        <Col xl={12}>

                                            <>
                                                <Form>
                                                    <Form.Group className="mb-3">
                                                        {/* <Form.Control
                                                            as="textarea" id="ask_question"
                                                            placeholder='Type Your Message Here'
                                                            rows={5} /> */}
                                                        <Editor
                                                            onInit={(evt, editor) => editorRef.current = editor}
                                                            initialValue=""
                                                            init={{
                                                                height: 200,

                                                                menubar: false,
                                                                plugins: [
                                                                    'advlist autolink lists link image charmap print preview anchor',
                                                                    'searchreplace visualblocks code fullscreen', 'image code',
                                                                    'insertdatetime media table paste code help wordcount'
                                                                ],
                                                                toolbar: 'undo redo | formatselect | ' +
                                                                    'bold italic  | alignleft aligncenter ' +
                                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                    'removeformat | image code',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                            }}
                                                        />
                                                    </Form.Group>
                                                    <div className="d-flex gap-2 justify-content-end mb-3">
                                                        <Button style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                            Attachments
                                                        </Button>
                                                        <Button style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                            Send
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </>

                                        </Col>
                                    </Row>
                                    <div class="kanban-items-container scrollbar" tabindex="0">
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif stretched-link" data-bs-toggle="modal" data-bs-target="#kanban-modal-1">Hello</p>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif stretched-link" data-bs-toggle="modal" data-bs-target="#kanban-modal-1">Hello</p>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif stretched-link" data-bs-toggle="modal" data-bs-target="#kanban-modal-1">Hello</p>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card hover-actions-trigger">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif stretched-link" data-bs-toggle="modal" data-bs-target="#kanban-modal-1">Hello</p>
                                                    <a href={profile}>
                                                        <img src={profile} width={"50px"} height={"50px"} />
                                                    </a>
                                                    <div class="kanban-item-footer cursor-default">
                                                        <div class="z-index-2">
                                                            <div class="avatar avatar-l align-top ms-n2" data-bs-toggle="tooltip" aria-label="Emma" data-bs-original-title="Emma">
                                                                <img class="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                        <Form.Control as="textarea" placeholder='Type Your Message....' rows={8} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                            <Form.Check.Input type="checkbox" />
                                            <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900 text-uppercase">
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
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default ProductEnquiryDetails