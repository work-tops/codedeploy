import React from 'react';
import PropTypes from 'prop-types';
import Background from '../common/Background';
import { Card, Col, Row } from 'react-bootstrap';
import logo from '../Images/MP-logo.png'
import worktops from '../../Components/Projectimages/Flooring.jpg'
import { Link } from 'react-router-dom';


const RegisterAuthSplitLayout = ({ children, bgProps }) => {
  return (
    <>
      <Row className=" min-vh-100 bg-100">
        <Col xs={6} style={{ backgroundImage: `url(${worktops})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'cover' }}>
        </Col>
        <Col sm={10} md={6} className="px-sm-0 align-self-center mx-auto">
          <Row className="g-0 justify-content-center">
            <Col lg={9} xl={8} className="col-xxl-8">
              <Card className='shadow ms-3 mt-2'>
<<<<<<< HEAD
                <Card.Header style={{ background: '#003f6b' }} className="bg-shape bg-circle-shape  text-center p-2">
                 <Link to="/"><img src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTKPFQ2xkQ7dLyfk2V8MUCOwyx2Gre0wGxHTyZaJA8svDFmGn2a-Wbvs628WHzM1B60HM3gzHf5kIDINBYUtF_PSvLzz0LM8VzqWzUsb-wDfnTkSD3j2-vvObqiX4n3sKcOiy4Si3172Y5ZGlhueKM-8UhCYFbI4Ak_pwKdPJaOWn8Ivbv8NlWcmUPfg/s600/MP-logo.png"} width="135px" /></Link> 
=======
                <Card.Header style={{ background: '#003f6b' }} className="text-center p-2">
                 <Link to="/"><img src={logo} width="135px" /></Link> 
>>>>>>> 14bf935e316ae4e695d051451bf1a9794a42dad4
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

RegisterAuthSplitLayout.propTypes = {
  children: PropTypes.node.isRequired,
  bgProps: PropTypes.shape(Background.propTypes).isRequired
};

export default RegisterAuthSplitLayout;
