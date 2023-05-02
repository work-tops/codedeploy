import React, { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import profile_img from '../../Project images/Handyman.jpg'
import Divider from "../../../TemplateAssets/common/Divider";
import { Link } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
function MyProfile() {
    const [user, setUser] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        setUser(_json);
    }, [])

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
                                    <Button className="btn border-0  bg-secondary" onClick={() => setIsEdit(true)}>Edit</Button>
                                    <Button className="btn border-0 ms-2  bg-primary" onClick={() => setIsEdit(false)}>Save</Button>
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
                                            <p className="mb-2 fw-semibold">{user?.name}</p>

                                            <small className="mb-2  d-block ">{user?.role}</small>

                                            <small className="mb-2   d-block w-100">{user?.company_address}</small>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between">
                                <h5 className="ms-5">Personal Information</h5>
                                {/* <div className="d-none">
                                    <Button className="btn border-0  m-2 bg-secondary">Edit</Button>
                                    <Button className="btn border-0 m-2  bg-primary">Save</Button>
                                </div> */}
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        First Name
                                    </Form.Label>
                                    {isEdit == false &&
                                        <Form.Label className="d-block fw-semibold">
                                            {user?.first_name}
                                        </Form.Label>
                                    }
                                    {isEdit == true &&
                                    <Form.Group className="mb-3">
                                        <Form.Control value={user?.first_name} type="text" />
                                    </Form.Group>
}
                                    <Form.Label className="d-block">
                                        Email Address
                                    </Form.Label>
                                    {isEdit == false &&
                                    <Form.Label className="d-block fw-semibold">
                                        {user?.email}
                                    </Form.Label>
}
{isEdit == true &&
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"rr67@gmail.co"} type="text" />
                                    </Form.Group>
}

                                    {/* <Form.Label className="d-block">
                                        Primary Skill
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Fabricator"} type="text" />
                                    </Form.Group> */}

                                </div>
                                <div className="ms-5">
                                    <Form.Label className="d-block">
                                        Last Name
                                    </Form.Label>
                                    {isEdit == false &&
                                    <Form.Label className="d-block fw-semibold">
                                        {user?.last_name}
                                    </Form.Label>
}
{isEdit == true &&

                                    <Form.Group className="mb-3">
                                        <Form.Control value={user?.last_name} type="text" />
                                    </Form.Group>
}
                                    <Form.Label className="d-block">
                                        Phone
                                    </Form.Label>
                                    {isEdit == true &&
                                    <Form.Label className="d-block fw-semibold">
                                        {user?.phone}
                                    </Form.Label>
}
{isEdit == true &&
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"+44567890"} type="text" />
                                    </Form.Group>
}
                                    {/* <Form.Label className="d-block">
                                        Secondary Skill
                                    </Form.Label>
                                    <Form.Label className="d-block fw-semibold">
                                        Worktops Installation
                                    </Form.Label>
                                    <Form.Group className="mb-3">
                                        <Form.Control value={"Worktops Installation"} type="text" />
                                    </Form.Group> */}
                                </div>

                            </div>
                            <Divider />
                            <div className="d-flex justify-content-between">
                                <h5 className="ms-5">Address</h5>
                                {/* <div>
                                    <Button className="btn border-0  m-2 bg-secondary">Edit</Button>
                                    <Button className="btn border-0 m-2  bg-primary">Save</Button>
                                </div> */}
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