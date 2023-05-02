import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import product_image from '../../TemplateAssets/Images/product_image.png'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function ProductDetails() {
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
                                <img src={product_image} width="100%" height="570px" />
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="m-3">
                                <img src={product_image} width="150px" height="130px" />
                            </div>
                            <div className="m-3">
                                <img src={product_image} width="150px" height="130px" />
                            </div>
                            <div className="m-3">
                                <img src={product_image} width="150px" height="130px" />
                            </div>
                            <div className="m-3">
                                <img src={product_image} width="150px" height="130px" />
                            </div>
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
                    <h4 className="m-5 text-uppercase">Labrador Antique Granite</h4>
                    <Row className="m-5">
                        <Col lg={2}>
                            <span style={{ color: '#ff4242' }} className="fw-semibold">£ 15.50 <small style={{ color: '#787a80', textDecoration: 'line-through' }}>£31.30</small></span>
                        </Col>
                        <Col lg={2}>
                            <span style={{ background: '#ff4242' }} className="badge ms-3 p-2">- 50%</span>
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
                            <Form.Select>
                                <option>Select</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Size
                            </Form.Label>
                            <Form.Select>
                                <option>Select</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Finish Type
                            </Form.Label>
                            <Form.Select>
                                <option>Select</option>
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
                    <span className="fw-bold">Description:</span>Labrador Antique Granite is a captivating natural stone that offers a unique touch with its design. Its chocolate brown base is
                    embedded with shiny, sparkly blue crystals that can be seen distributed all throughout the stone. It adds a touch of both glamour and
                    antiqueness making it highly desirable among the end users as well as designers. Not just kitchens and bathrooms, we have installed
                    this durable and stunning granite in office reception desks, commercial bar worktops, feature walls in living rooms and hallways, and
                    many more. Labrador Antique Granite is a type of brown granite quarried in Norway. Labrador Antique is a stunning natural stone
                    with brown, blue and beige coloured patches resting on a dark brown coloured granite slab. The Labrador Antique Granite gives a
                    striking appearance in its iridescent colours which gleam and glimmer. Natural stone Granite does not come in regularly uniform
                    colours because the colour of the granite is created at the discretion of nature. Hence, the Labrador Antique granite may show
                    differences in colours and patterns from one slab to another. Labrador Antico is the other name given to the Labrador Antique
                    granite. Uses: Splashbacks, kitchen counters, islands, windowsills, upstands, bathroom sinks, shower trays, office desks, bar stools,
                    reception work surfaces, staircases, walls, and floors, including those in airports.
                </p>
                <p className="m-3 w-100">
                    <span className="fw-bold">Disclaimer:</span>Labrador Antique Granite is a captivating natural stone that offers a unique touch with its design. Its chocolate brown base is
                    embedded with shiny, sparkly blue crystals that can be seen distributed all throughout the stone. It adds a touch of both glamour.
                </p>
            </Row>
        </>
    )
}
export default ProductDetails