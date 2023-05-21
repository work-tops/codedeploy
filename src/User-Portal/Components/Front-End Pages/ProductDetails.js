import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card, Modal,Form, Container } from "react-bootstrap";
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { Link, useParams } from "react-router-dom";
import { getAllData } from "../../../Services/ProxyService";
import worktops from '../Projectimages/7.jpg'
import { Divider } from "@mui/material";
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


    return (
        <>
            <Container>
                <Row className="g-lg-3">
                    <Col lg={12} className="mb-5">
                        <NavbarStandard />
                    </Col>
                    <Col lg={12} className="mt-4 mb-3">
                        <Card className="overflow-hidden light">
                            <Card.Body className="bg-dark">
                                <Row>
                                    <Col sm={12} md={12} lg={8} xl={8} className="position-relative">
                                        <Row className="g-3 align-items-center">
                                            <Col lg={5}>
                                                <div className="position-relative text-center ">
                                                    <img
                                                        src={prodata.attachments?.[0]?.url}
                                                        className="w-100 rounded-1 overlay"
                                                    />
                                                </div>
                                            </Col>
                                            <Col lg={7}>
                                                <h2 className="fw-bold text-white">{prodata.name}</h2>
                                                <p className="text-white fw-semi-bold fs--1">
                                                    <span className="me-1">4.8</span>
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
                                            
                                            <Link to="/productlist" className="text-300">
                                                <li role="button" className="text-primary">
                                                    Back
                                                </li>
                                            </Link>
                                            
                                            <Link to="/wishlist/product" className="text-300">
                                                <li role="button">
                                                    <Icon style={{ marginTop: '-5px' }} icon="flat-color-icons:like" className="text-white me-1" width="20" height="20" />
                                                    Mark as Favourite
                                                </li>
                                            </Link>

                                            <li role="button" className="text-primary">
                                                Next
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Row >
                        <Col sm={12} lg={8} xl={8} md={12}>
                            {/* Product Images */}
                            <Card className="mb-3">
                                <Card.Header as="h5" className="bg-light">
                                    Product Images
                                </Card.Header>
                                <Card.Body className="position-relative">
                                    {prodata.attachments?.map((data, key) => (
                                        <div key={key} className="d-inline-block m-2">
                                            <div>
                                                <img src={data.url} width="150px" height="130px" />
                                            </div>
                                        </div>
                                    ))}
                                </Card.Body>
                            </Card>
                            {/* Product Images */}


                            {/* Description */}
                            <Card className="mb-3">
                                <Card.Header as="h5" className="bg-light">
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
                                <Card.Header as="h5" className="bg-light">
                                    Disclaimer
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
                            {/* Disclaimer */}
                            <Card className="mb-3">
                                <Card.Header className="d-flex justify-content-between text-capitalize bg-light">
                                    <h5>
                                        Reviews
                                    </h5>
                                    <div className="d-flex gap-2 justify-content-end">
                                        <Button
                                            variant="falcon-default"
                                            size="sm"
                                            iconAlign="right"
                                            onClick={handleShow}
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
                        <Col lg={4}>
                            <div className="course-details-sticky-sidebar mb-lg-8 mt-xl-n10 pe-xl-4 pe-xxl-7">
                                {/* Plan Your Carrer */}
                                <Card className="mt-5 mb-3">
                                    <Card.Header as="h5" className="bg-light text-capitalize">
                                        Get  Quote Now
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={7} lg={12} className="order-md-1 order-lg-0">
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

                                                <Link to="/Cart">
                                                    <Button
                                                        variant="primary"
                                                        size="lg"
                                                        className="mb-3 w-100 fs-0 mt-1"
                                                    >
                                                        Add to Cart
                                                    </Button>
                                                </Link>
                                                <Link to="/GetQuote">
                                                    <Button
                                                        style={{ background: '#003f6b' }}
                                                        size="lg"
                                                        className="w-100 fs-0 mt-1"
                                                    >
                                                        Get Quote
                                                    </Button>
                                                </Link>
                                                <p className="text-700 fw-medium fs--1 mt-3 mb-0">
                                                    14 day Refund Policy
                                                </p>
                                            </Col>
                                            <Col md={5} lg={12}>
                                                <hr className="border-top border-dashed d-md-none d-lg-block" />
                                                <Form.Group className="mb-3">
                                                    {/* <h6 className="fw-bold">Colour</h6> */}
                                                    <Form.Label className="text-900">Colour</Form.Label>
                                                    <Form.Select>
                                                        <option value="">Select</option>
                                                        {prodata.variant?.map((data, key) => (
                                                            <option key={key} value={data.color}>{data.color}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    {/* <h6 className="fw-bold">Size</h6> */}
                                                    <Form.Label className="text-900">Size</Form.Label>
                                                    <Form.Select>
                                                        <option value="">Select</option>
                                                        {prodata.variant?.map((data, key) => (
                                                            <option key={key} value={data.size}>{data.size}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    {/* <h6 className="fw-bold">Finish Type</h6> */}
                                                    <Form.Label className="text-900">Finish Type</Form.Label>
                                                    <Form.Select>
                                                    <option value="">Select</option> 
                                                    {prodata.variant?.map((data, key)=>(
                                                    <option key={key} value={data.finish_type}>{data.finish_type}</option>
                                                    ))}
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    {/* <h6 className="fw-bold">Finish Type</h6> */}
                                                    <Form.Label className="text-900">Quantity</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="0"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <hr className="border-top border-dashed" />
                                        <h6 className="fw-bold">Share with friends</h6>
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
                    </Row>
                </Row>
            </Container >
            <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-lg modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
        <h5 class="mb-3">Write your Review</h5>
        </Modal.Header>
        <Modal.Body>
          <div class="col-lg-6 ps-lg-5">
            <form>
             
              <div class="mb-3"><label class="form-label">Rating: </label>
                <div class="d-block star-rating" data-rater="{&quot;starSize&quot;:32,&quot;step&quot;:0.5}" style={{ width: "160px", height: "32px", backgroundSize: "32px" }} data-rating="1.5" title="5/5"><div class="star-value" style={{ backgroundSize: "32px", width: "30%" }}>
                </div>
                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />    
                </div>
              </div>
              <div class="mb-3"><label class="form-label" for="formGroupNameInput">Name:</label><input class="form-control form-control-sm" id="formGroupNameInput" type="text"/></div>
              <div class="mb-3"><label class="form-label" for="formGroupEmailInput">Email:</label><input class="form-control form-control-sm" id="formGroupEmailInput" type="email"/></div>
              <div class="mb-3"><label class="form-label" for="formGrouptextareaInput">Review:</label><textarea class="form-control form-control-sm" id="formGrouptextareaInput" rows="3"></textarea></div>
              </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleClose}>Submit</Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default ProductDetails



// < div className = "d-flex justify-content-between" >
//             <Link to="/productlist">
//             <Button className="m-3 btn d-block btn-outline-success bg-transparent text-success">Previous</Button>
//             </Link>
//             <Button className="m-3 btn d-block btn-outline-success bg-transparent text-success">Next</Button>
//         </div >
// <Row>
//     <Col lg={5}>
//         <Row>
//             <Col lg={8}>
//                 <div className="m-3">
//                     <img src= width="100%" height="570px" />
//                 </div>
//             </Col>
//             <Col lg={4}>
//                 {prodata.attachments?.map((data, key) => (
//                     <div key={key} className="m-3">
//                         <img src={data.url} width="150px" height="130px" />
//                     </div>
//                 ))}

//                 <div className="m-3">
//                     <img src={product_image} width="150px" height="130px" />
//                 </div>
//                 <div className="m-3">
//                     <img src={product_image} width="150px" height="130px" />
//                 </div>
//                 <div className="m-3">
//                     <img src={product_image} width="150px" height="130px" />
//                 </div>
//             </Col>
{/*
                    </Row>
                </Col>
                <Col lg={7}>
                    <div className="d-flex justify-content-end m-3">
                        <Button className="ms-3 btn btn-outline-success bg-transparent text-success">
                            <Icon icon="icon-park-outline:like" color="#9da8ba" className="me-1" width="20" height="20" />
                            Favourite
                        </Button>
                    </div>
                    <h4 className="m-5 text-uppercase"></h4>
                    <Row className="m-5">
                        <Col lg={2}>
                            <span style={{ color: '#ff4242' }} className="fw-semibold"> </small></span>
                        </Col>
                        <Col lg={2}>
                            
                        </Col>
                        <Col lg={3}>
                            <span className="d-block">
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="20" height="20" />
                                <Icon icon="material-symbols:star-rate-rounded" color="gray" width="20" height="20" />
                                <small>(12)</small>
                            </span>
                        </Col>
                    </Row>
                    <Form className="m-5">
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Colour
                            </Form.Label>
                            <Form.Select > */}
{/*  */ }
{/* 

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Size
                            </Form.Label>
                            <Form.Select> */}
{/* 
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Finish Type
                            </Form.Label>
                            <Form.Select> */}

                //             </Form.Select>
                //         </Form.Group>
                //         <Form.Group className="m-3">
                //             <Form.Control className="w-25 m-3 d-inline" type="number" />
                //             <Button className=" m-3 btn bg-success">Add to Cart</Button>
                //             <Button className=" m-3 btn btn-outline-success bg-transparent text-success ">Get a Quote</Button>
                //         </Form.Group>
                //         <span>
                //             Share:
                //             <Icon icon="ic:sharp-facebook" className="ms-2" width="24" height="24" />
                //             <Icon icon="ph:twitter-logo-fill" width="24" height="24" />
                //             <Icon icon="mdi:pinterest" width="24" height="24" />
                //         </span>
                //     </Form>
                // </Col>
                // <Col lg={12} className="m-3">
                //     <Button className=" btn btn-outline-success bg-transparent text-success ">Description</Button>
                //     <Button className="ms-3 btn btn-outline-success bg-transparent text-success ">Disclaimer</Button>
                //     <Button className="ms-3 btn btn-outline-success bg-transparent text-success ">Reviews <small>(12)</small></Button>
                // </Col>
                // <p className="m-3 w-100">
                //     <span className="fw-bold">Description: </span>
                // </p>
                // <p className="m-3 w-100">
                //     <span className="fw-bold">Disclaimer:</span> 
                //     </p>
            // </Row> 