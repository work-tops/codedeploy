import { React, useState,useEffect } from "react";
import { Icon } from "@iconify/react";
import { Row, Col, Button, Modal, Form, Card, CardGroup, Container } from "react-bootstrap";
import worktops from '../../Projectimages/worktops-installation.jpg'
import Menubar from "../../Menubar/Menubar";
import { Link } from "react-router-dom";
import freelancer from '../../Projectimages/Freelancer.jpg'
import huwaei from '../../Projectimages/Huawei-Logo.png'
import company_name from '../../Projectimages/CompanyName.png'
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { getAllData } from "../../../../Services/ProxyService";
function SellerList() {

    const [show, setShow] = useState(false);
    const [sellersList, setSellers] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const getSellers = async ()=>{
        await getAllData('admin/users').then((res)=>{
            var _response = res.data.users;
            var _sellers = _response.filter(x=> x.role == "Freelancer");
            setSellers(_sellers);
        })

    }
    useEffect(()=>{
        getSellers()
    },[])

    return (
       
       <>
       <Container>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12}>
                    <Row className="justify-content-around">
                        {sellersList.map((data,index)=>{
                            return <Col lg={4} >
                        <Card className="mt-4 mb-1">
                        <div className="d-flex justify-content-end mt-2">
                            <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                            <Link to="/wishlist/seller">
                                <Icon icon="flat-color-icons:like" className="d-block m-2" width="20" height="20" />
                                </Link>
                                </div>
                            <Link to="/ServiceInformation">
                                {data.attachments.length > 0 ?
                                <Card.Img variant='top' width="100%" src={data.attachments[0]?.url} alt="Card image cap" />:
                                <Card.Img variant='top' width="100%" src={freelancer} alt="Card image cap" />
                                }
                            </Link>
                            <Card.Body>
                                <Link to="/ServiceInformation"><Card.Title className="text-justify" as='h5'>{data.name}
                                </Card.Title></Link>
                                <p className="text-justify">
                                    <Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span>
                                </p>
                                <p className="text-justify" style={{ fontSize: '14px' }}>
                                    <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                    <span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span>
                                </p>
                                <Card.Text className="text-justify" style={{fontSize:'14px'}}>
                                Reliant Plumbing & Heating are a prompt, reliable and affordable 
                                Cambridge company that offers a variety of Plumbing 
                                solutions and services.
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Link to="/RequestQuote">
                                        <Button className=" text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                    </Link>
                     <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                     </div>
                        </Card.Body>
                        </Card>
                        </Col>
                        })}
                        
                        </Row>
                    </Col>
                        
            </Row>

            {/*  */}

            {/* Message Me - Modal */ }
     < div className = 'd-flex justify-content-between' >
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
                        <Form.Check className="ms-2" />
                        <Form.Check.Label>
                            I Agree to the terms and conditions.
                        </Form.Check.Label>
                    </Form.Group>
                </Form>
                <Button className="m-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>
                    SEND
                </Button>
            </Modal.Body>
        </Modal>
                </div >
        </Container>
        </>
    )
}
export default SellerList
    // < Row >
    // <Col>
    //     <div className="d-flex justify-content-between">
    //         <p className="m-3">General Plumbing in <span>CB236DX</span></p>
    //     </div>
    // </Col>
    //                 </Row >
    // <Row className="align-items-center justify-content-center d-flex">
    //     <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
    //         <div className="mb-3">
    //             <div className="d-flex justify-content-end mt-2">
    //                 <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
    //                 <Link to="/wishlist/seller">
    //                     <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <img src={freelancer} style={{ margin: '2rem' }} height="200px" width="250px" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
    //                 </Link>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
    //                 <p className="text-center" style={{ fontSize: '12px' }}>
    //                     Reliant Plumbing & Heating are a prompt, reliable and
    //                     affordable Cambridge company that offers a variety of
    //                     Plumbing solutions and services.
    //                 </p>
    //             </div>
    //             <div>
    //                 <Link to="/RequestQuote">
    //                     <Button className=" text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
    //                 </Link>
    //                 <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
    //             </div>
    //         </div>
    //     </Col>
    //     <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
    //         <div className="mb-3">
    //             <div className="d-flex justify-content-end mt-2">
    //                 <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
    //                 <Link to="/wishlist/seller">
    //                     <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <img src={huwaei} style={{ margin: '2rem' }} height="200px" width="250px" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
    //                 </Link>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
    //                 <p className="text-center" style={{ fontSize: '12px' }}>
    //                     Reliant Plumbing & Heating are a prompt, reliable and
    //                     affordable Cambridge company that offers a variety of
    //                     Plumbing solutions and services.
    //                 </p>
    //             </div>
    //             <div>
    //                 <Link to="/RequestQuote">
    //                     <Button className=" text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
    //                 </Link>
    //                 <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
    //             </div>
    //         </div>
    //     </Col>
    //     <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
    //         <div className="mb-3">
    //             <div className="d-flex justify-content-end mt-2">
    //                 <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
    //                 <Link to="/wishlist/seller">
    //                     <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <img src={company_name} style={{ margin: '2rem' }} height="200px" width="250px" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
    //                 </Link>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
    //                 <p className="text-center" style={{ fontSize: '12px' }}>
    //                     Reliant Plumbing & Heating are a prompt, reliable and
    //                     affordable Cambridge company that offers a variety of
    //                     Plumbing solutions and services.
    //                 </p>
    //             </div>
    //             <div>
    //                 <Link to="/RequestQuote">
    //                     <Button className=" text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
    //                 </Link>
    //                 <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
    //             </div>
    //         </div>
    //     </Col>
    //     <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
    //         <div className="mb-3">
    //             <div className="d-flex justify-content-end mt-2">
    //                 <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
    //                 <Link to="/wishlist/seller">
    //                     <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <img src={worktops} style={{ margin: '2rem' }} height="200px" width="250px" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
    //                 </Link>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
    //                 <p className="text-center" style={{ fontSize: '12px' }}>
    //                     Reliant Plumbing & Heating are a prompt, reliable and
    //                     affordable Cambridge company that offers a variety of
    //                     Plumbing solutions and services.
    //                 </p>
    //             </div>
    //             <div>
    //                 <Link to="/RequestQuote">
    //                     <Button className=" text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
    //                 </Link>
    //                 <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
    //             </div>
    //         </div>
    //     </Col>
    //     <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
    //         <div className="mb-3">
    //             <div className="d-flex justify-content-end mt-2">
    //                 <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
    //                 <Link to="/wishlist/seller">
    //                     <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <img src={worktops} style={{ margin: '2rem' }} height="200px" width="250px" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
    //                 </Link>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
    //                 <p className="text-center" style={{ fontSize: '12px' }}>
    //                     Reliant Plumbing & Heating are a prompt, reliable and
    //                     affordable Cambridge company that offers a variety of
    //                     Plumbing solutions and services.
    //                 </p>
    //             </div>
    //             <div>
    //                 <Link to="/RequestQuote">
    //                     <Button className=" text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
    //                 </Link>
    //                 <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
    //             </div>
    //         </div>
    //     </Col>
    //     <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
    //         <div className="mb-3">
    //             <div className="d-flex justify-content-end mt-2">
    //                 <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
    //                 <Link to="/wishlist/seller">
    //                     <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <img src={worktops} style={{ margin: '2rem' }} height="200px" width="250px" />
    //                 </Link>
    //             </div>
    //             <div>
    //                 <Link to="/ServiceInformation">
    //                     <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
    //                 </Link>
    //                 <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
    //                 
    //                 <p className="text-center" style={{ fontSize: '12px' }}>
    //                     Reliant Plumbing & Heating are a prompt, reliable and
    //                     affordable Cambridge company that offers a variety of
    //                     Plumbing solutions and services.
    //                 </p>
    //             </div>
    //             <div>
    //                 <Link to="/RequestQuote">
    //                     <Button className=" text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
    //                 </Link>
    //                 <Button onClick={handleShow} className=" bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
    //             </div>
    //         </div>
    //     </Col>
    // </Row>
    //             </Col >

    // 

    //         </Row >