import { React, useState } from 'react'
import profile_img from "../Projectimages/7.jpg"
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
import { Icon } from '@iconify/react';
import { Col, Container, Row, Card, Button, Form, Dropdown, Modal } from 'react-bootstrap'
import CardDropdown from '../../TemplateAssets/common/CardDropdown';
import { Link } from 'react-router-dom';
import ProposalListsTable from '../../TemplateAssets/AdvanceTables/ProposalListsTable';

function ProposalList() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    // Cancel Modal
    const [showModal2, setShowModal2] = useState(false);

    const handleClose2 = () => {
        setShowModal2(false);
    };
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
                                    <span className='badge me-5 mb-2 p-2 bg-warning'>Progress</span>
                                    <span className='badge me-5 mb-2 p-2 bg-danger'>Expired</span>
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
                                <Link to="/jobdetails/:jobid">
                                    <Button className='border-0 bg-success'>
                                        View Project
                                    </Button>
                                </Link>
                            </div>
                            {/* <Form.Label>Sort By :</Form.Label>
                            <Form.Select className='w-50'>
                                <option>Location</option>
                                <option>Rating</option>
                            </Form.Select> */}
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <ProposalListsTable />
                        </Card.Body>
                    </Card>
                </Col >
            </Row >
            {/*  */}
            <div>

                {/* <Flex justifyContent={between}> */}

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    backdrop="static"
                    dialogClassName="modal-xl modal-90w"

                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header className='bg-light'>
                        <Button onClick={handleClose} className='bg-danger border-0'>Close</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col lg={8}>
                                <Card className='mt-3  me-3'>
                                    <Card.Body>
                                        <Row>
                                            <Col lg={3}>
                                                <Link to="/profile_publicview">
                                                    <img src={profile_img} className="mb-3 rounded-circle" width="100px" height="100px" />
                                                </Link>
                                                <p className="fw-bold ms-2 text-uppercase  text-900">Soanes IT</p>
                                            </Col>
                                            <Col lg={9}>
                                                <Card style={{ border: '1px solid #003f6b' }}>
                                                    <Card.Body>
                                                        <h6 style={{ fontSize: '14px' }} className="text-700 fw-semibold">01 Apr 2023</h6>
                                                        <h5 className="mb-3">New Proposal</h5>
                                                        <p className="text-justify" style={{ fontSize: '14px' }}>
                                                            How are you? Sir / Madam Please send admin access details to website, Bitrix and email host.Also Price £200.00
                                                            your Whatsapp numberWill start nowPromise SIX star service.Please see 210 five star reviews of
                                                            many gigs that we have done in our profile Deposit £200
                                                            Many thanks David Soanes, Worthing BN11 4DT England
                                                        </p>
                                                        <p className="text-justify" style={{ fontSize: '14px' }} >
                                                            <span className="d-block mb-2 fw-semibold">
                                                                Mobile : <span className="text-primary">07900 548 590</span>
                                                            </span>
                                                            <span className="d-block mb-2 fw-semibold">
                                                                WhatsApp : <span className="text-primary">044 07900 548 590</span>
                                                            </span>
                                                            <span className="d-block mb-2 fw-semibold">
                                                                Email : <span className="text-primary">info@alwebdezine.com</span>
                                                            </span>
                                                            <span className="d-block mb-2 fw-semibold">
                                                                Skype : <span className="text-primary">info@alwebdezine.com</span>
                                                            </span>
                                                            <span className="d-block mb-3 fw-semibold">
                                                                Web : <span className="text-primary">alwebdezine.com</span>
                                                            </span>
                                                            Please see my cv at this link <a href="#">https://surl.link/q0Lck3 https://surl.link/accessRestricted.html?</a> Decline
                                                            u=34452 password is abcdFor screen sharing:------------------Windows: Please search and open Quick
                                                            Assist App and | will send you the codeApple Mac: | will send you a Zoom link. Please send your
                                                            €MAl AAAESS. ~-mmmemmroem oo
                                                            <h6 className="mt-3 mb-3">TEAM</h6>
                                                            Our team of five experts consists of graphic artists, Office 365, IT Support, Wordpress and online
                                                            marketing consultantsREFEREESReferees for email migration ( Please contact by email only )Mr
                                                            Mark Bowen mark@supportedlivinggateway.comMr Colin McGregor colin@tranquilico.comMiss
                                                            Tracie Mckenna tracie.mckenna@1stresponse.org.uk
                                                        </p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={4}>
                                <Card className='mt-3 me-3'>
                                    <Card.Body>
                                        <p className='text-end'>Fixed Price</p>
                                        <p className='fw-semibold'>Details</p>
                                        <div className='d-flex justify-content-between'>
                                            <p>Deposit</p>
                                            <p className='text-success'>£ 200</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <p>Proposal ID</p>
                                            <p className='text-warning'>243623456</p>
                                        </div>
                                        <p role='button' className='fw-semibold text-900'><Icon style={{ marginTop: '-5px' }} icon="flat-color-icons:like" className='me-2' width="20" height="20" />Mark as Favourite</p>
                                        <div className='mt-3 d-flex justify-content-between'>
                                            <Dropdown>
                                                <Dropdown.Toggle style={{ background: '#003f6b', fontSize: '14px' }} id="dropdown-basic">
                                                    Reply
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item as={Link} to="/proposaldetails" className="text-success">Accept</Dropdown.Item>
                                                    {/* <Dropdown.Item as={Link} to="/proposallist"  className="text-danger">Decline</Dropdown.Item> */}
                                                </Dropdown.Menu>

                                            </Dropdown>
                                            <p role='button' onClick={handleShow1} className='mt-1 ms-3'>Report this Profile</p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>

            </div>
            {/* </Flex> */}
            <Modal
                show={show1}
                onHide={() => setShow1(false)}
                backdrop="static"
                dialogClassName="modal-md modal-90w"
                centered
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <h5 className='text-uppercase mb-3 text-center'>Report Soanes IT</h5>
                    <h6 style={{ fontSize: '16px' }} className='text-900 mb-3 mt-3'>Why You are reporting to this profile</h6>
                    {/*  */}
                    <Form>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className="d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Contact Details are Revealed
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Suggestion to make payment outside PPH
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Promoting Self
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className="d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Offensive Content
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Spam Content
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Others
                            </Form.Check.Label>
                        </Form.Check>
                        {/*  */}
                        <Form.Group className='mt-3 mb-3'>
                            <Form.Label>
                                Details :
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                            />
                        </Form.Group>
                        <div className='d-flex justify-content-end'>
                            <Button onClick={handleClose1} style={{ background: '#003f6b' }}>Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

        </Container >


    )
}
export default ProposalList


