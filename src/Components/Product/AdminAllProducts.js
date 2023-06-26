// import React, { useEffect, useState } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import pom from '../../Images/product_image.png'
// import { Link } from "react-router-dom";
// import { getAllData, deleteData } from "../../Services/ProxyService";
// import ReactPaginate from 'react-paginate';
// import toast, { Toaster } from 'react-hot-toast';

// function AiProducts() {

//     const [product, setproducts] = useState([]); 

//     const Productlist = async () => {
//         const response = await getAllData('products');
//         setproducts(response.data.products);
//         setShowSpinner(false);
//     }
//     const productdel = async (data) => {
//         const response = await deleteData('admin/product/' + data._id);
//         if (response.status === 201) {
//             toast.success('Successfully Product Deleted')
//             Productlist()
//         } else {
//             toast.error('Something went wrong')
//         }
//     }
//     const [showSpinner, setShowSpinner] = useState(true);

//     useEffect(() => {
//         Productlist()
//     }, [])

//     const [listPerPage] = useState(10);
//     const [pageNumber, setPageNumber] = useState(0);
//     const pagesVisited = pageNumber * listPerPage;
//     const lists = product.slice(pagesVisited, pagesVisited + listPerPage);
//     const pageCount = Math.ceil(product.length / listPerPage);
//     const changePage = ({ selected }) => {
//         setPageNumber(selected);
//     }

//     return (
//         <div className="">
//             <div className="row">
//                 <div className="col-2">
//                     <AiMenu />
//                 </div>
//                 <div className="col-10">
//                     <div className="ai-product-div">
//                         <div>
//                             <AiHeader />
//                         </div>
//                         <div className="page-bg">
//                             <div className="product-adding-div">
//                                 <div>
//                                     <p className="capital-title">product/product list</p>
//                                     <h4 className="ms-3 mt-1">AllProducts <span className="badge-1 badge bg-secondary">#100</span></h4>
//                                     <p className="med-sub-title">Here You Can add products to your profile</p>
//                                 </div>
//                                 <div className="row">
//                                     <div className="dropdown col-3">
//                                         <button className="more_action btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             More Action
//                                         </button>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-plus"></i> Add Product By CSV</a></li>
//                                         </ul>
//                                     </div>
//                                     <div className="col-6">
//                                         <Link to="addproduct" role="button"><button className="toggle-btn create-btn">Add Products</button></Link>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p className="bulk-actions">Bulk Action :{' '}
//                                 <select className="select-opt">
//                                     <option>Select Options</option>
//                                 </select>
//                             </p>
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
//                             <div className="all-jobs-div">
//                                 <div style={{ height: '0px' }} className="text-center">
//                                     {showSpinner && (
//                                         <div
//                                             className="spinner-border"
//                                             role="status"
//                                             style={{ width: '70px', height: '70px', fontSize: "20px", opacity: "0.7" }} // set the width and height here
//                                         >
//                                             <span className="sr-only">Loading...</span>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <table className="allproducts-table">
//                                     <tbody>
//                                         <tr className="product-heading ">
//                                             <td className="table_data rounded-start"><input type='checkbox' /></td>
//                                             <td className="table_data">Product ID
//                                                 <i className="ri-arrow-down-s-fill"></i>

//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Image <i className="ri-arrow-down-s-fill"></i>

//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Name <i className="ri-arrow-down-s-fill"></i>

//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Seller <i className="ri-arrow-down-s-fill"></i>

//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Price <i className="ri-arrow-down-s-fill"></i>

//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Quantity <i className="ri-arrow-down-s-fill"></i>

//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Status <i className="ri-arrow-down-s-fill"></i>

//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data rounded-end">Action</td>
//                                         </tr>
//                                         {lists.map((data, key) => (
//                                             <tr>
//                                                 <td className="table_data"><input type='checkbox' /></td>
//                                                 <td className="table_data">{data._id}</td>
//                                                 <td className="table_data">
//                                                     {data.attachments.length > 0 ?
//                                                         (<img src={data.attachments[0]?.url} alt="pro-thumb" className="img" />) : (<img src={pom} alt="pro-thumb" className="img" />)
//                                                     }

