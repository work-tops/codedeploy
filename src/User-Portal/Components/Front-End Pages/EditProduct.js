import { React, useState } from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb, Form, Modal } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ActionButton from '../common/ActionButton'
import { Table } from 'react-bootstrap';
import profile_img from "../Images/product_image.png"
import { Link } from 'react-router-dom';

const EditProduct = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card>
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4>Edit Product</h4>

                            <Breadcrumb className='mb-3'>
                                <Breadcrumb.Item href="#">
                                    Duplicate
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">
                                    Preview
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <div>
                            {/* <Button className='m-1 '>Save</Button> */}
                            {''}
                            <Link to="/addproductcard">
                                <Button className='m-1 bg-success border-success'>Publish Now</Button>
                            </Link>
                            {''}
                            <Link to="/user/addproduct">
                            <Button className='m-1 border border-0 btn bg-danger'>Cancel</Button>
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
                                                <Form.Control type="text" value="Kitchen Worktops with Island" className='w-100' />
                                            </Form.Group>
                                            <Row className="mb-3 g-3">
                                                <Form.Group as={Col}>
                                                    <Form.Label>SKU</Form.Label>
                                                    <Form.Control type="text" value="324812302" placeholder='eg.324812302' />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Description <span className='text-grey'>(Optional)</span></Form.Label>
                                                    <Form.Control as="textarea"
                                                        value="Train hard. Stay dry. This soccer jacket is made of soft, 
                                                    sweat-wicking fabric that keeps you moving on the practice field.
                                                     Stretch panels at the elbows and sides give you a full range of motion as you work.
                                                    Specifications
                                                    Regular fit is wider at the body, with a straight silhouette
                                                    Ribbed stand-up collar
                                                    Long sleeves with ribbed cuffs
                                                    100% polyester doubleknit
                                                    Front zip pockets; Full zip; Ribbing details; Ribbed hem"
                                                        placeholder='Tag Your Description....'
                                                        rows={8} />
                                                </Form.Group>
                                            </Row>
                                        </Form>
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
                                                <FormControl placeholder='0.00' value="4.14" type="number" aria-label="Text input with dropdown button" />

                                                <DropdownButton
                                                    variant="outline-secondary"
                                                    title="lb"
                                                    id="input-group-dropdown-2"
                                                    align="end"
                                                >
                                                </DropdownButton>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Compare Price</Form.Label>
                                            <Form.Control type="number" value="2.45" className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Handling Charges</Form.Label>
                                            <Form.Control type="number" value="2.45" className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Sales Price</Form.Label>
                                            <Form.Control type="number" value="2.45" className='w-100' />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={7}>
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
                                            <Table responsive>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div>
                                                                <img src={profile_img} width="150px" height="130px" alt='' className='d-block border border-dark' />
                                                                <ActionButton icon="edit" title="Edit" variant="action" className="p-0 ms-5 bg-transparent" />
                                                                <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0 ms-3 bg-transparent" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <img src={profile_img} width="150px" height="130px" alt='' className='d-block border border-dark' />
                                                                <ActionButton icon="edit" title="Edit" variant="action" className="p-0 ms-5 bg-transparent" />
                                                                <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0 ms-3 bg-transparent" />
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div>
                                                                <img src={profile_img} width="150px" height="130px" alt='' className='d-block border border-dark' />
                                                                <ActionButton icon="edit" title="Edit" variant="action" className="p-0 ms-5 bg-transparent" />
                                                                <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0 ms-3 bg-transparent" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div>
                                                                <img src={profile_img} width="150px" height="130px" alt='' className='d-block border border-dark' />
                                                                <ActionButton icon="edit" title="Edit" variant="action" className="p-0 ms-5 bg-transparent" />
                                                                <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0 ms-3 bg-transparent" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <small className='mt-3 d-block text-align-center w-25'>
                                                Drag and Drop
                                                Your Files Here
                                                or
                                            </small>
                                            <Button className='mt-3 btn text-light btn-outline-secondary'>Browse Files</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={5}>
                                <Card className='mt-3 me-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Organization</h5>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>Vendor</Form.Label>
                                            <Form.Control type="text" value="New Project" className='w-100' />
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
                            </Col>
                        </Row>
                        <Row >
                            <Col lg={7}>
                                <Card className='mt-3 me-3'>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between'>
                                            <h5 className='mb-3'>Variants</h5>
                                            <div>
                                                <Button className='bg-transparent text-secondary border-light'>+ Add Variant</Button>
                                            </div>
                                        </div>

                                        <Table width="100%" responsive>
                                            <thead>
                                                <tr>
                                                    <th scope="col"><Form.Check /></th>
                                                    <th scope='col'>IMAGE</th>
                                                    <th scope="col">COLOUR</th>
                                                    <th scope="col">SIZE</th>
                                                    <th scope="col">FINISH TYPE</th>
                                                    <th scope="col">PRICE</th>
                                                    <th scope="col">QUANTITY</th>
                                                    <th className="text-end" scope="col">ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody width="100%">
                                                <tr>
                                                    <td classname="td"><Form.Check /></td>
                                                    <td><img src={profile_img} className='border-rounded' width="40px" height="35px" /></td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="Green" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="31" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="Polished" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="£ 77" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="number" value="3" />
                                                    </td>
                                                    <td classname="td text-end">
                                                        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
                                                        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td classname="td"><Form.Check /></td>
                                                    <td classname="td"><img src={profile_img} className='border-rounded' width="40px" height="35px" /></td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="Green" />
                                                    </td>
                                                    <th classname="td">
                                                        <Form.Control type="text" value="31" />
                                                    </th>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="Polished" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="£ 77" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="number" value="3" />
                                                    </td>
                                                    <td classname="td text-end">
                                                        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
                                                        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td classname="td"><Form.Check /></td>
                                                    <td classname="td"><img src={profile_img} className='border-rounded' width="40px" height="35px" /></td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="Green" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="31" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="Polished" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="text" value="£ 77" />
                                                    </td>
                                                    <td classname="td">
                                                        <Form.Control type="number" value="3" />
                                                    </td>
                                                    <td classname="td text-end">
                                                        <ActionButton icon="edit" title="Edit" variant="action" className="p-0 me-2" />
                                                        <ActionButton icon="trash-alt" title="Delete" variant="action" className="p-0" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={5}>
                                <Card className='mt-3 me-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Product Handle and Metafields</h5>
                                        <Form.Group className='mb-4'>
                                            <Form.Label>
                                                Product handle
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' value="New Project" className='w-100' />
                                        </Form.Group>
                                        <h5 className='mb-3'>Product Metafields</h5>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Title Tag Meta Field
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' value="New Project" className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Description Tag Meta Field
                                            </Form.Label>
                                            <Form.Control type="text" placeholder='' value="New Project" className='w-100' />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                                <Card className='mt-3 me-3'>
                                    <Card.Body>
                                        <h5 className='mb-3'>Product Tag</h5>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Category
                                            </Form.Label>
                                            <Form.Control type="text" value="Granite" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Colour
                                            </Form.Label>
                                            <Form.Control type="text" value="Grey,Black" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Finish Type
                                            </Form.Label>
                                            <Form.Control type="text" value="Per/Mq.Sq-ft" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Length
                                            </Form.Label>
                                            <Form.Control type="text" value="318000 mm" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Width
                                            </Form.Label>
                                            <Form.Control type="text" value="41000 mm" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Thickness
                                            </Form.Label>
                                            <Form.Control type="text" value="1243wm" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Pattern
                                            </Form.Label>
                                            <Form.Control type="text" value="New Project" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Stock Location
                                            </Form.Label>
                                            <Form.Control type="text" value="Derbyshire" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Origin
                                            </Form.Label>
                                            <Form.Control type="text" value="UK" placeholder='' className='w-100' />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label>
                                                Offers
                                            </Form.Label>
                                            <Form.Control type="text" value="New Project" placeholder='' className='w-100' />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body >
            </Card>

        </>
    )
}
export default EditProduct;