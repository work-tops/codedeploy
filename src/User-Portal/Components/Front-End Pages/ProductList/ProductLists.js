import { React, useState } from "react";
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Flex from '../../../TemplateAssets/common/Flex'
import image from '../../../Components/Images/Granite.png'
import { Icon } from "@iconify/react";
import ListingHeader from "./ProductsHeader";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";


function ProductList() {
    return (
        <>
            <Row>
                <Col lg={12} className='mb-5'>
                    <NavbarStandard />
                </Col>
                <Col className='mt-5' lg={12}>
                    <ListingHeader />
                </Col>
            </Row>
            {/*  */}
            <Card className="overflow-hidden m-4">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col md={4} lg={3}>
                            <Image src={image} alt="" className="w-100 h-100 fit-cover" />
                        </Col>
                        <Col md={8} lg={9} className="p-x1">
                            <Row className="g-0 h-100">
                                <Col lg={8}>

                                    <h4 className="mt-3 text-justify mt-sm-0 fs-0 fs-lg-1">
                                        <Link to="/productdetails"
                                            className="text-900"
                                        >
                                            CALACATTA LIGHT QUARTZ
                                        </Link>
                                    </h4>
                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                        QUARTZ
                                    </p>
                                    <div className="flex-1 d-flex align-items-end fw-semi-bold fs--1">
                                        <span className="me-1 text-900">4.0</span>
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        <span className="ms-2 text-secondary">
                                            (78,259) reviews
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Card>
                                        <Card.Body>

                                            <Flex
                                                justifyContent="between"
                                                className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                            >
                                                <div className="mb-lg-4 mt-auto mt-lg-0">
                                                    <h3 className=" text-warning d-flex align-items-center">
                                                        <span style={{ color: '#f68f57' }}>£ 308.69</span>

                                                        <del className="ms-2 fs--1 text-700">£ 139.90</del>
                                                    </h3>
                                                    <p className="mb-0 fs--1 text-800">
                                                        92,632 Members Purchased
                                                    </p>
                                                </div>
                                                <Flex className="mt-3 flex-lg-column gap-2">
                                                    <Link to="/wishlist/product">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            className="fs--1 mt-3 mb-3 text-600 white-space-nowrap w-100"

                                                        >
                                                            <Icon icon="flat-color-icons:like" width="20" height="20" style={{ marginTop: '-5px' }} /> Add to Wishlist
                                                        </Button>
                                                    </Link>

                                                    <Link to="/Cart">
                                                        <Button
                                                            size="md"
                                                            variant="primary"

                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>

                                                    <Link to="/RequestQuote">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Get a Quote
                                                        </Button>
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/*  */}
            <Card className="overflow-hidden m-4">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col md={4} lg={3}>
                            <Image src={image} alt="" className="w-100 h-100 fit-cover" />
                        </Col>
                        <Col md={8} lg={9} className="p-x1">
                            <Row className="g-0 h-100">
                                <Col lg={8}>

                                    <h4 className="mt-3 text-justify mt-sm-0 fs-0 fs-lg-1">
                                        <Link to="/productdetails"
                                            className="text-900"
                                        >
                                            CALACATTA LIGHT QUARTZ
                                        </Link>
                                    </h4>
                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                        QUARTZ
                                    </p>
                                    <div className="flex-1 d-flex align-items-end fw-semi-bold fs--1">
                                        <span className="me-1 text-900">4.0</span>
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        <span className="ms-2 text-secondary">
                                            (78,259) reviews
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Card>
                                        <Card.Body>

                                            <Flex
                                                justifyContent="between"
                                                className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                            >
                                                <div className="mb-lg-4 mt-auto mt-lg-0">
                                                    <h3 className=" text-warning d-flex align-items-center">
                                                        <span style={{ color: '#f68f57' }}>£ 308.69</span>

                                                        <del className="ms-2 fs--1 text-700">£ 139.90</del>
                                                    </h3>
                                                    <p className="mb-0 fs--1 text-800">
                                                        92,632 Members Purchased
                                                    </p>
                                                </div>
                                                <Flex className="mt-3 flex-lg-column gap-2">
                                                    <Link to="/wishlist/product">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            className="fs--1 mt-3 mb-3 text-600 white-space-nowrap w-100"

                                                        >
                                                            <Icon icon="flat-color-icons:like" width="20" height="20" style={{ marginTop: '-5px' }} /> Add to Wishlist
                                                        </Button>
                                                    </Link>

                                                    <Link to="/Cart">
                                                        <Button
                                                            size="md"
                                                            variant="primary"

                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>

                                                    <Link to="/RequestQuote">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Get a Quote
                                                        </Button>
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="overflow-hidden m-4">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col md={4} lg={3}>
                            <Image src={image} alt="" className="w-100 h-100 fit-cover" />
                        </Col>
                        <Col md={8} lg={9} className="p-x1">
                            <Row className="g-0 h-100">
                                <Col lg={8}>

                                    <h4 className="mt-3 text-justify mt-sm-0 fs-0 fs-lg-1">
                                        <Link to="/productdetails"
                                            className="text-900"
                                        >
                                            CALACATTA LIGHT QUARTZ
                                        </Link>
                                    </h4>
                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                        QUARTZ
                                    </p>
                                    <div className="flex-1 d-flex align-items-end fw-semi-bold fs--1">
                                        <span className="me-1 text-900">4.0</span>
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        <span className="ms-2 text-secondary">
                                            (78,259) reviews
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Card>
                                        <Card.Body>

                                            <Flex
                                                justifyContent="between"
                                                className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                            >
                                                <div className="mb-lg-4 mt-auto mt-lg-0">
                                                    <h3 className=" text-warning d-flex align-items-center">
                                                        <span style={{ color: '#f68f57' }}>£ 308.69</span>

                                                        <del className="ms-2 fs--1 text-700">£ 139.90</del>
                                                    </h3>
                                                    <p className="mb-0 fs--1 text-800">
                                                        92,632 Members Purchased
                                                    </p>
                                                </div>
                                                <Flex className="mt-3 flex-lg-column gap-2">
                                                    <Link to="/wishlist/product">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            className="fs--1 mt-3 mb-3 text-600 white-space-nowrap w-100"

                                                        >
                                                            <Icon icon="flat-color-icons:like" width="20" height="20" style={{ marginTop: '-5px' }} /> Add to Wishlist
                                                        </Button>
                                                    </Link>

                                                    <Link to="/Cart">
                                                        <Button
                                                            size="md"
                                                            variant="primary"

                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>

                                                    <Link to="/RequestQuote">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Get a Quote
                                                        </Button>
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="overflow-hidden m-4">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col md={4} lg={3}>
                            <Image src={image} alt="" className="w-100 h-100 fit-cover" />
                        </Col>
                        <Col md={8} lg={9} className="p-x1">
                            <Row className="g-0 h-100">
                                <Col lg={8}>

                                    <h4 className="mt-3 text-justify mt-sm-0 fs-0 fs-lg-1">
                                        <Link to="/productdetails"
                                            className="text-900"
                                        >
                                            CALACATTA LIGHT QUARTZ
                                        </Link>
                                    </h4>
                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                        QUARTZ
                                    </p>
                                    <div className="flex-1 d-flex align-items-end fw-semi-bold fs--1">
                                        <span className="me-1 text-900">4.0</span>
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        <span className="ms-2 text-secondary">
                                            (78,259) reviews
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Card>
                                        <Card.Body>

                                            <Flex
                                                justifyContent="between"
                                                className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                            >
                                                <div className="mb-lg-4 mt-auto mt-lg-0">
                                                    <h3 className=" text-warning d-flex align-items-center">
                                                        <span style={{ color: '#f68f57' }}>£ 308.69</span>

                                                        <del className="ms-2 fs--1 text-700">£ 139.90</del>
                                                    </h3>
                                                    <p className="mb-0 fs--1 text-800">
                                                        92,632 Members Purchased
                                                    </p>
                                                </div>
                                                <Flex className="mt-3 flex-lg-column gap-2">
                                                    <Link to="/wishlist/product">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            className="fs--1 mt-3 mb-3 text-600 white-space-nowrap w-100"

                                                        >
                                                            <Icon icon="flat-color-icons:like" width="20" height="20" style={{ marginTop: '-5px' }} /> Add to Wishlist
                                                        </Button>
                                                    </Link>

                                                    <Link to="/Cart">
                                                        <Button
                                                            size="md"
                                                            variant="primary"

                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>

                                                    <Link to="/RequestQuote">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Get a Quote
                                                        </Button>
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="overflow-hidden m-4">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col md={4} lg={3}>
                            <Image src={image} alt="" className="w-100 h-100 fit-cover" />
                        </Col>
                        <Col md={8} lg={9} className="p-x1">
                            <Row className="g-0 h-100">
                                <Col lg={8}>

                                    <h4 className="mt-3 text-justify mt-sm-0 fs-0 fs-lg-1">
                                        <Link to="/productdetails"
                                            className="text-900"
                                        >
                                            CALACATTA LIGHT QUARTZ
                                        </Link>
                                    </h4>
                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                        QUARTZ
                                    </p>
                                    <div className="flex-1 d-flex align-items-end fw-semi-bold fs--1">
                                        <span className="me-1 text-900">4.0</span>
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        <span className="ms-2 text-secondary">
                                            (78,259) reviews
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Card>
                                        <Card.Body>

                                            <Flex
                                                justifyContent="between"
                                                className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                            >
                                                <div className="mb-lg-4 mt-auto mt-lg-0">
                                                    <h3 className=" text-warning d-flex align-items-center">
                                                        <span style={{ color: '#f68f57' }}>£ 308.69</span>

                                                        <del className="ms-2 fs--1 text-700">£ 139.90</del>
                                                    </h3>
                                                    <p className="mb-0 fs--1 text-800">
                                                        92,632 Members Purchased
                                                    </p>
                                                </div>
                                                <Flex className="mt-3 flex-lg-column gap-2">
                                                    <Link to="/wishlist/product">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            className="fs--1 mt-3 mb-3 text-600 white-space-nowrap w-100"

                                                        >
                                                            <Icon icon="flat-color-icons:like" width="20" height="20" style={{ marginTop: '-5px' }} /> Add to Wishlist
                                                        </Button>
                                                    </Link>

                                                    <Link to="/Cart">
                                                        <Button
                                                            size="md"
                                                            variant="primary"

                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>

                                                    <Link to="/RequestQuote">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Get a Quote
                                                        </Button>
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="overflow-hidden m-4">
                <Card.Body className="p-0">
                    <Row className="g-0">
                        <Col md={4} lg={3}>
                            <Image src={image} alt="" className="w-100 h-100 fit-cover" />
                        </Col>
                        <Col md={8} lg={9} className="p-x1">
                            <Row className="g-0 h-100">
                                <Col lg={8}>

                                    <h4 className="mt-3 text-justify mt-sm-0 fs-0 fs-lg-1">
                                        <Link to="/productdetails"
                                            className="text-900"
                                        >
                                            CALACATTA LIGHT QUARTZ
                                        </Link>
                                    </h4>
                                    <p className="fs--1 mt-2 w-50 d-none d-lg-block">
                                        QUARTZ
                                    </p>
                                    <div className="flex-1 d-flex align-items-end fw-semi-bold fs--1">
                                        <span className="me-1 text-900">4.0</span>
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="#f68f57" width="28" height="28" />
                                        <Icon icon="material-symbols:star-rate-rounded" color="gray" width="28" height="28" />
                                        <span className="ms-2 text-secondary">
                                            (78,259) reviews
                                        </span>
                                    </div>
                                </Col>
                                <Col lg={4} className="mt-4 mt-lg-0">
                                    <Card>
                                        <Card.Body>

                                            <Flex
                                                justifyContent="between"
                                                className="h-100 rounded border-lg border-1 flex-lg-column p-lg-3"
                                            >
                                                <div className="mb-lg-4 mt-auto mt-lg-0">
                                                    <h3 className=" text-warning d-flex align-items-center">
                                                        <span style={{ color: '#f68f57' }}>£ 308.69</span>

                                                        <del className="ms-2 fs--1 text-700">£ 139.90</del>
                                                    </h3>
                                                    <p className="mb-0 fs--1 text-800">
                                                        92,632 Members Purchased
                                                    </p>
                                                </div>
                                                <Flex className="mt-3 flex-lg-column gap-2">
                                                    <Link to="/wishlist/product">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            className="fs--1 mt-3 mb-3 text-600 white-space-nowrap w-100"

                                                        >
                                                            <Icon icon="flat-color-icons:like" width="20" height="20" style={{ marginTop: '-5px' }} /> Add to Wishlist
                                                        </Button>
                                                    </Link>

                                                    <Link to="/Cart">
                                                        <Button
                                                            size="md"
                                                            variant="primary"

                                                            className="fs--1 mb-3  text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Add to Cart
                                                        </Button>
                                                    </Link>

                                                    <Link to="/RequestQuote">
                                                        <Button
                                                            size="md"
                                                            variant="falcon-default"
                                                            style={{ background: '#003f6b' }}
                                                            className="fs--1 text-600 text-white white-space-nowrap w-100"

                                                        >
                                                            Get a Quote
                                                        </Button>
                                                    </Link>
                                                </Flex>
                                            </Flex>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default ProductList