import { React, useState } from "react";
import { Row, Col, Button, Container, Card, Form, Modal } from "react-bootstrap";
import worktops from '../../Projectimages/worktops-installation.jpg'
import { Icon } from "@iconify/react";
import Divider from "../../../TemplateAssets/common/Divider";
import { Link } from "react-router-dom";
import freelancer from '../../Projectimages/Freelancer.jpg'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function ServiceInformation() {

    const [show, setShow] = useState(false);
    const [sellersList, setSellers] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

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
    // 

    return (
        <>

            <Row className="">
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-4 container mb-3">

                    <Card className="overflow-hidden light">
                        <Card.Body className="bg-dark">
                            <Row>
                                <Col xl={8} className="position-relative">
                                    <Row className="g-3 align-items-center">
                                        <Col lg={5}>
                                            <div className="position-relative text-center ">
                                                <img
                                                    src={freelancer}
                                                    className="w-100 rounded-1 overlay"
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={7}>
                                            <h2 className="fw-bold text-white">
                                                Reliant Plumbing and Heating
                                            </h2>
                                            <p className="text-justify text-white" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span></p>
                                            <p className="text-white fw-semi-bold fs--1">
                                                <span className="me-1">4.5</span>
                                                <span>
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                                    <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                                </span>
                                                <span className="text-info ms-2">
                                                    (78,259 reviews)
                                                </span>
                                            </p>

                                        </Col>
                                    </Row>
                                    <hr className="text-secondary text-opacity-50" />
                                    <ul className="list-unstyled d-flex flex-wrap gap-3 fs--1 fw-semi-bold text-300 mt-3 mb-0">

                                        <Link to="/user/sellerlist" className="text-300">
                                            <li role="button" className="text-primary">
                                                Back
                                            </li>
                                        </Link>

                                        {/* <Link to="/wishlist/seller" className="text-300"> */}
                                        <li role="button" onClick={toastDanger}>
                                            <Icon style={{ marginTop: '-5px' }} icon="flat-color-icons:like" className="text-white me-1" width="20" height="20" />
                                            Mark as Favourite
                                        </li>
                                        {/* </Link> */}
                                        <li role="button" className="text-primary">
                                            Next
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Row className="">
                    <Col lg={8} className="container">

                        {/* Service Images */}
                        <Card className="mb-3">
                            <Card.Header as="h5" className="bg-light">
                                Photo Gallery
                            </Card.Header>
                            <Card.Body className="position-relative">

                                <div className="d-inline-block m-2">
                                    <img src={worktops} width="150px" height="130px" />
                                </div>
                                <div className="d-inline-block m-2">
                                    <img src={worktops} width="150px" height="130px" />
                                </div>
                                <div className="d-inline-block m-2">
                                    <img src={worktops} width="150px" height="130px" />
                                </div>

                            </Card.Body>
                        </Card>
                        {/* Product Images */}


                        {/* Profile */}
                        <Card className="mb-3">
                            <Card.Header as="h5" className="bg-light">
                                Profile
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <p
                                    style={{ fontSize: '14px' }}
                                    className="text-justify"
                                >
                                    My name is Nick. I am the main tradesmen for Kentishbuilder.
                                    After reading my feedback you will see I am dedicated to my work.
                                    I always respect the customers wishes and work with them to
                                    achieve their results.
                                    Whatever the contract is worth I will give the same commitment.
                                    All the trades I use are
                                    from mybuilder and my family
                                    and I am on all my contracts from start to finish Let me help
                                    you with all your building contracts in 2021
                                </p>
                            </Card.Body>
                        </Card>
                        {/* Profile */}

                        {/* About company Reliant Plumbing and Heating */}
                        <Card className="mb-3">
                            <Card.Header as="h5" className="bg-light">
                                About company Reliant Plumbing and Heating
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <p
                                    style={{ fontSize: '14px' }}
                                    className="text-justify"
                                >
                                    I have been in the building industry for 45years since |
                                    left school. | have been a brick-layer for 40 years and have
                                    vast experience in all ground works,including patios,drainage,
                                    concreting, block-paving, re-pointing of house's.One of the contracts
                                    | worked on was the new building at canterbury college, Dover road. |
                                    completed all slabwork, one of my big slab contracts was to lay all the
                                    town centre in ashford of york-stone and granite sets. | am a very clean
                                    and tidy bricklayer and | have worked for many big companys doing sub-contract
                                    work including serco,wates, bovis and can supply any references required.| have done
                                    quite a few contracts for customers on mybuilder who work for the police.You will always
                                    see me on my contracts | do not sub contract work out to anyone unless the customer asks
                                    me if | could help find a tradesman that doest have my skills.| will
                                    always be honest loyal to you and always seek to make your contract easy going
                                    .Many thanks nick Kentishbuilder
                                </p>
                            </Card.Body>
                        </Card>
                        {/* About company Reliant Plumbing and Heating */}

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
                        {/* Skills */}
                        <Card className="mb-3">
                            <Card.Header as="h5" className="bg-light">
                                Skills
                            </Card.Header>
                            <Card.Body className="position-relative">
                                <ol>
                                    <li>Worktops Installation</li>
                                    <li>Bathroom Fitting</li>
                                    <li>Brick Laying</li>
                                    <li>Carpentry & Joinery</li>
                                    <li>Carpet Fitting</li>
                                    <li>Chimneys & fireplaces</li>
                                    <li>Plastering</li>
                                    <li>Handyman</li>
                                    <li>Tilling</li>
                                    <li>Stonemasonry</li>
                                </ol>
                            </Card.Body>
                        </Card>
                        {/* Skills */}
                        <Card className="mb-3">
                            <Card.Header className=" text-capitalize bg-light">
                                <h5 >
                                    Reviews
                                </h5>
                                <div className="d-flex gap-2 justify-content-end">
                                    <Button
                                        variant="falcon-default"
                                        size="sm"
                                        iconAlign="right"
                                        onClick={handleShow1}
                                        icon="filter"
                                        iconClassName="ms-1 fs--2"
                                    >
                                        Write Review
                                    </Button>
                                    <div>
                                        <Form.Select size="sm" defaultValue="">
                                            <option value="">Sort by</option>
                                            <option value="oldest">Oldest</option>
                                            <option value="newest">Newest</option>
                                            <option value="name">Name</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </Card.Header>
                            {/*  */}
                            {/* Review */}
                            <Modal
                                show={show1}
                                onHide={() => setShow1(false)}
                                dialogClassName="modal-lg modal-90w"
                                aria-labelledby="example-custom-modal-styling-title"
                            >
                                <Modal.Header>
                                    <h5 class="mb-3">Write your Review</h5>
                                </Modal.Header>
                                <Modal.Body>

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="rating">
                                            <Form.Label>Rating</Form.Label>
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
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your name"
                                                value={name}
                                                onChange={handleNameChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="reviewText">
                                            <Form.Label>Write your review</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={reviewText}
                                                onChange={handleReviewChange}
                                                required
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-end mt-3">
                                            <Button type="submit" onClick={handleClose1}>Submit</Button>
                                        </div>
                                    </Form>
                                </Modal.Body>
                            </Modal>
                            {/* Review */}
                            {/*  */}
                            <Card.Body className="py-0">

                                <Row className='g-3 align-items-center text-center text-md-start py-3'>
                                    <Col md="auto">
                                        <Link to="#!">
                                            <img width="80px" height="75px" className=" rounded-circle" src={worktops} />
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
                                                    <p className="mb-0 ms-1">
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
                            </Card.Body>
                            <Divider />
                            {/*  */}
                            <Card.Body className="py-0">

                                <Row className='g-3 align-items-center text-center text-md-start py-3'>
                                    <Col md="auto">
                                        <Link to="#!">
                                            <img width="80px" height="75px" className=" rounded-circle" src={worktops} />
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
                                                    <p className="mb-0 ms-1">
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
                    {/*  */}
                    <Col lg={4} className="container">
                        <div className="course-details-sticky-sidebar mb-lg-8 mt-xl-n10 pe-xl-4 pe-xxl-7">
                            {/* Plan Your Carrer */}
                            <Card className="mt-5">

                                <Card.Body>
                                    <Row>
                                        <Col md={7} lg={12} className="order-md-1 order-lg-0">


                                            <Button
                                                variant="primary"
                                                size="lg"
                                                onClick={handleShow}
                                                className="mb-3 w-100 fs-0 mt-1"
                                            >
                                                Message Me                                                    </Button>

                                            <Link to="/RequestQuote">
                                                <Button
                                                    style={{ background: '#003f6b' }}
                                                    size="lg"
                                                    className="w-100 fs-0 mt-1"
                                                >
                                                    Request a Quote
                                                </Button>
                                            </Link>

                                        </Col>
                                    </Row>
                                    <hr className="border-top border-dashed" />
                                    <h6 className="fw-bold">Share </h6>
                                    <div className="d-flex justify-content-start mt-4 mt-xxl-0">
                                        <ul className="list-unstyled mb-0 d-flex flex-wrap flex-xxl-column gap-3 justify-content-start">
                                            <li>
                                                <Button
                                                    className="text-800 border-0 bg-transparent fw-semi-bold font-base"
                                                    size="sm"
                                                    style={{ color: '#003f6b' }}
                                                >
                                                    <Icon icon="ant-design:global-outlined" className="me-1" style={{ marginTop: '-4px' }} color="#003f6b" width="20" height="20" />
                                                    Website
                                                </Button>
                                            </li>
                                            <li>
                                                <Button
                                                    className="text-800 border-0 bg-transparent fw-semi-bold font-base"
                                                    size="sm"
                                                    style={{ color: '#003f6b' }}
                                                >
                                                    <Icon className="me-1" icon="ic:sharp-facebook" style={{ marginTop: '-4px' }} color="#003f6b" width="20" height="20" />
                                                    Facebook
                                                </Button>
                                            </li>
                                            <li>
                                                <Button
                                                    className="text-800 border-0 bg-transparent fw-semi-bold font-base"
                                                    size="sm"
                                                    style={{ color: '#003f6b' }}
                                                >
                                                    <Icon className="me-1" style={{ marginTop: '-4px' }} icon="akar-icons:twitter-fill" color="#003f6b" width="20" height="20" />
                                                    Twitter
                                                </Button>
                                            </li>
                                            <li>
                                                <Button
                                                    className="text-800 border-0 bg-transparent fw-semi-bold font-base"
                                                    size="sm"
                                                    style={{ color: '#003f6b' }}
                                                >
                                                    <Icon className="me-1" style={{ marginTop: '-4px' }} icon="mdi:instagram" color="#003f6b" width="20" height="20" />
                                                    Instagram
                                                </Button>
                                            </li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                            {/*  */}
                        </div>
                    </Col>

                    {/*  */}
                </Row>
            </Row>

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
                                <Form.Label className="text-uppercase fw-semibold">
                                    What's the Message About ?<span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase fw-semibold">
                                    Message<span className="text-danger">*</span>
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
            </div >

            {/*  */}


        </>
    )
}
export default ServiceInformation

// <Row>
//                 <Col lg={12}>
//                     <div className="d-flex justify-content-between">
//                         <Link to="/user/SellerList">
//                             <Button className="bg-transparent border border-0 text-dark d-block m-4">Back to Result</Button>
//                         </Link>

//                         <Button className="bg-transparent border border-0 text-dark d-block m-4">Next Trade</Button>

//                     </div>
//                     <Container>
//                         <Row>
//                             <Col lg={12}>
//                                 <Row style={{ background: '#f2f2f2' }}>
//                                     <Col lg={3}>
//                                         <img src={freelancer} className="ms-5 mt-4 mb-4" width="160px" height="140px" />
//                                     </Col>
//                                     <Col lg={9}>
//                                         <p style={{ fontSize: '18px' }} className="text-justify mt-5 fw-bold">Reliant Plumbing and Heating</p>
//                                         <p className="text-justify" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
//                                         <p className="text-center" style={{ fontSize: '12px' }}></p>
//                                     </Col>
//                                 </Row>
//                                 <Row>
//                                     <Col lg={5} className="mt-4 ms-5" style={{ background: '#f2f2f2' }}>
//                                         <div className="m-3">
//                                             <Button className="mt-3 bg-transparent text-dark border-0">Profile</Button>
//                                             <Button className="mt-3 bg-transparent text-dark border-0">Reviews</Button>
//                                         </div>
//                                         <p className="m-3" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="fw-bold">
//                                                 Profile : </span> My name is Nick. I am the main tradesmen for Kentishbuilder. After reading my feedback you will see I am
//                                             dedicated to my work. I always respect the customers wishes and work with them to achieve their results.
//                                             Whatever the contract is worth I will give the same commitment.All the trades I use are from mybuilder
//                                             and my family and I am on all my contracts from start to finish Let me help you with all your building
//                                             contracts in 2021
//                                         </p>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                         <p className="m-3" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="fw-bold">
//                                                 Skills
//                                             </span>
//                                             <ol>
//                                                 <li>Worktops Installation</li>
//                                                 <li>Bathroom Fitting</li>
//                                                 <li>Brick Laying</li>
//                                                 <li>Carpentry & Joinery</li>
//                                                 <li>Carpet Fitting</li>
//                                                 <li>Chimneys & fireplaces</li>
//                                                 <li>Plastering</li>
//                                                 <li>Handyman</li>
//                                                 <li>Tilling</li>
//                                                 <li>Stonemasonry</li>
//                                             </ol>
//                                         </p>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                         <p className="m-3" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="fw-bold">
//                                                 Photo Gallery
//                                             </span>
//                                         </p>
//                                         <div className="mb-3" style={{ display: 'flex', flexDirection: 'row' }}>
//                                             <img src={worktops} width="75px" height="60px" className="d-block ms-3 mb-3" />
//                                             <img src={worktops} width="75px" height="60px" className="d-block ms-3 mb-3" />
//                                             <img src={worktops} width="75px" height="60px" className="border border-dark d-block ms-3 mb-3" />
//                                         </div>
//                                         <p className="m-3" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="d-block mb-3 fw-bold">
//                                                 About company Reliant Plumbing and Heating
//                                             </span>
//                                             I have been in the building industry for 45years since | left school. | have been a brick-layer for 40 years and have
//                                             vast experience in all ground works,including patios,drainage, concreting, block-paving, re-pointing of
//                                             house's.One of the contracts | worked on was the new building at canterbury college, Dover road. | completed all
//                                             slabwork, one of my big slab contracts was to lay all the town centre in ashford of york-stone and granite sets. |
//                                             am a very clean and tidy bricklayer and | have worked for many big companys doing sub-contract work including
//                                             serco,wates, bovis and can supply any references required.| have done quite a few contracts for customers on
//                                             mybuilder who work for the police.You will always see me on my contracts | do not sub contract work out to
//                                             anyone unless the customer asks me if | could help find a tradesman that doest have my skills.| will always be
//                                             honest loyal to you and always seek to make your contract easy going .Many thanks nick Kentishbuilder
//                                         </p>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                         <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="fw-bold">
//                                                 Review Title
//                                             </span>
//                                         </p>
//                                         <p className="ms-3">
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                         </p>
//                                         <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
//                                             Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
//                                             completed asap. Good quality work, professional and friendly.
//                                         </p>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                         <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="fw-bold">
//                                                 Review Title
//                                             </span>
//                                         </p>
//                                         <p className="ms-3">
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                         </p>
//                                         <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
//                                             Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
//                                             completed asap. Good quality work, professional and friendly.
//                                         </p>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                         <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="fw-bold">
//                                                 Review Title
//                                             </span>
//                                         </p>
//                                         <p className="ms-3">
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                         </p>
//                                         <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
//                                             Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
//                                             completed asap. Good quality work, professional and friendly.
//                                         </p>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                         <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
//                                             <span style={{ fontSize: "14px" }} className="fw-bold">
//                                                 Review Title
//                                             </span>
//                                         </p>
//                                         <p className="ms-3">
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                             <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
//                                         </p>
//                                         <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
//                                             Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
//                                             completed asap. Good quality work, professional and friendly.
//                                         </p>
//                                         <div className="m-3">
//                                             <Divider />
//                                         </div>
//                                     </Col>
//                                     <Col lg={5} className="mt-4 ms-5" style={{ background: '#f2f2f2', height: '300px' }}>
//                                         <div className="mb-3 mt-3 align-items-center justify-content-center d-flex">
//                                             <Icon className=" m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
//                                             <Link to="/wishlist/seller">
//                                                 <Icon className=" m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
//                                             </Link>
//                                         </div>
//                                         <div className="align-items-center justify-content-center d-flex">
//                                             <Button className="m-2 text-white border-0" style={{ background: "#0d406b" }}>Add to Cart</Button>
//                                         </div>
//                                         <div className="align-items-center justify-content-center d-flex">
//                                             <Link to="/RequestQuote">
//                                                 <Button className="m-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Request a Quote</Button>
//                                             </Link>
//                                         </div>
//                                     </Col>
//                                 </Row>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Col>
//             </Row>