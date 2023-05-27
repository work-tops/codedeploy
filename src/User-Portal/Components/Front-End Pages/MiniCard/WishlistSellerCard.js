import React, { useState } from "react";
import { Card, Form, Col, Row, Container, Modal, Button } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import profile from '../../Projectimages/Handyman.jpg'
import { Icon } from "@iconify/react";

function WishListSellerCard() {

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
                <div className="mb-5">
                    <NavbarStandard />
                </div>
                <Container>
                    <Col lg={12}>
                        <h5 className="mt-4">Your Wishlists</h5>
                        {/* Followers */}
                        <div class="card mb-3 mt-3">
                            <div class="card-header bg-light">
                                <div class="row align-items-center">
                                    <div class="col d-flex justify-content-between">
                                        <h5 class="mb-0" id="followers">Followers <span class="d-none d-sm-inline-block">(4)</span></h5>
                                        <><Icon onClick={() => setShowModal(true)} className="d-block hover-danger" icon="solar:trash-bin-minimalistic-2-bold" role="button" /></>
                                    </div>
                                    {/* Search */}
                                </div>
                            </div>
                            <div class="card-body bg-light px-1 py-0">
                                <div class="row g-0 text-center fs--1">
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Emilia Clarke
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Kitchen Designer</a></p>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Kit Harington
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Plumber</a></p>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <div>
                                                <img width="75px" height="70px" className="rounded-circle mb-3" src={profile} alt="" />
                                            </div>
                                            <Form.Check.Label className="mb-0 text-700">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Peter Dinklage
                                            </Form.Check.Label>

                                            <p class="fs--2 mb-1"><a class="text-700" >Worktop Installer</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* Followers */}

                        {/*  */}
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Warning</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="text-capitalize">
                                    Are you sure you want to remove (4) Freelancers from your wishlist?
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
                        {/*  */}
                    </Col>
                </Container>
            </Row>
        </>
    )
}
export default WishListSellerCard