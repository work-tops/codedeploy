import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

const ProjectOwnerRegister = ({ hasLabel }) => {
    // State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
                    <h3 className='mb-4'>SignUp as Project Owner</h3>
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
                            {hasLabel && <Form.Label>Password</Form.Label>}
                            <Form.Control
                                placeholder={!hasLabel ? 'Password' : ''}
                                value={formData.password}
                                name="password"
                                onChange={handleFieldChange}
                                type="password"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            {hasLabel && <Form.Label>Confirm Password</Form.Label>}
                            <Form.Control
                                placeholder={!hasLabel ? 'Confirm Password' : ''}
                                value={formData.confirmPassword}
                                name="confirmPassword"
                                onChange={handleFieldChange}
                                type="password"
                            />
                        </Form.Group>


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
                                    !formData.password ||
                                    !formData.confirmPassword ||
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

ProjectOwnerRegister.propTypes = {
    hasLabel: PropTypes.bool
};

export default ProjectOwnerRegister;
