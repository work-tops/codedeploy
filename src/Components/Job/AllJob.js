// import React, { useState, useEffect } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import { Link } from "react-router-dom";
// import { getAllData, deleteData } from "../../Services/ProxyService";
// import ReactPaginate from 'react-paginate';
// import toast, { Toaster } from 'react-hot-toast';


// function AllJob() {

//     const [jobs, setjobs] = useState([])

//     const Jobslist = async () => {
//         const response = await getAllData('jobs/all');
//         setjobs(response.data.jobs);
//         setShowSpinner(false);
//     }
//     const Jobstdel = async (data) => {
//         const response = await deleteData('job/' + data._id);
//         if (response.status === 201) {
//             toast.success('Successfully Job Deleted')
//             Jobslist()
//         } else {
//             toast.error('Something went wrong')
//         }
//     }
//     const [showSpinner, setShowSpinner] = useState(true);
//     useEffect(() => {
//         Jobslist()
//     }, [])

//     const [listPerPage] = useState(5);
//     const [pageNumber, setPageNumber] = useState(0);
//     const pagesVisited = pageNumber * listPerPage;
//     const lists = jobs.slice(pagesVisited, pagesVisited + listPerPage);
//     const pageCount = Math.ceil(jobs.length / listPerPage);
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
//                             <p className="capital-title">job / Job list</p>
//                             <h4 className="ms-3 mt-1">All Jobs <span className="badge-1 badge bg-secondary">#100</span></h4>
//                             <p className="med-sub-title">Here are the current seller on your store</p>
//                         </div>

//                         <div className="row">
//                             <div className="dropdown col-3">
//                                 <button className="more_action btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     More Action
//                                 </button>
//                                 <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#"><i className="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
//                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-plus"></i> Add Product By CSV</a></li>
//                                 </ul>
//                             </div>
//                             <div className="col-6">
//                                 <Link to="addjob" role="button"><button className="toggle-btn create-btn">Post Job</button></Link>
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
//                             <tr className="product-heading ">
//                                     <td className="table_data rounded-start"><input type='checkbox' /></td>
//                                     <td className="table_data">Job ID<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Category<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Title<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Budget<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Job<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Status<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data">Exp<i className="ri-arrow-down-s-fill"></i>

//                                         <input className="width-100 border-0 filter-search" type="search" />
//                                     </td>
//                                     <td className="table_data rounded-end">Action</td>
//                                 </tr>
//                                 {lists.map((data, key) => (
//                                     <tr key={key}>
//                                         <td className="table_data"><input type='checkbox' /></td>
//                                         <td className="table_data">{data._id}</td>
//                                         <td className="table_data">{data.category}</td>
//                                         <td className="table_data">{data.project_title}</td>
//                                         <td className="table_data">{data.budget}</td>
//                                         <td className="table_data"><span className="pro-status-processing">Processing</span></td>
//                                         {/* <td className="table_data">10 April 2023</td> */}
//                                         <td className="table_data">{data?.expire_date}</td>
//                                         <td className="table_data"><span className="pro-status-approved">Approved</span></td>
//                                         <td className="table_data">
//                                             <div className="dropdown">
//                                                 <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                                     <i className="fa-solid fa-ellipsis"></i>
//                                                 </a>
//                                                 <ul className="dropdown-menu">
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-check"></i> Enable</a></li>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-ban"></i> Deny</a></li>
//                                                     <li><a className="dropdown-item" href="#"><i className="fa-solid fa-xmark"></i> Disable</a></li>
//                                                     <li><a onClick={() => { Jobstdel(data) }} className="dropdown-item"><i className="fa-solid fa-trash"></i> Delete</a></li>
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
//                     </div>
//                 </div>
//             </div>
//             <Toaster />
//         </div>
//     )
// }
// export default AllJob
import React from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card, Breadcrumb, InputGroup } from "react-bootstrap";
// import IconButton from "components/common/IconButton";
// import AdvanceTableSearchBox from "components/common/advance-table/AdvanceTableSearchBox";
// import product_image from "../../User-Portal/TemplateAssets/Images/product_image.png"
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import AdminHeader from "../Menubar/AiMenu";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


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
    // {
    //     accessor: 'createdDate',
    //     Header: 'Created Date        '
    // },
    // {
    //     accessor: 'modifiedDate',
    //     Header: 'Modified Date'
    // },
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

const AllJobs = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Job Lists'
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
                            <h5>
                                All Jobs<span className="ms-1 fs--1 badge bg-secondary">#100</span>
                            </h5>
                            <Breadcrumb className="fs--1 mt-2">
                                <Breadcrumb.Item>
                                    All Jobs
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Add Jobs
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <p className="text-dark text-capitalize fs--1 mt-2">Here all the current Jobs on your store</p>
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
                                    <Button as={Link} to="/addjob" variant="success">Add Job</Button>
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
export default AllJobs
