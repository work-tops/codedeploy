import React from "react";
import { Icon } from "@iconify/react";
import { Row, Col, Button } from "react-bootstrap";
import worktops from '../../Project images/worktops-installation.jpg'
import ProjectOwnerHeader from "../../Header/ProjectOwnerHeader";
import Menubar from "../../Menubar/Menubar";
import { Link } from "react-router-dom";
import freelancer from '../../Project images/Freelancer.jpg'
import huwaei from '../../Project images/Huawei-Logo.png'
import company_name from '../../Project images/CompanyName.png'
function SellerList() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <ProjectOwnerHeader />
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-between">
                                <p className="m-3">General Plumbing in <span>CB236DX</span></p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="align-items-center justify-content-center d-flex">
                        <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
                            <div className="mb-3">
                                <div className="d-flex justify-content-end mt-2">
                                    <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                    <Link to="/wishlist/seller">
                                        <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <img src={freelancer} style={{ margin: '2rem' }} height="200px" width="250px" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
                                    </Link>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
                                    <p className="text-center" style={{ fontSize: '12px' }}>
                                        Reliant Plumbing & Heating are a prompt, reliable and
                                        affordable Cambridge company that offers a variety of
                                        Plumbing solutions and services.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/RequestQuote">
                                        <Button className="ms-4 text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                    </Link>
                                    <Button className="ms-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
                            <div className="mb-3">
                                <div className="d-flex justify-content-end mt-2">
                                    <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                    <Link to="/wishlist/seller">
                                        <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <img src={huwaei} style={{ margin: '2rem' }} height="200px" width="250px" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
                                    </Link>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
                                    <p className="text-center" style={{ fontSize: '12px' }}>
                                        Reliant Plumbing & Heating are a prompt, reliable and
                                        affordable Cambridge company that offers a variety of
                                        Plumbing solutions and services.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/RequestQuote">
                                        <Button className="ms-4 text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                    </Link>
                                    <Button className="ms-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
                            <div className="mb-3">
                                <div className="d-flex justify-content-end mt-2">
                                    <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                    <Link to="/wishlist/seller">
                                        <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <img src={company_name} style={{ margin: '2rem' }} height="200px" width="250px" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
                                    </Link>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
                                    <p className="text-center" style={{ fontSize: '12px' }}>
                                        Reliant Plumbing & Heating are a prompt, reliable and
                                        affordable Cambridge company that offers a variety of
                                        Plumbing solutions and services.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/RequestQuote">
                                        <Button className="ms-4 text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                    </Link>
                                    <Button className="ms-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
                            <div className="mb-3">
                                <div className="d-flex justify-content-end mt-2">
                                    <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                    <Link to="/wishlist/seller">
                                        <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <img src={worktops} style={{ margin: '2rem' }} height="200px" width="250px" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
                                    </Link>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
                                    <p className="text-center" style={{ fontSize: '12px' }}>
                                        Reliant Plumbing & Heating are a prompt, reliable and
                                        affordable Cambridge company that offers a variety of
                                        Plumbing solutions and services.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/RequestQuote">
                                        <Button className="ms-4 text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                    </Link>
                                    <Button className="ms-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
                            <div className="mb-3">
                                <div className="d-flex justify-content-end mt-2">
                                    <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                    <Link to="/wishlist/seller">
                                        <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <img src={worktops} style={{ margin: '2rem' }} height="200px" width="250px" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
                                    </Link>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
                                    <p className="text-center" style={{ fontSize: '12px' }}>
                                        Reliant Plumbing & Heating are a prompt, reliable and
                                        affordable Cambridge company that offers a variety of
                                        Plumbing solutions and services.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/RequestQuote">
                                        <Button className="ms-4 text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                    </Link>
                                    <Button className="ms-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ background: '#f5f5f5' }} className="m-2" lg={3}>
                            <div className="mb-3">
                                <div className="d-flex justify-content-end mt-2">
                                    <Icon className="d-block m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                    <Link to="/wishlist/seller">
                                        <Icon className="d-block m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <img src={worktops} style={{ margin: '2rem' }} height="200px" width="250px" />
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/ServiceInformation">
                                        <p style={{ fontSize: '18px' }} className="text-center fw-bold">Reliant Plumbing and Heating</p>
                                    </Link>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
                                    <p className="text-center" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
                                    <p className="text-center" style={{ fontSize: '12px' }}>
                                        Reliant Plumbing & Heating are a prompt, reliable and
                                        affordable Cambridge company that offers a variety of
                                        Plumbing solutions and services.
                                    </p>
                                </div>
                                <div>
                                    <Link to="/RequestQuote">
                                        <Button className="ms-4 text-white border-0" style={{ background: "#0d406b" }}>Request a Quote</Button>
                                    </Link>
                                    <Button className="ms-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Message Me</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    )
}
export default SellerList