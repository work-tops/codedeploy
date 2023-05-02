import React from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import ProfileMenu from "./ProfileMenu";
import Divider from "../../../TemplateAssets/common/Divider";
import InvoiceTable from "../../../TemplateAssets/AdvanceTables/InvoiceTable";

function Invoice() {
    return (
        <>
            <Row>
                <Col lg={2}>
                    <ProfileMenu />
                </Col>
                <Col lg={9}>
                    <Card className="mt-4 mb-4">
                        <Card.Body>
                            <h5 className="mt-3 ms-5">Invoice</h5>
                            <Divider />
                            <div className="d-flex m-5 justify-content-between">
                            <InvoiceTable/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default Invoice