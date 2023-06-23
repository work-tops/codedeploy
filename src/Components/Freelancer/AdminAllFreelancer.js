// import React, { useState, useEffect } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import pom from '../../Images/product_image.png'
// import { Link } from "react-router-dom";
// import { getAllData, deleteData } from "../../Services/ProxyService";
// import ReactPaginate from 'react-paginate';
// import toast, { Toaster } from 'react-hot-toast';
// import { Icon } from "@iconify/react";
// function AllFreelancer() {
//     const [freelanc, setfreelanc] = useState([])

//     const freelancList = async () => {
//         const response = await getAllData('admin/users');
//         setfreelanc(response.data.users);
//         setShowSpinner(false);
//     }

//     const freelancdel = async (data) => {
//         const response = await deleteData('admin/user/' + data._id);
//         if (response.status === 200) {
//             toast.success('Successfully Freelancer Deleted')
//             freelancList()
//         } else {
//             toast.error('Something went wrong')
//         }
//     }

//     const [showSpinner, setShowSpinner] = useState(true);

//     useEffect(() => {
//         freelancList();
//     }, [])

//     const [listPerPage] = useState(5);
//     const [pageNumber, setPageNumber] = useState(0);
//     const pagesVisited = pageNumber * listPerPage;
//     const lists = freelanc.slice(pagesVisited, pagesVisited + listPerPage);
//     const pageCount = Math.ceil(freelanc.length / listPerPage);
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
//                             <p className="capital-title">Freelancer / Freelancer list</p>
//                             <h4 className="ms-3 mt-1" >All Freelancer <span className="badge-1 badge bg-secondary">#100</span></h4>
//                             <p className="med-sub-title">Here are the current Freelancer on your store</p>
//                         </div>

//                         <div className="row">
//                             <div className="dropdown col-3">
//                                 <button  className="more_action btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     More Action
//                                 </button>
//                                 <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#"><i className="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
//                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-plus"></i> Add Product By CSV</a></li>
//                                 </ul>
//                             </div>
//                             <div className="col-6">
//                                 <Link to="addfreelancer" role="button"><button className="create-btn toggle-btn">Add Freelancer</button></Link>
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
//                                     <td className="table_data rounded-start"><input type='checkbox' /></td>
//                                     <td className="table_data">Freelancer ID <i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Freelancer Profile<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Name<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Company Name<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Verfication<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Date<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Status<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data rounded-end">Action</td>
//                                 </tr>
//                                 {lists.map((data, key) => (
//                                     <tr key={key}>
//                                         <td className="table_data"><input type='checkbox' /></td>
//                                         <td className="table_data">{data._id}</td>
//                                         <td className="table_data"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
//                                         <td className="table_data">{data.name}</td>
//                                         <td className="table_data">{data.shop_name}</td>
//                                         <td className="table_data"><span className="pro-status-approved">Verified</span></td>
//                                         <td className="table_data">31 Mar 2023</td>
//                                         <td className="table_data"><span className="pro-status-approved">Approved</span></td>
//                                         <td className="table_data">
//                                             <div className="dropdown">
//                                                 <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                     <i className="fa-solid fa-ellipsis"></i>
//                                                 </a>
//                                                 <ul className="dropdown-menu">
//                                                 <Link to={`addfreelancer?${data._id}`} role="button"><li><a  className="dropdown-item" ><i className="fa-solid fa-pencil"></i> Edit</a></li></Link>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-check"></i> Enable</a></li>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-ban"></i> Deny</a></li>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-envelope"></i> Send Message</a></li>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-key"></i> Change Password </a></li>
//                                                     <li><a onClick={() => { freelancdel(data) }} className="dropdown-item" ><i className="fa-solid fa-trash"></i> Delete</a></li>
//                                                 </ul>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>


//                         </table>

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

//                         <div className="mt-5" >
//                             <ReactPaginate
//                                 style={{ padding: "5px", margin: "0px", border: "none" }}
//                                 pageCount={pageCount}
//                                 onPageChange={changePage}
//                                 containerClassName={"pagination"}
//                                 disabledClassName={"disabled"}
//                                 activeClassName={"active"}
//                                 total={lists.length}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Toaster />
//         </div>
//     )
// }
// export default AllFreelancer


import React from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import IconButton from "components/common/IconButton";
// import AdvanceTableSearchBox from "components/common/advance-table/AdvanceTableSearchBox";
import product_image from "../../Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
const columns = [
    {
        accessor: 'freelancerId',
        Header: 'Freelancer ID'
    },
    {
        accessor: 'image',
        Header: 'Freelancer Profile'
    },
    {
        accessor: 'name',
        Header: 'Name'
    },
    {
        accessor: 'bussinessName',
        Header: 'Bussiness Name'
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
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Steve",
        bussinessName: 'anna',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Sam",
        bussinessName: 'homer',
        verification: <span className="badge p-2 bg-warning">Not Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-warning">Approval Pending</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "George",
        bussinessName: 'oscar',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-secondary">Change Password</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Franncis",
        bussinessName: 'emily',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Andreson",
        bussinessName: 'jara',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Manikandan",
        bussinessName: 'emily',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Vishnu",
        bussinessName: 'jara',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Harish",
        bussinessName: 'emily',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Saravanan",
        bussinessName: 'jara',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Rahim",
        bussinessName: 'emily',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Kumar",
        bussinessName: 'jara',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Jagan",
        bussinessName: 'jara',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        freelancerId: '664345',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Gopal",
        bussinessName: 'jara',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Abigail",
        bussinessName: 'jara',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
];

const AdvancedFreelancerTable = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Freelancer Lists'
                                :
                                ''
                        }
                    </h5>
                </Col>
                <Row className="flex-end-center mt-2 mb-3">
                    <Col xs="auto">
                        <Button as={Link} to="/addfreelancer" variant="success">Add Freelancer</Button>
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
        // <div className="ms-2 me-2 mt-5">
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col className="mt-4" lg={12}>
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header as={"h5"} className="bg-light">
                            All Freelancer
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
        </>
        // </div >
    )
}
export default AdvancedFreelancerTable
