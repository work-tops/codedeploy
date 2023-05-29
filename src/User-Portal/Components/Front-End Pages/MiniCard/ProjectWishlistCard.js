import React, { useState } from "react";
import { Card, Container, Col, Row, Button, Modal,Form } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Icon } from "@iconify/react";
import product_image from '../../Images/Granite.png'
import { Link } from "react-router-dom";

function ProjectWishListCard() {

    // Cancel Modal
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal(false);
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Col lg={12} className="mt-4">
                        <h5 className="mb-3">My Wishlist</h5>
                        <Card className="mb-3">
                            <Card.Header className="d-flex justify-content-end">
                                <><Icon onClick={() => setShowModal(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" role="button" /></>
                            </Card.Header>
                            <Card.Body>
                                <div className="row g-0">
                                    {/* <div className="col-md-4 col-lg-3">
                                        <div className="hoverbox h-md-100"><a className="text-decoration-none" data-gallery="attachment-bg"><img className="h-100 w-100 fit-cover" src={product_image} alt="" /></a>
                                        </div>
                                    </div> */}
                                    <div className="col-md-12 col-lg-12 p-x1">
                                        <div className="row g-0 h-100">
                                            <div className="col-lg-8 col-xxl-9 d-flex flex-column pe-x1">
                                                <div className="d-flex gap-2 flex-wrap mb-3">
                                                    <span className="badge rounded-pill badge-soft-primary">
                                                        <span>Office</span></span>
                                                    <span className="badge rounded-pill badge-soft-success">
                                                        <span>Rack</span></span>
                                                </div>
                                                <h5 className="fs-0 mb-2 text-primary">
                                                    Project Owner Name
                                                </h5>
                                                <h4 className="mt-3 text-900 mt-sm-0 fs-0 fs-lg-1">
                                                    MIDDAY OUTDOOR QUARTZ
                                                </h4>
                                                <div className="fw-semi-bold fs--1">
                                                    <div className="d-inline-block ">
                                                        <p className="text-justify">Midday Outdoor Quartz is a concrete finish, white slab that is adorned with minute black dots.
                                                            It is a dream come true for kitchens, baths, entryways, laundry and mudrooms, as well as a variety
                                                            of other spaces in both residential and commercial properties.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xxl-3 mt-4 mt-lg-0">
                                                <div className="h-100 rounded  d-flex flex-lg-column justify-content-between p-lg-3">
                                                    <div className="d-flex justify-content-end">
                                                        <div className="mt-3 d-flex flex-lg-column gap-2">
                                                            <Button
                                                                as={Link}
                                                                to="/jobproposal/:jobid/jobproposal"
                                                                style={{ color: '#003f6b', border: '1px solid #003f6b' }}
                                                                role="button"
                                                                className="fw-semibold bg-transparent text-uppercase mt-3">Send proposal
                                                            </Button>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Header className="d-flex justify-content-end">
                                <><Icon onClick={() => setShowModal(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" role="button" /></>
                            </Card.Header>
                            <Card.Body>
                                <div className="row g-0">

                                    <div className="col-md-12 col-lg-12 p-x1">
                                        <div className="row g-0 h-100">
                                            <div className="col-lg-8 col-xxl-9 d-flex flex-column pe-x1">
                                                <div className="d-flex gap-2 flex-wrap mb-3">
                                                    <span className="badge rounded-pill badge-soft-primary">
                                                        <span>Office</span></span>
                                                    <span className="badge rounded-pill badge-soft-success">
                                                        <span>Rack</span></span>
                                                </div>
                                                <h5 className="fs-0 mb-2 text-primary">
                                                    Project Owner Name
                                                </h5>
                                                <h4 className="mt-3 text-900 mt-sm-0 fs-0 fs-lg-1">
                                                    MIDDAY OUTDOOR QUARTZ
                                                </h4>
                                                <div className="fw-semi-bold fs--1">
                                                    <div className="d-inline-block ">
                                                        <p className="text-justify">Midday Outdoor Quartz is a concrete finish, white slab that is adorned with minute black dots.
                                                            It is a dream come true for kitchens, baths, entryways, laundry and mudrooms, as well as a variety
                                                            of other spaces in both residential and commercial properties.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xxl-3 mt-4 mt-lg-0">
                                                <div className="h-100 rounded  d-flex flex-lg-column justify-content-between p-lg-3">
                                                    <div className="d-flex justify-content-end">
                                                        <div className="mt-3 d-flex flex-lg-column gap-2">
                                                            <Button
                                                                as={Link}
                                                                to="/jobproposal/:jobid/jobproposal"
                                                                style={{ color: '#003f6b', border: '1px solid #003f6b' }}
                                                                role="button"
                                                                className="fw-semibold bg-transparent text-uppercase mt-3">Send proposal
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="mb-lg-4 mt-auto mt-lg-0">
                                                        <h4 className="mb-1 lh-1 fs-2 text-warning d-flex align-items-end">£69.50<del className="ms-1 fs--1 text-500 mb-1">£139.90</del></h4>
                                                        <p className="mb-0 fs--2 text-800">92,632 Learners Enrolled</p>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <Modal show={showModal} onHide={handleClose}>
                                    <Modal.Header >
                                        <Modal.Title>Warning</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className="text-capitalize">
                                            Are you sure you want to remove this project from your wishlist?
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="danger" onClick={handleClose}>
                                            Remove
                                        </Button>

                                    </Modal.Footer>
                                </Modal>
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
                                                // value={itemsPerPage}
                                                // onChange={({ target }) => {
                                                //     setItemsPerPage(target.value);
                                                //     setCoursePerPage(target.value);
                                                // }}
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
                            {/* pagination */}
                    </Col>
                </Container>
            </Row>
        </>
    )
}
export default ProjectWishListCard