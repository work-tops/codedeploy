import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team3 from '../../../TemplateAssets/Images/employee.png'
import { Link } from 'react-router-dom';
import { Container, Navbar, Button, Form } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { topNavbarBreakpoint } from '../../../../config';
import AppContext from '../../../TemplateAssets/context/Context';
import logo from "../../../TemplateAssets/Images/MP-logo.png"
import {
  Card,
  Modal,
  Nav,
  Dropdown
} from 'react-bootstrap';
const NavbarStandard = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(1);
  const [user, setUser] = useState({});

  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
  }

  // 1 for enduser, 2 for owner, 3 for freelancer
  useEffect(() => {
    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);
    setUser(_json);
    if (_json?.role == "Freelancer") {
      setId(3);
    }
    if (_json?.role == "Owner") {
      setId(2);
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
      <Container fluid>
        <div className='d-flex' style={{ flexDirection: 'row' }}>
          <div>
            {/* Logo */}
            <Navbar.Brand className="text-white dark__text-white" as={Link} to="/homepage">
              <img src={logo} width="125px" />
            </Navbar.Brand>
            {/* Logo */}
          </div>
          <div>
            {id == 3 &&
              <div className='ms-2 mt-2'>
                <Link to="/postproject">
                  <Button className='bg-white border-0 me-2' style={{ color: '#003f6b' }}>Post a Project</Button>
                </Link>
              </div>}
          </div>
        </div>
        {/* Search */}
        <Form className="  position-relative">
          <Form.Control
            type="search"
            placeholder="Search..."
            aria-label="Search"
            className="rounded-pill ms-5 w-100  search-input"
          />
          {/* <Icon icon="material-symbols:search" color="#fff" width="24" height="24" /> */}
        </Form>
        {/* Search */}
        <div className='ms-5'>
          <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
          <Navbar.Collapse className="scrollbar">

            {/* How it work */}
            <Nav navbar className="ms-auto">
              <Nav.Link
                as={Link}
                to="/how-it-works"
                className='mt-2'
                style={{ fontSize: '12px', width: '102px' }}
              >
                HOW IT WORKS
              </Nav.Link>
              {/* How it work */}




              {/* Lists */}


              <Nav.Link
                as={Link}
                to="/productlist1"
                className='mt-2'
                style={{ fontSize: '12px' }}
              >
                PRODUCTS
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/listjobs"
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
                          className='mt-2'
                          style={{ fontSize: '12px' }}>
                          LOGIN
                        </Nav.Link>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                        <div className="bg-white rounded-2 py-2 dark__bg-1000">
                          <Link to="/owner">
                            <Dropdown.Item href="#!">Project Owner</Dropdown.Item>
                          </Link>
                          <Link to="/freelancer/true">
                            <Dropdown.Item href="#!">Freelancer</Dropdown.Item>
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
                          className='mt-2'
                          style={{ fontSize: '12px' }}>
                          REGISTER
                        </Nav.Link>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                        <div className="bg-white rounded-2 py-2 dark__bg-1000">
                          <Link to="/signup">
                            <Dropdown.Item href="#!">Project Owner</Dropdown.Item>
                          </Link>
                          <Link to="/freelancer/false">
                            <Dropdown.Item href="#!">Freelancer</Dropdown.Item>
                          </Link>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </>
              }

              {id != 1 &&
                <>
                  <div>
                    <Dropdown navbar={true} as="li">
                      <Dropdown.Toggle
                        bsPrefix="toggle"
                        as={Link}
                        to="#!"
                        className="pe-0 ps-2 nav-link"
                      >
                        <Icon icon="flat-color-icons:like" width="24" height="24" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                        <div className="bg-white rounded-2 py-2 dark__bg-1000">
                          <Link to="/wishlist/product">
                            <Dropdown.Item href="#!">Product</Dropdown.Item>
                          </Link>
                          <Link to="/wishlist/project">
                            <Dropdown.Item href="#!">Project</Dropdown.Item>
                          </Link>
                          <Link to="/wishlist/seller">
                            <Dropdown.Item href="#!">Seller</Dropdown.Item>
                          </Link>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* <div className='mt-2'>
                    <Icon icon="mdi:bell" color="white" width="24" height="24" />
                  </div> */}
                  <div className='mt-2'>
                    <Link to="/Cart">
                      <Icon icon="ic:round-shopping-cart" color="white" width="24" height="24" />
                    </Link>
                  </div>

                  <div>
                    <Dropdown navbar={true} as="li">
                      <Dropdown.Toggle
                        bsPrefix="toggle"
                        as={Link}
                        to="#!"
                        className="pe-0 ps-2 nav-link"
                      >
                        <img src={team3} width="30px" className='bg-white rounded-circle' />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                        <div className="bg-white rounded-2 py-2 dark__bg-1000">
                          <Dropdown.Item className="fw-bold text-success" href="#!">
                            <FontAwesomeIcon icon="crown" className="me-1" />
                            <span>{user?.role}</span>
                          </Dropdown.Item>
                          <Dropdown.Divider />

                          <Dropdown.Item as={Link} to="/MyProfile">
                            Profile
                          </Dropdown.Item>

                          <Dropdown.Item as={Link} to="/user/addproduct">Product</Dropdown.Item>
                          <Dropdown.Item as={Link} to="/user/addservices">Services</Dropdown.Item>
                          {/* <Dropdown.Divider /> */}
                          <Dropdown.Item as={Link} to="/Project-Owner/Settings">
                            Settings
                          </Dropdown.Item>
                          <Dropdown.Item as={Link} onClick={() => { logOut() }} to="/">
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
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
