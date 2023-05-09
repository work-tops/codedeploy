import React from 'react'
import profile_img from "../Project images/7.jpg"
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
import { Icon } from '@iconify/react';
import { Col, Container, Row, Card, Button, Form, Dropdown } from 'react-bootstrap'
import CardDropdown from '../../TemplateAssets/common/CardDropdown';
import { Link } from 'react-router-dom';

function ProposalList() {
    return (
        <Container>
            <Row>
                <Col lg={12} className='mb-5'>
                    <NavbarStandard />
                </Col>
                <Col lg={12} className='mt-4'>
                    <Card className='mb-3 mt-4'>
                        <Card.Header className='bg-light'>
                            <h5 className='text-uppercase'>
                                Proposal List
                            </h5>
                        </Card.Header>
                        <Card.Body>
                            <div className='mb-3 d-flex justify-content-between'>
                                <h5 className='text-capitalize'>
                                    New Kitchen Worktops with Island
                                </h5>
                                <div className='text-uppercase'>
                                    <span className='badge me-5 mb-2 p-2 bg-primary'>open</span>
                                    <span className='fw-semibold' style={{ fontSize: '13px' }}>Job Id:1234567</span>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                    <Card className='mb-3'>
                        <Card.Body>
                            <div className='mb-3 d-flex justify-content-between'>
                                <h5 className='text-capitalize'>
                                    Budget : £ 3000
                                </h5>
                                <Button className='border-0 bg-success'>
                                    View Project
                                </Button>
                            </div>
                            <Form.Label>Sort By :</Form.Label>
                            <Form.Select className='w-50'>
                                <option>Location</option>
                                <option>Rating</option>
                            </Form.Select>
                        </Card.Body>
                    </Card>
                    <Card className='mb-3'>
                        <Card.Body>
                            <Row className='justify-content-around'>
                                <Col lg={7} className='mb-3'>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col lg={4} className='mb-3'>
                                                    <img src={profile_img} className="mb-3 rounded-circle" width="100px" height="100px" />
                                                    <h5 className="fw-bold mb-3">IRIE ARTS INC</h5>
                                                    <p className="text-900 fw-semibold mb-3" style={{ fontSize: '14px' }}>Fabricator , Kitchen Designer</p>
                                                    <p className="text-900 fw-semibold mb-3" style={{ fontSize: '14px' }}><Icon style={{ marginTop: '-5px' }} icon="ic:round-star-rate" c color="#fe9e0f" width="24" height="24" /> 4.5/5 (116)</p>
                                                </Col>
                                                <Col lg={8} className="mb-3 text-900 text-justify" style={{ fontSize: '14px' }}>
                                                    Greetings,i can rank your website high on google top result pages.i can
                                                    help your site dominate your top competitors with thousands of niche
                                                    related backlinks and country trageted visitors from google organic searches
                                                    1. Increase website domain authority to 60+ and higher
                                                    Greetings,i can rank your website high on google top result pages.i can
                                                    help your site dominate your top competitors with thousands of niche
                                                    related backlinks and country trageted visitors from google organic searches
                                                    1. Increase website domain authority to 60+ and higher
                                                    Greetings,i can rank your website high on google top result pages.i can
                                                    help your site dominate your top competitors with thousands of niche
                                                    related backlinks and country trageted visitors from google organic searches
                                                    1. Increase website domain authority to 60+ and higher
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={5} className=''>
                                    <Card>
                                        <Card.Header>
                                            <div className="position-absolute top-0 end-0 m-3">
                                                <CardDropdown iconClassName="fs--1" drop="bottom">
                                                    <div className="py-2">
                                                        <Dropdown.Item as={Link} to="/proposalDetails" className="text-success">
                                                            Accept
                                                        </Dropdown.Item>
                                                        <Dropdown.Item as={Link} to="/proposalDetails"  className="text-primary">
                                                            Reply
                                                        </Dropdown.Item>
                                                        <Dropdown.Item  disabled className="text-danger">
                                                            Decline
                                                        </Dropdown.Item>
                                                    </div>
                                                </CardDropdown>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <div >
                                                <p className="me-2 fw-semibold text-900" >Experience : <span className='text-justify' style={{ fontSize: '14px' }}>4 Years</span></p>

                                            </div>
                                            <div >
                                                <p className="me-2 fw-semibold text-900" >Duration : <span className='text-justify' style={{ fontSize: '14px' }}>3 Months</span></p>

                                            </div>
                                            <div >
                                                <p className="me-2 fw-semibold text-900" >Budget : <span className='text-justify' style={{ fontSize: '14px' }}>£ 2300</span></p>

                                            </div>
                                            <div >
                                                <p className="me-2 fw-semibold text-900" >Date : <span className='text-justify' style={{ fontSize: '14px' }}>01/04/2023</span></p>

                                            </div>
                                            <Button className='w-100' style={{ background: '#003f6b' }}>View</Button>
                                        </Card.Body>
                                    </Card >
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col >
            </Row >
        </Container >
    )
}
export default ProposalList

