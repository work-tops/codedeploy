import React from "react";
import { Card, Breadcrumb, Button, DropdownButton, Dropdown, Row, Col} from "react-bootstrap";
import ServiceAdvancedTable from "../advance-table/ServiceAdvanceTable";

function AllServices() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Breadcrumb className='mb-3 text-uppercase'>
                        <Breadcrumb.Item href="#">
                            Services
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                           Services List
                        </Breadcrumb.Item>
                    </Breadcrumb>
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
                                    <Button className='m-1 bg-success border-success w-100'>Add Services</Button>
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