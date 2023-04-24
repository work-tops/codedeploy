import React, { useState, useEffect } from "react";
import AiHeader from "../../Components/Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData, getAllData } from "../../Services/ProxyService";
import { uploadImage } from "../../Services/ImageService";
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from '@iconify/react';
import variant_image from "../../Images/product_image.png";
import Multiselect from "multiselect-react-dropdown";
function AiProductDetails() {

    //varient state
    const [forms1, setForms1] = useState({});
    const [variants, setVariants] = useState([]);
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

    //varient functionality
    const variantChange = (e) => {
        const _variant = { ...variant };
        _variant[e.target.name] = e.target.value;
        setVarientObject(_variant);
    };

    const handleVariantSubmit = (event) => {

        event.preventDefault();
        var _form = { ...forms1 };
        _form = {
            color: variant.color,
            size: variant.size,
            finish_type: variant.finish_type,
            shipping: {
                required_shipping: variant.required_shipping,
                charge_tax: variant.charge_tax,
            },
            pricing: {
                price: variant.price,
                compare_at: variant.compare_at,
                handling_changes: variant.handling_changes,
                sales_price: variant.sales_price,
                charge_taxes: variant.charge_taxes,
            },
            inventory: {
                sku: variant.sku,
                barcode: variant.barcode,
                min_purchase_qty: variant.min_purchase_qty,
                quantity: variant.quantity,
                track_inventory: variant.track_inventory,
                remaining_quantity: variant.remaining_quantity,
            },
            attachment: selectedFile[parseInt(variant.imageInx)]
        }

        setForms1(_form);
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
            required_shipping: false,
            charge_taxes: false,
            sku: data?.inventory?.sku,
            barcode: data?.inventory?.barcode,
            min_purchase_qty: data?.inventory?.min_purchase_qty,
            quantity: data?.inventory?.quantity,
            track_inventory: false,
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
        setUploadFile(files);
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
    const [form, setform] = useState({
        name: ""
    })
    const [procat, setprocat] = useState([])
    const [selemail, setselemail] = useState([])
    const [productTags, setproductTags] = useState([])
    const [selectedproductTags, setSelectedproductTags] = useState([])
    const [metadata, setmetadata] = useState([])

    //product --functionality
    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData)
    }
    const addProduct = async () => {
        const productdata = {
            seller_email: form.seller_email,
            name: form.name,
            category: form.category,
            type: {},
            description: form.description,
            tags: selectedproductTags,
            policy: form.policy,
            handle: form.handle,
            shipping: form.shipping,
            pricing: { price: 100 },
            inventory: { quantity: 100 },
            meta_fields: {
                title: metadata.metatitle,
                description: metadata.metadescription,
            },
            attachments: selectedFile,
            // variant:form.tags,
            variant: variants,
            custom_fields: {},
            created_by: "1",
        }
        console.log(productdata)
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
        addProduct()
        uploadFile()
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
        console.log('selectedproductTags', selectedproductTags);
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
        setprocat(response.data.master[0].data);
    }

    const getSellerList = async () => {
        const response = await getAllData('sellers/all');
        setselemail(response.data.sellers);
    }

    //reset all
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
        getProductTags();
        getProductCategories();
        getSellerList();
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
                                    <p className="capital-title">products/edit product</p>
                                    <h4 className="Capitalize-title">Add Product</h4>
                                    <p className="med-sub-title">Here You Can add products to your profile</p>
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
                                                <label className="label-name d-block">Product Name</label>
                                                <input value={form.name} required name="name" onChange={(e) => { handleChange(e) }} className="input-box-440 input-focus d-block" type='text' />
                                                <div className="d-inline-block">
                                                    <label className="label-name d-block">Category</label>
                                                    <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
                                                        <option value="">Select</option>
                                                        {procat.map((data, key) => (
                                                            <option key={key} value={data.name}>{data.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="d-inline-block">
                                                    <label className="label-name d-block">Seller Email</label>
                                                    <select value={form.seller_email} required name="seller_email" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
                                                        <option value="">Select</option>
                                                        {selemail.map((data, key) => (
                                                            <option key={key} value={data.email}>{data.email}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <label className="label-name">Description</label>
                                                <textarea value={form.description} required name="description" onChange={(e) => { handleChange(e) }} className="input-focus textarea-2 d-block"></textarea>
                                                {/*  */}
                                                {/* <!-- Button trigger modal --> */}
                                                <button className="update-btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <i className="ri-add-line"></i>Add Variant
                                                </button>

                                                {/* <!-- Modal --> */}
                                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <p className="head-title">Add Variant</p>
                                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onClick={() => resetVarientObject}>Close</button>
                                                            </div>
                                                            <div className="modal-body row">
                                                                <div className="col-5">
                                                                    <div className="var-img-drop-div">
                                                                        <p className="sub-topic-title">Variant Image</p>
                                                                        <p className="med-sub-title">Add Variant image here</p>

                                                                        {variant.imageInx == undefined || variant.imageInx == null ? (
                                                                            <Icon className="var-image" icon="mingcute:photo-album-fill" height="24" width="24" />) :
                                                                            (<img src={actualFiles[variant.imageInx]} width="50px" height="50px" className="pro-pre" />)

                                                                        }

                                                                        <button className="add-img-btn d-none">ADD IMAGE</button>
                                                                        <select value={variant.imageInx} name="imageInx" onChange={(e) => { variantChange(e) }} className="input-focus Dropdown-box-200">
                                                                            <option value="" disabled>Add Image</option>
                                                                            {actualFiles.map((file, index) => (
                                                                                <option value={index}>
                                                                                    <img src={file} width="50px" height="50px" className="pro-pre" />
                                                                                    {selectedFile[index].name}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>

                                                                    <div className="var-img-drop-div">
                                                                        <p className="sub-topic-title">Variants</p>
                                                                        <p className="med-sub-title">Here all the variants click on variant to edit its details </p>
                                                                        <div className="sel-var-abt-div">
                                                                            <img src={variant_image} className="sel_var_image" alt="selected-variant" />
                                                                            <small>Finished Type / Colour / Size </small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-7">
                                                                    <div  >
                                                                        <label className="sub-topic-title">Options</label>
                                                                        <p className="med-sub-title">Add Options details here</p>
                                                                        <label className="label-name">Colour</label>
                                                                        <select value={variant.color} name="color" onChange={(e) => { variantChange(e) }} className="input-focus Dropdown-box-400">
                                                                            <option value="">Select</option>
                                                                            <option value="Black,Gold">Black,Gold</option>
                                                                            <option value="Grey,White">Grey,White</option>
                                                                            <option value="Black,Grey">Black,Grey</option>
                                                                            <option value="Maroon,White">Maroon,White</option>
                                                                        </select>
                                                                        <label className="label-name">Size</label>
                                                                        <input value={variant.size} name="size" onChange={(e) => { variantChange(e) }} type="text" className="input-focus input-box-400" />
                                                                        <label className="label-name">Finish Type</label>
                                                                        <input value={variant.finish_type} name="finish_type" onChange={(e) => { variantChange(e) }} type="text" className="input-focus input-box-400" />

                                                                        <label className="sub-topic-title">Price Details</label>
                                                                        <label className="label-name">Price</label>
                                                                        <input value={variant.price} name="price" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />
                                                                        <label className="label-name">Compare at Price</label>
                                                                        <input value={variant.compare_at} name="compare_at" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />
                                                                        <label className="label-name">Handling Charges</label>
                                                                        <input value={variant.handling_changes} name="handling_changes" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />
                                                                        <label className="label">Sales Price</label>
                                                                        <input value={variant.sales_price} name="sales_price" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />

                                                                        <input name="required_shipping" onChange={(e) => { variantChange(e) }} className="aipro-checkbox1" type='checkbox' value="true" /><span className="chc-span">Shipping Requires</span>
                                                                        <input name="charge_taxes" onChange={(e) => { variantChange(e) }} className="aipro-checkbox2" type='checkbox' value="true" /><span className="chc-span">Charge Taxes on this product</span>

                                                                        <p className="sub-topic-title">Inventory</p>
                                                                        <label className="label-name">SKU</label>
                                                                        <input value={variant.sku} name="sku" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='text' />
                                                                        <label className="label-name">Barcode</label>
                                                                        <input value={variant.barcode} name="barcode" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='text' />
                                                                        <label className="label-name">Minimum Purchase Quantity</label>
                                                                        <input value={variant.min_purchase_qty} name="min_purchase_qty" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />
                                                                        <label className="label-name">Quantity</label>
                                                                        <input value={variant.quantity} name="quantity" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />

                                                                        <input value={variant.track_inventory} name="track_inventory" onChange={(e) => { variantChange(e) }} className="aipro-checkbox" type='checkbox' /><span className="chc-span">Track This Product Inventory</span>
                                                                        <div>
                                                                        <button type="button" onClick={(e) => { handleVariantSubmit(e) }} data-bs-dismiss="modal" aria-label="Close" className="create-btn">Submit</button>
                                                                        <button type="button" className="remove-btn" data-bs-dismiss="modal" aria-label="Close" onClick={() => resetVarientObject}>Cancel</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <table className="input-box-440">
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
                                                <label className="label-name">Return Policy</label>
                                                <textarea value={form.policy} required name="policy" onChange={(e) => { handleChange(e) }} className="input-focus d-block textarea-2"></textarea>
                                                <button type='submit' className="create-btn">Add Product</button>
                                            </div>
                                        </div>
                                        <div className="Add-Product-Images">
                                            <p className="label-name">Product Images</p>
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
                                                                <div className="col-4 fil-name">{selectedFile[index].name}</div>
                                                                <div className="col-4 ">
                                                                    <div className="m-3 text-end">
                                                                        <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>

                                                                    </div>
                                                                    {/* <Icon icon="simple-line-icons:options" className="ico-menu" /> */}

                                                                </div>
                                                            </div>

                                                        </>
                                                    ))}
                                                </div>
                                            )}
                                            <label htmlFor="select-basic" className="mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
                                                <button type="button" className="btn btn-secondary" onClick={() => document.getElementById('select-basic').click()}>
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

                                            <p className="sub-title mt-4">Product Handle and Metafields </p>
                                            <label className="label-name">Product handle</label>
                                            <input value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} className="input-focus input-box-300" type='text' />
                                            <p className="sub-title">Product Meta Fields</p>
                                            <label className="label-name">Title tag meta field</label>
                                            <input value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} className="input-focus input-box-300" type='text' />
                                            <label className="label-name">Description tag meta field</label>
                                            <input value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} className="input-focus input-box-300" type='text' />
                                            <p className="sub-title">Product Tag</p>
                                            {productTags.map((x, i) => {
                                                return <>
                                                    <label className="label-name">{x?.name}</label>
                                                    {x.id == 1 || x.id == 2 ?
                                                        (
                                                            <div className="input-focus input-box-300">
                                                                <Multiselect options={x?.list} onRemove={(list, item) => onRemove(list, item, i)} onSelect={(list, item) => onSelect(list, item, i)} displayValue="value" />
                                                            </div>
                                                        ) :
                                                        (
                                                            <input className="input-focus input-box-300" value={selectedproductTags[i]?.list[0]?.value} onChange={(e) => { handleTagChange(e, i) }} placeholder={`Enter ${x?.name}`} name={`tagname_${i}`} id={`tagname_${i}`} type="text" />
                                                        )

                                                    }
                                                </>
                                            })}
                                           
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
