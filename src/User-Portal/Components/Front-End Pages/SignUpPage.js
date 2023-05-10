import React from "react";
import { Card, Col, Row, Button,Form } from 'react-bootstrap';
import logo from '../../TemplateAssets/Images/MP-logo.png'
import worktops from '../../Components/Project images/Flooring.jpg'
import  { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createData } from "../../../Services/ProxyService";
import toast from 'react-hot-toast';
// import Divider from "../../TemplateAssets/common/Divider";
import SocialAuthButtons from "../../TemplateAssets/authentication/SocialAuthButtons";


function SignUpPage(hasLabel) {
    const [toggleForm, setToggleForm] = useState(2);
    const [form, setForm] = useState({})
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
            history.push('/owner');
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
    return (
        <>
          
            <Row className=" min-vh-100 bg-100">
                <Col xs={6} className="d-none d-lg-block position-relative">
                <div className="bg-holder" style={{ backgroundImage: `url(${worktops})`}}>
                </div>
                </Col>
                <Col sm={10} md={6} className="px-sm-0 align-self-center mx-auto">
                    <Row className="g-0 justify-content-center">
                        <Col lg={9} xl={8} className="col-xxl-8">
                            <Card className='shadow ms-3 mt-2'>
                                <Card.Header style={{ background: '#003f6b' }} className="text-center p-2">
                                    <Link to="/"><img src={logo} width="135px" /></Link>
                                </Card.Header>
                                <Card.Body className="p-4">
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
                                            <h6 className="text-justify text-uppercase">Project Owner Sign Up :</h6>
                                            <div>
                                                <Form.Group className="mb-3">
                                                    {hasLabel && <Form.Label className="text-700">First Name</Form.Label>}
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
                                                    {hasLabel && <Form.Label className="text-700">Last Name</Form.Label>}
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
                                                    {hasLabel && <Form.Label className="text-700">Email address</Form.Label>}
                                                    <Form.Control
                                                        type="email"
                                                        required
                                                        name="email"
                                                        value={form.email}
                                                        onChange={(e) => { handleChange(e) }}
                                                        id="email"
                                                        placeholder={!hasLabel ? 'Email address' : ''}
                                                    />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                    {hasLabel && <Form.Label className="text-700">Password</Form.Label>}
                                                    <Form.Control
                                                        type="password"
                                                        required
                                                        name="password"
                                                        value={form.password}
                                                        onChange={(e) => { handleChange(e) }}
                                                        id="password"
                                                        placeholder={!hasLabel ? 'Password' : ''}
                                                    />
                                                </Form.Group>

                                                <Col xs="auto">
                                                    <Form.Group className="mb-3">
                                                        <Form.Check type="checkbox" className="mb-0 mt-3">
                                                            <Form.Check.Input type="checkbox" />
                                                            <Form.Check.Label
                                                                className="fw-semibold d-inline"
                                                                style={{ fontSize: '14px' }}
                                                            >
                                                                By Signing up you accept MyProject's Terms of Service.
                                                                I have read and understood MyProject's Privacy Policy.
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </Form.Group>
                                                </Col>


                                                <div className="d-flex justify-content-between">
                                                    <Button
                                                        style={{ background: '#003f6b' }}
                                                        className="border-0 d-block m-2 text-uppercase"
                                                        type="submit"
                                                        id="sign-up"
                                                    >
                                                        Sign Up
                                                    </Button>

                                                    <Link to="/owner"> <Button
                                                        style={{ background: '#df2020' }}
                                                        className="border-0 d-block m-2 text-uppercase"
                                                        id="back">
                                                        Back
                                                    </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Form >
                                    }
                                    {toggleForm == 3 &&

                                        <Form onSubmit={(e) => { formSubmit(e) }}>
                                            <h6 className="text-justify text-uppercase">Freelancer Sign Up :</h6>
                                            <div>
                                                <Form.Group className="mb-3">
                                                    {hasLabel && <Form.Label className="text-700">First Name</Form.Label>}
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
                                                    {hasLabel && <Form.Label className="text-700">Last Name</Form.Label>}
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
                                                    {hasLabel && <Form.Label className="text-700">Email address</Form.Label>}
                                                    <Form.Control
                                                        autoComplete="off"
                                                        required
                                                        name="email"
                                                        value={form.email}
                                                        onChange={(e) => { handleChange(e) }}
                                                        type="email"
                                                        id="trd-ip-bx"
                                                        placeholder={!hasLabel ? 'Email address' : ''}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    {hasLabel && <Form.Label className="text-700">Phone Number</Form.Label>}
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
                                                    {hasLabel && <Form.Label className="text-700">ID Verification</Form.Label>}
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

                                                    <Button
                                                        style={{ background: '#df2020' }}
                                                        className="border-0 d-block m-2 text-uppercase"
                                                        onClick={() => { toggleCard(1) }}
                                                        type="button"
                                                        id="back"
                                                    >
                                                        Back
                                                    </Button>
                                                </div>
                                            </div>
                                        </Form>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}
export default SignUpPage;
