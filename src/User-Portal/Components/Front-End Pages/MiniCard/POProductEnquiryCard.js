
import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import SellerEnquiryTable from "../../../TemplateAssets/AdvanceTables/ProductEnquiryTable";
import { Link } from "react-router-dom";
function SellerEnquiryCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Row className="mt-5">
                        <Col lg={12}>
                            <Card >
                                <Card.Header className="bg-light d-flex justify-content-between">
                                    <h5>Enquiries</h5>
                                    <div id="orders-actions">
                                        <Button
                                            variant="falcon-default"
                                            size="sm"
                                            icon="plus"
                                            transform="shrink-3"
                                        >
                                            <span className="d-none d-sm-inline-block ms-1">New</span>
                                        </Button>
                                        <Button
                                            variant="falcon-default"
                                            size="sm"
                                            icon="filter"
                                            transform="shrink-3"
                                            className="mx-2"
                                        >
                                            <span className="d-none d-sm-inline-block ms-1">Filter</span>
                                        </Button>
                                        <Button
                                            variant="falcon-default"
                                            size="sm"
                                            icon="external-link-alt"
                                            transform="shrink-3"
                                        >
                                            <span className="d-none d-sm-inline-block ms-1">Export</span>
                                        </Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="btn-group">
                                        <Button as={Link} to="/sellerEnquirescard" className="bg-secondary border-light">Product Enquiriy</Button>
                                        <Button as={Link} to="/ownerEnquirescard" className="bg-secondary border-light">Service Enquriy</Button>
                                    </div>
                                    <SellerEnquiryTable />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </>
    )
}
export default SellerEnquiryCard