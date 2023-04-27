import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Menubar from "../../Menubar/Menubar";
import Header from "../../Header/Header";
import product_image from '../../Images/product_image.png'
import { Icon } from "@iconify/react";
import { getAllData } from "../../../../Services/ProxyService";
import { Link } from "react-router-dom";

function ProductList() {

    const [products, setproducts] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const productList = async () => {
        const response = await getAllData('products');
        setproducts(response.data.products);
        setShowSpinner(false);
    }
    useEffect(() => {
        productList()
    }, [])
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
                    <Row>
                        <Col className="fs-6 mt-3 fw-semibold">

                            <span className="bg-dark ms-3 text-white p-2">
                                Filter <Icon icon="ion:funnel-outline" color="white" width="28" height="28" />
                            </span>

                        </Col>
                        <Col className="mt-3">
                            <span className="badge m-1 bg-secondary">
                                Celing (25) <Icon icon="ic:sharp-close" color="white" width="14" height="14" />
                            </span>
                            <span className="badge m-1 bg-secondary">
                                Celing (25) <Icon icon="ic:sharp-close" color="white" width="14" height="14" />
                            </span>
                            <span className="badge m-1 bg-secondary">
                                Celing (25) <Icon icon="ic:sharp-close" color="white" width="14" height="14" />
                            </span>
                        </Col>
                    </Row>
                    <Col lg={3}>
                        <Form className="mt-2">
                            <Form.Group className="mb-3">
                                <Form.Label className="ms-2 fw-bold fs-5">
                                    Category
                                </Form.Label>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="ms-2 fw-bold fs-5">
                                    Colour
                                </Form.Label>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="ms-2 fw-bold fs-5">
                                    Finish Type
                                </Form.Label>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="ms-2 fw-bold fs-5">
                                    Width
                                </Form.Label>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="ms-2 fw-bold fs-5">
                                    Thickness
                                </Form.Label>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="ms-2 fw-bold fs-5">
                                    Offers
                                </Form.Label>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col lg={1} className="ms-3">
                                        <Form.Check />
                                    </Col>
                                    <Col>
                                        Celing(25)
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={9}>
                    <div style={{ height: '0px' }} className="text-center">
                                    {showSpinner && (
                                        <div
                                            className="spinner-border"
                                            role="status"
                                            style={{ width: '70px', height: '70px', fontSize: "20px", opacity: "0.7" }} // set the width and height here
                                        >
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    )}
                                </div>
                        <Row className="mt-3">
                        {products.map((data, key) => (
                            <Col lg={4}>
                                <div className="mb-3">
                                    <img src={data?.attachments[0]?.url} width="300px" />
                                    {/* <img src={product_image} width="300px" /> */}
                                    <p className="fw-semibold m-1">{data.name}</p>
                                    <small className="m-1">Quartz</small>
                                    <span className="d-block">
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        (20)
                                    </span>
                                    <p style={{ color: '#f68f57' }} className="fw-bold fs-5">£ {data?.variant[0]?.pricing?.price}</p>
                                    <Button style={{ background: '#003f6b' }} className="text-white w-75">Get a Quote</Button>
                                </div>
                            </Col>
                        ))}
                        </Row>
                    </Col>
                </Row >
            </Row >
        </>
    )
}
export default ProductList