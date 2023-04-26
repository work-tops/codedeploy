import { React, useState } from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Dropdown, DropdownButton, Modal } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import Menubar from '../Menubar/Menubar';
import SellerPortalHeader from '../Header/SellerPortalHeader';
import { Link } from 'react-router-dom';


const FrontendAddService = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row>
                <Col lg={12}>
                    <SellerPortalHeader/>
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>

                    <Card className='m-1'>
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='mt-2'>Add Services</h4>
                                    <Breadcrumb>
                                        <Breadcrumb.Item>Duplicate</Breadcrumb.Item>
                                        <Breadcrumb.Item>Preview</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                                <div>
                                    <Form.Group>
                                        <Form.Group as={Col} className='mb-3'>
                                            <Form.Label>Status</Form.Label>
                                            <Form.Select>
                                                <option>Draft</option>
                                                <option>Active</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Form.Group>
                                </div>
                            </div>
                            <Container>
                                <Row>
                                    <Col lg={7}>
                                        <Card className='mt-3 me-3'>
                                            <Card.Body>
                                                <h5 className='mb-3'>Add Services</h5>
                                                <Form>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Service Title</Form.Label>
                                                        <Form.Control type="text" className='w-100' />
                                                    </Form.Group>
                                                    <Row className='g-3 mb-3'>
                                                        <Form.Group as={Col} className='mb-3'>
                                                            <Form.Label>Service Category</Form.Label>
                                                            <Form.Select>
                                                                <option>Select Option</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group as={Col} className='ms-2 mb-3'>
                                                            <Form.Label>Service Email</Form.Label>
                                                            <Form.Select>
                                                                <option>Select Option</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Row>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Description <span className='text-grey'>(Optional)</span></Form.Label>
                                                        <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                                                    </Form.Group>
                                                    <Row className='g-3 mb-3'>
                                                        <Form.Group as={Col} className='mb-3'>
                                                            <Form.Label>Service Category</Form.Label>
                                                            <Multiselect className='border border-dark rounded' />
                                                        </Form.Group>
                                                        <Form.Group as={Col} className='ms-2 mb-3'>
                                                            <Form.Label>Service Location
                                                            </Form.Label>
                                                            <Multiselect className='border border-dark rounded' />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className='mb-3'>
                                                        <Col>
                                                            <Form.Check type="checkbox" className="mb-0">
                                                                <Form.Check.Input
                                                                    type="checkbox"
                                                                /> Shipping Requires
                                                            </Form.Check>
                                                        </Col>
                                                        <Col>
                                                            <Form.Check type="checkbox" className="mb-0">
                                                                <Form.Check.Input
                                                                    type="checkbox"
                                                                /> Charge Taxes on this product
                                                            </Form.Check>
                                                        </Col>

                                                    </Row>
                                                    <Row className='g-3 mb-3'>
                                                        <Form.Group as={Col} className='mb-3'>
                                                            <Form.Label>Price Type</Form.Label>
                                                            <Form.Select>
                                                                <option>Select Option</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Form.Group as={Col} className='ms-2 mb-3'>
                                                            <Form.Label>Price</Form.Label>
                                                            <Form.Control type="text" />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className='g-3 mb-3'>
                                                        <Form.Group as={Col} className='ms-2 mb-3'>
                                                            <Form.Label>Offer Price </Form.Label>
                                                            <Form.Control type="text" />
                                                        </Form.Group>
                                                        <Form.Group as={Col} className='ms-2 mb-3'>
                                                            <Form.Label>Display Price</Form.Label>
                                                            <Form.Control type="text" />
                                                        </Form.Group>
                                                    </Row>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Terms & Conditions</Form.Label>
                                                        <Form.Control as="textarea" placeholder='' rows={8} />
                                                    </Form.Group>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card className='mt-3 me-3'>
                                            <Card.Body>
                                                {/* <Flex justifyContent={between}> */}
                                                <div className='d-flex justify-content-between'>
                                                    <h5 className='mb-3'>Media</h5>
                                                    <Button variant="primary" onClick={handleShow}>
                                                        Add Media from URL
                                                    </Button>

                                                    <Modal show={show} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Enter or Paste the URL</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Form.Control type='text' className='w-100 mb-3' />
                                                            <Button className='btn btn-outline-success text-light'>Submit</Button>
                                                        </Modal.Body>
                                                    </Modal>

                                                </div>
                                                {/* </Flex> */}
                                                <div className='mt-3 border-secondary w-100'>
                                                    <small className='d-block text-align-center w-100'>
                                                        Drag and Drop
                                                        Your Files Here

                                                    </small>
                                                    <div className='d-flex justify-content-between'>
                                                        <Button className='mt-3 btn text-light btn-outline-secondary'>Browse Files</Button>
                                                        <Button className='mt-3 ms-5  btn text-light btn-outline-success'>Upload Images</Button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className='mt-3 me-3'>
                                            <Card.Body>
                                                <h5 className='mb-3'>Service Handle and Metafields</h5>
                                                <Form.Group className='mb-4'>
                                                    <Form.Label>
                                                        Service handle
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <h5 className='mb-3'>Service Metafields</h5>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Title Tag Meta Field
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Description Tag Meta Field
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7}>
                                        <Link to='/Seller/Landing'>
                                        <Button className='mt-3  btn text-light bg-success btn-outline-success'>Add Services</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body >
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default FrontendAddService;