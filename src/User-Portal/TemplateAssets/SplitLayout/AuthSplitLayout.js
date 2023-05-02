import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Container } from 'react-bootstrap';
import logo from '../Images/MP-logo.png'
import worktops from '../../Components/Project images/Conversions.jpg'
const AuthSplitLayout = ({ children, bgProps }) => {
  return (
    <>
      <Row className="mt-5 min-vh-100 bg-100">
        <Col xs={6} style={{ backgroundImage: `url(${worktops})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
        </Col>
        <Col sm={10} md={6} className="px-sm-0 align-self-center mx-auto py-5">
          <Row className="g-0 justify-content-center">
            <Col lg={9} xl={8} className="col-xxl-6">
              <Card className='shadow'>
                <Card.Header style={{ background: '#003f6b' }} className="bg-shape bg-circle-shape  text-center p-2">
                  <img src={logo} width="135px" />
                </Card.Header>
                <Card.Body className="p-4">{children}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

// AuthSplitLayout.propTypes = {
//   children: PropTypes.node.isRequired,
//   bgProps: PropTypes.shape(Background.propTypes).isRequired
// };

export default AuthSplitLayout;
