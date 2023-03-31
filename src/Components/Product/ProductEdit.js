import React from "react";
import '../../CSS/ProductEdit.css'
import product_img from '../../Images/product_image.png'
function ProductEdit() {
    return (
        <>
            < div className="product-edit">
                <div className="pro-description">
                    <p className="edit-sec">Product/edit product</p>
                    <h1>Edit Product</h1>
                    <p className="edit-desc">Here you can edit products to your store.</p>
                </div>
                <div class="dropdown">
                    <a class="btn dropdown-toggle" id="ddownToggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More Action
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" id="dropdown_item" href="#">
                                <span className="search_span">Search</span> Offers
                                <br></br>
                                <small id="small-dd">action...</small>

                            </a>

                        </li>
                        <li>
                            <a class="dropdown-item" id="dropdown-item" href="#">
                                <span className="search_span">Search</span> Freelancers
                                <br></br>
                                <small id="small-dd">action...</small></a>
                        </li>
                        <li>
                            <a class="dropdown-item" id="dropdown-item" href="#">
                                <span className="search_span">Search</span> Projects
                                <br></br>
                                <small id="small-dd">action...</small>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="view-in-store">
                        <i class="fa-sharp icons fa-light fa-plus"></i>View in Store
                    </button>
                </div>
            </div>
            <div className="product-edit-form">
                <div className="edit-form">
                    <form autoComplete="off">
                        <label>Choose Product <span className="mark">*</span></label>
                        <div class="dropdown">
                            <a class="btn dropdown" id="ddown-Toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Normal Product<i class="ri-arrow-down-s-fill icon" ></i>
                            </a>

                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" id="dropdown_item" href="#">
                                        <span className="search_span">Normal</span> Product
                                        <br></br>
                                        <small id="small-dd">action...</small>

                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" id="dropdown-item" href="#">
                                        <span className="search_span">Normal</span> Product
                                        <br></br>
                                        <small id="small-dd">action...</small></a>
                                </li>
                                <li>
                                    <a class="dropdown-item" id="dropdown-item" href="#">
                                        <span className="search_span">Normal</span> Product
                                        <br></br>
                                        <small id="small-dd">action...</small>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <label>Seller Email <span className="mark">*</span></label>
                        <input type="email" id="wt-email" placeholder="graniteslabs@worktops.com" disabled />
                        <label>Product Name <span className="mark">*</span></label>
                        <input type="text" id="marble-name" placeholder="verde guatemala marble" />
                        <label>Product Type <span className="mark">*</span> <span className="type-list">View Type Listing</span></label>
                        <input type="text" disabled placeholder="Marble" />
                        <label>Description</label>
                        <div className="icons-toolbar">
                            <i id="dec-icons" class="ri-bold"></i>
                            <i id="dec-icons" class="ri-italic"></i>
                            <i id="dec-icons" class="ri-underline"></i>
                            <i id="dec-icons" class="ri-font-color"><i class="ri-arrow-down-s-fill" ></i></i>
                            <div class="dropdown para-dropdown">
                                <a class="btn para-style dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Paragraph
                                </a>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <div class="dropdown para-dropdown">
                                <a class="btn para-style dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    12pt
                                </a>

                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <i id="dec-icons" class="ri-double-quotes-l"></i>
                            <i id="dec-icons" class="ri-list-ordered"></i>
                            <i id="dec-icons" class="ri-list-unordered"></i>
                            <i id="dec-icons" class="ri-align-left"></i>
                            <i id="dec-icons" class="ri-align-center"></i>
                            <i id="dec-icons" class="ri-align-right"></i>
                            <i id="dec-icons" class="ri-align-justify"></i>
                            <i id="dec-icons" class="ri-grid-line"><i class="ri-arrow-down-s-fill" ></i></i>
                            <i id="dec-icons" class="ri-link"></i>
                            <i id="dec-icons" class="ri-arrow-left-s-line"></i>
                            <i id="dec-icons" class="ri-arrow-right-s-line"></i>
                        </div>
                        <input id="des-box" type='text' />
                        <div className="icons-toolbar1"></div>
                        <label>Product Tags <span className="mark">*</span> <span className="type-list">View Tags Listing</span></label>
                        <div className="pro-tags">
                            <button className="tag-btns" >Category_Marble<i class="close ri-close-line"></i></button>
                            <button className="tag-btns1" >Color_Green<i class="close ri-close-line"></i></button>
                            <button className="tag-btns2" >finish type_polished<i class="close ri-close-line"></i></button>
                            <button className="tag-btns3" >Length_2951mm to 3100mm<i class="close ri-close-line"></i></button>
                            <button className="tag-btns4" >Thickness 16mm to 20mm<i class="close ri-close-line"></i></button>
                            <button className="tag-btns5" >Width_1451mm to 1660mm<i class="close ri-close-line"></i></button>
                        </div>
                        <label>Product Policy</label>
                        <textarea className="textarea"></textarea>
                    </form>
                </div>
                <div className="box-2">
                    <p className="product-img-name">Product Image</p>
                    <p className="product-img-desc">Here you can upload images of product</p>
                    <p className="product-img-note">This is your feature image</p>
                    <img className="product-image" src={product_img} alt="product-image"/>
                </div>
            </div>
        </>
    )
}
export default ProductEdit