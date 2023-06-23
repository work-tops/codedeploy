// import React, { useState, useEffect } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import { Link } from "react-router-dom";
// import { getAllData } from "../../Services/ProxyService";
// import ReactPaginate from 'react-paginate';

// function AllOrders() {

//     const [orders, setorders] = useState([]);
//     const ordersdata = async () => {
//         const response = await getAllData('orders/all');
//         setorders(response.data.orders);
//         setShowSpinner(false);
//     }
//     const [showSpinner, setShowSpinner] = useState(true);
//     useEffect(() => {
//         ordersdata();
//     }, [])

//     const [listPerPage] = useState(10);
//     const [pageNumber, setPageNumber] = useState(0);
//     const pagesVisited = pageNumber * listPerPage;
//     const lists = orders.slice(pagesVisited, pagesVisited + listPerPage);
//     const pageCount = Math.ceil(orders.length / listPerPage);
//     const changePage = ({ selected }) => {
//         setPageNumber(selected);
//     }

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
//                             <h4 className="ms-3 mt-2" >All Orders <span className="badge-1 badge bg-secondary">#100</span></h4>
//                             <p className="med-sub-title">Here are the All Orders on your store</p>
//                         </div>

//                         <div className="row">
//                             <div className="dropdown col-12">
//                                 <button className="export-details btn dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Export Details
//                                 </button>
//                                 <ul className="dropdown-menu">
//                                     <li className="dropdown-item">Export From Date : <input type="date" /></li>
//                                     <li className="dropdown-item">Export -To- Date :- <input type="date" /></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <p className="bulk-actions">Bulk Action :{' '}
//                         <select className="select-opt">
//                             <option>Select Options</option>
//                         </select>
//                     </p>
//                     <div className="d-flex justify-content-between">
//                         <div>
//                             <input type="text" className="all-order-search" placeholder="Search" />
//                         </div>
//                         <div>
//                             <p className="show-list">Show:
//                                 <select>
//                                     <option>1</option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                     <option>4</option>
//                                     <option>5</option>
//                                     <option>6</option>
//                                     <option>7</option>
//                                     <option>8</option>
//                                     <option>9</option>
//                                     <option>10</option>
//                                 </select>
//                                 {' '}
//                                 List
//                             </p>
//                         </div>
//                     </div>
//                     <div className="all-jobs-div">
//                         <div style={{ height: '0px' }} className="text-center">
//                             {showSpinner && (
//                                 <div
//                                     className="spinner-border"
//                                     role="status"
//                                     style={{ width: '70px', height: '70px', fontSize: "20px", opacity: "0.7" }} // set the width and height here
//                                 >
//                                     <span className="sr-only">Loading...</span>
//                                 </div>
//                             )}
//                         </div>

//                         <table className="allproducts-table">
//                             <tbody>
//                                 <tr className="product-heading ">
//                                             <td className="table_data rounded-start"><input type='checkbox' /></td>
//                                             <td className="table_data">Order ID <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Store Order ID <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Seller Name <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Payment Mode<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>

//                                             <td className="table_data">Payment Status<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data">Tracking ID<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data">Order Status<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data">Created date<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data">Modified date<i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data rounded-end">Action</td>
//                                         </tr>
//                                 {lists.map((data, key) => (
//                                     <tr key={key}>
//                                         <td classname="td"><input type='checkbox' /></td>
//                                         <td classname="td">{data.order_id}</td>
//                                         <td classname="td">{data.store_order_id}</td>
//                                         <td classname="td">{data.seller}</td>
//                                         <td classname="td">{data.payment_mode}</td>
//                                         <td classname="td"><span className="pro-status-processing">{data.payment_stats}</span></td>
//                                         <td classname="td">{data.tracking_id}</td>
//                                         <td classname="td"><span className="pro-status-open">{data.order_status}</span></td>
//                                         <td classname="td"><span >{(data.created_date).slice(0, 10)}</span></td>
//                                         <td classname="td"><span   >{(data.modified_date).slice(0, 10)}</span></td>
//                                         <td classname="td">
//                                             <div className="dropdown">
//                                                 <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                     <i className="fa-solid fa-ellipsis"></i>
//                                                 </a>
//                                                 <ul className="dropdown-menu">
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-eye"></i> View</a></li>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bell"></i> Send Remainder</a></li>
//                                                 </ul>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>

