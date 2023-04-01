import React from "react";
import AiHeader from "../../Components/Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";

function AiProductDetails() {
    return (
        <>

            <div className="">
                <div className="row">
                    <div className="col-2">
                        <AiMenu />
                    </div>
                    <div className="col-10">
                        <div className="ai-product-div">
                            <AiHeader />
                            <div>
                                <div>
                                    <div className="ms-3">
                                        <p className="ai-sub-title">products/edit product</p>
                                        <h4>Add Product</h4>
                                        <p className="ai-title-desc">Here You Can add products to your profile</p>
                                    </div>
                                    <div className="product-div">
                                        <div className="Add-Product">
                                            <form>
                                                <label>Product Name</label>
                                                <input id="aipro-name" type='text' />
                                                <br></br>
                                                <span className="category">Category</span> <span className="seller-email">Seller Email</span>
                                                <br></br>
                                                <input id="aipro-category" type='text' />
                                                <input id="aipro-email" type='email' />
                                                <br />
                                                <label>Description</label>
                                                <br />
                                                <textarea id="aipro-description" className="ai-product-description"></textarea>
                                                <br />
                                                <label>Product Tag</label>
                                                <br />
                                                <input className="ai-product-tag" type='text'></input>
                                                <br></br>
                                                <br></br>
                                                <input id="aipro-checkbox1" type='checkbox' /><span className="chc-span">Shipping Requires</span>
                                                <input id="aipro-checkbox2" type='checkbox' /><span className="chc-span">Charge Taxes on this product</span>
                                                <br></br>
                                                <br></br>
                                                <span className="category">Price</span> <span className="compareprice">Compare Price</span>
                                                <br></br>
                                                <input id="aipro-category" type='text' />
                                                <input id="aipro-email" type='email' />
                                                <br></br>
                                                <br></br>
                                                <span className="category">Handling Charges</span> <span className="salesprice">Sales Price</span>
                                                <br></br>
                                                <input id="aipro-category" type='text' />
                                                <input id="aipro-email" type='email' />
                                                <br></br>
                                                <label>SKU</label>
                                                <input id="aipro-sku" type='text' />
                                                <label>Barcode</label>
                                                <input id="aipro-barcode" type='text' />
                                                <label>Minimum Purchase Quality</label>
                                                <input id="aipro-min-purchase_quality" type='text' />
                                                <label>Quantity</label>
                                                <input id="aipro-quantity" type='text' />
                                                <br></br>
                                                <input id="aipro-checkbox" type='checkbox' /><span className="chc-span">Track This Product Inventory</span>
                                                <button id="aipro-addvariant"><i className="ri-add-line"></i>Add Variant</button>
                                                <label>Return Policy</label>
                                                <br />
                                                <textarea id="aipro-returnpolicy"></textarea>
                                                <input type='button' id="add-product-btn" value='Add Product' />
                                            </form>
                                        </div >
                                        <div className="Add-Product-Images">
                                            <p className="ai-pro-title">Product Images</p>
                                            <div className="ai-image-drag">
                                                <i className="ai-img-icon ri-image-fill"></i>
                                                <small className="chose-file">No File Chosen</small>
                                            </div>
                                            <button className="img-upload-btn">Upload Images</button>
                                            <p className="pro-sub-title">Product Handle and Metafields</p>

                                            <span className="label">Product handle</span>
                                            <label>Product handle</label>

                                            <input id="ai-pro-handle" type='text' />
                                            <p className="pro-sub-title">Product Meta Fields</p>
                                            <p className="ai-title-desc">Title tag meta field</p>
                                            <input id="ai-pro-handle" type='text' />
                                            <p className="ai-title-desc">Descrption tag meta field</p>
                                            <input id="ai-pro-handle" type='text' />
                                        </div >

                                    </div >
                                </div >
                            </div >

                        </div >
                    </div >
                </div >
            </div>
        </>
    )
}
export default AiProductDetails
