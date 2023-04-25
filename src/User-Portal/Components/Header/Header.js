import React from 'react';
import { Container, Col, Row, Dropdown, Button,Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Img/MP-logo.png'
const Header = () => {


    return (
        <>
            <Row className='navbar-standard'>
                <Col lg={2} className='m-2'>
                    <img src={logo} width="135px" />
                </Col>
                <Col lg={5} className='m-2'>
                    <Form.Group>
                        <Form.Control 
                        placeholder='Search'
                        className='w-75 ms-2 mt-2' type='serach'/>
                    </Form.Group>
                </Col>
                <Col lg={4} className='m-2'>
                    <Link to='/how-it-works'>
                        <Button className='text-uppercase m-2 text-light  navbar-standard border border-0'>How it works</Button>
                    </Link>
                    {' '}
                    <Link to='/userlog'>
                        <Button className='text-uppercase m-2 text-light  navbar-standard border border-0'>Log in</Button>
                    </Link>
                    {' '}
                    <Link to='/signup'>
                        <Button className='text-uppercase m-2 text-light  navbar-standard border border-0'>Register</Button>
                    </Link>
                    {' '}
                </Col>
            </Row>
        </>
    );
};
export default Header