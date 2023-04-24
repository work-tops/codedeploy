import React, { useEffect, useState } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
import { Link } from "react-router-dom";
import { getAllData, deleteData } from "../../Services/ProxyService";
import ReactPaginate from 'react-paginate';
import toast, { Toaster } from 'react-hot-toast';

function AiProducts() {

    const [product, setproducts] = useState([])

    const Productlist = async () => {
        const response = await getAllData('products');
        setproducts(response.data.products);
        setShowSpinner(false);
    }
    const productdel = async (data) => {
        const response = await deleteData('admin/product/' + data._id);
        if (response.status === 201) {
            toast.success('Successfully Product Deleted')
            Productlist()
        } else {
            toast.error('Something went wrong')
        }
    }
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        Productlist()
    }, [])

    const [listPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = product.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(product.length / listPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <div className="">
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div className="ai-product-div">
                        <div>
                            <AiHeader />
                        </div>
                        <div className="page-bg">
                            <div className="product-adding-div">
                                <div>
                                    <p className="capital-title">product/product list</p>
                                    <h4 className="ms-3 mt-1">All Products <span className="badge-1 badge bg-secondary">#100</span></h4>
                                    <p className="med-sub-title">Here You Can add products to your profile</p>
                                </div>
                                <div className="row">
                                    <div className="dropdown col-3">
                                        <button className="more_action btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            More Action
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-plus"></i> Add Product By CSV</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <Link to="addproduct" role="button"><button className="toggle-btn create-btn">Add Products</button></Link>
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
                                            style={{ width: '70px', height: '70px', fontSize: "20px", opacity: "0.7" }} // set the width and height here
                                        >
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    )}
                                </div>

                                <table className="allproducts-table">
                                    <tbody>
                                        <tr className="product-heading ">
                                            <td className="table_data rounded-start"><input type='checkbox' /></td>
                                            <td className="table_data">Product ID
                                                <i className="ri-arrow-down-s-fill"></i>
                                                
                                                <input className="width-100 border-0 filter-search" type="search" />
                                            </td>
                                            <td className="table_data">Image <i className="ri-arrow-down-s-fill"></i>
                                                
                                                <input className="width-100 border-0 filter-search" type="search" />
                                            </td>
                                            <td className="table_data">Name <i className="ri-arrow-down-s-fill"></i>
                                                
                                                <input className="width-100 border-0 filter-search" type="search" />
                                            </td>
                                            <td className="table_data">Seller <i className="ri-arrow-down-s-fill"></i>
                                                
                                                <input className="width-100 border-0 filter-search" type="search" />
                                            </td>
                                            <td className="table_data">Price <i className="ri-arrow-down-s-fill"></i>
                                                
                                                <input className="width-100 border-0 filter-search" type="search" />
                                            </td>
                                            <td className="table_data">Quantity <i className="ri-arrow-down-s-fill"></i>
                                                
                                                <input className="width-100 border-0 filter-search" type="search" />
                                            </td>
                                            <td className="table_data">Status <i className="ri-arrow-down-s-fill"></i>
                                                
                                                <input className="width-100 border-0 filter-search" type="search" />
                                            </td>
                                            <td className="table_data rounded-end">Action</td>
                                        </tr>
                                        {lists.map((data, key) => (
                                            <tr>
                                                <td className="table_data"><input type='checkbox' /></td>
                                                <td className="table_data">{data._id}</td>
                                                <td className="table_data">
                                                    {data.attachments.length > 0 ?
                                                        (<img src={data.attachments[0]?.url} alt="pro-thumb" className="img" />) : (<img src={pom} alt="pro-thumb" className="img" />)
                                                    }

                                                </td>
                                                <td className="table_data">{data.name}</td>
                                                <td className="table_data">{data.seller_email}</td>
                                                <td className="table_data">£ 100</td>
                                                <td className="table_data">10 Pcs.</td>
                                                <td className="table_data"><span className="pro-status-approved">Approved</span></td>
                                                <td className="table_data">
                                                    <div className="dropdown">
                                                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="fa-solid fa-ellipsis"></i>
                                                        </a>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-check"></i> Enable</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-circle-user"></i> Reassign</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-xmark"></i> Disable</a></li>
                                                            <li><a onClick={() => { productdel(data) }} className="dropdown-item" ><i className="fa-solid fa-trash"></i> Delete</a></li>
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
                                        // previousLabel={""}
                                        // nextLabel={""}
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        containerClassName={"pagination"}
                                        // previousLinkClassName={"previousBttn"}
                                        // nextLinkClassName={"nextBttn"}
                                        disabledClassName={"disabled"}
                                        activeClassName={"active"}
                                        total={lists.length}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}
export default AiProducts