//                                                 </td>
//                                                 <td className="table_data">{data.name}</td>
//                                                 <td className="table_data">{data.seller_email}</td>
//                                                 <td className="table_data">£ 100</td>
//                                                 <td className="table_data">10 Pcs.</td>
//                                                 <td className="table_data"><span className="pro-status-approved">Approved</span></td>
//                                                 <td className="table_data">
//                                                     <div className="dropdown">
//                                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                             <i className="fa-solid fa-ellipsis"></i>
//                                                         </a>
//                                                         <ul className="dropdown-menu">
//                                                             <Link to={`addproduct?${data._id}`} role="button"> <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li></Link>
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-check"></i> Enable</a></li>
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bag-shopping"></i> View in Store</a></li>
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-circle-user"></i> Reassign</a></li>
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-xmark"></i> Disable</a></li>
//                                                             <li><a onClick={() => { productdel(data) }} className="dropdown-item" ><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                                         </ul>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>

//                                 </table>

//                                 {/* <span className="showing-tag-name">Showing 1-30 List</span>
//                                 <div className="all-pro-pagination ">
//                                     <button className="back-btn shadow bg-body rounded"><i className="fa-solid fa-chevron-left"></i></button>
//                                     <button className="shadow bg-body rounded">1</button>
//                                     <button className="shadow bg-body rounded">2</button>
//                                     <button className="shadow bg-body rounded">3</button>
//                                     <button className="shadow bg-body rounded"><i className="fa-solid fa-ellipsis"></i></button>
//                                     <button className="shadow bg-body rounded">25</button>
//                                     <button className="next-btn"><i className="fa-solid fa-chevron-right"></i></button>
//                                 </div> */}

//                                 <div className="mt-5" >
//                                     <ReactPaginate
//                                         style={{ padding: "5px", margin: "0px", border: "none" }}
//                                         // previousLabel={""}
//                                         // nextLabel={""}
//                                         pageCount={pageCount}
//                                         onPageChange={changePage}
//                                         containerClassName={"pagination"}
//                                         // previousLinkClassName={"previousBttn"}
//                                         // nextLinkClassName={"nextBttn"}
//                                         disabledClassName={"disabled"}
//                                         activeClassName={"active"}
//                                         total={lists.length}
//                                     />
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Toaster />
//         </div>
//     )
// }
// export default AiProducts
import React from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Breadcrumb, InputGroup } from "react-bootstrap";
// import IconButton from "components/common/IconButton";
// import AdvanceTableSearchBox from "components/common/advance-table/AdvanceTableSearchBox";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import AdminHeader from "../Menubar/AiMenu";
const columns = [
    {
        accessor: 'productId',
        Header: 'Product ID'
    },
    {
        accessor: 'image',
        Header: 'Image'
    },
    {
        accessor: 'name',
        Header: 'Product Name'
    },
    {
        accessor: 'email',
        Header: 'Trader Email',
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
        accessor: 'price',
        Header: 'Price'
    },
    {
        accessor: 'quantity',
        Header: 'Quantity'
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
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'anna@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success ">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>View in Store</Dropdown.Item>
                <Dropdown.Item>Reassign</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "PORTUM KC NATURAL DEKTON",
        email: 'homer@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge  bg-warning">Approval Pending</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>View in Store</Dropdown.Item>
                <Dropdown.Item>Reassign</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'oscar@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge  bg-secondary">Disabled</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>View in Store</Dropdown.Item>
                <Dropdown.Item>Reassign</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
];

const AllProducts = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 mt-2 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Product Lists'
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
                                variant="primary"
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
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12}>
                    <Card className="ms-3 me-3 mb-3 mt-4">
                        <Card.Header className="bg-light">
                            <h5>
                                All Product<span className="ms-1 fs--1 badge bg-secondary">#100</span>
                            </h5>
                            <Breadcrumb className="fs--1 mt-2">
                                <Breadcrumb.Item>
                                    All Products
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Add Products
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <p className="text-dark text-capitalize fs--1 mt-2">Here all the current products on your store</p>
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
                                    <Button className="" as={Link} to="/addproduct" variant="success">Add Product</Button>
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
        </>
    )
}
export default AllProducts
