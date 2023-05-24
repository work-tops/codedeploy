import { React, useState } from "react";
import bathroom_fitting from '../../Projectimages/BathroomFitting.jpg'
import worktops from "../../Projectimages/worktops-installation.jpg"
import bricklaying from '../../Projectimages/bricklaying.jpg'
import carpenterwork from '../../Projectimages/carpenter-working-with-circular-saw.jpg'
import carpetFitting from '../../Projectimages/scenery-designers-work.jpg'
import Chimneys from '../../Projectimages/Chimneys.jpg'
import Conservatories from '../../Projectimages/Conservatories.jpg'
import Conversions from '../../Projectimages/Conversions.jpg'
import Damp_proofing from '../../Projectimages/Damp Proofing.jpg'
import Demolition_cleaning from '../../Projectimages/Demlotion & Cleaning.jpg'
import Driveways from '../../Projectimages/DriveWays.jpg'
import Electrical from '../../Projectimages/Electrical.jpg'
import Extensions from '../../Projectimages/Extensions.jpg'
import Fencing from '../../Projectimages/Fencing.jpg'
import Facias from '../../Projectimages/Facias.jpg'
import GroundWork from '../../Projectimages/GroundWork.jpg'
import Handyman from '../../Projectimages/Handyman.jpg'
import LandScaping from '../../Projectimages/Landscaping.jpg'
import Locksmiths from '../../Projectimages/Locksmiths.jpg'
import Flooring from '../../Projectimages/Flooring.jpg'
import Painting from '../../Projectimages/Painting.jpg'
import Plumbing from '../../Projectimages/Plumbing.jpg'
import Plastering from '../../Projectimages/Plastering.jpg'
import Restoration from '../../Projectimages/Restoration.jpg'
import Roofing from '../../Projectimages/Roofing.jpg'
import Tilling from '../../Projectimages/Tilling.jpg'
import Stonemasonary from '../../Projectimages/Stonemasonry.png'
import { Link } from "react-router-dom";
import Menubar from "../../Menubar/Menubar";
import Footer from "../../Footer/Footer";
import {
    Button,
    Card,
    Col,
    Image,
    Row,
    Form,
    OverlayTrigger,
    Tooltip,
    Modal,
    ListGroup, ListGroupItem, Container
} from 'react-bootstrap';
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import Flex from '../../../TemplateAssets/common/Flex';
import image from '../../../Components/Images/Granite.png'
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function ServiceList(layout) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <Row>


                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    {/* Location Modal */}
                    <div className='d-flex justify-content-between'>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>What is Your Location ?
                                    <p>
                                        It will help us to find the closest tradeperson to you.
                                    </p>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Control type='text' placeholder="Cambridge" className='w-100 mb-3' />
                                <Link to="/user/SellerList"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                            </Modal.Body>
                        </Modal>
                    </div>
                    {/*  */}
                    <Container>
                        <Row>
                            <Col lg={12} className="mt-5">
                                <Card className="">
                                    <Card.Header as="h4" className='bg-light text-justify  text-uppercase'>Service Lists</Card.Header>

                                    <Card.Body className="pt-0 pt-md-3">
                                        <Row className="g-3 mt-1 align-items-center">
                                            <Col xs="auto" className="d-xl-none">
                                                <Button
                                                    className="position-relative p-0"
                                                    size="sm"
                                                    variant="link"
                                                >
                                                    <FontAwesomeIcon icon="filter" className="fs-0 text-700" />
                                                </Button>
                                            </Col>
                                            <Col md={6} xl={6} lg={6} xs="auto">
                                                <Form className="position-relative">
                                                    <Form.Control
                                                        type="search"
                                                        placeholder="Search..."
                                                        size="sm"
                                                        aria-label="Search"
                                                        className="rounded search-input ps-4"
                                                    />
                                                    <FontAwesomeIcon
                                                        icon="search"
                                                        className="fs--1 text-400 position-absolute text-400 start-0 top-50 translate-middle-y ms-2"
                                                    />
                                                </Form>
                                            </Col>

                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <p className="text-center text-900 mt-3 mb-3">
                                From tree surgeons to tilers, from plumbers to plasterers, we have detailed advice on how to choose, hire and
                                work with tradespeople and ensure a successful project from start to finish.
                            </p>
                            <Container>
                                <Row >
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={worktops} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            worktops installation
                                                        </Link>
                                                    </h5>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={bathroom_fitting} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Bathroom Fitting
                                                        </Link>
                                                    </h5>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={carpenterwork} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Carpentry & Joinery
                                                        </Link>
                                                    </h5>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={bricklaying} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            bricklaying
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={carpetFitting} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Carpet Fitting
                                                        </Link>
                                                    </h5>
                                                </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Chimneys} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Chimneys & fireplaces
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Conservatories} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Conservatories
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Conversions} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Conversions
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Damp_proofing} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Damp proofing
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Demolition_cleaning} alt="Card image cap" />
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Demolition & Clearing
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Driveways} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Drive Ways
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Electrical} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Electrical
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Extensions} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Extensions
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Facias} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Fascias,soffits & guttering
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Fencing} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Fencing
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Flooring} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Flooring
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={GroundWork} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Groundwork & Foundations
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Handyman} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Handyman
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Locksmiths} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Lock Smiths
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Painting} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Painting & Decorating
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Plastering} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Plastering
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Plumbing} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Plumbing
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Restoration} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Restoration
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Roofing} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Roofing
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={LandScaping} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Landscape Gardening
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Stonemasonary} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Stonemasonry
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={12} md={6} xl={4} lg={4}>
                                        <Card className="mb-3">
                                            <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Tilling} alt="Card image cap" />
                                            <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                                <Card.Title className="m-3">
                                                    <h5 onClick={handleShow} className="fs-0 mb-2">
                                                        <Link
                                                            to="#"
                                                            style={{ fontSize: '1rem' }}
                                                            className="text-dark text-uppercase"
                                                        >
                                                            Tilling
                                                        </Link>
                                                    </h5></Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}
