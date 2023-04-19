import React, { useState, useEffect } from "react";
import AiHeader from "../../Components/Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData, getAllData, updateData } from "../../Services/ProxyService";
import { uploadImage } from "../../Services/ImageService";
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from '@iconify/react';
import variant_image from "../../Images/product_image.png";
import Multiselect from "multiselect-react-dropdown";
import { useHistory, Link } from 'react-router-dom';

function AiProductDetails() {

    //varient state
    const history = useHistory();
    const [variants, setVariants] = useState([]);
    console.log(variants)
    const [isEdit, setEditButton] = useState(false);
    const [editIndex, setEditVarientIndex] = useState(0);

    const [variant, setVarientObject] = useState({
        imageInx: null,
        color: "",
        size: "",
        finish_type: "",
        price: "",
        compare_at: "",
        handling_changes: "",
        sales_price: "",
        required_shipping: false,
        charge_taxes: false,
        sku: "",
        barcode: "",
        min_purchase_qty: "",
        quantity: "",
        track_inventory: false,
        remaining_quantity: 5,
    });

    console.log(Boolean(variant.required_shipping))

    //varient functionality
    const variantChange = (e) => {
        const _variant = { ...variant };
        _variant[e.target.name] = e.target.value;
        setVarientObject(_variant);
    };

    const handlechange1 = (e) => {
        setVarientObject({
            ...variant,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    };

    const handleVariantSubmit = (event) => {
        event.preventDefault();
        var _form = {
            color: variant.color,
            size: variant.size,
            finish_type: variant.finish_type,
            shipping: {
                required_shipping: Boolean(variant.required_shipping),
                charge_tax: Boolean(variant.charge_tax),
            },
            pricing: {
                price: variant.price,
                compare_at: variant.compare_at,
                handling_changes: variant.handling_changes,
                sales_price: variant.sales_price,
                charge_taxes: Boolean(variant.charge_taxes),
            },
            inventory: {
                sku: variant.sku,
                barcode: variant.barcode,
                min_purchase_qty: variant.min_purchase_qty,
                quantity: variant.quantity,
                remaining_quantity: variant.remaining_quantity,
                track_inventory: Boolean(variant.track_inventory),
            },
            attachment: selectedFile[parseInt(variant.imageInx)]
        }

        var _variant = [...variants]
        if (isEdit == true) {
            _variant[editIndex] = _form;
        } else {
            _variant.push(_form);
        }
        setVariants(_variant);
        console.log('variant', variant);
        console.log('_form', _form);
        console.log('variants list', variants);
        resetVarientObject();
    };

    const resetVarientObject = () => {
        var _variant = {
            imageInx: null,
            color: "",
            size: "",
            finish_type: "",
            price: "",
            compare_at: "",
            handling_changes: "",
            sales_price: "",
            required_shipping: false,
            charge_taxes: false,
            sku: "",
            barcode: "",
            min_purchase_qty: "",
            quantity: "",
            track_inventory: false,
            remaining_quantity: 5,
        }

        setVarientObject(_variant);
        setEditButton(false);
        setEditVarientIndex(0);
    };

    const editVarient = (data, index) => {
        var _variant = {
            imageInx: data?.imageInx,
            color: data?.color,
            size: data?.size,
            finish_type: data?.finish_type,
            price: data?.pricing?.price,
            compare_at: data?.pricing?.compare_at,
            handling_changes: data?.pricing?.handling_changes,
            sales_price: data?.pricing?.sales_price,
            required_shipping: data?.shipping?.required_shipping,
            charge_taxes: data?.pricing?.charge_taxes,
            sku: data?.inventory?.sku,
            barcode: data?.inventory?.barcode,
            min_purchase_qty: data?.inventory?.min_purchase_qty,
            quantity: data?.inventory?.quantity,
            track_inventory: data?.inventory?.track_inventory,
            remaining_quantity: 5,

        }
        setVarientObject(_variant);
        setEditButton(true);
        setEditVarientIndex(index);
    };
    const variantremove = (index) => {
        var _variant = [...variants]
        _variant.splice(index, 1);
        setVariants(_variant);
    };

    // file upload --state
    const [selectedFile, setSelectedFile] = useState([]);
    const [actualFiles, setActualFile] = useState([]);
    const [uploadFiles, setUploadFile] = useState([]);
    // file upload --functionality
    const handleFileInput = (e) => {
        // const files = e.target.files;
        const _files = Array.from(e.target.files);
        const _urls = [...actualFiles];
        const fileArray = selectedFile;
        const upload = uploadFiles;
        _files.forEach((file) => {
            upload.push(file);
            const reader = new FileReader();

            reader.onload = () => {
                _urls.push(reader.result);
                setActualFile(_urls);
            };

            reader.readAsDataURL(file);
        });
        for (let i = 0; i < _files.length; i++) {
            fileArray.push({
                name: _files[i].name,
                url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${_files[i].name}`,
                type: _files[i].type
            });
        }
        setSelectedFile(fileArray);
        setUploadFile(upload);
    };
    const uploadFile = () => {
        console.log('uploadFiles length', uploadFiles.length);
        for (let i = 0; i < uploadFiles.length; i++) {
            uploadImage(uploadFiles[i]);
        }
    };
    const removeImage = async (index) => {
        var selected = [...selectedFile];
        var actual = [...actualFiles];
        var uploads = [...uploadFiles];
        selected.splice(index, 1);
        actual.splice(index, 1);
        uploads.splice(index, 1);
        setActualFile(actual);
        setSelectedFile(selected);
        setUploadFile(uploads);
    }
    //product --state
    const [form, setProductForm] = useState({
        name: ""
    })
    const [productCategory, setproductCategory] = useState([])
    const [sellerList, setsellerList] = useState([])
    const [productTags, setproductTags] = useState([])
    const [selectedproductTags, setSelectedproductTags] = useState([])

    //product --functionality
    const handleChange = (e) => {
        const myData = { ...form };
        if (e.target.name == 'type') {
            var _pd = productCategory.find(x => x.name == e.target.value);
            var _type = {
                id: _pd ? _pd.id : 1,
                name: e.target.value
            }
            myData[e.target.name] = _type;
        } else {
            myData[e.target.name] = e.target.value;
        }
        setProductForm(myData);
    }
    const addProduct = async () => {
        const productdata = {
            seller_email: form.seller_email,
            name: form.name,
            // category: form.category,
            type: form.type,
            description: form.description,
            tags: selectedproductTags,
            policy: form.policy,
            shipping: form.shipping,
            pricing: { price: 100 },
            inventory: { quantity: 100 },
            handle: form.handle,
            meta_fields: {
                title: form.metatitle,
                description: form.metadescription,
            },
            attachments: selectedFile,
            // variant:form.tags,
            variant: variants,
            custom_fields: {},
            created_by: "1",
        }
        console.log(productdata);
        var response = null;
        if (editProduct != '') {
            response = await updateData("admin/product/" + editProduct, productdata);
        } else {
            response = await createData("admin/product/new", productdata);
        }
        if (response.status === 201) {
            toast.success('Successfully Product Submitted');
            clearData();
            history.push('/allproduct');
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        if (variants.length === 0) {
            toast.error("You have to add at least one variant")
            e.preventDefault()

        } else {
            e.preventDefault()
            addProduct()
            uploadFile()
        }
    }

    const onSelect = (selectedList, selectedItem, index) => {
        var _tags = selectedproductTags;
        _tags[index].list = selectedList;
        setSelectedproductTags(_tags);
    }
    const onRemove = (selectedList, removedItem, index) => {
        var _tags = selectedproductTags;
        _tags[index].list = selectedList;
        setSelectedproductTags(_tags);
    }
    const handleTagChange = (event, index) => {
        var _list = [
            {
                id: 1,
                value: event.target.value
            }
        ]
        var _tags = selectedproductTags;
        _tags[index].list = _list;
        setSelectedproductTags(_tags);
    }
    const getProductTags = async () => {
        const response = await getAllData('master/product_tags');
        setproductTags(response.data.master[0].data);
        var _selectList = [];
        response.data.master[0].data.forEach(x => {
            _selectList.push({ id: x.id, name: x.name, list: [] })
        })
        setSelectedproductTags(_selectList);
    }

    const getProductCategories = async () => {
        const response = await getAllData('master/product_category');
        setproductCategory(response.data.master[0].data);
    }

    const getSellerList = async () => {
        const response = await getAllData('sellers/all');
        setsellerList(response.data.sellers);
    }

    // Product by id
    const getProductById = async (_id) => {
        const response = await getAllData('product/' + _id);
        const _product = response.data.product;
        console.log(_product)
        setProductForm({
            name: _product.name,
            category: _product.category,
            seller_email: _product.seller_email,
            description: _product.description,
            policy: _product.policy,
            handle: _product.handle,
            variant: _product.variant,
            metatitle: _product.meta_fields.title,
            metadescription: _product.meta_fields.description,
            tags: _product.tags,
            attachments: _product.attachments,
            type: _product.type,

        });
        // setproductCategory([_product.type])
        setVariants(_product.variant);
        setSelectedproductTags(_product.tags);
        setproductTags(_product.tags);
        console.log(_product.tags)
        setSelectedFile(_product.attachments);
        var _actFiles = [];
        _product.attachments.forEach((x) => {
            _actFiles.push(x.url);
        })
        setActualFile(_actFiles);
        // setVariants([_product.variant]);
    }

    //reset all
    const clearData = () => {
        setProductForm({
            name: "",
            category: "",
            seller_email: "",
            description: "",
            policy: "",
            handle: "",
            metatitle: "",
            metadescription: ""
        });
        setActualFile([]);
        setUploadFile([]);
        setSelectedFile([]);
        setVariants([]);
        getProductTags();
        resetVarientObject();

    }
    const [editProduct, setEditProducts] = useState('');
    useEffect(() => {
        var query = window.location.search.substring(1);
        console.log(query);
        getProductTags();
        getProductCategories();
        getSellerList();
        if (query) {
            getProductById(query);
            setEditProducts(query);
        }
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
                                                <select
                                                    value={form.type?.name}
                                                    required name="type" onChange={(e) => { handleChange(e) }} id="aipro-category" className="select-category">
                                                    <option value="">Select</option>
                                                    {productCategory.map((data, key) => (
                                                        <option key={key} value={data.name}>
                                                            {data.name}
                                                        </option>
                                                    ))}
                                                </select>

                                                <select value={form.seller_email} required name="seller_email" onChange={(e) => { handleChange(e) }} id="aipro-category" className="select-category">
                                                    <option value="">Select</option>
                                                    {sellerList.map((data, key) => (
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
                                                {/* <label>Product Tag</label>
                                                <br />
                                                <input value={form.tags} required name="tags" onChange={(e) => { handleChange(e) }} className="ai-product-tag" type='text'></input> */}
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
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onClick={() => resetVarientObject()}>Close</button>
                                                            </div>
                                                            <div className="modal-body row">
                                                                <div className="col-5">
                                                                    <div className="var-img-drop-div">
                                                                        <p className="add-img-tit">Variant Image</p>
                                                                        <p className="add-img-des">Add Variant image here</p>
                                                                        <br></br>

                                                                        {variant.imageInx == undefined || variant.imageInx == null ? (
                                                                            <Icon className="var-image" icon="mingcute:photo-album-fill" height="24" width="24" />) :
                                                                            (<img src={actualFiles[variant.imageInx]} width="50px" height="50px" className="pro-pre" />)
                                                                        }
                                                                        <br></br>
                                                                        <button className="add-img-btn d-none">ADD IMAGE</button>
                                                                        <select value={variant?.imageInx} name="imageInx" onChange={(e) => { variantChange(e) }} className="select-category">
                                                                            <option value="" disabled>Add Image</option>
                                                                            {actualFiles.map((file, index) => (
                                                                                <option value={index}>
                                                                                    {/* <img src={file} width="50px" height="50px" className="pro-pre" /> */}
                                                                                    {selectedFile[index]?.name}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                    <br></br>
                                                                    <div className="var-img-drop-div">
                                                                        <p className="var-tit">Variants</p>
                                                                        <p className="var-dec">Here all the variants click on variant to edit its details </p>
                                                                        <div className="sel-var-abt-div">
                                                                            {variant.imageInx == undefined || variant.imageInx == null ? (
                                                                                <Icon className="sel_var_image" icon="mingcute:photo-album-fill" height="24" width="24" />) :
                                                                                (<img src={actualFiles[variant.imageInx]} className="sel_var_image" alt="selected-variant" />
                                                                                )
                                                                            }
                                                                            <small>Finished Type / Colour / Size </small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div  >
                                                                        <p className="var-tit">Options</p>
                                                                        <p className="var-dec">Add Options details here</p>
                                                                        <label className="label">Colour</label>
                                                                        <select value={variant.color} name="color" onChange={(e) => { variantChange(e) }} className="sel-colour">
                                                                            <option value="">Select</option>
                                                                            <option value="Black,Gold">Black,Gold</option>
                                                                            <option value="Grey,White">Grey,White</option>
                                                                            <option value="Black,Grey">Black,Grey</option>
                                                                            <option value="Maroon,White">Maroon,White</option>
                                                                        </select>
                                                                        <label className="label">Size</label>
                                                                        <input value={variant.size} name="size" onChange={(e) => { variantChange(e) }} type="text" id="opt-ip-box" />
                                                                        <label className="label">Finish Type</label>
                                                                        <input value={variant.finish_type} name="finish_type" onChange={(e) => { variantChange(e) }} type="text" id="opt-ip-box" />
                                                                        <br></br>
                                                                        <p className="var-tit">Price Details</p>
                                                                        <label className="label">Price</label>
                                                                        <input value={variant.price} name="price" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
                                                                        <label className="label">Compare at Price</label>
                                                                        <input value={variant.compare_at} name="compare_at" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
                                                                        <label className="label">Handling Charges</label>
                                                                        <input value={variant.handling_changes} name="handling_changes" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
                                                                        <label className="label">Sales Price</label>
                                                                        <input value={variant.sales_price} name="sales_price" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
                                                                        <br></br>
                                                                        <input checked={variant.required_shipping} name="required_shipping" onChange={handlechange1} id="aipro-checkbox1" type='checkbox' />
                                                                        <span className="chc-span">Shipping Requires</span>
                                                                        <input checked={variant.charge_taxes} name="charge_taxes" onChange={handlechange1} id="aipro-checkbox2" type='checkbox' />
                                                                        <span className="chc-span">Charge Taxes on this product</span>
                                                                        {/* <input defaultValue={variant.required_shipping} name="required_shipping" onChange={(e) => { variantChange(e) }} id="aipro-checkbox1" type='checkbox' value="true" /><span className="chc-span">Shipping Requires</span>
                                                                        <input defaultValue={variant.charge_taxes} name="charge_taxes" onChange={(e) => { variantChange(e) }} id="aipro-checkbox2" type='checkbox' value="true" /><span className="chc-span">Charge Taxes on this product</span> */}
                                                                        <br></br>
                                                                        <br></br>
                                                                        <p className="var-tit">Inventory</p>
                                                                        <label>SKU</label>
                                                                        <input value={variant.sku} name="sku" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='text' />
                                                                        <label>Barcode</label>
                                                                        <input value={variant.barcode} name="barcode" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='text' />
                                                                        <label>Minimum Purchase Quantity</label>
                                                                        <input value={variant.min_purchase_qty} name="min_purchase_qty" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
                                                                        <label>Quantity</label>
                                                                        <input value={variant.quantity} name="quantity" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
                                                                        <br></br>
                                                                        <input checked={variant.track_inventory} name="track_inventory" onChange={handlechange1} id="aipro-checkbox" type='checkbox' /><span className="chc-span">Track This Product Inventory</span>
                                                                        <br></br>
                                                                        <button type="button" onClick={(e) => { handleVariantSubmit(e) }} data-bs-dismiss="modal" aria-label="Close" className="create-acc-btn">Submit</button>
                                                                        <button type="button" className="btn btn-danger ms-3" data-bs-dismiss="modal" aria-label="Close" onClick={() => resetVarientObject()}>Cancel</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div>
                                                    <table className="sel-var-box">

                                                        <tbody>
                                                            {variants.map((data, index) => (
                                                                <tr>
                                                                    <td><img src={variant_image} className="sel_var_image" alt="selected-variant" /></td>
                                                                    <td>
                                                                        <p className="cur-var-types">{data?.color} / {data?.size}  / {data?.finish_type} / {data?.quantity}</p>
                                                                        <p className="sku-price">Sku:{data?.inventory?.sku} / Price: £ {data?.pricing?.price}</p>
                                                                    </td>
                                                                    <td>
                                                                        <button className="edt-rem1" type="button" onClick={() => editVarient(data, index)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                                                                        <button onClick={() => { variantremove(index) }} type="button" className="edt-rem2">Remove</button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/*  */}
                                                <label>Return Policy</label>
                                                <br />
                                                <textarea value={form.policy} required name="policy" onChange={(e) => { handleChange(e) }} id="aipro-returnpolicy"></textarea>
                                                <button type='submit' className="create-acc-btn">Save Product</button>
                                                {/* <button className="btn btn-danger ms-3" onClick={clearData}>Clear</button> */}
                                                <Link to="/allproduct"><button className="btn btn-danger ms-3">Cancel</button></Link> 
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
                                                    {actualFiles.map((file, index) => (
                                                        <>
                                                            <div className="row bg-pre">
                                                                <div className="col-4">
                                                                    <img src={file} width="50px" height="50px" className="pro-pre" />
                                                                </div>
                                                                <div className="col-4 fil-name">{selectedFile[index]?.name}</div>
                                                                <div className="col-4 ">
                                                                    <div className="m-3 text-end">
                                                                        <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>

                                                                    </div>
                                                                    {/* <Icon icon="simple-line-icons:options" className="ico-menu" /> */}

                                                                </div>
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
                                            <p className="pro-sub-title">Product Tag</p>
                                            {productTags.map((x, i) => {
                                                const defaultSelectedValues = selectedproductTags[i]?.list || []; 
                                                return <>
                                                    <label className="label">{x?.name}</label>
                                                  {   console.log(x)}
                                                    {x.id == 1 || x.id == 2 ?
                                                            (
                                                                <div className="multi-sel">
                                                                    <Multiselect selectedValues={defaultSelectedValues} options={x?.list} onRemove={(list, item) => onRemove(list, item, i)} onSelect={(list, item) => onSelect(list, item, i)} displayValue="value" />
                                                                </div>
                                                            ) :
                                                        (
                                                            <input  className="ai-input" value={selectedproductTags[i]?.list[0]?.value} onChange={(e) => { handleTagChange(e, i) }} placeholder={`Enter ${x?.name}`} name={`tagname_${i}`} id={`tagname_${i}`} type="text" />
                                                        )

                                                    }


                                                </>
                                            })}
                                            {/* <button className="addtag-row-btn">Add Row</button> */}
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
