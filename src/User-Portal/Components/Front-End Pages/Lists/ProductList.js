import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Menubar from "../../Menubar/Menubar";
import Header from "../../Header/Header";
import product_image from '../../Images/product_image.png'
import { Icon } from "@iconify/react";

function ProductList() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col className="shadow" style={{ background: 'white' }} lg={12}>
                    <div className="d-flex justify-content-between">
                        <div className="m-3">
                            <p >
                                Showing 1-24 of 205 Products
                            </p>
                        </div>
                        <div className="m-3">
                            <Row>
                                <Col lg={4}>
                                    <p className="mt-2 fw-bold">Sort By :</p>
                                </Col>
                                {''}
                                <Col lg={7}>
                                    <Form.Group>
                                        <Form.Select className="ms-1 w-100">
                                            <option>Best Match</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={1}>
                                    <Icon icon="ic:round-menu" className="ms-2 mt-1 me-2" color="lightgray" width="28" height="28" />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Row>
                    <Col lg={3}>
                        <Form className="mt-2">
                            <Form.Label className="ms-2 fw-bold fs-5">
                                Category
                            </Form.Label>
                            <ul type="none">
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                            </ul>
                            <Form.Label className="ms-2 fw-bold fs-5">
                                Colour
                            </Form.Label>
                            <ul type="none">
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                            </ul>
                            <Form.Label className="ms-2 fw-bold fs-5">
                                Finish Type
                            </Form.Label>
                            <ul type="none">
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                            </ul>
                            <Form.Label className="ms-2 fw-bold fs-5">
                                Length
                            </Form.Label>
                            <ul type="none">
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                            </ul>
                            <Form.Label className="ms-2 fw-bold fs-5">
                                Width
                            </Form.Label>
                            <ul type="none">
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                            </ul>
                            <Form.Label className="ms-2 fw-bold fs-5">
                                Thickness
                            </Form.Label>
                            <ul type="none">
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                                <li className="fw-semibold">Celing(25)</li>
                            </ul>
                            <Form.Label className="ms-2 fw-bold fs-5">
                                Offers
                            </Form.Label>
                            <ul type="none">
                                <li className="fw-semibold">Celing(25)</li>
                            </ul>
                        </Form>
                    </Col>
                    <Col lg={9}>
                        <Row className="mt-3">
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={product_image} width="300px" />
                                    <p className="fw-semibold m-1">White Mirror Quartz</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ 1199.99</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Row>
        </>
    )
}
export default ProductList