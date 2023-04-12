import React, { useState, useEffect } from "react";
import AiHeader from "../../Components/Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData, getAllData } from "../../Services/ProxyService";
import { uploadImage } from "../../Services/ImageService";
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from '@iconify/react';
import variant_image from "../../Images/product_image.png"
// import ProductMultiselectDropdown from "../SelectTag/ProductTag";
import Multiselect from "multiselect-react-dropdown";
function AiProductDetails() {

    const options = [
        {
            ProCategories: 'Colour', id: 1
        },
        {
            ProCategories: 'FinshedType', id: 2
        },
        {
            ProCategories: 'Length', id: 3
        },
        {
            ProCategories: 'Width', id: 4
        },
        {
            ProCategories: 'Size', id: 5
        },
    ]

    const [selectedMulti, setselectedMulti] = useState([]);

    const handleMulti = (selectedOptions) => {
        const selectedValues = selectedOptions.map((option) => option.ProCategories);
        setselectedMulti(selectedValues);
    };

    const [forms1, setForms1] = useState({
        color: "",
        size: "",
        finish_type: "",
        price: "",
        compare_at: "",
        handling_changes: "",
        sales_price: "",
        shipping: false,
        chargeTax: false,
        sku: "",
        barcode: "",
        min_purchase_qty: "",
        quantity: "",
        track_inventory: "",
    });


    const [products, setProducts] = useState([]);
    console.log(products)

    const handleChange123 = (event) => {
        const { name, value, type, checked } = event.target;
        setForms1((prevForm) => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setProducts((prevProducts) => [...prevProducts, forms1]);
        setForms1({
            color: "",
            size: "",
            finish_type: "",
            price: "",
            compare_at: "",
            handling_changes: "",
            sales_price: "",
            shipping: false,
            chargeTax: false,
            sku: "",
            barcode: "",
            min_purchase_qty: "",
            quantity: "",
            track_inventory: "",

        });
    };

    const variantremove = () => {
        setProducts((prevProducts) => prevProducts.slice(0, -1));
    };

    const [form, setform] = useState({
        name: ""
    })
    const [procat, setprocat] = useState([])
    const [selemail, setselemail] = useState([])
    // const [selectedFile, setSelectedFile] = useState(null);
    // // console.log(form)
    // const handleFileInput = (e) => {
    //     setSelectedFile(e.target.files[0].name);
    //     // {
    //     //     "name": e.target.files[0].name,
    //     //     "url": "https://myproject-data.s3.eu-west-2.amazonaws.com/images/"+e.target.files[0].name,
    //     //     "type": e.target.files[0].type
    //     // }
    // }
    // const uploadFile = (file) => {
    //     uploadImage(file);
    //     console.log('image uploaded');
    // }

    const [selectedFile, setSelectedFile] = useState([]);
    const [actualFiles, setActualFile] = useState([]);
    console.log(selectedFile)

    const handleFileInput = (e) => {
        const files = e.target.files;
        const fileArray = [];
        const _files = Array.from(e.target.files);
        const _urls = [];
        _files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                _urls.push(reader.result);
                setActualFile(_urls);
            };

            reader.readAsDataURL(file);
        });
        for (let i = 0; i < files.length; i++) {
            fileArray.push({
                name: files[i].name,
                url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${files[i].name}`,
                type: files[i].type
            });
        }
        setSelectedFile(fileArray);
    };

    const uploadFile = () => {
        console.log('actual files length', actualFiles.length);
        for (let i = 0; i < actualFiles.length; i++) {
            uploadImage(actualFiles[i]);
        }
    };

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
            tags: selectedMulti,
            policy: form.policy,
            handle: form.handle,
            shipping: form.shipping,
            pricing: { price: 100 },
            inventory: { quantity: 100 },
            meta_fields: {
                title: form.metatitle,
                description: form.metadescription,
            },
            attachments: selectedFile,
            // variant:form.tags,
            variant: [
                {
                    "option_name": "test option",
                    "option_value": "test value"
                }
            ],
            custom_fields: {},
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
        uploadFile()
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
            compare_at: "",
            price: "",
            handling_changes: "",
            sales_price: "",
            sku: "",
            barcode: "",
            min_purchase_qty: "",
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
                                <div className="">
                                    <p className="ai-title">products/edit product</p>
                                    <h4 className="ai-add-title">Add Product</h4>
                                    <p className="ai-title-desc">Here You Can add products to your profile</p>
                                </div>
                                <form onSubmit={(e) => { formsubmit(e) }}>
                                    <div className="product-div">
                                        <div className="Add-Product">
                                            {/* file upload  testing*/}
                                            <div className="d-none">
                                                <input type="file" onChange={handleFileInput} />
                                                <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
                                            </div>

                                            <div >
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
                                                                    <div  >
                                                                        <p className="var-tit">Options</p>
                                                                        <p className="var-dec">Add Options details here</p>
                                                                        <label className="label">Colour</label>
                                                                        <select value={forms1.color} name="color" onChange={(e) => { handleChange123(e) }} className="sel-colour">
                                                                            <option value="">Select</option>
                                                                            <option value="Black,Gold">Black,Gold</option>
                                                                            <option value="Grey,White">Grey,White</option>
                                                                            <option value="Black,Grey">Black,Grey</option>
                                                                            <option value="Maroon,White">Maroon,White</option>
                                                                        </select>
                                                                        <label className="label">Size</label>
                                                                        <input value={forms1.size} name="size" onChange={(e) => { handleChange123(e) }} type="text" id="opt-ip-box" />
                                                                        <label className="label">Finish Type</label>
                                                                        <input value={forms1.finish_type} name="finish_type" onChange={(e) => { handleChange123(e) }} type="text" id="opt-ip-box" />
                                                                        <br></br>
                                                                        <p className="var-tit">Price Details</p>
                                                                        <label className="label">Price</label>
                                                                        <input value={forms1.price} name="price" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='number' />
                                                                        <label className="label">Compare at Price</label>
                                                                        <input value={forms1.compare_at} name="compare_at" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='number' />
                                                                        <label className="label">Handling Charges</label>
                                                                        <input value={forms1.handling_changes} name="handling_changes" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='number' />
                                                                        <label className="label">Sales Price</label>
                                                                        <input value={forms1.sales_price} name="sales_price" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='number' />
                                                                        <br></br>
                                                                        <input name="required_shipping" onChange={(e) => { handleChange123(e) }} id="aipro-checkbox1" type='checkbox' value="true" /><span className="chc-span">Shipping Requires</span>
                                                                        <input name="charge_tax" onChange={(e) => { handleChange123(e) }} id="aipro-checkbox2" type='checkbox' value="true" /><span className="chc-span">Charge Taxes on this product</span>
                                                                        <br></br>
                                                                        <br></br>
                                                                        <p className="var-tit">Inventory</p>
                                                                        <label>SKU</label>
                                                                        <input value={forms1.sku} name="sku" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='text' />
                                                                        <label>Barcode</label>
                                                                        <input value={forms1.barcode} name="barcode" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='text' />
                                                                        <label>Minimum Purchase Quantity</label>
                                                                        <input value={forms1.min_purchase_qty} name="min_purchase_qty" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='number' />
                                                                        <label>Quantity</label>
                                                                        <input value={forms1.quantity} name="quantity" onChange={(e) => { handleChange123(e) }} id="opt-ip-box" type='number' />
                                                                        <br></br>
                                                                        <input value={forms1.track_inventory} name="track_inventory" onChange={(e) => { handleChange123(e) }} id="aipro-checkbox" type='checkbox' /><span className="chc-span">Track This Product Inventory</span>
                                                                        <br></br>
                                                                        <button type="button" onClick={(e) => { handleSubmit(e) }} className="create-acc-btn">Add</button>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                    <table className="sel-var-box">
                                                        {products.map((data) => (
                                                            <tr>
                                                                <td><img src={variant_image} className="sel_var_image" alt="selected-variant" /></td>
                                                                <td>
                                                                    <p className="cur-var-types">{data.color} / {data.size}  / {data.finish_type} / {data.quantity}</p>
                                                                    <p className="sku-price">Sku:{data.sku} / Price: £ {data.price}</p>
                                                                </td>
                                                                <td>
                                                                    <button className="edt-rem1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                                                                    <button onClick={()=>{variantremove()}} type="button" className="edt-rem2">Remove</button>
                                                                </td>
                                                            </tr>
                                                        ))}

                                                        {/* <tr>
                                                            <td><img src={variant_image} className="sel_var_image" alt="selected-variant" /></td>
                                                            <td>
                                                                <p className="cur-var-types">Colour / Size / Finished Type / Quantity</p>
                                                                <p className="sku-price">Sku:192736383 / Price: £ 438.48</p>
                                                            </td>
                                                            <td>
                                                                <button className="edt-rem1" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                                                                <button className="edt-rem2">Remove</button>
                                                            </td>
                                                        </tr> */}
                                                    </table>
                                                    </div>
                                                    {/*  */}
                                                    <label>Return Policy</label>
                                                    <br />
                                                    <textarea value={form.policy} required name="policy" onChange={(e) => { handleChange(e) }} id="aipro-returnpolicy"></textarea>
                                                    <button type='submit' className="create-acc-btn">Add Product</button>
                                                </div>
                                            </div>
                                            <div className="Add-Product-Images">
                                                <p className="ai-pro-title">Product Images</p>
                                                {selectedFile == undefined || selectedFile == 0 ? (
                                                <div className="ai-image-drag">
                                                    <i className="ai-img-icon ri-image-fill"></i>
                                                    <small className="chose-file">No File Chosen</small>
                                                </div>
                                            ) : (
                                                <div>
                                                    {actualFiles.map((file) => (
                                                        <>
                                                            <div className="row bg-pre">
                                                                <div className="col-4">
                                                                    <img src={file} width="50px" height="50px" className="pro-pre" />
                                                                </div>
                                                                <div className="col-4 fil-name">{file.name}</div>
                                                                <div className="col-4 "><Icon icon="simple-line-icons:options" className="ico-menu" /></div>
                                                            </div>
                                                            <br></br>
                                                        </>
                                                    ))}
                                                    </div>
                                                     )}
                                               <label htmlFor="select-basic" className="mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
                                                <button type="button" className="img-upload-btn" onClick={() => document.getElementById('select-basic').click()}>
                                                    Upload Images
                                                </button>
                                                <input
                                                    name="attachments"
                                                    multiple
                                                    onChange={handleFileInput}
                                                    required
                                                    type="file"
                                                    id="select-basic"
                                                    accept="image/*"
                                                    style={{ display: "none" }}
                                                />
                                            </label>

                                                <p className="pro-sub-title">Product Handle and Metafields </p>
                                                <label>Product handle</label>
                                                <input value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} id="ai-pro-handle" type='text' />
                                                <p className="pro-sub-title">Product Meta Fields</p>
                                                <p className="ai-title-desc">Title tag meta field</p>
                                                <input value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} id="ai-pro-handle" type='text' />
                                                <p className="ai-title-desc">Description tag meta field</p>
                                                <input value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} id="ai-pro-handle" type='text' />
                                                <p className="pro-sub-title">Product Tags </p>
                                                <label className="label">Category</label>
                                                <div className="multi-sel">
                                                    <Multiselect
                                                        name="tags"
                                                        value={selectedMulti}
                                                        onSelect={handleMulti}
                                                        options={options}
                                                        displayValue="ProCategories"
                                                    />
                                                </div>
                                                <label className="label">Colour</label>
                                                <div className="multi-sel">
                                                    <Multiselect
                                                        name="tags"
                                                        value={selectedMulti}
                                                        onSelect={handleMulti}
                                                        options={options}
                                                        displayValue="ProCategories"
                                                    />
                                                </div>
                                                
                                                <label className="label">Finish Type</label>
                                                <div className="multi-sel">
                                                    <Multiselect
                                                        name="tags"
                                                        value={selectedMulti}
                                                        onSelect={handleMulti}
                                                        options={options}
                                                        displayValue="ProCategories"
                                                    />
                                                </div>
                                                
                                                <label className="label">Length</label>
                                                <div className="multi-sel">
                                                    <Multiselect
                                                        name="tags"
                                                        value={selectedMulti}
                                                        onSelect={handleMulti}
                                                        options={options}
                                                        displayValue="ProCategories"
                                                    />
                                                </div>
                                                
                                                <label className="label">Width</label>
                                                <div className="multi-sel">
                                                    <Multiselect
                                                        name="tags"
                                                        value={selectedMulti}
                                                        onSelect={handleMulti}
                                                        options={options}
                                                        displayValue="ProCategories"
                                                    />
                                                </div>
                                                
                                                <label className="label">Thickness</label>
                                                <div className="multi-sel">
                                                    <Multiselect
                                                        name="tags"
                                                        value={selectedMulti}
                                                        onSelect={handleMulti}
                                                        options={options}
                                                        displayValue="ProCategories"
                                                    />
                                                </div>
                                                <button className="addtag-row-btn">Add Row</button>
                                            </div>
                                        </div >
                                </form>
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