export default ServiceList
{/* <Row>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>
                    <h4 className="text-center fw-semibold mt-5">Services</h4>
                    <div className="d-flex justify-content-center align-items-center fw-semibold mt-2 w-100">
                        <p className="text-center w-75">
                            From tree surgeons to tilers, from plumbers to plasterers, we have detailed advice on how to choose, hire and
                            work with tradespeople and ensure a successful project from start to finish.
                        </p>
                    </div>
                    <Row className="align-items-center justify-content-center d-flex">
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={worktops} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Worktops Installation</p>
                                <div className='d-flex justify-content-between'>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>What is Your Post Code ?
                                                <p>
                                                    It will help us to find the closest tradeperson to you.
                                                </p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control type='text' placeholder="cb236dx" className='w-100 mb-3' />
                                            <Link to="/user/SellerList"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={bathroom_fitting} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Bathroom Fitting</p>
                                <div className='d-flex justify-content-between'>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>What is Your Post Code ?
                                                <p>
                                                    It will help us to find the closest tradeperson to you.
                                                </p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control type='text' placeholder="cb236dx" className='w-100 mb-3' />
                                            <Link to="/user/SellerList"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={bricklaying} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">BrickLaying</p>
                                <div className='d-flex justify-content-between'>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>What is Your Post Code ?
                                                <p>
                                                    It will help us to find the closest tradeperson to you.
                                                </p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control type='text' placeholder="cb236dx" className='w-100 mb-3' />
                                            <Link to="/user/SellerList"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={carpenterwork} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Carpentry & Joinery</p>
                                <div className='d-flex justify-content-between'>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>What is Your Post Code ?
                                                <p>
                                                    It will help us to find the closest tradeperson to you.
                                                </p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control type='text' placeholder="cb236dx" className='w-100 mb-3' />
                                            <Link to="/user/SellerList"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={carpetFitting} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Carpet Fitting</p>
                                <div className='d-flex justify-content-between'>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>What is Your Post Code ?
                                                <p>
                                                    It will help us to find the closest tradeperson to you.
                                                </p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control type='text' placeholder="cb236dx" className='w-100 mb-3' />
                                            <Link to="/user/SellerList"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Chimneys} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Chimneys & fireplaces</p>
                                <div className='d-flex justify-content-between'>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>What is Your Post Code ?
                                                <p>
                                                    It will help us to find the closest tradeperson to you.
                                                </p>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control type='text' placeholder="cb236dx" className='w-100 mb-3' />
                                            <Link to="/user/SellerList"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Conservatories} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Conservatories</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Conversions} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Conversions</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Damp_proofing} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Damp proofing</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Demolition_cleaning} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Demolition & Clearing</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Driveways} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Drive Ways</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Electrical} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Electrical</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Extensions} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Extensions</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Facias} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Fascias,soffits & guttering</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Fencing} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Fencing</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Flooring} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Flooring</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={GroundWork} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Groundwork & Foundations</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Handyman} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Handyman</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={LandScaping} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Landscape Gardening</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Locksmiths} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Lock Smiths</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Painting} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Painting & Decorating</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Plumbing} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Plumbing</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Plastering} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Plastering</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Restoration} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Restoration</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Roofing} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Roofing</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Stonemasonary} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Stonemasonry</p>

                            </div>
                        </Col>
                        <Col className="m-2" lg={3}>
                            <div className="mb-3">
                                <img src={Tilling} width="316" height="194px" />
                                <p onClick={handleShow} style={{ background: '#ebebeb' }} className="p-2 fw-semibold">Tilling</p>

                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row> */}