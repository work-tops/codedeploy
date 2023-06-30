
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import InvoiceFreelancerDueTable from "../../../TemplateAssets/AdvanceTables/InvoiceFreelancerDueTable";
import Footer from "../../Footer/Footer";
function InvoiceFreelancerCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12}>
                    <div className="ms-3 me-3 mb-3">
                        <InvoiceFreelancerDueTable />
                    </div>
                </Col>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default InvoiceFreelancerCard