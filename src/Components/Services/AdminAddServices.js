// import React, { useState, useEffect } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import { Icon } from '@iconify/react';
// // import product_image from '../../Images/employee.png'
// // import { Link } from "react-router-dom";
// import { uploadImage } from "../../Services/ImageService";
// import { createData, getAllData } from "../../Services/ProxyService";
// import toast, { Toaster } from 'react-hot-toast';
// import ServiceMultiselectDropdown from "../SelectTag/ServiceTag";
// import ServiceLocationMultiselect from "../SelectTag/ServiceLocation";
// import Multiselect from "multiselect-react-dropdown";
// import { useHistory } from 'react-router-dom';

// function AddServices() {

//     const history = useHistory();
//     const [selectedFile, setSelectedFile] = useState({});
//     console.log(selectedFile)
//     const [actualFiles, setActualFile] = useState({});
//     const [uploadFiles, setUploadFile] = useState([]);
//     const [cate, setcate] = useState([])
//     const [selemail, setselemail] = useState([])
//     const [servitag, setServitag] = useState([])
//     const [locations, setLocations] = useState([])
//     console.log(locations)

//     const handleFileInput = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();

//         reader.onload = () => {
//             const url = reader.result;
//             setActualFile(url);
//         };

//         reader.readAsDataURL(file);

//         const fileObject = {
//             "name": file.name,
//             "url": `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${file.name}`,
//             "type": file.type
//         };
//         setSelectedFile(fileObject);
//     };

//     const uploadFile = () => {
//         console.log('uploadFiles length', uploadFiles.length);
//         for (let i = 0; i < uploadFiles.length; i++) {
//             uploadImage(uploadFiles[i]);
//         }
//     };

//     const removeImage = () => {
//         console.log(selectedFile); // Check the data type and structure of selectedFile
//         setSelectedFile({});
//         setActualFile({});
//         setUploadFile([]);
//     };


//     const [form, setform] = useState([])
//     console.log(form)

//     const handleChange = (e) => {
//         const myData = { ...form };
//         myData[e.target.name] = e.target.value;
//         setform(myData);

//     }

//     const AddService = async () => {
//         const Servicedata = {
//             title: form.title,
//             status: form.status,
//             email: form.email,
//             category: form.category,
//             handle: form.handle,
//             meta_field: {
//                 metatitle: form.metatitle,
//                 metadescription: form.metadescription,
//             },
//             description: form.description,
//             service_tag: form.service_tag,
//             price_type: form.price_type,
//             price: form.price,
//             offer_price: form.offer_price,
//             display_price: form.display_price,
//             terms_and_condition: form.terms_and_condition,
//             attachment: JSON.stringify(selectedFile),
//             created_by: "1",
//         }
//         const response = await createData("service/new", Servicedata)
//         if (response.status === 201) {
//             toast.success('Successfully Service Added')
//             setform("")
//             cleardata()
//             history.push('/allservices');
//         } else {
//             toast.error('Something went wrong')
//         }
//         console.log(response)
//     }

//     const formsubmit = (e) => {
//         e.preventDefault()
//         uploadFile()
//         AddService();
//     }

//     const cleardata = () => {
//         setform({
//             title: "",
//             status: "",
//             email: "",
//             category: "",
//             handle: "",
//             metatitle: "",
//             metadescription: "",
//             description: "",
//             service_tag: "",
//             price_type: "",
//             price: "",
//             offer_price: "",
//             display_price: "",
//             terms_and_condition: "",
//         })
//     }

//     const Jobslist = async () => {
//         const response = await getAllData('master/service_category');
//         setcate(response.data.master[0].data);
//     }

//     const selleremails = async () => {
//         const response = await getAllData('admin/users');
//         setselemail(response.data.users);
//     }

//     const onSelect = (selectedList, index) => {
//         if (index >= 0 && index < locations.length) {
//             const updatedLocations = [...locations];
//             updatedLocations[index].list = selectedList;
//             setLocations(updatedLocations);
//         }
//     };

