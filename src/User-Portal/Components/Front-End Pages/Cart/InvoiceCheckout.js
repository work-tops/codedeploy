import React from "react";
import { Button, Col, Navbar, Row, Container, Nav, NavDropdown } from "react-bootstrap";
import paypal from '../../Projectimages/paypal.png'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Link } from "react-router-dom";
import payment_methods from '../../Projectimages/payment_methods.png'
import sheild from '../../Projectimages/shield.png'
function InvoiceCheckout() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container className="mt-4">
                    <Col lg={12}>
                        <div className="row g-3">

                            <div className="col-xl-12">
                                <div className="card mb-3">
                                    <div className="card-header bg-light">
                                        <h5 className="mb-0">Payment Method</h5>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-check mb-0"><input className="form-check-input" type="radio" value="" id="credit-card" name="payment-method" /><label className="form-check-label mb-2 fs-1" for="credit-card">Credit Card</label></div>
                                            <div className="row gx-0 ps-2 mb-4">
                                                <div className="col-sm-8 px-3">
                                                    <div className="mb-3"><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Card Number</label><input className="form-control" id="inputNumber" type="text" placeholder="•••• •••• •••• ••••" /></div>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">Exp Date</label><input className="form-control" type="text" placeholder="mm/yyyy" /></div>
                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">CVV<a className="d-inline-block" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Card verification value" data-bs-original-title="Card verification value">
                                                            <span className="fa fa-question-circle ms-2"></span></a></label><input className="form-control" type="text" placeholder="123" maxlength="3" pattern="[0-9]{3}" /></div>
                                                    </div>
                                                </div>
                                                <div className="col-4 ps-3 text-center pt-2 d-none d-sm-block">
                                                    <div className="rounded-1 p-2 mt-3 bg-100">
                                                        <div className="text-uppercase fs--2 fw-bold">We Accept</div><img src={payment_methods} alt="" width="120" />
                                                    </div>
                                                </div>
                                                <div className="form-check mb-0"><input className="form-check-input" type="radio" value="" id="credit-card" name="payment-method" /><label className="form-check-label mb-2 fs-1" for="credit-card">Debit Card</label></div>
                                                <div className="col-sm-8 px-3">
                                                    <div className="mb-3"><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Card Number</label><input className="form-control" id="inputNumber" type="text" placeholder="•••• •••• •••• ••••" /></div>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">Exp Date</label><input className="form-control" type="text" placeholder="mm/yyyy" /></div>
                                                        <div className=""><label className="form-label ls text-uppercase text-600 fw-semi-bold mb-0">CVV<a className="d-inline-block" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Card verification value" data-bs-original-title="Card verification value">
                                                            <span className="fa fa-question-circle ms-2"></span></a></label><input className="form-control" type="text" placeholder="123" maxlength="3" pattern="[0-9]{3}" /></div>
                                                    </div>
                                                </div>
                                                <div className="col-4 ps-3 text-center pt-2 d-none d-sm-block">
                                                    <div className="rounded-1 p-2 mt-3 bg-100">
                                                        <div className="text-uppercase fs--2 fw-bold">We Accept</div><img src={payment_methods} alt="" width="120" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="form-check d-flex align-items-center"><input className="form-check-input" type="radio" value="" id="paypal" name="payment-method" /><label className="form-check-label mb-0 ms-2" for="paypal"><img src={paypal} height="20" alt="" /></label></div> */}
                                            <div className="border-bottom border-dashed my-5">
                                                <div className="row">
                                                    <div className="col-md-5 col-xl-12 col-xxl-5 ps-lg-4 ps-xl-2 ps-xxl-5 text-center text-md-start text-xl-center text-xxl-start">
                                                        <div className="border-bottom border-dashed d-block d-md-none d-xl-block d-xxl-none my-4"></div>
                                                        <div className="fs-2 fw-semi-bold">All Total: <span className="text-primary">£3320</span></div>
                                                        <Link to="/InvoicedueCard">
                                                            <button className="btn btn-success mt-3 px-5" type="submit">Confirm &amp; Pay</button>
                                                        </Link>
                                                        <p className="fs--1 mt-3 mb-0">By clicking <strong style={{ fontSize: "14px" }}>Confirm &amp; Pay </strong>button you agree to the <a href="#!">Terms &amp; Conditions</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Container>
            </Row>
        </>
    )
}
export default InvoiceCheckout