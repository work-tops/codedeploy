import React, { useState, useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
import { Link } from "react-router-dom";
import { getAllData, deleteData } from "../../Services/ProxyService";
import ReactPaginate from 'react-paginate';
import toast, { Toaster } from 'react-hot-toast';

function AllFreelancer() {
    const [freelanc, setfreelanc] = useState([])

    const freelancList = async () => {
        const response = await getAllData('sellers/all');
        setfreelanc(response.data.sellers);
        setShowSpinner(false);
    }
    const freelancdel = async (data) => {
        const response = await deleteData('seller/' + data._id);
        if (response.status === 201) {
            toast.success('Successfully Freelancer Added')
            freelancList()
        } else {
            toast.error('Something went wrong')
        }
    }

    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        freelancList();
    }, [])

    const [listPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = freelanc.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(freelanc.length / listPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="row">

            <div className="col-2">
                <AiMenu />
            </div>
            <div className="col-10">
                <div>
                    <AiHeader />
                </div>
                <div className="page-bg">
                    <div className="product-adding-div">
                        <div>
                            <p className="ai-tit">Freelancer / Freelancer list</p>
                            <h4 className="ai-seller-title" >All Freelancer <span id="badge-1" className="badge bg-secondary">#100</span></h4>
                            <p className="ai-title-note">Here are the current Freelancer on your store</p>
                        </div>

                        <div className="row">
                            <div className="dropdown col-6">
                                <button id="more_action" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Action
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
                                    <li><a className="dropdown-item" href="#"><i className="fa-solid fa-plus"></i> Add Product By CSV</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <Link to="addfreelancer" role="button"><button className="add-seller">Add Freelancer</button></Link>
                            </div>
                        </div>
                    </div>
                    <p className="bulk-actions">Bulk Action :{' '}
                        <select className="select-opt">
                            <option>Select Options</option>
                        </select>
                    </p>
                    <p className="show-list">Show:
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                        {' '}
                        List
                    </p>
                    <div className="all-jobs-div">
                        <div style={{ height: '0px' }} className="text-center">
                            {showSpinner && (
                                <div
                                    className="spinner-border"
                                    role="status"
                                    style={{ width: '70px', height: '70px', fontSize: "20px", opacity:"0.7" }} // set the width and height here
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                        </div>
                        <table className="allproducts-table">
                          <tbody>
                          <tr className="product-heading ">
                                <td id="td" className="rounded-start"><input type='checkbox' /></td>
                                <td id="td">Freelancer ID <i className="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Freelancer Profile <i className="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Name <i className="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Company Name <i className="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Verfication <i className="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Date <i className="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td">Status <i className="ri-arrow-down-s-fill"></i>
                                    <br></br>
                                    <input id="filter-search" type="search" />
                                </td>
                                <td id="td" className="rounded-end">Option</td>
                            </tr>
                            {lists.map((data, key) => (
                                <tr key={key}>
                                    <td id="td"><input type='checkbox' /></td>
                                    <td id="td">{data._id}</td>
                                    <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                    <td id="td">{data.name}</td>
                                    <td id="td">{data.shop_name}</td>
                                    <td id="td"><span className="pro-status-approved">Verified</span></td>
                                    <td id="td">31 Mar 2023</td>
                                    <td id="td"><span className="pro-status-approved">Approved</span></td>
                                    <td id="td">
                                        <div className="dropdown">
                                            <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fa-solid fa-ellipsis"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-circle-user"></i> Reassign</a></li>
                                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-xmark"></i> Disable</a></li>
                                                <li><a onClick={() => { freelancdel(data) }} className="dropdown-item" ><i className="fa-solid fa-trash"></i> Delete</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                          </tbody>


                        </table>

                        {/* <span className="showing-tag-name">Showing 1-30 List</span>
                        <div className="all-pro-pagination ">
                            <button className="back-btn shadow bg-body rounded"><i className="fa-solid fa-chevron-left"></i></button>
                            <button className="shadow bg-body rounded">1</button>
                            <button className="shadow bg-body rounded">2</button>
                            <button className="shadow bg-body rounded">3</button>
                            <button className="shadow bg-body rounded"><i className="fa-solid fa-ellipsis"></i></button>
                            <button className="shadow bg-body rounded">25</button>
                            <button className="next-btn"><i className="fa-solid fa-chevron-right"></i></button>
                        </div> */}

                        <div className="mt-5" >
                            <ReactPaginate
                                style={{ padding: "5px", margin: "0px", border: "none" }}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"pagination"}
                                disabledClassName={"disabled"}
                                activeClassName={"active"}
                                total={lists.length}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}
export default AllFreelancer