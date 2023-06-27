import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../Components/Projectimages/My Project white logo-01.png'
import worktops from '../../Projectimages/Restoring.jpg'
import { Col, Row, Card, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import envelope from '../../Projectimages/16.png';


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
                                                to="/projectowner"
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
                </Col >
            </Row >
        </>
    )
}
export default UserConMail