import React, { useState,useCallback } from "react";
import { Row, Col, Card, Form, Button, Modal, Table, Image, Dropdown } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Icon } from "@iconify/react";
import { useDropzone } from 'react-dropzone';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import { getSize } from '../../../TemplateAssets/helpers/utils';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';
import { Link } from "react-router-dom";

function NewEstimate() {

    const [covers, setCovers] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Map the acceptedFiles to add the preview property
        const updatedCovers = acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        setCovers((prevCovers) => [...prevCovers, ...updatedCovers]);
    }, []);

    const removeCover = (cover) => {
        setCovers((prevCovers) => prevCovers.filter((c) => c !== cover));
    };


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // 
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const vatOptions = ['Standard Rate [20%]', 'Reduced Rate[5%]', 'Zero Rate[0%]', 'Vat @ [20%]'];


    const [selectedVat, setSelectedVat] = useState([]);

    const handleVatChange = (selected) => {
        setSelectedVat(selected);
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                <div className="container">
                    <Col lg={12} className="mt-4">
                        <Card>
                            <Card.Header className="bg-light" >
                                <h4 className="text-capitalize">Estimate</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Customer Name<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                disabled
                                                placeholder="Name of the Customer Who Raised the Enquiry"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Trader<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                disabled
                                                placeholder="Name of the Trader Who Viewing this Enquiry"
                                                type="text" />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Enquiry Number<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                disabled
                                                placeholder="Eg : #2737"
                                                type="text" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Estimate Number<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                disabled
                                                placeholder="MAI/EST/2737"
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Estimate Date<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="date"

                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Expiry Date<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="date"

                                            />
                                        </Form.Group>
                                    </Row>
                                    {/*  */}
                                    <Row>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Product Title<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                disabled
                                                placeholder="Eg : Quartz"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Service Title<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                disabled
                                                placeholder="Eg : Kitchen Worktops"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Thickness<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"
                                                disabled
                                                placeholder="Eg : 20 MM"

                                            />
                                        </Form.Group>
                                    </Row>
                                    <Form.Group className="mb-3" as={Col} lg={6}>
                                        <Form.Label className="text-uppercase">Description<span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}

                                        />
                                    </Form.Group>
                                    {/*  */}

                                </Form>
                                {/*  */}

                                <Table className="line-item-table" responsive striped>
                                    <thead>
                                        <tr>
                                            <th>Item Details</th>
                                            <th>Quantity</th>
                                            <th>Rate</th>
                                            <th>Discount(%)</th>
                                            <th>VAT</th>
                                            <th>Amount</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><textarea style={{ width: '300px' }} className="form-control resize-none" rows="3"></textarea></td>
                                            <td style={{ width: '0%' }}><input type="number" style={{ width: '100px' }} className="form-control  resize-none" /></td>
                                            <td style={{ width: '0%' }}><input type="number" style={{ width: '100px' }} className=" form-control  resize-none" /></td>
                                            <td style={{ width: '0%' }}><input type="number" style={{ width: '100px' }} className=" form-control  resize-none" /></td>
                                            <td style={{ width: '0%' }}>
                                                <Typeahead
                                                    id="vatTypeahead"
                                                    style={{ width: '200px' }}
                                                    options={vatOptions}
                                                    selected={selectedVat}
                                                    onChange={handleVatChange}
                                                />
                                            </td>
                                            <td style={{ width: '0%' }}>0.00</td>
                                            <td style={{ width: '0%' }}><Icon className="cursor-pointer hover-danger" icon="ic:baseline-delete" width="24" height="24" /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '0%' }}><textarea style={{ width: '300px' }} className="form-control resize-none" rows="3"></textarea></td>
                                            <td style={{ width: '0%' }}><input type="number" style={{ width: '100px' }} className=" form-control  resize-none" /></td>
                                            <td style={{ width: '0%' }}><input type="number" style={{ width: '100px' }} className=" form-control  resize-none" /></td>
                                            <td style={{ width: '0%' }}><input type="number" style={{ width: '100px' }} className=" form-control  resize-none" /></td>
                                            <td>
                                                <Typeahead
                                                    id="vatTypeahead"
                                                    style={{ width: '200px' }}
                                                    options={vatOptions}
                                                    selected={selectedVat}
                                                    onChange={handleVatChange}
                                                />
                                            </td>
                                            <td style={{ width: '0%' }}>0.00</td>
                                            <td style={{ width: '0%' }}><Icon className="hover-danger cursor-pointer" icon="ic:baseline-delete" width="24" height="24" /></td>
                                        </tr>

                                    </tbody>
                                </Table>
                                {/*  */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Button className="btn-success me-2">Add New Item</Button>
                                        <Button >Add VAT</Button>

                                        <Modal show={showModal} onHide={handleModalClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Add VAT</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form.Group>
                                                    <Form.Label className="text-uppercase">VAT Name<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"

                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label className="text-uppercase">VAT Rate (%)<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control
                                                        type="text"

                                                    />
                                                </Form.Group>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleModalClose}>
                                                    Cancel
                                                </Button>
                                                <Button variant="primary" onClick={handleModalClose}>
                                                    Save
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                        {/* Customer Notes */}
                                        <Form.Group className="mt-5 mb-3">
                                            <Form.Label className="text-uppercase">
                                                Customer Notes
                                                {/* <span className="text-danger">*</span> */}
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value="You are required to pay only £250/- before template by PayLink or BACS. Upon your payment confirmation, our template team will contact you to book the appointment at your convenience.

                                                Step-by-step guide (more details)
                                                
                                                 Step 1: Quote
                                                 Step 2: Placing an Order with us
                                                 Step 3: Booking a Template appointment
                                                 Step 4: At Template
                                                 Step 5: Between Template & Installation
                                                 Step 6: At Installation
                                                 Step 7: After Care
                                                
                                                By making the payment you're agreeing our terms & conditions"
                                                className="resize-none"

                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">
                                        <Card style={{ background: '#fbfafa' }}>
                                            <Card.Body>
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        <h6>Sub Total</h6>
                                                    </div>
                                                    <div className="col-8 text-end">
                                                        <h6>0.00</h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                </div>

                                                <div className="row">
                                                    <div className="col-4 mb-3">
                                                        <div className="row mb-2">
                                                            <div className="col-12">
                                                                <h6 className="mb-2">
                                                                    Shipping charges
                                                                </h6>
                                                                <input style={{ width: '100px' }} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <p role="button" className="text-primary">Apply VAT on Shipping Charge</p>
                                                        <Typeahead
                                                            style={{ width: '200px' }}
                                                            id="vatTypeahead"
                                                            placeholder="Select VAT"
                                                            options={vatOptions}
                                                            selected={selectedVat}
                                                            onChange={handleVatChange}
                                                        />
                                                    </div>
                                                    <div className="col-8 text-end">
                                                        <h6 >0.00</h6>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-5 mb-3">
                                                        <div className="col-12">
                                                            <input style={{ width: '150px' }} placeholder="Price Match" className="form-control" />
                                                            {/* <div className="row mb-3">
                                                            </div> */}
                                                            {/* <input value="Price Match" style={{ width: '150px' }} className="form-control" /> */}

                                                        </div>
                                                    </div>

                                                    <div className="col-7 text-end">
                                                        <h6 >0.00</h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-8">
                                                        <h5>Total{''}(£)</h5>
                                                    </div>
                                                    <div className="col-4 text-end">
                                                        <h6 className="fw-bold">0.00</h6>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="row mt-3">
                                    <div className="col-lg-6">
                                        {/* Customer Notes */}
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-uppercase">
                                                Terms & Conditions
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value="ACCOUNT DETAILS :
                                                JSL UK & EU Ltd
                                                T/A Work-tops.com
                                                BANK NAME & LOCATION: METRO BANK, CAMBRIDGE
                                                ACCOUNT NUMBER: 0000000
                                                SORT CODE NUMBER: 0000000
                                                VAT Registration No: GB341745211
                                                
                                                Terms & Conditions
                                                https://trade.work-tops.com/error/b453e6328b2edf6b4e37622eba00dc070e07358d565dcb75b2786cf57b
                                                
                                                Thank You
                                                Accounts Team
                                                Work-tops.com"
                                                className="resize-none"

                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-6">

                                        {/* Upload Samples */}
                                        <Col lg={12} className='me-2 mb-2 w-100'>

                                            <Form.Label className='text-700 text-uppercase'>
                                                attachments
                                            </Form.Label>
                                            <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                                <input {...getInputProps()} multiple />
                                                <div className="fs--1">
                                                    <img src={cloudUpload} alt="" width={20} className="me-2" />
                                                    <span className="d-none d-lg-inline">
                                                        Drag your images here
                                                        <br />
                                                        or,{' '}
                                                    </span>
                                                    <Button variant="link" size="sm" className="p-0 fs--1">
                                                        Browse
                                                    </Button>
                                                </div>
                                            </div>

                                            {covers.length > 0 &&
                                                <div className="mt-3">
                                                    {covers.map((cover) => (
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
                                                                <h6 className="mt-2 text-primary">01/05/2023</h6>
                                                            </div>
                                                            <CardDropdown>
                                                                <div className="py-2">
                                                                    <Dropdown.Item
                                                                        className="text-danger"
                                                                        onClick={() => removeCover(cover)}
                                                                    >
                                                                        Remove
                                                                    </Dropdown.Item>
                                                                </div>
                                                            </CardDropdown>
                                                        </div>
                                                    ))}
                                                </div>
                                            }

                                            <small className='d-block'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                                            <small className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                                        </Col>
                                        {/* Upload Samples */}
                                    </div>
                                </div>
                                <Button as={Link} to="/Estimates" className="btn-secondary me-2" type="submit">Save as Draft</Button>
                                <Button as={Link} to="/Estimates" className="btn-success me-2" type="submit">Save & Send</Button>
                                <Button variant="danger" onClick={handleShow1}>
                                    Discard
                                </Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </div>

                {/*  */}
                <div>


                    <Modal show={show1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>Warning</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to discard this page?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose1}>
                                No
                            </Button>
                            <Button as={Link} to="/Estimates" variant="danger">
                                Yes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                {/*  */}


            </Row >
        </>
    )
}
export default NewEstimate
