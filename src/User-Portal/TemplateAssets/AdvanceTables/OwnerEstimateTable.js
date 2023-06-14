import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import { Row, Dropdown, Col, Button, Modal, Card } from "react-bootstrap";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import NavbarStandard from "../../Components/Header/AdvanceHeader/NavbarStandard";
import CardDropdown from '../common/CardDropdown'
import { Link } from "react-router-dom";

const OwnerEstimateTable = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
            </Row>

        );
    };

    const columns = [
        {
            accessor: 'date',
            Header: 'Date'
        },

        {
            accessor: 'estimateNo',
            Header: 'Estimate No'
        },
        {
            accessor: 'enquiryNo',
            Header: 'Enquiry No'
        },
        {
            accessor: 'status',
            Header: 'Status'
        },
        {
            accessor: 'amount',
            Header: 'Amount'
        },
        {
            accessor: 'action',
            Header: 'Action'
        }
    ];

    const data = [
        {
            date: '22 MAR 2023',
            customerName: 'Peter Leverkus',
            estimateNo: "MAI/EST/2737",
            enquiryNo: '#2737',
            status: <span className="badge bg-success">
                Paid
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item>Download</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            date: '22 MAR 2023',
            customerName: 'Peter Leverkus',
            estimateNo: "MAI/EST/2737",
            enquiryNo: '#2737',
            status: <span className="badge bg-danger">
                Declined
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item>Download</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            date: '22 MAR 2023',
            customerName: 'Peter Leverkus',
            estimateNo: "MAI/EST/2737",
            enquiryNo: '#2737',
            status: <span className="badge bg-primary">
                New
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item>Download</Dropdown.Item>

                </div>
            </CardDropdown>
        },
    ];



    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
            </Row>
            <div className="container mt-4">
                <Card className="mb-3 btn-reveal-trigger h-100">
                    <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                        <h5 className="text-capitalize">
                            Estimate
                        </h5>
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
                                <AdvanceTableFooter
                                    rowCount={data.length}
                                    table
                                    rowInfo
                                    navButtons
                                    rowsPerPageSelection
                                />
                            </div>
                        </AdvanceTableWrapper>
                    </Card.Body>
                </Card>
            </div>
            {/*  */}
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Estimate Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="card mb-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md">
                                        <h5 className="mb-2 mb-md-0"># MAI/EST/2737</h5>
                                    </div>
                                    <div className="col-auto">
                                        <Link to="/InvoiceCheckout">
                                            <button className="btn  btn-falcon-success btn-sm me-1 mb-2 mb-sm-0" type="button">
                                                Accept
                                            </button>
                                        </Link>
                                        <button className="btn btn-falcon-danger btn-sm mb-2 me-1 mb-sm-0" type="button">
                                            Decline
                                        </button>
                                        <button className="btn btn-falcon-default btn-sm me-1 mb-2 mb-sm-0" type="button">
                                            <span className="fas fa-print me-1"> </span>
                                            Print
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row align-items-center text-center mb-3">
                                    <div className="col-sm-6 text-sm-start">
                                        {/* <img src="../../assets/img/logos/logo-invoice.png" alt="invoice" width="150" /> */}
                                        <h1 style={{ color: '#003f6b' }}>MAI</h1>
                                        <p style={{ color: '#003f6b' }}>Myproject.ai</p>
                                        <h6 className="">From,</h6>
                                        <h6>Jagan</h6>
                                        <p className="fs--1 mb-0">156 University Ave, Toronto<br></br>On, Canada, M5H 2H7</p>
                                    </div>

                                    <div className="col-12">
                                        <hr></hr>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="text-500">Estimate to</h6>
                                        <h5>Peter Leverkus</h5>
                                        <p className="fs--1">1954 Bloor Street West<br></br>Torronto ON, M6P 3K9<br></br>Canada</p>
                                    </div>
                                    <div className="col-sm-auto ms-auto">
                                        <div className="table-responsive">
                                            <table className="table table-sm table-borderless fs--1">
                                                <tbody>
                                                    <tr>
                                                        <th className="text-sm-end">Estimate No:</th>
                                                        <td># MAI/EST/2737</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-sm-end">Enquiry Number:</th>
                                                        <td>#2737</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-sm-end">Estimate Date:</th>
                                                        <td>2018-09-25</td>
                                                    </tr>
                                                    <tr>
                                                        <th className="text-sm-end">Payment Status:</th>
                                                        <td><span className="badge bg-warning">Pending</span></td>
                                                    </tr>
                                                    <tr className="alert alert-success fw-bold">
                                                        <th className="text-sm-end">Amount:</th>
                                                        <td>£ 19688.40</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive scrollbar mt-4 fs--1">
                                    <table className="table table-striped border-bottom">
                                        <thead className="light">
                                            <tr className="bg-primary text-white dark__bg-1000">
                                                <th className="border-0"><span className="me-1">Product</span><span>Service</span></th>
                                                <th className="border-0 text-center">Quantity</th>
                                                <th className="border-0 text-end">Rate</th>
                                                <th className="border-0 text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Platinum web hosting package</h6>
                                                    <p className="mb-0">Down 35mb, Up 100mb</p>
                                                </td>
                                                <td className="align-middle text-center">2</td>
                                                <td className="align-middle text-end">£ 65.00</td>
                                                <td className="align-middle text-end">£ 130.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">2 Page website design</h6>
                                                    <p className="mb-0">Includes basic wireframes and responsive templates</p>
                                                </td>
                                                <td className="align-middle text-center">1</td>
                                                <td className="align-middle text-end">£ 2,100.00</td>
                                                <td className="align-middle text-end">£ 2,100.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Mobile App Development</h6>
                                                    <p className="mb-0">Includes responsive navigation</p>
                                                </td>
                                                <td className="align-middle text-center">8</td>
                                                <td className="align-middle text-end">£ 5,00.00</td>
                                                <td className="align-middle text-end">£ 4,000.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Web App Development</h6>
                                                    <p className="mb-0">Includes react spa</p>
                                                </td>
                                                <td className="align-middle text-center">6</td>
                                                <td className="align-middle text-end">£ 2,000.00</td>
                                                <td className="align-middle text-end">£ 12,000.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row justify-content-end">
                                    <div className="col-auto">
                                        <table className="table table-sm table-borderless fs--1 text-end">
                                            <tbody><tr>
                                                <th className="text-900">Subtotal:</th>
                                                <td className="fw-semi-bold">£ 18,230.00 </td>
                                            </tr>
                                                <tr>
                                                    <th className="text-900">Shipping Charges</th>
                                                    <td className="fw-semi-bold">£ 1458.40</td>
                                                </tr>
                                                <tr>
                                                    <th className="text-900">Reduced Rate [5%]:</th>
                                                    <td className="fw-semi-bold">£ 1458.40</td>
                                                </tr>
                                                <tr className="border-top">
                                                    <th className="text-900">Total:</th>
                                                    <td className="fw-semi-bold">£ 19,688.40</td>
                                                </tr>
                                                
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light">
                                <p className="fs--1 mb-0"><span className="fw-bold" style={{fontSize:'16px'}}>Notes: </span>We really appreciate your business and if there’s anything else we can do, please let us know!</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            {/*  */}
        </>
    )
}
export default OwnerEstimateTable
