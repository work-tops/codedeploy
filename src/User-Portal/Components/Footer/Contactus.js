import React, { useRef } from "react";
import { Card, Form, Col, Row, Container, Button } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import Footer from "./Footer";
import { Editor } from "@tinymce/tinymce-react";

function ContactUs() {
    const editorRef = useRef(null);
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
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Form>
                                                <Form.Group className="">
                                                    <h2 className="mb-0">Get in Touch</h2>
                                                    <p className="">We'd Love to talk about how we can help you</p>
                                                </Form.Group>
                                                <p className="fw-bold"><i className="fas fa-home me-2"></i>1 De La Warr Way, Cambridge, CB23 6DX</p>
                                                <p className="fw-bold"><i className="fas fa-envelope me-2"></i> info@work-tops.com</p>
                                                <p className="fw-bold"><i className="fas fa-phone me-2"></i> +44 0330 113 5868</p>
                                            </Form>
                                        </div>
                                        <div className="mb-3 col-lg-12">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.306275439513!2d-0.07238922453713224!3d52.21965315842449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877d9bdb04f00f5%3A0x8c177b154e5b774c!2s1%20De%20La%20Warr%20Way%2C%20Great%20Cambourne%2C%20Cambourne%2C%20Cambridge%20CB23%206DX%2C%20UK!5e0!3m2!1sen!2sin!4v1686745513208!5m2!1sen!2sin"
                                                width="100%"
                                                height="300"
                                                allowFullScreen=""
                                                loading="lazy"
                                                title="Map"
                                            >
                                            </iframe>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <Card className="">
                                        <Card.Header className="text-center bg-light" as={"h4"}>
                                            General Enquiry
                                        </Card.Header>
                                        <Card.Body>
                                            <Row className="">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">First Name<span className="text-danger">*</span></Form.Label>
                                                        <Form.Control placeholder="First Name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">Last Name<span className="text-danger">*</span></Form.Label>
                                                        <Form.Control placeholder="First Name" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row className="">
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">Email <span className="text-danger">*</span></Form.Label>
                                                        <Form.Control type="email" placeholder="Enter Your Email Address" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-uppercase">Phone Number<span className="text-danger">*</span></Form.Label>
                                                        <Form.Control placeholder="+44 0000 000 0000" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="text-uppercase">Details</Form.Label>
                                                {/* <Form.Control
                                                    placeholder="Tell us About Your..."
                                                    as="textarea"
                                                    rows={5}
                                                /> */}
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    initialValue=""

                                                    init={{

                                                        height: 200,
                                                        menubar: false,
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
                                            <Button style={{ background: '#003f6b' }} className="border-0 w-100">Send Enquiry</Button>
                                            <p className="mt-3 text-center text-capitalize">We'll get back to you in 1-2 bussiness days</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                            {/* */}
                        </Card.Body>
                    </Card>
                </Container>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default ContactUs