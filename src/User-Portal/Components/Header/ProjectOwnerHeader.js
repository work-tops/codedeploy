import React from "react";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import logo from '../Img/MP-logo.png'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import sellerProfile from '../Img/employee.png'
function ProjectOwnerHeader() {
    return (
        <>
            <Row className="navbar-standard p-2">
                <Col lg={2}>
                    <img src={logo} width="134px" />
                </Col>
                <Col lg={5}>
                    <Form.Group>
                        <Form.Control
                            placeholder='Search'
                            className='w-75 ms-2 mt-2' type='serach' />
                    </Form.Group>
                </Col>
                <Col lg={2}>
                    <Link to='/postjob1'>
                        <Button className="btn ms-2 bg-white mt-2 text-dark">Post A Project</Button>
                    </Link>
                </Col>
                <Col lg={3}>
                    <div className="d-flex justify-content-end">
                        <div>
                            <Icon icon="material-symbols:shopping-cart-outline-rounded" className="mt-2 me-3" color="white" width="28" height="28" />
                        </div>
                        <div>
                            <Icon icon="clarity:notification-outline-badged" className="mt-2" color="white" width="28" height="28" />
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle className="d-inline bg-transparent border-0" id="dropdown-basic">
                                    <Icon icon="icon-park-outline:like" color="white" className="mt-2 me-3 ms-3" width="28" height="28" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link to='/wishlist/product'>
                                            Product
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to='/wishlist/project'>
                                            Project
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <Link to='/wishlist/seller'>
                                            Seller
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Dropdown>
                            <div className="profile-divider d-inline">
                                <img src={sellerProfile} className="rounded-circle border border-light mt-1 m-3" width="35px" />
                            </div>
                            <Dropdown.Toggle className="d-inline bg-transparent border-0" id="dropdown-basic">
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to="/MyProfile">
                                        Profile
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/Project-Owner/Settings">
                                        Settings
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="">
                                    <Link to="/user/addproduct">
                                        Product
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="">
                                    <Link to="/user/addservices">
                                        Services
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/userlog">
                                        Logout
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ProjectOwnerHeader