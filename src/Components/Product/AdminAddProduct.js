// import React, { useState, useEffect } from "react";
// import AiHeader from "../../Components/Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import { createData, getAllData, updateData } from "../../Services/ProxyService";
// import { uploadImage } from "../../Services/ImageService";
// import toast, { Toaster } from 'react-hot-toast';
// import { Icon } from '@iconify/react';
// import variant_image from "../../Images/product_image.png";
// import Multiselect from "multiselect-react-dropdown";
// import { useHistory, Link } from 'react-router-dom';

// function AiProductDetails() {

//     //varient state
//     const history = useHistory();
//     const [variants, setVariants] = useState([]);
//     console.log(variants)
//     const [isEdit, setEditButton] = useState(false);
//     const [editIndex, setEditVarientIndex] = useState(0);

//     const [variant, setVarientObject] = useState({
//         imageInx: null,
//         color: "",
//         size: "",
//         finish_type: "",
//         price: "",
//         compare_at: "",
//         handling_changes: "",
//         sales_price: "",
//         required_shipping: false,
//         charge_taxes: false,
//         sku: "",
//         barcode: "",
//         min_purchase_qty: "",
//         quantity: "",
//         track_inventory: false,
//         remaining_quantity: 5,
//     });

//     console.log(Boolean(variant.required_shipping))

//     //varient functionality
//     const variantChange = (e) => {
//         const _variant = { ...variant };
//         _variant[e.target.name] = e.target.value;
//         setVarientObject(_variant);
//     };

//     const handlechange1 = (e) => {
//         setVarientObject({
//             ...variant,
//             [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
//         });
//     };

//     const handleVariantSubmit = (event) => {
//         event.preventDefault();
//         var _form = {
//             color: variant.color,
//             size: variant.size,
//             finish_type: variant.finish_type,
//             shipping: {
//                 required_shipping: Boolean(variant.required_shipping),
//                 charge_tax: Boolean(variant.charge_tax),
//             },
//             pricing: {
//                 price: variant.price,
//                 compare_at: variant.compare_at,
//                 handling_changes: variant.handling_changes,
//                 sales_price: variant.sales_price,
//                 charge_taxes: Boolean(variant.charge_taxes),
//             },
//             inventory: {
//                 sku: variant.sku,
//                 barcode: variant.barcode,
//                 min_purchase_qty: variant.min_purchase_qty,
//                 quantity: variant.quantity,
//                 remaining_quantity: variant.remaining_quantity,
//                 track_inventory: Boolean(variant.track_inventory),
//             },
//             attachment: selectedFile[parseInt(variant.imageInx)]
//         }

//         var _variant = [...variants]
//         if (isEdit == true) {
//             _variant[editIndex] = _form;
//         } else {
//             _variant.push(_form);
//         }
//         setVariants(_variant);
//         console.log('variant', variant);
//         console.log('_form', _form);
//         console.log('variants list', variants);
//         resetVarientObject();
//     };

//     const resetVarientObject = () => {
//         var _variant = {
//             imageInx: null,
//             color: "",
//             size: "",
//             finish_type: "",
//             price: "",
//             compare_at: "",
//             handling_changes: "",
//             sales_price: "",
//             required_shipping: false,
//             charge_taxes: false,
//             sku: "",
//             barcode: "",
//             min_purchase_qty: "",
//             quantity: "",
//             track_inventory: false,
//             remaining_quantity: 5,
//         }

//         setVarientObject(_variant);
//         setEditButton(false);
//         setEditVarientIndex(0);
//     };

//     const editVarient = (data, index) => {
//         var _variant = {
//             imageInx: data?.imageInx,
//             color: data?.color,
//             size: data?.size,
//             finish_type: data?.finish_type,
//             price: data?.pricing?.price,
//             compare_at: data?.pricing?.compare_at,
//             handling_changes: data?.pricing?.handling_changes,
//             sales_price: data?.pricing?.sales_price,
//             required_shipping: data?.shipping?.required_shipping,
//             charge_taxes: data?.pricing?.charge_taxes,
//             sku: data?.inventory?.sku,
//             barcode: data?.inventory?.barcode,
//             min_purchase_qty: data?.inventory?.min_purchase_qty,
//             quantity: data?.inventory?.quantity,
//             track_inventory: data?.inventory?.track_inventory,
//             remaining_quantity: 5,

//         }
//         setVarientObject(_variant);
//         setEditButton(true);
//         setEditVarientIndex(index);
//     };
//     const variantremove = (index) => {
//         var _variant = [...variants]
//         _variant.splice(index, 1);
//         setVariants(_variant);
//     };

//     // file upload --state
//     const [selectedFile, setSelectedFile] = useState([]);
//     const [actualFiles, setActualFile] = useState([]);
//     const [uploadFiles, setUploadFile] = useState([]);
//     // file upload --functionality
//     const handleFileInput = (e) => {
//         // const files = e.target.files;
//         const _files = Array.from(e.target.files);
//         const _urls = [...actualFiles];
//         const fileArray = selectedFile;
//         const upload = uploadFiles;
//         _files.forEach((file) => {
//             upload.push(file);
//             const reader = new FileReader();

//             reader.onload = () => {
//                 _urls.push(reader.result);
//                 setActualFile(_urls);
//             };

