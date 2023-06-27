import React, { useState, useCallback, useRef } from "react";
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
import { Editor } from "@tinymce/tinymce-react";
import Footer from "../../Footer/Footer";

function NewEstimate() {

    const editorRef = useRef(null);

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
    const [show, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleModalClose = () => {
        setShowModal(false);
    };
    // 
    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);
    // 
    const [selectedCounty, setSelectedCounty] = useState([]);
    const handleCountyChange = (selected) => setSelectedCounty(selected);
    // 
    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(true);
    const handleClose3 = () => setShow3(false);
    //

    // 
    const [show4, setShow4] = useState(false);
    const handleShow4 = () => setShow4(true);
    const handleClose4 = () => setShow4(false);
    //

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
                                            <Form.Label className="text-uppercase">Billing Address
                                                <span className="text-danger">*</span>
                                            </Form.Label>
                                            <Icon onClick={handleShow3} icon="fluent:edit-20-filled" width="15" height="15" />
                                            <p className="mb-1 text-dark">1 De la warr way</p>
                                            <p className="mb-1 text-dark">Cambridge</p>
                                            <p className="mb-1 text-dark">CB23 6DX</p>
                                            <p className="mb-1 text-dark">United Kingdom</p>
                                        </Form.Group>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Shipping Address<span className="text-danger">*</span></Form.Label>
                                            <p className="mb-1 text-dark">1 De la warr way</p>
                                            <p className="mb-1 text-dark">Cambridge</p>
                                            <p className="mb-1 text-dark">CB23 6DX</p>
                                            <p className="mb-1 text-dark">United Kingdom</p>
                                            <p role="button" onClick={handleShow2} className="text-primary">+ Add New Address</p>
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
                                                placeholder="MAI/EST/000001"
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

                                                placeholder="Eg : Quartz"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Project Title<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"

                                                placeholder="Eg : Quartz"
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Service Title<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"

                                                placeholder="Eg : Kitchen Worktops"
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3" as={Col} lg={6}>
                                            <Form.Label className="text-uppercase">Thickness<span className="text-danger">*</span></Form.Label>
                                            <Form.Control
                                                type="text"

                                                placeholder="Eg : 20 MM"

                                            />
                                        </Form.Group>
                                    </Row>

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
                                            <td style={{ width: '0%' }}><Icon onClick={handleShow4} className="cursor-pointer hover-danger" icon="ic:baseline-delete" width="24" height="24" /></td>
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
                                            <td style={{ width: '0%' }}><Icon onClick={handleShow4} className="hover-danger cursor-pointer" icon="ic:baseline-delete" width="24" height="24" /></td>
                                        </tr>

                                    </tbody>
                                </Table>
                                {/*  */}
                                <div className="row">
                                    <div className="col-lg-6">
                                        <Button className="btn-success me-2">Add New Item</Button>
                                        <Button onClick={handleShow} >Add VAT</Button>

                                        <Modal show={show} onHide={handleModalClose}>
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
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue=""
                                                init={{

                                                    height: 200,
                                                    menubar: false,
                                                    // plugins: [
                                                    //     'advlist autolink lists link image charmap print preview anchor',
                                                    //     'searchreplace visualblocks code fullscreen',
                                                    //     'insertdatetime media table paste code help wordcount'
                                                    // ],
                                                    toolbar: 'undo redo | formatselect | ' +
                                                        'bold italic  | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat ',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                }}
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
                                                <div className="row mb-3">
                                                    <div className="col-4">
                                                        <h6>Reduced Rate[5%]</h6>
                                                    </div>
                                                    <div className="col-8 text-end">
                                                        <h6> 5</h6>
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
                                            <p>
                                                Read our <Link to="/termsofuse" className="text-capitalize me-1">Terms & Conditions</Link>to know more
                                            </p>
                                        </Form.Group>
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
                {/* Modal-2 */}

                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shipping Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formSameAsBilling">
                                <Form.Check
                                    type="checkbox"
                                    label="Same as Billing Address"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAddressLine1">
                                <Form.Label className="text-uppercase">Address Line 1<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className="resize-none "
                                    rows={1}
                                    placeholder="Enter Address Line 1"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formAddressLine2">
                                <Form.Label className="text-uppercase">Address Line 2<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className="resize-none "
                                    rows={1}
                                    placeholder="Enter Address Line 2"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCounty">
                                <Form.Label className="text-uppercase">County<span className="text-danger">*</span></Form.Label>
                                <Typeahead
                                    id="countyTypeahead"
                                    onChange={handleCountyChange}
                                    options={['Cambridge', 'Essex']}
                                    selected={selectedCounty}
                                    placeholder="Select County/Region"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPostcode">
                                <Form.Label className="text-uppercase">Postcode<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Postcode"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPostcode">
                                <Form.Label className="text-uppercase">Country<span className="text-danger">*</span></Form.Label>
                                <Form.Select>
                                    <option>United Kingdom</option>
                                    <option>Ireland</option>
                                    <option>Scotland</option>
                                </Form.Select>
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose2}>
                            Save Address
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal-2 */}

                {/* Modal-2 */}

                <Modal show={show3} onHide={handleClose3}>
                    <Modal.Header closeButton>
                        <Modal.Title>Billing Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                            <Form.Group className="mb-3" controlId="formAddressLine1">
                                <Form.Label className="text-uppercase">Address Line 1<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className="resize-none "
                                    rows={1}
                                    placeholder="Enter Address Line 1"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formAddressLine2">
                                <Form.Label className="text-uppercase">Address Line 2<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className="resize-none "
                                    rows={1}
                                    placeholder="Enter Address Line 2"

                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCounty">
                                <Form.Label className="text-uppercase">County<span className="text-danger">*</span></Form.Label>
                                <Typeahead
                                    id="countyTypeahead"
                                    onChange={handleCountyChange}
                                    options={['Cambridge', 'Essex']}
                                    selected={selectedCounty}
                                    placeholder="Select County/Region"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPostcode">
                                <Form.Label className="text-uppercase">Postcode<span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Postcode"

                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPostcode">
                                <Form.Label className="text-uppercase">Country<span className="text-danger">*</span></Form.Label>
                                <Form.Select>
                                    <option>United Kingdom</option>
                                    <option>Ireland</option>
                                    <option>Scotland</option>
                                </Form.Select>
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose3}>
                            Save Address
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal-2 */}
                {/* Modal-3 */}
                <Modal show={show4} onHide={handleClose4} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to remove?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose4}>
                            No
                        </Button>
                        <Button variant="danger" onClick={handleClose4}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row >
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default NewEstimate