//     const onRemove = (selectedList, index) => {
//         if (index >= 0 && index < locations.length) {
//             const updatedLocations = [...locations];
//             updatedLocations[index].list = updatedLocations[index].list.filter(
//                 (item) => !selectedList.includes(item)
//             );
//             setLocations(updatedLocations);
//         }
//     };
//     // const handleTagChange = (event, index) => {
//     //     var _list = [
//     //         {
//     //             id: 1,
//     //             value: event.target.value
//     //         }
//     //     ]
//     //     // var _tags = selectedproductTags;
//     //     _tags[index].list = _list;
//     //     // setSelectedproductTags(_tags);
//     // }
//     const ServiceTags = async () => {
//         const response = await getAllData("master/service_tags");
//         setServitag(response.data.master[0].data);
//         const _selectList = response.data.master[0].data.map((x) => ({
//             id: x.id,
//             name: x.name,
//             list: [],
//         }));
//         setLocations(_selectList);
//     };

//     useEffect(() => {
//         Jobslist()
//         selleremails()
//         ServiceTags()
//     }, [])


//     return (
//         <>
//             <div className="row">
//                 <div className="col-2">
//                     <AiMenu />
//                 </div>
//                 <div className="col-10">
//                     <div>
//                         <AiHeader />
//                     </div>
//                     <div className="page-bg">
//                         <form onSubmit={(e) => { formsubmit(e) }}>
//                             <div className="product-div">
//                                 <div className="Add-Product">
//                                     <p className="capital-title">Services / Add Services</p>
//                                     <h4 className="ms-3 mt-1">Add Services</h4>
//                                     <p className="med-sub-title">Here You Can add Services to your profile</p>

//                                     <label className="label-name">Service Title</label>
//                                     <input value={form.title} required name="title" onChange={(e) => { handleChange(e) }} className="input-focus input-box-440 d-block" type='text' />

//                                     <div className="d-inline-block">
//                                         <label className="label-name">Service Category</label>
//                                         <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
//                                             <option value="">Select Option</option>
//                                             {cate?.map((data) => (
//                                                 <option value={data.value}>{data.value}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Service Email</label>
//                                         <select value={form.email} required name="email" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
//                                             <option value="">Select Freelancer</option>
//                                             {selemail.map((data) => (
//                                                 <option value={data.email}>{data.email}</option>
//                                             ))}
//                                         </select>
//                                     </div>


//                                     <label className="label-name">Description</label>
//                                     <textarea value={form.description} required name="description" onChange={(e) => { handleChange(e) }} className="input-focus textarea-2"></textarea>

//                                     <label className="label-name">Service Location</label>
//                                     <div className="Dropdown-box-440">
//                                     <Multiselect options={servitag[1]?.list} displayValue="value" />
//                                     </div>
//                                     <label className="label-name">Service Range</label>
//                                     <div className="Dropdown-box-440">
//                                     <Multiselect options={servitag[2]?.list} displayValue="value" />
//                                     </div>
//                                     <div className="m-3">
//                                         <input className="aipro-checkbox1" type='checkbox' /><span className="chc-span">Shipping Requires</span>
//                                         <input className="aipro-checkbox2" type='checkbox' /><span className="chc-span">Charge Taxes on this product</span>
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Price Type</label>
//                                         <select value={form.price_type} required name="price_type" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200">
//                                             <option value="">Select Option</option>
//                                             <option value="Per Hour Cost">Per Hour Cost</option>
//                                             <option value="Fixed Price">Fixed Price</option>
//                                         </select>
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Price</label>
//                                         <input value={form.price} required name="price" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='number' />
//                                     </div>
//                                     <div></div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Office Price</label>

//                                         <input value={form.offer_price} required name="offer_price" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='number' />
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Display Price</label>

//                                         <input value={form.display_price} required name="display_price" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='number' />
//                                     </div>

//                                     <label className="label-name">Terms & Conditions</label>
//                                     <textarea value={form.terms_and_condition} required name="terms_and_condition" onChange={(e) => { handleChange(e) }} className="textarea-2 input-focus d-block"></textarea>

