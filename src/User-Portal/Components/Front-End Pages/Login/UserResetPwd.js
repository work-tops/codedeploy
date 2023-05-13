import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import worktops from '../../Projectimages/Electric.jpg'
import { Button, Col, Form, Row, Card, Container } from 'react-bootstrap';


function UserResetPwd() {
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
                                        <Form className="">
                                            <h4 className="mb-3">Reset Password</h4>
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
                                                as={Link}
                                                to="/owner"
                                                style={{ background: '#003f6b' }}
                                                className="w-100 border-0"
                                            >
                                                Set password
                                            </Button>
                                        </Form>
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
export default UserResetPwd