
import React from 'react';
import { Container, Col, Row, Dropdown, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../TemplateAssets/Images/MP-logo.png'
const Header = () => {
    return (
        <>
            <Row className='navbar-standard'>
                <Col lg={2} className='m-2'>
                    <img src={logo} width="135px" />
                </Col>
                <Col lg={3} className='m-2'>
                    <Form.Group>
                        <Form.Control
                            placeholder='Search'
                            className='w-75 ms-5 mt-2' type='serach' />
                    </Form.Group>
                </Col>
                <Col lg={2} className='m-2'>
                    <Link to='/postjob1'>
                        <Button className="btn ms-5 bg-white mt-2 text-dark">Post A Project</Button>
                    </Link>
                </Col>
                <Col lg={4} className='m-2'>
                    <div className='d-flex justify-content-end'>
                    <Link to='/how-it-works'>
                        <Button style={{fontSize:'13px'}} className='text-uppercase m-2 text-light  navbar-standard border border-0'>How it works</Button>
                    </Link>
                    {' '}
                    <Link to='/userlog'>
                        <Button style={{fontSize:'13px'}} className='text-uppercase m-2 text-light  navbar-standard border border-0'>Log in</Button>
                    </Link>
                    {' '}
                    <Link to='/signup'>
                        <Button style={{fontSize:'13px'}} className='text-uppercase m-2 text-light  navbar-standard border border-0'>Register</Button>
                    </Link>
                    {' '}
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default Header