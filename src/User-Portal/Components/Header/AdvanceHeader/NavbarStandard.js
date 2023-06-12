import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team3 from './../../../TemplateAssets/Images/employee.png'
import { Link, useHistory } from 'react-router-dom';
import { Container, Navbar, Button, Badge } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { topNavbarBreakpoint } from '../../../../config';
import AppContext from '../../../TemplateAssets/context/Context';
import {
  Card,
  Modal,
  Nav,
  Dropdown
} from 'react-bootstrap';
import profile from '../../Projectimages/Handyman.jpg'
const NavbarStandard = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);
  const [user, setUser] = useState({});
  const history = useHistory();

  const logOut = () => {
    sessionStorage.clear();
    if (user.role == "Owner") {
      history.push("/user/logout");
    } else {
      history.push("/freelance/logout");
    }
    // window.location.reload();
  }

  // 1 for enduser, 2 for owner, 3 for freelancer
  useEffect(() => {
    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);
    setUser(_json);
    if (_json?.role == "Owner") {
      setId(2);
    }
    if (_json?.role == "Freelancer") {
      setId(3);
    }
    console.log('navbar_prop', id);
  }, [])


  return (

    <Navbar
      variant={isDark ? 'light' : 'dark'}
      fixed="top"
      expand={topNavbarBreakpoint}
      style={{ background: '#003f6b' }}

    >
      <Container className='d-flex justify-content-between'>
        {/* <div className='d-flex' style={{ flexDirection: 'row', justifyContent: 'space-between' }}> */}
        <div>
          {/* Logo */}
          <Navbar.Brand className="text-white dark__text-white" as={Link} to="/homepage">
            <img src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTKPFQ2xkQ7dLyfk2V8MUCOwyx2Gre0wGxHTyZaJA8svDFmGn2a-Wbvs628WHzM1B60HM3gzHf5kIDINBYUtF_PSvLzz0LM8VzqWzUsb-wDfnTkSD3j2-vvObqiX4n3sKcOiy4Si3172Y5ZGlhueKM-8UhCYFbI4Ak_pwKdPJaOWn8Ivbv8NlWcmUPfg/s600/MP-logo.png"} width="125px" />
          </Navbar.Brand>
          {/* Logo */}
        </div>
        <div>
          {id == 2 &&
            <div className=''>
              <Link to="/postproject">
                <Button className='bg-white border-0 me-2' style={{ color: '#003f6b' }}>Post a Project</Button>
              </Link>
            </div>}
        </div>

        {/* Search */}
        {/* <Form className="  position-relative">
          <Form.Control
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="rounded-pill ms-5 w-100  search-input"
          />
         
        </Form> */}
        {/* Search */}
        <div className=''>
          <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
          <Navbar.Collapse className="scrollbar">

            {/* How it work */}
            <Nav navbar className="ms-auto">
              <Nav.Link
                as={Link}
                to="/how-it-works"
                className='mt-2'
                style={{ fontSize: '12px' }}
              >
                HOW IT WORKS
              </Nav.Link>
              {/* How it work */}




              {/* Lists */}


              <Nav.Link
                as={Link}
                to="/productlist"
                className='mt-2'
                style={{ fontSize: '12px' }}
              >
                PRODUCTS
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/projectlist"
                className='mt-2'
                style={{ fontSize: '12px' }}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/servicelist"
                className='mt-2'
                style={{ fontSize: '12px' }}
              >
                SERVICES
              </Nav.Link>

              {id == 1 &&
                <>
                  <div>
                    <Dropdown navbar={true} as="li">
                      <Dropdown.Toggle
                        bsPrefix="toggle"
                        as={Link}
                        to="#!"
                      >
                        <Nav.Link
                          className='mt-2 text-uppercase'
                          style={{ fontSize: '12px' }}>
                          Trader
                        </Nav.Link>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                        <div className="bg-white rounded-2 py-2 dark__bg-1000">
                          <Link to="/freelancer/true">
                            <Dropdown.Item href="#!">Login</Dropdown.Item>
                          </Link>
                          <Link to="/freelancer/false">
                            <Dropdown.Item href="#!">Register</Dropdown.Item>
                          </Link>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <Dropdown navbar={true} as="li">
                      <Dropdown.Toggle
                        bsPrefix="toggle"
                        as={Link}
                        to="#!"
                      >
                        <Nav.Link
                          className='mt-2 text-uppercase'
                          style={{ fontSize: '12px' }}>
                          Project Owner
                        </Nav.Link>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                        <div className="bg-white rounded-2 py-2 dark__bg-1000">
                          <Link to="/projectowner">
                            <Dropdown.Item href="#!">Login</Dropdown.Item>
                          </Link>
                          <Link to="/project-owner-register">
                            <Dropdown.Item href="#!">Register</Dropdown.Item>
                          </Link>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                </>
              }

              {/* All View Icons (Wishlist & Cart) */}
              <div className='me-2'>
                <Dropdown navbar={true} as="li">
                  <Dropdown.Toggle
                    bsPrefix="toggle"
                    as={Link}
                    to="#!"
                    className="pe-0 ps-2 nav-link"
                  >
                    <Icon icon="flat-color-icons:like" width="24" height="24" />
                    {/* <Badge pill variant="danger" className="ml-1">
                          3
                        </Badge> */}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                    <div className="bg-white rounded-2 py-2 dark__bg-1000">
                      <Link to="/wishlist/product">
                        <Dropdown.Item href="#!">
                          Product
                          {/* <Badge pill variant="danger" className="ml-1 ms-1">
                                1
                              </Badge> */}
                        </Dropdown.Item>
                      </Link>
                      <Link to="/wishlist/project">
                        <Dropdown.Item href="#!">
                          Project
                          {/* <Badge pill variant="danger" className="ml-1 ms-1">
                                1
                              </Badge> */}
                        </Dropdown.Item>
                      </Link>
                      <Link to="/wishlist/seller">
                        <Dropdown.Item href="#!">
                          Followers
                          {/* <Badge pill variant="danger" className="ml-1 ms-1">
                                1
                              </Badge> */}
                        </Dropdown.Item>
                      </Link>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {/* Cart */}
              <div style={{ marginTop: '10px' }}>
                <Link to="/Cart">
                  <Icon icon="ic:round-shopping-cart" color="white" width="24" height="24" />
                  {/* <Badge pill variant="danger" className="ml-1">
                        3
                      </Badge> */}
                </Link>
              </div>

              {/*  */}
              {id != 1 &&
                <>
                  {/*  */}
                  <div>
                    <Dropdown navbar={true} as="li">
                      <Dropdown.Toggle
                        bsPrefix="toggle"
                        as={Link}
                        to="#!"
                        className="pe-0 ps-2 nav-link"
                      >
                        <Icon icon="mdi:bell" color="white" width="24" height="24" />
                        {/* <Badge pill variant="danger" className="ml-1">
                          3
                        </Badge> */}
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg " aria-labelledby="navbarDropdownNotification" data-bs-popper="static">
                        <div className="card card-notification shadow-none">
                          <div className="card-header">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-auto">
                                <h6 className="card-header-title mb-0">Notifications</h6>
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
                                  <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "auto", overflow: "hidden scroll" }}><div class="simplebar-content" style={{ padding: '0px' }}>
                                    <div className="list-group list-group-flush fw-normal fs--1">
                                      <div className="list-group-title border-bottom">NEW</div>
                                      <Link to="/chat">
                                        <div className="list-group-item">
                                          <a className="notification notification-flush notification-unread" href="#!">
                                            <div className="notification-avatar">
                                              <div className="avatar avatar-2xl me-3">
                                                <img className="rounded-circle" src={profile} alt="" />
                                              </div>
                                            </div>
                                            <div className="notification-body">
                                              <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                              <span className="notification-time">Just now</span>
                                            </div>
                                          </a>
                                        </div>
                                      </Link>
                                      <Link to="/chat">
                                        <div className="list-group-item">
                                          <a className="notification notification-flush notification-unread" href="#!">
                                            <div className="notification-avatar">
                                              <div className="avatar avatar-2xl me-3">
                                                <div className="avatar-name rounded-circle"><span>AB</span></div>
                                              </div>
                                            </div>
                                            <div className="notification-body">
                                              <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                              <span className="notification-time">9hr</span>
                                            </div>
                                          </a>
                                        </div>
                                      </Link>
                                      {/* Earlier Messages */}
                                      <div className="list-group-title border-bottom">EARLIER</div>
                                      <Link to="/chat">
                                        <div className="list-group-item">
                                          <a className="notification notification-flush" href="#!">
                                            <div className="notification-avatar">
                                              <div className="avatar avatar-2xl me-3">
                                                <img className="rounded-circle" src={profile} alt="" />
                                              </div>
                                            </div>
                                            <div className="notification-body">
                                              <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                              <span className="notification-time">1d</span>
                                            </div>
                                          </a>
                                        </div>
                                      </Link>
                                    </div>
                                  </div></div></div></div><div class="simplebar-placeholder" style={{ width: "auto", height: "513px" }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: "hidden", }}><div class="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div class="simplebar-scrollbar" style={{ height: "180px", display: "block", transform: "translate3d(0px, 59px, 0px)" }}></div></div></div>
                          <div class="card-footer text-center border-top">
                            <Link to="/notifications">
                              <a className="card-link d-block">View all</a>
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  {/*  */}



                  <div>
                    <Dropdown navbar={true} as="li">
                      <Dropdown.Toggle
                        bsPrefix="toggle"
                        as={Link}
                        to="#!"
                        className="pe-0 ps-2 nav-link"
                      >
                        <img src="https://prium.github.io/phoenix/v1.11.0/assets/img/team/40x40/57.webp" width="30px" className='bg-white rounded-circle' />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                        <div className="bg-white rounded-2 py-2 dark__bg-1000">
                          <Dropdown.Item className="fw-bold text-success" href="#!">
                            <FontAwesomeIcon icon="crown" className="me-1" />
                            <span>{user?.role}</span>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          {id == 3 && <Dropdown.Item as={Link} to="/FreelancerProfile">Profile</Dropdown.Item>}
                          {id == 2 && <Dropdown.Item as={Link} to="/MyProfile">Profile</Dropdown.Item>}
                          {id == 2 && <Dropdown.Item as={Link} to="/OpenProjectCard">My Projects</Dropdown.Item>}
                          {id == 2 && <Dropdown.Item as={Link} to="/workstreamcard">Workstreams</Dropdown.Item>}
                          {id == 3 && <Dropdown.Item as={Link} to="/addproductcard">My Products</Dropdown.Item>}
                          {id == 2 && <Dropdown.Item as={Link} to="/chat">Messages</Dropdown.Item>}
                          {id == 3 && <Dropdown.Item as={Link} to="/chat">Messages</Dropdown.Item>}
                          {id == 3 && <Dropdown.Item as={Link} to="/addservicecard">My Services</Dropdown.Item>}
                          {id == 3 && <Dropdown.Item as={Link} to="/proposalcard">Proposals</Dropdown.Item>}
                          {id == 3 && <Dropdown.Item as={Link} to="/InvoiceFreelancerCard">Invoice</Dropdown.Item>}
                          {id == 2 && <Dropdown.Item as={Link} to="/InvoicedueCard">Invoice</Dropdown.Item>}
                          {id == 3 && <Dropdown.Item as={Link} to="/Estimates">Estimates</Dropdown.Item>}
                          {id == 2 && <Dropdown.Item as={Link} to="/project-owner-estimate">Estimates</Dropdown.Item>}
                          {/* <Dropdown.Item as={Link} to="/reviewscard">Reviews</Dropdown.Item> */}
                          {/* <Dropdown.Divider /> */}
                          {id == 3 && <Dropdown.Item as={Link} to="/FreelancerEditProfile">Settings</Dropdown.Item>}
                          <Dropdown.Item as={Link} to="/Enquirescard">Enquiries</Dropdown.Item>
                          <Dropdown.Item onClick={() => { logOut() }}>
                            Logout
                          </Dropdown.Item>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>

              }
            </Nav>
          </Navbar.Collapse>
        </div>
        {/* </div> */}
      </Container>
    </Navbar >
  );
};

export default NavbarStandard;
