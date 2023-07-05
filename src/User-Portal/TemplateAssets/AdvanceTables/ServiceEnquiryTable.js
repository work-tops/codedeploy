import React, { useEffect, useState, useRef } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Modal, Form, Dropdown } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";

const OwnerEnquiryTable = () => {

    const [show, setShow] = useState(false);
    const editorRef = useRef(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Cancel Modal
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => {
        setShowModal1(false);
    };

    const handleCancel = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal1(false);
    };
    const columns = [
        {
            accessor: 'id',
            Header: 'Enquiry ID'
        },
        {
            accessor: 'name',
            Header: 'Name'
        },
        {
            accessor: 'date',
            Header: 'Date'
        },

        {
            accessor: 'serviceName',
            Header: ' Title'
        },
        {
            accessor: 'description',
            Header: 'Description'
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
            id: '625355',
            name: 'Peter Leverkus',
            date: '10 May 2023',
            serviceName: 'Kitchen Worktops',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            status: <span className="badge bg-success">Completed</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/enquire-service" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowModal1(true)} as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            id: '625355',
            name: 'Peter Leverkus',
            date: '10 May 2023',
            serviceName: 'Kitchen Worktops',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            status: <span className="badge bg-danger">Declined</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/enquire-service" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowModal1(true)} as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            id: '625355',
            name: 'Peter Leverkus',
            date: '10 May 2023',
            serviceName: 'Kitchen Worktops',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            status: <span className="badge bg-warning">Pending</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/enquire-service" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowModal1(true)} as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            id: '625355',
            name: 'Peter Leverkus',
            date: '10 May 2023',
            serviceName: 'Kitchen Worktops',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            status: <span className="badge bg-primary">Processing</span>,
            action: <CardDropdown>
                <Dropdown.Item as={Link} to="/enquire-service" className="text-success">View</Dropdown.Item>
                <Dropdown.Item onClick={handleShow} className="text-primary">Reply</Dropdown.Item>
                <Dropdown.Item onClick={() => setShowModal1(true)} as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
    ]

    function BulAction({ selectedRowIds }) {
        return (
            <>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-lg modal-90w"

                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <h6 className="text-uppercase">
                            Please Type Your Message
                        </h6>
                        {/* <Button onClick={handleClose} className="bg-danger border-0">Close</Button> */}
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
                        {/* <Form.Group className="mb-3">
                            <Form.Control as="textarea" placeholder='Type Your Message....' rows={8} />
                        </Form.Group> */}
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                                <Form.Check.Input type="checkbox" />
                                <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                    Proceed to Send
                                </Form.Check.Label>
                            </Form.Check>
                        </Form.Group>
                        <div className="d-flex justify-content-end mb-3">
                            <div className="d-flex justify-content-end gap-2 mb-3">
                                <Button style={{ background: '#003f6b' }} className="text-uppercase border-0">
                                    Attachments
                                </Button>
                                <Button style={{ background: '#003f6b' }} className="text-uppercase border-0">
                                    Send
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                {/*  */}
                <Modal show={showModal1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="text-capitalize">
                            Are you sure you want to decline (1) enquiries?
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose1}>
                            No
                        </Button>
                        <Button variant="danger" onClick={handleClose1}>
                            Yes
                        </Button>

                    </Modal.Footer>
                </Modal>
                {/*  */}

                <Row className="flex-between-center mb-3">
                    <Col xs={12} md={8} lg={7} sm="12" className="mt-3  pe-0">
                        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                            {
                                Object.keys(selectedRowIds).length > 0 ?
                                    'You have selected ' + Object.keys(selectedRowIds).length + ' Enquiries'
                                    :
                                    ''
                            }
                        </h5>
                    </Col>
                    {/* <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row> */}
                    <Col xs={12} md={4} lg={5} sm="12" className="mt-3 ms-auto text-end ps-0">
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
                                {/* <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="plus"
                                transform="shrink-3"
                                className='me-2'
                            >
                                <span className="d-none d-sm-inline-block ms-1">New</span>
                            </IconButton> */}
                                {/* <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="external-link-alt"
                                transform="shrink-3"
                            >
                                <span className="d-none d-sm-inline-block ms-1">Export</span>
                            </IconButton> */}
                            </div>
                        )}
                    </Col>
                </Row>
            </>
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
                    classpriceType: 'fs--1 mb-0 overflow-hidden'
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
    )
}
export default OwnerEnquiryTable
