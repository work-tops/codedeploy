import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import logo from '../../TemplateAssets/Images/MP-logo.png'
import { Icon } from "@iconify/react";
import { Link, useHistory } from "react-router-dom";
import sellerProfile from '../../TemplateAssets/Images/employee.png'
function ProjectOwnerHeader() {
    const history = useHistory()
    const sessionclear = () => {
        sessionStorage.clear();
        history.push("/userlog")
    }
    const [token, setToken] = useState(null)
    useEffect(() => {
        var _token = sessionStorage.getItem("token");
        setToken(_token);
    }, [])
    return (
        <>
            <Row className="navbar-standard p-2">
                <Col lg={2}>
                    <img src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTKPFQ2xkQ7dLyfk2V8MUCOwyx2Gre0wGxHTyZaJA8svDFmGn2a-Wbvs628WHzM1B60HM3gzHf5kIDINBYUtF_PSvLzz0LM8VzqWzUsb-wDfnTkSD3j2-vvObqiX4n3sKcOiy4Si3172Y5ZGlhueKM-8UhCYFbI4Ak_pwKdPJaOWn8Ivbv8NlWcmUPfg/s600/MP-logo.png"} width="134px" />
                </Col>
                <Col lg={5}>
                    <Form.Group>
                        <Form.Control
                            placeholder='Search'
                            className='w-75 ms-2 mt-2' type='search' />
                    </Form.Group>
                </Col>
                <Col lg={2}>
                    {token != null &&
                        <Link to='/postjob2'>
                            <Button className="btn ms-2 bg-white mt-2 text-dark">Post A Project</Button>
                        </Link>
                    }
                </Col>
                <Col lg={3}>
                    <div className="d-flex justify-content-end">
                        <div>
                            <Link to="/cart">
                                <Icon icon="material-symbols:shopping-cart-outline-rounded" className="mt-2 me-3" color="white" width="28" height="28" />
                            </Link>
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
                                        <Link to='/wishlist/products'>
                                            Product
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to='/wishlist/projects'>
                                            Project
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <Link to='/wishlist/followers'>
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
                                    <Link to="/projectowner/profile">
                                        Profile
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to="/Project-Owner/Settings">
                                        Settings
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="">
                                    <Link to="/dashboard-addproduct">
                                        Product
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="">
                                    <Link to="/dashboard-addservice">
                                        Services
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={sessionclear}>
                                    {/* <Link to="/userlog"> */}
                                    Logout
                                    {/* </Link> */}
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