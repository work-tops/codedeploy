import Divider from '../authentication/Divider';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import SocialAuthButtons from '../authentication/SocialAuthButtons';
import { createData } from "../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = ({ hasLabel, layout }) => {
  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
    role:''
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
      role:formData.role
    }
    await createData("login", _userdetails).then(response=>{
      console.log(response);
      toast.success('Successfully Logged In')
      sessionStorage.setItem("token", response.data.token);
      if(formData.role == "Freelancer"){
        history.push("/Seller/Landing");
      }else{
        history.push("/ProjectOwner/Landing");
      }
    }).catch(err=>{
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
      <Form onSubmit={(e)=>{Login(e)}}>
        <h5 className='d-inline'>Login As:</h5>
        <Form.Group className="mt-3 mb-3">
          <Form.Select required name="role" onChange={(e)=>{handleChange(e)}}>
            <option>Select Role</option>
            <option  value={'Freelancer'}>Seller </option>
            <option  value={'Owner'}>Project Owner </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          {hasLabel && <Form.Label>Email address</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Email address' : ''}
            value={formData.email}
            name="email"
            onChange={(e)=>{handleChange(e)}}
            type="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {hasLabel && <Form.Label>Password</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Password' : ''}
            value={formData.password}
            name="password"
            onChange={(e)=>{handleChange(e)}}
            type="password"
            required
          />
        </Form.Group>

        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <Form.Check type="checkbox" id="rememberMe" className="mb-0">
              <Form.Check.Input
                type="checkbox"
                name="remember"
                value={true}
                checked={formData.remember}
                onChange={e =>
                  setFormData({
                    ...formData,
                    remember: e.target.checked
                  })
                }
              /> Remember me</Form.Check>
          </Col>

          <Col xs="auto">
            <Link
              className="fs--1 mb-0"
              to={`/forgetpassword`}
            >
              Forgot Password?
            </Link>
          </Col>
        </Row>

        <Form.Group>
          {/* <Link to='/Seller/Landing'> */}
            <Button
              type="submit"
              color="primary"
              className="mt-3 w-100"
              disabled={!formData.email || !formData.password}
            >
              Log in
            </Button>
          {/* </Link> */}
          {/* <Link to='/ProjectOwner/Landing'>
            <Button
              type="submit"
              color="primary"
              className="mt-3 w-100"
              disabled={!formData.email || !formData.password}
            >
              Log in
            </Button>
          </Link> */}
        </Form.Group>
        <p className="text-center mt-3 mb-3">Dont Have an Account ? <Link to='/signup'>Create Account</Link></p>
      </Form>
      <Toaster />
    </>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

export default LoginForm;
