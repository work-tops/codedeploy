// import React, { useEffect, useState } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import pom from '../../Images/product_image.png'
// import { Link } from "react-router-dom";
// import { getAllData, deleteData } from "../../Services/ProxyService";
// import ReactPaginate from 'react-paginate';
// import toast, { Toaster } from 'react-hot-toast';

// function Serviceslist() {

//     const [product, setproducts] = useState([])

//     const Productlist = async () => {
//         const response = await getAllData('services/all');
//         setproducts(response.data.services);
//         setShowSpinner(false);
//     }

//     const productdel = async (data) => {
//         const response = await deleteData('service/' + data._id);
//         if (response.status === 201) {
//             toast.success('Successfully Service deleted')
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
//                                     <p className="capital-title">Services/Services list</p>
//                                     <h4 className="ms-3 mt-1">All Services <span className="badge-1 badge bg-secondary">#100</span></h4>
//                                     <p className="med-sub-title">Here You Can add Services to your profile</p>
//                                 </div>
//                                 <div className="row">
//                                     <div className="dropdown col-3">
//                                         <button className="more_action btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                             More Action
//                                         </button>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item" href="#"><i className="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
//                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-plus"></i> Add Services By CSV</a></li>
//                                         </ul>
//                                     </div>
//                                     <div className="col-6">
//                                         <Link to="addservices" role="button"><button className="create-btn toggle-btn">Add Service</button></Link>
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
//                                             <td className="table_data">Name <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0 filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Seller <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Price Type <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>
//                                             <td className="table_data">Price <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search" type="search" />
//                                             </td>

//                                             <td className="table_data">Status <i className="ri-arrow-down-s-fill"></i>
//                                                 <input className="width-100 border-0  filter-search " type="search" />
//                                             </td>
//                                             <td className="table_data rounded-end">Action</td>
//                                         </tr>
//                                         {lists.map((data, key) => (
//                                             <tr>
//                                                 <td className="table_data"><input type='checkbox' /></td>
//                                                 {/* <td className="table_data">{data.title}</td> */}
//                                                 {/* <td className="table_data"><img src={pom} alt="pro-thumb" className="img" /></td> */}
//                                                 <td className="table_data">{data.title}</td>
//                                                 <td className="table_data">{data.email}</td>
//                                                 <td className="table_data">{data.price_type} </td>
//                                                 <td className="table_data">£ {data.price}</td>
//                                                 <td className="table_data"><span className="pro-status-approved">{data.status}</span></td>
//                                                 <td className="table_data">
//                                                     <div className="dropdown">
//                                                         <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                             <i className="fa-solid fa-ellipsis"></i>
//                                                         </a>
//                                                         <ul className="dropdown-menu">
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-check"></i> Enable</a></li>
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-xmark"></i> Disable</a></li>
//                                                             <li><a className="dropdown-item" href="#"><i className="fa-solid fa-ban"></i> Deny</a></li>
//                                                             <li><a onClick={() => { productdel(data) }} className="dropdown-item" ><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                                         </ul>
//                                                     </div>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>

//                                 </table>

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
// export default Serviceslist



import React from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Breadcrumb, InputGroup } from "react-bootstrap";
// import IconButton from "../../User-Portal/TemplateAssets/common/IconButton";
// import AdvanceTableSearchBox from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableSearchBox";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";


const columns = [
    {
        accessor: 'name',
        Header: 'Name'
    },
    {
        accessor: 'email',
        Header: 'Seller',
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
        accessor: 'priceType',
        Header: 'PriceType'
    },

    {
        accessor: 'price',
        Header: 'Price'
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
        name: 'Electronic Servies',
        image: <img src={product_image} width="40px" height="35px" />,
        priceType: "Per Hour Cost",
        email: 'anna@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'homer@example.com',
        price: '£100',

        status: <span className="badge  bg-warning">Draft</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'oscar@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'emily@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'jara@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'emily@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'jara@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'emily@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'jara@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'emily@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'jara@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'jara@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Minor Home Repair Services',

        priceType: "Per Hour Cost",
        email: 'jara@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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
        name: 'Electronic Servies',

        priceType: "Per Hour Cost",
        email: 'jara@example.com',
        price: '£100',

        status: <span className="badge bg-success ">Active</span>,
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

const AllServices = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h4 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Services Lists'
                                :
                                ''
                        }
                    </h4>
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
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light">
                            <h2>
                                All Services<span className="ms-1 fs--1 badge bg-secondary">#100</span>
                            </h2>
                            <Breadcrumb className="mt-2">
                                <Breadcrumb.Item>
                                    All Services
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Add Services
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <p className="text-dark text-capitalize mt-2">Here all the current Services on your store</p>
                        </Card.Header>
                        <Card.Body>
                            {/* <div className="d-flex justify-content-end">
                            </div> */}

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
                                    <Button as={Link} to="/addservices" variant="success">Add Services</Button>
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
        </>
    )
}
export default AllServices
