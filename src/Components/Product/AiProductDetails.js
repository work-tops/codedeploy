import React, { useState, useEffect } from "react";
import AiHeader from "../../Components/Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData, getAllData } from "../../Services/ProxyService";
import { uploadImage } from "../../Services/ImageService";
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from '@iconify/react';
import product_image from '../../Images/employee.png'
import variant_image from "../../Images/product_image.png"
function AiProductDetails() {

    const [form, setform] = useState({
        name: ""
    })
    const [procat, setprocat] = useState([])
    const [selemail, setselemail] = useState([])
    const [selectedFile, setSelectedFile] = useState(null);
    // console.log(form)
    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0].name);
        // {
        //     "name": e.target.files[0].name,
        //     "url": "https://myproject-data.s3.eu-west-2.amazonaws.com/images/"+e.target.files[0].name,
        //     "type": e.target.files[0].type
        // }
    }
    const uploadFile = (file) => {
        uploadImage(file);
        console.log('image uploaded');
    }

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData)
    }

    const Addproducts = async () => {
        const productdata = {
            seller_email: form.seller_email,
            name: form.name,
            category: form.category,
            type: {},
            description: form.description,
            tags: [],
            policy: form.policy,
            shipping: form.shipping,
            pricing: { price: 100 },
            inventory: { quantity: 100 },
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

    const Productcat = async () => {
        const response = await getAllData('master/product_types');
        setprocat(response.data.master[0].data);
    }

    const Selleremails = async () => {
        const response = await getAllData('sellers/all');
        setselemail(response.data.sellers);
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

    useEffect(() => {
        Productcat()
        Selleremails()
    }, [])

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
                            <div className="page-bg">
                                <div className="ms-3">
                                    <p className="ai-sub-title">products/edit product</p>
                                    <h4>Add Product</h4>
                                    <p className="ai-tit-desc">Here You Can add products to your profile</p>
                                </div>
                                <div className="product-div">
                                    <div className="Add-Product">
                                        {/* file upload  testing*/}
                                        <div className="d-none">
                                            <input type="file" onChange={handleFileInput} />
                                            <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
                                        </div>

                                        <form onSubmit={(e) => { formsubmit(e) }}>
                                            <label>Product Name</label>
                                            <input value={form.name} required name="name" onChange={(e) => { handleChange(e) }} id="aipro-name" type='text' />
                                            <br></br>
                                            <span className="category">Category</span> <span className="seller-email">Seller Email</span>
                                            <br></br>
                                            <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} id="aipro-category" className="select-category">
                                                <option value="">Select</option>
                                                {procat.map((data, key) => (
                                                    <option key={key} value={data.name}>{data.name}</option>
                                                ))}
                                            </select>

                                            <select value={form.seller_email} required name="seller_email" onChange={(e) => { handleChange(e) }} id="aipro-category" className="select-category">
                                                <option value="">Select</option>
                                                {selemail.map((data, key) => (
                                                    <option key={key} value={data.email}>{data.email}</option>
                                                ))}
                                            </select>
                                            {/* <input value={form.category} required name="category" onChange={(e) => { handleChange(e) }} id="aipro-category" type='text' /> */}
                                            {/* <input value={form.seller_email} required name="seller_email" onChange={(e) => { handleChange(e) }} id="aipro-email" type='email' /> */}
                                            <br />
                                            <label>Description</label>
                                            <br />
                                            <textarea value={form.description} required name="description" onChange={(e) => { handleChange(e) }} id="aipro-description" className="ai-product-description"></textarea>
                                            <br />
                                            <label>Product Tag</label>
                                            <br />
                                            <input value={form.tags} required name="tags" onChange={(e) => { handleChange(e) }} className="ai-product-tag" type='text'></input>
                                            <br></br>
                                            {/*  */}

                                            {/*  */}
                                            {/* <!-- Button trigger modal --> */}
                                            <button id="aipro-addvariant" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <i className="ri-add-line"></i>Add Variant
                                            </button>

                                            {/* <!-- Modal --> */}
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-lg">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <p>Add Variant</p>
                                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                                                        </div>
                                                        <div className="modal-body row">
                                                            <div className="col-5">
                                                                <div className="var-img-drop-div">
                                                                    <p className="add-img-tit">Variant Image</p>
                                                                    <p className="add-img-des">Add Variant image here</p>
                                                                    <br></br>
                                                                    <Icon className="var-image" icon="mingcute:photo-album-fill" height="24" width="24" />
                                                                    <br></br>
                                                                    <button className="add-img-btn">ADD IMAGE</button>
                                                                </div>
                                                                <br></br>
                                                                <div className="var-img-drop-div">
                                                                    <p className="var-tit">Variants</p>
                                                                    <p className="var-dec">Here all the variants click on variant to edit its details </p>
                                                                    <div className="sel-var-abt-div">
                                                                        <img src={variant_image} className="sel_var_image" alt="selected-variant" />
                                                                        <small>Finished Type / Colour / Size </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-7">
                                                                <p className="var-tit">Options</p>
                                                                <p className="var-dec">Add Options details here</p>
                                                                <label className="label">Colour</label>
                                                                <select className="sel-colour">
                                                                    <option>Black,Gold</option>
                                                                    <option>Grey,White</option>
                                                                    <option>Black,Grey</option>
                                                                    <option>Maroon,White</option>
                                                                </select>
                                                                <label className="label">Size</label>
                                                                <input type="text" id="opt-ip-box" />
                                                                <label className="label">Finish Type</label>
                                                                <input type="text" id="opt-ip-box" />
                                                                <br></br>
                                                                <p className="var-tit">Price Details</p>
                                                                <label className="label">Price</label>
                                                                <input value={form.price} name="price" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='number' />
                                                                <label className="label">Compare at Price</label>
                                                                <input value={form.compareprice} name="compareprice" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='number' />
                                                                <label className="label">Handling Charges</label>
                                                                <input value={form.handlingcharge} name="handlingcharge" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='text' />
                                                                <label className="label">Sales Price</label>
                                                                <input value={form.saleprice} name="saleprice" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='text' />
                                                                <br></br>
                                                                <input name="shipping" onChange={(e) => { handleChange(e) }} id="aipro-checkbox1" type='checkbox' value="shipping" /><span className="chc-span">Shipping Requires</span>
                                                                <input name="shipping" onChange={(e) => { handleChange(e) }} id="aipro-checkbox2" type='checkbox' value="chargetax" /><span className="chc-span">Charge Taxes on this product</span>
                                                                <br></br>
                                                                <br></br>
                                                                <p className="var-tit">Inventory</p>
                                                                <label>SKU</label>
                                                                <input value={form.sku} name="sku" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='text' />
                                                                <label>Barcode</label>
                                                                <input value={form.barcode} name="barcode" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='text' />
                                                                <label>Minimum Purchase Quantity</label>
                                                                <input value={form.minimumperchase} name="minimumperchase" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='text' />
                                                                <label>Quantity</label>
                                                                <input value={form.quantity} name="quantity" onChange={(e) => { handleChange(e) }} id="opt-ip-box" type='number' />
                                                                <br></br>
                                                                <input id="aipro-checkbox" type='checkbox' /><span className="chc-span">Track This Product Inventory</span>
                                                                <br></br>
                                                                <button type="submit" className="create-acc-btn">Add</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br></br>
                                            <div>
                                                <table className="sel-var-box">
                                                    <tr>
                                                        <td><img src={variant_image} className="sel_var_image" alt="selected-variant" /></td>
                                                        <td>
                                                            <p className="cur-var-types">Colour / Size / Finished Type / Quantity</p>
                                                            <p className="sku-price">Sku:192736383 / Price: £ 438.48</p>
                                                        </td>
                                                        <td>
                                                            <button className="edt-rem1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                                                            <button className="edt-rem2">Remove</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><img src={variant_image} className="sel_var_image" alt="selected-variant" /></td>
                                                        <td>
                                                            <p className="cur-var-types">Colour / Size / Finished Type / Quantity</p>
                                                            <p className="sku-price">Sku:192736383 / Price: £ 438.48</p>
                                                        </td>
                                                        <td>
                                                            <button className="edt-rem1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                                                            <button className="edt-rem2">Remove</button>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                            {/*  */}
                                            <label>Return Policy</label>
                                            <br />
                                            <textarea value={form.policy} required name="policy" onChange={(e) => { handleChange(e) }} id="aipro-returnpolicy"></textarea>
                                            <button type='submit' className="create-acc-btn">Add Product</button>

                                        </form>
                                    </div>
                                    <div className="Add-Product-Images">
                                        <p className="ai-pro-title">Product Images</p>
                                        <div className="ai-image-drag">
                                            <i className="ai-img-icon ri-image-fill"></i>
                                            <small className="chose-file">No File Chosen</small>
                                        </div>
                                        <div>
                                            <div className="row bg-pre">
                                                <div className="col-4">
                                                    <img src={product_image} width="50px" height="50px" className="pro-pre"/>
                                                </div>
                                                <div className="col-4 fil-name">calcata.gold.jpg</div>
                                                <div className="col-4 "><Icon icon="simple-line-icons:options" className="ico-menu"  /></div>
                                            </div>
                                            <br></br>
                                            <div className="row bg-pre">
                                                <div className="col-4">
                                                    <img src={product_image} width="50px" height="50px" className="pro-pre"/>
                                                </div>
                                                <div className="col-4 fil-name">calcata.gold.jpg</div>
                                                <div className="col-4 "><Icon icon="simple-line-icons:options" className="ico-menu"  /></div>
                                            </div>
                                            <br></br>
                                            <div className="row bg-pre">
                                                <div className="col-4">
                                                    <img src={product_image} width="50px" height="50px" className="pro-pre"/>
                                                </div>
                                                <div className="col-4 fil-name">calcata.gold.jpg</div>
                                                <div className="col-4 "><Icon icon="simple-line-icons:options" className="ico-menu"  /></div>
                                            </div>
                                        </div>
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="img-upload-btn">Upload Images</button>
                                        {/* Modal-1 */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div>
                                                        <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                        <p className="proadd-img-desc">to add the product images</p>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="upd-attachments">
                                                            <Icon className="upload-file-icon" data-bs-toggle="modal" data-bs-target="#exampleModal2" icon="fluent:folder-arrow-up-20-filled" width="90" height="90" />
                                                            <p className="ig-upldesc">Drag & Drop files here or choose file 50 MB max file size</p>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Modal -2 */}
                                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div>
                                                        <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                        <p className="proadd-img-desc">to add the product images</p>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="upd-attachments">
                                                            <table>
                                                                <tr>
                                                                <tr>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                    <td>
                                                                        <img src={product_image} alt="product-img" className="attached-img" />
                                                                        <i class="ri-close-line upload-img-close"></i>
                                                                    </td>
                                                                </tr>
                                                                </tr>
                                                            </table>

                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
