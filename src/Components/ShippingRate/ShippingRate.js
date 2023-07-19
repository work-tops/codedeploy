
import React, { useState } from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Modal, InputGroup } from "react-bootstrap";
// import IconButton from "components/common/IconButton";
// import AdvanceTableSearchBox from "components/common/advance-table/AdvanceTableSearchBox";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";


const ShippingRate = () => {


    const [show, setShow] = useState(false);
    const [reply, setReply] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columns = [
        {
            accessor: 'rate',
            Header: 'Rate'
        },
        {
            accessor: 'condition',
            Header: 'Condition'
        },
        {
            accessor: 'Amount',
            Header: 'Amount'
        },
        {
            accessor: 'action',
            Header: 'Action'
        }
    ];

    const data = [
        {
            rate: 'A',
            category: 'Bar ',
            title: 'test-project-4',
            budget: '123',
            jobStatus: <span className="badge  bg-warning">Processing</span>,
            expDate: "31 Mar 2023", condition: "£ 0.00 - £ 1,500.00", Amount: "£ 75.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'A',
            category: 'Bar ',
            title: 'test-project-4',
            budget: '123',
            jobStatus: <span className="badge  bg-danger">Not Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 0.00 - £ 1,500.00", Amount: "£ 75.00 GBP",
            status: <span className="badge  bg-warning">Approval Pending</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'A',
            category: 'ct-3 ',
            title: 'test-project-3',
            budget: '123',
            jobStatus: <span className="badge  bg-success">Completed</span>,
            expDate: "31 Mar 2023", condition: "£ 0.00 - £ 1,500.00", Amount: "£ 75.00 GBP",
            status: <span className="badge  bg-secondary">Disabled</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'A',
            category: 'ct-3 ',
            title: 'test-project-11',
            budget: '1213',
            jobStatus: <span className="badge  bg-success">Completed</span>,
            expDate: "31 Mar 2023", condition: "£ 0.00 - £ 1,500.00", Amount: "£ 75.00 GBP",
            status: <span className="badge  bg-danger">Expired</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'A',
            category: 'ct-3 ',
            title: 'test-project-13',
            budget: '077',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 0.00 - £ 1,500.00", Amount: "£ 75.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            rate: 'B',
            category: 'Bedroom ',
            title: 'test-project-5',
            budget: '1213',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 1,501.00 - £ 3500.00", Amount: "£ 85.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'B',
            category: 'Bedroom',
            title: 'test-project-1',
            budget: '077',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 1,501.00 - £ 3500.00", Amount: "£ 85.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            rate: 'B',
            category: 'Attic ',
            title: 'test-project-15',
            budget: '1213',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 1,501.00 - £ 3500.00", Amount: "£ 85.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'B',
            category: 'Bathroom ',
            title: 'test-project-7',
            budget: '077',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 1,501.00 - £ 3500.00", Amount: "£ 85.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            rate: 'C',
            category: 'Bathroom ',
            title: 'test-project-4',
            budget: '1213',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 3500.00 - and Up", Amount: "£ 100.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'C',
            category: 'Bathroom ',
            title: 'test-project-10',
            budget: '077',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 3500.00 - and Up", Amount: "£ 100.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rate: 'C',
            category: 'Attic ',
            title: 'test-project-14',
            budget: '077',
            jobStatus: <span className="badge  bg-danger">Not Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 3500.00 - and Up", Amount: "£ 100.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
        ,
        {
            rate: 'C',
            category: 'Attic ',
            title: 'test-project-08',
            budget: '077',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 3500.00 - and Up", Amount: "£ 100.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
        ,
        {
            rate: 'C',
            category: 'Bar ',
            title: 'test-project-9',
            budget: '077',
            jobStatus: <span className="badge  bg-primary">Hired</span>,
            expDate: "31 Mar 2023", condition: "£ 3500.00 - and Up", Amount: "£ 100.00 GBP",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
    ];


    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {

                        }
                    </h5>
                </Col>
                <Row className="flex-end-center mt-2 mb-3">
                    <Col xs="auto">
                        {/* <AdvanceTableSearchBox table /> */}
                    </Col>
                </Row>
                <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                    {Object.keys(selectedRowIds).length > 0 ? (
                        <div className="d-flex">
                            <Form.Select size="sm" aria-label="Bulk actions">
                                <option>Bulk Actions</option>
                                <option value="refund">Refund</option>
                                <option value="delete">Delete</option>
                                <option value="archive">Archive</option>
                            </Form.Select>
                            <Button
                                type="button"
                                variant="falcon-default"
                                size="sm"
                                className="ms-2"
                            >
                                Apply
                            </Button>
                        </div>
                    ) : (
                        <div id="orders-actions">
                            {/* <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="plus"
                                transform="shrink-3"
                                className='me-2'
                            >
                                <span className="d-none d-sm-inline-block ms-1">New</span>
                            </IconButton>
                            <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="external-link-alt"
                                transform="shrink-3"
                            >
                                <span className="d-none d-sm-inline-block ms-1">Export</span>
                            </IconButton> */}
                        </div>
                    )}
                </Col>
            </Row>
        );
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light" as={"h2"}>
                            Shipping Rate
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-end">
                                <Button onClick={handleShow} variant="success">
                                    Add Shipping Rate
                                </Button>
                            </div>
                            <AdvanceTableWrapper
                                columns={columns}
                                data={data}
                                sortable
                                pagination
                                perPage={5}
                                selection
                                selectionColumnWidth={30}
                            >
                                <BulAction table />
                                <AdvanceTable
                                    table
                                    headerClassName="bg-200 text-900 text-nowrap align-middle"
                                    rowClassName="align-middle white-space-nowrap"
                                    tableProps={{
                                        striped: true,
                                        className: 'mb-0 overflow-hidden'
                                    }}
                                />
                                <div className="mt-3">
                                    <AdvanceTableFooter
                                        rowCount={data.length}
                                        table
                                        rowInfo
                                        navButtons
                                        rowsPerPageSelection
                                    />
                                </div>
                            </AdvanceTableWrapper >
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*  */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Rate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5 className="mb-3">Set Up Own Rates</h5>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Rate Name</Form.Label>
                            <Form.Control />
                            <small>Customers will see this at checkout</small>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <InputGroup>
                                <Form.Control type="number" placeholder="£ 0.00" />
                                <Button disabled>Free</Button>
                            </InputGroup>
                        </Form.Group>
                        <Row className="g-3">
                            <h5 className="mb-3">Based on Order Price</h5>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Minimum Price</Form.Label>
                                    <Form.Control type="number" placeholder="£ 0.00" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Maximum Price</Form.Label>
                                    <Form.Control type="number" placeholder="£ 0.00" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default ShippingRate
