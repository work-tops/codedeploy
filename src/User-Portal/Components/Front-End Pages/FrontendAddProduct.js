import { useState, React } from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Menubar from '../Menubar/Menubar';
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
// import SellerPortalHeader from '../Header/SellerPortalHeader'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const FrontendAddProduct = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Row>
                <Col lg={12}>
                    <NavbarStandard/>
                    {/* < SellerPortalHeader /> */}
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>

                    <Card className=''>
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <h4 className='mt-2'>Add Product</h4>
                                    <Breadcrumb>
                                        <Breadcrumb.Item>Duplicate</Breadcrumb.Item>
                                        <Breadcrumb.Item>Preview</Breadcrumb.Item>
                                    </Breadcrumb>
                                </div>
                                <div>
                                    {''}
                                    <Link to="/editproduct">
                                        <Button className='me-3 btn btn-warning d-block w-100'>Save as Draft</Button>
                                    </Link>
                                    {''}
                                </div>
                            </div>
                            <Container>
                                <Row>
                                    <Col lg={7}>
                                        <Card className='mt-3 me-3'>
                                            <Card.Body>
                                                <h5 className='mb-3'>Product Information</h5>
                                                <Form>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control type="text" className='w-100' />
                                                    </Form.Group>
                                                    <Row className="mb-3 g-3">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Description <span className='text-grey'>(Optional)</span></Form.Label>
                                                            <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                        <Card className='mt-3 me-3'>
                                            <Card.Body>
                                                <h5 className='mb-3'>Organization</h5>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Seller Email</Form.Label>
                                                    <Form.Control type="text" className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>Category</Form.Label>
                                                    <Form.Select>
                                                        <option>Marble</option>
                                                        <option>Tiles</option>
                                                        <option>Quartz</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                        <Button onClick={handleShow} className='m-3 bg-transparent text-primary'>+ Add Variant</Button>
                                        <Row>
                                            <Col>
                                                <Link to='/addproductcard'>
                                                    <Button className='mt-3  btn text-light bg-success border-0'>Add Product</Button>
                                                </Link>
                                                <Link to="/addproductcard">
                                                    <Button className='mt-3  btn text-light border-0 ms-5 bg-danger '>Cancel</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <div>

                                            {/* <Flex justifyContent={between}> */}
                                            <div className='d-flex justify-content-between'>
                                                <Modal
                                                    show={show}
                                                    onHide={() => setShow(false)}
                                                    dialogClassName="modal-xl modal-90w"

                                                    aria-labelledby="example-custom-modal-styling-title"
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title id="example-custom-modal-styling-title">
                                                            Variant Details</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <Row>
                                                            <Col lg={6}>
                                                                <Card className='mt-3  me-3'>
                                                                    <Card.Body>
                                                                        <div className='d-flex justify-content-between'>
                                                                            <h5 className='mb-3'>Variants</h5>

                                                                        </div>
                                                                        <h6 className='mt-3 mb-3'>OPTIONS</h6>
                                                                        <Row className="mb-3 g-3">
                                                                            <Form.Group as={Col} className='mb-3'>

                                                                                <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} className='mb-3'>
                                                                                <Form.Control type="text" placeholder='Enter tags' className='w-100' />
                                                                            </Form.Group>
                                                                        </Row>
                                                                        <Row className="mb-3 g-3">
                                                                            <Form.Group as={Col} className='mb-3'>

                                                                                <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} className='mb-3'>
                                                                                <Form.Control type="text" placeholder='Enter tags' className='w-100' />
                                                                            </Form.Group>
                                                                        </Row>
                                                                        <Row className="mb-3 g-3">
                                                                            <Form.Group as={Col} className='mb-3'>

                                                                                <Form.Select className='w-75'>
                                                                                    <option>Size</option>
                                                                                    <option>Colour</option>
                                                                                    <option>Material</option>
                                                                                    <option>Style</option>
                                                                                </Form.Select>
                                                                            </Form.Group>
                                                                            <Form.Group as={Col} className='mb-3'>
                                                                                <Form.Control type="text" placeholder='Enter tags' className='w-100' />
                                                                            </Form.Group>
                                                                        </Row>
                                                                        <Button className='bg-transparent text-primary'>+ Add Option</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                            <Col lg={5}>
                                                                <Card className='mt-3 me-3'>
                                                                    <Card.Body>
                                                                        <h5 className='mb-3'>Pricing</h5>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>Pricing</Form.Label>
                                                                            <InputGroup className="mb-3">
                                                                                <FormControl placeholder='0.00' type="number" aria-label="Text input with dropdown button" />

                                                                                <DropdownButton
                                                                                    variant="outline-secondary"
                                                                                    title="lb"
                                                                                    id="input-group-dropdown-2"
                                                                                    align="end"
                                                                                >
                                                                                    <Dropdown.Item href="#">lb</Dropdown.Item>
                                                                                </DropdownButton>
                                                                            </InputGroup>
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>Compare Price</Form.Label>
                                                                            <Form.Control type="number" className='w-100' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>Handling Charges</Form.Label>
                                                                            <Form.Control type="number" className='w-100' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>Sales Price</Form.Label>
                                                                            <Form.Control type="number" className='w-100' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Row>

                                                                                <Col lg={5}>
                                                                                    <Form.Check />
                                                                                    <Form.Label>
                                                                                        Shipping Requires
                                                                                    </Form.Label>
                                                                                </Col>
                                                                                <Col lg={6}>
                                                                                    <Form.Check />
                                                                                    <Form.Label>
                                                                                        Charge Taxes on this product
                                                                                    </Form.Label>
                                                                                </Col>
                                                                            </Row>
                                                                        </Form.Group>
                                                                    </Card.Body>
                                                                </Card>
                                                                <Card className='mt-3 me-3'>
                                                                    <Card.Body>
                                                                        <h5 className='mb-3'>Inventory</h5>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>SKU</Form.Label>
                                                                            <Form.Control className='w-100' type="text" placeholder='eg.324812302' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>Barcode</Form.Label>
                                                                            <Form.Control
                                                                                className='w-100'
                                                                                type="text"
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>Minimum Purchase Quantity</Form.Label>
                                                                            <Form.Control type="number" className='w-100' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label>Quantity</Form.Label>
                                                                            <Form.Control type="number" className='w-100' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Check />
                                                                            <Form.Label>
                                                                                Track this Product Inventory
                                                                            </Form.Label>
                                                                        </Form.Group>

                                                                        <Button className='btn bg-success border border-0 m-3'>Submit</Button>

                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Modal.Body>
                                                </Modal>

                                            </div>
                                            {/* </Flex> */}
                                        </div>
                                    </Col>
                                    <Col lg={5}>

                                        <Card className='mt-3'>
                                            <Card.Body>
                                                {/* <Flex justifyContent={between}> */}
                                                <h5 className='mb-3'>Media</h5>
                                                {/* <div className='d-flex justify-content-between'>
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
                                                            
                                                        </div> */}
                                                {/* </Flex> */}
                                                <div className='mt-3 border-secondary w-100'>
                                                    <small className='d-block text-align-center'>
                                                        Drag and Drop
                                                        Your Files Here
                                                    </small>
                                                    <Button className='mt-3 btn text-light btn-outline-secondary'>Browse Files</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>

                                        <Card className='mt-3'>
                                            <Card.Body>
                                                <h5 className='mb-3'>Product Handle and Metafields</h5>
                                                <Form.Group className='mb-4'>
                                                    <Form.Label>
                                                        Product handle
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <h5 className='mb-3'>Product Metafields</h5>
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
                                        <Card className='mt-3'>

                                            <Card.Body>
                                                <h5 className='mb-3'>Product Tag</h5>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Category
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Colour
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Finish Type
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Length
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Width
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Thickness
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Pattern
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Stock Location
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Origin
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label>
                                                        Offers
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body >
                    </Card>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default FrontendAddProduct;