import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import {
  Card,
  Modal,
  Nav,
  OverlayTrigger,
  Tooltip,
  Dropdown
} from 'react-bootstrap';
import AppContext from '../../../TemplateAssets/context/Context'
import UserRegisterForm from '../../Front-End Pages/UserRegisterForm';


const LandingRightSideNavItem = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const {
    config: { isDark, isRTL },
    setConfig
  } = useContext(AppContext);
  
  return (
    <Nav navbar className="ms-auto">
      <Nav.Item as={'li'}>
        <Nav.Link
          className="pe-2 theme-switch-toggle"
          onClick={() => setConfig('isDark', !isDark)}
        >
          <OverlayTrigger
            key="left"
            placement={isRTL ? 'bottom' : 'left'}
            overlay={
              <Tooltip id="ThemeColor" className="d-none d-lg-block">
                {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              </Tooltip>
            }
          >
            <span>
              <div className="theme-switch-toggle-label">
                <FontAwesomeIcon
                  icon={isDark ? 'sun' : 'moon'}
                  className="me-2"
                />
              </div>
              <p className="d-lg-none mb-0">
                {isDark ? 'Switch to light theme ' : 'Switch to dark theme'}
              </p>
            </span>
          </OverlayTrigger>
        </Nav.Link>
      </Nav.Item>
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
    </Nav>
  );
};

export default LandingRightSideNavItem;
