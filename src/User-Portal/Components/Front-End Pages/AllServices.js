import React from "react";
import { Card, Button, DropdownButton, Dropdown, Row, Col} from "react-bootstrap";
import ServiceAdvancedTable from "../../TemplateAssets/AdvanceTables/ServiceAdvanceTable";
import { Link } from "react-router-dom";

function AllServices() {
    return (
        <>
            <Card>
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4>All Services</h4>
                        </div>
                        <div>
                            <Row>
                                <Col lg={6}>
                                    <DropdownButton
                                        variant="outline-secondary"
                                        title="More Action"
                                        id="input-group-dropdown-2"
                                        align="end"
                                        className="mt-1"
                                    >
                                        <Dropdown.Item href="#">Bulk Edit</Dropdown.Item>
                                        <Dropdown.Item href="#">Add Product By CSV</Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                                <Col lg={6}>
                                    <Link to="/user/addservices">
                                    <Button className='m-1 bg-success border-success w-100'>Add Services</Button>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="mt-3">
                        <ServiceAdvancedTable />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
export default AllServices