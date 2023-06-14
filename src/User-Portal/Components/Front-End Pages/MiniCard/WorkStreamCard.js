
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
                                            <Button as={Link} to="/WorkstreamDetails" style={{ color: "#003f6b", border: '1px solid #003f6b' }} className="bg-transparent">View</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* pagination */}
                        <div className="card mb-3 mt-3">
                            <div className="card-body">
                                <div className="row g-3 flex-center justify-content-md-between">
                                    <div className="col-auto">
                                        <form className="row gx-2">
                                            <div className="col-auto"><small>Show:</small></div>
                                            <div className="col-auto"> <select className="form-select form-select-sm" aria-label="Show courses">
                                                <option selected="selected" value="9">9</option>
                                                <option value="20">20</option>
                                                <option value="50">50</option>
                                            </select></div>
                                        </form>
                                    </div>
                                    <div className="col-auto"> <button className="btn btn-falcon-default btn-sm me-2" type="button" disabled="disabled" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Prev" data-bs-original-title="Prev">
                                        <span className="fas fa-chevron-left"></span></button><a className="btn btn-sm btn-falcon-default text-primary me-2" href="#!">1</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">2</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">3</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">
                                            <span className="fas fa-ellipsis-h"></span></a><a className="btn btn-sm btn-falcon-default me-2" href="#!">303</a><button className="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Next" data-bs-original-title="Next">
                                            <span className="fas fa-chevron-right">  </span></button></div>
                                </div>
                            </div>
                        </div>
                        {/* pagination */}
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default WorkStreamCard