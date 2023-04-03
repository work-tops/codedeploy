import React, { useEffect, useState } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import pom from '../../Images/product_image.png'
import { Link } from "react-router-dom";
import { getAllData } from "../../Services/ProxyService";
function AiProducts() {

    const [product, setproducts] = useState([])

    const Productlist = async () => {
        const response = await getAllData('products');
        setproducts(response.data.products);
    }
    useEffect(() => {
        Productlist()
    }, [])
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
                        <div>
                            <div className="product-adding-div">
                                <div>
                                    <p className="ai-sub-title">product/product list</p>
                                    <h4>All Products <span id="badge-1" class="badge bg-secondary">#100</span></h4>
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
                                        <Link to="aiproductdetails" role="button"><button className="add-seller">All Products</button></Link>
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
                            <div className="shadow">
                                <table className="allproducts-table">
                                    <tr className="product-heading ">
                                        <td id="td" className="rounded-start"><input type='checkbox' /></td>
                                        <td id="td">Product ID 
                                        <i class="ri-arrow-down-s-fill"></i>
                                        <br></br>
                                        <input id="filter-search" type="search"/>
                                        </td>
                                        <td id="td">Image <i class="ri-arrow-down-s-fill"></i>
                                        <br></br>
                                        <input id="filter-search" type="search"/>
                                        </td>
                                        <td id="td">Name <i class="ri-arrow-down-s-fill"></i>
                                        <br></br>
                                        <input id="filter-search" type="search"/>
                                        </td>
                                        <td id="td">Seller <i class="ri-arrow-down-s-fill"></i>
                                        <br></br>
                                        <input id="filter-search" type="search"/>
                                        </td>
                                        <td id="td">Price <i class="ri-arrow-down-s-fill"></i>
                                        <br></br>
                                        <input id="filter-search" type="search"/>
                                        </td>
                                        <td id="td">Quantity <i class="ri-arrow-down-s-fill"></i>
                                        <br></br>
                                        <input id="filter-search" type="search"/>
                                        </td>
                                        <td id="td">Status <i class="ri-arrow-down-s-fill"></i>
                                        <br></br>
                                        <input id="filter-search" type="search"/>
                                        </td>
                                        <td id="td" className="rounded-end">Option</td>
                                    </tr>
                                    {product.map((data, key) => (
                                        <tr>
                                            <td id="td"><input type='checkbox' /></td>
                                            <td id="td">2456781</td>
                                            <td id="td"><img src={pom} alt="pro-thumb" className="img" /></td>
                                            <td id="td">{data.name}</td>
                                            <td id="td">{data.seller_email}</td>
                                            <td id="td">£ {data.pricing.price}</td>
                                            <td id="td">{data.inventory.quantity} Pcs.</td>
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
                                    ))}

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
            </div>
        </div>
    )
}
export default AiProducts