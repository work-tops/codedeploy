import React from "react";
import ProfileMenu from "./ProfileMenu";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import profile_img from '../../Project images/Handyman.jpg'
import Divider from "../../../TemplateAssets/common/Divider";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
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
                                    <Form.Group className="mb-3">
                                        <Form.Select>
                                            <option>
                                                Fabricator
                                            </option>
                                            <option>
                                                Kitchen Design
                                            </option>
                                            <option>
                                                Electronic Services
                                            </option>
                                        </Form.Select>
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
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-block">
                                            Secondary Skill
                                        </Form.Label>
                                        <div style={{ border: '1px solid #d5d6d7', borderRadius: '5px' }}>
                                            <Multiselect />
                                        </div>
                                    </Form.Group>
                                </div>

                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between">
                                <h5 className="ms-5">Address</h5>
                                <div>
                                    <Button className="btn border-0  bg-secondary">Edit</Button>
                                    <Button className="btn border-0 ms-2  bg-primary">Save</Button>
                                </div>
                            </div>
                            <Form.Group className="ms-5">
                            </Form.Group>
                            <div className="m-5">
                                <Form.Group>
                                    <Form.Control as="textarea" placeholder=' Address...' rows={8} />
                                </Form.Group>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default MyProfile