// import React, { useState, useEffect } from "react";
// import AiHeader from "../Header/AiHeader";
// import AiMenu from "../Menubar/AiMenu";
// import { createData, getAllData } from "../../Services/ProxyService";
// import toast, { Toaster } from 'react-hot-toast';
// import { Icon } from '@iconify/react';
// import data from "../../Data/CustomerMailData";
// import { uploadImage } from "../../Services/ImageService";
// import { Link } from "react-router-dom";
// import product_image from '../../Images/employee.png'
// import { useHistory } from 'react-router-dom';
// function AddJob() {

//     //Customer Email (Javascript-Fun) 

//     const history = useHistory();
//     const [value, setValue] = useState('');
//     console.log(value)

//     const onChange = (event) => {

//         setValue(event.target.value);

//     }
//     const onSearch = (searchTerm) => {

//         setValue(searchTerm);
//     }

//     //Customer-Email Js Fun Ends// 

//     const [selectedFile, setSelectedFile] = useState([]);
//     const [actualFiles, setActualFile] = useState([]);
//     const [uploadFiles, setUploadFile] = useState([]);

//     const handleFileInput = (e) => {
//         const files = e.target.files;
//         const fileArray = [];

//         for (let i = 0; i < files.length; i++) {
//             fileArray.push({
//                 name: files[i].name,
//                 url: `https://myproject-data.s3.eu-west-2.amazonaws.com/images/${files[i].name}`,
//                 type: files[i].type
//             });
//         }
//         setSelectedFile(fileArray);
//         setUploadFile(files);
//     };

//     const uploadFile = () => {
//         console.log('uploadFiles length', uploadFiles.length);
//         for (let i = 0; i < uploadFiles.length; i++) {
//             uploadImage(uploadFiles[i]);
//         }
//     };


//     const [form, setform] = useState([])
//     console.log(form)

//     const handleChange = (e) => {
//         const myData = { ...form };
//         myData[e.target.name] = e.target.value;
//         setform(myData);
//         if (e.target.name == 'category') {
//             console.log(e.target.value);
//             SubCategory(e.target.value);
//         }
//     }

//     const SubCategory = async (_category) => {
//         var catg = cate.find(x => x.category == _category);
//         setsubcate(catg.sub_category);
//     }

//     const AddJobs = async () => {
//         const productdata = {
//             customer_email: value,
//             category: form.category,
//             sub_category: form.sub_category,
//             project_title: form.project_title,
//             project_description: form.project_description,
//             budget_type: form.budget_type,
//             currency: form.currency,
//             budget: form.budget,
//             max_budget: form.budget_type === "No Idea" ? form.max_budget : 0,
//             location: form.location,
//             job_status: form.job_status,
//             status: form.status,
//             visibility: form.visibility,
//             project_duration: form.project_duration,
//             expire_date: form.expire_date,
//             attachments: selectedFile,
//             terms_and_condition: true,
//             postcode: form.postcode,
//             startdate: form.startdate,
//             created_by: "1",
//         }
//         const response = await createData("job/new", productdata)
//         if (response.status === 201) {
//             toast.success('Successfully Product Added')
//             history.push('/alljob');
//             cleardata()
//         } else {
//             toast.error('Something went wrong')
//         }
//         console.log(response)
//     }

//     const formsubmit = (e) => {
//         e.preventDefault();
//         uploadFile();
//         AddJobs();
//         setValue("");
//     }

//     const cleardata = () => {
//         setform({
//             customer_email: "",
//             category: "",
//             sub_category: "",
//             project_title: "",
//             project_description: "",
//             budget_type: "",
//             currency: "",
//             budget: "",
//             max_budget: "",
//             visibility: "",
//             location: "",
//             job_status: "",
//             status: "",
//             project_duration: "",
//             expire_date: "",
//             terms_and_condition: "",
//             created_by: "",
//             postcode: "",
//             startdate: "",
//         });
//         setSelectedFile([]);
//     }

//     const [cate, setcate] = useState([])
//     const [subcate, setsubcate] = useState([])
//     const [selemail, setselemail] = useState([])


