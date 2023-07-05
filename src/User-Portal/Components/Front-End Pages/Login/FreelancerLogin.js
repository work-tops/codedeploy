import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import bgShape from '../../../TemplateAssets/assets/illustrations/bg-shape.png';
import shape1 from '../../../TemplateAssets/assets/illustrations/shape-1.png';
import { Card, Button, Col, Form, Row, Container } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { createData, getAllData } from '../../../../Services/ProxyService';
import SocialAuthButtons from '../../../TemplateAssets/authentication/SocialAuthButtons';
import Footer from '../../Footer/Footer';
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard';
import { Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import logo from '../../Projectimages/My Project white logo-01.png'



const SellerLogin = ({ leftSideContent, layout, footer = true }) => {

  // State
  let { login } = useParams();
  const [isToggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const history = useHistory();

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    if (isToggle == true) {
      loginUser();
    } else {
      registerUser();
    }
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const registerUser = async () => {
    const userObject = {
      name: formData.first_name + " " + formData.last_name,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      confirm_password: formData.password,
      role: "Freelancer",
      terms_and_condition: true,
      is_active: true,
      is_approved: true,
      created_by: "1",
    }
    console.log('add user', userObject);
    await createData("register", userObject).then(async response => {
      toast.success('Successfully Registered')
      setFormData({});
      setToggle(true);
    }).catch(err => {
      toast.error(err.response.data.message);
    })
  }
  const loginUser = async (e) => {
    const _userdetails = {
      email: formData.email,
      password: formData.password,
      role: "Freelancer"
    }
    await createData("login", _userdetails).then(async response => {
      await getAllData("admin/user/" + response.data._user._id).then(res => {
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      })
      toast.success('Successfully Logged In')
      sessionStorage.setItem("token", response.data.token);
      history.push("/dashboard-products");
    }).catch(err => {
      toast.error(err.response.data.message);
    })
  }
  useEffect(() => {
    console.log(login);
    login == 'true' ? setToggle(true) : setToggle(false);
  }, [])

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  return (
    <>

      <Row>
        <Col lg={12} className='mb-5'>
          <NavbarStandard />
        </Col>
        <Col lg={12}>
          <div className='mt-4 container'>
            <Row className="g-0 min-vh-100 flex-center">
              <Col lg={8} xxl={7} className="py-3 position-relative">
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
                    <Row className="g-0">
                      <Col style={{ background: '#003f6b' }} lg={5} className="justify-content-center align-items-center text-white text-center">
                        <div className='mt-4 ms-2'>
                        <Link to={'/'}> <img src={logo} width="135px" /></Link>
                        </div>
                        <div className="position-relative mt-md-0 mt-sm-0 mt-lg-6">
                          <div className="z-index-1 position-relative light">
                            <h3 className="opacity-75 mt-3 ms-3 mb-3 text-white"> Welcome </h3>
                          </div>
                          {isToggle == false ? <p className="mt-lg-5 mt-sm-3 mt-md-3 text-white">
                            <p className='mb-2 text-center'>
                              Already Have an Account ?
                            </p>
                            <div className='d-flex justify-content-center mt-3'>
                              <a className="btn btn-outline-light  mt-2 px-4" onClick={() => { setToggle(true) }}>
                                Login
                              </a>
                            </div>
                          </p> :
                            <div className="mt-lg-5 mt-sm-3 ms-3 mt-md-3 text-white">
                              Don't have an account?
                              <div className="text-white cursor-pointer text-decoration-underline" onClick={() => { setToggle(false) }}>
                                Get started!
                              </div>
                            </div>
                          }
                        </div>
                        <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                          {leftSideContent}

                          {/* {footer && (
                              <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">
                                Read our{' '}
                                <Link className="text-decoration-underline text-white" to="#!">
                                  terms and conditions
                                </Link>
                              </p>
                            )} */}
                        </div>
                      </Col>
                      <Col
                        lg={7}
                      >
                        {isToggle == false ?
                          <div className="p-4 p-md-5 flex-grow-1">
                            <h4 className='mb-3'>Trader SignUp</h4>
                            <Form onSubmit={handleSubmit}>
                              <Row className='g-2'>
                                <Col md={6}>
                                  <Form.Group className='mb-3'>
                                    <Form.Label className='text-700'>First Name<span className="text-danger">*</span></Form.Label>
                                    <input className='form-control' placeholder="First Name" value={formData.first_name} name="first_name" onChange={handleFieldChange} type="text" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group
                                    className='mb-3'
                                  >
                                    <Form.Label className='text-700'>Last Name<span className="text-danger">*</span></Form.Label>
                                    <input className='form-control' placeholder="Last Name" value={formData.last_name} name="last_name" onChange={handleFieldChange} type="text" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className='mb-3'>
                                    <Form.Label className='text-700'>Email address<span className="text-danger">*</span></Form.Label>
                                    <input className='form-control' placeholder={'Email Address'} value={formData.email} name="email" onChange={handleFieldChange} type="email" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Label className="text-700">Password<span className="text-danger">*</span></Form.Label>
                                    <div className="position-relative">
                                      <input
                                        className="form-control"
                                        placeholder="Password"
                                        value={formData.password}
                                        name="password"
                                        onChange={handleFieldChange}
                                        type={passwordVisible ? 'text' : 'password'}
                                      />
                                      {formData.password && (
                                        <Icon
                                          className="position-absolute me-2 cursor-pointer end-0 top-50 translate-middle-y"
                                          icon="mdi:eye"
                                          color="gray"
                                          width="24"
                                          height="24"
                                          onClick={togglePasswordVisibility}
                                        />
                                      )}
                                    </div>
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className='mb-3'>
                                    <Form.Label className='text-700'>Phone</Form.Label>
                                    <input className='form-control' placeholder={'Phone'} value={formData.phone} name="phone" onChange={handleFieldChange} type="number" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Label className="text-700">ID Verification<span className="text-danger">*</span></Form.Label>
                                    <Form.Select>
                                      <option value="">Select</option>
                                      <option value="Passport">Passport</option>
                                      <option value="Bio Metric">Bio Metric</option>
                                      <option value="Driving License">Driving License</option>
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Form.Group className="">
                                <Button
                                  className="d-block"
                                  size='sm'
                                >
                                  Upload File
                                </Button>
                              </Form.Group>
                              <Row className="justify-content-between align-items-center">
                                <Col xs="auto">
                                  <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" className=" mb-0 mt-3">
                                      <Form.Check.Input type="checkbox" className='cursor-pointer' />
                                      <Form.Check.Label
                                        className="text-900 d-inline"
                                      >
                                        By signing up you accept MAI's <Link to="/termsofuse">Terms and Conditions</Link>.
                                      </Form.Check.Label>
                                    </Form.Check>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Button type="submit" style={{ background: '#003f6b' }} className="mt-3 w-100 border-0" disabled={!formData.email || !formData.password}>
                                Register
                              </Button>
                              <div className='mt-3'>
                                <Divider>Or Register With</Divider>
                                <SocialAuthButtons />
                              </div>
                            </Form>
                          </div> : <div className="p-4 p-md-5 flex-grow-1">
                            <h4 className='mb-3'>Trader Login</h4>
                            <Form onSubmit={handleSubmit}>
                              <Form.Group className='mb-3'>
                                <Form.Label className='text-700'>Email address<span className="text-danger">*</span></Form.Label>
                                <input className='form-control' placeholder={'Email address'} value={formData.email} name="email" onChange={handleFieldChange} type="email" />
                              </Form.Group>
                              <Form.Group className='mb-3'>
                                <Form.Label className='text-700'>Password<span className="text-danger">*</span></Form.Label>
                                <div className="position-relative">
                                  <input
                                    className="form-control"
                                    placeholder={'Password'}
                                    value={formData.password}
                                    name="password"
                                    onChange={handleFieldChange}
                                    type={passwordVisible ? 'text' : 'password'}
                                  />
                                  {formData.password && (
                                    <Icon
                                      className="position-absolute me-2 cursor-pointer end-0 top-50 translate-middle-y"
                                      icon="mdi:eye"
                                      color="gray"
                                      width="24"
                                      height="24"
                                      onClick={togglePasswordVisibility}
                                    />
                                  )}
                                </div>
                              </Form.Group>
                              <Row className="justify-content-between align-items-center">
                                <Col xs="auto">
                                  <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label className="mb-0 text-700">
                                      Remember me
                                    </Form.Check.Label>
                                  </Form.Check>
                                </Col>
                                <Col xs="auto">
                                  <Link className="fs--1 mb-0" to="/freelance/forgetpassword">
                                    Forgot Password?
                                  </Link>
                                </Col>
                              </Row>
                              <Button type="submit" style={{ background: '#003f6b' }} className="mt-3 w-100 border-0" disabled={!formData.email || !formData.password}>
                                Login
                              </Button>
                              <div className='mt-3'>
                                <Divider>Or Login With</Divider>
                                <SocialAuthButtons />
                              </div>
                            </Form>
                          </div>
                        }
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Toaster />
        <Col lg={12}>
          <Footer />
        </Col>
      </Row>
    </>
  );
};


export default SellerLogin;
