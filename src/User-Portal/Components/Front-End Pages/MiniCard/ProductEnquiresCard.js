
import React, { useState } from "react";
import { Card, Button, Col, Row, Container, Tab, Nav } from "react-bootstrap";
import SellerLandingPage from "../SellerLandingPage";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import OwnerEnquiryTable from "../../../TemplateAssets/AdvanceTables/ServiceEnquiryTable";
import { Link } from "react-router-dom";
import SellerEnquiryTable from "../../../TemplateAssets/AdvanceTables/ProductEnquiryTable";
import Footer from "../../Footer/Footer";
function ProductEnquiresCard() {

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (tab) => {
        setActiveTab(tab);
    };


    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Row className="mt-4">
                        <Col lg={12}>
                            <Card className="mb-3" >
                                <Card.Header className="bg-light d-flex justify-content-between">
                                    <h5>Enquiries</h5>
                                </Card.Header>
                                <Card.Body>
                                    <Tab.Container activeKey={activeTab} onSelect={handleTabSelect}>
                                        <Nav variant="tabs" style={{ color: '#003f6b' }}>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab1">Product Enquiry</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="tab2">Service Enquiry</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tab1">
                                                <SellerEnquiryTable />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <OwnerEnquiryTable />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default ProductEnquiresCard