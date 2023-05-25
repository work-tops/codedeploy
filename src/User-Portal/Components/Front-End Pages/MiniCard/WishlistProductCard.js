import React, { useState } from "react";
import { Card, Button, Col, Row, Container, Modal } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import product_image from '../../Projectimages/7.jpg'
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WishListProductCard() {

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
    const toastDark = () => toast.success(<h6 className="text-sucess">Your Product is Successfully Added to Cart</h6>);


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
                            <Card.Body>
                                <div className="row g-0">
                                    <div className="col-md-4 col-lg-3">
                                        <div className="hoverbox h-md-100"><a className="text-decoration-none" data-gallery="attachment-bg"><img className="h-100 w-100 fit-cover" src={product_image} alt="" /></a>
                                            {/* <div className="hoverbox-content flex-center pe-none bg-holder overlay overlay-2"></div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9 p-x1">
                                        <div className="row g-0 h-100">
                                            <div className="col-lg-8 col-xxl-9 d-flex flex-column pe-x1">
                                                <div className="d-flex gap-2 flex-wrap mb-3">
                                                    <span className="badge rounded-pill badge-soft-success">
                                                        <span>In Stock</span></span>
                                                    <span className="badge rounded-pill badge-soft-warning">
                                                    </span>
                                                </div>
                                                <h4 className="mt-3 mt-sm-0 fs-0 fs-lg-1">
                                                    <a className="text-900">
                                                        CALACATTA LIGHT QUARTZ
                                                    </a>
                                                </h4>
                                                <div className="fw-semi-bold fs--1">
                                                    <span className="me-1 text-900 me-2">4.9</span>
                                                    <div className="d-inline-block ">
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                    </div>
                                                    <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xxl-3 mt-4 mt-lg-0">
                                                <div className="h-100 rounded border-lg border-1 d-flex flex-lg-column justify-content-between p-lg-3">
                                                    <div className="d-flex justify-content-end">
                                                        <Icon onClick={() => setShowModal(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" role="button" />
                                                    </div>
                                                    <div className="mb-lg-4 mt-auto mt-lg-0">
                                                        <h4 className="mb-1 lh-1 fs-2 text-warning d-flex align-items-end">£69.50<del className="ms-1 fs--1 text-500 mb-1">£139.90</del></h4>
                                                        <p className="mb-0 fs--2 text-800">92,632 Learners Enrolled</p>
                                                    </div>
                                                    <div className="mt-3 d-flex flex-lg-column gap-2"><button onClick={toastDark} className="btn btn-md btn-falcon-default hover-danger fs--1 text-600">
                                                        {/* <span className="far fa-heart"></span><span className="ms-1 text-600 d-none d-lg-inline">Remove from Wishlist</span></button><button className="btn btn-md btn-primary fs--1"> */}
                                                        <span className="fas fa-cart-plus"></span><span className="ms-1 d-none d-lg-inline">Add to Cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body>
                                <div className="row g-0">
                                    <div className="col-md-4 col-lg-3">
                                        <div className="hoverbox h-md-100"><a className="text-decoration-none" data-gallery="attachment-bg"><img className="h-100 w-100 fit-cover" src={product_image} alt="" /></a>
                                            {/* <div className="hoverbox-content flex-center pe-none bg-holder overlay overlay-2"></div> */}
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9 p-x1">
                                        <div className="row g-0 h-100">
                                            <div className="col-lg-8 col-xxl-9 d-flex flex-column pe-x1">
                                                <div className="d-flex gap-2 flex-wrap mb-3">
                                                    <span className="badge rounded-pill badge-soft-danger">
                                                        <span>Out of Stock</span></span>
                                                    <span className="badge rounded-pill badge-soft-warning">
                                                    </span>
                                                </div>
                                                <h4 className="mt-3 mt-sm-0 fs-0 fs-lg-1">
                                                    <a className="text-900">SARDO GREY GRANITE</a></h4>
                                                <div className="fw-semi-bold fs--1">
                                                    <span className="me-1 text-900 me-2">4.9</span>
                                                    <div className="d-inline-block ">
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star text-warning"></span>
                                                        <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                    </div>
                                                    <span className="ms-2 text-secondary">(78,259 reviews)</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xxl-3 mt-4 mt-lg-0">
                                                <div className="h-100 rounded border-lg border-1 d-flex flex-lg-column justify-content-between p-lg-3">
                                                    <div className="d-flex justify-content-end">
                                                        <Icon onClick={() => setShowModal(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" role="button" />
                                                    </div>

                                                    <div className="mb-lg-4 mt-auto mt-lg-0">
                                                        <h4 className="mb-1 lh-1 fs-2 text-warning d-flex align-items-end">£69.50<del className="ms-1 fs--1 text-500 mb-1">£139.90</del></h4>
                                                        <p className="mb-0 fs--2 text-800">92,632 Learners Enrolled</p>
                                                    </div>
                                                    <div className="mt-3 d-flex flex-lg-column gap-2"><button onClick={toastDark} className="btn btn-md btn-falcon-default hover-danger fs--1 text-600">
                                                        {/* <span className="far fa-heart"></span><span className="ms-1 text-600 d-none d-lg-inline">Remove from Wishlist</span></button><button className="btn btn-md btn-primary fs--1"> */}
                                                        <span className="fas fa-cart-plus"></span><span className="ms-1 d-none d-lg-inline">Add to Cart</span></button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Modal show={showModal} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Warning</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className="text-capitalize">
                                            Are you sure you want to remove this product from your wishlist?
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="danger" onClick={handleClose}>
                                            Remove
                                        </Button>

                                    </Modal.Footer>
                                </Modal>
                                {/*  */}
                                <ToastContainer
                                        position="top-right"
                                        autoClose={1000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        className="m-3"
                                    />
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>
            </Row>
        </>
    )
}
export default WishListProductCard