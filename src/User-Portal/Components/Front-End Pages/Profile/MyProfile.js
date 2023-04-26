import React from "react";
import ProfileMenu from "./ProfileMenu";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import profile_img from '../../Project images/Handyman.jpg'
import Divider from "../../authentication/Divider";
function MyProfile() {
    return (
        <>
            <Row>
                <Col lg={2}>
                    <ProfileMenu />
                </Col>
                <Col lg={9}>
                    <Card className="mt-4 mb-4">
                        <Card.Body>
                            <h5 className="mt-3 ms-5">My Profile</h5>
                            <Divider />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Row>
                                        <Col lg={6}>
                                            <img src={profile_img} width="60px" height="60px" className="ms-5 rounded-circle" />
                                        </Col>
                                        <Col lg={6}>
                                            {/* <img src={profile_img} width="60px" height="60px" className="ms-5 rounded-circle" /> */}
                                            <p className="mb-0 fw-semibold">Rafiqur Rahman</p>
                                            <small className="mb-0  d-block ">Fabricator</small>
                                            <small className="mb-0   d-block w-100">Cambridge,United Kingdom.</small>
                                        </Col>
                                    </Row>
                                </div>
                                <div>
                                    <Button className="btn border-0  bg-secondary">Edit</Button>
                                </div>
                            </div>
                            <Divider />
                            <h5 className="ms-5">Personal Information</h5>
                            <div className="d-flex justify-content-between">
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        First Name
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Rafiqur
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Email Address
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        rr67@gmail.co
                                    </Form.Label>

                                    <Form.Label className="d-block">
                                        Primary Skill
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Fabricator
                                    </Form.Label>
                                </div>
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        Last Name
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Rahman
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Phone
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        +44567890
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Secondary Skill
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Worktops Installation
                                    </Form.Label>
                                </div>
                                <div className="ms-5">
                                    <Button className="btn border-0 ms-2 bg-secondary">Edit</Button>
                                </div>
                            </div>
                            <Divider />
                            <h5 className="ms-5">Address</h5>
                            <div className="d-flex justify-content-between">
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        First Line
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        102
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Country
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        United Kingdom
                                    </Form.Label>
                                </div>
                                <div>
                                    <Form.Label className="d-block">
                                        County
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        De la la Way
                                    </Form.Label>
                                    <Form.Label className="d-block">
                                        Post Code
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        CDEX323
                                    </Form.Label>
                                </div>
                                <div>
                                    <Button className="btn border-0 ms-2 bg-secondary">Edit</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default MyProfile