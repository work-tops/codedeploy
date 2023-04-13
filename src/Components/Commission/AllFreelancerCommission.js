import React, {useState, useEffect} from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { getAllData } from "../../Services/ProxyService";
import ReactPaginate from 'react-paginate';
import toast, { Toaster } from 'react-hot-toast';

function AllCommission() {
    const [form, setform] = useState([]);
    const Catcomdata = async () => {
        const response = await getAllData("commission/category/4")
        setform(response.data.commission)
    }

    useEffect(() => {
        Catcomdata()
    }, [])

    const [listPerPage] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = form.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(form.length / listPerPage);
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
                            <br></br>
                            <h4 className="ai-seller-title" >Freelancer Commission Settings <span id="badge-1" class="badge bg-secondary">#100</span></h4>
                            <p className="ai-title-note">Here are the Freelancer Commission Setting on your store</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Link to="freelancercommission" role="button"><button className="add-commission">Add Commission to Freelancer</button></Link>
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
                        <table className="allproducts-table">
                            <tr className="product-heading ">
                                <td id="td" className="rounded-start"><input type='checkbox' /></td>
                                <td id="td">Freelancer ID <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Freelancer Profile <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Company Name <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Email ID <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Commission Type <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">First Commission <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Second Commission <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td" className="rounded-end">Action</td>
                            </tr>
                            {lists.map((data, key) => (
                            <tr key={key}>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">Manikandan</td>
                                <td id="td">Global Stone</td>
                                <td id="td">{data.email}</td>
                                <td id="td"> {data.commission_type}</td>
                                <td id="td">{data.first_commission == "" || data.first_commission == undefined ? (
                                        <span> -</span>
                                    ) : (
                                        <span> {data.first_commission}</span>
                                    )}</td>
                               <td id="td">{data.second_commission == "" || data.second_commission == undefined ? (
                                        <span> -</span>
                                    ) : (
                                        <span> {data.second_commission}</span>
                                    )}</td>
                                <td id="td">
                                    <div class="dropdown">
                                        <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            ))}
                           
                        </table>
                        <span className="showing-tag-name">Showing 1-30 List</span>
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
    )
}
export default AllCommission