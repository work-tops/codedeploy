import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Card, Modal, Form, ProgressBar, ButtonGroup, Breadcrumb } from "react-bootstrap";
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import { getAllData } from "../../../Services/ProxyService";
import worktops from '../Projectimages/7.jpg'
import { Divider } from "@mui/material";
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../Footer/Footer";
import { Editor } from "@tinymce/tinymce-react";

function ProductDetails() {

    let { proid } = useParams();
    const [prodata, setProdata] = useState([])

    const getProById = async () => {
        const response = await getAllData('product/' + proid);
        setProdata(response.data.product);
    }
    useEffect(() => {
        getProById()
    }, [])

    // 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Review
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the review submission
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Review:', reviewText);
        console.log('Rating:', rating);
        setName('');
        setEmail('');
        setReviewText('');
        setRating(0);
    };
    // Review

    // 
    const toastDark = () => toast.success(<h6 className="text-sucess">Your Product is Successfully Added to Cart</h6>);
    const toastDanger = () => toast.success(<h6 className="text-sucess">Product Added to Wishlist</h6>);
    const editorRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const changeActiveIndex = (index) => {
        setActiveIndex(index);
    };
    // 
    // 
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToWishlist = () => {
        setIsAdded(true);
        const toastDanger = () => toast.success(<h6 className="text-sucess">Product Added to Wishlist</h6>);

        toastDanger();
    };

    const handleRemoveFromWishlist = () => {
        setIsAdded(false);
        const toastDanger1 = () => toast.error(<h6 className="text-dark">Product Removed from Wishlist</h6>)
        toastDanger1();
    };

    // 


    return (
        <>

            <Row >
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>

                <Col lg={12} className="mt-4 container mb-3">
                    <Card className="overflow-hidden light">
                        <Card.Header className="bg-dark mb-0">
                            <div className="d-flex  justify-content-center">
                                <Breadcrumb>
                                    <Breadcrumb.Item as={Link} to="/">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item as={Link} to="/productlist">Products</Breadcrumb.Item>
                                    <Breadcrumb.Item as={Link} to="/productdetails/data._id">Product Name</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                        </Card.Header>
                        <Card.Body className="bg-dark">
                            <Row>
                                <Col sm={12} md={12} lg={8} xl={8} className=" position-relative">
                                    <Row className="g-3  align-items-center">
                                        <Col md={5} lg={5}>
                                            {prodata.attachments?.map((data, key) => (
                                                <div
                                                    key={key}
                                                    className={`image-slide ${activeIndex === key ? 'active' : ''}`}
                                                >
                                                    <img className="w-100 rounded-1 overlay" src={data.url} width={400} height={219} alt={`Image ${key}`} />
                                                </div>
                                            ))}
                                        </Col>
                                        <Col md={7} lg={7}>
                                            <h1 className="fw-bold text-white">{prodata.name}</h1>
                                            <div className="fw-semi-bold fs--1">
                                                <span className="me-1 text-white me-2">4.9</span>
                                                <div className="d-inline-block ">
                                                    <span className="fa fa-star text-warning"></span>
                                                    <span className="fa fa-star text-warning"></span>
                                                    <span className="fa fa-star text-warning"></span>
                                                    <span className="fa fa-star text-warning"></span>
                                                    <span className="fa fa-star-half-alt text-warning star-icon"></span>
                                                </div>
                                                <span className="ms-2 text-primary">(78,259 reviews)</span>
                                            </div>
                                            <div style={{ fontSize: '14px' }} className="mt-3 text-white">
                                                <span className="fw-bold me-1">SKU :</span>
                                                <span className="fw-semibold">
                                                    HOBCRT - 700480
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr className="text-secondary text-opacity-50" />
                                    <ul className="list-unstyled d-flex flex-wrap gap-3 fs--1 fw-semi-bold text-300 mt-3 mb-0">
                                        <li role="button" className="text-primary">
                                            Previous
                                        </li>
                                        <>
                                            {isAdded ? (
                                                <li
                                                    onClick={handleRemoveFromWishlist}
                                                    role='button'
                                                    style={{ fontSize: '14px' }}
                                                    className="text-justify fw-semibold"
                                                    href="#!"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    aria-label="Remove from Wishlist"
                                                    data-bs-original-title="Remove from Wishlist"
                                                >
                                                    <span>
                                                        <Icon icon="icon-park-solid:like" className="me-1" style={{ marginTop: '-2px', color: '#df2020' }} width="20" height="20" />Remove from Wishlist
                                                    </span>
                                                </li>
                                            ) : (
                                                <li
                                                    onClick={handleAddToWishlist}
                                                    role='button'
                                                    style={{ fontSize: '14px' }}
                                                    className="text-justify fw-semibold"
                                                    href="#!"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-placement="top"
                                                    aria-label="Add to Wishlist"
                                                    data-bs-original-title="Add to Wishlist"
                                                >
                                                    <span>
                                                        <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-2px' }} width="20" height="20" />Add to Wishlist
                                                    </span>
                                                </li>
                                            )}
                                        </>

                                        {/* </Link> */}
                                        {/* Wishlist Toast */}
                                        <Link to="/productdetails/:proid">
                                            <li role="button" className="text-primary">
                                                Next
                                            </li>
                                        </Link>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>


                <Row >
                    <Col className="container order-lg-0 order-2 " sm={12} lg={8} xl={8} md={12}>

                        {/* Product Images */}
                        <Card className="mb-3">
                            <Card.Header as="h5" className="bg-light text-uppercase">
                                Product Images
                            </Card.Header>
                            <Card.Body className="position-relative">
                                {prodata.attachments?.map((data, key) => (
                                    <div
                                        key={key}
                                        className={`thumb-slide ${activeIndex === key ? 'active' : ''} d-inline-block`}
                                        onClick={() => changeActiveIndex(key)}
                                    >
                                        <img src={data.url} width="150px" height="120px" alt={`Thumbnail ${key}`} />
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                        {/* Product Images */}


                        {/* Description */}
                        <Card className="mb-3">
                            <Card.Header as="h5" className="bg-light text-uppercase">
                                Description
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <p
                                    style={{ fontSize: '14px' }}
                                    className="text-justify"
                                >
                                    {prodata.description}
                                </p>
                            </Card.Body>
                        </Card>
                        {/* Description */}


                        {/* Disclaimer */}
                        <Card className="mb-3">
                            <Card.Header as="h5" className="bg-light text-uppercase">
                                Refund Policy
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <p
                                    style={{ fontSize: '14px' }}
                                    className="text-justify"
                                >
                                    {prodata.policy}
                                </p>
                            </Card.Body>
                        </Card>
                        {/* Reviews */}
                        <Card className="mb-3">
                            <Card.Header className=" text-capitalize bg-light">
                                <h5 className="text-uppercase">
                                    Reviews (60)
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex gap-2 mt-2 justify-content-lg-end">
                                    <Button
                                        variant="falcon-default"
                                        size="sm"
                                        onClick={handleShow}
                                    >
                                        Write Review
                                    </Button>
                                    <div title="Excellent">
                                        <Form.Select className="cursor-pointer" size="sm" defaultValue="">
                                            <option value="">Sort by</option>
                                            <option value="oldest">Old</option>
                                            <option value="newest">New</option>
                                            <option value="name">A-Z</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div>
                                    <Form.Label>Filter By:</Form.Label>
                                    <div title="Awesome">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div>
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div title="Average">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div title="Good">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">

                                                <FaStar color="#f68f57" />
                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                    <div title="Poor">
                                        <Form.Check type="checkbox" className="mb-0">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="cursor-pointer"
                                            />
                                            <Form.Check.Label className="mb-0 text-700">

                                                <FaStar color="#f68f57" />
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="mb-3">
                            <Card.Body className="py-0">
                              
                                <Row className='g-3 align-items-center text-center text-md-start py-3'>
                                    <Col md="auto">
                                        <Link to="#!">
                                            <div class="avatar avatar-2xl">
                                                <div class="avatar-name rounded-circle"><span>EW</span></div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col xs={12}>
                                                <h6 className="fs-0">
                                                    <Link to="#!" className="me-2">
                                                        Emma Watson
                                                    </Link>
                                                    <span>
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                                    </span>
                                                </h6>
                                            </Col>
                                            <Col md={10}>
                                                <p className="fs--1 text-800">
                                                    Excellent Course for any beginner like me :p
                                                    The trainer was very generous and helped whenever DMed.
                                                </p>
                                            </Col>
                                            <Col xs={12}>

                                                <div
                                                    className="d-flex align-items-center
                                                    flex-column
                                                     flex-md-row gap-2
                                                      fs--2 text-600"
                                                >
                                                    <h6 className="fs--2 text-600 mb-0">3 Days Ago</h6>
                                                    <p style={{ fontSize: "14px" }} className="fw-semibold mb-0 ms-1">
                                                        230 people found this helpful
                                                    </p>
                                                </div>
                                                {/* </Flex> */}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="auto" className="d-flex justify-content-center gap-2">
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-primary"
                                        >
                                            <FontAwesomeIcon icon="thumbs-up" className="fs--2" />
                                        </Button>
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-secondary"
                                        >
                                            <FontAwesomeIcon
                                                icon="thumbs-up"
                                                transform="rotate-180"
                                                className="fs--2"
                                            />
                                        </Button>
                                    </Col>
                                </Row>
                                <Card className="mb-3" style={{ background: '#f3f3f3' }}>
                                    <Card.Header className="d-flex justify-content-between">
                                        <h6><Icon icon="mdi:reply-outline" width="24" height="24" hFlip={true} vFlip={true} />Reply from MAI</h6>
                                        <span className="fs--1 fw-semibold">01/01/2023</span>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="text-justify fs--1">
                                            Thank you for this awesome review, Michael.
                                            We're so pleased to know that you love your new Urban Concrete Quartz worktops and have had a truly positive experience from start to finish with MAI.com.
                                            
                                                Thank you for choosing us.
                                                We would love to serve your friends and family as well.
                                            
                                            
                                                Thanks and regards,
                                                Team MAI
                                            
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                            <Divider />
                            {/*  */}
                            <Card.Body className="py-0">

                                <Row className='g-3 align-items-center text-center text-md-start py-3'>
                                    <Col md="auto">
                                        <Link to="#!">
                                            <div class="avatar avatar-2xl">
                                                <div class="avatar-name rounded-circle"><span>L</span></div>
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Row>
                                            <Col xs={12}>
                                                <h6 className="fs-0">
                                                    <Link to="#!" className="me-2">
                                                        Lee
                                                    </Link>
                                                    <span>
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                                    </span>
                                                </h6>
                                            </Col>
                                            <Col md={10}>
                                                <p className="fs--1 text-800">
                                                    Excellent Course for any beginner like me :p
                                                    The trainer was very generous and helped whenever DMed.
                                                </p>
                                            </Col>
                                            <Col xs={12}>

                                                <div
                                                    className="d-flex align-items-center
                                                    flex-column
                                                     flex-md-row gap-2
                                                      fs--2 text-600"
                                                >
                                                    <h6 className="fs--2 text-600 mb-0">3 Days Ago</h6>
                                                    <p style={{ fontSize: "14px" }} className="fw-semibold mb-0 ms-1">
                                                        230 people found this helpful
                                                    </p>
                                                </div>
                                                {/* </Flex> */}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="auto" className="d-flex justify-content-center gap-2">
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-primary"
                                        >
                                            <FontAwesomeIcon icon="thumbs-up" className="fs--2" />
                                        </Button>
                                        <Button
                                            variant="falcon-default"
                                            type="button"
                                            size="sm"
                                            className="icon-item focus-bg-secondary"
                                        >
                                            <FontAwesomeIcon
                                                icon="thumbs-up"
                                                transform="rotate-180"
                                                className="fs--2"
                                            />
                                        </Button>
                                    </Col>
                                </Row>
                                <Card className="mb-3" style={{ background: '#f3f3f3' }}>
                                    <Card.Header className="d-flex justify-content-between">
                                        <h6><Icon icon="mdi:reply-outline" width="24" height="24" hFlip={true} vFlip={true} />Reply from MAI</h6>
                                        <span className="fs--1 fw-semibold">01/01/2023</span>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="text-justify fs--1">
                                            Thank you for this awesome review, Michael.
                                            We're so pleased to know that you love your new Urban Concrete Quartz worktops and have had a truly positive experience from start to finish with MAI.com.
                                            
                                                Thank you for choosing us.
                                                We would love to serve your friends and family as well.
                                            
                                                Thanks and regards,
                                                Team MAI
                                            
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                            <Card.Footer className="bg-light text-end py-2">
                                <p
                                    className="fw-medium mt-2"
                                    role="button"
                                    style={{ color: '#003f6b' }}
                                >
                                    See All Reviews
                                </p>

                            </Card.Footer>
                        </Card>

                        {/*  */}
                    </Col>
                    <Col className="container" lg={4}>

                        <div className="order-md-1 order-lg-0 course-details-sticky-sidebar mb-lg-8 mt-xl-n10 pe-xl-4 pe-xxl-7">
                            {/* Plan Your Carrer */}
                            <Card className="mt-lg-5 mt-md-0 mb-3 overflow-hidden">
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12} className="order-md-1  order-lg-0">
                                            <h2 className="fw-medium mb-3 d-flex align-items-center">
                                                £ {prodata.variant?.[0]?.pricing?.price}
                                                {' '}
                                                <del className="ms-2 fs--1 text-500">£ {prodata.variant?.[0]?.pricing?.compare_at}</del>
                                                <span style={{ background: '#ff4242', fontSize: '12px' }} className="badge ms-2">{Math.round(100 - (prodata.variant?.[0]?.pricing?.price / prodata.variant?.[0]?.pricing?.compare_at * 100))}%</span>
                                            </h2>
                                            {/* <p className="text-danger fs--1 fw-semi-bold">
                                                    <FontAwesomeIcon icon={['far', 'clock']} className="me-2" />
                                                    Sale ends in 13h : 25m : 54s
                                                </p> */}


                                            <Button
                                                onClick={toastDark}
                                                variant="primary"
                                                size="lg"
                                                className="mb-3 w-100 fs-0 mt-1"
                                            >
                                                Add to Cart
                                            </Button>

                                            {/* Cart Toast */}
                                            <ToastContainer
                                                position="bottom-right"
                                                autoClose={1000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                            />
                                            {/*  */}
                                            <Link to="/GetQuote">
                                                <Button
                                                    style={{ background: '#003f6b' }}
                                                    size="lg"
                                                    className="w-100 mb-3 Home-btns-1 fs-0 mt-1"
                                                >
                                                    Get Quote
                                                </Button>
                                            </Link>
                                            {/* <p className="text-700 fw-medium fs--1 mt-3 mb-0">
                                                    14 day Refund Policy
                                                </p> */}
                                        </Col>
                                        <Col className="order-1 order-lg-0" md={12} lg={12}>
                                            <hr className="border-top border-dashed d-md-none d-lg-block" />
                                            <Form.Group className="mb-3">
                                                {/* <h6 className="fw-bold">Colour</h6> */}
                                                <Form.Label className="text-700 text-uppercase">Colour<span className="ms-1 text-danger">*</span></Form.Label>
                                                <Form.Select className="cursor-pointer">
                                                    <option value="">Select</option>
                                                    {prodata.variant?.map((data, key) => (
                                                        <option key={key} value={data.color}>{data.color}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                {/* <h6 className="fw-bold">Size</h6> */}
                                                <Form.Label className="text-700 text-uppercase">Size<span className="ms-1 text-danger">*</span></Form.Label>
                                                <Form.Select className="cursor-pointer">
                                                    <option value="">Select</option>
                                                    {prodata.variant?.map((data, key) => (
                                                        <option key={key} value={data.size}>{data.size}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                {/* <h6 className="fw-bold">Finish Type</h6> */}
                                                <Form.Label className="text-700 text-uppercase">Finish Type<span className="ms-1 text-danger">*</span></Form.Label>
                                                <Form.Select className="cursor-pointer">
                                                    <option value="">Select</option>
                                                    {prodata.variant?.map((data, key) => (
                                                        <option key={key} value={data.finish_type}>{data.finish_type}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                {/* <h6 className="fw-bold">Finish Type</h6> */}
                                                <Form.Label className="text-700 text-uppercase">Quantity<span className="ms-1 text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    placeholder="0"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <hr className="border-top border-dashed" />
                                    <h6 className="fw-bold">Share </h6>
                                    <div className="d-flex justify-content-start mt-4 mt-xxl-0">
                                        <ul className="list-unstyled mb-0 d-flex flex-wrap flex-xxl-column gap-3 justify-content-start">

                                            <div class="d-flex gap-2">
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <FontAwesomeIcon style={{ width: '1rem', height: '1rem' }} icon="fa-solid fa-copy" />
                                                </button>
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <span class="fs-0 fab fa-facebook-f mr-1 text-primary"></span></button>
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <span class="fs-0 fab fa-twitter mr-1 text-twitter"></span>
                                                </button>
                                                <button class="btn btn-falcon-default icon-item fs--2 icon-item-lg">
                                                    <span class="fs-0 fab fa-linkedin-in mr-1 text-info"></span>
                                                </button>
                                            </div>
                                        </ul>
                                    </div>

                                </Card.Body>
                            </Card>
                            {/*  */}
                        </div>

                    </Col>
                </Row>
            </Row >
            {/* Review */}
            < Modal
                show={show}
                onHide={() => setShow(false)
                }
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <h5 className="text-uppercase">Write your Review</h5>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="rating">
                            <Form.Label className="text-700 text-uppercase">Rating<span className="ms-1 text-danger">*</span></Form.Label>
                            <div className="star-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className={star <= rating ? 'star selected' : 'star'}
                                        onClick={() => handleStarClick(star)}
                                    />
                                ))}
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label className="text-700 text-uppercase">Name<span className="ms-1 text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className="text-700 text-uppercase">Email<span className="ms-1 text-danger">*</span></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="reviewText">
                            <Form.Label className="text-700 text-uppercase">Write your review<span className="ms-1 text-danger">*</span></Form.Label>
                            {/* <Form.Control
                                as="textarea"
                                rows={3}
                                value={reviewText}
                                onChange={handleReviewChange}
                                required
                            /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                initialValue=""

                                init={{

                                    height: 200,
                                    menubar: false,
                                    // plugins: [
                                    //     'advlist autolink lists link image charmap print preview anchor',
                                    //     'searchreplace visualblocks code fullscreen',
                                    //     'insertdatetime media table paste code help wordcount'
                                    // ],
                                    toolbar: 'undo redo | formatselect | ' +
                                        'bold italic  | alignleft aligncenter ' +
                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                        'removeformat ',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                }}
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end mt-3">
                            <Button type="submit" onClick={handleClose}>Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal >
            {/* Review */}
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default ProductDetails
