import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import { Row, Dropdown, Col, Modal, Card, Button } from "react-bootstrap";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import NavbarStandard from "../../Components/Header/AdvanceHeader/NavbarStandard";
import CardDropdown from '../common/CardDropdown'
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import logo from '../../Components/Projectimages/My Project Final logo-01.png'

const EstimateTable = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const columns = [
        {
            accessor: 'date',
            Header: 'Date'
        },
        {
            accessor: 'customerName',
            Header: 'Customer Name'
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
            estimateNo: <a href="#" onClick={handleShow}>MAI/EST/000001</a>,
            enquiryNo: '#2737',
            status: <span className="badge bg-success">
                Sent
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item as={Link} to="/edit-estimate">Edit</Dropdown.Item>
                    <Dropdown.Item>Send</Dropdown.Item>
                    <Dropdown.Item>Print</Dropdown.Item>

                </div>
            </CardDropdown>
        },
        {
            date: '22 MAR 2023',
            customerName: 'Peter Leverkus',
            estimateNo: <a href="#" onClick={handleShow}>MAI/EST/000001</a>,
            enquiryNo: '#2737',
            status: <span className="badge bg-danger">
                Declined
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item as={Link} to="/edit-estimate">Edit</Dropdown.Item>
                    <Dropdown.Item>Send</Dropdown.Item>
                    <Dropdown.Item>Print</Dropdown.Item>

                </div>
            </CardDropdown>
        },
        {
            date: '22 MAR 2023',
            customerName: 'Peter Leverkus',
            estimateNo: <a href="#" onClick={handleShow}>MAI/EST/000001</a>,
            enquiryNo: '#2737',
            status: <span className="badge bg-secondary">
                Draft
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item as={Link} to="/edit-estimate">Edit</Dropdown.Item>
                    <Dropdown.Item>Send</Dropdown.Item>
                    <Dropdown.Item>Print</Dropdown.Item>

                </div>
            </CardDropdown>
        },
        {
            date: '22 MAR 2023',
            customerName: 'Peter Leverkus',
            estimateNo: <a href="#" onClick={handleShow}>MAI/EST/000001</a>,
            enquiryNo: '#2737',
            status: <span className="badge bg-primary">
                Invoiced
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item as={Link} to="/edit-estimate">Edit</Dropdown.Item>
                    <Dropdown.Item>Send</Dropdown.Item>
                    <Dropdown.Item>Print</Dropdown.Item>

                </div>
            </CardDropdown>
        },

        {
            date: '22 MAR 2023',
            customerName: 'Peter Leverkus',
            estimateNo: <a href="#" onClick={handleShow}>MAI/EST/000001</a>,
            enquiryNo: '#2737',
            status: <span className="badge bg-warning">
                Expired
            </span>,
            amount: "£ 281.81",
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item as={Link} to="/edit-estimate">Edit</Dropdown.Item>
                    <Dropdown.Item>Send</Dropdown.Item>
                    <Dropdown.Item>Print</Dropdown.Item>

                </div>
            </CardDropdown>
        }
    ];


    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
            </Row>

        );
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
            </Row>
            <div className="ms-3 me-3 mt-4">
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
                            // selection
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
            {/* Estimate Modal */}
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <h5>Estimate Details</h5>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className="card mb-3"> */}
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md">
                                        <h5 className="mb-2 mb-md-0"># MAI/EST/000001</h5>
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn  btn-falcon-success btn-sm me-1 mb-2 mb-sm-0" type="button">
                                            Download
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
                            <div className="card-header bg-light">
                                <div className="d-flex justify-content-center">
                                    <img src={logo} alt="invoice" width="135px" />
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row align-items-center text-center mb-3">
                                    <div className="col-sm-6 text-sm-start">

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
                                                        <th className="text-sm-end">Expiry Date:</th>
                                                        <td>2020-09-25</td>
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
                                                <th className="border-0">Products</th>
                                                <th className="border-0 text-center">Quantity</th>
                                                <th className="border-0 text-end">Rate</th>
                                                <th className="border-0 text-end">Discount</th>
                                                <th className="border-0 text-end">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Platinum web hosting package</h6>
                                                    <p className="mb-0 fs--1">Down 35mb, Up 100mb</p>
                                                </td>
                                                <td className="align-middle text-center">2</td>
                                                <td className="align-middle text-end">£ 65.00</td>
                                                <td className="align-middle text-end">10%</td>
                                                <td className="align-middle text-end">£ 130.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Platinum web hosting package</h6>
                                                    <p className="mb-0 fs--1">Down 35mb, Up 100mb</p>
                                                </td>
                                                <td className="align-middle text-center">2</td>
                                                <td className="align-middle text-end">£ 65.00</td>
                                                <td className="align-middle text-end">10%</td>
                                                <td className="align-middle text-end">£ 130.00</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle">
                                                    <h6 className="mb-0 text-nowrap">Platinum web hosting package</h6>
                                                    <p className="mb-0 fs--1">Down 35mb, Up 100mb</p>
                                                </td>
                                                <td className="align-middle text-center">2</td>
                                                <td className="align-middle text-end">£ 65.00</td>
                                                <td className="align-middle text-end">10%</td>
                                                <td className="align-middle text-end">£ 130.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row g-3 justify-content-between">
                                    <div className="order-2 order-lg-0 col-md-6">
                                        <h6>Customer Notes</h6>
                                        <p className="text-justify">
                                            .....
                                        </p>
                                        <h6>Terms & Conditions</h6>
                                        Read our <Link to="/termsofuse" className="text-capitalize me-1">Terms & Conditions</Link>to know more
                                    </div>
                                    <div className="col-md-6">
                                        <table className="table table-sm table-borderless fs--1 text-end">
                                            <tbody><tr>
                                                <th className="text-900">Subtotal:</th>
                                                <td className="fw-semi-bold">£ 18,230.00 </td>
                                            </tr>
                                                <tr>
                                                    <th className="text-900">Shipping Charges 20%:</th>
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

                        </div>
                    {/* </div> */}
                </Modal.Body>
            </Modal>
            {/*  */}
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default EstimateTable
