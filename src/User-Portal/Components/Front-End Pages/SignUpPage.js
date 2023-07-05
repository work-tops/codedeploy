import React from "react";
import { Card, Col, Row, Button, Form, Container } from 'react-bootstrap';
import logo from '../../Components/Projectimages/My Project white logo-01.png'
import worktops from '../../Components/Projectimages/Floor.jpg'
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createData } from "../../../Services/ProxyService";
import toast from 'react-hot-toast';
import SocialAuthButtons from "../../TemplateAssets/authentication/SocialAuthButtons";
import Footer from "../Footer/Footer";
import { Divider } from '@mui/material';
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { Icon } from "@iconify/react";

function SignUpPage(hasLabel) {
    const [toggleForm, setToggleForm] = useState(2);
    
    let history = useHistory();

    const toggleCard = async (id) => {
        setToggleForm(id);
    }
    const registerUser = async () => {
        const userObject = {
            name: form.first_name + " " + form.last_name,
            first_name: form.first_name,
            last_name: form.last_name,
            email: form.email,
            phone: form.phone,
            password: form.password,
            confirm_password: form.password,
            role: "Owner",
            terms_and_condition: true,
            is_active: true,
            is_approved: true,
            created_by: "1",
        }
        console.log('add user', userObject);
        const response = await createData("register", userObject)
        if (response.status === 201) {
            toast.success('Successfully Registered')
            setForm({});
            // clearForm();
            history.push('/Project-owner/login');
        } else {
            toast.error('Something went wrong')
        }
        console.log(response);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        registerUser();
    }
    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setForm(myData)
    }

    useEffect(() => {
        console.log('loop')
    }, [])

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [form, setForm] = useState({ password: '' });

    

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            <Row className=" min-vh-100 bg-100">
                <Col lg={12} className="mb-6">
                    <NavbarStandard />
                </Col>
                <Col lg={7} className="d-none d-lg-block position-relative">
                    <div className="bg-holder" style={{ backgroundImage: `url(${worktops})` }}>
                    </div>
                </Col>
                <Col lg={5} className="px-sm-0 align-self-center mx-auto">
                    <Row className="g-0 justify-content-center">
                        <Col className="col-xxl-8">
                            <Container>
                                <Card className='mt-3 mb-3'>
                                    <Card.Header style={{ background: '#003f6b' }} className="text-center p-2">
                                        <Link to="/"><img src={logo} width="135px" /></Link>
                                    </Card.Header>
                                    <Card.Body className="">
                                        {toggleForm == 1 &&
                                            <div>
                                                <>
                                                    <div className="d-flex justify-content-between">
                                                        <Button style={{ background: '#fff', color: '#003f6b', border: '1px solid #003f6b' }} onClick={() => { toggleCard(3) }} className="text-uppercase m-2">Freelancer Sign Up</Button>
                                                        <Button style={{ background: '#fff', color: '#003f6b', border: '1px solid #003f6b' }} onClick={() => { toggleCard(2) }} className="text-uppercase m-2">PROJECT OWNER SIGNUP</Button>
                                                    </div>
                                                    <hr></hr>
                                                    <SocialAuthButtons />
                                                </>
                                            </div>
                                        }
                                        {toggleForm == 2 &&
                                            <Form onSubmit={(e) => { formSubmit(e) }}>
                                                <h4 className="text-capitalize">Project Owner SignUp </h4>
                                                <div>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">First Name<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Control
                                                            type="text"
                                                            required name="first_name"
                                                            value={form.first_name}
                                                            onChange={(e) => { handleChange(e) }}
                                                            id="fname"
                                                            placeholder="First Name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">Last Name<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Control
                                                            type="text"
                                                            required name="last_name"
                                                            value={form.last_name}
                                                            onChange={(e) => { handleChange(e) }}
                                                            id="lname"
                                                            placeholder="Last Name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">Email Address<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Control
                                                            type="email"
                                                            required
                                                            name="email"
                                                            value={form.email}
                                                            onChange={(e) => { handleChange(e) }}
                                                            id="email"
                                                            placeholder={'Email address'}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-700">Password<span className="text-danger">*</span></Form.Label>
                                                        <div className="position-relative">
                                                            <Form.Control
                                                                type={passwordVisible ? 'text' : 'password'}
                                                                required
                                                                name="password"
                                                                value={form.password}
                                                                onChange={handleChange}
                                                                id="password"
                                                                placeholder="Password"
                                                            />
                                                            {form.password && (
                                                                <Icon
                                                                    className="position-absolute me-2 cursor-pointerw end-0 top-50 translate-middle-y"
                                                                    icon="mdi:eye"
                                                                    color="gray"
                                                                    width="24"
                                                                    height="24"
                                                                    onClick={togglePasswordVisibility}
                                                                />
                                                            )}
                                                        </div>
                                                    </Form.Group>

                                                    <Col xs="auto">
                                                        <Form.Group className="mb-3">
                                                            <Form.Check type="checkbox" className="mb-0 mt-3">
                                                                <Form.Check.Input type="checkbox" />
                                                                <Form.Check.Label
                                                                    className="text-900 d-inline"
                                                                >
                                                                     By signing up you accept MAI's <Link to="/termsofuse">Terms and Conditions</Link>.
                                                                </Form.Check.Label>
                                                            </Form.Check>
                                                        </Form.Group>
                                                    </Col>


                                                    {/* <div className="d-flex justify-content-between"> */}
                                                    <Button
                                                        style={{ background: '#003f6b' }}
                                                        className="border-0 w-100 d-block m-2 text-uppercase"
                                                        type="submit"
                                                        id="sign-up"
                                                    >
                                                        Sign Up
                                                    </Button>
                                                    <p className="text-center fs--1 text-900 mt-3 mb-3">Already Have an Account ? <Link to='/Project-owner/login'>Login</Link></p>
                                                    {/* Social Buttons*/}
                                                    <Divider>Or Register With</Divider>
                                                    <SocialAuthButtons />
                                                </div>
                                            </Form >
                                        }
                                        {toggleForm == 3 &&

                                            <Form onSubmit={(e) => { formSubmit(e) }}>
                                                <h6 className="text-justify text-uppercase">Freelancer Sign Up :</h6>
                                                <div>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">First Name<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Control
                                                            type="text"
                                                            autoComplete="off"
                                                            required
                                                            name="first_name"
                                                            value={form.first_name}
                                                            onChange={(e) => { handleChange(e) }}
                                                            id="trd-ip-bx"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">Last Name<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Control
                                                            autoComplete="off"
                                                            required
                                                            name="last_name"
                                                            value={form.last_name}
                                                            onChange={(e) => { handleChange(e) }}
                                                            type="text"
                                                            id="trd-ip-bx"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">Email address<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Control
                                                            autoComplete="off"
                                                            required
                                                            name="email"
                                                            value={form.email}
                                                            onChange={(e) => { handleChange(e) }}
                                                            type="email"
                                                            id="trd-ip-bx"
                                                            placeholder="Email address"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">Phone Number<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Control
                                                            autoComplete="off"
                                                            required
                                                            name="phone"
                                                            value={form.phone}
                                                            onChange={(e) => { handleChange(e) }}
                                                            type="text"
                                                            id="trd-ip-bx"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        {hasLabel && <Form.Label className="text-700">ID Verification<span className="text-danger">*</span></Form.Label>}
                                                        <Form.Select>
                                                            <option value="Driving License">Driving License</option>
                                                            <option value="Passport">Passport</option>
                                                            <option value="Bio Metric">Bio Metric</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Button
                                                            className="d-block upd-fil"
                                                        >
                                                            Upload File
                                                        </Button>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Check
                                                            className="me-1"
                                                        />
                                                        <Form.Check.Label className=" text-700" style={{ fontSize: '14px', verticalAlign: 'middle' }}>
                                                            I'd like to receive MyProject News, Advice & Tip
                                                        </Form.Check.Label>
                                                        <Form.Check
                                                            className=""
                                                        />
                                                        <Form.Check.Label className=" text-700" style={{ fontSize: '14px', verticalAlign: 'middle' }}>
                                                            I agree to the MyProject terms & conditions, the Quote Tool terms &
                                                            conditions and the data sharing agreement
                                                        </Form.Check.Label>
                                                    </Form.Group>

                                                    <div className="d-flex justify-content-between">
                                                        <Link to='/seller'>
                                                            <Button
                                                                style={{ background: '#003f6b' }}
                                                                className="border-0 d-block m-2 text-uppercase"
                                                                type="submit"
                                                                id="sign-up"
                                                            >
                                                                Sign Up
                                                            </Button>
                                                        </Link>
                                                        {/* <p className="text-center fw-semibold text-900 mt-3 mb-3">Already Have an Account ? <Link to='/owner'>Login</Link></p> */}
                                                        {/* <Button
                                                            style={{ background: '#df2020' }}
                                                            className="border-0 d-block m-2 text-uppercase"
                                                            onClick={() => { toggleCard(1) }}
                                                            type="button"
                                                            id="back"
                                                        >
                                                            Back
                                                        </Button> */}
                                                    </div>
                                                </div>
                                            </Form>
                                        }
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12} >
                    <Footer />
                </Col>
            </Row>

        </>
    )
}
export default SignUpPage;
