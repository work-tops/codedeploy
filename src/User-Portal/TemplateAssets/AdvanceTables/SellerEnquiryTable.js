import React, { useEffect, useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Modal, Form, Dropdown } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Link } from "react-router-dom";

const SellerEnquiryTable = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const columns = [
        {
            accessor: 'name',
            Header: 'Name'
        },
        {
            accessor: 'date',
            Header: 'Date'
        },

        {
            accessor: 'productName',
            Header: 'Title'
        },
        {
            accessor: 'postcode',
            Header: 'Post Code'
        },
        {
            accessor: 'status',
            Header: 'Status'
        },
        {
            accessor: 'action',
            Header: 'Action'
        }
    ];
    const data = [
        {
            name: 'Peter Leverkus',
            date: '10 May 2023',
            productName: 'Quartz',
            postcode: 'CB236DX',
            status: <span className="badge bg-success">Completed</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/sellerEnquireDetails" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            name: 'Peter Leverkus',
            date: '10 May 2023',
            productName: 'Quartz',
            postcode: 'CB236DX',
            status: <span className="badge bg-danger">Closed</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/sellerEnquireDetails" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            name: 'Peter Leverkus',
            date: '10 May 2023',
            productName: 'Quartz',
            postcode: 'CB236DX',
            status: <span className="badge bg-warning">Pending</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/sellerEnquireDetails" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            name: 'Peter Leverkus',
            date: '10 May 2023',
            productName: 'Quartz',
            postcode: 'CB236DX',
            status: <span className="badge bg-primary">Processing</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/sellerEnquireDetails" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
    ]

    function BulAction({ selectedRowIds }) {
        return (
            <>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-lg modal-90w"

                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header>
                        <h6 className="text-uppercase">
                            Please Type Your Message
                        </h6>
                        <Button onClick={handleClose} className="bg-danger border-0">Close</Button>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder='Type Your Message....' rows={8} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                    Proceed to Send
                                </Form.Check.Label>
                            </Form.Check>
                        </Form.Group>
                        <div className="d-flex justify-content-end mb-3">
                            <Button as={Link} to="/freelancer/true" style={{ background: '#003f6b' }} className="text-uppercase border-0">
                                Send
                            </Button>
                        </div>
                    </Modal.Body>
                </Modal>


                <Row className="flex-between-center mb-3">
                    <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                            {
                                Object.keys(selectedRowIds).length > 0 ?
                                    'You have selected ' + Object.keys(selectedRowIds).length + ' Enquiries'
                                    :
                                    ''
                            }
                        </h5>
                    </Col>
                    {/* <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row> */}
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
                            </IconButton> */}
                                {/* <IconButton
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
            </>
        );
    };

    return (
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
                    classpriceType: 'fs--1 mb-0 overflow-hidden'
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
        </AdvanceTableWrapper>
    )
}
export default SellerEnquiryTable
