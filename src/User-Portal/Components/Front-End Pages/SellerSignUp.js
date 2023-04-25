import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';
const SellerRegister = ({ hasLabel }) => {
    // State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phonenumber: '',
        lastName: '',
        idVerification:'',
        isAccepted: false
    });

    // Handler
    const handleSubmit = e => {
        e.preventDefault();
        toast.success(`Successfully registered as ${formData.name}`, {
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
        <div className=' m-5 d-flex justify-content-center'>
            <Card className='w-50'>
                <Card.Body>
                    <h3 className='mb-4'>SignUp as Seller</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            {hasLabel && <Form.Label>Name</Form.Label>}
                            <Form.Control
                                placeholder={!hasLabel ? 'Name' : ''}
                                value={formData.name}
                                name="name"
                                onChange={handleFieldChange}
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            {hasLabel && <Form.Label>Last Name</Form.Label>}
                            <Form.Control
                                placeholder={!hasLabel ? 'Last Name' : ''}
                                value={formData.lastName}
                                name="lastName"
                                onChange={handleFieldChange}
                                type="text"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            {hasLabel && <Form.Label>Email address</Form.Label>}
                            <Form.Control
                                placeholder={!hasLabel ? 'Email address' : ''}
                                value={formData.email}
                                name="email"
                                onChange={handleFieldChange}
                                type="text"
                            />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            {hasLabel && <Form.Label>Phone Number</Form.Label>}
                            <Form.Control
                                placeholder={!hasLabel ? 'Phone Number' : ''}
                                value={formData.phonenumber}
                                name="phonenumber"
                                onChange={handleFieldChange}
                                type="text"
                            />
                        </Form.Group>


                        <Form.Group className="mb-3">
                            {hasLabel && <Form.Label>ID Verification</Form.Label>}
                            <Form.Select
                                placeholder={!hasLabel ? 'ID Verification' : ''}
                                value={formData.idVerification}
                                name="idVerification"
                                onChange={handleFieldChange}
                            />
                        </Form.Group>

                        <Button className='mb-3 btn btn-outline-success text-light'>
                            Upload File
                        </Button>

                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" id="acceptCheckbox" className="form-check">
                                <Form.Check.Input
                                    type="checkbox"
                                    name="isAccepted"
                                    checked={formData.isAccepted}
                                    onChange={e =>
                                        setFormData({
                                            ...formData,
                                            isAccepted: e.target.checked
                                        })
                                    }
                                />I accept the <Link to="#!">MyProject's Terms of Service. </Link> and{' '}
                                <Link to="#!">Privacy Policy.</Link>


                            </Form.Check>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Button
                                className="w-100"
                                type="submit"
                                disabled={
                                    !formData.name ||
                                    !formData.email ||
                                    !formData.phonenumber ||
                                    !formData.lastName ||
                                    !formData.idVerification ||
                                    !formData.isAccepted
                                }
                            >
                                Register
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

SellerRegister.propTypes = {
    hasLabel: PropTypes.bool
};

export default SellerRegister;
