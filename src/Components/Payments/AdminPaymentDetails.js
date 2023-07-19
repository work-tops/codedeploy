import React, { useState } from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Modal } from "react-bootstrap";
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import logo from '../../User-Portal/Components/Projectimages/My Project Final logo-01.png'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


const Payments = () => {

    const [show, setShow] = useState(false);
    const [reply, setReply] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const columns = [
        {
            accessor: 'paymentID',
            Header: 'Payment ID'
        },
        {
            accessor: 'customerName',
            Header: 'Customer Name'
        },
        {
            accessor: 'email',
            Header: 'Email',
            Cell: rowData => {
                const { email } = rowData.row.original
                return (
                    <a href={'mailto:' + email}>
                        {email}
                    </a>
                )
            }
        },
        {
            accessor: 'ProductService',
            Header: 'Product/Service/Projects'
        },
        {
            accessor: 'Amount',
            Header: 'Amount'
        },
        {
            accessor: 'payment',
            Header: 'Payment'
        },
        {
            accessor: 'action',
            Header: 'Action'
        }
    ];

    const data = [
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            email: "petergms@gmail.com",
            ProductService: "Kitchen Worktops",
            Amount: "£ 100",
            payment: <span className="badge  bg-warning">Pending</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-danger">Declined</span>,
            email: "petergms@gmail.com", ProductService: "Kitchen Worktops", Amount: "£ 100",
            status: <span className="badge  bg-warning">Approval Pending</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Kitchen Worktops", Amount: "£ 100",
            status: <span className="badge  bg-secondary">Disabled</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-warning">Pending</span>,
            email: "petergms@gmail.com", ProductService: "Kitchen Worktops", Amount: "£ 100",
            status: <span className="badge  bg-danger">Expired</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Plumbing", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Plumbing", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Roofing", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Roofing", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Calacatta Light Quartz", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Calacatta Light Quartz", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Calacatta Light Quartz", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-danger">Declined</span>,
            email: "petergms@gmail.com", ProductService: "Kitchen Worktops", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
        ,
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Kitchen Worktops", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
        ,
        {
            paymentID: '456234',
            customerName: 'Peter Leverkus',
            payment: <span className="badge  bg-success">Successful</span>,
            email: "petergms@gmail.com", ProductService: "Kitchen Worktops", Amount: "£ 100",
            status: <span className="badge  bg-success">Approved</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>View</Dropdown.Item>
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
                            // Object.keys(selectedRowIds).length > 0 ?
                            //     'You have selected ' + Object.keys(selectedRowIds).length + 'Lists'
                            //     :
                            //     ''
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
                            <Button variant="falcon-default"
                                size="sm" className="fs--1"><Icon icon="entypo:export" width="18" height="18" className="" /><span className="d-none ms-2 d-lg-inline">Export</span>
                            </Button>
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
                    <Card className="">
                        <Card.Header className="bg-light">
                            <h2>Payments<span className="ms-2 fs--1 badge bg-secondary">#100</span></h2>
                            <p className="text-dark text-capitalize  mt-2">Here all the Payments on your store</p>
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
                            </AdvanceTableWrapper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*  */}
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Payment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Body>
                        <div className="card mb-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-md">
                                            <h5 className="mb-2 mb-md-0"># MAI/INV/2737</h5>
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-falcon-success btn-sm mb-2 me-1 mb-sm-0" type="button">
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
                                            <h6 className="text-500">Invoice to</h6>
                                            <h5>Peter Leverkus</h5>
                                            <p className="fs--1">1954 Bloor Street West<br></br>Torronto ON, M6P 3K9<br></br>Canada</p>
                                        </div>
                                        <div className="col-sm-auto ms-auto">
                                            <div className="table-responsive">
                                                <table className="table table-sm table-borderless fs--1">
                                                    <tbody>
                                                        <tr>
                                                            <th className="text-sm-end">Invoice No:</th>
                                                            <td># MAI/EST/2737</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="text-sm-end">Enquiry Number:</th>
                                                            <td>#2737</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="text-sm-end">Invoice Date:</th>
                                                            <td>2018-09-25</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="text-sm-end">Expiry Date:</th>
                                                            <td>2020-09-25</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="text-sm-end">Payment Status:</th>
                                                            <td><span className="badge bg-success">Paid</span></td>
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
                                                ....
                                            </p>
                                            <h6>Terms & Conditions</h6>
                                            <p>
                                                Read our <Link to="/termsofuse" className="text-capitalize me-1">Terms & Conditions</Link>to know more
                                            </p>
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
                        </div>
                    </Modal.Body>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default Payments
