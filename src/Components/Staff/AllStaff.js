// import React from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import { Link } from "react-router-dom";
// function AllStaff() {
//     return (
//         <div className="row">
//             <div className="col-2">
//                 <AiMenu />
//             </div>
//             <div className="col-10">
//                 <div>
//                     <AiHeader />
//                 </div>
//                 <div className="page-bg">
//                     <div className="product-adding-div">
//                         <div>
//                             <br></br>
//                             <h4 className="ai-seller-title" >My Staff <span id="badge-1" className="badge bg-secondary">#100</span></h4>
//                             <p className="ai-title-note">Here are the Staff Members on your shop</p>
//                         </div>
//                         <div className="row">
//                             <div className="col-12">
//                                 <Link to="addstaff" role="button"><button className="add-seller_1">Add Staff</button></Link>
//                             </div>
//                         </div>
//                     </div>
//                     <p className="bulk-actions">Bulk Action :{' '}
//                         <select className="select-opt">
//                             <option>Select Options</option>
//                         </select>
//                     </p>
//                     <p className="show-list">Show:
//                         <select>
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                             <option>4</option>
//                             <option>5</option>
//                             <option>6</option>
//                             <option>7</option>
//                             <option>8</option>
//                             <option>9</option>
//                             <option>10</option>
//                         </select>
//                         {' '}
//                         List
//                     </p>
//                     <div className="all-jobs-div">
//                         <table className="allproducts-table">
//                             <tr className="product-heading ">
//                                 <td id="td" className="rounded-start"><input type='checkbox' /></td>
//                                 <td id="td">Staff ID <i className="ri-arrow-down-s-fill"></i>
//                                 <br></br>
//                                         <input id="filter-search" type="search"/>
//                                 </td>
//                                 <td id="td">Name<i className="ri-arrow-down-s-fill"></i>
//                                 <br></br>
//                                         <input id="filter-search" type="search"/>
//                                 </td>
//                                 <td id="td">Email ID <i className="ri-arrow-down-s-fill"></i>
//                                 <br></br>
//                                         <input id="filter-search" type="search"/>
//                                 </td>
//                                 <td id="td">Status<i className="ri-arrow-down-s-fill"></i>
//                                 <br></br>
//                                         <input id="filter-search" type="search"/>
//                                 </td>
//                                 <td id="td" className="rounded-end">Action</td>
//                             </tr>
//                             <tr>
//                                 <td id="td"><input type='checkbox' /></td>
//                                 <td id="td">2456781</td>
//                                 <td id="td">Manikandan</td>

//                                 <td id="td">test@test.com</td>
//                                 <td id="td"><span className="pro-status-approved">Active</span></td>
//                                 <td id="td">
//                                     <div className="dropdown">
//                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             <i className="fa-solid fa-ellipsis"></i>
//                                         </a>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                         </ul>
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td id="td"><input type='checkbox' /></td>
//                                 <td id="td">2456781</td>
//                                 <td id="td">Saravanan</td>

//                                 <td id="td">test@test.com</td>
//                                 <td id="td"><span className="pro-status-disabled">Disabled</span></td>
//                                 <td id="td">
//                                     <div className="dropdown">
//                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             <i className="fa-solid fa-ellipsis"></i>
//                                         </a>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                         </ul>
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td id="td"><input type='checkbox' /></td>
//                                 <td id="td">2456781</td>
//                                 <td id="td">Harish</td>

//                                 <td id="td">test@test.com</td>
//                                 <td id="td"><span className="pro-status-approved">Active</span></td>
//                                 <td id="td">
//                                     <div className="dropdown">
//                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             <i className="fa-solid fa-ellipsis"></i>
//                                         </a>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                         </ul>
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td id="td"><input type='checkbox' /></td>
//                                 <td id="td">2456781</td>
//                                 <td id="td">Jagan</td>

//                                 <td id="td">test@test.com</td>
//                                 <td id="td"><span className="pro-status-disabled">Disabled</span></td>

