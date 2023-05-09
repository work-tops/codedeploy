import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import worktops from '../../Project images/Painting.jpg'
import { Col, Row, Card, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import envelope from '../../Project images/16.png';

function UserConMail() {
    return (
        <>
            <Row className="min-vh-100 bg-100">
                <Col xs={6} className="d-none d-lg-block position-relative">
                    <div style={{ backgroundImage: `url(${worktops})` }} className="bg-holder">
                    </div>
                </Col>
                <Col sm={10} md={6} className="px-sm-0 align-self-center mx-auto py-5">
                    <Container>
                        <Row className="g-0  justify-content-center">
                            <Col lg={9} xl={8} className="col-xxl-8">
                                <Card className='shadow'>
                                    <Card.Header style={{ background: '#003f6b' }} className="text-center p-2">
                                        <Link to={'/'}>
                                            <img src={logo} width="135px" />
                                        </Link>
                                    </Card.Header>
                                    <Card.Body className="p-4">
                                        <img
                                            className="d-block mb-3 mx-auto"
                                            src={envelope}
                                            alt="sent"
                                            width={100}
                                        />
                                        <h3 className="text-center mb-3">Please check your email!</h3>
                                        <p style={{ fontSize: '14px' }} className="text-justify ">
                                            An email has been sent to <span className="text-success fw-bold">test1@gmail.com</span >. Please click on the
                                            included link to reset your password.
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <Button
                                                style={{ background: '#003f6b' }}
                                                size="sm"
                                                as={Link}
                                                to="/owner"
                                                className="border-0 p-2 "
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
                </Col >
            </Row >
        </>
    )
}
export default UserConMail