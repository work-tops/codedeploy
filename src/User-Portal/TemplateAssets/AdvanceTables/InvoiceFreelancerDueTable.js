import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Modal, Col, Card, Dropdown, Button, Form, Table } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import logo from '../../Components/Projectimages/My Project Final logo-01.png'
import file from '../../Components/Projectimages/BathroomFitting.jpg'
import { useDropzone } from 'react-dropzone';
import { Link } from "react-router-dom";
const InvoiceFreelancerDueTable = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    // Cancel Modal
    const [showModal3, setShowModal3] = useState(false);

    const handleClose3 = () => {
        setShowModal3(false);
    };

    const [cover, setCover] = useState();

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setCover(
                Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0])
                })
            );
        }
    });

    // 
    const [invoiceItems, setInvoiceItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [shippingTax, setShippingTax] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddItem = () => {
        setInvoiceItems([...invoiceItems, {}]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = [...invoiceItems];
        updatedItems.splice(index, 1);
        setInvoiceItems(updatedItems);
    };

    const handleEditItem = (index) => {
        setEditIndex(index);
    };

    const handleSaveItem = (index) => {
        setEditIndex(null);
    };

    const handleChange = (event, index, field) => {
        const updatedItems = [...invoiceItems];
        updatedItems[index][field] = event.target.value;
        setInvoiceItems(updatedItems);
    };

    const calculateSubTotal = () => {
        let total = 0;
        invoiceItems.forEach((item) => {
            const amount = parseFloat(item.amount) || 0;
            total += amount;
        });
        return total.toFixed(2);
    };

    const calculateTotal = () => {
        const subTotal = parseFloat(calculateSubTotal()) || 0;
        const discountAmount = (subTotal * parseFloat(discount)) / 100;
        const taxAmount = (subTotal * parseFloat(tax)) / 100;
        const total =
            subTotal + parseFloat(shippingTax) + parseFloat(deposit) - discountAmount + taxAmount;
        return total.toFixed(2);
    };

    const calculateBalanceDue = () => {
        const total = parseFloat(calculateTotal()) || 0;
        return (total - parseFloat(deposit)).toFixed(2);
    };

    const handleSave = () => {
        // Save the entered data
        const savedData = [...invoiceItems];
        setInvoiceItems(savedData);
    };


    const columns = [
        {
            accessor: 'invoiceNo',
            Header: 'Invoice No'
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
            itemName: 'CALACATTA LIGHT QUARTZ',
            invoiceNo: 'MAI/INV/2737',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-success">Paid</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2}>View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/EditInvoice" >Edit</Dropdown.Item>

            </CardDropdown>,
        },
        {
            itemName: 'CALACATTA LIGHT QUARTZ',
            invoiceNo: 'MAI/INV/2737',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-warning">New</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/EditInvoice" >Edit</Dropdown.Item>

            </CardDropdown>,
        },
        {
            itemName: 'CALACATTA LIGHT QUARTZ',
            invoiceNo: 'MAI/INV/2737',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-danger">Rejected</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/EditInvoice" >Edit</Dropdown.Item>

            </CardDropdown>,
        }
        ,
        {
            itemName: 'CALACATTA LIGHT QUARTZ',
            invoiceNo: 'MAI/INV/2737',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-secondary">Draft</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2}>View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/EditInvoice" >Edit</Dropdown.Item>

            </CardDropdown>,
        },
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


            {/* Invoice Modal */}

            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton className="">
                    {/* <h5>
                        Invoice :<span style={{ fontSize: '14px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5> */}

                </Modal.Header>
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
                    </div>
                </Modal.Body>
            </Modal>
            {/* Invoice Modal */}

            {/*Warning Modal  */}
            <Modal show={showModal3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-capitalize">
                        Are you sure you want to cancel this Invoice?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleShow1}>
                        Yes
                    </Button>

                </Modal.Footer>
            </Modal>
            {/*  */}
        </>
    )
}
export default InvoiceFreelancerDueTable
