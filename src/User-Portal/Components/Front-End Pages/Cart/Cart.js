import { React, useState } from "react";
import { Row, Col, Button, Card, Modal, Container, Form, Breadcrumb } from "react-bootstrap";
import emptycart from '../../Projectimages/EmptyCart.avif'
import { Link } from "react-router-dom";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import product_image from '../../Images/semiprecious.png'
import Footer from "../../Footer/Footer";

function Cart() {
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

                <Container className="mt-4">
                    <Col lg={12}>
                        <div className="card">
                            <div className="card-header">
                                <div className="row justify-content-between">
                                    <div className="col-md-auto">
                                        <h5 className="mb-3 mb-md-0">Cart (1 Items)</h5>
                                    </div>
                                    <div className="col-md-auto">
                                    <div className="d-flex justify-content-start gap-1 flex-wrap">
                                            <Link to="/productlist">
                                                <a className="btn btn-sm  btn-outline-secondary   border-300 shadow-none" >
                                                    <span  data-fa-transform="shrink-4"></span>
                                                    Continue Shopping
                                                </a>
                                            </Link>
                                            <Button onClick={() => setShowModal(true)} className="btn btn-sm btn-danger" >Remove</Button></div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="row gx-card mx-0 bg-200 text-900 fs--1 fw-semi-bold">
                                    <div className="col-2 col-md-2 py-2">
                                        <Form.Check type="checkbox" />
                                    </div>
                                    <div className="col-6 col-md-6 py-2">Product Name</div>
                                    <div className="col-4 col-md-4">
                                        <div className="row">
                                            <div className="col-md-8 py-2 d-none d-md-block text-center">Quantity</div>
                                            <div className="col-12 col-md-4 text-end py-2">Price</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row gx-card mx-0 align-items-center border-bottom border-200">
                                    <div className="col-2 py-3">
                                        <Form.Check type="checkbox" />
                                    </div>
                                    <div className="col-6 py-3">

                                        <div className="d-flex align-items-center">

                                            <Link
                                                to={`productdetails/${"data._id"}`}
                                                className="text-dark"
                                            >
                                                <img style={{ position: 'relative', bottom: '8px' }} className="img-fluid rounded-1 me-3 d-none d-md-block" src={product_image} alt="" width="80" />
                                            </Link>

                                            <div className="flex-1">
                                                <h5 className="fs-0 text-uppercase">
                                                    <Link
                                                        to={`productdetails/${"data._id"}`}
                                                        className="text-dark "
                                                    >
                                                        MALACHITE SEMI PRECIOUS
                                                    </Link>
                                                </h5>
                                                <span style={{ fontSize: '14px' }} className="fw-semibold mt-2 d-block">White / 20MM / Polished / Per Sq Mt</span>
                                                <p className="text-danger" onClick={setShowModal} style={{fontSize:'14px',marginTop:'5px'}} role="button">Remove</p>
                                                <div>
                                                    <Modal show={showModal} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Warning</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <p className="text-capitalize">
                                                                Are you sure want to remove selected items from your cart?
                                                            </p>
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button variant="secondary" onClick={handleClose}>
                                                                No
                                                            </Button>
                                                            <Button variant="danger" onClick={handleClose}>
                                                                Yes
                                                            </Button>

                                                        </Modal.Footer>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-4 py-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-8 d-flex justify-content-end justify-content-md-center order-1 order-md-0">
                                                <div>
                                                    <div className="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button className="btn btn-sm btn-outline-secondary border-300 px-2 shadow-none" data-type="minus">-</button><input className="form-control text-center px-2 input-spin-none" type="number" min="1" value="1" aria-label="Amount (to the nearest dollar)" style={{ width: "50px" }} /><button className="btn btn-sm btn-outline-secondary border-300 px-2 shadow-none" data-type="plus">+</button></div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 text-end ps-0 order-0 order-md-1 mb-2 mb-md-0 text-600">£ 200</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row fw-bold gx-card mx-0">
                                    <div className="col-8 col-md-8 py-2 text-end text-900">Total</div>
                                    <div className="col px-0">
                                        <div className="row gx-card mx-0">
                                            <div className="col-md-8 py-2 d-none d-md-block">1 (items)</div>
                                            <div className="col-12 col-md-4 text-start py-2">£ 200</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light d-flex justify-content-end">
                                <form className="me-3">
                                    <Button as={Link} to="/checkout" className="btn btn-sm btn-primary me-2" >Checkout</Button>
                                    <Button as={Link} to="/GuestCheckout" className="btn btn-sm btn-primary" >Guest Checkout</Button>
                                </form>
                            </div>
                        </div>
                        <div class="card mt-3 mb-3">
                            <div class="card-body cart">
                                <div class="col-sm-12 empty-cart-cls text-center">
                                    <img src={emptycart} width="130" height="130" class="img-fluid mb-4 mr-3" />
                                    <h3><strong>Your Cart is Empty</strong></h3>
                                    <h6 className="text-capitalize">Must Add all Items Before You proceed to Checkout </h6>
                                    <Link to="/productlist">
                                        <a className="btn text-capitalize mt-3 btn-outline-secondary border-300 me-2 shadow-none" data-abc="true">continue shopping</a>
                                    </Link>


                                </div>
                            </div>
                        </div>
                    </Col>
                </Container>
            </Row >
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default Cart