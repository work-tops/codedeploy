
import React from "react";
import { Card, Form, Col, Row } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import ProposalsTable from "../../../TemplateAssets/AdvanceTables/ProposalsTable";
function ProposalCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <div className="container mt-5">
                    <Card className="mb-3">
                        <Card.Header className="row g-2 text-uppercase bg-light">
                            <div className="col-lg-10 col-sm-12 col-md-8">
                            <h5>Proposals</h5>
                            </div>
                        <div className="col-lg-2 col-sm-12 col-md-4">
                            <Form.Label>Sort By</Form.Label>
                            <Form.Select>
                                <option>All</option>
                                <option>Accepeted</option>
                                <option>Pending</option>
                                <option>Declined</option>
                            </Form.Select>
                        </div>
                        </Card.Header>
                        <Card.Body>
                            <ProposalsTable />
                        </Card.Body>
                    </Card>
                </div>
                {/* <Col lg={12}>
                    <Card className="mb-3 container">

                        <FrontEndAllProducts />

                        <Card.Header as="h5" className="bg-light text-uppercase">
                            Proposals
                        </Card.Header>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Col> */}
            </Row>
        </>
    )
}
export default ProposalCard