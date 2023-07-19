import React from 'react';
import { NavDropdown, Nav, Container, Dropdown } from 'react-bootstrap';
import logo from '../../User-Portal/Components/Projectimages/My Project white logo-01.png'
import { Link } from 'react-router-dom';
import trainer from '../../User-Portal/Components/Projectimages/trainer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

const AdminHeader = () => {

    return (
        <div className='row'>
            <div className='col-12'>
                <nav style={{ background: '#003f6b' }} className="navbar fixed-top navbar-top ">
                    <Container>
                        <button className="btn navbar-toggler-humburger-icon navbar-toggler  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><Icon icon="material-symbols:menu" color="white" width="20" height="20" /><span className="toggle-line"></span></button>
                        <a className="navbar-brand">
                            <div className="">
                                <img
                                    className="ms-3"
                                    style={{ width: '120px' }}
                                    title="MYPROJECT.AI"
                                    src={logo}
                                    alt="MAI Logo"
                                />
                            </div>
                        </a>
                        <div>
                        </div>

                        <div className="navbar-collapse  scrollbar collapse" id="navbarStandard" >
                            <ul className="navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                                <Nav.Link as={Link} to="/dashboard" style={{ color: '#fff', fontSize: '14px' }}>Dashboard</Nav.Link>
                                <Nav.Link as={Link} to="/allproduct" style={{ color: '#fff', fontSize: '14px' }}>Products</Nav.Link>
                                <Nav.Link as={Link} to="/alltraders" style={{ color: '#fff', fontSize: '14px' }}>Traders</Nav.Link>
                                <Nav.Link as={Link} to="/allOwner" style={{ color: '#fff', fontSize: '14px' }}>Owners</Nav.Link>
                                <Nav.Link as={Link} to="/allservices" style={{ color: '#fff', fontSize: '14px' }}>Services</Nav.Link>
                                <Nav.Link as={Link} to="/alljob" style={{ color: '#fff', fontSize: '14px' }} >Jobs</Nav.Link>
                                <Nav.Link as={Link} to="/allorders" style={{ color: '#fff', fontSize: '14px' }}>Orders</Nav.Link>
                                <Nav.Link as={Link} to="/ShippingRate" style={{ color: '#fff', fontSize: '14px' }}>Shipping</Nav.Link>
                                <Nav.Link as={Link} to="/payments" style={{ color: '#fff', fontSize: '14px' }} >Payments</Nav.Link>
                                <Nav.Link as={Link} to="/AllReviews" style={{ color: '#fff', fontSize: '14px' }} >Reviews</Nav.Link>
                                <Nav.Link as={Link} to="/AllEnquires" style={{ color: '#fff', fontSize: '14px' }} >Conversation</Nav.Link>
                                <Nav>
                                    <NavDropdown className='commission' title="Commission" style={{ fontSize: '14px' }} id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/globalcommission"><span className='text-dark'>Global Commission</span></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/servicecommission"><span className='text-dark'>Service Commission</span></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/AllTradercommission"><span className='text-dark'>Trader Commission</span></NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to="/allcategorycommission"><span className='text-dark'>Category Commission</span></NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </ul>

                        </div>
                        <ul class="navbar-nav navbar-nav-icons ms-auto non-collapse-section flex-row align-items-center">
                            <>
                                {/* Notifications */}
                                <Dropdown navbar={true} as="li">
                                    <Dropdown.Toggle
                                        bsPrefix="toggle"
                                        as={Link}
                                        title='Notifications'
                                        to="#!"
                                        className=""
                                    >
                                        <Icon icon="mdi:bell" color="white" width="24" height="24" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end  dropdown-menu-start dropdown-menu-card dropdown-menu-notification " aria-labelledby="navbarDropdownNotification" data-bs-popper="static">
                                        <div className="card card-notification  shadow-none">
                                            <div className="card-header">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-auto">
                                                        <h4 className="card-header-title mb-0">Notifications</h4>
                                                    </div>
                                                    <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                                                </div>
                                            </div>
                                            <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }} data-simplebar="init">
                                                <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                                                    <div className="simplebar-height-auto-observer-wrapper">
                                                        <div className="simplebar-height-auto-observer">
                                                        </div>
                                                    </div>
                                                    {/* New Messages */}
                                                    <div className="simplebar-mask">
                                                        <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                                            <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: '0px' }}>
                                                                <div className="list-group list-group-flush fw-normal fs--1">
                                                                    <div className="list-group-title border-bottom">NEW</div>
                                                                    <Link to="/conversation">
                                                                        <div className="list-group-item">
                                                                            <a className="notification notification-flush notification-unread" href="#!">
                                                                                <div className="notification-avatar">
                                                                                    <div className="avatar avatar-2xl me-3">
                                                                                        <img className="rounded-circle" src={trainer} alt="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <p className="mb-1"><span className="fw-semibold">Emma Watson</span> replied to your comment : "Hello world"</p>
                                                                                    <span className="notification-time">Just now</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </Link>
                                                                    <Link to="/conversation">
                                                                        <div className="list-group-item">
                                                                            <a className="notification notification-flush notification-unread" href="#!">
                                                                                <div className="notification-avatar">
                                                                                    <div className="avatar avatar-2xl me-3">
                                                                                        <div className="avatar-name rounded-circle"><span>AB</span></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <p className="mb-1"><span className="fw-semibold">Emma Watson</span> replied to your comment : "Hello world"</p>
                                                                                    <span className="notification-time">9hr</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </Link>
                                                                    {/* Earlier Messages */}
                                                                    <div className="list-group-title border-bottom">EARLIER</div>
                                                                    <Link to="/conversation">
                                                                        <div className="list-group-item">
                                                                            <a className="notification notification-flush" href="#!">
                                                                                <div className="notification-avatar">
                                                                                    <div className="avatar avatar-2xl me-3">
                                                                                        <img className="rounded-circle" src={trainer} alt="" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="notification-body">
                                                                                    <p className="mb-1"><span className="fw-semibold">Emma Watson</span> replied to your comment : "Hello world"</p>
                                                                                    <span className="notification-time">1d</span>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "513px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden", }}><div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ height: "180px", display: "block", transform: "translate3d(0px, 59px, 0px)" }}></div></div></div>
                                            <div className="card-footer text-center border-top">
                                                <Link title='Click here to see your Notifications' to="/Notifications">
                                                    <a className="card-link d-block">View all</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                                {/* Notifications */}
                            </>
                            <>
                                <li className="nav-item dropdown">
                                    {/* trainer */}
                                    <div>
                                        <Dropdown navbar={true} as="li">
                                            <Dropdown.Toggle
                                                bsPrefix="toggle"
                                                as={Link}
                                                to="#!"
                                                className="pe-0 nav-link"
                                            >
                                                <div title='trainer' className="avatar me-1 avatar-xl">
                                                    <img className="rounded-circle" src={trainer} alt="" />
                                                </div>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-card me-2 dropdown-menu-end">
                                                <div className="bg-white rounded-2 py-2 dark__bg-1000">
                                                    <Dropdown.Item className="fw-bold text-success" href="#!">
                                                        <FontAwesomeIcon icon="crown" className="me-1" />
                                                        <span>Peter</span>
                                                    </Dropdown.Item>
                                                    <Dropdown.Divider />
                                                    <Dropdown.Item as={Link} to="/ailogin">
                                                        Sign Out
                                                    </Dropdown.Item>
                                                </div>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {/* trainer */}
                                </li>
                            </>
                        </ul>
                    </Container>
                </nav >
            </div>
        </div >
    );
};

export default AdminHeader;
