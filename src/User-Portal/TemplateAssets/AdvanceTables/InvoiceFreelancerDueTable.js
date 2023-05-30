import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Modal, Col, Card, Dropdown, Button, Form,Image } from "react-bootstrap";
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
            <Modal
                show={show}
                onHide={() => setShow(false)}
                // backdrop="static"
                dialogClassName="modal-lg modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <h5>
                        Invoice:<span style={{ fontSize: '16px' }} className="ms-2 text-danger">Project Id : #123456</span>
                    </h5>

                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-900 text-uppercase">
                            Service Date
                            <span className="text-danger">*</span></Form.Label>
                        <input type="date" className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-900 text-uppercase">
                            Product/Service
                            <span className="text-danger">*</span></Form.Label>
                        <input className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-900 text-uppercase">
                            Description
                            <span className="text-danger">*</span></Form.Label>
                        <textarea rows={3} className="form-control resize-none">

                        </textarea>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-900 text-uppercase">
                            Quantity
                            <span className="text-danger">*</span></Form.Label>
                        <input type="number" className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-900 text-uppercase">
                            Rate
                            <span className="text-danger">*</span></Form.Label>
                        <input className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-900 text-uppercase">
                            Amount
                            <span className="text-danger">*</span></Form.Label>
                        <input className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-900 text-uppercase">
                            VAT
                            <span className="text-danger">*</span></Form.Label>
                        <input className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="text-900 text-uppercase">Message on Invoice</Form.Label>
                        <textarea className="form-control w-100" rows={3}>

                        </textarea>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Label className="text-900 text-uppercase">Message on Statement</Form.Label>
                        <textarea className="form-control w-100" rows={3}>

                        </textarea>
                    </Form.Group>
                    <Form.Group className="mt-3 mb-3">
                        <Form.Label className="text-900 text-uppercase">Attachments</Form.Label>
                        <div >
                            <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                <input {...getInputProps({ multiple: false })} />
                                <div className="fs--1">
                                    <img src={cloudUpload} alt="" width={20} className="me-2" />
                                    <span className="d-none d-lg-inline">
                                        Drag your image here
                                        <br />
                                        or,{' '}
                                    </span>
                                    <Button variant="link" size="sm" className="p-0 fs--1">
                                        Browse
                                    </Button>
                                </div>
                            </div>
                            {cover && (
                                <div className="mt-3">
                                    <div key={cover.path} className='d-flex btn-reveal-trigger align-items-center'>
                                        <Image
                                            rounded
                                            width={40}
                                            height={40}
                                            src={cover.preview}
                                            alt={cover.path}
                                        />
                                        <div className='mx-2 flex-1 text-truncate flex-column d-flex justify-content-between'>

                                            <h6 className="text-truncate">{cover.path}</h6>
                                            <div className="d-flex align-items-center position-relative">
                                                <p className="mb-0 fs--1 text-400 line-height-1">
                                                    <strong>{getSize(cover.size)}</strong>
                                                </p>
                                            </div>
                                        </div>
                                        <CardDropdown>
                                            <div className="py-2">
                                                <Dropdown.Item
                                                    className="text-danger"
                                                    onClick={() => setCover()}
                                                >
                                                    Remove
                                                </Dropdown.Item>
                                            </div>
                                        </CardDropdown>
                                    </div>
                                </div>
                            )}

                        </div>
                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>

                    </Form.Group>
                    <Form.Group className="mt-3 mb-3">
                        <Form.Label className="text-900 text-uppercase">Discounts (%)</Form.Label>
                        <input type="text" className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mt-3 mb-3">
                        <Form.Label className="text-900 text-uppercase">Shipping Tax (%)</Form.Label>
                        <input type="text" className="form-control form-control-sm" />
                    </Form.Group>
                    <Form.Group className="mt-3 mb-3">
                        <Form.Label className="text-900 text-uppercase">Deposit</Form.Label>
                        <input type="text" className="form-control form-control-sm" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Add</Button>
                    <Button onClick={handleClose}>Save & Add Another</Button>
                    
                </Modal.Footer>
            </Modal>
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
                    <InvoiceTable />
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

                </Modal.Footer>
            </Modal>
            {/* View Modal */}
        </>
    )
}
export default InvoiceFreelancerDueTable
