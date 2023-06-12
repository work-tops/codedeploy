import React, { useState } from "react";
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import trainer from '../../Projectimages/trainer.png'
import { Row, Col, Image, Button, Nav, Form, Modal, Tab } from "react-bootstrap";
import { Icon } from "@iconify/react";
import freelancer from '../../Projectimages/Freelancer.jpg'
import { Link } from "react-router-dom";
import granite from '../../Images/Granite.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function PublicProfile() {

    // const [show, setShow] = useState(true);

    const toastDark = () => toast.success(<h6 className="text-sucess">Your Product is Successfully Added to Cart</h6>);
    const toastDanger = () => toast.success(<h6 className="text-sucess">Product Added to Wishlist</h6>);
    const toastDanger1 = () => toast.success(<h6 className="text-sucess">Added to Followers Wishlist</h6>);

    // 
    const [activeTab, setActiveTab] = useState('tab2');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    // 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <>
            <Row className="g-3">
                <Col lg={12} xl={12} className="mb-5" >
                    <NavbarStandard />
                </Col>
                <div className="row g-3">

                    <div className="col-lg-4 col-xl-3">
                        <div className="sticky-sidebar top-navbar-height">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row g-3 align-items-center">
                                        <div className="col-md-6 col-lg-12 text-center"><img className="img-fluid rounded-3" src={trainer} alt="" /></div>
                                        <div className="col-md-6 col-lg-12">
                                            <div className="row row-cols-1 g-0">
                                                <div className="col text-center">
                                                    <h4>Bill Finger </h4>
                                                    <h5 className="mb-1 text-800 fs-0">Artist | Comic Writer</h5>
                                                    <p className="mb-0 fs--1">National Comics Publications, NY, USA</p>
                                                </div>
                                                <div className="col mt-4 mt-md-5 mt-lg-4 order-md-1 order-lg-0">
                                                    <Link to="/chat">
                                                        <button className="btn btn-falcon-default btn-md mb-2 w-100" type="button">
                                                            <span className="fas fa-comment me-1"></span> Message
                                                        </button>
                                                    </Link>
                                                    <button onClick={toastDanger1} className="btn btn-primary btn-md w-100" type="button">
                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" /> Follow</button></div>
                                                <div className="col mt-4 mt-md-5 mt-lg-4">
                                                    <div className="row text-center">
                                                        <div className="col-6 border-sm-end border-300"><img className="mb-2" src={""} width="30" alt="" />
                                                            <h4 className="text-700" data-countup="{&quot;endValue&quot;:79563}">79,563</h4>
                                                            <h5 className="fw-normal mb-0">Following</h5>
                                                        </div>
                                                        <div className="col-6"><img className="mb-2" src={""} width="30" alt="" />
                                                            <h4 className="text-700" data-countup="{&quot;endValue&quot;:120302}">120,302</h4>
                                                            <h5 className="fw-normal mb-0">Followers</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xl-9">
                        <div className="card mb-3">
                            <div className="card-header bg-light">
                                <h5 className="text-uppercase mb-0">Introduction</h5>
                            </div>
                            <div className="card-body">
                                <div className="row flex-between-center">
                                    <div className="col-xxl-9 text-1000">
                                        <p>Milton Finger (born February 8, 1914), better known as Bill Finger, was an American comic strip, comic book, film, and television writer who co-created the DC Comics superhero character Batman (along with Bob Kane).</p>
                                        <p>A young, promising writer and part-time shoe dealer Finger, joined Kane's fledgling studio in 1938. Despite his significant (and often iconic) contributions as an imaginative writer, visionary mythos/world builder, and illustration creator, Finger was frequently reduced to ghostwriter status on a number of comics, including Batman and Green Lantern (Original Version).</p>
                                        <p>In 1994, Finger was welcomed into the Jack Kirby Hall of Fame, and in 1999, he was inducted into the Will Eisner Award Hall of Fame. In 1985, the company recognised Finger as one of the awardees in their 50th anniversary edition of Fifty Who Made DC Great. In 2014, Finger was posthumously awarded The Inkpot Award.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                            <Nav variant="tabs">

                                <Nav.Item>
                                    <Nav.Link className="text-uppercase" eventKey="tab2">Products</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="text-uppercase" eventKey="tab3">Services</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>

                                <Tab.Pane eventKey="tab2">
                                    <div className="card">
                                        <div className="card-header bg-light d-flex flex-between-center py-2">
                                            <h5 className="text-uppercase mb-0">Other Products Provided by Bill Finger</h5>
                                            <div><select className="form-select form-select-sm">
                                                <option value="" selected="selected">Sort by</option>
                                                <option value="oldest">Recently Added Products</option>
                                                <option value="newest">Exsisting Products</option>
                                                <option value="name">A-Z</option>
                                                <option value="name">Z-A</option>
                                            </select></div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row g-3">
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/productdetails/data._id">
                                                                        <div className="image-container aspect-ratio-1-1-1">
                                                                            <Image src={granite} fluid />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="text-uppercase fs-0 mb-2">
                                                                        <Link
                                                                            to="/productdetails/data._id"
                                                                            className="text-dark"
                                                                        >
                                                                            BLACK MIST PORCELAIN
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                        Porcelain
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
                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <h4 className="fs-1 text-warning d-flex align-items-center">
                                                                        <span>
                                                                            £ 307.21
                                                                        </span>
                                                                        <del className="ms-2 fs--1 text-700">
                                                                            £ 420
                                                                        </del>
                                                                    </h4>

                                                                    <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                    <Link to="/GetQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0 border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Get a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <Link to="/wishlist/product"> */}
                                                                    <a onClick={toastDanger} className="btn btn-sm btn-falcon-default me-2 hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a>
                                                                    {/* </Link> */}
                                                                    <a onClick={toastDark} className="btn btn-sm btn-falcon-default hover-primary" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Cart" data-bs-original-title="Add to Cart">
                                                                        <span className="fas fa-cart-plus" data-fa-transform="down-2"></span>
                                                                    </a>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/productdetails/data._id">
                                                                        <div className="image-container aspect-ratio-1-1-1">
                                                                            <Image src={granite} fluid />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="text-uppercase fs-0 mb-2">
                                                                        <Link
                                                                            to="/productdetails/data._id"
                                                                            className="text-dark"
                                                                        >
                                                                            BLACK MIST PORCELAIN
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                        Porcelain
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
                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <h4 className="fs-1 text-warning d-flex align-items-center">
                                                                        <span>
                                                                            £ 307.21
                                                                        </span>
                                                                        <del className="ms-2 fs--1 text-700">
                                                                            £ 420
                                                                        </del>
                                                                    </h4>

                                                                    <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                    <Link to="/GetQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0 border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Get a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <Link to="/wishlist/product"> */}
                                                                    <a onClick={toastDanger} className="btn btn-sm btn-falcon-default me-2 hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a>
                                                                    {/* </Link> */}
                                                                    <a onClick={toastDark} className="btn btn-sm btn-falcon-default hover-primary" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Cart" data-bs-original-title="Add to Cart">
                                                                        <span className="fas fa-cart-plus" data-fa-transform="down-2"></span>
                                                                    </a>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/productdetails/data._id">
                                                                        <div className="image-container aspect-ratio-1-1-1">
                                                                            <Image src={granite} fluid />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="text-uppercase fs-0 mb-2">
                                                                        <Link
                                                                            to="/productdetails/data._id"
                                                                            className="text-dark"
                                                                        >
                                                                            BLACK MIST PORCELAIN
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                        Porcelain
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
                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <h4 className="fs-1 text-warning d-flex align-items-center">
                                                                        <span>
                                                                            £ 307.21
                                                                        </span>
                                                                        <del className="ms-2 fs--1 text-700">
                                                                            £ 420
                                                                        </del>
                                                                    </h4>

                                                                    <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                    <Link to="/GetQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0 border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Get a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <Link to="/wishlist/product"> */}
                                                                    <a onClick={toastDanger} className="btn btn-sm btn-falcon-default me-2 hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a>
                                                                    {/* </Link> */}
                                                                    <a onClick={toastDark} className="btn btn-sm btn-falcon-default hover-primary" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Cart" data-bs-original-title="Add to Cart">
                                                                        <span className="fas fa-cart-plus" data-fa-transform="down-2"></span>
                                                                    </a>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/productdetails/data._id">
                                                                        <div className="image-container aspect-ratio-1-1-1">
                                                                            <Image src={granite} fluid />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="text-uppercase fs-0 mb-2">
                                                                        <Link
                                                                            to="/productdetails/data._id"
                                                                            className="text-dark"
                                                                        >
                                                                            BLACK MIST PORCELAIN
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                        Porcelain
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
                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <h4 className="fs-1 text-warning d-flex align-items-center">
                                                                        <span>
                                                                            £ 307.21
                                                                        </span>
                                                                        <del className="ms-2 fs--1 text-700">
                                                                            £ 420
                                                                        </del>
                                                                    </h4>

                                                                    <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                    <Link to="/GetQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0 border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Get a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <Link to="/wishlist/product"> */}
                                                                    <a onClick={toastDanger} className="btn btn-sm btn-falcon-default me-2 hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a>
                                                                    {/* </Link> */}
                                                                    <a onClick={toastDark} className="btn btn-sm btn-falcon-default hover-primary" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Cart" data-bs-original-title="Add to Cart">
                                                                        <span className="fas fa-cart-plus" data-fa-transform="down-2"></span>
                                                                    </a>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/productdetails/data._id">
                                                                        <div className="image-container aspect-ratio-1-1-1">
                                                                            <Image src={granite} fluid />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="text-uppercase fs-0 mb-2">
                                                                        <Link
                                                                            to="/productdetails/data._id"
                                                                            className="text-dark"
                                                                        >
                                                                            BLACK MIST PORCELAIN
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                        Porcelain
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
                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <h4 className="fs-1 text-warning d-flex align-items-center">
                                                                        <span>
                                                                            £ 307.21
                                                                        </span>
                                                                        <del className="ms-2 fs--1 text-700">
                                                                            £ 420
                                                                        </del>
                                                                    </h4>

                                                                    <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                    <Link to="/GetQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0 border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Get a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <Link to="/wishlist/product"> */}
                                                                    <a onClick={toastDanger} className="btn btn-sm btn-falcon-default me-2 hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a>
                                                                    {/* </Link> */}
                                                                    <a onClick={toastDark} className="btn btn-sm btn-falcon-default hover-primary" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Cart" data-bs-original-title="Add to Cart">
                                                                        <span className="fas fa-cart-plus" data-fa-transform="down-2"></span>
                                                                    </a>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/productdetails/data._id">
                                                                        <div className="image-container aspect-ratio-1-1-1">
                                                                            <Image src={granite} fluid />
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <div className="d-flex gap-2 flex-wrap mb-3">
                                                                        <span className="badge rounded-pill badge-soft-success">
                                                                            <span>In Stock</span>
                                                                        </span>
                                                                        <span className="badge rounded-pill badge-soft-danger">
                                                                            <span>Out of Stock</span>
                                                                        </span>
                                                                    </div>
                                                                    <h4 className="text-uppercase fs-0 mb-2">
                                                                        <Link
                                                                            to="/productdetails/data._id"
                                                                            className="text-dark"
                                                                        >
                                                                            BLACK MIST PORCELAIN
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                                                        Porcelain
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
                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <h4 className="fs-1 text-warning d-flex align-items-center">
                                                                        <span>
                                                                            £ 307.21
                                                                        </span>
                                                                        <del className="ms-2 fs--1 text-700">
                                                                            £ 420
                                                                        </del>
                                                                    </h4>

                                                                    <p className="mb-0 fs--1 text-800"> 92,632 Members Purchased</p>
                                                                    <Link to="/GetQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0 border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Get a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <Link to="/wishlist/product"> */}
                                                                    <a onClick={toastDanger} className="btn btn-sm btn-falcon-default me-2 hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" /><Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a>
                                                                    {/* </Link> */}
                                                                    <a onClick={toastDark} className="btn btn-sm btn-falcon-default hover-primary" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Cart" data-bs-original-title="Add to Cart">
                                                                        <span className="fas fa-cart-plus" data-fa-transform="down-2"></span>
                                                                    </a>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                {/* pagination */}
                                                <div className="card mt-3">
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
                                            </div>
                                        </div>

                                    </div>

                                </Tab.Pane>
                                <Tab.Pane eventKey="tab3">
                                    <div className="card">
                                        <div className="card-header bg-light d-flex flex-between-center py-2">
                                            <h5 className="text-uppercase mb-0">Other Services Provided by Bill Finger</h5>
                                            <div className="d-flex justify-content-end gap-2">
                                                <select className="form-select form-select-sm">
                                                    <option value="" selected="selected">Sort by Category</option>
                                                    <option value="oldest">Pumbing</option>
                                                    <option value="newest">Roofing</option>
                                                    <option value="name">Worktops Installation</option>
                                                    <option value="name">Bricklaying</option>
                                                </select>

                                                <select className="form-select form-select-sm">
                                                    <option value="" selected="selected">Sort by Location</option>
                                                    <option value="oldest">Derbyshire</option>
                                                    <option value="newest">Leeds</option>
                                                    <option value="name">Manchester</option>
                                                    <option value="name">Hampshire</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="row mt-1 mb-3 g-3">
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/ServiceInformation">
                                                                        {/* {data.attachments.length > 0 ? */}
                                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                                        {/* } */}
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="text-900" to="/ServiceInformation">
                                                                            {/* {data.name} */}
                                                                            JAGAN SELLER
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="text-justify">
                                                                        <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span>
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
                                                                    <p className="text-justify fs--1 mt-2 w-100 d-none d-lg-block" style={{ fontSize: '14px' }}>
                                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                                        Cambridge company that offers a variety of Plumbing
                                                                        solutions and services.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <Link to="/RequestQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Request a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <a onClick={toastDanger1} className="btn btn-sm btn-falcon-default hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                                                        <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a> */}
                                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                                        <span className="fas fa-comment me-1"></span>
                                                                    </a>

                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/ServiceInformation">
                                                                        {/* {data.attachments.length > 0 ? */}
                                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                                        {/* } */}
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="text-900" to="/ServiceInformation">
                                                                            {/* {data.name} */}
                                                                            JAGAN SELLER
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="text-justify">
                                                                        <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span>
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
                                                                    <p className="text-justify fs--1 mt-2 w-100 d-none d-lg-block" style={{ fontSize: '14px' }}>
                                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                                        Cambridge company that offers a variety of Plumbing
                                                                        solutions and services.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <Link to="/RequestQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Request a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <a onClick={toastDanger1} className="btn btn-sm btn-falcon-default hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                                                        <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a> */}
                                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                                        <span className="fas fa-comment me-1"></span>
                                                                    </a>

                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/ServiceInformation">
                                                                        {/* {data.attachments.length > 0 ? */}
                                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                                        {/* } */}
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="text-900" to="/ServiceInformation">
                                                                            {/* {data.name} */}
                                                                            JAGAN SELLER
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="text-justify">
                                                                        <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span>
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
                                                                    <p className="text-justify fs--1 mt-2 w-100 d-none d-lg-block" style={{ fontSize: '14px' }}>
                                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                                        Cambridge company that offers a variety of Plumbing
                                                                        solutions and services.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <Link to="/RequestQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Request a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <a onClick={toastDanger1} className="btn btn-sm btn-falcon-default hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                                                        <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a> */}
                                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                                        <span className="fas fa-comment me-1"></span>
                                                                    </a>

                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/ServiceInformation">
                                                                        {/* {data.attachments.length > 0 ? */}
                                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                                        {/* } */}
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="text-900" to="/ServiceInformation">
                                                                            {/* {data.name} */}
                                                                            JAGAN SELLER
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="text-justify">
                                                                        <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span>
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
                                                                    <p className="text-justify fs--1 mt-2 w-100 d-none d-lg-block" style={{ fontSize: '14px' }}>
                                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                                        Cambridge company that offers a variety of Plumbing
                                                                        solutions and services.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <Link to="/RequestQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Request a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <a onClick={toastDanger1} className="btn btn-sm btn-falcon-default hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                                                        <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a> */}
                                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                                        <span className="fas fa-comment me-1"></span>
                                                                    </a>

                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/ServiceInformation">
                                                                        {/* {data.attachments.length > 0 ? */}
                                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                                        {/* } */}
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="text-900" to="/ServiceInformation">
                                                                            {/* {data.name} */}
                                                                            JAGAN SELLER
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="text-justify">
                                                                        <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span>
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
                                                                    <p className="text-justify fs--1 mt-2 w-100 d-none d-lg-block" style={{ fontSize: '14px' }}>
                                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                                        Cambridge company that offers a variety of Plumbing
                                                                        solutions and services.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <Link to="/RequestQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Request a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <a onClick={toastDanger1} className="btn btn-sm btn-falcon-default hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                                                        <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a> */}
                                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                                        <span className="fas fa-comment me-1"></span>
                                                                    </a>

                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article className="col-md-6 col-lg-6 col-xl-4">
                                                    <div className="card h-100 overflow-hidden">
                                                        <div style={{ maxWidth: '100%', height: '100%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                            <div>
                                                                <div>
                                                                    <Link to="/ServiceInformation">
                                                                        {/* {data.attachments.length > 0 ? */}
                                                                        {/* <Image variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover' }} alt="Service Provider Profile" /> : */}
                                                                        <Image variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Service Provider Profile" />
                                                                        {/* } */}
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3">
                                                                    <h4 className="mt-3 text-start text-uppercase mt-sm-0 fs-0 fs-lg-1">
                                                                        <Link className="text-900" to="/ServiceInformation">
                                                                            {/* {data.name} */}
                                                                            JAGAN SELLER
                                                                        </Link>
                                                                    </h4>
                                                                    <p className="text-justify">
                                                                        <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span>
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
                                                                    <p className="text-justify fs--1 mt-2 w-100 d-none d-lg-block" style={{ fontSize: '14px' }}>
                                                                        Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                                        Cambridge company that offers a variety of Plumbing
                                                                        solutions and services.
                                                                    </p>

                                                                </div>
                                                            </div>
                                                            <div className="row g-0 mb-3 align-items-end">
                                                                <div className="col ps-3">
                                                                    <Link to="/RequestQuote">
                                                                        <Button
                                                                            size="md"
                                                                            variant="falcon-default"
                                                                            style={{ background: '#003f6b' }}
                                                                            className="fs--1 border-0  border-0 text-600 mt-3 text-white"

                                                                        >
                                                                            Request a Quote
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="col-auto pe-3">
                                                                    {/* <a onClick={toastDanger1} className="btn btn-sm btn-falcon-default hover-danger" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to Wishlist" data-bs-original-title="Add to Wishlist">
                                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                                                        <Icon style={{ marginTop: '-5px' }} className="me-1" icon="icon-park-solid:like" color="#df2020" width="20" height="20" />
                                                                    </a> */}
                                                                    <a onClick={handleShow} className="btn ms-1 btn-sm btn-falcon-default" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Message Me" data-bs-original-title="Message Me">
                                                                        <span className="fas fa-comment me-1"></span>
                                                                    </a>

                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            {/* pagination */}
                                            <div className="card mt-3">
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
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                        {/*  */}

                    </div>

                </div>

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
                {/*  */}

                {/*  */}
                {/* Message Me - Modal */}
                < div className='d-flex justify-content-between' >
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-lg modal-90w"

                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Contact Reliant Plumbing and Heating</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">
                                        What's the Message About ?
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">
                                        Message
                                    </Form.Label>
                                    <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check type="checkbox" className="mb-0 mt-3">
                                        <Form.Check.Input type="checkbox" />
                                        <Form.Check.Label
                                            className="text-700 d-inline"
                                        >
                                            I Agree to the terms and conditions.
                                        </Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>
                            </Form>
                            <Button as={Link} to="/owner" className="m-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>
                                SEND
                            </Button>
                        </Modal.Body>
                    </Modal>
                </div>
                {/* Message Me */}
                {/*  */}
            </Row>
        </>
    )
}
export default PublicProfile