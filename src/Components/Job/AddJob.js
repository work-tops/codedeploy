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
import { useHistory } from 'react-router-dom';
function AddJob() {

    //Customer Email (Javascript-Fun) 

    const history = useHistory();
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
            created_by: "1",
        }
        const response = await createData("job/new", productdata)
        if (response.status === 201) {
            toast.success('Successfully Product Added')
            history.push('/alljob');
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
        selected.splice(index, 1);
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
                                <p className="capital-title">post a job / add job</p>
                                <h4 className="ms-3 mt-1">Add Job</h4>
                                <p className="med-sub-title">Here you can add jobs listed in your store</p>

                                <form onSubmit={(e) => { formsubmit(e) }} className="add-seller-form">
                                    <label className="label-name">Customer Email</label>
                                    <input type="text" autoComplete="off" className="input-focus d-block input-box-440" value={value} onChange={onChange} />
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
                                    <div className="d-inline-block">
                                        <label className="label-name">Category</label>
                                        <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
                                            <option value="">Select</option>
                                            {cate.map((data) => (
                                                <option value={data.category}>{data.category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Sub Category</label>
                                        <select value={form.sub_category} required name="sub_category" onChange={(e) => { handleChange(e) }} className="input-focus Dropdown-box-200">
                                            <option value="">Select</option>
                                            {subcate.map((data) => (
                                                <option value={data.value}>{data.value}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <label className="label-name">Project Title</label>
                                    <input value={form.project_title} required name="project_title" onChange={(e) => { handleChange(e) }} className="input-box-440" type='text' />
                                    <label className="label-name">Description</label>
                                    <textarea value={form.project_description} required name="project_description" onChange={(e) => { handleChange(e) }} className="textarea-2"></textarea>
                                    <label className="label-name">Upload Samples</label>

                                    <label htmlFor="select-basic" className='mb-75 me-75' size='sm' color='primary'>
                                        <div className="add_job-attachments">
                                            <span className="drop-files-ph text-center">Drop file here</span>
                                            <span className="drop-files-ph">or Browse to add attachments</span>
                                            <input name="attachments" multiple onChange={handleFileInput} required type="file" id="select-basic" accept='image/*' style={{ display: 'none' }} />
                                        </div>
                                    </label>


                                    <label className="label-name">Files:</label>

                                    <table className="added-fil-table">
                                        <tr className="doc-ad-bg">
                                            {selectedFile.map((file, index) => (
<<<<<<< HEAD

=======
                                                // <div className="col">
                                                //     <img height={100} src={file} alt="dashboard" className="" />
                                                // </div>
>>>>>>> e0004006ea07582a2c3865e1d43edd5268976858
                                                <td>
                                                    <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                                    <span className="kitchen-plan-div">{file.name}</span>
                                                    <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>
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
<<<<<<< HEAD
                                    <div className="d-inline-block">
                                        <label className="label-name">Budget Type</label>
                                        <select value={form.budget_type} required name="budget_type" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200">
                                            <option value="">Select</option>
                                            <option value="Fixed Price">Fixed Price   :</option>
                                            <option value="No Idea">No Idea</option>
                                            <option value="No Range">No Range</option>
                                        </select>
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Currency</label>
                                        <select value={form.currency} required name="currency" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200">
                                            <option value="">Select</option>
                                            <option value="£ GBP">£ GBP :</option>
                                            <option value="£ EUR">£ EUR</option>
                                        </select>
                                    </div>
                                    <label className="label-name">Budget</label>
                                    <input value={form.budget} required name="budget" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" placeholder="£ 0" type="number" />

                                    <label className="label-name">Project Locations</label>

                                    <input value={form.location} required name="location" onChange={(e) => { handleChange(e) }} className="input-focus d-block input-box-440" placeholder="Geo Locations" type='text' />
                                    <div className="d-inline-block">
                                        <label className="label-name">Post Code</label>
                                        <input value={form.postcode} required name="postcode" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='text' />
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Starting Date <span className="optional">(optional)</span></label>
                                        <input value={form.startdate} required name="startdate" onChange={(e) => { handleChange(e) }} className="input-focus input-box-200" type='date' />
                                    </div>
                                    <label className="label-name">Project Visibility</label>
=======
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
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <label className="label">Budget</label>
                                            <input value={form.budget} required name="budget" onChange={(e) => { handleChange(e) }} id="postcode" placeholder="£ 0" type="number" />
                                            <br></br>
                                        </div>
                                        <div className="col">
                                            {form.budget_type == "No Idea" ? (
                                                <>
                                                    <label className="label">Max Budget</label>
                                                    <input value={form.max_budget} required name="max_budget" onChange={(e) => { handleChange(e) }} id="postcode" placeholder="£ 0" type="number" />
                                                    <br></br>
                                                </>
                                            ) : ("")}
                                        </div>
                                    </div>

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
>>>>>>> e0004006ea07582a2c3865e1d43edd5268976858
                                    <div className="prj-radio-div">
                                        <input className="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="public" type="radio" /><Icon width="24" height="24" icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                                    </div>
                                    <div className="prj-radio-div">
<<<<<<< HEAD
                                        <input className="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="public" type="radio" /><Icon icon="ph:lock-simple-fill" width="24" height="24" /> <span className="radio-opt"> Public <span className="optional">(Only freelancers that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Project Duration Time</label>
                                        <input value={form.project_duration} required name="project_duration" onChange={(e) => { handleChange(e) }} className="input-box-200 input-focus" type='text' />
                                    </div>
                                    <div className="d-inline-block">
                                        <label className="label-name">Expiry Date</label>
                                        <input value={form.expire_date} required name="expire_date" onChange={(e) => { handleChange(e) }} className="input-box-200 input-focus" type='date' />
                                    </div>
                                    <div>
                                    <button type="submit" className="create-btn">Post a Job</button>
                                    <Link to="alljob" role="button"><button className="remove-btn">Cancel</button></Link>
=======
                                        <input id="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="private" type="radio" /><Icon icon="ph:lock-simple-fill" width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only freelancers that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
>>>>>>> e0004006ea07582a2c3865e1d43edd5268976858
                                    </div>
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