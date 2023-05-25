import { React, useState } from "react";
import { Row, Col, Button, Card, Form, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import product_image from '../../Images/semiprecious.png'

function Cart() {
 const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    const handleConfirm = () => {
        // Perform the action after confirmation
        console.log("Action confirmed!");
        handleModalToggle(); // Close the modal after confirmation
    };
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container className="mt-4">
                    <Col lg={12}>
                        <div className="card">
                            <div className="card-header">
                                <div className="row justify-content-between">
                                    <div className="col-md-auto">
                                        <h5 className="mb-3 mb-md-0">Cart (1 Items)</h5>
                                    </div>
                                    <div className="col-md-auto">
                                        <Link to="/productlist">
                                            <a className="btn btn-sm btn-outline-secondary border-300 me-2 shadow-none" >
                                                <span className="fas fa-chevron-left me-1" data-fa-transform="shrink-4"></span>
                                                Continue Shopping
                                            </a>
                                        </Link>
                                        <Button as={Link} to="/checkout" className="btn btn-sm btn-primary" >Checkout</Button></div>

                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="row gx-card mx-0 bg-200 text-900 fs--1 fw-semi-bold">
                                    <div className="col-9 col-md-8 py-2">Product Name</div>
                                    <div className="col-3 col-md-4">
                                        <div className="row">
                                            <div className="col-md-8 py-2 d-none d-md-block text-center">Quantity</div>
                                            <div className="col-12 col-md-4 text-end py-2">Price</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-card mx-0 align-items-center border-bottom border-200">
                                    <div className="col-8 py-3">
                                        <div className="d-flex align-items-center"><a ><img className="img-fluid rounded-1 me-3 d-none d-md-block" src={product_image} alt="" width="60" /></a>
                                            <div className="flex-1">
                                                <h5 className="fs-0"><a className="text-900" >MALACHITE SEMI PRECIOUS
                                                </a></h5>
                                                <div>
                                                    <div className="fs--2 fs-md--1"><a role="button" onClick={handleModalToggle} className="text-danger" >Remove</a></div>
                                                    <div>
                                                    <button onClick={handleModalToggle}>Open Modal</button>
                                                        {showModal && (
                                                            <div className="modal">
                                                                <div className="modal-content">
                                                                    <h2>Are You Sure?</h2>
                                                                    <p>This action cannot be undone.</p>
                                                                    <div className="modal-buttons">
                                                                        <button onClick={handleConfirm}>Confirm</button>
                                                                        <button onClick={handleModalToggle}>Cancel</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 py-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-8 d-flex justify-content-end justify-content-md-center order-1 order-md-0">
                                                <div>
                                                    <div className="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button className="btn btn-sm btn-outline-secondary border-300 px-2 shadow-none" data-type="minus">-</button><input className="form-control text-center px-2 input-spin-none" type="number" min="1" value="1" aria-label="Amount (to the nearest dollar)" style={{ width: "50px" }} /><button className="btn btn-sm btn-outline-secondary border-300 px-2 shadow-none" data-type="plus">+</button></div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-end ps-0 order-0 order-md-1 mb-2 mb-md-0 text-600">£ 200</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row fw-bold gx-card mx-0">
                                    <div className="col-9 col-md-8 py-2 text-end text-900">Total</div>
                                    <div className="col px-0">
                                        <div className="row gx-card mx-0">
                                            <div className="col-md-8 py-2 d-none d-md-block text-center">1 (items)</div>
                                            <div className="col-12 col-md-4 text-end py-2">£ 200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light d-flex justify-content-end">
                                <form className="me-3">
                                    <div className="input-group input-group-sm"><input className="form-control" type="text" placeholder="Promocode" /><button className="btn btn-outline-secondary border-300 btn-sm shadow-none" type="submit">Apply</button></div>
                                </form><Button as={Link} to="/checkout" className="btn btn-sm btn-primary" >Checkout</Button>
                            </div>
                        </div>
                    </Col>
                </Container>
            </Row >
        </>
    )
}
export default Cart
{/* <Col classNameName="mt-5" lg={12}>
                    <Row>
                        <Col lg={7}>
                            <div classNameName="d-flex justify-content-between">
                                <h3 classNameName="m-3">Cart List</h3>
                                <div classNameName="m-3">
                                    <Link to="/addproductcard">
                                        <Button classNameName="bg-transparent text-dark border-dark">Add to List</Button>
                                    </Link>
                                </div>
                            </div>
                            <Card classNameName="m-3">
                                <Card.Body>
                                    <Row>
                                        <Col lg={3}>
                                            <p classNameName="fw-semibold">Category</p>
                                            <Icon icon="ic:outline-image" color="gray" width="75" height="60" />
                                        </Col>
                                        <Col lg={5}>
                                            <p classNameName="fw-semibold">DNA Mouse Heart from Bar Harbour,Maine</p>
                                            <Row>
                                                <Col>
                                                    <p>Brand</p>
                                                    <p>SKU</p>
                                                    <p>Supplier</p>
                                                </Col>
                                                <Col>
                                                    <p>Size</p>
                                                    <p>Unit Price</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col lg={4}>
                                            <div classNameName="d-flex justify-content-end">
                                                <Button classNameName="border-0 btn bg-danger">Remove</Button>
                                            </div>
                                            <div classNameName="d-flex justify-content-end">
                                                <Form.Group classNameName="w-50 mb-3">
                                                    <Form.Label classNameName=" fw-semibold">Quantity</Form.Label>
                                                    <Form.Select>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div classNameName="d-flex justify-content-end">
                                                <span classNameName="fs-5 fw-semibold">Sub Total : £ 38.81</span>
                                            </div>
                                        </Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Note to Supplier (Optional)
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card classNameName="m-3">
                                <Card.Body>
                                    <Row>
                                        <Col lg={3}>
                                            <p classNameName="fw-semibold">Category</p>
                                            <Icon icon="ic:outline-image" color="gray" width="75" height="60" />
                                        </Col>
                                        <Col lg={5}>
                                            <p classNameName="fw-semibold">An Item to be deleted</p>
                                            <Row>
                                                <Col>
                                                    <p>Brand</p>
                                                    <p>SKU</p>
                                                    <p>Supplier</p>
                                                </Col>
                                                <Col>
                                                    <p>Size</p>
                                                    <p>Unit Price</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col lg={4}>
                                            <div classNameName="d-flex justify-content-end">
                                                <Button classNameName="border-0 btn bg-danger">Remove</Button>
                                            </div>
                                            <div classNameName="d-flex justify-content-end">
                                                <Form.Group classNameName="w-50 mb-3">
                                                    <Form.Label classNameName=" fw-semibold">Quantity</Form.Label>
                                                    <Form.Select>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div classNameName="d-flex justify-content-end">
                                                <span classNameName="fs-5 fw-semibold">Sub Total : £ 1987.00</span>
                                            </div>
                                        </Col>
                                        <Form.Group>
                                            <Form.Label>
                                                Note to Supplier (Optional)
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Row>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={5}>
                            <Card classNameName="m-5 shadow  position-fixed">
                                <Card.Body>
                                    <p classNameName="text-uppercase mb-2">
                                        Summary
                                    </p>
                                    <Divider />
                                    <Row classNameName="mt-3">
                                        <Col lg={5}>
                                            <p classNameName="fw-semibold text-capitalize">
                                                Sub Total :
                                            </p>
                                        </Col>
                                        <Col>
                                            <p classNameName="fw-semibold">
                                                £ 1987.00
                                            </p>
                                        </Col>
                                    </Row>
                                    <p classNameName="fw-semibold" style={{ fontSize: '12px' }}>Additional shipping & handling charges may
                                        apply.
                                    </p>
                                    <div classNameName="d-flex justify-content-center">
                                        <Link to='/shippingpage'>
                                        <Button classNameName="bg-dark text-white border-0  mt-3">
                                            Checkout
                                        </Button>
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col> */}