//             reader.readAsDataURL(file);
//         });
//         for (let i = 0; i < _files.length; i++) {
//             fileArray.push({
//                 name: _files[i].name,
//                 url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${_files[i].name}`,
//                 type: _files[i].type
//             });
//         }
//         setSelectedFile(fileArray);
//         setUploadFile(upload);
//     };
//     const uploadFile = () => {
//         console.log('uploadFiles length', uploadFiles.length);
//         for (let i = 0; i < uploadFiles.length; i++) {
//             uploadImage(uploadFiles[i]);
//         }
//     };
//     const removeImage = async (index) => {
//         var selected = [...selectedFile];
//         var actual = [...actualFiles];
//         var uploads = [...uploadFiles];
//         selected.splice(index, 1);
//         actual.splice(index, 1);
//         uploads.splice(index, 1);
//         setActualFile(actual);
//         setSelectedFile(selected);
//         setUploadFile(uploads);
//     }
//     //product --state
//     const [form, setProductForm] = useState({
//         name: ""
//     })
//     const [productCategory, setproductCategory] = useState([])
//     const [sellerList, setsellerList] = useState([])
//     const [productTags, setproductTags] = useState([])
//     const [selectedproductTags, setSelectedproductTags] = useState([])
//     console.log(selectedproductTags)

//     //product --functionality
//     const handleChange = (e) => {
//         const myData = { ...form };
//         if (e.target.name == 'type') {
//             var _pd = productCategory.find(x => x.name == e.target.value);
//             var _type = {
//                 id: _pd ? _pd.id : 1,
//                 name: e.target.value
//             }
//             myData[e.target.name] = _type;
//         } else {
//             myData[e.target.name] = e.target.value;
//         }
//         setProductForm(myData);
//     }
//     const addProduct = async () => {
//         const productdata = {
//             seller_email: form.seller_email,
//             name: form.name,
//             // category: form.category,
//             type: form.type,
//             description: form.description,
//             tags: selectedproductTags,
//             policy: form.policy,
//             shipping: form.shipping,
//             pricing: { price: 100 },
//             inventory: { quantity: 100 },
//             handle: form.handle,
//             meta_fields: {
//                 title: form.metatitle,
//                 description: form.metadescription,
//             },
//             attachments: selectedFile,
//             // variant:form.tags,
//             variant: variants,
//             custom_fields: {},
//             created_by: "1",
//         }
//         console.log(productdata);
//         var response = null;
//         if (editProduct != '') {
//             response = await updateData("admin/product/" + editProduct, productdata);
//         } else {
//             response = await createData("admin/product/new", productdata);
//         }
//         if (response.status === 201) {
//             toast.success('Successfully Product Submitted');
//             clearData();
//             history.push('/allproduct');
//         } else {
//             toast.error('Something went wrong')
//         }
//         console.log(response)
//     }

//     const formsubmit = (e) => {
//         if (variants.length === 0) {
//             toast.error("You have to add at least one variant")
//             e.preventDefault()

//         } else {
//             e.preventDefault()
//             addProduct()
//             uploadFile()
//         }
//     }

//     const onSelect = (selectedList, selectedItem, index) => {
//         var _tags = selectedproductTags;
//         _tags[index].list = selectedList;
//         setSelectedproductTags(_tags);
//         console.log(_tags)
//     }
//     const onRemove = (selectedList, removedItem, index) => {
//         var _tags = selectedproductTags;
//         _tags[index].list = selectedList;
//         setSelectedproductTags(_tags);
//         console.log(_tags)
//     }

//     const handleTagChange = (event, index) => {
//         var _list = [
//             {
//                 id: 1,
//                 value: event.target.value
//             }
//         ]
//         var _tags = selectedproductTags;
//         _tags[index].list = _list;
//         setSelectedproductTags(_tags);
//     }
//     const getProductTags = async () => {
//         const response = await getAllData('master/product_tags');
//         setproductTags(response.data.master[0].data);
//         var _selectList = [];
//         response.data.master[0].data.forEach(x => {
//             _selectList.push({ id: x.id, name: x.name, list: [] })
//         })
//         setSelectedproductTags(_selectList);
//     }

//     const getProductCategories = async () => {
//         const response = await getAllData('master/product_category');
//         setproductCategory(response.data.master[0].data);
//     }

//     const getSellerList = async () => {
//         const response = await getAllData('admin/users');
//         setsellerList(response.data.users);
//     }

//     // Product by id
//     const getProductById = async (_id) => {
//         const response = await getAllData('product/' + _id);
//         const _product = response.data.product;
//         console.log(_product)
//         setProductForm({
//             name: _product.name,
//             category: _product.category,
//             seller_email: _product.seller_email,
//             description: _product.description,
//             policy: _product.policy,
//             handle: _product.handle,
//             variant: _product.variant,
//             metatitle: _product.meta_fields.title,
//             metadescription: _product.meta_fields.description,
//             tags: _product.tags,
//             attachments: _product.attachments,
//             type: _product.type,

//         });
//         // setproductCategory([_product.type])
//         setVariants(_product.variant);
//         setSelectedproductTags(_product.tags);
//         setproductTags(_product.tags);
//         console.log(_product.tags)
//         setSelectedFile(_product.attachments);
//         var _actFiles = [];
//         _product.attachments.forEach((x) => {
//             _actFiles.push(x.url);
//         })
//         setActualFile(_actFiles);
//         // setVariants([_product.variant]);
//     }

//     //reset all
//     const clearData = () => {
//         setProductForm({
//             name: "",
//             category: "",
//             seller_email: "",
//             description: "",
//             policy: "",
//             handle: "",
//             metatitle: "",
//             metadescription: ""
//         });
//         setActualFile([]);
//         setUploadFile([]);
//         setSelectedFile([]);
//         setVariants([]);
//         getProductTags();
//         resetVarientObject();

//     }
//     const [editProduct, setEditProducts] = useState('');
//     useEffect(() => {
//         var query = window.location.search.substring(1);
//         console.log(query);
//         getProductTags();
//         getProductCategories();
//         getSellerList();
//         if (query) {
//             getProductById(query);
//             setEditProducts(query);
//         }
//     }, [])

