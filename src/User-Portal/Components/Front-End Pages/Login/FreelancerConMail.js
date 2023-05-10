import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import bgShape from '../../../TemplateAssets/assets/illustrations/bg-shape.png';
import shape1 from '../../../TemplateAssets/assets/illustrations/shape-1.png';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import envelope from '../../Project images/16.png';

function FreelanceConMail() {
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
                                    <Col md={7}>
                                        <img
                                            className="d-block mx-auto mt-5 mb-4"
                                            src={envelope}
                                            alt="sent"
                                            width={100}
                                        />
                                        <h3 className="text-justify m-3">Please check your email!</h3>
                                        <p style={{ fontSize:'14px' }} className="text-justify m-3">
                                            An email has been sent to <span className="text-success fw-bold">test1@gmail.com</span >. Please click on the
                                            included link to reset your password.
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <Button
                                                style={{ background: '#003f6b' }}
                                                size="sm"
                                                className="border-0 p-2 mb-5 mt-3"
                                            >
                                                <FontAwesomeIcon
                                                    icon="chevron-left"
                                                    className="me-1"
                                                />
                                                Return to login
                                            </Button>
                                        </div>
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
export default FreelanceConMail