import React, { useState, useRef } from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Breadcrumb, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
// import IconButton from "components/common/IconButton";
// import AdvanceTableSearchBox from "components/common/advance-table/AdvanceTableSearchBox";
import product_image from "../../User-Portal/Components/Projectimages/trainer.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown, InputGroup } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
import { Icon } from "@iconify/react";
import { Editor } from "@tinymce/tinymce-react";

const AllOwnerTable = () => {
    const editorRef = useRef(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => {
        setShowModal1(false);
    };

    const handleShow1 = () => {
        setShowModal1(true);
    };

    const [showModal2, setShowModal2] = useState(false);

    const handleClose2 = () => {
        setShowModal2(false);
    };

    const handleShow2 = () => {
        setShowModal2(true);
    };

    const [showModal3, setShowModal3] = useState(false);

    const handleClose3 = () => {
        setShowModal3(false);
    };

    const handleShow3 = () => {
        setShowModal3(true);
    };



    const columns = [
        {
            accessor: 'freelancerId',
            Header: 'Owner ID'
        },
        {
            accessor: 'image',
            Header: 'Owner Profile'
        },
        {
            accessor: 'name',
            Header: 'Name'
        },
        {
            accessor: 'email',
            Header: 'Owner Email',
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
            accessor: 'verification',
            Header: 'Verification'
        },
        {
            accessor: 'date',
            Header: 'Date'
        },
        {
            accessor: 'status',
            Header: 'Status'
        },
        {
            accessor: 'action',
            Header: 'Action'
        }
    ];

    const data = [
        {
            freelancerId: '643456',
            image: <img src={product_image} className="rounded-circle cursor-pointer" onClick={handleShow2} width="40px" height="35px" />,
            name: "George",
            email: 'petergms@gmail.com',
            verification: <span className="badge  bg-success">Verified</span>,
            date: "31 Mar 2023",
            status: <span className="badge  bg-secondary">Change Password</span>,
            action: <CardDropdown>
                <div className="">
                    <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow1}>Edit</Dropdown.Item>
                    <Dropdown.Item>Enable</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow}>Send Message</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow3}>Change Password</Dropdown.Item>
                    <Dropdown.Item >Disable</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            freelancerId: '643456',
            image: <img src={product_image} className="rounded-circle cursor-pointer" onClick={handleShow2} width="40px" height="35px" />,
            name: "George",
            email: 'petergms@gmail.com',
            verification: <span className="badge  bg-success">Verified</span>,
            date: "31 Mar 2023",
            status: <span className="badge  bg-secondary">Change Password</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow1}>Edit</Dropdown.Item>
                    <Dropdown.Item>Enable</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow}>Send Message</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow3}>Change Password</Dropdown.Item>
                    <Dropdown.Item >Disable</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            freelancerId: '643456',
            image: <img src={product_image} className="rounded-circle cursor-pointer" onClick={handleShow2} width="40px" height="35px" />,
            name: "George",
            email: 'petergms@gmail.com',
            verification: <span className="badge  bg-success">Verified</span>,
            date: "31 Mar 2023",
            status: <span className="badge  bg-secondary">Change Password</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow1}>Edit</Dropdown.Item>
                    <Dropdown.Item>Enable</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow}>Send Message</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow3}>Change Password</Dropdown.Item>
                    <Dropdown.Item >Disable</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            freelancerId: '643456',
            image: <img src={product_image} className="rounded-circle cursor-pointer" onClick={handleShow2} width="40px" height="35px" />,
            name: "George",
            email: 'petergms@gmail.com',
            verification: <span className="badge  bg-success">Verified</span>,
            date: "31 Mar 2023",
            status: <span className="badge  bg-secondary">Change Password</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow1}>Edit</Dropdown.Item>
                    <Dropdown.Item>Enable</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow}>Send Message</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow3}>Change Password</Dropdown.Item>
                    <Dropdown.Item >Disable</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            freelancerId: '643456',
            image: <img src={product_image} className="rounded-circle cursor-pointer" onClick={handleShow2} width="40px" height="35px" />,
            name: "George",
            email: 'petergms@gmail.com',
            verification: <span className="badge  bg-success">Verified</span>,
            date: "31 Mar 2023",
            status: <span className="badge  bg-secondary">Change Password</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow2} >View</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow1}>Edit</Dropdown.Item>
                    <Dropdown.Item>Enable</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow}>Send Message</Dropdown.Item>
                    <Dropdown.Item onClick={handleShow3}>Change Password</Dropdown.Item>
                    <Dropdown.Item >Disable</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
    ];


    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h4 className="fs-0 mb-0 mt-2h text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Owners Lists'
                                :
                                ''
                        }
                    </h4>
                </Col>
                <Row className="flex-end-center mt-2 mb-3">
                    <Col xs="auto">
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
        // <div className="ms-2 me-2 mt-5">
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col className="mt-4" lg={12}>
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light">
                            <h2>
                                All Owner<span className="ms-1 fs--1 badge bg-secondary">#100</span>
                            </h2>
                            <Breadcrumb className="mt-2">
                                <Breadcrumb.Item>
                                    All Owners
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Add Owners
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <p className="text-dark mt-2">Here all the current Owners on your store</p>
                        </Card.Header>
                        <Card.Body>
                            <div className="row g-3">
                                <div className="col-md-6 d-flex justify-content-start">
                                    <Form.Group>
                                        <InputGroup>
                                            <Form.Control size="sm" placeholder="Search.." type="search" />
                                            <Button variant="secondary" size="sm"><Icon icon="mdi:search" color="white" width="20" height="20" /></Button>
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                            </div>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Send Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/*  */}

            <Modal show={showModal1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" />
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your last name" />
                        </Form.Group>

                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone number" />
                        </Form.Group>

                        <Form.Group controlId="formEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                        </Form.Group>

                        <Form.Group controlId="formAddressLine1">
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control type="text" placeholder="Enter your address line 1" />
                        </Form.Group>

                        <Form.Group controlId="formAddressLine2">
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control type="text" placeholder="Enter your address line 2" />
                        </Form.Group>

                        <Form.Group controlId="formPostcode">
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control type="text" placeholder="Enter your postcode" />
                        </Form.Group>

                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter your country" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose1}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*  */}
            <Modal backdrop="static" show={showModal2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Profile Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div class="avatar avatar-4xl">
                            <div class="avatar-name rounded-circle"><span>PL</span></div>
                        </div>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <p>Peter </p>
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <p> Leverkus</p>
                        </Form.Group>

                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <p>+44 3331 456 1333</p>
                        </Form.Group>

                        <Form.Group controlId="formEmailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <p>Petergms@gmail.com</p>
                        </Form.Group>

                        <Form.Group controlId="formAddressLine1">
                            <Form.Label>Address Line 1</Form.Label>
                            <p>1 De La Warr Way,</p>
                        </Form.Group>

                        <Form.Group controlId="formAddressLine2">
                            <Form.Label>Address Line 2</Form.Label>
                            <p>Cambridge,</p>
                        </Form.Group>

                        <Form.Group controlId="formPostcode">
                            <Form.Label>Postcode</Form.Label>
                            <p>CB23 6DX</p>
                        </Form.Group>

                        <Form.Group controlId="formCountry">
                            <Form.Label>Country</Form.Label>
                            <p>UK</p>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
            {/*  */}
            <Modal backdrop="static" show={showModal3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="password" placeholder="New Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Button>Submit</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default AllOwnerTable
