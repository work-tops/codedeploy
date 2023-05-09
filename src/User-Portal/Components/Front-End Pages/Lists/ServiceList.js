import { React, useState } from "react";
import bathroom_fitting from '../../Projectimages/Bathroom Fitting.jpg'
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
    ListGroup, ListGroupItem
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
                {/* Post Code Modal */}
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
                {/*  */}




                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12} className="mt-5">
                    <Card className="mb-3 d-flex justify-content-between m-4">
                        <Card.Header className="bg-white position-relative">
                            <h6 className="mb-0 mt-1 text-uppercase">Services Lists</h6>
                        </Card.Header>
                        <Card.Body className="pt-0 pt-md-3">
                            <Row className="g-3 align-items-center">
                                <Col xs="auto" className="d-xl-none">
                                    <Button
                                        className="position-relative p-0"
                                        size="sm"
                                        variant="link"
                                    >
                                        <FontAwesomeIcon icon="filter" className="fs-0 text-700" />
                                    </Button>
                                </Col>
                                <Col>
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
                                <Col xs="auto" className="col-md">
                                    <Row className="g-0 justify-content-end">
                                        <Col xs="auto" className="p-0">
                                            <Row className="g-2 align-items-center">
                                                <Col xs="auto" className="d-none d-lg-block">
                                                    <small className='me-2'>View :</small>
                                                </Col>
                                                <Col xs="auto">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip>Course Grid</Tooltip>}
                                                    >
                                                        <Link
                                                            to="#"
                                                            className={`me-3 ${layout === 'grid' ? 'text-700' : 'text-400 hover-700'
                                                                }`}
                                                        >
                                                            <Icon icon="material-symbols:grid-on-sharp" width="24" height="24" />
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={<Tooltip>Course List</Tooltip>}
                                                    >
                                                        <Link
                                                            to="#"
                                                            className={`me-2 ${layout === 'list' ? 'text-700' : 'text-400 hover-700'
                                                                }`}
                                                        >
                                                            <Icon icon="material-symbols:format-list-bulleted-rounded" width="24" height="24" />
                                                        </Link>
                                                    </OverlayTrigger>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="d-flex justify-content-center align-items-center fw-semibold mt-2 w-100">
                    <p className="text-center mb-3 w-75">
                        From tree surgeons to tilers, from plumbers to plasterers, we have detailed advice on how to choose, hire and
                        work with tradespeople and ensure a successful project from start to finish.
                    </p>
                </div>

                {/*Service List Grid  */}
                <Row className="d-flex justify-content-around gap-2 align-items-center">
                   
                <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={worktops} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    worktops installation
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={bathroom_fitting} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Bathroom Fitting
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={bricklaying} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    bricklaying
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={carpenterwork} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Carpentry & Joinery
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={carpetFitting} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Carpet Fitting
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Chimneys} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Chimneys & fireplaces
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Conservatories} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Conservatories
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Conversions} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Conversions
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Damp_proofing} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Damp proofing
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Demolition_cleaning} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Demolition & Clearing
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Driveways} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Drive Ways
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Electrical} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Electrical
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Extensions} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Extensions
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Facias} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Fascias,soffits & guttering
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Fencing} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Fencing
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Flooring} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Flooring
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={GroundWork} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Groundwork & Foundations
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Handyman} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Handyman
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={LandScaping} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Landscape Gardening
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Locksmiths} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Lock Smiths
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Painting} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Painting & Decorating
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Plumbing} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Plumbing
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Plastering} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Plastering
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Restoration} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Restoration
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Roofing} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Roofing
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Stonemasonary} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Stonemasonry
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={5} className='mb-3'>
                        <Card style={{ width: '527px' }} className=" overflow-hidden">
                            <Card.Body
                                as={Flex}
                                direction=""
                                justifyContent="between"
                                className="p-0"
                            >
                                <div>
                                    <Col lg={12}>
                                        <Image src={Tilling} width="527px" height="275px" alt="" className="fit-cover" />
                                        <div className="p-3">
                                            <h5 onClick={handleShow} className="fs-0 mb-2">
                                                <Link
                                                    to="#"
                                                    style={{ fontSize: '1rem' }}
                                                    className="text-dark text-uppercase"
                                                >
                                                    Tilling
                                                </Link>
                                            </h5>
                                        </div>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*  */}
                </Row>
            </Row>

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