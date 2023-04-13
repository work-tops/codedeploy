import React, { useState, useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { Icon } from '@iconify/react';
// import product_image from '../../Images/employee.png'
// import { Link } from "react-router-dom";
import { uploadImage } from "../../Services/ImageService";
import { createData, getAllData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import ServiceMultiselectDropdown from "../SelectTag/ServiceTag";
import ServiceLocationMultiselect from "../SelectTag/ServiceLocation";

function AddServices() {

    const [selectedFile, setSelectedFile] = useState({});
    const [actualFiles, setActualFile] = useState({});
    const [uploadFiles, setUploadFile] = useState([]);

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = () => {
            const url = reader.result;
            setActualFile(url);
        };

        reader.readAsDataURL(file);

        const fileObject = {
            "name": file.name,
            "url": `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${file.name}`,
            "type": file.type
        };
        setSelectedFile(fileObject);
    };

    const uploadFile = () => {
        console.log('uploadFiles length', uploadFiles.length);
        for (let i = 0; i < uploadFiles.length; i++) {
            uploadImage(uploadFiles[i]);
        }
    };

    const removeImage = () => {
        console.log(selectedFile); // Check the data type and structure of selectedFile
        setSelectedFile({});
        setActualFile({});
        setUploadFile([]);
      };


    const [form, setform] = useState([])
    console.log(form)

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData);

    }


    const AddService = async () => {
        const Servicedata = {
            title: form.title,
            status: form.status,
            email: form.email,
            category: form.category,
            handle: form.handle,
            meta_field: {
                metatitle: form.metatitle,
                metadescription: form.metadescription,
            },
            description: form.description,
            service_tag: form.service_tag,
            price_type: form.price_type,
            price: form.price,
            offer_price: form.offer_price,
            display_price: form.display_price,
            terms_and_condition: form.terms_and_condition,
            attachment: selectedFile,
            created_by: "1",
        }
        const response = await createData("service/new", Servicedata)
        if (response.status === 201) {
            toast.success('Successfully Service Added')
            setform("")
            cleardata()
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        e.preventDefault()
        uploadFile()
        AddService();
    }

    const cleardata = () => {
        setform({
            title: "",
            status: "",
            email: "",
            category: "",
            handle: "",
            metatitle: "",
            metadescription: "",
            description: "",
            service_tag: "",
            price_type: "",
            price: "",
            offer_price: "",
            display_price: "",
            terms_and_condition: "",
        })
    }

    const [cate, setcate] = useState([])
    const [selemail, setselemail] = useState([])


    const Jobslist = async () => {
        const response = await getAllData('master/service_category');
        setcate(response.data.master[0].data);

    }
    const selleremails = async () => {
        const response = await getAllData('sellers/all');
        setselemail(response.data.sellers);
    }
    useEffect(() => {
        Jobslist()
        selleremails()
    }, [])


    return (
        <>
            <div className="row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
                    </div>
                    <div className="page-bg">
                        <form onSubmit={(e) => { formsubmit(e) }}>
                            <div className="product-div">
                                <div className="Add-Product">
                                    <p className="ai-title">Services / Add Services</p>
                                    <p className="ai-add-title">Add Services</p>
                                    <p className="ai-title-desc">Here You Can add Services to your profile</p>

                                    <label>Service Title</label>
                                    <input value={form.title} required name="title" onChange={(e) => { handleChange(e) }} id="aipro-name" type='text' />
                                    <br></br>
                                    <span className="category">Service Category</span> <span className="service-email">Service Email</span>
                                    <br></br>
                                    <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} id="aipro-category">
                                        <option value="">Select Option</option>
                                        {cate?.map((data) => (
                                            <option value={data.value}>{data.value}</option>
                                        ))}
                                    </select>
                                    <select value={form.email} required name="email" onChange={(e) => { handleChange(e) }} id="aipro-category">
                                        <option value="">Select Freelancer</option>
                                        {selemail.map((data) => (
                                            <option value={data.email}>{data.email}</option>
                                        ))}
                                    </select>
                                    <label className="label">Description</label>
                                    <textarea value={form.description} required name="description" onChange={(e) => { handleChange(e) }} id="aipro-description" className="ai-product-description"></textarea>
                                    <br></br>
                                    <label className="label">Service Location</label>
                                    <ServiceLocationMultiselect />
                                    <label className="label">Service Range</label>
                                    <ServiceMultiselectDropdown />
                                    {/* <input value={form.service_tag} required name="service_tag" onChange={(e) => { handleChange(e) }} className="ai-product-tag" type='text'></input> */}
                                    <br></br>
                                    <input id="aipro-checkbox1" type='checkbox' /><span className="chc-span">Shipping Requires</span>
                                    <input id="aipro-checkbox2" type='checkbox' /><span className="chc-span">Charge Taxes on this product</span>
                                    <br></br>
                                    <br></br>
                                    <span className="category">Price Type</span> <span className="service-price">Price</span>
                                    <br></br>
                                    <select value={form.price_type} required name="price_type" onChange={(e) => { handleChange(e) }} id="aipro-category">
                                        <option value="">Select Option</option>
                                        <option value="Per Hour Cost">Per Hour Cost</option>
                                        <option value="Fixed Price">Fixed Price</option>
                                    </select>
                                    <input value={form.price} required name="price" onChange={(e) => { handleChange(e) }} id="aipro-email" type='number' />
                                    <br></br>
                                    <br></br>
                                    <span className="category">Office Price</span> <span className="displayprice">Display Price</span>
                                    <br></br>
                                    <input value={form.offer_price} required name="offer_price" onChange={(e) => { handleChange(e) }} id="aipro-category" type='number' />
                                    <input value={form.display_price} required name="display_price" onChange={(e) => { handleChange(e) }} id="aipro-email" type='number' />
                                    <label className="label">Terms & Conditions</label>
                                    <textarea value={form.terms_and_condition} required name="terms_and_condition" onChange={(e) => { handleChange(e) }} id="aipro-description" className="ai-product-description"></textarea>
                                    <br></br>
                                    <input type='submit' className="create-acc-btn" value='Add Services' />

                                </div>

                                <div className="Add-Product-Images">
                                    <span className="status-tit">Status :</span>
                                    <select value={form.status} required name="status" onChange={(e) => { handleChange(e) }} className="dft-act">
                                        <option value="">Select</option>
                                        <option value="Draft">Draft</option>
                                        <option value="Active">Active</option>
                                    </select>
                                    <p className="ai-pro-title">Service Images</p>
                                   
                                    {selectedFile?.name == undefined || selectedFile?.name == null? (
                                        <div className="ai-image-drag">
                                        <i className="ai-img-icon ri-image-fill"></i>
                                        <small className="chose-file">No File Chosen</small>
                                    </div>
                                    ) : (
                                        <>
                                            {/* {actualFiles.map((file) => ( */}
                                            <img src={actualFiles} alt="product-img" className="attached-img_1" />
                                            {/* ))} */}
                                        </>
                                    )}
                                    <br></br>
                                    <label htmlFor="select-basic" className="mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
                                            <button type="button" className="img-upload-btn-1" onClick={() => document.getElementById('select-basic').click()}>
                                                Upload Images
                                            </button>
                                            <input
                                                name="attachments"
                                                // multiple
                                                onChange={handleFileInput}
                                                required
                                                type="file"
                                                id="select-basic"
                                                accept="image/*"
                                                style={{ display: "none" }}
                                            />
                                        </label>
                                  
                                    {' '}
                                    <button type="button" onClick={removeImage} className="img-upload-btn-2">Remove</button>
                                    <br></br>
                                    {/* Modal-1 */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div>
                                                    <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                    <p className="proadd-img-desc">to add the service images</p>
                                                </div>
                                                <div class="modal-body">
                                                    <label htmlFor="select-basic" className='mb-75 me-75' size='sm' color='primary'>
                                                        <div className="upd-attachment">
                                                            <Icon className="upload-file-icon" data-bs-toggle="modal" data-bs-target="#exampleModal2" icon="fluent:folder-arrow-up-20-filled" width="90" height="90" />
                                                            <p className="ig-upldesc">Drag & Drop files here or choose file 50 MB max file size</p>
                                                            <input name="attachment" onChange={handleFileInput} required type="file" id="select-basic" accept='image/*' style={{ display: 'none' }} />
                                                        </div>

                                                    </label>

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal -2 */}
                                    {selectedFile == undefined || selectedFile == 0 ? (
                                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div style={{ display: "none" }} class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div>
                                                        <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                        <p className="proadd-img-desc">to add the service images</p>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="upd-attachments">
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg">
                                                <div class="modal-content">
                                                    <div>
                                                        <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                        <p className="proadd-img-desc">to add the service images</p>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="upd-attachments">
                                                            <table>
                                                                <tr>
                                                                    <td>
                                                                        {/* {actualFiles.map((file) => ( */}
                                                                            <img src={actualFiles} alt="product-img" className="attached-img1" />
                                                                        {/* ))} */}
                                                                        <i class="ri-close-line upload-img-close1"></i>
                                                                    </td>
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
                                    )}

                                    <p className="pro-sub-title">Services Handle and Metafields</p>
                                    <label>Service handle</label>
                                    <input value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} id="ai-pro-handle" type='text' />
                                    <p className="pro-sub-title">Service Meta Fields</p>
                                    <p className="ai-title-desc">Title tag meta field</p>
                                    <input value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} id="ai-pro-handle" type='text' />
                                    <p className="ai-title-desc">Descrption tag meta field</p>
                                    <input value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} id="ai-pro-handle" type='text' />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    )
}
export default AddServices