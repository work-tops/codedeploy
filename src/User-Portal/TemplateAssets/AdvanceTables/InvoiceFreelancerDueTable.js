import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Modal, Col, Card, Dropdown, Button, Form, Table } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";
import InvoiceTable from "./InvoiceTable";
import file from '../../Components/Projectimages/BathroomFitting.jpg'
import { useDropzone } from 'react-dropzone';
import { getSize } from '../helpers/utils';
import cloudUpload from '../assets/cloud-upload.svg';
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
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-success">Paid</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2}>View</Dropdown.Item>

            </CardDropdown>,
        },
        {
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-warning">New</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>

            </CardDropdown>,
        },
        {
            itemName: 'CALACATTA LIGHT QUARTZ',
            date: '18/05/2023',
            description: 'Ricky Antony , 2392 Main Avenue , New Jersy 02149',
            amount: "£ 100",
            status: <span className="badge bg-danger">Rejected</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>

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
                    <div className="d-flex justify-content-end">


                    </div>
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

            {/* Add Modal */}
            {/* Edit Modal */}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                // backdrop="static"
                dialogClassName="modal-xl modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <h5>
                        Invoice:<span style={{ fontSize: '16px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>

                </Modal.Header>
                <Modal.Body>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Service Date</th>
                                <th>Product/Service</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Amount</th>
                                <th>VAT</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceItems.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        {editIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                value={item.serviceDate || ''}
                                                onChange={(e) => handleChange(e, index, 'serviceDate')}
                                            />
                                        ) : (
                                            item.serviceDate
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                value={item.product || ''}
                                                onChange={(e) => handleChange(e, index, 'product')}
                                            />
                                        ) : (
                                            item.product
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                value={item.description || ''}
                                                onChange={(e) => handleChange(e, index, 'description')}
                                            />
                                        ) : (
                                            item.description
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                value={item.quantity || ''}
                                                onChange={(e) => handleChange(e, index, 'quantity')}
                                            />
                                        ) : (
                                            item.quantity
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                value={item.rate || ''}
                                                onChange={(e) => handleChange(e, index, 'rate')}
                                            />
                                        ) : (
                                            item.rate
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                value={item.amount || ''}
                                                onChange={(e) => handleChange(e, index, 'amount')}
                                            />
                                        ) : (
                                            item.amount
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <Form.Control
                                                type="text"
                                                value={item.vat || ''}
                                                onChange={(e) => handleChange(e, index, 'vat')}
                                            />
                                        ) : (
                                            item.vat
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === index ? (
                                            <Button variant="success" className="m-1" onClick={() => handleSaveItem(index)}>
                                                Save
                                            </Button>
                                        ) : (
                                            <Button variant="primary" className="m-1" onClick={() => handleEditItem(index)}>
                                                Edit
                                            </Button>
                                        )}
                                        <Button variant="danger" className="m-1" onClick={() => handleDeleteItem(index)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="6"></td>
                                <td>Sub Total:</td>
                                <td>{calculateSubTotal()}</td>
                            </tr>
                            <tr>
                                <td colSpan="6"></td>
                                <td>Discount %:</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6"></td>
                                <td>Tax:</td>
                                <td>
                                    <Form.Control type="text" value={tax} onChange={(e) => setTax(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6"></td>
                                <td>Shipping Tax:</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={shippingTax}
                                        onChange={(e) => setShippingTax(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6"></td>
                                <td>Deposit:</td>
                                <td>
                                    <Form.Control
                                        type="text"
                                        value={deposit}
                                        onChange={(e) => setDeposit(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="6"></td>
                                <td>Total:</td>
                                <td>{calculateTotal()}</td>
                            </tr>
                            <tr>
                                <td colSpan="6"></td>
                                <td>Balance Due:</td>
                                <td>{calculateBalanceDue()}</td>
                            </tr>
                        </tfoot>
                    </Table>


                    {/* <Button variant="success" onClick={handleSave}>
                            Save
                        </Button> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddItem}>
                        Add Item
                    </Button>

                </Modal.Footer>
            </Modal>
            {/* Edit Modal */}
            {/* Add Modal */}




            {/* View Modal */}

            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton className="">
                    <h5>
                        Invoice :<span style={{ fontSize: '14px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>

                </Modal.Header>
                <Modal.Body>
                    {/* <InvoiceTable /> */}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Service Date</th>
                                <th>Product/Service</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Amount</th>
                                <th>VAT</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoiceItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.serviceDate}</td>
                                    <td>{item.product}</td>
                                    <td>{item.description}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.rate}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.vat}</td>
                                    <td>
                                        <div>
                                            <button class="btn btn-link p-0" type="button" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
                                                <span class="text-500 fas fa-edit"></span>
                                            </button>
                                            <button class="btn btn-link p-0 ms-2" type="button" onClick={setShowModal3} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span class="text-500 fas fa-trash-alt"></span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    {/*  */}
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <Form.Group className="mt-3">
                                <Form.Label className="text-900">Message on Invoice</Form.Label>
                                <p className="w-75 text-justify text-900">
                                    It is a long estabcol-sm-12lished fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </p>
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label className="text-900">Message on Statement</Form.Label>
                                <p className="w-75 text-justify text-900">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                </p>
                            </Form.Group>
                            <Form.Group className="mt-3 mb-3">
                                <Form.Label className="text-900">Attachments</Form.Label>
                                <div className="row bg-pre mt-3">
                                    <div className="col ">
                                        <img src={file} width="50px" height="50px" className="pro-pre" />
                                    </div>
                                </div>
                            </Form.Group>

                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <tr>
                                <td>
                                    <h6 className="mt-3 fw-bold text-900 me-3">Sub Total:</h6>
                                </td>
                                <td>
                                    <h6 className=" mt-3 text-900 me-3">£ 200</h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Discount (20%):</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 text-900 me-3">£ 40</h6>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Shipping (20%):</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 text-900 me-3">£ 40</h6>
                                    <Divider />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Total:</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">£ 280</h6>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Deposit:</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">£ 280</h6>
                                    <Divider />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">Balance Due:</h6>

                                </td>
                                <td>
                                    <h6 className=" mt-3 fw-bold text-900 me-3">£ 280</h6>

                                </td>
                            </tr>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleShow}>Add</Button>
                </Modal.Footer>
            </Modal>
            {/* View Modal */}

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
