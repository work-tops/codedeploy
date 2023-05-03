import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import Flex from '../../../TemplateAssets/common/Flex';
import logo from '../../../TemplateAssets/Images/MP-logo.png'
import worktops from '../../Project images/Conversions.jpg'
import React, { useState } from 'react';
import { Button, Col, Form, Row, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { createData, getAllData } from "../../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import Background from '../../../TemplateAssets/common/Background';

const UserLogin = ({ bgProps }) => {
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
    e.preventDefault();
    const _userdetails = {
      email: formData.email,
      password: formData.password,
      role: formData.role
    }
    await createData("login", _userdetails).then(async response => {
      console.log(response);
      await getAllData("admin/user/" + response.data._user._id).then(res => {
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
      })
      toast.success('Successfully Logged In')
      sessionStorage.setItem("token", response.data.token);
      if (formData.role == "Freelancer") {
        history.push("/Seller/Landing");
      } else {
        history.push("/ProjectOwner/Landing");
      }
    }).catch(err => {
      toast.error(err.response.data.message);
    })
  }

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
        <Col lg={12} className="mb-4">
        <NavbarStandard />
        </Col>
        <Row className="mt-5 min-vh-100 bg-100">
          <Col xs={6} className="d-none d-lg-block position-relative" style={{ backgroundImage: `url(${worktops})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', objectFit: 'cover' }} />
          <Col sm={10} md={6} className="px-sm-0 align-self-center mx-auto py-5">
            <Row className="g-0 ms-4 justify-content-center">
              <Col lg={9} xl={8} className="col-xxl-6">
                <Card className='shadow'>
                  <Card.Header style={{ background: '#003f6b' }} className="bg-shape bg-circle-shape  text-center p-2">
                    <img src={logo} width="135px" />
                  </Card.Header>
                  <Card.Body className="p-4">
                    <Flex alignItems="center" justifyContent="between">
                      <h3 className=' mb-3'>Project Owner Login</h3>
                    </Flex>
                    <>
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
                              to='#'
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
                      <p className="text-center mt-3 mb-3">Dont Have an Account ? <Link to='/signup'>Create Account</Link></p>
                      <Toaster />
                    </>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col >
        </Row >
      </Row>
    </>
  );
};
export default UserLogin;
