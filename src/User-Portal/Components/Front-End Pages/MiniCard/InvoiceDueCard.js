
import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import InvoiceTableCard from "../../../TemplateAssets/AdvanceTables/InvoiceDueTable";
import Footer from "../../Footer/Footer";
function InvoicedueCard() {
    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <Col lg={12}>
                    <Container>
                        <InvoiceTableCard />
                    </Container>
                </Col>
            </Row>
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default InvoicedueCard