import React from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
function AllSeller() {
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
                            <p className="ai-sub-title">product/product list</p>
                            <h4>All Seller</h4>
                            <p className="ai-title-note">Here are the current seller on your store</p>
                        </div>
                        <div>
                            <button className="more-action">More Action</button>
                            <button className="add-seller">Add Seller</button>
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
                    <div>
                        <div className="shadows">
                            <table className="allproducts-table">
                                <tr className="product-heading ">
                                    <td id="td" className="rounded-start"><input type='checkbox' /></td>
                                    <td id="td">Seller ID</td>
                                    <td id="td">Seller Profile</td>
                                    <td id="td">Name</td>
                                    <td id="td">Company Name</td>
                                    <td id="td">Verfication</td>
                                    <td id="td">Date</td>
                                    <td id="td">Status</td>
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
                                    <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
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
                                    <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
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
                                    <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                                </tr>
                                <tr>
                                    <td id="td"><input type='checkbox' /></td>
                                    <td id="td">2456781</td>
                                    <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>                                    <td id="td">Emeka Warehouse</td>
                                    <td id="td">Granite Slab UK</td>
                                    <td id="td"><span className="pro-status-approved">Verified</span></td>
                                    <td id="td">31 Mar 2023</td>
                                    <td id="td"><span className="pro-status-approved">Approved</span></td>
                                    <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                                </tr>
                                <tr>
                                    <td id="td"><input type='checkbox' /></td>
                                    <td id="td">2456781</td>
                                    <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>                                    <td id="td">Emeka Warehouse</td>
                                    <td id="td">Granite Slab UK</td>
                                    <td id="td"><span className="pro-status-approved">Verified</span></td>
                                    <td id="td">31 Mar 2023</td>
                                    <td id="td"><span className="pro-status-approved">Approved</span></td>
                                    <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
                                </tr>
                                <tr>
                                    <td id="td"><input type='checkbox' /></td>
                                    <td id="td">2456781</td>
                                    <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>                                    <td id="td">Emeka Warehouse</td>
                                    <td id="td">Granite Slab UK</td>
                                    <td id="td"><span className="pro-status-approved">Verified</span></td>
                                    <td id="td">31 Mar 2023</td>
                                    <td id="td"><span className="pro-status-approved">Approved</span></td>
                                    <td id="td"><i className="fa-solid fa-ellipsis"></i></td>
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
                        {/* <table >
                            <tr className="product-heading ">
                                <td id="td" className="rounded-start"><input type='checkbox'  /></td>
                                <td id="td">Seller ID</td>
                                <td id="td">Seller Profile</td>
                                <td id="td">Name</td>
                                <td id="td">Company Name</td>
                                <td id="td">Verfication</td>
                                <td id="td">Date</td>
                                <td id="td">Status</td>
                                <td id="td" className="rounded-end">Option</td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approval_pending">Not Verified</span></td>
                                <td id="td">31 Mar 2023.</td>
                                <td id="td"><span className="pro-status-approval_pending">Approval Pending</span></td>
                                <td id="td"><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023.</td>
                                <td id="td"><span className="pro-status-disabled">Disabled</span></td>
                                <td id="td"><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td id="td"><input type='checkbox' /></td>
                                <td id="td">2456781</td>
                                <td id="td"><img src={pom} alt="pro-thumb" className="img-curve" /></td>
                                <td id="td">Emeka Warehouse</td>
                                <td id="td">Granite Slab UK</td>
                                <td id="td"><span className="pro-status-approved">Verified</span></td>
                                <td id="td">31 Mar 2023.</td>
                                <td id="td"><span className="pro-status-approved">Approved</span></td>
                                <td id="td"><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                        </table> */}

                        {/* <span className="showing-tag-name">Showing 1-30 List</span>
                        <div className="all-pro-pagination ">
                            <button className="back-btn shadow bg-body rounded"><i class="fa-solid fa-chevron-left"></i></button>
                            <button className="shadow bg-body rounded">1</button>
                            <button className="shadow bg-body rounded">2</button>
                            <button className="shadow bg-body rounded">3</button>
                            <button className="shadow bg-body rounded"><i class="fa-solid fa-ellipsis"></i></button>
                            <button className="shadow bg-body rounded">25</button>
                            <button className="next-btn"><i class="fa-solid fa-chevron-right"></i></button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllSeller