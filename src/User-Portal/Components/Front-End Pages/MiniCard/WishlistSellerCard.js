import React, { useState } from "react";
import { Card, Form, Col, Row, Container, Modal, Button } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import profile from '../../Projectimages/Handyman.jpg'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

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

    // Cancel Modal
    const [showModal4, setShowModal4] = useState(false);

    const handleClose4 = () => {
        setShowModal4(false);
    };

    // Cancel Modal
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => {
        setShowModal1(false);
    };

    return (
        <>
            <Row>
                <div className="mb-5">
                    <NavbarStandard />
                </div>
                <Container>
                    <Col lg={12}>
                        <Card className="mt-4">
                            <Card.Header>
                                <h1>Your Wishlists</h1>
                            </Card.Header>
                        </Card>
                        {/* Followers */}
                        <div class="card mb-3 mt-3">
                            <div className="card-header bg-light">
                                <div className="d-flex justify-content-between flex-row flex-wrap align-items-center">
                                    <div className="mb-2 mb-md-0 mb-lg-0">
                                        <h2 class="mt-3 mt-sm-0 fs-0 fs-lg-1">
                                            <input className="form-check-input cursor-pointer me-2" type="checkbox" />
                                            Followers <span className="">(12)</span>
                                        </h2>
                                    </div>

                                    <div className="">
                                        <form>
                                            <div className="row g-0">
                                                <div className="col"><input className="form-control form-control-sm" type="text" placeholder="Search..." /></div>
                                                <div className="col d-md-block d-none">
                                                    <select className="form-select cursor-pointer form-select-sm ms-2" aria-label=".form-select-sm example">
                                                    <option selected="selected">All followers</option>
                                                    <option>Fabricator</option>
                                                    <option>Plumber</option>
                                                    <option>Roofer</option>
                                                    <option>Bricklaying</option>
                                                </select>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                    <div className="d-flex justify-content-lg-end">
                                        <Icon icon="ph:note-pencil" className="cursor-pointer" width="24" height="24" />
                                        <Icon onClick={() => setShowModal1(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" />
                                    </div>
                                </div>
                            </div>
                            <div class="card-body bg-light px-1 py-0">
                                <div class="row g-0 text-center fs--1">
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Plumber</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Fabricator</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Bricklaying</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                    <div class="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
                                        <div class="bg-white dark__bg-1100 p-3 h-100">
                                            <Link to="/trader-profile-public" className="d-flex justify-content-center">
                                                <div className="circle-container">
                                                    <img src={profile} alt="Image" className="circle-image d-flex justify-content-center" />
                                                </div>
                                            </Link>
                                            <Form.Check.Label className="mb-0 text-primary">
                                                <input className="form-check-input me-1" type="checkbox" />
                                                Sophie Turner
                                            </Form.Check.Label>
                                            <p class="fs--2 mb-1"><a class="text-700" >Roofer</a></p>
                                            <><Icon onClick={() => setShowModal4(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" width="24" height="24" role="button" /></>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Followers */}

                        {/*  */}
                        <Modal show={showModal1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title>Warning</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="text-capitalize">
                                    Are you sure you want to remove (4) Freelancers from your wishlist?
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose1}>
                                    No
                                </Button>
                                <Button variant="danger" onClick={handleClose1}>
                                    Yes
                                </Button>

                            </Modal.Footer>
                        </Modal>
                        {/*  */}
                        {/* Modal-4 */}
                        <Modal show={showModal4} onHide={handleClose4}>
                            <Modal.Header closeButton>
                                <Modal.Title>Warning</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="text-capitalize">
                                    Are you sure you want to remove this follower from your followers list?
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose4}>
                                    No
                                </Button>
                                <Button variant="danger" onClick={handleClose4}>
                                    Yes
                                </Button>

                            </Modal.Footer>
                        </Modal>
                        {/*  */}
                    </Col>
                </Container>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default WishListSellerCard