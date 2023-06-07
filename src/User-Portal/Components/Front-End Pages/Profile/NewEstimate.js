import React, { useState } from "react";
import { Row, Col, Card, Form, Button, Modal, Table, Image, Dropdown } from "react-bootstrap";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Icon } from "@iconify/react";
import { useDropzone } from 'react-dropzone';
import cloudUpload from '../../../TemplateAssets/assets/cloud-upload.svg';
import { getSize } from '../../../TemplateAssets/helpers/utils';
import CardDropdown from '../../../TemplateAssets/common/CardDropdown';
function NewEstimate() {



    const [branch, setBranch] = useState('');
    const [tradePerson, setTradePerson] = useState('');


    const handleBranchChange = (selected) => {
        if (selected.length > 0) {
            setBranch(selected[0]);
        } else {
            setBranch('');
        }
    };


    const handleTradePersonChange = (selected) => {
        if (selected.length > 0) {
            setTradePerson(selected[0]);
        } else {
            setTradePerson('');
        }
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

    const ukCounties = [
        'Bedfordshire',
        'Berkshire',
        'Buckinghamshire',
        'Cambridgeshire',
        'Cheshire',
        'Cornwall',
        'Cumbria',
        'Derbyshire',
        'Devon',
        'Dorset',
        'Durham',
        'East Sussex',
        'Essex',
        'Gloucestershire',
        'Greater London',
        'Greater Manchester',
        'Hampshire',
        'Herefordshire',
        'Hertfordshire',
        'Isle of Wight',
        'Kent',
        'Lancashire',
        'Leicestershire',
        'Lincolnshire',
        'Merseyside',
        'Norfolk',
        'North Yorkshire',
        'Northamptonshire',
        'Northumberland',
        'Nottinghamshire',
        'Oxfordshire',
        'Rutland',
        'Shropshire',
        'Somerset',
        'South Yorkshire',
        'Staffordshire',
        'Suffolk',
        'Surrey',
        'Tyne and Wear',
        'Warwickshire',
        'West Midlands',
        'West Sussex',
        'West Yorkshire',
        'Wiltshire',
        'Worcestershire'
    ];


    const tradePersons = ['John Doe', 'Jane Smith', 'David Johnson'];

    // 
    const [tableData, setTableData] = useState([
        // Example initial data
        {
            itemDetails: 'Item 1',
            quantity: 2,
            rate: 10.0,
            discount: 10,
            vat: 'VAT 1',
        },
        {
            itemDetails: 'Item 2',
            quantity: 1,
            rate: 15.0,
            discount: 5,
            vat: 'VAT 2',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newVatName, setNewVatName] = useState('');
    const [newVatRate, setNewVatRate] = useState('');


    const handleAddVat = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleNewVatNameChange = (event) => {
        setNewVatName(event.target.value);
    };

    const handleNewVatRateChange = (event) => {
        setNewVatRate(event.target.value);
    };

    const handleSaveNewVat = () => {
        if (newVatName && newVatRate) {
            const newVatOption = `${newVatName} (${newVatRate}%)`;
            vatOptions.push(newVatOption);
        }
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
                                <h4 className="text-capitalize">New Estimate</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form>

                                    <Form.Group className="mb-3" as={Col} lg={6}>
                                        <Form.Label className="text-uppercase">Customer Name<span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"

                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" as={Col} lg={6}>
                                        <Form.Label className="text-uppercase">Branch<span className="text-danger">*</span></Form.Label>
                                        <Typeahead
                                            id="branchTypeahead"
                                            options={ukCounties}
                                            selected={branch ? [branch] : []}
                                            onChange={handleBranchChange}
                                        />
                                    </Form.Group>


                                    <Form.Group className="mb-3" as={Col} lg={6}>
                                        <Form.Label className="text-uppercase">Estimate Number<span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"

                                        />
                                    </Form.Group>


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

                                    {/*  */}
                                    <Form.Group className="mb-3" as={Col} lg={6}>
                                        <Form.Label className="text-uppercase">Trade Person<span className="text-danger">*</span></Form.Label>
                                        <Typeahead
                                            id="tradePersonTypeahead"
                                            options={tradePersons}
                                            selected={tradePerson ? [tradePerson] : []}
                                            onChange={handleTradePersonChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" as={Col} lg={6}>
                                        <Form.Label className="text-uppercase">Material Name<span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"

                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" as={Col} lg={6}>
                                        <Form.Label className="text-uppercase">Thickness<span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"

                                        />
                                    </Form.Group>

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
                                            <td>
                                                <Typeahead
                                                    id="vatTypeahead"
                                                    // style={{ fontSize: '14px' }}
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
                                        <Button onClick={handleAddVat}>Add VAT</Button>

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
                                                <Button variant="primary" onClick={handleSaveNewVat}>
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
                                                https://trade.work-tops.com/external/b453e6328b2edf6b4e37622eba00dc070e07358d514eb1565dcb75b2786cf57b
                                                
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
                                            <div >
                                                <Form.Label className='text-700 text-uppercase'>
                                                    attachments
                                                </Form.Label>
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
                                        </Col>
                                        {/* Upload Samples */}
                                    </div>
                                </div>
                                <Button className="btn-success" type="submit">Submit</Button>
                            </Card.Body>

                        </Card>
                    </Col>
                </div>
            </Row >
        </>
    )
}
export default NewEstimate
