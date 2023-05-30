import React, { useState } from "react";
import { Card, Button, Col, Row, Container, Modal, Form, Image } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import product_image from '../../Projectimages/7.jpg'
import { Icon } from "@iconify/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Flex from "../../../TemplateAssets/common/Flex";
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
                        <Card className="overflow-hidden mb-3 mt-3">
                            <Card.Header className="bg-light d-flex justify-content-end">
                                <><Icon onClick={() => setShowModal(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" role="button" /></>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Row className="g-0">
                                    <Col md={4} lg={3}>
                                        <Link to={`productdetails/`}>
                                            <Image src={product_image} alt="" className="w-100 h-100 fit-cover" />
                                        </Link>
                                    </Col>
                                    <Col md={8} lg={9} className="p-x1">
                                        <Row className="g-0 h-100">
                                            <Col lg={8}>
                                                <div className="d-flex gap-2 flex-wrap mb-3">
                                                    <span className="badge rounded-pill badge-soft-success">
                                                        <span>In Stock</span>
                                                    </span>
                                                    <span className="badge rounded-pill badge-soft-danger">
                                                        <span>Out of Stock</span>
                                                    </span>
                                                </div>
                                                <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                    <Link className="text-900" to={`productdetails/`}>
                                                        FANTASY BROWN GRANITE
                                                    </Link>
                                                </h4>
                                                <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                    Granite
                                                </p>
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
                                            </Col>
                                            <Col lg={4} className=" mt-lg-0">

                                                <Flex
                                                    justifyContent="between"
                                                    className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                                >
                                                    <div className="mb-lg-4 mt-auto mt-lg-0">
                                                        <h3 className=" text-warning d-flex align-items-center">
                                                            <span style={{ color: '#f68f57' }}>£ 285.48</span>

                                                            <del className="ms-2 fs--1 text-700">£ 400</del>
                                                        </h3>
                                                        <p className="mb-0 fs--1 text-800">
                                                            92,632 Members Purchased
                                                        </p>
                                                    </div>
                                                    <Flex className="mt-3 flex-lg-column gap-2">
                                                        {/* <Link to="/Cart"> */}
                                                        <Button
                                                            size="md"
                                                            variant="primary"
                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"
                                                            onClick={toastDark}
                                                        >
                                                            <span className="fas me-1 fa-cart-plus" data-fa-transform="down-2"></span> Add to Cart
                                                        </Button>


                                                        <Link to="/GetQuote">
                                                            <Button
                                                                size="md"
                                                                variant="falcon-default"
                                                                style={{ background: '#003f6b' }}
                                                                className="fs--1 border-0 text-600 text-white white-space-nowrap w-100"

                                                            >
                                                                Get a Quote
                                                            </Button>
                                                        </Link>
                                                    </Flex>
                                                </Flex>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </Card.Body >
                        </Card>
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
                        />
                        <Card className="overflow-hidden mb-3">
                            <Card.Header className="bg-light d-flex justify-content-end">
                                <><Icon onClick={() => setShowModal(true)} className="hover-danger" icon="solar:trash-bin-minimalistic-2-bold" role="button" /></>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Row className="g-0">
                                    <Col md={4} lg={3}>
                                        <Link to={`productdetails/`}>
                                            <Image src={product_image} alt="" className="w-100 h-100 fit-cover" />
                                        </Link>
                                    </Col>
                                    <Col md={8} lg={9} className="p-x1">
                                        <Row className="g-0 h-100">
                                            <Col lg={8}>
                                                <div className="d-flex gap-2 flex-wrap mb-3">
                                                    <span className="badge rounded-pill badge-soft-success">
                                                        <span>In Stock</span>
                                                    </span>
                                                    <span className="badge rounded-pill badge-soft-danger">
                                                        <span>Out of Stock</span>
                                                    </span>
                                                </div>
                                                <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                    <Link className="text-900" to={`productdetails/`}>
                                                        FANTASY BROWN GRANITE
                                                    </Link>
                                                </h4>
                                                <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                    Granite
                                                </p>
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
                                            </Col>
                                            <Col lg={4} className=" mt-lg-0">

                                                <Flex
                                                    justifyContent="between"
                                                    className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                                >
                                                    <div className="mb-lg-4 mt-auto mt-lg-0">
                                                        <h3 className=" text-warning d-flex align-items-center">
                                                            <span style={{ color: '#f68f57' }}>£ 285.48</span>

                                                            <del className="ms-2 fs--1 text-700">£ 400</del>
                                                        </h3>
                                                        <p className="mb-0 fs--1 text-800">
                                                            92,632 Members Purchased
                                                        </p>
                                                    </div>
                                                    <Flex className="mt-3 flex-lg-column gap-2">
                                                        {/* <Link to="/Cart"> */}
                                                        <Button
                                                            size="md"
                                                            variant="primary"
                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"
                                                            onClick={toastDark}
                                                        >
                                                            <span className="fas me-1 fa-cart-plus" data-fa-transform="down-2"></span> Add to Cart
                                                        </Button>


                                                        <Link to="/GetQuote">
                                                            <Button
                                                                size="md"
                                                                variant="falcon-default"
                                                                style={{ background: '#003f6b' }}
                                                                className="fs--1 border-0 text-600 text-white white-space-nowrap w-100"

                                                            >
                                                                Get a Quote
                                                            </Button>
                                                        </Link>
                                                    </Flex>
                                                </Flex>

                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                                {/*  */}
                                <Modal show={showModal} onHide={handleClose}>
                                    <Modal.Header >
                                        <Modal.Title>Warning</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className="text-capitalize">
                                            Are you sure you want to remove this Product from your wishlist?
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




                            </Card.Body >
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
export default WishListProductCard