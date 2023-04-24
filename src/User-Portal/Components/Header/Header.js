
import classNames from 'classnames';
import React from 'react';
import { Container, Col, Row, Dropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Img/MP-logo.png'
const Header = () => {


    return (
        <>
            <Row className='navbar-standard'>
                <Col lg={2} className='m-2'>
                    <img src={logo} width="135px" />
                </Col>
                <Col lg={3} className='m-2'>
                    <Button className='btn m-2 text-light border border-0 navbar-standard'>Post A Service</Button>
                    <Dropdown className='d-inline m-2' >
                        <Dropdown.Toggle variant="light w-50" id="dropdown-basic">
                            Search
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col lg={5} className='m-2'>
                    <Button className='text-uppercase m-2 text-light  navbar-standard border border-0'>How it works</Button>
                    {' '}
                    <Link to='/loginportal'>
                    <Button className='text-uppercase m-2 text-light  navbar-standard border border-0'>Log in</Button>
                    </Link>
                    {' '}
                    <Link to='/registerportal'>
                        <Button className='text-uppercase m-2 text-light  navbar-standard border border-0'>Register</Button>
                    </Link>
                    {' '}
                    <Button className='text-uppercase m-2 text-light  navbar-standard border border-0'>Freelancer</Button>
                </Col>
            </Row>
        </>
    );
};
export default Header