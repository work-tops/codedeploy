import React from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Menubar from "../../Menubar/Menubar";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

function Cart() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>
                    <Row>
                        <Col lg={7}>
                            <div className="d-flex justify-content-between">
                                <h3 className="m-3">Cart List</h3>
                                <div className="m-3">
                                    <Link to="/addproductcard">
                                        <Button className="bg-transparent text-dark border-dark">Add to List</Button>
                                    </Link>
                                </div>
                            </div>
                            <Card className="m-3">
                                <Card.Body>
                                    <Row>
                                        <Col lg={3}>
                                            <p className="fw-semibold">Category</p>
                                            <Icon icon="ic:outline-image" color="gray" width="75" height="60" />
                                        </Col>
                                        <Col lg={5}>
                                            <p className="fw-semibold">DNA Mouse Heart from Bar Harbour,Maine</p>
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
                                            <div className="d-flex justify-content-end">
                                                <Button className="border-0 btn bg-danger">Remove</Button>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <Form.Group className="w-50 mb-3">
                                                    <Form.Label className=" fw-semibold">Quantity</Form.Label>
                                                    <Form.Select>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <span className="fs-5 fw-semibold">Sub Total : £ 38.81</span>
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
                            <Card className="m-3">
                                <Card.Body>
                                    <Row>
                                        <Col lg={3}>
                                            <p className="fw-semibold">Category</p>
                                            <Icon icon="ic:outline-image" color="gray" width="75" height="60" />
                                        </Col>
                                        <Col lg={5}>
                                            <p className="fw-semibold">An Item to be deleted</p>
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
                                            <div className="d-flex justify-content-end">
                                                <Button className="border-0 btn bg-danger">Remove</Button>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <Form.Group className="w-50 mb-3">
                                                    <Form.Label className=" fw-semibold">Quantity</Form.Label>
                                                    <Form.Select>
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <span className="fs-5 fw-semibold">Sub Total : £ 1987.00</span>
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
                            <Card className="m-5 shadow  position-fixed">
                                <Card.Body>
                                    <p className="text-uppercase mb-2">
                                        Summary
                                    </p>
                                    <Divider />
                                    <Row className="mt-3">
                                        <Col lg={5}>
                                            <p className="fw-semibold text-capitalize">
                                                Sub Total :
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="fw-semibold">
                                                £ 1987.00
                                            </p>
                                        </Col>
                                    </Row>
                                    <p className="fw-semibold" style={{ fontSize: '12px' }}>Additional shipping & handling charges may
                                        apply.
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <Link to='/shippingpage'>
                                        <Button className="bg-dark text-white border-0  mt-3">
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
                </Col>
            </Row>
        </>
    )
}
export default Cart