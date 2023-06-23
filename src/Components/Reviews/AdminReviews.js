import React, { useState,useRef } from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Modal } from "react-bootstrap";
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
import { Editor } from "@tinymce/tinymce-react";

const AllReviews = () => {

    const editorRef = useRef(null);


    const columns = [
        {
            accessor: 'rating',
            Header: 'Rating'
        },
        {
            accessor: 'created',
            Header: 'Created',
        },
        {
            accessor: 'review',
            Header: 'Review'
        },
        {
            accessor: 'source',
            Header: 'Source'
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

    const [show, setShow] = useState(false);
    const [reply, setReply] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = [
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            source: "Product",
            created: "22/06/23,10:30",
            review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            status: <span className="badge  bg-warning">Pending</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-danger">Unpublished</span>,
            source: "Product", created: "22/06/23,10:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Service", created: "22/06/23,10:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-warning">Pending</span>,
            source: "Product", created: "22/06/23,10:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product",
            created: "02/06/23,14:30",
            review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Service", created: "02/06/23,14:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product", created: "02/06/22,19:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product", created: "02/06/22,19:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product", created: "02/06/22,19:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }, {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product", created: "02/06/22,19:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product", created: "02/06/22,19:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-danger">Unpublished</span>,
            source: "Product", created: "22/06/23,10:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
        ,
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product", created: "22/06/23,10:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
        ,
        {
            rating: <><div className="d-inline-block ">
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star text-warning"></span>
                <span className="fa fa-star-half-alt text-warning star-icon"></span>
            </div></>,
            status: <span className="badge  bg-success">Published</span>,
            source: "Product", created: "22/06/23,10:30", review: <>
                <span className="text-primary d-block">Bessie</span>
                <p className="fs--1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item onClick={handleShow}>Unpublish</Dropdown.Item>
                    <Dropdown.Item>Reply</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        }
    ];

    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            // Object.keys(selectedRowIds).length > 0 ?
                            //     'You have selected ' + Object.keys(selectedRowIds).length + 'Lists'
                            //     :
                            //     ''
                        }
                    </h5>
                </Col>
                <Row className="flex-end-center mt-2 mb-3">
                    <Col xs="auto">
                        {/* <AdvanceTableSearchBox table /> */}
                    </Col>
                </Row>
                <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                    {Object.keys(selectedRowIds).length > 0 ? (
                        <div className="d-flex">
                            <Form.Select size="sm" aria-label="Bulk actions">
                                <option>Bulk Actions</option>
                                <option value="refund">Last 3 Months</option>
                                <option value="delete">Unpublish</option>
                                <option value="archive">Delete</option>
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
                        </div>
                    )}
                </Col>
            </Row>
        );
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light" as={"h5"}>
                            All Reviews
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
                </Col>
            </Row>
            {/*  */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Reply</Modal.Title>
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
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default AllReviews
