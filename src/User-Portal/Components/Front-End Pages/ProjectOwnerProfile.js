import React, { useState, useRef } from "react";
import { Row, Col, Tab, Nav, Button, Dropdown, InputGroup, Modal, Form, Card } from "react-bootstrap";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import trainer from '../Projectimages/trainer.png'
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar } from 'react-icons/fa';
import { Divider } from "@mui/material";

function ProjectOwnerProfile() {

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
    // 
    const editorRef = useRef(null);

    const [activeTab, setActiveTab] = useState('tab3');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const [show, setShow] = useState(false);
    const [sellersList, setSellers] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-5">
                    <div className="row ms-3 me-3 mb-3 g-3">
                        <div className="col-lg-4 mb-3 col-xl-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row g-3 align-items-center">
                                        <div className="col-md-6 col-lg-12 text-center"><img className="img-fluid rounded-3" src={trainer} alt="" /></div>
                                        <div className="col-md-6 col-lg-12">
                                            <div className="row row-cols-1 g-0">
                                                <div className="col text-center">
                                                    <h4>Bill Finger </h4>
                                                    <p className="mb-0 text-center fs--1">Sheldon,United Kingdom</p>
                                                </div>
                                                {/*</svg>*/}
                                                <div className="col mt-4 mt-md-5 mt-lg-4 order-md-1 order-lg-0">
                                                    <button onClick={handleShow2} className="btn btn-primary btn-md w-100" type="button">
                                                        Contact
                                                    </button>
                                                </div>
                                                <div className="col mt-4 mt-md-5 mt-lg-4">
                                                    <div className="row text-center">
                                                        <div className="col-6 border-sm-end border-300"><img className="mb-2" src={""} width="30" alt="" />
                                                            <h5 className="fw-normal mb-0">Project Listed</h5>
                                                            <h5 className="text-700 mt-2" >10</h5>
                                                        </div>
                                                        <div className="col-6"><img className="mb-2" src={""} width="30" alt="" />
                                                            <h5 className="fw-normal mb-0">Traders Worked</h5>
                                                            <h5 className="text-700 mt-2" >3</h5>
                                                        </div>
                                                        <p onClick={handleShow1} className="text-primary text-center mt-3" role="button">Report this Profile</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mb-3 col-xl-9">
                            {/* <div className="card">
                                <div className="card-body">
                                    
                                </div>
                            </div> */}
                            <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
                                <Nav variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link className="text-uppercase" eventKey="tab3">Reviews</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="text-uppercase" eventKey="tab2">My Projects</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>

                                    <Tab.Pane eventKey="tab2">
                                        <div className="card">
                                            <div className="card-header bg-light">
                                                <div className="d-flex justify-content-between">
                                                    <h5>My Projects</h5>
                                                    <div>
                                                        <Form.Select>
                                                            <option>All</option>
                                                            <option>Open</option>
                                                            <option>InProgress</option>
                                                            <option>Expired</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <div className="card-header bg-light">
                                                                <h5>I WANT TO REPLACE MY BATHROOM SINK</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="">
                                                                    What's Needed To Install A Kitchen Sink? To Install A Kitchen Sink,
                                                                    You'll Need An Adjustable Pipe Wrench And Socket Wrench, A Small
                                                                    Putty Knife And A Utility Knife. In Addition To All Of The Hardware
                                                                    Included With Your New Sink, You'll Want To Make Sure You Grab Some
                                                                    Plumber's Putty And Silicone Caulk.
                                                                </p>
                                                                <p style={{ color: '#003f6b', fontSize: '16px' }} className=" fw-bold">Client Budget<span className="ms-2 text-success text-center fw-bold">£ 200</span></p>
                                                                <InputGroup className="d-flex  justify-content-center mb-3">
                                                                    <Button as={Link} to="/jobdetails/:jobid" className="text-uppercase  border-0" style={{ background: '#003f6b', fontSize: '14px' }}>View</Button>
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle style={{ background: '#003f6b', border: "none" }}>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item as={Link} className="text-success" to="/proposal-list">View Proposals</Dropdown.Item>
                                                                            <Dropdown.Item as={Link} className="text-primary" to="/EditPostProject">Edit</Dropdown.Item>
                                                                            <Dropdown.Item as={Link} className="text-warning" to="/RepostProject">Repost</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </InputGroup>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <div className="card-header bg-light">
                                                                <h5>I WANT TO REPLACE MY BATHROOM SINK</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="">
                                                                    What's Needed To Install A Kitchen Sink? To Install A Kitchen Sink,
                                                                    You'll Need An Adjustable Pipe Wrench And Socket Wrench, A Small
                                                                    Putty Knife And A Utility Knife. In Addition To All Of The Hardware
                                                                    Included With Your New Sink, You'll Want To Make Sure You Grab Some
                                                                    Plumber's Putty And Silicone Caulk.
                                                                </p>
                                                                <p style={{ color: '#003f6b', fontSize: '16px' }} className=" fw-bold">Client Budget<span className="ms-2 text-success text-center fw-bold">£ 200</span></p>
                                                                <InputGroup className="d-flex  justify-content-center mb-3">
                                                                    <Button as={Link} to="/jobdetails/:jobid" className="text-uppercase  border-0" style={{ background: '#003f6b', fontSize: '14px' }}>View</Button>
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle style={{ background: '#003f6b', border: "none" }}>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item as={Link} className="text-success" to="/proposal-list">View Proposals</Dropdown.Item>
                                                                            <Dropdown.Item as={Link} className="text-primary" to="/EditPostProject">Edit</Dropdown.Item>
                                                                            <Dropdown.Item as={Link} className="text-warning" to="/RepostProject">Repost</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </InputGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="card">
                                                            <div className="card-header bg-light">
                                                                <h5>I WANT TO REPLACE MY BATHROOM SINK</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="">
                                                                    What's Needed To Install A Kitchen Sink? To Install A Kitchen Sink,
                                                                    You'll Need An Adjustable Pipe Wrench And Socket Wrench, A Small
                                                                    Putty Knife And A Utility Knife. In Addition To All Of The Hardware
                                                                    Included With Your New Sink, You'll Want To Make Sure You Grab Some
                                                                    Plumber's Putty And Silicone Caulk.
                                                                </p>
                                                                <p style={{ color: '#003f6b', fontSize: '16px' }} className=" fw-bold">Client Budget<span className="ms-2 text-success text-center fw-bold">£ 200</span></p>
                                                                <InputGroup className="d-flex  justify-content-center mb-3">
                                                                    <Button as={Link} to="/jobdetails/:jobid" className="text-uppercase  border-0" style={{ background: '#003f6b', fontSize: '14px' }}>View</Button>
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle style={{ background: '#003f6b', border: "none" }}>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item as={Link} className="text-success" to="/proposal-list">View Proposals</Dropdown.Item>
                                                                            <Dropdown.Item as={Link} className="text-primary" to="/EditPostProject">Edit</Dropdown.Item>
                                                                            <Dropdown.Item as={Link} className="text-warning" to="/RepostProject">Repost</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </InputGroup>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab3">

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
                                                    <div>
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
                                                    <div title="Excellent">
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
                                            {/*  */}
                                            <Modal
                                                show={show}
                                                onHide={() => setShow(false)}
                                                dialogClassName="modal-lg modal-90w"
                                                aria-labelledby="example-custom-modal-styling-title"
                                            >
                                                <Modal.Header closeButton>
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

                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </Col>
            </Row>
            {/*  */}

            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                backdrop="static"
                dialogClassName="modal-md modal-90w"
                centered
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <h4>Warning</h4>
                </Modal.Header>
                <Modal.Body>
                    He is not an approved trader of MAI, Thus you cannot make Contact
                </Modal.Body>
            </Modal>



            <Modal
                show={show1}
                onHide={() => setShow1(false)}
                backdrop="static"
                dialogClassName="modal-md modal-90w"
                centered
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <h5 className='text-uppercase mb-3 text-center'>Report this Profile</h5>
                </Modal.Header>
                <Modal.Body>
                    <h6 style={{ fontSize: '16px' }} className='text-900 mb-3 mt-3'>Why You are reporting to this profile</h6>
                    {/*  */}
                    <Form>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className="d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Profile includes contact details to take projects outside of MAI
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                User wants to take/make a payment outside of MAI
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                User wants to discuss work that I feel breaks the terms of MAI
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className="d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Offensive Content
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Spam or Misleading Content
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="radio" className="mb-0 mt-3">
                            <Form.Check.Input name="job-start" type="radio" />
                            <Form.Check.Label
                                className=" d-inline"
                                style={{ fontSize: '14px' }}
                            >
                                Others
                            </Form.Check.Label>
                        </Form.Check>
                        {/*  */}
                        <Form.Group className='mt-3 mb-3'>
                            <Form.Label>
                                Details :
                            </Form.Label>
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
                        <div className='d-flex justify-content-end'>
                            <Button onClick={handleClose1} style={{ background: '#003f6b' }}>Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/*  */}
        </>
    )
}
export default ProjectOwnerProfile