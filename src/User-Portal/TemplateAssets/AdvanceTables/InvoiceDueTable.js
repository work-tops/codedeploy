import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Modal, Col, Card, Dropdown, Button, Form } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";


const InvoiceTableCard = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Cancel Modal
    const [showModal2, setShowModal2] = useState(false);

    const handleClose2 = () => {
        setShowModal2(false);
    };

    const handleCancel = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal2(false);
    };


    const columns = [
        {
            accessor: 'id',
            Header: 'Invoice Id'
        },
        {
            accessor: 'itemName',
            Header: 'Item Name'
        },
        {
            accessor: 'date',
            Header: 'Date'
        },
        {
            accessor: 'description',
            Header: 'Description'
        },
        {
            accessor: 'amount',
            Header: 'Amount'
        },
        {
            accessor: 'status',
            Header: 'Status'
        },
        {
            accessor: 'action',
            Header: 'Action'
        },
    ];
    const data = [
        {
            id: '625355',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-success">Paid</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        },
        {
            id: '625355',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-warning">New</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        },
        {
            id: '625355',
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-danger">Rejected</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </CardDropdown>,
        }
    ]

    function BulAction({ selectedRowIds }) {
        return (
            <>
                <Row className="flex-between-center mb-3">
                    <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                        {/* <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                            {
                                Object.keys(selectedRowIds).length > 0 ?
                                    'You have selected ' + Object.keys(selectedRowIds).length + ' Enquiries'
                                    :
                                    ''
                            }
                        </h5> */}
                    </Col>
                    {/* <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row> */}
                    <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                        {Object.keys(selectedRowIds).length > 0 ? (
                            <div className="d-flex">

                            </div>
                        ) : (
                            <div id="orders-actions">

                            </div>
                        )}
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <>
            <Card className="mb-3 mt-4 btn-reveal-trigger h-100">
                <Card.Header className="d-flex flex-between-center bg-light ">
                    <h5 className="text-capitalize">
                        Invoice
                    </h5>
                    <Button
                        variant="falcon-default"
                        size="sm"
                        transform="shrink-3"
                    >
                        <Icon icon="uil:external-link-alt" width="18" height="18" /><span className="d-none d-sm-inline-block ms-1">Export</span>
                    </Button>
                </Card.Header>
                <Card.Body>
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
                                className: 'fs--1 mb-0 overflow-hidden'
                            }}
                        />
                        <div className="mt-3">
                            {/* <AdvanceTableFooter
                    rowCount={data.length}
                    table
                    rowInfo
                    navButtons
                    rowsPerPageSelection
                /> */}
                        </div>
                    </AdvanceTableWrapper>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="">
                    <h5>
                        New Invoice:<span style={{ fontSize: '16px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>
                    <Button className="bg-danger border-0" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Card style={{ background: '#F3F3F3' }}>
                        <Card.Body>
                            <div className="row">
                                <div className="col-lg-5">
                                    <label className="form-label  fw-semibold text-900">Item</label>
                                    <p className="text-dark fw-semibold">
                                        CALACATTA LIGHT QUARTZ
                                    </p>
                                    <p style={{ width: '90%' }} className="text-justify mb-2">
                                        t is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.
                                    </p>
                                </div>

                                <div className="col-lg-4">

                                    <label className="form-label  fw-semibold text-900">Billing period</label>
                                    <p className="d-flex  flex-row gap-2">
                                        <p className="text-dark fw-semibold">18/05/2023</p>
                                        {/* <input className="form-control" type="date" /> */}
                                        <p className="text-dark fw-semibold">-</p>
                                        {/* <input className="form-control" type="date" /> */}
                                        <p className="text-dark fw-semibold">29/05/2023</p>
                                    </p>

                                </div>
                                <div className="col-lg-2">

                                    <label className="form-label fw-semibold text-900">Quantity</label>
                                    <p className="text-dark ms-lg-4 fw-semibold">
                                        2
                                    </p>

                                </div>
                                <div className="col-lg-1">
                                    <label className="form-label fw-semibold text-900">Amount</label>
                                    <p className="text-dark ms-lg-3 fw-semibold">
                                        £100
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <tr>
                            <td>
                                <h6 className="mt-3 text-900 me-3">Invoice Total :</h6>
                            </td>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">£ 200</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">Tax : <span className="fw-semibold ms-3 mt-2">20 %</span></h6>
                            </td>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">£ 40</h6>
                                <Divider />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="fw-semibold mt-3 text-900 me-3">Grand Total:</h5>

                            </td>
                            <td>
                                <h5 className="fw-semibold mt-3 text-900 me-3">£ 240</h5>
                                <Divider />
                            </td>
                        </tr>
                        <div className="mt-3 d-flex justify-content-end">
                            <Button as={Link} to="/InvoiceCheckout" className="bg-success border-0">Pay Now</Button>
                            <Button  onClick={() => setShowModal2(true)} className="bg-danger ms-2 border-0">Cancel</Button>
                            {/*  */}
                            <Modal show={showModal2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Warning</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="text-capitalize">
                                        Are you sure you want to cancel this Invoice?
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleShow1}>
                                        Cancel
                                    </Button>

                                </Modal.Footer>
                            </Modal>
                            {/*  */}
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
            {/* Modal */}
            {/* Modal */}
            <Modal
                show={show1}
                onHide={() => setShow1(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="">
                    <h5>
                        New Invoice:<span style={{ fontSize: '16px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>
                    <Button className="bg-danger border-0" onClick={handleClose1}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Card style={{ background: '#F3F3F3' }}>
                        <Card.Body>
                            <div className="row">
                                <div className="col-lg-5">
                                    <label className="form-label  fw-semibold text-900">Item</label>
                                    <p className="text-dark fw-semibold">
                                        CALACATTA LIGHT QUARTZ
                                    </p>
                                    <p style={{ width: '90%' }} className="text-justify mb-2">
                                        t is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout.
                                    </p>
                                </div>

                                <div className="col-lg-4">

                                    <label className="form-label  fw-semibold text-900">Billing period</label>
                                    <p className="d-flex  flex-row gap-2">
                                        <p className="text-dark fw-semibold">18/05/2023</p>
                                        {/* <input className="form-control" type="date" /> */}
                                        <p className="text-dark fw-semibold">-</p>
                                        {/* <input className="form-control" type="date" /> */}
                                        <p className="text-dark fw-semibold">29/05/2023</p>
                                    </p>

                                </div>
                                <div className="col-lg-2">

                                    <label className="form-label fw-semibold text-900">Quantity</label>
                                    <p className="text-dark ms-lg-4 fw-semibold">
                                        2
                                    </p>

                                </div>
                                <div className="col-lg-1">
                                    <label className="form-label fw-semibold text-900">Amount</label>
                                    <p className="text-dark ms-lg-3 fw-semibold">
                                        £100
                                    </p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <tr>
                            <td>
                                <h6 className="mt-3 text-900 me-3">Invoice Total:</h6>
                            </td>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">£ 200</h6>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">Tax : <span className="fw-semibold ms-3 mt-2">20 %</span></h6>
                            </td>
                            <td>
                                <h6 className=" mt-3 text-900 me-3">£ 40</h6>
                                <Divider />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h5 className="fw-semibold mt-3 text-900 me-3">Grand Total:</h5>

                            </td>
                            <td>
                                <h5 className="fw-semibold mt-3 text-900 me-3">£ 240</h5>
                                <Divider />
                            </td>
                        </tr>
                        <div className="mt-3 d-flex justify-content-end">
                            <span style={{ fontSize: '14px' }} onClick={handleClose} className="badge p-2 bg-danger ms-2 border-0">Cancelled</span>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
            {/*  */}
        </>
    )
}
export default InvoiceTableCard
