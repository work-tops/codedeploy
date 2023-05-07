import React, { useEffect, useState } from 'react';
import { Link, useHistory,useParams } from 'react-router-dom';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import bgShape from '../../../TemplateAssets/assets/illustrations/bg-shape.png';
import shape1 from '../../../TemplateAssets/assets/illustrations/shape-1.png';
import { Card, Button, Col, Form, Row } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { createData, getAllData } from '../../../../Services/ProxyService';

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
    if(isToggle == true){
      loginUser();
    }else{
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
    history.push("/Seller/Landing");
  }).catch(err => {
    toast.error(err.response.data.message);
  })
}
useEffect(() => {
  console.log(login);
  login == 'true'?setToggle(true):setToggle(false);
}, [])
  return (
    <>
      <Row>
        <Col lg={12}>
          {/* <NavbarStandard /> */}
        </Col>
        <Col lg={12}>
          <div>
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
                    <Row className="h-100 g-0">
                      <Col style={{ background: '#003f6b' }} lg={5} className="text-white text-center">
                        <div className="position-relative p-4 pt-md-5 pb-md-7">
                          <div className="z-index-1 position-relative light">
                            <Link to={'/'}> <img src={logo} width="135px" /></Link>
                            <h3 className="mt-5 opacity-75 text-white"> Welcome </h3>
                          </div>
                          {isToggle == false ?<p className="mt-5 text-white">
                              have an account?
                              <br />
                              <a className="btn btn-outline-light mt-2 px-4" onClick={() => { setToggle(true) }}>
                                Login
                              </a>
                            </p>:
                            <div className="mt-5 text-white">
                              Don't have an account?
                              <div className="text-white text-decoration-underline" onClick={() => { setToggle(false) }}>
                                Get started!
                              </div>
                            </div>
                          }
                        </div>
                        <div className="mt-3 mb-4 mt-md-4 mb-md-5 light">
                          {leftSideContent}

                          {footer && (
                            <p className="mb-0 mt-4 mt-md-5 fs--1 fw-semi-bold text-white opacity-75">
                              Read our{' '}
                              <Link className="text-decoration-underline text-white" to="#!">
                                terms and conditions
                              </Link>
                            </p>
                          )}
                        </div>
                      </Col>
                      <Col
                        lg={7}
                      >
                        {isToggle == false ?
                          <div className="p-4 p-md-5 flex-grow-1">
                            <h3>Freelancer Registration</h3>
                            <Form onSubmit={handleSubmit}>
                              <Form.Group className='mb-3'>
                              <Form.Label className='text-700'>First Name</Form.Label>
                              <input className='form-control' placeholder="First Name" value={formData.first_name} name="first_name" onChange={handleFieldChange} type="text" />
                              </Form.Group>
                              <Form.Group
                              className='mb-3'
                              >
                              <Form.Label className='text-700'>Last Name</Form.Label>
                              <input className='form-control' placeholder="Last Name" value={formData.last_name} name="last_name" onChange={handleFieldChange} type="text" />
                              </Form.Group>
                              <Form.Group
                              className='mb-3'
                              >
                              <Form.Label className='text-700'>Email address</Form.Label>
                              <input className='form-control' placeholder={'Email Address'} value={formData.email} name="email" onChange={handleFieldChange} type="email" />
                              </Form.Group>
                              <Form.Group
                              className='mb-3'
                              >
                              <Form.Label className='text-700'>Password</Form.Label>
                              <input className='form-control' placeholder={'Password'} value={formData.password} name="password" onChange={handleFieldChange} type="password" />
                              </Form.Group>
                              <Form.Group
                              className='mb-3'
                              >
                              <Form.Label className='text-700'>Phone</Form.Label>
                              <input className='form-control' placeholder={'Phone'} value={formData.phone} name="phone" onChange={handleFieldChange} type="number" />
                              </Form.Group>
                              <Row className="justify-content-between align-items-center">
                                <Col xs="auto">
                                  <Form.Check type="checkbox" id="rememberMe" className="mb-0 mt-3">
                                    <Form.Check.Input type="checkbox" />
                                    <Form.Check.Label className="mb-0 text-700">
                                    I'd like to receive MyProject News, Advice and Tips
                                    </Form.Check.Label>
                                  </Form.Check>
                                </Col>
                              </Row>
                              <Button type="submit" style={{ background: '#003f6b' }} className="mt-3 w-100 border-0" disabled={!formData.email || !formData.password}>
                                Register
                              </Button>
                            </Form>
                          </div> : <div className="p-4 p-md-5 flex-grow-1">
                            <h3>Freelancer Login</h3>
                            <Form onSubmit={handleSubmit}>
                              <Form.Group className='mb-3'>
                              <Form.Label className='text-700'>Email address</Form.Label>
                              <input className='form-control' placeholder={'Email address'} value={formData.email} name="email" onChange={handleFieldChange} type="email" />
                              </Form.Group>
                              <Form.Group className='mb-3'>
                              <Form.Label className='text-700'>Password</Form.Label>
                              <input className='form-control' placeholder={'Password'} value={formData.password} name="password" onChange={handleFieldChange} type="password" />
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
                                  <Link className="fs--1 mb-0" to="#">
                                    Forgot Password?
                                  </Link>
                                </Col>
                              </Row>
                              <Button type="submit" style={{ background: '#003f6b' }} className="mt-3 w-100 border-0" disabled={!formData.email || !formData.password}>
                                Login
                              </Button>

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
      </Row>
    </>
  );
};


export default SellerLogin;
