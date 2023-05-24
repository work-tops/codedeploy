
import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import SellerLandingPage from "../SellerLandingPage";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import OwnerEnquiryTable from "../../../TemplateAssets/AdvanceTables/OwnerEnquiryTable";
import { Link } from "react-router-dom";
import SellerEnquiryTable from "../../../TemplateAssets/AdvanceTables/SellerEnquiryTable";
function ProductEnquiresCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Container>
                    <Row className="mt-5">
                        <Col lg={12}>
                            <Card className="mb-3" >
                                <Card.Header className="bg-light d-flex justify-content-between">
                                    <h5>Enquiries</h5>
                                    
                                </Card.Header>
                                <Card.Body>
                                    <div class="d-flex justify-content-start">
                                        <ul class=" nav nav-tabs " role="tablist">
                                            <div className="d-flex flex-row">
                                                <div className="">
                                                    <li class="nav-item" role="presentation">
                                                        <a style={{ color: "#003f6b", fontSize: "18px" }} class="nav-link show active" data-bs-toggle="tab" href="#tab-1" aria-selected="true" role="tab">Product Enquiry</a>
                                                    </li>
                                                </div>
                                                <div className="">
                                                    <li class="nav-item" role="presentation">
                                                        <a style={{ color: "#003f6b", fontSize: "18px" }} class="nav-link" data-bs-toggle="tab" href="#tab-2" aria-selected="false" role="tab" tabindex="-1">Freelancer Enquiry</a>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div class="col-lg-12 mt-lg-0">
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab-1" role="tabpanel">
                                                <OwnerEnquiryTable />
                                            </div>
                                            <div class="tab-pane active" id="tab-2" role="tabpanel">
                                                <SellerEnquiryTable/>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </>
    )
}
export default ProductEnquiresCard