//     return (
//         <>
//             <div className="">
//                 <div className="row">
//                     <div className="col-2">
//                         <AiMenu />
//                     </div>
//                     <div className="col-10">
//                         <div className="ai-product-div">
//                             <AiHeader />
//                             <div className="page-bg">
//                                 <div className="">
//                                     <p className="capital-title">products/edit product</p>
//                                     <h4 className="Capitalize-title">Add Product</h4>
//                                     <p className="med-sub-title">Here You Can add products to your profile</p>
//                                 </div>
//                                 <form onSubmit={(e) => { formsubmit(e) }}>
//                                     <div className="product-div">
//                                         <div className="Add-Product">
//                                             {/* file upload  testing*/}
//                                             <div className="d-none">
//                                                 <input type="file" onChange={handleFileInput} />
//                                                 <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
//                                             </div>

//                                             <div >
//                                                 <label>Product Name</label>
//                                                 <input value={form.name} required name="name"  id="aipro-name" type='text' />
//                                                 <br></br>
//                                                 <span className="category">Category</span> <span className="seller-email">Seller Email</span>
//                                                 <br></br>
//                                                 <select
//                                                     value={form.type?.name}
//                                                     required name="type"  id="aipro-category" className="select-category">
//                                                     <option value="">Select</option>
//                                                     {productCategory.map((data, key) => (
//                                                         <option key={key} value={data.name}>
//                                                             {data.name}
//                                                         </option>
//                                                     ))}
//                                                 </select>

//                                                 <select value={form.seller_email} required name="seller_email"  id="aipro-category" className="select-category">
//                                                     <option value="">Select</option>
//                                                     {sellerList.map((data, key) => (
//                                                         <option key={key} value={data.email}>{data.email}</option>
//                                                     ))}
//                                                 </select>
//                                                 {/* <input value={form.category} required name="category"  id="aipro-category" type='text' /> */}
//                                                 {/* <input value={form.seller_email} required name="seller_email"  id="aipro-email" type='email' /> */}
//                                                 <br />
//                                                 <label>Description</label>
//                                                 <br />
//                                                 <textarea value={form.description} required name="description"  id="aipro-description" className="ai-product-description"></textarea>
//                                                 <br />
//                                                 {/* <label>Product Tag</label>
//                                                 <br />
//                                                 <input value={form.tags} required name="tags"  className="ai-product-tag" type='text'></input> */}
//                                                 <br></br>
//                                                 {/*  */}
//                                                 {/* <!-- Button trigger modal --> */}
//                                                 <button className="update-btn" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                                                     <i className="ri-add-line"></i>Add Variant
//                                                 </button>

//                                                 {/* <!-- Modal --> */}
//                                                 <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                                                     <div className="modal-dialog modal-lg">
//                                                         <div className="modal-content">
//                                                             <div className="modal-header">
//                                                                 <p>Add Variant</p>
//                                                                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onClick={() => resetVarientObject()}>Close</button>
//                                                             </div>
//                                                             <div className="modal-body row">
//                                                                 <div className="col-5">
//                                                                     <div className="var-img-drop-div">
//                                                                         <p className="sub-topic-title">Variant Image</p>
//                                                                         <p className="med-sub-title">Add Variant image here</p>

//                                                                         {variant.imageInx == undefined || variant.imageInx == null ? (
//                                                                             <Icon className="var-image" icon="mingcute:photo-album-fill" height="24" width="24" />) :
//                                                                             (<img src={actualFiles[variant.imageInx]} width="50px" height="50px" className="pro-pre" />)
//                                                                         }

//                                                                         <button className="add-img-btn d-none">ADD IMAGE</button>
//                                                                         <select value={variant?.imageInx} name="imageInx" onChange={(e) => { variantChange(e) }} className="select-category">
//                                                                             <option value="" disabled>Add Image</option>
//                                                                             {actualFiles.map((file, index) => (
//                                                                                 <option value={index}>
//                                                                                     {/* <img src={file} width="50px" height="50px" className="pro-pre" /> */}
//                                                                                     {selectedFile[index]?.name}
//                                                                                 </option>
//                                                                             ))}
//                                                                         </select>
//                                                                     </div>

//                                                                     <div className="var-img-drop-div">
//                                                                         <p className="sub-topic-title">Variants</p>
//                                                                         <p className="med-sub-title">Here all the variants click on variant to edit its details </p>
//                                                                         <div className="sel-var-abt-div">
//                                                                             {variant.imageInx == undefined || variant.imageInx == null ? (
//                                                                                 <Icon className="sel_var_image" icon="mingcute:photo-album-fill" height="24" width="24" />) :
//                                                                                 (<img src={actualFiles[variant.imageInx]} className="sel_var_image" alt="selected-variant" />
//                                                                                 )
//                                                                             }
//                                                                             <small>Finished Type / Colour / Size </small>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="col-7">
//                                                                     <div  >
//                                                                         <label className="sub-topic-title">Options</label>
//                                                                         <p className="med-sub-title">Add Options details here</p>
//                                                                         <label className="label-name">Colour</label>
//                                                                         <select value={variant.color} name="color" onChange={(e) => { variantChange(e) }} className="input-focus Dropdown-box-400">
//                                                                             <option value="">Select</option>
//                                                                             <option value="Black,Gold">Black,Gold</option>
//                                                                             <option value="Grey,White">Grey,White</option>
//                                                                             <option value="Black,Grey">Black,Grey</option>
//                                                                             <option value="Maroon,White">Maroon,White</option>
//                                                                         </select>
//                                                                         <label className="label-name">Size</label>
//                                                                         <input value={variant.size} name="size" onChange={(e) => { variantChange(e) }} type="text" className="input-focus input-box-400" />
//                                                                         <label className="label-name">Finish Type</label>
//                                                                         <input value={variant.finish_type} name="finish_type" onChange={(e) => { variantChange(e) }} type="text" className="input-focus input-box-400" />

