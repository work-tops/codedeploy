
import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
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
                        <Card.Header className="text-uppercase bg-light"> 
                            <h5>Proposals</h5>
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