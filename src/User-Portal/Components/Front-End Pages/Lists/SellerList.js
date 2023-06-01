import { React, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Row, Col, Button, Modal, Form, Card, CardGroup, Container, Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import freelancer from '../../Projectimages/Freelancer.jpg'
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { getAllData } from "../../../../Services/ProxyService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../Footer/Footer";


function SellerList() {

    const [sellersList, setSellers] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getSellers = async () => {
        await getAllData('admin/users').then((res) => {
            var _response = res.data.users;
            var _sellers = _response.filter(x => x.role == "Freelancer");
            setSellers(_sellers);
        })

    }
    useEffect(() => {
        getSellers()
    }, [])
    // 
    const toastDanger = () => toast.success(<h6 className="text-sucess">Service Provider Added to Wishlist</h6>);
    return (

        <>
            
                <Row>
                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12} className="container">
                        <Card className="mt-5">
                            <Card.Header className="bg-light position-relative">
                                <h4 className="text-uppercase  mb-0 mt-1">Service Provider Lists</h4>
                            </Card.Header>
                            <Card.Body className="pt-0 mt-3 pt-md-3">
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
                                    <Col lg={6}>
                                        <Form className="position-relative">
                                            <Form.Control
                                                type="search"
                                                placeholder="Search..."
                                                // onChange={(e) => mainSearch(e)}
                                                size="sm"
                                                aria-label="Search"
                                                className="rounded search-input ps-4"
                                            />
                                            <FontAwesomeIcon
                                                icon="search"
                                                className="fs--1  text-400 position-absolute text-400 start-0 top-50 translate-middle-y ms-2"
                                            />
                                        </Form>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                        <Row className="">
                            {sellersList.map((data, index) => {
                                return <Col sm={12} md={6} xl={4} lg={4} >
                                    <Card className="mt-3 mb-1">
                                        <Card.Header className="bg-light">
                                            <div className="d-flex justify-content-end mt-2">
                                                <Dropdown
                                                    className="font-sans-serif btn-reveal-trigger"
                                                >
                                                    <Dropdown.Toggle
                                                        variant="link"
                                                        size="sm"
                                                        data-boundary="viewport"
                                                    >
                                                        <Icon className="d-block" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item><Icon icon="ion:copy-outline" hFlip={true} /> Copy Link</Dropdown.Item>
                                                        <Dropdown.Item><Icon icon="ic:baseline-facebook" /> Facebook</Dropdown.Item>
                                                        <Dropdown.Item><Icon icon="mdi:twitter" /> Twitter</Dropdown.Item>
                                                        <Dropdown.Item><Icon icon="ic:baseline-whatsapp" /> Whatsapp</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>


                                                <Icon onClick={toastDanger} icon="flat-color-icons:like" style={{ marginTop: '2px' }} className="cursor-pointer d-block" width="20" height="20" />
                                            </div>
                                        </Card.Header>
                                        <Link to="/ServiceInformation">
                                            {data.attachments.length > 0 ?
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" style={{ aspectRatio: '1.1', objectFit: 'cover', border: '1px solid #000' }} src={data.attachments[0]?.url} alt="Card image cap" /> :
                                                <Card.Img variant='top' className="img-fluid cursor-pointer" onClick={handleShow} style={{ aspectRatio: '1.1', objectFit: 'cover' }} src={freelancer} alt="Card image cap" />
                                            }
                                        </Link>
                                        <Card.Body style={{ maxWidth: '100%', height: 'auto%' }} className="m-3 card-body p-0 d-flex flex-column justify-content-between">
                                            <Link to="/ServiceInformation">
                                                <Card.Title className="text-justify" as='h5'>
                                                    {data.name}
                                                </Card.Title>
                                            </Link>
                                            <p className="text-justify">
                                                <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CAMBRIDGE</span>
                                            </p>
                                            <p className="text-justify" style={{ fontSize: '14px' }}>
                                                <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                                <span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span>
                                            </p>
                                            <Card.Text className="text-justify" style={{ fontSize: '14px' }}>
                                                Reliant Plumbing & Heating are a prompt, reliable and affordable
                                                Cambridge company that offers a variety of Plumbing
                                                solutions and services.
                                            </Card.Text>
                                            <div className="d-flex gap-2 justify-content-between">
                                                <Link to="/RequestQuote">
                                                    <Button className="text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                                </Link>
                                                <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            })}
                            <ToastContainer
                                position="top-right"
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                className="m-3"
                            />
                        </Row>
                    </Col>
                    <Col className="mt-3">
                        <Footer />
                    </Col>
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
                </div >
           
        </>
    )
}
export default SellerList