//     const Jobslist = async () => {
//         const response = await getAllData('master/job_category');
//         setcate(response.data.master[0].data);
//         // setsubcate(response.data.master[0].data.sub_category);
//         // console.log(response.data.master[0].data.sub_category);
//     }
//     const selleremails = async () => {
//         const response = await getAllData('admin/users');
//         setselemail(response.data.users);
//         // setsubcate(response.data.master[0].data.sub_category);
//         // console.log(response.data.master[0].data.sub_category);
//     }
//     const removeImage = async (index) => {
//         var selected = [...selectedFile];
//         var uploads = [...uploadFiles];
//         selected.splice(index, 1);
//         uploads.splice(index, 1);
//         setSelectedFile(selected);
//         setUploadFile(uploads);
//     }
//     useEffect(() => {
//         Jobslist()
//         selleremails()
//     }, [])


//     return (
//         <>
//             <div className="add-seller-div row">
//                 <div className="col-2">
//                     <AiMenu />
//                 </div>
//                 <div className="col-10">
//                     <div>
//                         <AiHeader />
//                         <div className="content-div">
//                             <div>
//                                 <p className="capital-title">post a job / add job</p>
//                                 <h4 className="ms-3 mt-1">Add Job</h4>
//                                 <p className="med-sub-title">Here you can add jobs listed in your store</p>

//                                 <form onSubmit={(e) => { formsubmit(e) }} className="add-seller-form">

//                                     <div className="d-inline-block">
//                                         <label className="label-name">Category</label>
//                                         <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
//                                             <option value="">Select</option>
//                                             {cate.map((data) => (
//                                                 <option value={data.category}>{data.category}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Sub Category</label>
//                                         <select value={form.sub_category} required name="sub_category" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
//                                             <option value="">Select</option>
//                                             {subcate.map((data) => (
//                                                 <option value={data.value}>{data.value}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <label className="label-name">Project Title</label>
//                                     <input value={form.project_title} required name="project_title" onChange={(e) => { handleChange(e) }} className="input-box-440" type='text' />
//                                     <label className="label-name">Description</label>
//                                     <textarea value={form.project_description} required name="project_description" onChange={(e) => { handleChange(e) }} className="textarea-2"></textarea>
//                                     <label className="label-name">Upload Samples</label>

//                                     <label htmlFor="select-basic" className='mb-75 me-75' size='sm' color='primary'>
//                                         <div className="add_job-attachments">
//                                             <span className="drop-files-ph text-center">Drop file here</span>
//                                             <span className="drop-files-ph">or Browse to add attachments</span>
//                                             <input name="attachments" multiple onChange={handleFileInput} required type="file" id="select-basic" accept='image/*' style={{ display: 'none' }} />
//                                         </div>
//                                     </label>


//                                     <label className="label-name">Files:</label>

//                                     <table className="added-fil-table">
//                                         <tr className="doc-ad-bg">
//                                             {selectedFile.map((file, index) => (
//                                                 <td>
//                                                     <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
//                                                     <span className="kitchen-plan-div">{file.name}</span>
//                                                     <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>
//                                                 </td>
//                                             ))}
//                                             <td className="d-none">
//                                                 <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="add-upl-pdf-btn">Add</button>
//                                             </td>
//                                         </tr>
//                                     </table>
//                                     {/* Modal-1 */}
//                                     <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                         <div className="modal-dialog modal-lg">
//                                             <div className="modal-content">
//                                                 <div>
//                                                     <p className="modal-title upd-tit" id="exampleModalLabel">Upload Your File</p>
//                                                     <p className="proadd-img-desc">to add the service images</p>
//                                                 </div>
//                                                 <div className="modal-body">
//                                                     <div className="upd-attachments">
//                                                         <Icon className="upload-file-icon" data-bs-toggle="modal" data-bs-target="#exampleModal2" icon="fluent:folder-arrow-up-20-filled" width="90" height="90" />
//                                                         <p className="ig-upldesc">Drag & Drop files here or choose file 50 MB max file size</p>
//                                                     </div>
//                                                 </div>
//                                                 <div className="modal-footer">
//                                                     <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     {/* Modal -2 */}
//                                     <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                         <div className="modal-dialog modal-lg">
//                                             <div className="modal-content">
//                                                 <div>
//                                                     <p className="modal-title upd-tit" id="exampleModalLabel">Upload Your File</p>
//                                                     <p className="proadd-img-desc">to add the service images</p>
//                                                 </div>
//                                                 <div className="modal-body">
//                                                     <div className="upd-attachments">
//                                                         <table>
//                                                             <tr>
//                                                                 <td>
//                                                                     <img src={product_image} alt="product-img" className="attached-img" />
//                                                                     <i className="ri-close-line upload-img-close"></i>
//                                                                 </td>
//                                                                 <td>
//                                                                     <img src={product_image} alt="product-img" className="attached-img" />
//                                                                     <i className="ri-close-line upload-img-close"></i>
//                                                                 </td>
//                                                                 <td>
//                                                                     <img src={product_image} alt="product-img" className="attached-img" />
//                                                                     <i className="ri-close-line upload-img-close"></i>
//                                                                 </td>
//                                                                 <td>
//                                                                     <img src={product_image} alt="product-img" className="attached-img" />
//                                                                     <i className="ri-close-line upload-img-close"></i>
//                                                                 </td>
//                                                                 <td>
//                                                                     <img src={product_image} alt="product-img" className="attached-img" />
//                                                                     <i className="ri-close-line upload-img-close"></i>
//                                                                 </td>
//                                                             </tr>
//                                                         </table>

