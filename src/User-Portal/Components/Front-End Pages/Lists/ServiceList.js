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
                            <Link to="/service/categories"><Button className='btn btn-outline-success text-light'>Search</Button></Link>
                        </Modal.Body>
                    </Modal>
                </div>
                {/*  */}
                <Container>
                    <Row>
                        <Col lg={12} className="mt-5">
                            <Card className="">
                                <Card.Header as="h4" className='bg-light text-justify  '>Service Lists</Card.Header>

                                <Card.Body className="pt-0 pt-md-3">
                                    <Row className="g-3 mt-1 align-items-center">
                                        <Col xs="auto" className="d-none">
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={worktops} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={bathroom_fitting} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={carpenterwork} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={bricklaying} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={carpetFitting} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Chimneys} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Conservatories} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Conversions} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Damp_proofing} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
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
                                            <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Demolition_cleaning} alt="Card image cap" />
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Demolition & Clearing
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Driveways} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Drive Ways
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Electrical} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Electrical
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Extensions} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Extensions
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Facias} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Fascias,soffits & guttering
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Fencing} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Fencing
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Flooring} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Flooring
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={GroundWork} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Groundwork & Foundations
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Handyman} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Handyman
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Locksmiths} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Lock Smiths
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Painting} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Painting & Decorating
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Plastering} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Plastering
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Plumbing} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Plumbing
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Restoration} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Restoration
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">

                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Roofing} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Roofing
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={LandScaping} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Landscape Gardening
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Stonemasonary} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Stonemasonry
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={12} md={6} xl={4} lg={4}>
                                    <Card className="mb-3">
                                        <Card.Img loading="lazy" variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={Tilling} alt="Card image cap" />
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="card-body p-0 d-flex flex-column justify-content-between">
                                            <Card.Title className="m-3">
                                                <h5 onClick={handleShow} className="fs-0 mb-2">
                                                    <Link
                                                        to="#"
                                                        style={{ fontSize: '1rem' }}
                                                        className="text-dark "
                                                    >
                                                        Tilling
                                                    </Link>
                                                </h5></Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                                    {/* pagination */}
                                    <div className="card mb-3">
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
                        </Container>
                    </Row>
                </Container>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default ServiceList
