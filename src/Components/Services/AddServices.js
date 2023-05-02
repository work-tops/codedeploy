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
import Multiselect from "multiselect-react-dropdown";
import { useHistory } from 'react-router-dom';

function AddServices() {

    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState({});
    console.log(selectedFile)
    const [actualFiles, setActualFile] = useState({});
    const [uploadFiles, setUploadFile] = useState([]);
    const [cate, setcate] = useState([])
    const [selemail, setselemail] = useState([])
    const [servitag, setServitag] = useState([])
    const [locations, setLocations] = useState([])
    console.log(locations)

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
            attachment: JSON.stringify(selectedFile),
            created_by: "1",
        }
        const response = await createData("service/new", Servicedata)
        if (response.status === 201) {
            toast.success('Successfully Service Added')
            setform("")
            cleardata()
            history.push('/allservices');
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

    const Jobslist = async () => {
        const response = await getAllData('master/service_category');
        setcate(response.data.master[0].data);
    }

    const selleremails = async () => {
        const response = await getAllData('admin/users');
        setselemail(response.data.users);
    }

    const onSelect = (selectedList, index) => {
        if (index >= 0 && index < locations.length) {
            const updatedLocations = [...locations];
            updatedLocations[index].list = selectedList;
            setLocations(updatedLocations);
        }
    };

    const onRemove = (selectedList, index) => {
        if (index >= 0 && index < locations.length) {
            const updatedLocations = [...locations];
            updatedLocations[index].list = updatedLocations[index].list.filter(
                (item) => !selectedList.includes(item)
            );
            setLocations(updatedLocations);
        }
    };
    // const handleTagChange = (event, index) => {
    //     var _list = [
    //         {
    //             id: 1,
    //             value: event.target.value
    //         }
    //     ]
    //     // var _tags = selectedproductTags;
    //     _tags[index].list = _list;
    //     // setSelectedproductTags(_tags);
    // }
    const ServiceTags = async () => {
        const response = await getAllData("master/service_tags");
        setServitag(response.data.master[0].data);
        const _selectList = response.data.master[0].data.map((x) => ({
            id: x.id,
            name: x.name,
            list: [],
        }));
        setLocations(_selectList);
    };

    useEffect(() => {
        Jobslist()
        selleremails()
        ServiceTags()
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
                                    <p className="capital-title">Services / Add Services</p>
                                    <h4 className="ms-3 mt-1">Add Services</h4>
                                    <p className="med-sub-title">Here You Can add Services to your profile</p>

                                    <label className="label-name">Service Title</label>
                                    <input value={form.title} required name="title" onChange={(e) => { handleChange(e) }} className="input-focus input-box-440 d-block" type='text' />

                                    <div className="d-inline-block">
                                        <label className="label-name">Service Category</label>
                                        <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
                                            <option value="">Select Option</option>
                                            {cate?.map((data) => (
                                                <option value={data.value}>{data.value}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Service Email</label>
                                        <select value={form.email} required name="email" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
                                            <option value="">Select Freelancer</option>
                                            {selemail.map((data) => (
                                                <option value={data.email}>{data.email}</option>
                                            ))}
                                        </select>
                                    </div>


                                    <label className="label-name">Description</label>
                                    <textarea value={form.description} required name="description" onChange={(e) => { handleChange(e) }} className="input-focus textarea-2"></textarea>

                                    <label className="label-name">Service Location</label>
                                    <div className="Dropdown-box-440">
                                    <Multiselect options={servitag[1]?.list} displayValue="value" />
                                    </div>
                                    <label className="label-name">Service Range</label>
                                    <div className="Dropdown-box-440">
                                    <Multiselect options={servitag[2]?.list} displayValue="value" />
                                    </div>
                                    <div className="m-3">
                                        <input className="aipro-checkbox1" type='checkbox' /><span className="chc-span">Shipping Requires</span>
                                        <input className="aipro-checkbox2" type='checkbox' /><span className="chc-span">Charge Taxes on this product</span>
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Price Type</label>
                                        <select value={form.price_type} required name="price_type" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200">
                                            <option value="">Select Option</option>
                                            <option value="Per Hour Cost">Per Hour Cost</option>
                                            <option value="Fixed Price">Fixed Price</option>
                                        </select>
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Price</label>
                                        <input value={form.price} required name="price" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='number' />
                                    </div>
                                    <div></div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Office Price</label>

                                        <input value={form.offer_price} required name="offer_price" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='number' />
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Display Price</label>

                                        <input value={form.display_price} required name="display_price" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='number' />
                                    </div>

                                    <label className="label-name">Terms & Conditions</label>
                                    <textarea value={form.terms_and_condition} required name="terms_and_condition" onChange={(e) => { handleChange(e) }} className="textarea-2 input-focus d-block"></textarea>

                                    <input type='submit' className="create-btn" value='Add Services' />

                                </div>

                                <div className="Add-Product-Images">
                                    <span className="status-tit">Status :</span>
                                    <select value={form.status} required name="status" onChange={(e) => { handleChange(e) }} className="dft-act">
                                        <option value="">Select</option>
                                        <option value="Draft">Draft</option>
                                        <option value="Active">Active</option>
                                    </select>
                                    <p className="label-name service-img-label">Service Images</p>

                                    {selectedFile?.name == undefined || selectedFile?.name == null ? (
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

                                    <label htmlFor="select-basic" className="mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
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

                                    {/* Modal-1 */}
                                    {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    </div> */}
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
                                    <div className="mb-4">
                                        <button type="button" className="btn btn-secondary" onClick={() => document.getElementById('select-basic').click()}>
                                            Upload Images
                                        </button>
                                        {' '}
                                        <button type="button" onClick={removeImage} className="btn btn-danger ms-2">Remove</button>
                                    </div>
                                    <p className="sub-title">Services Handle and Metafields</p>
                                    <label className="label-name">Service handle</label>
                                    <input value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} className="input-box-300 input-focus" type='text' />
                                    <p className="sub-title">Service Meta Fields</p>
                                    <label className="label-name">Title tag meta field</label>
                                    <input value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} className="input-box-300 input-focus" type='text' />
                                    <label className="label-name">Descrption tag meta field</label>
                                    <input value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} className="input-box-300 input-focus" type='text' />
                                </div>

                            </div>
                        </form>
                    </div>
                </div >
                <Toaster />
            </div >
        </>
    )
}
export default AddServices