//                                                                         <label className="sub-topic-title">Price Details</label>
//                                                                         <label className="label-name">Price</label>
//                                                                         <input value={variant.price} name="price" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />
//                                                                         <label className="label-name">Compare at Price</label>
//                                                                         <input value={variant.compare_at} name="compare_at" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />
//                                                                         <label className="label-name">Handling Charges</label>
//                                                                         <input value={variant.handling_changes} name="handling_changes" onChange={(e) => { variantChange(e) }} className="input-focus input-box-400" type='number' />
//                                                                         <label className="label">Sales Price</label>
//                                                                         <input value={variant.sales_price} name="sales_price" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
//                                                                         <br></br>
//                                                                         <input checked={variant.required_shipping} name="required_shipping" onChange={handlechange1} id="aipro-checkbox1" type='checkbox' />
//                                                                         <span className="chc-span">Shipping Requires</span>
//                                                                         <input checked={variant.charge_taxes} name="charge_taxes" onChange={handlechange1} id="aipro-checkbox2" type='checkbox' />
//                                                                         <span className="chc-span">Charge Taxes on this product</span>
//                                                                         {/* <input defaultValue={variant.required_shipping} name="required_shipping" onChange={(e) => { variantChange(e) }} id="aipro-checkbox1" type='checkbox' value="true" /><span className="chc-span">Shipping Requires</span>
//                                                                         <input defaultValue={variant.charge_taxes} name="charge_taxes" onChange={(e) => { variantChange(e) }} id="aipro-checkbox2" type='checkbox' value="true" /><span className="chc-span">Charge Taxes on this product</span> */}
//                                                                         <br></br>
//                                                                         <br></br>
//                                                                         <p className="var-tit">Inventory</p>
//                                                                         <label>SKU</label>
//                                                                         <input value={variant.sku} name="sku" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='text' />
//                                                                         <label>Barcode</label>
//                                                                         <input value={variant.barcode} name="barcode" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='text' />
//                                                                         <label>Minimum Purchase Quantity</label>
//                                                                         <input value={variant.min_purchase_qty} name="min_purchase_qty" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
//                                                                         <label>Quantity</label>
//                                                                         <input value={variant.quantity} name="quantity" onChange={(e) => { variantChange(e) }} id="opt-ip-box" type='number' />
//                                                                         <br></br>
//                                                                         <input checked={variant.track_inventory} name="track_inventory" onChange={handlechange1} id="aipro-checkbox" type='checkbox' /><span className="chc-span">Track This Product Inventory</span>
//                                                                         <br></br>
//                                                                         <button type="button" onClick={(e) => { handleVariantSubmit(e) }} data-bs-dismiss="modal" aria-label="Close" className="create-acc-btn">Submit</button>
//                                                                         <button type="button" className="btn btn-danger ms-3" data-bs-dismiss="modal" aria-label="Close" onClick={() => resetVarientObject()}>Cancel</button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div>
//                                                     <table className="input-box-440">
//                                                         <tbody>
//                                                             {variants.map((data, index) => (
//                                                                 <tr>
//                                                                     <td><img src={variant_image} className="sel_var_image" alt="selected-variant" /></td>
//                                                                     <td>
//                                                                         <p className="cur-var-types">{data?.color} / {data?.size}  / {data?.finish_type} / {data?.quantity}</p>
//                                                                         <p className="sku-price">Sku:{data?.inventory?.sku} / Price: £ {data?.pricing?.price}</p>
//                                                                     </td>
//                                                                     <td>
//                                                                         <button className="edt-rem1" type="button" onClick={() => editVarient(data, index)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
//                                                                         <button onClick={() => { variantremove(index) }} type="button" className="edt-rem2">Remove</button>
//                                                                     </td>
//                                                                 </tr>
//                                                             ))}
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                                 {/*  */}
//                                                 <label>Return Policy</label>
//                                                 <br />
//                                                 <textarea value={form.policy} required name="policy"  id="aipro-returnpolicy"></textarea>
//                                                 <button type='submit' className="create-acc-btn">Save Product</button>
//                                                 {/* <button className="btn btn-danger ms-3" onClick={clearData}>Clear</button> */}
//                                                 <Link to="/allproduct"><button className="btn btn-danger ms-3">Cancel</button></Link> 
//                                             </div>
//                                         </div>
//                                         <div className="Add-Product-Images">
//                                             <p className="label-name">Product Images</p>
//                                             {selectedFile == undefined || selectedFile == 0 ? (
//                                                 <div className="ai-image-drag">
//                                                     <i className="ai-img-icon ri-image-fill"></i>
//                                                     <small className="chose-file">No File Chosen</small>
//                                                 </div>
//                                             ) : (
//                                                 <div>
//                                                     {actualFiles.map((file, index) => (
//                                                         <>
//                                                             <div className="row bg-pre">
//                                                                 <div className="col-4">
//                                                                     <img src={file} width="50px" height="50px" className="pro-pre" />
//                                                                 </div>
//                                                                 <div className="col-4 fil-name">{selectedFile[index]?.name}</div>
//                                                                 <div className="col-4 ">
//                                                                     <div className="m-3 text-end">
//                                                                         <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>

//                                                                     </div>
//                                                                     {/* <Icon icon="simple-line-icons:options" className="ico-menu" /> */}