//                         <div className="mt-5" >
//                             <ReactPaginate
//                                 style={{ padding: "5px", margin: "0px", border: "none" }}
//                                 // previousLabel={""}
//                                 // nextLabel={""}
//                                 pageCount={pageCount}
//                                 onPageChange={changePage}
//                                 containerClassName={"pagination"}
//                                 // previousLinkClassName={"previousBttn"}
//                                 // nextLinkClassName={"nextBttn"}
//                                 disabledClassName={"disabled"}
//                                 activeClassName={"active"}
//                                 total={lists.length}
//                             />
//                         </div>

//                         {/* <span className="showing-tag-name">Showing 1-30 List</span>
//                         <div className="all-pro-pagination ">
//                             <button className="back-btn shadow bg-body rounded"><i className="fa-solid fa-chevron-left"></i></button>
//                             <button className="shadow bg-body rounded">1</button>
//                             <button className="shadow bg-body rounded">2</button>
//                             <button className="shadow bg-body rounded">3</button>
//                             <button className="shadow bg-body rounded"><i className="fa-solid fa-ellipsis"></i></button>
//                             <button className="shadow bg-body rounded">25</button>
//                             <button className="next-btn"><i className="fa-solid fa-chevron-right"></i></button>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default AllOrders

import React from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card } from "react-bootstrap";
// import IconButton from "components/common/IconButton";
// import AdvanceTableSearchBox from "components/common/advance-table/AdvanceTableSearchBox";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
const columns = [
    {
        accessor: 'jobId',
        Header: 'Job ID'
    },
    {
        accessor: 'category',
        Header: 'Category'
    },
    {
        accessor: 'title',
        Header: 'Title'
    },
    {
        accessor: 'budget',
        Header: 'Budget'
    },
    {
        accessor: 'jobStatus',
        Header: 'Job Status'
    },
    {
        accessor: 'expDate',
        Header: 'Exp Date'
    },
    {
        accessor: 'status',
        Header: 'Status'
    },
    {
        accessor: 'createdDate',
        Header: 'Created Date        '
    },
    {
        accessor: 'modifiedDate',
        Header: 'Modified Date'
    },
    {
        accessor: 'action',
        Header: 'Action'
    }
];

const data = [
    {
        jobId: '643456',
        category: 'Bar ',
        title: 'test-project-4',
        budget: '123',
        jobStatus: <span className="badge  bg-warning">Processing</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bar ',
        title: 'test-project-4',
        budget: '123',
        jobStatus: <span className="badge  bg-danger">Not Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-warning">Approval Pending</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'ct-3 ',
        title: 'test-project-3',
        budget: '123',
        jobStatus: <span className="badge  bg-success">Completed</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-secondary">Disabled</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'ct-3 ',
        title: 'test-project-11',
        budget: '1213',
        jobStatus: <span className="badge  bg-success">Completed</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-danger">Expired</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'ct-3 ',
        title: 'test-project-13',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        jobId: '643456',
        category: 'Bedroom ',
        title: 'test-project-5',
        budget: '1213',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bedroom',
        title: 'test-project-1',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        jobId: '643456',
        category: 'Attic ',
        title: 'test-project-15',
        budget: '1213',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bathroom ',
        title: 'test-project-7',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        jobId: '643456',
        category: 'Bathroom ',
        title: 'test-project-4',
        budget: '1213',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bathroom ',
        title: 'test-project-10',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Attic ',
        title: 'test-project-14',
        budget: '077',
        jobStatus: <span className="badge  bg-danger">Not Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        jobId: '664345',
        category: 'Attic ',
        title: 'test-project-08',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        jobId: '643456',
        category: 'Bar ',
        title: 'test-project-9',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
];

const AllOrders = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Orders'
                                :
                                ''
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
                            </IconButton>
                            <IconButton
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
                            All Orders
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
                            </AdvanceTableWrapper >
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default AllOrders
