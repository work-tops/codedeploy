import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import product_image from '../Img/product_image1.png'
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import { getAllData } from "../../../Services/ProxyService";

function ProductDetails() {
    let { proid } = useParams();
    const [prodata, setProdata]=useState([])

    const getProById = async () => {
        const response = await getAllData('product/' + proid);
        setProdata(response.data.product);
    }
    useEffect(() => {
        getProById()
    }, [])

    return (
        <>
            <div className="d-flex justify-content-between">
                <Link to="/productlist">
                <Button className="m-3 btn d-block btn-outline-success bg-transparent text-success">Previous</Button>
                </Link>
                <Button className="m-3 btn d-block btn-outline-success bg-transparent text-success">Next</Button>
            </div>
            <Row>
                <Col lg={5}>
                    <Row>
                        <Col lg={8}>
                            <div className="m-3">
                                <img src={prodata.attachments?.[0]?.url} width="100%" height="570px" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            {prodata.attachments?.map((data, key)=>(
                                <div key={key} className="m-3">
                                <img src={data.url} width="150px" height="130px" />
                            </div>
                            ))}
                            
                            {/* <div className="m-3">
                                <img src={product_image} width="150px" height="130px" />
                            </div>
                            <div className="m-3">
                                <img src={product_image} width="150px" height="130px" />
                            </div>
                            <div className="m-3">
                                <img src={product_image} width="150px" height="130px" />
                            </div> */}
                        </Col>
                    </Row>
                </Col>
                <Col lg={7}>
                    <div className="d-flex justify-content-end m-3">
                        <Button className="ms-3 btn btn-outline-success bg-transparent text-success">
                            <Icon icon="icon-park-outline:like" color="#9da8ba" className="me-1" width="20" height="20" />
                            Favourite
                        </Button>
                    </div>
                    <h4 className="m-5 text-uppercase">{prodata.name}</h4>
                    <Row className="m-5">
                        <Col lg={2}>
                            <span style={{ color: '#ff4242' }} className="fw-semibold">£ {prodata.variant?.[0]?.pricing?.price} <small style={{ color: '#787a80', textDecoration: 'line-through' }}>£ {prodata.variant?.[0]?.pricing?.compare_at} </small></span>
                        </Col>
                        <Col lg={2}>
                            <span style={{ background: '#ff4242' }} className="badge ms-3 p-2">{Math.round(100-(prodata.variant?.[0]?.pricing?.price/prodata.variant?.[0]?.pricing?.compare_at*100))}%</span>
                        </Col>
                        <Col lg={3}>
                            <span className="d-block">
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                <small>(12)</small>
                            </span>
                        </Col>
                    </Row>
                    <Form className="m-5">
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Colour
                            </Form.Label>
                            <Form.Select >
                                {/* <option value="">Select</option> */}
                                {prodata.variant?.map((data, key)=>(
                                <option key={key} value={data.color}>{data.color}</option>
                                ))}

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Size
                            </Form.Label>
                            <Form.Select>
                            {/* <option value="">Select</option> */}
                                {prodata.variant?.map((data, key)=>(
                                <option key={key} value={data.size}>{data.size}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Finish Type
                            </Form.Label>
                            <Form.Select>
                            {/* <option value="">Select</option> */}
                                {prodata.variant?.map((data, key)=>(
                                <option key={key} value={data.finish_type}>{data.finish_type}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="m-3">
                            <Form.Control className="w-25 m-3 d-inline" type="number" />
                            <Button className=" m-3 btn bg-success">Add to Cart</Button>
                            <Button className=" m-3 btn btn-outline-success bg-transparent text-success ">Get a Quote</Button>
                        </Form.Group>
                        <span>
                            Share:
                            <Icon icon="ic:sharp-facebook" className="ms-2" width="24" height="24" />
                            <Icon icon="ph:twitter-logo-fill" width="24" height="24" />
                            <Icon icon="mdi:pinterest" width="24" height="24" />
                        </span>
                    </Form>
                </Col>
                <Col lg={12} className="m-3">
                    <Button className=" btn btn-outline-success bg-transparent text-success ">Description</Button>
                    <Button className="ms-3 btn btn-outline-success bg-transparent text-success ">Disclaimer</Button>
                    <Button className="ms-3 btn btn-outline-success bg-transparent text-success ">Reviews <small>(12)</small></Button>
                </Col>
                <p className="m-3 w-100">
                    <span className="fw-bold">Description: </span>{prodata.description}
                </p>
                <p className="m-3 w-100">
                    <span className="fw-bold">Disclaimer:</span> {prodata.policy}
                    </p>
            </Row>
        </>
    )
}
export default ProductDetails