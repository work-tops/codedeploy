import React, { useState, useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData, getAllData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from '@iconify/react';
import data from "../../Data/CustomerMailData";
import { uploadImage } from "../../Services/ImageService";
import { Link } from "react-router-dom";
import product_image from '../../Images/employee.png'
function AddJob() {

    //Customer Email (Javascript-Fun) 

    const [value, setValue] = useState('');
    console.log(value)

    const onChange = (event) => {

        setValue(event.target.value);

    }
    const onSearch = (searchTerm) => {

        setValue(searchTerm);
    }

    //Customer-Email Js Fun Ends// 

    const [selectedFile, setSelectedFile] = useState([]);
    const [actualFiles, setActualFile] = useState([]);
    const [uploadFiles, setUploadFile] = useState([]);
    console.log(selectedFile)

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
        const productdata = {
            customer_email: value,
            category: form.category,
            sub_category: form.sub_category,
            project_title: form.project_title,
            project_description: form.project_description,
            budget_type: form.budget_type,
            currency: form.currency,
            budget: form.budget,
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
            created_by: "1",
        }
        const response = await createData("job/new", productdata)
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
        uploadFile()
        AddJobs();
        setValue("");
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
        })
    }

    const [cate, setcate] = useState([])
    const [subcate, setsubcate] = useState([])
    const [selemail, setselemail] = useState([])


    const Jobslist = async () => {
        const response = await getAllData('master/job_category');
        setcate(response.data.master[0].data);
        // setsubcate(response.data.master[0].data.sub_category);
        // console.log(response.data.master[0].data.sub_category);
    }
    const selleremails = async () => {
        const response = await getAllData('sellers/all');
        setselemail(response.data.sellers);
        // setsubcate(response.data.master[0].data.sub_category);
        // console.log(response.data.master[0].data.sub_category);
    }
    const removeImage = async (index) => {
        var selected = [...selectedFile];
        var uploads = [...uploadFiles];
        selected.splice(index,1);
        uploads.splice(index, 1);
        setSelectedFile(selected);
        setUploadFile(uploads);
    }
    useEffect(() => {
        Jobslist()
        selleremails()
    }, [])


    return (
        <>
            <div className="add-seller-div row">
                <div className="col-2">
                    <AiMenu />
                </div>
                <div className="col-10">
                    <div>
                        <AiHeader />
                        <div className="content-div">
                            <div>
                                <p className="ai-title">post a job / add job</p>
                                <p className="ai-add-title">Add Job</p>
                                <p className="ai-title-desc">Here you can add jobs listed in your store</p>
                                <br></br>
                                <form onSubmit={(e) => { formsubmit(e) }} className="add-seller-form">
                                    <label className="label">Customer Email</label>
                                    <input type="text" autoComplete="off" id="aipro-barcode" value={value} onChange={onChange} />
                                    <div className="autocom-dropdown">
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
                                    </div>
                                    <br></br>
                                    <span className="category">Category</span> <span className="seller-email">Sub Category</span>
                                    <br></br>
                                    <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} className="select-category">
                                        <option value="">Select</option>
                                        {cate.map((data) => (
                                            <option value={data.category}>{data.category}</option>
                                        ))}
                                        {/* <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option> */}
                                    </select>
                                    <select value={form.sub_category} required name="sub_category" onChange={(e) => { handleChange(e) }} className="select-category">
                                        <option value="">Select</option>
                                        {subcate.map((data) => (
                                            <option value={data.value}>{data.value}</option>
                                        ))}

                                    </select>
                                    <br></br>
                                    <label>Project Title</label>
                                    <input value={form.project_title} required name="project_title" onChange={(e) => { handleChange(e) }} id="aipro-barcode" type='text' />
                                    <label>Description</label>
                                    <textarea value={form.project_description} required name="project_description" onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>
                                    <label>Upload Samples</label><br />

                                    <label htmlFor="select-basic" className='mb-75 me-75' size='sm' color='primary'>
                                        <div className="add_job-attachments">
                                            <span className="drop-files-ph text-center">Drop file here</span>
                                            <span className="drop-files-ph">or Browse to add attachments</span>
                                            <input name="attachments" multiple onChange={handleFileInput} required type="file" id="select-basic" accept='image/*' style={{ display: 'none' }} />
                                        </div>
                                    </label>
                                    <br />
                                    <br></br>
                                    <label className="label">Files:</label>
                                    <br></br>
                                    <table className="added-fil-table">
                                        <tr className="doc-ad-bg">
                                            {selectedFile.map((file,index) => (
                                                // <div className="col">
                                                //     <img height={100} src={file} alt="dashboard" className="" />
                                                // </div>
                                                <td>
                                                    <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                                    <span className="kitchen-plan-div">{file.name}</span>
                                                    <i className="ri-close-line upload-img-close3"  onClick={(e) => { removeImage(index) }}></i>
                                                </td>
                                            ))}
                                            <td className="d-none">
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="add-upl-pdf-btn">Add</button>
                                            </td>
                                        </tr>
                                    </table>
                                    {/* Modal-1 */}
                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div>
                                                    <p className="modal-title upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                    <p className="proadd-img-desc">to add the service images</p>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="upd-attachments">
                                                        <Icon className="upload-file-icon" data-bs-toggle="modal" data-bs-target="#exampleModal2" icon="fluent:folder-arrow-up-20-filled" width="90" height="90" />
                                                        <p className="ig-upldesc">Drag & Drop files here or choose file 50 MB max file size</p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Modal -2 */}
                                    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div>
                                                    <p className="modal-title upd-tit" id="exampleModalLabel">Upload Your File</p>
                                                    <p className="proadd-img-desc">to add the service images</p>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="upd-attachments">
                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <img src={product_image} alt="product-img" className="attached-img" />
                                                                    <i className="ri-close-line upload-img-close"></i>
                                                                </td>
                                                                <td>
                                                                    <img src={product_image} alt="product-img" className="attached-img" />
                                                                    <i className="ri-close-line upload-img-close"></i>
                                                                </td>
                                                                <td>
                                                                    <img src={product_image} alt="product-img" className="attached-img" />
                                                                    <i className="ri-close-line upload-img-close"></i>
                                                                </td>
                                                                <td>
                                                                    <img src={product_image} alt="product-img" className="attached-img" />
                                                                    <i className="ri-close-line upload-img-close"></i>
                                                                </td>
                                                                <td>
                                                                    <img src={product_image} alt="product-img" className="attached-img" />
                                                                    <i className="ri-close-line upload-img-close"></i>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <span className="category">Budget Type</span> <span className="job-currency">Currency</span>
                                    <br></br>
                                    <select value={form.budget_type} required name="budget_type" onChange={(e) => { handleChange(e) }} className="select-category">
                                        <option value="">Select</option>
                                        <option value="Fixed Price">Fixed Price   :</option>
                                        <option value="No Idea">No Idea</option>
                                        <option value="No Range">No Range</option>
                                    </select>
                                    <select value={form.currency} required name="currency" onChange={(e) => { handleChange(e) }} className="select-category">
                                        <option value="">Select</option>
                                        <option value="£ GBP">£ GBP :</option>
                                        <option value="£ EUR">£ EUR</option>
                                    </select>
                                    <br></br>
                                    <label className="label">Budget</label>
                                    <input value={form.budget} required name="budget" onChange={(e) => { handleChange(e) }} id="postcode" placeholder="£ 0" type="number" />
                                    <br></br>
                                    <label>Project Locations</label>
                                    <br></br>
                                    <input value={form.location} required name="location" onChange={(e) => { handleChange(e) }} id="aipro-barcode" placeholder="Geo Locations" type='text' />
                                    <br></br>
                                    <span className="category">Post Code</span> <span className="start-date-job">Starting Date <span className="optional">(optional)</span></span>
                                    <br></br>
                                    <input value={form.postcode} required name="postcode" onChange={(e) => { handleChange(e) }} id="postcode" type='text' />
                                    <input value={form.startdate} required name="startdate" onChange={(e) => { handleChange(e) }} id="postcode" type='date' />
                                    <br></br>
                                    <label>Project Visibility</label>
                                    <div className="prj-radio-div">
                                        <input id="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="public" type="radio" /><Icon width="24" height="24" icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                                    </div>
                                    <div className="prj-radio-div">
                                        <input id="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="public" type="radio" /><Icon icon="ph:lock-simple-fill" width="24" height="24" /> <span className="radio-opt"> Public <span className="optional">(Only freelancers that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
                                    </div>
                                    <span className="category">Project Duration Time</span> <span className="job-expiry-date">Expiry Date</span>
                                    <br></br>
                                    <input value={form.project_duration} required name="project_duration" onChange={(e) => { handleChange(e) }} id="postcode" type='text' />
                                    <input value={form.expire_date} required name="expire_date" onChange={(e) => { handleChange(e) }} id="postcode" type='date' />
                                    <br></br>
                                    <button type="submit" className="create-acc-btn">Post a Job</button>
                                    <Link to="alljob" role="button"><button className="cancel-btn">Cancel</button></Link>
                                </form >
                            </div >
                        </div >
                    </div >
                </div >
            </div >
            <Toaster />
        </>
    )
}
export default AddJob