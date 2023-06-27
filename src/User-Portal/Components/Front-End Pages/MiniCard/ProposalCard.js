
import React from "react";
import { Card, Form, Col, Row } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import ProposalsTable from "../../../TemplateAssets/AdvanceTables/ProposalsTable";
import Footer from "../../Footer/Footer";
function ProposalCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <div className="container mt-4">
                    <ProposalsTable />
                </div>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default ProposalCard