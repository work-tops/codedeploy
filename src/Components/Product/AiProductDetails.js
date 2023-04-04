import React, { useState } from "react";
import AiHeader from "../../Components/Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';

function AiProductDetails() {

    const [form, setform] = useState({
        name: ""
    })
    // console.log(form)

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData)
    }

    const Addproducts = async () => {
        const productdata = {
            seller_email: form.seller_email,
            name: form.name,
            type: {},
            description: form.description,
            tags: [],
            policy: form.policy,
            shipping: form.shipping,
            pricing: { price: Number(form.price) },
            inventory: { quantity: Number(form.quantity) },
            // variant:form.tags,
            variant: [
                {
                    "option_name": "test option",
                    "option_value": "test value"
                }
            ],
            custom_fields: {},
            shipping: {},
            created_by: "1",
        }
        const response = await createData("admin/product/new", productdata)
        if (response.status === 201) {
            toast.success('Successfully Product Added')
            setform("")
            cleardata()
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        e.preventDefault()
        Addproducts()
    }

    const cleardata = () => {
        setform({
            name: "",
            description: "",
            seller_email: "",
            category: "",
            tags: "",
            compareprice: "",
            price: "",
            handlingcharge: "",
            saleprice: "",
            sku: "",
            barcode: "",
            minimumperchase: "",
            quantity: "",
            policy: ""
        })
    }

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
                                <div className="ms-3">
                                    <p className="ai-sub-title">products/edit product</p>
                                    <h4>Add Product</h4>
                                    <p className="ai-tit-desc">Here You Can add products to your profile</p>
                                </div>
                                <div className="product-div">
                                    <div className="Add-Product">

                                        <form onSubmit={(e) => { formsubmit(e) }}>
                                            <label>Product Name</label>
                                            <input value={form.name} required name="name" onChange={(e) => { handleChange(e) }} id="aipro-name" type='text' />
                                            <br></br>
                                            <span className="category">Category</span> <span className="seller-email">Seller Email</span>
                                            <br></br>
                                            <input value={form.category} required name="category" onChange={(e) => { handleChange(e) }} id="aipro-category" type='text' />
                                            <input value={form.seller_email} required name="seller_email" onChange={(e) => { handleChange(e) }} id="aipro-email" type='email' />
                                            <br />
                                            <label>Description</label>
                                            <br />
                                            <textarea value={form.description} required name="description" onChange={(e) => { handleChange(e) }} id="aipro-description" className="ai-product-description"></textarea>
                                            <br />
                                            <label>Product Tag</label>
                                            <br />
                                            <input value={form.tags} required name="tags" onChange={(e) => { handleChange(e) }} className="ai-product-tag" type='text'></input>
                                            <br></br>
                                            <br></br>
                                            <input name="shipping" onChange={(e) => { handleChange(e) }} id="aipro-checkbox1" type='checkbox' value="shipping" /><span className="chc-span">Shipping Requires</span>
                                            <input name="shipping" onChange={(e) => { handleChange(e) }} id="aipro-checkbox2" type='checkbox' value="chargetax" /><span className="chc-span">Charge Taxes on this product</span>
                                            <br></br>
                                            <br></br>
                                            <span className="category">Price</span> <span className="compareprice">Compare Price</span>
                                            <br></br>
                                            <input value={form.price} required name="price" onChange={(e) => { handleChange(e) }} id="aipro-category" type='number' />
                                            <input value={form.compareprice} required name="compareprice" onChange={(e) => { handleChange(e) }} id="aipro-email" type='number' />
                                            <br></br>
                                            <br></br>
                                            <span className="category">Handling Charges</span> <span className="salesprice">Sales Price</span>
                                            <br></br>
                                            <input value={form.handlingcharge} required name="handlingcharge" onChange={(e) => { handleChange(e) }} id="aipro-category" type='text' />
                                            <input value={form.saleprice} required name="saleprice" onChange={(e) => { handleChange(e) }} id="aipro-email" type='text' />
                                            <br></br>
                                            <label>SKU</label>
                                            <input value={form.sku} required name="sku" onChange={(e) => { handleChange(e) }} id="aipro-sku" type='text' />
                                            <label>Barcode</label>
                                            <input value={form.barcode} required name="barcode" onChange={(e) => { handleChange(e) }} id="aipro-barcode" type='text' />
                                            <label>Minimum Purchase Quantity</label>
                                            <input value={form.minimumperchase} required name="minimumperchase" onChange={(e) => { handleChange(e) }} id="aipro-min-purchase_quality" type='text' />
                                            <label>Quantity</label>
                                            <input value={form.quantity} required name="quantity" onChange={(e) => { handleChange(e) }} id="aipro-quantity" type='number' />
                                            <br></br>
                                            <input id="aipro-checkbox" type='checkbox' /><span className="chc-span">Track This Product Inventory</span>
                                            <button id="aipro-addvariant"><i className="ri-add-line"></i>Add Variant</button>
                                            <label>Return Policy</label>
                                            <br />
                                            <textarea value={form.policy} required name="policy" onChange={(e) => { handleChange(e) }} id="aipro-returnpolicy"></textarea>
                                            <button type='submit' id="add-product-btn">Add Product</button>
                                        </form>
                                    </div>
                                    <div className="Add-Product-Images">
                                        <p className="ai-pro-title">Product Images</p>
                                        <div className="ai-image-drag">
                                            <i className="ai-img-icon ri-image-fill"></i>
                                            <small className="chose-file">No File Chosen</small>
                                        </div>
                                        <button className="img-upload-btn">Upload Images</button>
                                        <p className="pro-sub-title">Product Handle and Metafields</p>
                                        <label>Product handle</label>
                                        <input id="ai-pro-handle" type='text' />
                                        <p className="pro-sub-title">Product Meta Fields</p>
                                        <p className="ai-title-desc">Title tag meta field</p>
                                        <input id="ai-pro-handle" type='text' />
                                        <p className="ai-title-desc">Descrption tag meta field</p>
                                        <input id="ai-pro-handle" type='text' />
                                    </div>
                                </div >
                            </div >
                        </div>
                    </div>
                    <Toaster />
                </div>
                </div>
            </>
            )
}
export default AiProductDetails
