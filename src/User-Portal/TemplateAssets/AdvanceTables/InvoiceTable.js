import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import CardDropdown from "../common/CardDropdown"
import { Icon } from "@iconify/react";
import { Row, Button, Col, Form, Table, Modal } from "react-bootstrap";
// import CardDropdown from '../utilities/CardDropdown'
import { Divider } from "@mui/material";
import file from '../../Components/Projectimages/BathroomFitting.jpg'


const InvoiceTable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // Cancel Modal
    const [showModal3, setShowModal3] = useState(false);

    const handleClose3 = () => {
        setShowModal3(false);
    };
    const [invoiceItems, setInvoiceItems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(0);
    const [shippingTax, setShippingTax] = useState(0);
    const [deposit, setDeposit] = useState(0);
    const [savedData, setSavedData] = useState([]);

    const handleAddItem = () => {
        setInvoiceItems([...invoiceItems, {}]);
    };

    const handleDeleteItem = (index) => {
        const updatedItems = invoiceItems.filter((item, i) => i !== index);
        setInvoiceItems(updatedItems);
    };

    const handleChange = (event, index, field) => {
        const updatedItems = [...invoiceItems];
        updatedItems[index][field] = event.target.value;
        setInvoiceItems(updatedItems);
    };

    const handleSave = () => {
        setSavedData(invoiceItems);
        setInvoiceItems([]);
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


    // const columns = [
    //     {
    //         accessor: 'date',
    //         Header: 'Service Date'
    //     },
    //     {
    //         accessor: 'prse',
    //         Header: 'Product/Service'
    //     },
    //     {
    //         accessor: 'description',
    //         Header: 'Description'
    //     },
    //     {
    //         accessor: 'quantity',
    //         Header: 'Quantity'
    //     },
    //     {
    //         accessor: 'rate',
    //         Header: 'Rate'
    //     },
    //     {
    //         accessor: 'amount',
    //         Header: 'Amount'
    //     },
    //     {
    //         accessor: 'vat',
    //         Header: 'VAT'
    //     },
    //     {
    //         accessor: 'action',
    //         Header: 'Action'
    //     }
    // ];


    // const data = [
    //     {
    //         date: '22 MAR 2023',
    //         invoice: "#M24AZQ",
    //         description: <span className="w-50">
    //             paid to Alhaz Abdul K. for Project do 15... (Approved)
    //         </span>,
    //         amount: "£ 200",
    //         action:
    //             ,
    //         rate: '£100',
    //         vat: '20%',
    //         quantity: '2',
    //         prse: "Calacatta Light Quartz"
    //     },



    // ];
    // 


    function BulAction({ selectedRowIds }) {

        return (
            <Row className="flex-between-center mb-3">
            </Row>

        );
    };

    return (
        <>
            {/*  */}
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
                    {savedData.map((item, index) => (
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
                    <div>
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
                                            <Form.Control
                                                type="text"
                                                value={item.serviceDate || ''}
                                                onChange={(e) => handleChange(e, index, 'serviceDate')}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={item.product || ''}
                                                onChange={(e) => handleChange(e, index, 'product')}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={item.description || ''}
                                                onChange={(e) => handleChange(e, index, 'description')}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={item.quantity || ''}
                                                onChange={(e) => handleChange(e, index, 'quantity')}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={item.rate || ''}
                                                onChange={(e) => handleChange(e, index, 'rate')}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={item.amount || ''}
                                                onChange={(e) => handleChange(e, index, 'amount')}
                                            />
                                        </td>
                                        <td>
                                            <Form.Control
                                                type="text"
                                                value={item.vat || ''}
                                                onChange={(e) => handleChange(e, index, 'vat')}
                                            />
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => handleDeleteItem(index)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Sub Total:</td>
                                    <td>{calculateSubTotal()}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Discount %:</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={discount}
                                            onChange={(e) => setDiscount(e.target.value)}
                                        />
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Tax:</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={tax}
                                            onChange={(e) => setTax(e.target.value)}
                                        />
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Shipping Tax:</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={shippingTax}
                                            onChange={(e) => setShippingTax(e.target.value)}
                                        />
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Deposit:</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={deposit}
                                            onChange={(e) => setDeposit(e.target.value)}
                                        />
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Total:</td>
                                    <td>{calculateTotal()}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Balance Due:</td>
                                    <td>{calculateBalanceDue()}</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </Table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleAddItem}>
                        Add Item
                    </Button>
                    <Button variant="success" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Edit Modal */}





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
            {/* Modal */}
            <Modal
                show={show1}
                onHide={() => setShow1(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <h5>
                        New Invoice:<span style={{ fontSize: '16px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>
                </Modal.Header>
                <Modal.Body>
                    <InvoiceTable />
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
                                <h6 className=" mt-3 text-900 me-3">Tax:</h6>

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
            {/* </AdvanceTableWrapper> */}
        </>
    )
}
export default InvoiceTable