//                                                     </div>
//                                                 </div>
//                                                 <div className="modal-footer">
//                                                     <button type="button" className="btn btn-success" data-bs-dismiss="modal">Add</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Budget Type</label>
//                                         <select value={form.budget_type} required name="budget_type" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200">
//                                             <option value="">Select</option>
//                                             <option value="Fixed Price">Fixed Price   :</option>
//                                             <option value="No Idea">No Idea</option>
//                                             <option value="No Range">No Range</option>
//                                         </select>
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Currency</label>
//                                         <select value={form.currency} required name="currency" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200">
//                                             <option value="">Select</option>
//                                             <option value="£ GBP">£ GBP :</option>
//                                             <option value="£ EUR">£ EUR</option>
//                                         </select>
//                                     </div>
//                                     <label className="label-name">Budget</label>
//                                     <input value={form.budget} required name="budget" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" placeholder="£ 0" type="number" />

//                                     <label className="label-name">Project Locations</label>

//                                     <input value={form.location} required name="location" onChange={(e) => { handleChange(e) }} className="input-focus d-block input-box-440" placeholder="Geo Locations" type='text' />
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Post Code</label>
//                                         <input value={form.postcode} required name="postcode" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='text' />
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Starting Date <span className="optional">(optional)</span></label>
//                                         <input value={form.startdate} required name="startdate" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='date' />
//                                     </div>
//                                     <label className="label-name">Project Visibility</label>
//                                     <div className="prj-radio-div">
//                                         <input className="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="public" type="radio" /><Icon width="24" height="24" icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All Jobs can view the project post and send proposals)</span></span>
//                                     </div>
//                                     <div className="prj-radio-div">
//                                         <input className="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="public" type="radio" /><Icon icon="ph:lock-simple-fill" width="24" height="24" /> <span className="radio-opt"> Public <span className="optional">(Only Jobs that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Project Duration Time</label>
//                                         <input value={form.project_duration} required name="project_duration" onChange={(e) => { handleChange(e) }} className="input-box-200 input-focus" type='text' />
//                                     </div>
//                                     <div className="d-inline-block">
//                                         <label className="label-name">Expiry Date</label>
//                                         <input value={form.expire_date} required name="expire_date" onChange={(e) => { handleChange(e) }} className="input-box-200 input-focus" type='date' />
//                                     </div>
//                                     <div>
//                                     <button type="submit" className="create-btn">Post a Job</button>
//                                     <Link to="alljob" role="button"><button className="remove-btn">Cancel</button></Link>
//                                     </div>
//                                 </form >
//                             </div >
//                         </div >
//                     </div >
//                 </div >
//             </div >
//             <Toaster />
//         </>
//     )
// }
// export default AddJob

import { React, useState, useEffect, useCallback, useRef } from 'react';
import {
    Col,
    Form,
    Row,
    Button,
    Card,
    Dropdown,
    Image,
    Modal,
    Container,
    ListGroup,
    Breadcrumb
} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import cloudUpload from '../../User-Portal/TemplateAssets/assets/cloud-upload.svg';
import { getSize } from '../../User-Portal/TemplateAssets/helpers/utils';
import CardDropdown from '../../User-Portal/TemplateAssets/common/CardDropdown';
import { createData, getAllData } from "../../Services/ProxyService";
import toast from 'react-hot-toast';
import { uploadImage } from "../../Services/ImageService";
import file from '../../User-Portal/Components/Projectimages/BathroomFitting.jpg'
import AdminHeader from '../Menubar/AiMenu';


