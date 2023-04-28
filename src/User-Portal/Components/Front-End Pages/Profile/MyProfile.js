import React from "react";
import ProfileMenu from "./ProfileMenu";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import profile_img from '../../Project images/Handyman.jpg'
import Divider from "../../authentication/Divider";
import { Link } from "react-router-dom";
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
                            <div className="d-flex justify-content-between">
                                <h5 className="mt-3 ms-5">My Profile</h5>
                                <div>
                                    <Button className="btn border-0  bg-secondary">Edit</Button>
                                    <Button className="btn border-0 ms-2  bg-primary">Save</Button>
                                </div>
                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Row>
                                        <Col lg={6}>
                                            <img src={profile_img} width="60px" height="60px" className="ms-5 rounded-circle" />
                                            <small role="button" className="d-block text-center ms-3 mt-2">Edit</small>
                                        </Col>
                                        <Col lg={6}>
                                            {/* <img src={profile_img} width="60px" height="60px" className="ms-5 rounded-circle" /> */}
                                            <p className="mb-2 fw-semibold">Rafiqur Rahman</p>

                                            <small className="mb-2  d-block ">Fabricator</small>

                                            <small className="mb-2   d-block w-100">Cambridge,United Kingdom.</small>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between">
                                <h5 className="ms-5">Personal Information</h5>
                                <div>
                                    <Button className="btn border-0  m-2 bg-secondary">Edit</Button>
                                    <Button className="btn border-0 m-2  bg-primary">Save</Button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        First Name
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Rafiqur
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Rafiqur"} type="text" />
                                    </Form.Group>
                                    <Form.Label className="d-block">
                                        Email Address
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        rr67@gmail.co
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"rr67@gmail.co"} type="text" />
                                    </Form.Group>

                                    <Form.Label className="d-block">
                                        Primary Skill
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Fabricator
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Fabricator"} type="text" />
                                    </Form.Group>

                                </div>
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        Last Name
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Rahman
                                    </Form.Label>

                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Rahman"} type="text" />
                                    </Form.Group>
                                    <Form.Label className="d-block">
                                        Phone
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        +44567890
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"+44567890"} type="text" />
                                    </Form.Group>
                                    <Form.Label className="d-block">
                                        Secondary Skill
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Worktops Installation
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Worktops Installation"} type="text" />
                                    </Form.Group>
                                </div>

                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between">
                            <h5 className="ms-5">Address</h5>
                                <div>
                                    <Button className="btn border-0  m-2 bg-secondary">Edit</Button>
                                    <Button className="btn border-0 m-2  bg-primary">Save</Button>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        First Line
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        102
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"102"} type="text" />
                                    </Form.Group>
                                    <Form.Label className="d-block">
                                        Country
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        United Kingdom
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"United Kingdom"} type="text" />
                                    </Form.Group>
                                </div>
                                <div>
                                    <Form.Label className="d-block">
                                        County
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        De la la Way
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"De la la Way"} type="text" />
                                    </Form.Group>
                                    <Form.Label className="d-block">
                                        Post Code
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        CDEX323
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"CDEX323"} type="text" />
                                    </Form.Group>
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