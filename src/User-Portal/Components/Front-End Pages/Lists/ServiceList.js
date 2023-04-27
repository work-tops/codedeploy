import { React, useState } from "react";
import bathroom_fitting from '../../Project images/Bathroom Fitting.jpg'
import worktops from "../../Project images/worktops-installation.jpg"
import bricklaying from '../../Project images/bricklaying.jpg'
import carpenterwork from '../../Project images/carpenter-working-with-circular-saw.jpg'
import carpetFitting from '../../Project images/scenery-designers-work.jpg'
import Chimneys from '../../Project images/Chimneys.jpg'
import Conservatories from '../../Project images/Conservatories.jpg'
import Conversions from '../../Project images/Conversions.jpg'
import Damp_proofing from '../../Project images/Damp Proofing.jpg'
import Demolition_cleaning from '../../Project images/Demlotion & Cleaning.jpg'
import Driveways from '../../Project images/DriveWays.jpg'
import Electrical from '../../Project images/Electrical.jpg'
import Extensions from '../../Project images/Extensions.jpg'
import Fencing from '../../Project images/Fencing.jpg'
import Facias from '../../Project images/Facias.jpg'
import GroundWork from '../../Project images/GroundWork.jpg'
import Handyman from '../../Project images/Handyman.jpg'
import LandScaping from '../../Project images/Landscaping.jpg'
import Locksmiths from '../../Project images/Locksmiths.jpg'
import Flooring from '../../Project images/Flooring.jpg'
import Painting from '../../Project images/Painting.jpg'
import Plumbing from '../../Project images/Plumbing.jpg'
import Plastering from '../../Project images/Plastering.jpg'
import Restoration from '../../Project images/Restoration.jpg'
import Roofing from '../../Project images/Roofing.jpg'
import Tilling from '../../Project images/Tilling.jpg'
import Stonemasonary from '../../Project images/Stonemasonry.png'
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
function ServiceList() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <h4 className="text-center fw-semibold mt-5">Services</h4>
            <p className="text-center fw-semibold mt-2 w-100">
                From tree surgeons to tilers, from plumbers to plasterers, we have detailed advice on how to choose, hire and
                work with tradespeople and ensure a successful project from start to finish.
            </p>
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
                                    <Form.Control type='text'  placeholder="enter your postcode" className='w-100 mb-3' />
                                    <Button className='btn btn-outline-success text-light'>Search</Button>
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
                                    <Form.Control type='text' placeholder="enter your postcode" className='w-100 mb-3' />
                                    <Button className='btn btn-outline-success text-light'>Search</Button>
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
                                    <Form.Control type='text'  placeholder="enter your postcode"  className='w-100 mb-3' />
                                    <Button className='btn btn-outline-success text-light'>Search</Button>
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
                                    <Form.Control type='text' placeholder="enter your postcode" className='w-100 mb-3' />
                                    <Button className='btn btn-outline-success text-light'>Search</Button>
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
                                    <Form.Control type='text' placeholder="enter your postcode" className='w-100 mb-3' />
                                    <Button className='btn btn-outline-success text-light'>Search</Button>
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
                                    <Form.Control type='text' placeholder="enter your postcode" className='w-100 mb-3' />
                                    <Button className='btn btn-outline-success text-light'>Search</Button>
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
        </>
    )
}
export default ServiceList