//                                                                 </div>
//                                                             </div>

//                                                         </>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                             <label htmlFor="select-basic" className="mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
//                                                 <button type="button" className="btn btn-secondary" onClick={() => document.getElementById('select-basic').click()}>
//                                                     Upload Images
//                                                 </button>
//                                                 <input
//                                                     name="attachments"
//                                                     multiple
//                                                     onChange={handleFileInput}
//                                                     type="file"
//                                                     id="select-basic"
//                                                     accept="image/*"
//                                                     style={{ display: "none" }}
//                                                 />
//                                             </label>

//                                             <p className="sub-title mt-4">Product Handle and Metafields </p>
//                                             <label className="label-name">Product handle</label>
//                                             <input  required name="handle"  className="input-focus input-box-300" type='text' />
//                                             <p className="sub-title">Product Meta Fields</p>
//                                             <label className="label-name">Title tag meta field</label>
//                                             <input  required name="metatitle"  className="input-focus input-box-300" type='text' />
//                                             <label className="label-name">Description tag meta field</label>
//                                             <input  required name="metadescription"  className="input-focus input-box-300" type='text' />
//                                             <p className="sub-title">Product Tag</p>
//                                             {productTags.map((x, i) => {
//                                                 const defaultSelectedValues = selectedproductTags[i]?.list || []; 
//                                                 console.log(defaultSelectedValues)
//                                                 return <>
//                                                     <label className="label">{x?.name}</label>
//                                                   {   console.log(x)}
//                                                     {x.id == 1 || x.id == 2 ?
//                                                             (
//                                                                 <div className="multi-sel">
//                                                                     <Multiselect selectedValues={defaultSelectedValues} options={x?.list} onRemove={(list, item) => onRemove(list, item, i)} onSelect={(list, item) => onSelect(list, item, i)} displayValue="value" />
//                                                                 </div>
//                                                             ) :
//                                                         (
//                                                             <input  className="ai-input" value={selectedproductTags[i]?.list[0]?.value} onChange={(e) => { handleTagChange(e, i) }} placeholder={`Enter ${x?.name}`} name={`tagname_${i}`} id={`tagname_${i}`} type="text" />
//                                                         )

//                                                     }
//                                                 </>
//                                             })}

//                                         </div>
//                                     </div >
//                                 </form>
//                             </div >
//                         </div>
//                     </div>
//                     <Toaster />
//                 </div>
//             </div>
//         </>
//     )
// }
// export default AiProductDetails

