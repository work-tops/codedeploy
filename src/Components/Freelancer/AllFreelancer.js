import React from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
import { Link } from "react-router-dom";
function AllFreelancer() {
    return (
        <div className="row">
            <div className="col-2">
                <AiMenu />
            </div>
            <div className="col-10">
                <div>
                    <AiHeader />
                </div>
                <div>
                    <div className="product-adding-div">
                        <div>
                            <p className="ai-tit">Freelancer / Freelancer list</p>
                            <h4 className="ai-seller-title" >All Freelancer <span id="badge-1" class="badge bg-secondary">#100</span></h4>
                            <p className="ai-title-note">Here are the current Freelancer on your store</p>
                        </div>

                        <div className="row">
                            <div class="dropdown col-6">
                                <button id="more_action" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More Action
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"><i class="fa-regular fa-pen-to-square"></i> Bulk Edit</a></li>
                                    <li><a class="dropdown-item" href="#"><i class="fa-solid fa-plus"></i> Add Product By CSV</a></li>
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
                                <td id="td">Name <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Company Name <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Verfication <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Date <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Status <i class="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td" className="rounded-end">Option</td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td">
                                    <div class="dropdown">
                                        <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i> Reassign</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xmark"></i> Disable</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approval_pending">Not Verified</span></td>
                                <td id="td">31 Mar 2023</td>
                                <td id="td"><span className="pro-status-approval_pending">Approval Pending</span></td>
                                <td id="td">
                                    <div class="dropdown">
                                        <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i> Reassign</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xmark"></i> Disable</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023</td>
                                <td id="td"><span className="pro-status-disabled">Disabled</span></td>
                                <td id="td">
                                    <div class="dropdown">
                                        <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i> Reassign</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xmark"></i> Disable</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>                                    <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td">
                                    <div class="dropdown">
                                        <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i> Reassign</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xmark"></i> Disable</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>                                    <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td">
                                    <div class="dropdown">
                                        <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i> Reassign</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xmark"></i> Disable</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>                                    <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td">
                                    <div class="dropdown">
                                        <a class="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-bag-shopping"></i> View in Store</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-circle-user"></i> Reassign</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-xmark"></i> Disable</a></li>
                                            <li><a class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </table>

                        <span className="showing-tag-name">Showing 1-30 List</span>
                        <div className="all-pro-pagination ">
                            <button className="back-btn shadow bg-body rounded"><i class="fa-solid fa-chevron-left"></i></button>
                            <button className="shadow bg-body rounded">1</button>
                            <button className="shadow bg-body rounded">2</button>
                            <button className="shadow bg-body rounded">3</button>
                            <button className="shadow bg-body rounded"><i class="fa-solid fa-ellipsis"></i></button>
                            <button className="shadow bg-body rounded">25</button>
                            <button className="next-btn"><i class="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllFreelancer