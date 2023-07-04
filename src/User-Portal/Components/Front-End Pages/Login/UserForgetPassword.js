import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../Components/Projectimages/My Project white logo-01.png'
import worktops from '../../Projectimages/paint.jpg'
import { Button, Col, Form, Row, Card, Container } from 'react-bootstrap';
import Footer from "../../Footer/Footer";

function UserForgetPassword() {
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
                                        <h4 className="mb-3"> Forgot your password?</h4>
                                        <p style={{ fontSize: '14px' }}>Enter your email and we'll send you a reset link.</p>
                                        <Form className="mt-3">
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    placeholder={'Email address'}
                                                    name="email"
                                                    type="email"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Button type="submit" as={Link} to="/user/confirm-mail" style={{ background: '#003f6b' }} className="w-100 border-0">
                                                    Send reset link
                                                </Button>
                                            </Form.Group>

                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col >
            </Row >
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default UserForgetPassword