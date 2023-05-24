import React from "react";
import NavbarStandard from '../../Header/AdvanceHeader/NavbarStandard'
import trainer from '../../Projectimages/trainer.png'
import { Row, Col, Card, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import ProductGrid from "../ProductList/ProductGrid";
import { Link } from "react-router-dom";
// import { IconButton } from "../../../TemplateAssets/common/IconButton";
function PublicProfile() {
    return (
        <>
            <Row className="g-3">
                <Col lg={12} xl={12} className="mb-5" >
                    <NavbarStandard />
                </Col>
                <Col lg={4} xl={3} className="mt-4">
                    <div className="">
                        <Card className="m-4">
                            <Card.Body>
                                <Row className="g-3 align-items-center">
                                    <Col md={6} lg={12} className="text-center">
                                        <img src={trainer} alt="trainer" className="w-100 rounded-3" />
                                    </Col>
                                    <Col md={6} lg={12}>
                                        <Row className="row-cols-1 g-0">
                                            <Col className="text-center">
                                                <h4>Bill Finger</h4>
                                                <h5 className="mb-1 text-800 fs-0">Artist | Comic Writer</h5>
                                                <p className="mb-0 fs--1">
                                                    National Comics Publications, NY, USA
                                                </p>
                                            </Col>
                                            <Col className="mt-4 mt-md-5 mt-lg-4 order-md-1 order-lg-0">
                                                <Button as={Link} to="/wishlist/seller" style={{ color: '#003f6b', border: '1px solid #003f6b' }} className="d-block bg-transparent mb-3 w-100"><Icon icon="tabler:message-circle-2-filled" className="me-1" color="#003f6b" width="24" height="24" />Message</Button>
                                                <Button as={Link} to="/chat" style={{ color: '#003f6b', border: '1px solid #003f6b' }} className="d-block bg-transparent mb-3 w-100"><Icon style={{ marginTop: '-5px' }} icon="flat-color-icons:like" className="me-1" width="24" height="24" />Follow</Button>
                                            </Col>
                                            <Col className="mt-4 mt-md-5 mt-lg-4">
                                                <Row className="text-center">
                                                    <Col xs={6}>
                                                        <h4 className="text-700">

                                                            79,563
                                                        </h4>
                                                        <h6 className="fw-normal mb-0">Following</h6>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <h4 className="text-700">
                                                            1,20,302
                                                        </h4>
                                                        <h6 className="fw-normal mb-0">Followers</h6>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg={8} xl={9} className="mt-4">
                    {/* <TrainerIntro /> */}
                    <Card className="m-4">
                        <Card.Header className="bg-white">
                            <h6 className="mb-0 text-uppercase">Introduction</h6>
                        </Card.Header>
                        <Card.Body>
                            <Row className="flex-between-center">
                                <Col xxl={9} className="text-1000">
                                    <p>
                                        Milton Finger (born February 8, 1914), better known as Bill
                                        Finger, was an American comic strip, comic book, film, and
                                        television writer who co-created the DC Comics superhero character
                                        Batman (along with Bob Kane).
                                    </p>
                                    <p>
                                        A young, promising writer and part-time shoe dealer Finger, joined
                                        Kane's fledgling studio in 1938. Despite his significant (and
                                        often iconic) contributions as an imaginative writer, visionary
                                        mythos/world builder, and illustration creator, Finger was
                                        frequently reduced to ghostwriter status on a number of comics,
                                        including Batman and Green Lantern (Original Version).
                                    </p>
                                    <p>
                                        In 1994, Finger was welcomed into the Jack Kirby Hall of Fame, and
                                        in 1999, he was inducted into the Will Eisner Award Hall of Fame.
                                        In 1985, the company recognised Finger as one of the awardees in
                                        their 50th anniversary edition of Fifty Who Made DC Great. In
                                        2014, Finger was posthumously awarded The Inkpot Award.
                                    </p>
                                </Col>
                                <Col xxl={3}>
                                    <div className="d-flex justify-content-center mt-4 mt-xxl-0">
                                        <ul className="list-unstyled mb-0 d-flex flex-wrap flex-xxl-column gap-3 justify-content-center">
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
                                                    <Icon  className="me-1" style={{ marginTop: '-4px' }} icon="mdi:instagram" color="#003f6b" width="20" height="20" />
                                                    Instagram
                                                </Button>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* <TrainerIntro /> */}
                </Col>
            </Row>
        </>
    )
}
export default PublicProfile