import { useState, React, useEffect, useCallback, useRef } from 'react';
import { Col, Row, Card, Button, Modal, Breadcrumb } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { InputGroup } from 'react-bootstrap';
import { Dropdown, Image } from 'react-bootstrap';
// import SellerPortalHeader from '../Header/SellerPortalHeader'
import { Link, useHistory } from 'react-router-dom';
import { uploadImage } from "../../Services/ImageService";
import { createData, getAllData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import cloudUpload from '../../User-Portal/TemplateAssets/assets/cloud-upload.svg';
import { getSize } from '../../User-Portal/TemplateAssets/helpers/utils';
import CardDropdown from '../../User-Portal/TemplateAssets/common/CardDropdown';
import { Editor } from "@tinymce/tinymce-react";
import AdminHeader from '../Menubar/AiMenu';

const AddProduct = () => {

    const editorRef = useRef(null);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // Cancel Modal
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => {
        setShowModal1(false);
    };
    const [showModal3, setShowModal3] = useState(false);

    const handleClose3 = () => {
        setShowModal3(false);
    };

    // Upload Img
    const [covers, setCovers] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        // Map the acceptedFiles to add the preview property
        const updatedCovers = acceptedFiles.map((file) => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        setCovers((prevCovers) => [...prevCovers, ...updatedCovers]);
    }, []);

    const removeCover = (cover) => {
        setCovers((prevCovers) => prevCovers.filter((c) => c !== cover));
    };


    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true });
    // Upload Img


    return (
        <>

            <Row>
                <Col lg={12} className='mb-5'>
                    <AdminHeader />
                </Col>
                <Col lg={12} className='container mt-4'>
                    <Card>
                        <Card.Header className="bg-light">
                            <h5>
                                Add Product
                            </h5>
                            <Breadcrumb className="fs--1 mt-2">
                                <Breadcrumb.Item>
                                    All Products
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Add Products
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <p className="text-dark text-capitalize fs--1 mt-2">Here Add Products to your store</p>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col md={7}>
                                        <Card className='mb-3 '>
                                            <Card.Header className='bg-light'>
                                                <h5 className='text-uppercase'>Organization</h5>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">Trader Email<span className="ms-1 text-danger">*</span></Form.Label>
                                                    <Form.Control required name="seller_email" type="email" className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">Category<span className="ms-1 text-danger">*</span></Form.Label>
                                                    <Form.Select required name="type" >
                                                        <option value="">Select</option>

                                                    </Form.Select>
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                        <Card className=''>
                                            <Card.Header className='bg-light'>
                                                <h5 className='text-uppercase'>Products Information</h5>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-700 text-uppercase">Name<span className="ms-1 text-danger">*</span></Form.Label>
                                                    <Form.Control required name="name" type="text" className='w-100' />
                                                </Form.Group>
                                                <Row className="mb-3 g-3">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-700 text-uppercase">Description </Form.Label>
                                                        {/* <Form.Control value={form.description} required name="description"  as="textarea" placeholder='Tag Your Description....' rows={8} /> */}
                                                        <Editor
                                                            onInit={(evt, editor) => editorRef.current = editor}
                                                            initialValue=""
                                                            init={{

                                                                height: 200,
                                                                menubar: false,
                                                                // plugins: [
                                                                //     'advlist autolink lists link image charmap print preview anchor',
                                                                //     'searchreplace visualblocks code fullscreen',
                                                                //     'insertdatetime media table paste code help wordcount'
                                                                // ],
                                                                toolbar: 'undo redo | formatselect | ' +
                                                                    'bold italic  | alignleft aligncenter ' +
                                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                    'removeformat ',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                            }}
                                                        />
                                                    </Form.Group>
                                                </Row>
                                                <Row className="mb-3 g-3">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label className="text-700 text-uppercase">Return Policy </Form.Label>
                                                        {/* <Form.Control value={form.policy} required name="policy"  as="textarea" placeholder='Tag Your Policy....' rows={8} /> */}
                                                        <Editor
                                                            onInit={(evt, editor) => editorRef.current = editor}
                                                            initialValue=""
                                                            init={{

                                                                height: 200,
                                                                menubar: false,
                                                                // plugins: [
                                                                //     'advlist autolink lists link image charmap print preview anchor',
                                                                //     'searchreplace visualblocks code fullscreen',
                                                                //     'insertdatetime media table paste code help wordcount'
                                                                // ],
                                                                toolbar: 'undo redo | formatselect | ' +
                                                                    'bold italic  | alignleft aligncenter ' +
                                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                    'removeformat ',
                                                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                            }}
                                                        />
                                                    </Form.Group>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                        <Button onClick={handleShow} className='m-3 bg-transparent text-primary'>+ Add Variant</Button>
                                        <div>
                                            <Card className=''>
                                                <Card.Header className='d-flex justify-content-end bg-light'>
                                                    <button style={{ fontSize: '14px' }} className='btn me-1 border-secondary bg-transparent' type="button">Edit</button>
                                                    <button onClick={() => setShowModal3(true)} type="button" style={{ fontSize: '14px' }} className='btn me-1 border-secondary bg-transparent'>Remove</button>
                                                </Card.Header>
                                                <Card.Body>
                                                    <p className='fs--1'><span className='fw-semibold'>Colour : </span>Black</p>
                                                    <p className='fs--1'><span className='fw-semibold'>Size : </span>20 mm</p>
                                                    <p className='fs--1'><span className='fw-semibold'>Finish Type : </span>Polished Per Sq.ft</p>
                                                    <p className='fs--1'><span className='fw-semibold'>Quantity : </span>2</p>
                                                    <p className='fs--1'><span className='fw-semibold'>Inventory : </span>-007</p>
                                                    <p className='fs--1'><span className='fw-semibold'>Price : </span>£ 200</p>
                                                    <p className='fs--1'><span className='fw-semibold'>SKU : </span>HOBCRT - 700480</p>
                                                </Card.Body>
                                            </Card>
                                        </div>

                                        <div>

                                            {/* <Flex justifyContent={between}> */}
                                            <div className='d-flex justify-content-between'>
                                                <Modal
                                                    show={show}
                                                    onHide={() => setShow(false)}
                                                    dialogClassName="modal-xl modal-90w"
                                                    backdrop="static"
                                                    aria-labelledby="example-custom-modal-styling-title"
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title id="example-custom-modal-styling-title">
                                                            Variant Details</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <Row>
                                                            <Col md={6}>
                                                                <Card className='mt-3  me-3'>
                                                                    <Card.Header className='bg-light'>
                                                                        <h5 className=''>OPTIONS</h5>
                                                                    </Card.Header>
                                                                    <Card.Body>
                                                                        <Row className="mb-3 g-3">
                                                                            <Form.Label className="text-700 text-uppercase">Colour<span className="ms-1 text-danger">*</span></Form.Label>
                                                                            <Col md={6}>
                                                                                <Form.Group className='mb-3'>
                                                                                    <Form.Select className=''>
                                                                                        <option>Size</option>
                                                                                        <option>Colour</option>
                                                                                        <option>Material</option>
                                                                                        <option>Style</option>
                                                                                    </Form.Select>
                                                                                </Form.Group>
                                                                            </Col>
                                                                            <Col md={6}>
                                                                                <Form.Group className='mb-3'>
                                                                                    <Form.Control required name="color" type="text" placeholder='Enter tags' className='w-100' />
                                                                                </Form.Group>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className="mb-3 g-3">
                                                                            <Form.Label className="text-700 text-uppercase">Size<span className="ms-1 text-danger">*</span></Form.Label>
                                                                            <Col md={6}>
                                                                                <Form.Group className='mb-3'>
                                                                                    <Form.Select className=''>
                                                                                        <option>Size</option>
                                                                                        <option>Colour</option>
                                                                                        <option>Material</option>
                                                                                        <option>Style</option>
                                                                                    </Form.Select>
                                                                                </Form.Group>
                                                                            </Col>
                                                                            <Col md={6}>
                                                                                <Form.Group className='mb-3'>
                                                                                    <Form.Control required name="color" type="text" placeholder='Enter tags' className='w-100' />
                                                                                </Form.Group>
                                                                            </Col>
                                                                        </Row>
                                                                        <Row className="mb-3 g-3">
                                                                            <Form.Label className="text-700 text-uppercase">Finish Type<span className="ms-1 text-danger">*</span></Form.Label>
                                                                            <Col md={6}>
                                                                                <Form.Group className='mb-3'>
                                                                                    <Form.Select className=''>
                                                                                        <option>Size</option>
                                                                                        <option>Colour</option>
                                                                                        <option>Material</option>
                                                                                        <option>Style</option>
                                                                                    </Form.Select>
                                                                                </Form.Group>
                                                                            </Col>
                                                                            <Col md={6}>
                                                                                <Form.Group className='mb-3'>
                                                                                    <Form.Control required name="color" type="text" placeholder='Enter tags' className='w-100' />
                                                                                </Form.Group>
                                                                            </Col>
                                                                        </Row>
                                                                        {/* <Button className='bg-transparent text-primary'>+ Add Option</Button> */}
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                            <Col md={5}>
                                                                <Card className='mt-3 me-3'>
                                                                    <Card.Body>
                                                                        <h5 className='text-uppercase'>Pricing</h5>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">Pricing<span className='text-danger'>*</span></Form.Label>
                                                                            <InputGroup className="mb-3">
                                                                                <Form.Control required name="price" placeholder='0.00' type="number" aria-label="Text input with dropdown button" />
                                                                                <Button>
                                                                                    £
                                                                                </Button>
                                                                            </InputGroup>
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">Compare Price<span className='text-danger'>*</span></Form.Label>
                                                                            <InputGroup className="mb-3">
                                                                                <Form.Control required name="compare_at" type="number" />
                                                                                <Button>
                                                                                    £
                                                                                </Button>
                                                                            </InputGroup>
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">Handling Charges<span className='text-danger'>*</span></Form.Label>
                                                                            <InputGroup className="mb-3">
                                                                                <Form.Control required name="handling_changes" type="number" />
                                                                                <Button>
                                                                                    £
                                                                                </Button>
                                                                            </InputGroup>
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">Sales Price<span className='text-danger'>*</span></Form.Label>
                                                                            <InputGroup className="mb-3">
                                                                                <Form.Control disabled required name="sales_price" type="number" />
                                                                                <Button>
                                                                                    £
                                                                                </Button>
                                                                            </InputGroup>
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Row>
                                                                                <Col lg={6}>
                                                                                    {/* <Form.Check/>
                                                                                    <Form.Label className="text-700 text-uppercase">
                                                                                       
                                                                                    </Form.Label> */}
                                                                                    <Form.Check
                                                                                        type="checkbox"
                                                                                        // checked={variant.required_shipping} name="required_shipping" onChange={handlechange1}
                                                                                        id="inventoryCheckbox"
                                                                                        label=" Shipping Requires"
                                                                                    />
                                                                                </Col>
                                                                                <Col lg={6}>
                                                                                    {/* <Form.Check  />
                                                                                    <Form.Label className="text-700 text-uppercase">
                                                                                        
                                                                                    </Form.Label> */}
                                                                                    <Form.Check
                                                                                        type="checkbox"
                                                                                        // checked={variant.charge_taxes} name="charge_taxes" onChange={handlechange1}
                                                                                        id="inventoryCheckbox"
                                                                                        label=" Charge Taxes on this products"
                                                                                    />
                                                                                </Col>
                                                                            </Row>
                                                                        </Form.Group>
                                                                    </Card.Body>
                                                                </Card>
                                                                <Card className='mt-3 me-3'>
                                                                    <Card.Body>
                                                                        <h5 className='text-uppercase'>Inventory</h5>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">SKU<span className='text-danger'>*</span></Form.Label>
                                                                            <Form.Control required name="sku" className='w-100' type="text" placeholder='eg.324812302' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">Barcode<span className='text-danger'>*</span></Form.Label>
                                                                            <Form.Control
                                                                                required name="barcode"
                                                                                className='w-100'
                                                                                type="text"
                                                                            />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">Minimum Purchase Quantity<span className='text-danger'>*</span></Form.Label>
                                                                            <Form.Control required name="min_purchase_qty" type="number" className='w-100' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            <Form.Label className="text-700 text-uppercase">Quantity<span className='text-danger'>*</span></Form.Label>
                                                                            <Form.Control required name="quantity" type="number" className='w-100' />
                                                                        </Form.Group>
                                                                        <Form.Group className='mb-3'>
                                                                            {/* <Form.Check  /> */}
                                                                            {/* <Form.Label className="text-700 text-uppercase">
                                                                                Track this Products Inventory
                                                                            </Form.Label> */}
                                                                            <Form.Check
                                                                                type="checkbox"
                                                                                // checked={variant.track_inventory} name="track_inventory" onChange={handlechange1}
                                                                                id="inventoryCheckbox"
                                                                                label="Track this Product's Inventory"
                                                                            />
                                                                        </Form.Group>

                                                                        <Button type='submit' className='btn bg-success border border-0 m-3'>Submit</Button>

                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                    </Modal.Body>
                                                </Modal>

                                            </div>
                                            {/* </Flex> */}
                                        </div>
                                    </Col>
                                    <Col md={5}>

                                        <Card className=''>
                                            <Card.Header className='bg-light'>
                                                <h5 className='text-uppercase'>Media</h5>
                                            </Card.Header>
                                            <Card.Body>

                                                <div className='mt-3 border-secondary w-100'>
                                                    {/* <small className='d-block text-align-center'>
                                                Drag and Drop
                                                Your Files Here
                                            </small>
                                            <label htmlFor="select-basic" >
                                                <Button className='mt-3 btn text-light btn-outline-secondary' onClick={() => document.getElementById('select-basic').click()}>Browse Files</Button>
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
                                            {actualFiles.map((file, index) => (
                                                <>
                                                    <div className="row bg-pre mt-3">
                                                        <div className="col-4">
                                                            <img src={file} width="50px" height="50px" className="pro-pre" />
                                                        </div>
                                                        <div className="col-4 fil-name">{selectedFile[index]?.name}</div>
                                                        <div className="col-4 ">
                                                            <div className="m-3 text-end">
                                                                <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </>
                                            ))} */}
                                                    {/* Upload Samples */}
                                                    <Col lg={12} className='me-2 mb-2 w-100'>
                                                        <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                                            <input {...getInputProps()} multiple />
                                                            <div className="fs--1">
                                                                <img src={cloudUpload} alt="" width={20} className="me-2" />
                                                                <span className="d-none d-lg-inline">
                                                                    Drag your images here
                                                                    <br />
                                                                    or,{' '}
                                                                </span>
                                                                <Button variant="link" size="sm" className="p-0 fs--1">
                                                                    Browse
                                                                </Button>
                                                            </div>
                                                        </div>

                                                        {covers.length > 0 &&
                                                            <div className="mt-3">
                                                                {covers.map((cover) => (
                                                                    <div key={cover.path} className='d-flex btn-reveal-trigger align-items-center'>
                                                                        <Image
                                                                            rounded
                                                                            width={40}
                                                                            height={40}
                                                                            src={cover.preview}
                                                                            alt={cover.path}
                                                                        />
                                                                        <div className='mx-2 flex-1 text-truncate flex-column d-flex justify-content-between'>
                                                                            <h6 className="text-truncate">{cover.path}</h6>
                                                                            <div className="d-flex align-items-center position-relative">
                                                                                <p className="mb-0 fs--1 text-400 line-height-1">
                                                                                    <strong>{getSize(cover.size)}</strong>
                                                                                </p>
                                                                            </div>
                                                                            <h6 className="mt-2 text-primary">01/05/2023</h6>
                                                                        </div>
                                                                        <CardDropdown>
                                                                            <div className="py-2">
                                                                                <Dropdown.Item
                                                                                    className="text-danger"
                                                                                    onClick={() => removeCover(cover)}
                                                                                >
                                                                                    Remove
                                                                                </Dropdown.Item>
                                                                            </div>
                                                                        </CardDropdown>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        }

                                                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                                                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                                                    </Col>
                                                    {/* Upload Samples */}
                                                </div>
                                            </Card.Body>
                                        </Card>

                                        <Card className='mt-3'>
                                            <Card.Header className='bg-light'>
                                                <h5 className='text-uppercase'>Products Handle and Metafields</h5>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form.Group className='mb-4'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Products handle<span className='text-danger'>*</span>
                                                    </Form.Label>
                                                    <Form.Control required name="handle" type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                        <Card className='mt-3'>
                                            <Card.Header className='bg-light'>
                                                <h5 className='text-uppercase'>Products Metafields</h5>
                                            </Card.Header>
                                            <Card.Body>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Title Tag Meta Field<span className='text-danger'>*</span>
                                                    </Form.Label>
                                                    <Form.Control required name="metatitle" type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Description Tag Meta Field<span className='text-danger'>*</span>
                                                    </Form.Label>
                                                    <Form.Control required name="metadescription" as={"textarea"} rows={1} maxLength={300} className='resize-none w-100' />
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                        <Card className='mt-3'>
                                            <Card.Header className='bg-light'>
                                                <h5 className='text-uppercase'>Products Tag</h5>
                                            </Card.Header>
                                            <Card.Body>
                                                {/* {productTags.map((x, i) => {
                                                    const defaultSelectedValues = selectedproductTags[i]?.list || [];
                                                    console.log(defaultSelectedValues)
                                                    return <Form.Group className='mb-3'>
                                                        <Form.Label className="text-700 text-uppercase">{x?.name}<span className='text-danger'>*</span></Form.Label>
                                                        {<Form.Control className="w-100" value={selectedproductTags[i]?.list[0]?.value} onChange={(e) => { handleTagChange(e, i) }} placeholder={`Enter ${x?.name}`} name={`tagname_${i}`} id={`tagname_${i}`} type="text" />}
                                                    </Form.Group>
                                                })} */}

                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Category
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Colour
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Finish Type
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Length
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Width
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Thickness
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Pattern
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Stock Location
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Origin
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-700 text-uppercase">
                                                        Offers
                                                    </Form.Label>
                                                    <Form.Control type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Row>
                                        <Col className='mt-3'>
                                            <Link to='/addproductcard'>
                                                <Button type='submit' className='mb-3 btn text-light bg-success border-0'>Add Products</Button>
                                            </Link>

                                            <Button onClick={() => setShowModal1(true)} className='mb-3 btn text-light border-0 ms-3 bg-danger '>Cancel</Button>

                                            {/* Modal Cancel Pop-up */}
                                            <Modal show={showModal1} onHide={handleClose1}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Warning</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p className='text-capitalize'>
                                                        Are you sure you want to cancel without adding product ?
                                                    </p>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button className='me-2' variant="secondary" onClick={handleClose1}>
                                                        No
                                                    </Button>
                                                    <Link to="/allproduct">
                                                        <Button variant="danger" onClick={handleClose1}>
                                                            Yes
                                                        </Button>
                                                    </Link>
                                                </Modal.Footer>
                                            </Modal>
                                            {/*  */}
                                            {/* Modal Warning Pop-up to Remove Variant Details */}
                                            <Modal show={showModal3} onHide={handleClose3}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Warning</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <p className='text-capitalize'>
                                                        Are you sure you want to remove the variant details ?
                                                    </p>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button className='me-2' variant="secondary" onClick={handleClose3}>
                                                        No
                                                    </Button>

                                                    <Button variant="danger" onClick={handleClose3}>
                                                        Yes
                                                    </Button>

                                                </Modal.Footer>
                                            </Modal>
                                            {/*  */}
                                        </Col>
                                    </Row>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                    {/* </Card.Body >
                    </Card> */}
                </Col >
                <Toaster />

            </Row >

        </>
    )
}
export default AddProduct;