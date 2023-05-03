import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../../TemplateAssets/common/Background';
import Section from '../../../TemplateAssets/common/Section';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import bgShape from '../../../TemplateAssets/assets/illustrations/bg-shape.png';
import shape1 from '../../../TemplateAssets/assets/illustrations/shape-1.png';
import halfCircle from '../../../TemplateAssets/assets/illustrations/half-circle.png';
import { Card, Button, Col, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'


const SellerLogin = ({ leftSideContent, layout, footer = true }) => {

  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    toast.success(`Logged in as ${formData.email}`, {
      theme: 'colored'
    });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  return (
    <>
      <Row>
        <Col lg={12}>
          <NavbarStandard />
        </Col>
        <Col lg={12}>
          <Section fluid className="py-0">
            <Row className="g-0 min-vh-100 flex-center">
              <Col lg={8} xxl={5} className="py-3 position-relative">
                <img
                  className="bg-auth-circle-shape"
                  src={bgShape}
                  alt=""
                  width="250"
                />
                <img
                  className="bg-auth-circle-shape-2"
                  src={shape1}
                  alt=""
                  width="150"
                />
                <Card className="overflow-hidden z-index-1">
                  <Card.Body className="p-0">
                    <Row className="h-100 g-0">
                      <Col style={{ background: '#003f6b' }} lg={5} className="text-white text-center">
                        <div className="position-relative p-4 pt-md-5 pb-md-7">
                          <Background
                            image={halfCircle}
                            className="bg-auth-card-shape"
                          />
                          <div className="z-index-1 position-relative light">

                            <img src={logo} width="135px" />
                            <h3 className="mt-5 opacity-75 text-white">
                              Welcome
                            </h3>
                          </div>
                          <p className="mt-5 text-white">
                            Don't have an account?
                            <br />
                            <Link
                              className="text-white text-decoration-underline"
                              to="/signup"
                            >
                              Get started!
                            </Link>
                          </p>
                        </div>
                        <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                          {leftSideContent}

                          {footer && (
                            <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">
                              Read our{' '}
                              <Link
                                className="text-decoration-underline text-white"
                                to="#!"
                              >
                                terms
                              </Link>{' '}
                              and{' '}
                              <Link
                                className="text-decoration-underline text-white"
                                to="#!"
                              >
                                conditions{' '}
                              </Link>
                            </p>
                          )}
                        </div>
                      </Col>
                      <Col
                        lg={7}
                      >
                        <div className="p-4 p-md-5 flex-grow-1">
                          <h3>Freelancer Login</h3>
                          <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                              <Form.Label className='text-700'>Email address</Form.Label>
                              <Form.Control
                                placeholder={'Email address'}
                                value={formData.email}
                                name="email"
                                onChange={handleFieldChange}
                                type="email"
                              />
                            </Form.Group>

                            <Form.Group className="mb-3">
                              <Form.Label className='text-700'>Password</Form.Label>
                              <Form.Control
                                placeholder={'Password'}
                                value={formData.password}
                                name="password"
                                onChange={handleFieldChange}
                                type="password"
                              />
                            </Form.Group>

                            <Row className="justify-content-between align-items-center">
                              <Col xs="auto">
                                <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                  <Form.Check.Input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={e =>
                                      setFormData({
                                        ...formData,
                                        remember: e.target.checked
                                      })
                                    }
                                  />
                                  <Form.Check.Label className="mb-0 text-700">
                                    Remember me
                                  </Form.Check.Label>
                                </Form.Check>
                              </Col>

                              <Col xs="auto">
                                <Link
                                  className="fs--1 mb-0"
                                  to="#"
                                >
                                  Forgot Password?
                                </Link>
                              </Col>
                            </Row>

                            <Form.Group>
                              <Button
                                type="submit"
                                style={{ background: '#003f6b' }}
                                className="mt-3 w-100 border-0"
                                disabled={!formData.email || !formData.password}
                              >
                                Log in
                              </Button>
                            </Form.Group>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </>
  );
};


export default SellerLogin;
