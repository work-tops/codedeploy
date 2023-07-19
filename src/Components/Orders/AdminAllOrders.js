// import React, { useState, useEffect } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menu342567/AiMenu";
// import { Link } from "react-router-dom";

// import ReactPaginate from 'react-paginate';

// function AllOrders() {



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
//                             <p className="med-sub-sellerName">Here are the All Orders on your store</p>
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

import React, { useState, useEffect } from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, InputGroup } from "react-bootstrap";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
import { getAllData } from "../../Services/ProxyService";
import { Icon } from "@iconify/react";

const AllOrders = () => {

    const [orders, setorders] = useState([]);
    const ordersdata = async () => {
        const response = await getAllData('orders/all');
        setorders(response.data.orders);
        setShowSpinner(false);
    }
    const [showSpinner, setShowSpinner] = useState(true);
    useEffect(() => {
        ordersdata();
    }, [])

    const [listPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = orders.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(orders.length / listPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }




    const columns = [
        {
            accessor: 'orderId',
            Header: 'Order ID'
        },
        {
            accessor: 'storeOrderID',
            Header: 'Store Order ID'
        },
        {
            accessor: 'sellerName',
            Header: 'Seller Name'
        },
        {
            accessor: 'paymentMode',
            Header: 'Payment Mode'
        },
        {
            accessor: 'paymentStatus',
            Header: 'Payment Status'
        },
        {
            accessor: 'trackingId',
            Header: 'Tracking ID'
        },
        {
            accessor: 'orderStatus',
            Header: 'Order Status'
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
            orderId: '643456',
            trackingId: '003456',
            storeOrderID: '342567 ',
            sellerName: 'GMS',
            budget: '123',
            orderStatus: <span className="badge  bg-warning">Processing</span>,
            paymentMode: "UPI",
            createdDate: "02 Apr 2023",
            modifiedDate: "22 Apr 2023",
            paymentStatus: <span className="badge  bg-success">Successful</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Send Remainder</Dropdown.Item>
                </div>
            </CardDropdown>
        },
        {
            orderId: '643456',
            trackingId: '003456',
            storeOrderID: '342567 ',
            sellerName: 'GMwarningS',
            budget: '123',
            orderStatus: <span className="badge  bg-success">Completed</span>,
            paymentMode: "UPI", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
            paymentStatus: <span className="badge  bg-warning">Processing</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Send Remainder</Dropdown.Item></div>
            </CardDropdown>
        },
        {
            orderId: '643456',
            trackingId: '003456',
            storeOrderID: '342564 ',
            sellerName: 'Peter Leverkus',
            budget: '123',
            orderStatus: <span className="badge  bg-success">Completed</span>,
            paymentMode: "UPI", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
            paymentStatus: <span className="badge  bg-secondary">Disabled</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Send Remainder</Dropdown.Item></div>
            </CardDropdown>
        },
        {
            orderId: '643456',
            trackingId: '003456',
            storeOrderID: '342564 ',
            sellerName: 'Peter Leverkus',
            budget: '1213',
            orderStatus: <span className="badge  bg-success">Completed</span>,
            paymentMode: "UPI", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
            paymentStatus: <span className="badge  bg-danger">Declined</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Send Remainder</Dropdown.Item></div>
            </CardDropdown>
        },
        {
            orderId: '643456',
            trackingId: '003456',
            storeOrderID: '342564 ',
            sellerName: 'Peter Leverkus',
            budget: '077',
            orderStatus: <span className="badge  bg-success">Completed</span>,
            paymentMode: "UPI",
            createdDate: "02 Apr 2023",
            modifiedDate: "22 Apr 2023",
            paymentStatus: <span className="badge  bg-success">Successful</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Send Remainder</Dropdown.Item></div>
            </CardDropdown>
        }, {
            orderId: '643456',
            trackingId: '003456',
            storeOrderID: '342568 ',
            sellerName: 'Peter Leverkus',
            budget: '1213',
            orderStatus: <span className="badge  bg-success">Completed</span>,
            paymentMode: "UPI", createdDate: "02 Apr 2023", modifiedDate: "22 Apr 2023",
            paymentStatus: <span className="badge  bg-success">Successful</span>,
            action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Send Remainder</Dropdown.Item></div>
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
                            <Dropdown>
                                <div id="orders-actions">
                                    <Button variant="falcon-default"
                                        size="sm" className="fs--1"><Icon icon="entypo:export" width="18" height="18" className="" /><span className="d-none ms-2 d-lg-inline">Export</span>
                                    </Button>
                                </div>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Export From Date</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Export to Date</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
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
                        <Card.Header className="bg-light">
                            <h2>All Orders<span className="badge ms-1 fs--1 bg-secondary">#100</span></h2>
                            <p className=" mt-2">Here are the All Orders on your store</p>
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
                            </AdvanceTableWrapper >
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default AllOrders
