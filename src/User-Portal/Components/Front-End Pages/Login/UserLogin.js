import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import worktops from '../../Projectimages/Conversions.jpg'
import React, { useState } from 'react';
import { Button, Col, Form, Row, Card, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { createData, getAllData } from "../../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import Footer from "../../Footer/Footer";
import SocialAuthButtons from "../../../TemplateAssets/authentication/SocialAuthButtons";
import { Divider } from '@mui/material';

const UserLogin = ({ }) => {
  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
    role: ''
  });
  console.log(formData)

  const history = useHistory();

  const handleChange = (e) => {
    const myData = { ...formData };
    myData[e.target.name] = e.target.value;
    setFormData(myData);
  }

  const Login = async (e) => {
    // e.preventDefault();
    const _userdetails = {
      email: formData.email,
      password: formData.password,
      role: "Owner"
    }
    await createData("login", _userdetails).then(async response => {
      console.log(response);
      await getAllData("admin/user/" + response.data._user._id).then(res => {
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      })
      toast.success('Successfully Logged In')
      sessionStorage.setItem("token", response.data.token);
      history.push("/OpenProjectCard");
      // if (formData.role == "Freelancer") {
      //   history.push("/Seller/Landing");
      // } else {
      //   history.push("/ProjectOwner/Landing");
      // }
    }).catch(err => {
      toast.error(err.response.data.message);
    })
  }

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    Login();
    // toast.success(`Logged in as ${formData.email}`, {
    //   theme: 'colored'
    // });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <Row className="min-vh-100 bg-100">
      <Col lg={12} className="mb-5">
        <NavbarStandard/>
      </Col>
        <Col xs={6} className="d-none d-lg-block position-relative">
          <div style={{ backgroundImage: `url(${worktops})` }} className="bg-holder">
          </div>
        </Col>
        <Col sm={10} md={6} className="px-sm-0 align-self-center mx-auto py-5">
          <Container>
            <Row className="g-0  justify-content-center">
              <Col lg={9} xl={8} className="col-xxl-8">
                <Card>
                  <Card.Header style={{ background: '#003f6b' }} className="text-center p-2">
                    <Link to={'/'}>
                      <img src={"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTKPFQ2xkQ7dLyfk2V8MUCOwyx2Gre0wGxHTyZaJA8svDFmGn2a-Wbvs628WHzM1B60HM3gzHf5kIDINBYUtF_PSvLzz0LM8VzqWzUsb-wDfnTkSD3j2-vvObqiX4n3sKcOiy4Si3172Y5ZGlhueKM-8UhCYFbI4Ak_pwKdPJaOWn8Ivbv8NlWcmUPfg/s600/MP-logo.png"} width="135px" />
                    </Link>
                  </Card.Header>
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className=' mb-3'>Project Owner Login</h4>
                    </div>
                    <>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label className='text-700'>Email address<span className="text-danger">*</span></Form.Label>
                          <Form.Control
                            placeholder={'Email address'}
                            value={formData.email}
                            name="email"
                            onChange={handleFieldChange}
                            type="email"
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className='text-700'>Password<span className="text-danger">*</span></Form.Label>
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
                              className="fs--1 fw-semibold text-primary mb-0"
                              to='/user/forgetpassword'
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
                      <p className="text-center fw-semibold text-900 mt-3 mb-3">Don't Have an Account ? <Link to='/project-owner-register'>Create Account</Link></p>
                      <Divider>Or Login With</Divider>
                      <SocialAuthButtons/>
                      <Toaster />
                    </>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col >
        <Col>
          <Footer />
        </Col>
      </Row >
    </>
  );
};
export default UserLogin;
