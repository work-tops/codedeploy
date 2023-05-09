import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import worktops from '../../Projectimages/worktops-installation.jpg'
import { Icon } from "@iconify/react";
import Divider from "../../../TemplateAssets/common/Divider";
import { Link } from "react-router-dom";
import freelancer from '../../Projectimages/Freelancer.jpg'


function ServiceInformation() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className="d-flex justify-content-between">
                        <Link to="/user/SellerList">
                            <Button className="bg-transparent border border-0 text-dark d-block m-4">Back to Result</Button>
                        </Link>

                        <Button className="bg-transparent border border-0 text-dark d-block m-4">Next Trade</Button>

                    </div>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Row style={{ background: '#f2f2f2' }}>
                                    <Col lg={3}>
                                        <img src={freelancer} className="ms-5 mt-4 mb-4" width="160px" height="140px" />
                                    </Col>
                                    <Col lg={9}>
                                        <p style={{ fontSize: '18px' }} className="text-justify mt-5 fw-bold">Reliant Plumbing and Heating</p>
                                        <p className="text-justify" style={{ fontSize: '14px' }}><Icon icon="material-symbols:location-on" color="gray" width="20" height="20" /> Operates in <span>CB236DX</span></p>
                                        <p className="text-justify" style={{ fontSize: '14px' }}><Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" /><span className="fw-semibold" style={{ color: '#288ce1' }}>(4.5 Reviews)</span></p>
                                        {/* <p className="text-center" style={{ fontSize: '12px' }}></p> */}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={5} className="mt-4 ms-5" style={{ background: '#f2f2f2' }}>
                                        <div className="m-3">
                                            <Button className="mt-3 bg-transparent text-dark border-0">Profile</Button>
                                            <Button className="mt-3 bg-transparent text-dark border-0">Reviews</Button>
                                        </div>
                                        <p className="m-3" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="fw-bold">
                                                Profile : </span> My name is Nick. I am the main tradesmen for Kentishbuilder. After reading my feedback you will see I am
                                            dedicated to my work. I always respect the customers wishes and work with them to achieve their results.
                                            Whatever the contract is worth I will give the same commitment.All the trades I use are from mybuilder
                                            and my family and I am on all my contracts from start to finish Let me help you with all your building
                                            contracts in 2021
                                        </p>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                        <p className="m-3" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="fw-bold">
                                                Skills
                                            </span>
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
                                        </p>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                        <p className="m-3" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="fw-bold">
                                                Photo Gallery
                                            </span>
                                        </p>
                                        <div className="mb-3" style={{ display: 'flex', flexDirection: 'row' }}>
                                            <img src={worktops} width="75px" height="60px" className="d-block ms-3 mb-3" />
                                            <img src={worktops} width="75px" height="60px" className="d-block ms-3 mb-3" />
                                            <img src={worktops} width="75px" height="60px" className="border border-dark d-block ms-3 mb-3" />
                                        </div>
                                        <p className="m-3" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="d-block mb-3 fw-bold">
                                                About company Reliant Plumbing and Heating
                                            </span>
                                            I have been in the building industry for 45years since | left school. | have been a brick-layer for 40 years and have
                                            vast experience in all ground works,including patios,drainage, concreting, block-paving, re-pointing of
                                            house's.One of the contracts | worked on was the new building at canterbury college, Dover road. | completed all
                                            slabwork, one of my big slab contracts was to lay all the town centre in ashford of york-stone and granite sets. |
                                            am a very clean and tidy bricklayer and | have worked for many big companys doing sub-contract work including
                                            serco,wates, bovis and can supply any references required.| have done quite a few contracts for customers on
                                            mybuilder who work for the police.You will always see me on my contracts | do not sub contract work out to
                                            anyone unless the customer asks me if | could help find a tradesman that doest have my skills.| will always be
                                            honest loyal to you and always seek to make your contract easy going .Many thanks nick Kentishbuilder
                                        </p>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                        <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="fw-bold">
                                                Review Title
                                            </span>
                                        </p>
                                        <p className="ms-3">
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                        </p>
                                        <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
                                            Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
                                            completed asap. Good quality work, professional and friendly.
                                        </p>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                        <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="fw-bold">
                                                Review Title
                                            </span>
                                        </p>
                                        <p className="ms-3">
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                        </p>
                                        <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
                                            Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
                                            completed asap. Good quality work, professional and friendly.
                                        </p>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                        <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="fw-bold">
                                                Review Title
                                            </span>
                                        </p>
                                        <p className="ms-3">
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                        </p>
                                        <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
                                            Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
                                            completed asap. Good quality work, professional and friendly.
                                        </p>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                        <p className="ms-3 mb-0 mt-2" style={{ fontSize: '12px' }}>
                                            <span style={{ fontSize: "14px" }} className="fw-bold">
                                                Review Title
                                            </span>
                                        </p>
                                        <p className="ms-3">
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                            <Icon icon="material-symbols:star-rate-rounded" color="#ef950e" width="20" height="20" />
                                        </p>
                                        <p className="ms-3 mb-0 me-3 mt-2" style={{ fontSize: '12px' }}>
                                            Excellent service. Elliott responded to the request for work promptly and was able to squeeze me in so the job could be
                                            completed asap. Good quality work, professional and friendly.
                                        </p>
                                        <div className="m-3">
                                            <Divider />
                                        </div>
                                    </Col>
                                    <Col lg={5} className="mt-4 ms-5" style={{ background: '#f2f2f2', height: '300px' }}>
                                        <div className="mb-3 mt-3 align-items-center justify-content-center d-flex">
                                            <Icon className=" m-2" icon="material-symbols:share-outline" color="black" width="20" height="20" />
                                            <Link to="/wishlist/seller">
                                                <Icon className=" m-2" icon="icon-park-outline:like" color="black" width="20" height="20" />
                                            </Link>
                                        </div>
                                        <div className="align-items-center justify-content-center d-flex">
                                            <Button className="m-2 text-white border-0" style={{ background: "#0d406b" }}>Add to Cart</Button>
                                        </div>
                                        <div className="align-items-center justify-content-center d-flex">
                                            <Link to="/RequestQuote">
                                                <Button className="m-2 bg-transparent" style={{ color: "#0d406b", border: "1px solid #0d406b" }}>Request a Quote</Button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default ServiceInformation