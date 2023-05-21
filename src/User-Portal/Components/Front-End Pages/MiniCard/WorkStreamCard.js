
import React from "react";
import { Card, Button, Col, Row, InputGroup, Dropdown, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import product_image from '../../Projectimages/16.png'
import { Icon } from "@iconify/react";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { link } from "d3";

function WorkStreamCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12}>
                    <Container>
                        <h5 className="mb-3 mt-4">WorkStreams</h5>
                        <Card className="mb-3">
                            <Card.Header className="bg-light">
                                <h5>
                                    OUTDOOR KITCHEN ISLAND
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="row g-0">

                                    <div className="col-md-8 col-lg-8 col-xxl-8 p-x1">
                                        <div className="row g-0 h-100">
                                            <p className="text-justify">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                                                . Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                                , when an unknown printer took a galley of type and scrambled it to make a 
                                                type specimen book.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-xxl-4 mt-4 mt-lg-0">
                                        <div className="d-flex justify-content-center mt-4">
                                            <Button as={Link} to="/WorkstreamDetais" style={{color:"#003f6b",border:'1px solid #003f6b'}} className="bg-transparent">View</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* pagination */}
                        <Card className="mt-3 mb-3">
                            <Card.Body>
                                <Row className="g-3 flex-center justify-content-between">
                                    <Col xs="auto" className="d-flex align-items-center">
                                        <small className="d-none d-lg-block me-2">Show:</small>
                                        <Form.Select
                                            size="sm"
                                            style={{ maxWidth: '4.875rem' }}
                                        >
                                            <option >1</option>
                                            <option >2</option>
                                            <option >3</option>
                                            <option >All</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs="auto" className="d-flex">
                                        <div>
                                            <Button
                                                variant="falcon-default"
                                                className="me-2"
                                            >
                                                Preview
                                            </Button>
                                        </div>

                                        <div>
                                            <Button
                                                variant="falcon-default"
                                            >
                                                Next
                                            </Button>

                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default WorkStreamCard