// import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team3 from '../../../TemplateAssets/Images/employee.png'
import { Link } from 'react-router-dom';
import { Container, Navbar, Button, Form } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { topNavbarBreakpoint } from '../../../../config';
import AppContext from '../../../TemplateAssets/context/Context';
import logo from "../../../TemplateAssets/Images/MP-logo.png"
import UserRegisterForm from '../../Front-End Pages/UserRegisterForm';
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


  return (
    <Navbar
      variant={isDark ? 'light' : 'dark'}
      fixed="top"
      expand={topNavbarBreakpoint}
      style={{ background: '#003f6b' }}

    >
      <Container>
        {/* Logo */}
        <Navbar.Brand className="text-white dark__text-white" as={Link} to="/homepage">
          <img src={logo} width="125px" />
        </Navbar.Brand>
        {/* Logo */}


        {/* Post Project Button */}
        <div className='ms-2'>
          <Link to="/postproject">
            <Button className='bg-white border-0' style={{ color: '#003f6b' }}>Post a Project</Button>
          </Link>
        </div>
        {/* Post Project Button */}

        <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Navbar.Collapse className="scrollbar">
          {/* Search */}
          <Form className=" mt-2  position-relative">
            <Form.Control
              type="search"
              placeholder="Search..."
              aria-label="Search"
              style={{marginLeft:'2.2rem'}}
              className="rounded-pill w-100  search-input"
            />
          </Form>
          {/* Search */}


          {/* How it work */}
          <Nav navbar className="ms-auto">
            <Nav.Link
              as={Link}
              to="/how-it-works"
              className='mt-2'
              style={{ fontSize: '12px',width:'102px' }}
            >
              HOW IT WORKS
            </Nav.Link>
            {/* How it work */}

            {/* Login  As*/}
            <div>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/SellerLogin"
                  className='mt-2'
                  style={{ fontSize: '12px',width:'91px' }}
                >
                   SELLER LOGIN
                </Nav.Link>
              </Nav.Item>
            </div>
            {/* Login */}
            {/* Login */}
            <div>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/userLogin"
                  className='mt-2'
                  style={{ fontSize: '12px',width:'147px' }}
                >
                  PROJECT OWNER LOGIN
                </Nav.Link>
               
              </Nav.Item>
            </div>
            {/* Login As*/}


            {/*  Register*/}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#!"
                className='mt-2 w-100'
                onClick={() => setShowRegistrationModal(!showRegistrationModal)}
                style={{ fontSize: '12px' }}
              >
                REGISTER
              </Nav.Link>
              <Modal
                show={showRegistrationModal}
                centered
                onHide={() => setShowRegistrationModal(false)}
              >
                <Modal.Body className="p-0">
                  <Card>
                    <Card.Header style={{ background: '#003f6b' }} className="bg-shape bg-circle-shape  text-center p-2">
                      <img src={logo} width="147px" />
                    </Card.Header>
                    <Card.Body className="fs--1 fw-normal p-4">
                      <UserRegisterForm />
                    </Card.Body>
                  </Card>
                </Modal.Body>
              </Modal>
            </Nav.Item>
            {/*  Register*/}


            {/* Lists */}
            <div>
              <Dropdown navbar={true} as="li">
                <Dropdown.Toggle
                  bsPrefix="toggle"
                  as={Link}
                  to="#!"
                  style={{ fontSize: '12px' }}
                  className="mt-2 pe-0 ps-2 nav-link"
                >
                  LISTS
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                  <div className="bg-white rounded-2 py-2 dark__bg-1000">
                    <Link to="/productlist">
                      <Dropdown.Item href="#!">Product List</Dropdown.Item>
                    </Link>
                    <Link to="/listjobs">
                      <Dropdown.Item href="#!">Project List</Dropdown.Item>
                    </Link>
                    <Link to="/servicelist">
                      <Dropdown.Item href="#!">Seller List</Dropdown.Item>
                    </Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Wishlist */}


            {/* Wishlist */}
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
            {/* Wishlist */}

            {/* Notifications */}
            <div className='mt-2'>
              <Icon icon="mdi:bell" color="white" width="24" height="24" />
            </div>
            {/* Notifications */}


            {/* Notifications */}
            <div className='mt-2'>
              <Icon icon="mdi:bell" color="white" width="24" height="24" />
            </div>
            {/* Notifications */}

            {/* Cart */}
            <div className='mt-2'>
              <Link to="/Cart">
              <Icon icon="ic:round-shopping-cart" color="white" width="24" height="24" />
              </Link>
            </div>
            {/* Cart */}

            {/* Seller Profile */}
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
                      <span>Project Owner</span>
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
                    <Dropdown.Item as={Link} to="/userLogin">
                      Logout
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Seller Profile */}


            {/* Project Owner Profile */}
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
                      <span>Seller</span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/MyProfile">
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/user/addproduct">Product</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/user/addservices">Services</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Seller/Settings">
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/SellerLogin">
                      Logout
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/*Project Owner Profile  */}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
