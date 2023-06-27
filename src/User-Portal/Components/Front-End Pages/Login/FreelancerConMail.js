import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import bgShape from '../../../TemplateAssets/assets/illustrations/bg-shape.png';
import shape1 from '../../../TemplateAssets/assets/illustrations/shape-1.png';
import logo from '../../../Components/Projectimages/My Project white logo-01.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import envelope from '../../Projectimages/16.png';
import Footer from "../../Footer/Footer";

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
                        <Card className='shadow'>
                            <Card.Header style={{ background: '#003f6b' }} className="text-center p-2">
                                <Link to={'/'}>
                                    <img src={logo} width="135px" />
                                </Link>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <div className="d-flex justify-content-center mb-1">
                                    <img
                                        className="d-block mx-auto mt-3 mb-3"
                                        src={envelope}
                                        alt="sent"
                                        width={100}
                                    />
                                </div>
                                <h4 className="text-center m-3">Please check your email!</h4>
                                <p style={{ fontSize: '14px' }} className="text-center m-3">
                                    An email has been sent to <span className="text-success fw-bold">test1@gmail.com</span >. Please click on the
                                    included link to reset your password.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        as={Link}
                                        to="/freelancer/true"
                                        style={{ background: '#003f6b' }}
                                        size="sm"
                                        className="border-0 p-2 mb-3 mt-3"
                                    >
                                        <FontAwesomeIcon
                                            icon="chevron-left"
                                            className="me-1"
                                        />
                                        Return to login
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default FreelanceConMail