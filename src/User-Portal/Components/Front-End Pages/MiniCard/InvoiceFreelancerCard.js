
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import InvoiceFreelancerDueTable from "../../../TemplateAssets/AdvanceTables/InvoiceFreelancerDueTable";
function InvoiceFreelancerCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12}>
                    <Container>
                        <InvoiceFreelancerDueTable />
                    </Container>
                </Col>
            </Row>
        </>
    )
}
export default InvoiceFreelancerCard