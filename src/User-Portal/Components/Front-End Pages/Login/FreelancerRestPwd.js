import React from "react";
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";
import bgShape from '../../../TemplateAssets/assets/illustrations/bg-shape.png';
import shape1 from '../../../TemplateAssets/assets/illustrations/shape-1.png';
import { Link } from "react-router-dom";
import logo from '../../../TemplateAssets/Images/MP-logo.png'

function FreelancerResetPwd() {

    return (
        <>
            <Container>
                <Row className="g-0 min-vh-100 flex-center">
                    <Col lg={8} xxl={5} className="py-3 position-relative">
                        <img
                            className="bg-auth-circle-shape"
                            src={bgShape}
                            alt=""
                            width="250"
                        />
                        <img
                            className="bg-auth-circle-shape-2"
                            src={shape1}
                            alt=""
                            width="150"
                        />
                        <Card className="overflow-hidden z-index-1">
                            <Card.Body className="p-0">
                                <Row className="h-100 g-0">
                                    <Col style={{ background: '#003f6b' }} lg={5} className="text-white text-center">

                                        <div className="position-relative p-4 pt-md-5 pb-md-7">
                                            <div className="z-index-1 position-relative light">
                                                <Link to={'/'}> <img src={logo} width="135px" /></Link>
                                                {/* <h3 className="mt-5 opacity-75 text-white"> Welcome </h3> */}
                                            </div>

                                        </div>
                                        <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                                            <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">
                                                Read our{' '}
                                                <Link
                                                    className="text-decoration-underline text-white"
                                                    to="#!"
                                                >
                                                    terms
                                                </Link>{' '}
                                                and{' '}
                                                <Link
                                                    className="text-decoration-underline text-white"
                                                    to="#!"
                                                >
                                                    conditions{' '}
                                                </Link>
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    {/* Content */}
                                    <Col md={7} className="mt-3 mb-3">
                                        <Form className="m-3">
                                            <h3 className="mb-3 ">Reset Password</h3>
                                            <Form.Group className="mb-3">
                                                <Form.Label>New Password</Form.Label>
                                                <Form.Control
                                                    placeholder='New Password'
                                                    type="password"
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control
                                                    placeholder='Confirm Password'
                                                    type="password"
                                                />
                                            </Form.Group>

                                            <Button
                                                style={{ background: '#003f6b' }}
                                                className="w-100 border-0"
                                            >
                                                Set password
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default FreelancerResetPwd