//                                     <input type='submit' className="create-btn" value='Add Services' />

//                                 </div>

//                                 <div className="Add-Product-Images">
//                                     <span className="status-tit">Status :</span>
//                                     <select value={form.status} required name="status" onChange={(e) => { handleChange(e) }} className="dft-act">
//                                         <option value="">Select</option>
//                                         <option value="Draft">Draft</option>
//                                         <option value="Active">Active</option>
//                                     </select>
//                                     <p className="label-name service-img-label">Service Images</p>

//                                     {selectedFile?.name == undefined || selectedFile?.name == null ? (
//                                         <div className="ai-image-drag">
//                                             <i className="ai-img-icon ri-image-fill"></i>
//                                             <small className="chose-file">No File Chosen</small>
//                                         </div>
//                                     ) : (
//                                         <>
//                                             {/* {actualFiles.map((file) => ( */}
//                                             <img src={actualFiles} alt="product-img" className="attached-img_1" />
//                                             {/* ))} */}
//                                         </>
//                                     )}

//                                     <label htmlFor="select-basic" className="mb-75 me-75" style={{ fontSize: "small", color: "blue" }}>
//                                         <input
//                                             name="attachments"
//                                             // multiple
//                                             onChange={handleFileInput}
//                                             required
//                                             type="file"
//                                             id="select-basic"
//                                             accept="image/*"
//                                             style={{ display: "none" }}
//                                         />
//                                     </label>

//                                     {' '}

//                                     {/* Modal-1 */}
//                                     {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                         <div class="modal-dialog modal-lg">
//                                             <div class="modal-content">
//                                                 <div>
//                                                     <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
//                                                     <p className="proadd-img-desc">to add the service images</p>
//                                                 </div>
//                                                 <div class="modal-body">
//                                                     <label htmlFor="select-basic" className='mb-75 me-75' size='sm' color='primary'>
//                                                         <div className="upd-attachment">
//                                                             <Icon className="upload-file-icon" data-bs-toggle="modal" data-bs-target="#exampleModal2" icon="fluent:folder-arrow-up-20-filled" width="90" height="90" />
//                                                             <p className="ig-upldesc">Drag & Drop files here or choose file 50 MB max file size</p>
//                                                             <input name="attachment" onChange={handleFileInput} required type="file" id="select-basic" accept='image/*' style={{ display: 'none' }} />
//                                                         </div>

//                                                     </label>

//                                                 </div>
//                                                 <div class="modal-footer">
//                                                     <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div> */}
//                                     {/* Modal -2 */}
//                                     {selectedFile == undefined || selectedFile == 0 ? (
//                                         <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                             <div style={{ display: "none" }} class="modal-dialog modal-lg">
//                                                 <div class="modal-content">
//                                                     <div>
//                                                         <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
//                                                         <p className="proadd-img-desc">to add the service images</p>
//                                                     </div>
//                                                     <div class="modal-body">
//                                                         <div className="upd-attachments">
//                                                         </div>
//                                                     </div>
//                                                     <div class="modal-footer">
//                                                         <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                             <div class="modal-dialog modal-lg">
//                                                 <div class="modal-content">
//                                                     <div>
//                                                         <p class="modal-title" className="upd-tit" id="exampleModalLabel">Upload Your File</p>
//                                                         <p className="proadd-img-desc">to add the service images</p>
//                                                     </div>
//                                                     <div class="modal-body">
//                                                         <div className="upd-attachments">
//                                                             <table>
//                                                                 <tr>
//                                                                     <td>
//                                                                         {/* {actualFiles.map((file) => ( */}
//                                                                         <img src={actualFiles} alt="product-img" className="attached-img1" />
//                                                                         {/* ))} */}
//                                                                         <i class="ri-close-line upload-img-close1"></i>
//                                                                     </td>
//                                                                 </tr>
//                                                             </table>

