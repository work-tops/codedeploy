import React from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
function AiProducts() {
    return (
        <div className="ai-all-product">
            <div>
                <AiMenu />
            </div>
            <div className="ai-product-div">
                <div>
                    <AiHeader />
                </div>
                <div>
                    <div className="product-adding-div">
                        <div>
                            <p className="ai-sub-title">product/product list</p>
                            <h4>All Products</h4>
                        </div>
                        <div>
                            <button className="more-action">More Action</button>
                            <button className="add-product-ai">Add Product</button>
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
                    <div class="shadow shadows p-3 mb-5 bg-body rounded">
                        <table >
                            <tr className="product-heading ">
                                <td className="rounded-start"><input type='checkbox' disabled /></td>
                                <td>Product ID</td>
                                <td>Image</td>
                                <td>Name</td>
                                <td>Seller</td>
                                <td>Price</td>
                                <td>Quantity</td>
                                <td>Status</td>
                                <td className="rounded-end">Option</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>2456781</td>
                                <td><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td>Emeka Warehouse</td>
                                <td>Granite Slab UK</td>
                                <td>£77.00</td>
                                <td>3Pcs.</td>
                                <td><span className="pro-status-approved">Approved</span></td>
                                <td><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>2456781</td>
                                <td><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td>Emeka Warehouse</td>
                                <td>Granite Slab UK</td>
                                <td>£77.00</td>
                                <td>3Pcs.</td>
                                <td><span className="pro-status-approval_pending">Approval Pending</span></td>
                                <td><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>2456781</td>
                                <td><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td>Emeka Warehouse</td>
                                <td>Granite Slab UK</td>
                                <td>£77.00</td>
                                <td>3Pcs.</td>
                                <td><span className="pro-status-disabled">Disabled</span></td>
                                <td><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>2456781</td>
                                <td><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td>Emeka Warehouse</td>
                                <td>Granite Slab UK</td>
                                <td>£77.00</td>
                                <td>3Pcs.</td>
                                <td><span className="pro-status-approved">Approved</span></td>
                                <td><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>2456781</td>
                                <td><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td>Emeka Warehouse</td>
                                <td>Granite Slab UK</td>
                                <td>£77.00</td>
                                <td>3Pcs.</td>
                                <td><span className="pro-status-approved">Approved</span></td>
                                <td><i class="fa-solid fa-ellipsis"></i></td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>2456781</td>
                                <td><img src={pom} alt="pro-thumb" className="img" /></td>
                                <td>Emeka Warehouse</td>
                                <td>Granite Slab UK</td>
                                <td>£77.00</td>
                                <td>3Pcs.</td>
                                <td><span className="pro-status-approved">Approved</span></td>
                                <td><i class="fa-solid fa-ellipsis"></i></td>
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
export default AiProducts