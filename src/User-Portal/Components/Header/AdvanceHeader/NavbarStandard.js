// import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import team3 from '../../../TemplateAssets/Images/employee.png'
import { Link } from 'react-router-dom';
import { Container, Navbar, Button, Form } from 'react-bootstrap';
import handleNavbarTransparency from '../../../TemplateAssets/helpers/handleNavbarTransparency';
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

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  const [showRegistrationModal, setShowRegistrationModal] = useState(false);


  return (
    <Navbar
      variant={isDark ? 'light' : 'dark'}
      fixed="top"
      expand={topNavbarBreakpoint}
      // className={classNames('navbar-standard navbar-theme', {
      //   'bg-100': !navbarCollapsed && isDark,
      //   'bg-dark': !navbarCollapsed && !isDark
      // })}
    >
      <Container>

        <Navbar.Brand className="text-white dark__text-white" as={Link} to="/homepage">
          <img src={logo} width="125px" />
        </Navbar.Brand>
        <div className='ms-2'>
          <Link to="/postjob1">
            <Button className='bg-white border-0' style={{ color: '#003f6b' }}>Post a Project</Button>
          </Link>
        </div>
        <Navbar.Toggle onClick={() => setNavbarCollapsed(!navbarCollapsed)} />
        <Navbar.Collapse className="scrollbar">
          <Form className="ms-5 mt-2 w-50 position-relative">
            <Form.Control
              type="search"
              placeholder="Search..."
              aria-label="Search"
              className="rounded-pill search-input"
            />
          </Form>

          <Nav navbar className="ms-auto">
            <Nav.Link
              as={Link}
              to="/how-it-works"
              className='mt-2'
            >
              HOW IT WORKS
            </Nav.Link>
            <Dropdown>
              <Nav.Link
                as={Link}
                to="/userlog"
                className='mt-2'
              >
                LOGIN
              </Nav.Link>
            </Dropdown>
            <Dropdown>
              <Nav.Link
                as={Link}
                to="/userlog"
                className='mt-2'
              >
                LOGIN
              </Nav.Link>
            </Dropdown>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="#!"
                className='mt-2'
                onClick={() => setShowRegistrationModal(!showRegistrationModal)}
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
                      <img src={logo} width="135px" />
                    </Card.Header>
                    <Card.Body className="fs--1 fw-normal p-4">
                      <UserRegisterForm />
                    </Card.Body>
                  </Card>
                </Modal.Body>
              </Modal>
            </Nav.Item>
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
                    <Dropdown.Item className="fw-bold text-warning" href="#!">
                      <FontAwesomeIcon icon="crown" className="me-1" />
                      <span>Go Pro</span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#!">Set status</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/user/profile">
                      Profile &amp; account
                    </Dropdown.Item>
                    <Dropdown.Item href="#!">Feedback</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/user/settings">
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/authentication/card/logout">
                      Logout
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/*  */}


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
                    <Dropdown.Item className="fw-bold text-warning" href="#!">
                      <FontAwesomeIcon icon="crown" className="me-1" />
                      <span>Go Pro</span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#!">Set status</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/user/profile">
                      Profile &amp; account
                    </Dropdown.Item>
                    <Dropdown.Item href="#!">Feedback</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/user/settings">
                      Settings
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/authentication/card/logout">
                      Logout
                    </Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/*  */}
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