//                                                         </div>
//                                                     </div>
//                                                     <div class="modal-footer">
//                                                         <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add</button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
//                                     <div className="mb-4">
//                                         <button type="button" className="btn btn-secondary" onClick={() => document.getElementById('select-basic').click()}>
//                                             Upload Images
//                                         </button>
//                                         {' '}
//                                         <button type="button" onClick={removeImage} className="btn btn-danger ms-2">Remove</button>
//                                     </div>
//                                     <p className="sub-title">Services Handle and Metafields</p>
//                                     <label className="label-name">Service handle</label>
//                                     <input value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} className="input-box-300 input-focus" type='text' />
//                                     <p className="sub-title">Service Meta Fields</p>
//                                     <label className="label-name">Title tag meta field</label>
//                                     <input value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} className="input-box-300 input-focus" type='text' />
//                                     <label className="label-name">Descrption tag meta field</label>
//                                     <input value={form.metadescription} required name="metadescription" onChange={(e) => { handleChange(e) }} className="input-box-300 input-focus" type='text' />
//                                 </div>

//                             </div>
//                         </form>
//                     </div>
//                 </div >
//                 <Toaster />
//             </div >
//         </>
//     )
// }
// export default AddServices


import { React, useState, useEffect, useCallback, useRef } from 'react';
import { Col, Row, Card, Container, Button, Breadcrumb, InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { Dropdown, Image, Modal } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import { Link, useHistory } from 'react-router-dom';
import { uploadImage } from "../../Services/ImageService";
import { createData, getAllData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
// import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard';
import { useDropzone } from 'react-dropzone';
import cloudUpload from '../../User-Portal/TemplateAssets/assets/cloud-upload.svg';
import { getSize } from '../../User-Portal/TemplateAssets/helpers/utils';
import CardDropdown from '../../User-Portal/TemplateAssets/common/CardDropdown';
import { Editor } from "@tinymce/tinymce-react";
import AdminHeader from '../Menubar/AiMenu';

const FrontendAddService = () => {

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

    // Cancel Modal
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => {
        setShowModal1(false);
    };

    const handleCancel = () => {
        // Perform cancel action here
        console.log('Cancel project');
        setShowModal1(false);
    };


    // Static data

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var _user = sessionStorage.getItem('user');
    var _json = JSON.parse(_user);

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
        const files = e.target.files;
        if (files.length > 0) {
            const file = files[0];
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
            created_by: _json._id,
        }
        const response = await createData("service/new", Servicedata)
        if (response.status === 201) {
            toast.success('Successfully Service Added')
            setform("")
            cleardata()
            history.push('/addservicecard');
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

    const editorRef = useRef(null);

    return (
        <>
            <Row>
                <Col lg={12} className='mb-5'>
                    <AdminHeader />
                </Col>
                <Col lg={12} className='container mt-4'>
                    <Card>
                        <Card.Header className="bg-light" as={"h5"}>
                            Add Service
                            <Breadcrumb as={"h6"} className='mt-3 text-capitalize'>
                                <Breadcrumb.Item href="#">
                                    Service
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">
                                    Add Service
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Header>

                        <Card.Body>
                            <Form onSubmit={(e) => { formsubmit(e) }}>

                                {/* <Container> */}
                                <div className='d-flex justify-content-end'>

                                    <Form.Group>
                                        <Form.Group className='mb-0'>
                                            <Form.Label className="text-uppercase text-700">Status<span className="text-danger">*</span></Form.Label>
                                            <Form.Select value={form.status} required name="status" onChange={(e) => { handleChange(e) }}>
                                                <option value="">Select</option>
                                                <option value="Draft">Draft</option>
                                                <option value="Active">Active</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Form.Group>
                                </div>
                                <Row>
                                    <Col lg={7}>
                                        <Card className='mt-3'>
                                            <Card.Body>
                                                <h5 className='mb-2 text-uppercase'>Services Information</h5>

                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-uppercase text-700">Services Title<span className="text-danger">*</span></Form.Label>
                                                    <Form.Control value={form.title} required name="title" onChange={(e) => { handleChange(e) }} type="text" className='w-100' />
                                                </Form.Group>
                                                <Row className='g-3 mb-3'>
                                                    <Col sm={12} md={6} lg={6} xl={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label className="text-uppercase text-700">Services Category<span className="text-danger">*</span></Form.Label>
                                                            <Form.Select value={form.category} required name="category" onChange={(e) => { handleChange(e) }}>
                                                                <option value="">Select Option</option>
                                                                {cate?.map((data) => (
                                                                    <option value={data.value}>{data.value}</option>
                                                                ))}
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col sm={12} md={6} lg={6} xl={6}>
                                                        <Form.Group className='mb-3'>
                                                            <Form.Label className="text-uppercase text-700">Services Email<span className="text-danger">*</span></Form.Label>
                                                            {/* <Form.Select value={form.email} required name="email" onChange={(e) => { handleChange(e) }}>
                                    <option value="">Select Option</option>
                                    {selemail.map((data) => (
                                        <option value={data.email}>{data.email}</option>
                                    ))}
                                </Form.Select> */}
                                                            <Form.Control
                                                                disabled
                                                                value="jaganseller@gmail.com"
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-uppercase text-700">Description <span className='text-grey'>(Optional)</span></Form.Label>
                                                    {/* <Form.Control value={form.description} required name="description" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='Tag Your Description....' rows={8} /> */}
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
                                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

                                                        }}
                                                    />
                                                </Form.Group>
                                                <Row className='g-3 mb-3'>
                                                    <Form.Group as={Col} className='mb-3'>
                                                        <Form.Label className="text-uppercase text-700">Services Location<span className="text-danger">*</span></Form.Label>
                                                        <Multiselect style={{ zIndex: '1000' }} options={servitag[1]?.list} displayValue="value" className='form-control' />
                                                    </Form.Group>
                                                    {/* <Form.Group as={Col} className=' mb-3'>
                            <Form.Label className="text-uppercase text-700">Services Range
                                <span className="text-danger">*</span></Form.Label>
                            <Multiselect options={servitag[2]?.list} displayValue="value" className='form-control' />
                        </Form.Group> */}
                                                </Row>
                                                <Row className='mb-3'>
                                                    <Col>
                                                        <Form.Check type="checkbox" label="Shipping Requires" className="mb-0" />
                                                    </Col>
                                                </Row>
                                                <Row className='g-3 mb-3'>
                                                    <Form.Group as={Col} className='mb-3'>
                                                        <Form.Label className="text-uppercase text-700">Price Type<span className="text-danger">*</span></Form.Label>
                                                        <Form.Select value={form.price_type} required name="price_type" onChange={(e) => { handleChange(e) }}>
                                                            <option value="">Select Option</option>
                                                            <option value="Per Hour Cost">Per Hour Cost</option>
                                                            <option value="Fixed Price">Fixed Price</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group as={Col} className=' mb-3'>
                                                        <Form.Label className="text-uppercase text-700">Price<span className="text-danger">*</span></Form.Label>
                                                        <InputGroup>
                                                            <Button>£</Button>
                                                            <Form.Control value={form.price} required name="price" onChange={(e) => { handleChange(e) }} type="text" />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Row>
                                                <Row className='g-3 mb-3'>
                                                    <Form.Group as={Col} className=' mb-3'>
                                                        <Form.Label className="text-uppercase text-700">Offer Price <span className="text-danger">*</span></Form.Label>
                                                        <InputGroup>
                                                            <Button>£</Button>
                                                            <Form.Control value={form.offer_price} required name="offer_price" onChange={(e) => { handleChange(e) }} type="text" />
                                                        </InputGroup>
                                                    </Form.Group>
                                                    <Form.Group as={Col} className=' mb-3'>
                                                        <Form.Label className="text-uppercase text-700">Display Price<span className="text-danger">*</span></Form.Label>
                                                        <InputGroup>
                                                            <Button>£</Button>
                                                            <Form.Control disabled value={form.display_price} required name="display_price" onChange={(e) => { handleChange(e) }} type="text" />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Row>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className="text-uppercase text-700">Terms & Conditions<span className="text-danger">*</span></Form.Label>
                                                    {/* <Form.Control value={form.terms_and_condition} required name="terms_and_condition" onChange={(e) => { handleChange(e) }} as="textarea" placeholder='' rows={8} /> */}
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

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card className='mt-3'>
                                            <Card.Body>
                                                <h5 className='mb-2 text-uppercase'>Media</h5>
                                                {/* <Flex justifyContent={between}> */}
                                                {/* <div className='d-flex justify-content-between'>
                            <Button variant="primary" onClick={handleShow}>
                                Add Media from URL
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Enter or Paste the URL</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Control type='text' className='w-100 mb-3' />
                                    <Button className='btn btn-outline-success text-light'>Submit</Button>
                                </Modal.Body>
                            </Modal>

                        </div> */}
                                                {/* </Flex> */}
                                                {/* <div className='mt-3 border-secondary w-100'>
                        <small className='d-block text-align-center w-100'>
                            Drag and Drop
                            Your Files Here

                        </small>
                        <div className='d-flex justify-content-between'>
                            <label htmlFor="select-basic" >
                                <Button className='mt-3 btn text-light btn-outline-secondary' onClick={() => document.getElementById('select-basic').click()}>Browse Files</Button>
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

                        </div>
                        {actualFiles.length == 0 || actualFiles.length == undefined ? (
                            ""
                        ) : (<>
                            <img src={actualFiles} alt="product-img" className="attached-img_1 mt-3" /><br />
                            <button type="button" onClick={removeImage} className="btn btn-danger  mt-3">Remove</button>
                        </>)}
                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Note:</span>Image can be uploaded of any dimension but we recommend you to upload image with dimension of 1024x1024 & its size must be less than 10MB.</small>
                        <small className='d-block'><span className='fw-semibold me-2 text-danger'>Supported Format:</span><span className='fw-bold'>JPEG,PNG,PDF.</span></small>
                    </div> */}


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
                                            </Card.Body>
                                        </Card>
                                        <Card className='mt-3'>
                                            <Card.Body>
                                                <h5 className='mb-2 text-uppercase'>Services Handle and Metafields</h5>
                                                <Form.Group className='mb-4'>
                                                    <Form.Label className="text-uppercase text-700">
                                                        Services handle
                                                        <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control value={form.handle} required name="handle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <h5 className='mb-2 text-uppercase'>Services Metafields</h5>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-uppercase text-700">
                                                        Title Tag Meta Field
                                                        <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control maxLength={70} value={form.metatitle} required name="metatitle" onChange={(e) => { handleChange(e) }} type="text" placeholder='' className='w-100' />
                                                </Form.Group>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className="text-uppercase text-700">
                                                        Description Tag Meta Field
                                                        <span className="text-danger">*</span></Form.Label>
                                                    <Form.Control value={form.metadescription} maxLength={300} required name="metadescription" onChange={(e) => { handleChange(e) }} as={"textarea"} rows={1} className='resize-none w-100' />
                                                </Form.Group>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={7} className='mb-3'>
                                        {/* <Link to='/addservicecard'> */}
                                        <Button type='submit' className='mt-3  btn text-light bg-success border-0'>Add Services</Button>
                                        {/* </Link> */}


                                        <Button onClick={() => setShowModal1(true)} className='mt-3  btn text-light border-0 ms-5 bg-danger '>Cancel</Button>

                                        {/*  */}
                                        <Modal show={showModal1} onHide={handleClose1}>
                                            <Modal.Header >
                                                <Modal.Title>Warning</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p className='text-capitalize'>
                                                    Are you sure you want to cancel without adding service ?
                                                </p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button className='me-2' variant="secondary" onClick={handleClose1}>
                                                    No
                                                </Button>
                                                <Link to="/addservicecard">
                                                    <Button variant="danger" onClick={handleClose1}>
                                                        Yes
                                                    </Button>
                                                </Link>
                                            </Modal.Footer>
                                        </Modal>
                                    </Col>
                                </Row>
                                {/* </Container> */}

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Toaster />
            </Row>
        </>
    )
}
export default FrontendAddService;