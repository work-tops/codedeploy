import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoutImg from '../../Project images/45.png';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import worktops from '../../Project images/Extensions.jpg'
function UserLogout() {
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
                                            className="d-block mx-auto mt-5 mb-4"
                                            src={logoutImg}
                                            alt="sent"
                                            width={100}
                                        />
                                        <h3 className="text-center m-3">See you again!</h3>
                                        <p style={{ fontSize: '14px' }} className="text-center m-3">
                                            Thanks for using <span className="fw-semibold" style={{ color: '#003f6b' }}>MyProject.ai</span>
                                            <span className="d-block">
                                                You are now successfully signed out.
                                            </span>
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <Button
                                                as={Link}
                                                to="/owner"
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
export default UserLogout