const AddJobs = () => {

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

    // 
    const editorRef = useRef(null);

    const history = useHistory();

    const [selectedFile, setSelectedFile] = useState([]);
    const [uploadFiles, setUploadFile] = useState([]);

    const handleFileInput = (e) => {
        const files = e.target.files;
        const fileArray = [];

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

    const [form, setform] = useState([])
    console.log(form)

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData);
        if (e.target.name == 'category') {
            console.log(e.target.value);
            SubCategory(e.target.value);
        }
    }

    const SubCategory = async (_category) => {
        var catg = cate.find(x => x.category == _category);
        setsubcate(catg.sub_category);
    }

    const AddJobs = async () => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        const productdata = {
            customer_email: _json?.email,
            category: form.category,
            sub_category: form.sub_category,
            project_title: form.project_title,
            project_description: form.project_description,
            budget_type: form.budget_type,
            currency: form.currency,
            budget: form.budget,
            max_budget: form.budget_type === "No Idea" ? form.max_budget : 0,
            location: form.location,
            job_status: form.job_status,
            status: form.status,
            visibility: form.visibility,
            project_duration: form.project_duration,
            expire_date: form.expire_date,
            attachments: selectedFile,
            terms_and_condition: true,
            postcode: form.postcode,
            startdate: form.startdate,
            created_by: _json?._id,
        }
        const response = await createData("job/new", productdata)
        if (response.status === 201) {
            toast.success('Successfully Product Added')
            history.push('/projects');
            cleardata()
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        e.preventDefault();
        uploadFile();
        AddJobs();
    }

    const cleardata = () => {
        setform({
            customer_email: "",
            category: "",
            sub_category: "",
            project_title: "",
            project_description: "",
            budget_type: "",
            currency: "",
            budget: "",
            max_budget: "",
            visibility: "",
            location: "",
            job_status: "",
            status: "",
            project_duration: "",
            expire_date: "",
            terms_and_condition: "",
            created_by: "",
            postcode: "",
            startdate: "",
        });
        setSelectedFile([]);
    }

    const [cate, setcate] = useState([])
    const [subcate, setsubcate] = useState([])
    const [selemail, setselemail] = useState([])


    const Jobslist = async () => {
        const response = await getAllData('master/job_category');
        setcate(response.data.master[0].data);
    }
    const selleremails = async () => {
        const response = await getAllData('admin/users');
        setselemail(response.data.users);
    }
    const removeImage = async (index) => {
        var selected = [...selectedFile];
        var uploads = [...uploadFiles];
        selected.splice(index, 1);
        uploads.splice(index, 1);
        setSelectedFile(selected);
        setUploadFile(uploads);
    }
    useEffect(() => {
        Jobslist()
        selleremails()
    }, [])

    // Cancel Modal
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };

    // 
    const [inputValue, setInputValue] = useState('');
    const [filteredCounties, setFilteredCounties] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        const filtered = counties.filter((county) =>
            county.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredCounties(filtered);
    };

    const handleCountySelect = (county) => {
        setInputValue(county);
        setFilteredCounties([]);
    };
    // 

    // 
    const counties = [
        'Bedfordshire',
        'Berkshire',
        'Bristol',
        'Buckinghamshire',
        // Add more UK counties here
    ];

    // 
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // 


    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className='mt-4'>
                    <Form>
                        <Row className=" font-sans-serif">
                            <Container>
                                {/* Post A Project */}
                                <Card className="mb-3">
                                    <Card.Header className="bg-light">
                                        <h5>
                                            All Jobs<span className="ms-1 fs--1 badge bg-secondary">#100</span>
                                        </h5>
                                        <Breadcrumb className="fs--1 mt-2">
                                            <Breadcrumb.Item>
                                                All Jobs
                                            </Breadcrumb.Item>
                                            <Breadcrumb.Item>
                                                Add Jobs
                                            </Breadcrumb.Item>
                                        </Breadcrumb>
                                        <p className="text-dark text-capitalize fs--1 mt-2">Here all the current Jobs on your store</p>
                                    </Card.Header>
                                    <Card.Body className="bg-white">
                                        <Form.Group className="mb-3">
                                            <Form.Label className="text-700 text-uppercase"> Customer Mail <span className="text-danger">*</span></Form.Label>
                                            <Form.Control type="text" autoComplete="off"
                                            // value={value} onChange={onChange}
                                            />
                                            {/* <div className="autocom-dropdown">
                                    {selemail.filter(item => {
                                        const searchTerm = value.toLowerCase();
                                        const email = item.email.toLowerCase();

                                        return searchTerm && email.startsWith(searchTerm) && email !== searchTerm;
                                    }
                                    )
                                        .map((item) =>
                                            <div onClick={() => onSearch(item.email)} className="dropdown-row" key={item.email}>
                                                <p className="cust-email">{item.email}</p>
                                            </div>)}
                                        </div> */}
                                        </Form.Group>
                                        <Row className="gx-2 gy-3">
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        category <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Select value={form.category}
                                                        required
                                                        name="category"
                                                        onChange={(e) => { handleChange(e) }}
                                                    >
                                                        <option value="">Select</option>
                                                        {cate.map((data) => (
                                                            <option value={data.category}>{data.category}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        sub-category <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        required
                                                        value={form.sub_category}
                                                        name="sub_category"
                                                        onChange={(e) => { handleChange(e) }}
                                                    >
                                                        <option value="">Select</option>
                                                        {subcate.map((data) => (
                                                            <option value={data.value}>{data.value}</option>
                                                        ))}
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} className='me-2 '>
                                                <Form.Group controlId="courseTitle">
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        project title <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        value={form.project_title}
                                                        required
                                                        name="project_title"
                                                        onChange={(e) => handleChange(e)}
                                                        id="usr-prj-tit"
                                                        placeholder="e.g I Want to Make a New Kitchen"
                                                        minLength={30}
                                                        maxLength={150}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} className='me-2'>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className='text-700 text-uppercase'>Project Description <span className="text-danger">*</span> </Form.Label>
                                                    {/* <Form.Control
                        as="textarea"
                        value={form.project_description}
                        required
                        name="project_description"
                        onChange={(e) => { handleChange(e) }}
                        placeholder="Need a Fabricator who's Specialize in this field"
                        rows={8} /> */}
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
                                                    <p className='mt-2' style={{ fontSize: '12px' }}>Be Descriptive , Projects with good descriptions are more popular with our Traders</p>
                                                </Form.Group>
                                            </Col>
                                            {/* Upload Samples */}
                                            <Form.Label className='text-700 text-uppercase'>
                                                Upload Samples & Other Helpful
                                            </Form.Label>
                                            <Card>
                                                <Card.Body>
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
                                                </Card.Body>
                                            </Card>
                                            {/* Upload Samples */}
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Budget Type <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        value={form.budget_type}
                                                        required
                                                        name="budget_type"
                                                        onChange={(e) => { handleChange(e) }}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="Fixed Price">Fixed Price   </option>
                                                        <option value="Range">Range</option>
                                                        <option value="No Idea">No Idea</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Currency <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        value={form.currency}
                                                        required
                                                        name="currency"
                                                        onChange={(e) => { handleChange(e) }}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="£ GBP">£ GBP </option>
                                                        <option value="£ EUR">£ EUR</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Budget <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={form.budget}
                                                        required
                                                        name="budget"
                                                        onChange={(e) => { handleChange(e) }}

                                                        placeholder="£ 0"
                                                        type="number"
                                                    />
                                                    <div className='row'>
                                                        <div className="col">
                                                            {form.budget_type == "No Idea" ? (
                                                                <>
                                                                    <Form.Group className='mt-2'>
                                                                        <Form.Label>Max Budget<span className="ms-1 text-danger">*</span></Form.Label>
                                                                        <Form.Control className='d-block' value={form.max_budget} required name="max_budget" onChange={(e) => { handleChange(e) }} placeholder="£ 0" type="number" />
                                                                    </Form.Group>
                                                                </>
                                                            ) : ("")}
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} className=''>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className='text-700 text-uppercase'>Project Location <span className="text-danger">*</span> </Form.Label>
                                                    <Form>
                                                        <Form.Group>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder="Search for UK county..."
                                                                value={inputValue}
                                                                onChange={handleInputChange}
                                                            />
                                                            {filteredCounties.length > 0 && (
                                                                <ListGroup className="mt-1">
                                                                    {filteredCounties.map((county) => (
                                                                        <ListGroup.Item
                                                                            key={county}
                                                                            action
                                                                            onClick={() => handleCountySelect(county)}
                                                                        >
                                                                            {county}
                                                                        </ListGroup.Item>
                                                                    ))}
                                                                </ListGroup>
                                                            )}
                                                        </Form.Group>
                                                    </Form>

                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Post Code<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={form.postcode}
                                                        required
                                                        name="postcode"
                                                        onChange={(e) => { handleChange(e) }}

                                                        type='text'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Starting Date
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={form.startdate}
                                                        required
                                                        name="startdate"
                                                        onChange={(e) => { handleChange(e) }}

                                                        type='date'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group className='mb-3 mt-2'>
                                                    <Form.Label className='text-700 d-block text-uppercase'>
                                                        Project Visibility <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Check
                                                        type='radio'
                                                        id="radio-btn"
                                                        onChange={(e) => { handleChange(e) }}
                                                        name="visibility"
                                                        value="public"
                                                        className='d-inline-block'
                                                    >
                                                        <Form.Check.Input name="visibility" type="radio" />
                                                        <Form.Check.Label
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span >(All Traders can view the project post and send proposals)</span></span>
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Form.Group>
                                                <Form.Group className=''>
                                                    <Form.Check
                                                        type='radio'
                                                        id="radio-btn"
                                                        onChange={(e) => { handleChange(e) }}
                                                        name="visibility"
                                                        value="private"
                                                        className='d-inline-block'
                                                    >
                                                        <Form.Check.Input name="visibility" type="radio" />
                                                        <Form.Check.Label
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span>(Only Traders that you specifically invite can view the project post and send proposal)</span></span>
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700  text-uppercase'>
                                                        Project Duration Time <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={form.project_duration}
                                                        required
                                                        disabled
                                                        name="project_duration"
                                                        onChange={(e) => { handleChange(e) }}
                                                        type='text'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className='text-700  text-uppercase'>
                                                        Expiry Date <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Control
                                                        value={form.expire_date}
                                                        required
                                                        name="expire_date"
                                                        onChange={(e) => { handleChange(e) }}
                                                        type='date'
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs="auto">
                                                <Form.Check type="checkbox" className="mb-0">
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="cursor-pointer "
                                                    />
                                                    <Form.Check.Label className="mb-0 text-700">
                                                        I Agree the
                                                        <Link to="/termsofuse">
                                                            <span className='ms-1'>Terms & Conditions</span>
                                                        </Link>
                                                    </Form.Check.Label>
                                                </Form.Check>
                                            </Col>
                                            <Col lg={12} className=''>
                                                <div className='d-flex justify-content-start'>
                                                    <Button
                                                        onClick={handleShow1}

                                                        className='d-block border-0 bg-success'
                                                    >Post Project</Button>

                                                    <Button onClick={() => setShowModal(true)} className='d-block ms-3 border-0 bg-danger'>Cancel</Button>


                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card >
                                {/* Post A Project */}
                                <Modal show={showModal} onHide={handleClose}>
                                    <Modal.Header >
                                        <Modal.Title>Warning</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p className='text-capitalize'>
                                            Are you sure you want to cancel without posting the project?
                                        </p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            No
                                        </Button>
                                        <Link to="/projects">
                                            <Button variant="danger" onClick={handleClose}>
                                                Yes
                                            </Button>
                                        </Link>
                                    </Modal.Footer>
                                </Modal>
                                {/* Modal */}
                                {/* ---------------- */}
                                <Modal size="lg" show={show1} onHide={handleClose1}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Project Summary</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {/*  */}
                                        <Row className="gx-2 gy-3">
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        category <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900 text-capitalize">Attic</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        sub-category <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900 text-capitalize">Worktop</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} className='me-2 '>
                                                <Form.Group controlId="courseTitle">
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        project title <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900 text-uppercase">WHITE ATTICA SUPERNATURAL QUARTZ</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} className='me-2'>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className='text-700 text-uppercase'>Project Description <span className="text-danger">*</span> </Form.Label>
                                                    <p className="text-900 text-justify">White Attica Supernatural Quartz has a crisp white base featured with an
                                                        intricate veiny pattern. This quartz slab has a super sleek look in polished
                                                        finish which
                                                        is more enhanced by the distinct black veins which have been manufactured to look fit for classy modern settings. The deep dark veins create remarkable designs in your interior spaces. It feels like a dream come true
                                                        when installed in kitchens, baths, entryways, laundry and mudrooms, as well as a variety of other spaces in
                                                        both residential and commercial properties. This quartz's design is meant to create a timeless statement. Aside from worktops, these slabs are ideal for room walls, showers, backsplashes, and floors. Thickness: 20mm and 30mm Finish: Polished
                                                    </p>
                                                </Form.Group>
                                            </Col>
                                            {/* Upload Samples */}

                                            <Form.Label className='text-700 text-uppercase'>
                                                Upload Sample and Other Helpful
                                            </Form.Label>
                                            <div className="col-6">
                                                <img src={file} width="50px" height="50px" className="pro-pre" />
                                                <span className="text-900 ms-3 fil-name">File Name (540 KB)</span>
                                            </div>
                                            <div className="col-6">
                                                <img src={file} width="50px" height="50px" className="pro-pre" />
                                                <span className="text-900 ms-3 fil-name">File Name (540 KB)</span>
                                            </div>
                                            {/* Upload Samples */}
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Budget Type <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900">Fixed Price</p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Currency <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900">£ GBP </p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Budget <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900">£ 200 </p>

                                                </Form.Group>
                                            </Col>
                                            <Col lg={12} className=''>
                                                <Form.Group className="mb-3">
                                                    <Form.Label className='text-700 text-uppercase'>Project Location <span className="text-danger">*</span> </Form.Label>
                                                    <p className="text-900">Buckinghamshire </p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Post Code<span className="ms-1 text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900">CD23BX </p>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={6} md={6} className=''>
                                                <Form.Group>
                                                    <Form.Label className='text-700 text-uppercase'>
                                                        Starting Date
                                                    </Form.Label>
                                                    <p className="text-900">01/01/2023 </p>
                                                </Form.Group>
                                            </Col>
                                            <Col md="12">
                                                <Form.Group className='mb-3 mt-2'>
                                                    <Form.Label className='text-700 d-block text-uppercase'>
                                                        Project Visibility <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <Form.Check
                                                        type='radio'
                                                        id="radio-btn"
                                                        onChange={(e) => { handleChange(e) }}
                                                        name="visibility"
                                                        value="public"
                                                        className='d-inline-block'
                                                    >
                                                        <Form.Check.Input name="visibility" type="radio" />
                                                        <Form.Check.Label
                                                            style={{ fontSize: '14px' }}
                                                        >
                                                            <Icon width="24" height="24" className='ms-1' icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All Traders can view the project post and send proposals)</span></span>
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </Form.Group>
                                                {/* <Form.Group className=''>
                      <Form.Check
                        type='radio'
                        id="radio-btn"
                        onChange={(e) => { handleChange(e) }}
                        name="visibility"
                        value="private"
                        className='d-inline-block'
                      >
                        <Form.Check.Input name="visibility" type="radio" />
                        <Form.Check.Label
                          style={{ fontSize: '14px' }}
                        >
                          <Icon icon="ph:lock-simple-fill" className='ms-1' width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only Traders that you specifically invite can view the
                            <p className="opt-span">project post and send proposal)</p></span></span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group> */}
                                            </Col>

                                            <Col lg={6} md={6} className=''>
                                                <Form.Group className='mb-3'>
                                                    <Form.Label className='text-700  text-uppercase'>
                                                        Expiry Date <span className="text-danger">*</span>
                                                    </Form.Label>
                                                    <p className="text-900">01/01/2023 </p>
                                                </Form.Group>
                                            </Col>

                                        </Row>


                                        {/*  */}
                                    </Modal.Body>
                                    <Modal.Footer>

                                        <Button
                                            onClick={handleClose1}
                                            type="submit"
                                            className='d-block border-0 bg-success'
                                        >Post Project
                                        </Button>

                                    </Modal.Footer>
                                </Modal>
                                {/* ---------------- */}
                            </Container>
                        </Row>
                    </Form >
                </Col>
            </Row>
        </>
    );
};


export default AddJobs;