//                                 <td id="td">
//                                     <div className="dropdown">
//                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             <i className="fa-solid fa-ellipsis"></i>
//                                         </a>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                         </ul>
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td id="td"><input type='checkbox' /></td>
//                                 <td id="td">2456781</td>
//                                 <td id="td">Gopal</td>

//                                 <td id="td">test@test.com</td>
//                                 <td id="td"><span className="pro-status-approved">Active</span></td>
//                                 <td id="td">
//                                     <div className="dropdown">
//                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             <i className="fa-solid fa-ellipsis"></i>
//                                         </a>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                         </ul>
//                                     </div>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td id="td"><input type='checkbox' /></td>
//                                 <td id="td">2456781</td>
//                                 <td id="td">Kumar</td>

//                                 <td id="td">test@test.com</td>
//                                 <td id="td"><span className="pro-status-approved">Active</span></td>
//                                 <td id="td">
//                                     <div className="dropdown">
//                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             <i className="fa-solid fa-ellipsis"></i>
//                                         </a>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                         </ul>
//                                     </div>
//                                 </td>
//                             </tr>
//                         </table>
//                         <span className="showing-tag-name">Showing 1-30 List</span>
//                         <div className="all-pro-pagination ">
//                             <button className="back-btn shadow bg-body rounded"><i className="fa-solid fa-chevron-left"></i></button>
//                             <button className="shadow bg-body rounded">1</button>
//                             <button className="shadow bg-body rounded">2</button>
//                             <button className="shadow bg-body rounded">3</button>
//                             <button className="shadow bg-body rounded"><i className="fa-solid fa-ellipsis"></i></button>
//                             <button className="shadow bg-body rounded">25</button>
//                             <button className="next-btn"><i className="fa-solid fa-chevron-right"></i></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default AllStaff

import React, { useState, useRef } from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Breadcrumb, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown, InputGroup } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
import { Icon } from "@iconify/react";
import { Editor } from "@tinymce/tinymce-react";

const AllStaff = () => {
    const editorRef = useRef(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModal3, setShowModal3] = useState(false);

    const handleClose3 = () => {
        setShowModal3(false);
    };

    const handleShow3 = () => {
        setShowModal3(true);
    };

    const columns = [
        {
            accessor: 'staffID',
            Header: 'Staff ID'
        },
        {
            accessor: 'name',
            Header: 'Name'
        },
        {
            accessor: 'email',
            Header: 'Email ID',
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
            staffID: '643456',
            name: "George",
            email:'petergms@gmail.com',
            status: <span className="badge  bg-secondary">Disabled</span>,
            action: <CardDropdown>
                <div className="">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            staffID: '643456',
            name: "George",
            email:'petergms@gmail.com',
            status: <span className="badge  bg-secondary">Disabled</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            staffID: '643456',
            name: "George",
            email:'petergms@gmail.com',
            status: <span className="badge  bg-secondary">Disabled</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            staffID: '643456',
            name: "George",
            email:'petergms@gmail.com',
            status: <span className="badge  bg-success">Active</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            staffID: '643456',
            name: "George",
            email:'petergms@gmail.com',
            status: <span className="badge  bg-success">Active</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
        },
    ];


    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Traders Lists'
                                :
                                ''
                        }
                    </h5>
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
                            <h5>
                                All Staff<span className="ms-1 fs--1 badge bg-secondary">#100</span>
                            </h5>
                            <Breadcrumb className="fs--1 mt-2">
                                <Breadcrumb.Item>
                                    All Staff
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Add Staff
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <p className="text-dark fs--1 mt-2">Here all the current staffs on your store</p>
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
                                <div className="col-md-6 d-flex  justify-content-end">
                                    <Button as={Link} to="/addstaff" variant="success">Add Staff</Button>
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
                    <Button variant="primary" onClick={handleClose}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*  */}
            {/*  */}
            <Modal backdrop="static" show={showModal3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Disabled</Modal.Title>
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
export default AllStaff