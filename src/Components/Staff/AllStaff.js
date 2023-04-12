import React from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { Link } from "react-router-dom";
function AllStaff() {
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
                            <h4 className="ai-seller-title" >My Staff <span id="badge-1" className="badge bg-secondary">#100</span></h4>
                            <p className="ai-title-note">Here are the Staff Members on your shop</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Link to="addstaff" role="button"><button className="add-seller_1">Add Staff</button></Link>
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
                                <td id="td">Staff ID <i className="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Name<i className="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Email ID <i className="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td">Status<i className="ri-arrow-down-s-fill"></i>
                                <br></br>
                                        <input id="filter-search" type="search"/>
                                </td>
                                <td id="td" className="rounded-end">Action</td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">Manikandan</td>
                                
                                <td id="td">test@test.com</td>
                                <td id="td"><span className="pro-status-approved">Active</span></td>
                                <td id="td">
                                    <div className="dropdown">
                                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">Saravanan</td>
                                
                                <td id="td">test@test.com</td>
                                <td id="td"><span className="pro-status-disabled">Disabled</span></td>
                                <td id="td">
                                    <div className="dropdown">
                                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">Harish</td>
                                
                                <td id="td">test@test.com</td>
                                <td id="td"><span className="pro-status-approved">Active</span></td>
                                <td id="td">
                                    <div className="dropdown">
                                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">Jagan</td>
                                
                                <td id="td">test@test.com</td>
                                <td id="td"><span className="pro-status-disabled">Disabled</span></td>

                                <td id="td">
                                    <div className="dropdown">
                                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">Gopal</td>
                                
                                <td id="td">test@test.com</td>
                                <td id="td"><span className="pro-status-approved">Active</span></td>
                                <td id="td">
                                    <div className="dropdown">
                                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td">Kumar</td>
                                
                                <td id="td">test@test.com</td>
                                <td id="td"><span className="pro-status-approved">Active</span></td>
                                <td id="td">
                                    <div className="dropdown">
                                        <a className="btn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-pencil"></i> Edit</a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fa-solid fa-trash"></i> Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <span className="showing-tag-name">Showing 1-30 List</span>
                        <div className="all-pro-pagination ">
                            <button className="back-btn shadow bg-body rounded"><i className="fa-solid fa-chevron-left"></i></button>
                            <button className="shadow bg-body rounded">1</button>
                            <button className="shadow bg-body rounded">2</button>
                            <button className="shadow bg-body rounded">3</button>
                            <button className="shadow bg-body rounded"><i className="fa-solid fa-ellipsis"></i></button>
                            <button className="shadow bg-body rounded">25</button>
                            <button className="next-btn"><i className="fa-solid fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllStaff