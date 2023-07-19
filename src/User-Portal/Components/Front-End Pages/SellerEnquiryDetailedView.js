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
                                    <Button as={Link} to="/enquire" className="bg-danger   border-0">Close the Enquiry </Button>
                                </Card.Header>
                                <Card.Body>
                                    <h1>
                                        Enquiry Details: #2737
                                    </h1>
                                    <div>
                                        <p className="mt-3 text-900 text-capitalize">May 01 2023, 5:33 PM</p>
                                        <div>
                                            <h2 className="me-2 text-capitalize d-inline">Status: </h2>
                                            <span className="bg-success badge rounded-pill">
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
                                            <h2 className="mb-3 text-uppercase">Customer Name</h2>
                                            <div className="d-flex">
                                                <img
                                                    src={profile}
                                                    width="30"
                                                    height="30"
                                                    className="me-2 rounded-circle"
                                                    alt="profile"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="mb-3 mb-lg-0">Peter Leverkus</h3>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h2 className="mb-3  text-uppercase">Product Name</h2>
                                            <h3 className="mb-0">Quartz</h3>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h2 className="mb-3  text-uppercase ">Requirements</h2>
                                            <h3 className="mb-2">Within 2 weeks</h3>
                                        </Col>
                                        <Col md={6} lg={3} className="mb-4 mb-lg-0">
                                            <h2 className="mb-3  text-uppercase ">Postcode</h2>
                                            <h3 className="mb-2">CB236DX</h3>
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
                                                    <Form.Label className="text-900 text-capitalize">
                                                        Stone Category
                                                    </Form.Label>
                                                    <p className="text-900 text-capitalize">Quartz</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-900 text-capitalize">
                                                        Thickness
                                                    </Form.Label>
                                                    <p className="text-900 text-capitalize">20mm</p>
                                                </Form.Group>
                                            </Col>

                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-900 text-capitalize">
                                                    More Informations
                                                </Form.Label>
                                                <p className="text-900 text-capitalize">Length-3200mm , Width-1650mm</p>

                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-900 text-capitalize">
                                                    Attach Kitchen Plan
                                                </Form.Label>
                                                <div>
                                                    <img src={file} width="50px" height="50px" />
                                                    <p className="mb-0 mt-1 fs--1">File Name</p>
                                                    <p className="fs--1">540KB</p>
                                                </div>
                                            </Form.Group>
                                        </Row>

                                    </Form>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 mb-2">
                                <div className='bg-light mb-3 p-3 d-flex flex-wrap justify-content-between'>
                                    <h2 className="">Message</h2>
                                    <div className="d-flex justify-content-end align-items-end">
                                        <Button as={Link} to="/new-estimate" style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 Home-btns-1 me-2 ">
                                            Create Estimate
                                        </Button>
                                        <Button style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 Home-btns-1 me-2 ">
                                            Reply the Enquiry
                                        </Button>
                                    </div>
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
                                                        <Button style={{ background: '#003f6b'}} className="Home-btns-1 border-0">
                                                            Attachments
                                                        </Button>
                                                        <Button style={{ background: '#003f6b'}} className="Home-btns-1 border-0">
                                                            Send
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </>

                                        </Col>
                                    </Row>
                                    <div class="kanban-items-container scrollbar" tabindex="0">
                                        <div class="kanban-item" tabindex="0">
                                            <div class="card kanban-item-card ">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif " >Hello</p>
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
                                            <div class="card kanban-item-card ">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif " >Hello</p>
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
                                            <div class="card kanban-item-card ">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif " >Hello</p>
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
                                            <div class="card kanban-item-card ">
                                                <div style={{ background: '#f3f3f3' }} class="card-body">
                                                    <div class="position-relative mb-1">
                                                        <span>21 March 2023</span>,<span>00:00</span>
                                                    </div>
                                                    <p class="mb-0 fs--1 fw-medium font-sans-serif " >Hello</p>
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
                            {/* <Modal
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-lg modal-90w"

                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header>
                                    <Modal.Title id="example-custom-modal-styling-title">
                                        <h3 className="text-uppercase">
                                            Please Type Your Message
                                        </h3>
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
                            </Modal> */}
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