import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import CardDropdown from "../common/CardDropdown"
import { Icon } from "@iconify/react";
import { Row, Button, Col, Form, Card, Modal } from "react-bootstrap";
// import CardDropdown from '../utilities/CardDropdown'
import { Divider } from "@mui/material";
import file from '../../Components/Projectimages/BathroomFitting.jpg'
import InvoiceTable from "./InvoiceTable";


const RaiseInvoiceTable = () => {
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


    const columns = [
        {
            accessor: 'date',
            Header: 'Service Date'
        },
        {
            accessor: 'prse',
            Header: 'Product/Service'
        },
        {
            accessor: 'description',
            Header: 'Description'
        },
        {
            accessor: 'quantity',
            Header: 'Quantity'
        },
        {
            accessor: 'rate',
            Header: 'Rate'
        },
        {
            accessor: 'amount',
            Header: 'Amount'
        },
        {
            accessor: 'vat',
            Header: 'VAT'
        },
        {
            accessor: 'action',
            Header: 'Action'
        }
    ];


    const data = [
        {
            date: '22 MAR 2023',
            invoice: "#M24AZQ",
            description: <span className="w-50">
                paid to Alhaz Abdul K. for Project do 15... (Approved)
            </span>,
            amount: "£ 200",
            action:
                <div>
                   
                    <button class="btn btn-link p-0 ms-2" type="button" onClick={setShowModal3} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"><span class="text-500 fas fa-trash-alt"></span>
                    </button>
                </div>,
            rate: '£100',
            vat: '20%',
            quantity: '2',
            prse: "Calacatta Light Quartz"
        },



    ];



    function BulAction({ selectedRowIds }) {

        return (
            <Row className="flex-between-center mb-3">
            </Row>

        );
    };

    return (
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
                    <InvoiceTable/>
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
        </AdvanceTableWrapper>
    )
}
export default RaiseInvoiceTable
