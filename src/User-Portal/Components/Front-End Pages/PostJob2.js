import React, { useState, useEffect } from "react";
import Menubar from "../Menubar/Menubar";
import PostAJob from "../Post/PostAJobPost";
import Footer from "../Footer/Footer";
import { Icon } from "@iconify/react";
import { Link, useHistory } from "react-router-dom";
import { createData, getAllData } from "../../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';
import { uploadImage } from "../../../Services/ImageService";
import ProjectOwnerHeader from "../Header/ProjectOwnerHeader";
function PostJob2() {
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
        const productdata = {
            customer_email: "senakrrao@gmail.com",
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
            history.push('/listjobs');
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
        const response = await getAllData('sellers/all');
        setselemail(response.data.sellers);
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
            <div className="row">
                <div className="col-12">
                    <ProjectOwnerHeader />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <PostAJob />
                </div>
                <div className="col-12">
                    <form onSubmit={(e) => { formsubmit(e) }}>
                        <div className="row m-4">
                            <div className="col-7">
                                <p className="pj-pg-desc">Select a relevant category so that freelancers can find your project</p>
                                <select value={form.category} required name="category" onChange={(e) => { handleChange(e) }} className="cat-drp">
                                    <option value="">Select</option>
                                    {cate.map((data) => (
                                        <option value={data.category}>{data.category}</option>
                                    ))}
                                </select>
                                <select value={form.sub_category} required name="sub_category" onChange={(e) => { handleChange(e) }} className="cat-drp">
                                    <option value="">Select</option>
                                    {subcate.map((data) => (
                                        <option value={data.value}>{data.value}</option>
                                    ))}
                                </select>
                                <br></br>
                                <label className="label1">
                                    PROJECT TITLE:
                                </label>
                                <input value={form.project_title} required name="project_title" onChange={(e) => { handleChange(e) }} id="usr-prj-tit" placeholder="e.g I Want to Make a New Kitchen" />
                                <label className="label1">
                                    Project Description:
                                </label>
                                <textarea value={form.project_description} required name="project_description" onChange={(e) => { handleChange(e) }} placeholder="Need a Fabricator who's Specialize in this field" className="usr-prj-dec-box"></textarea>
                                <p className="usr-des-nte">Be Descriptive,Projects with good descriptions are more popular with our freelancers</p>
                                <label className="label1">
                                    Upload sample and other helpful (Optional)
                                </label>
                                <label htmlFor="select-basic" className='mb-75 me-75' size='sm' color='primary'>
                                    <div className="add_job-attachments-1">
                                        <span className="drop-files-ph text-center">Drop file here</span>
                                        <span className="drop-files-ph">or <span className="br-cl">Browse</span> to add attachments</span>
                                        <input name="attachments" multiple onChange={handleFileInput} required type="file" id="select-basic" accept='image/*' style={{ display: 'none' }} />
                                    </div>
                                </label>
                                {selectedFile.map((file, index) => (
                                    <td>
                                        <Icon className="file-ico" icon="ic:round-insert-drive-file" color="black" width="40" height="40" />
                                        <span className="kitchen-plan-div">{file.name}</span>
                                        <i className="ri-close-line upload-img-close3" onClick={(e) => { removeImage(index) }}></i>
                                    </td>
                                ))}<br/>

                                <span className="category-1">Budget Type</span> <span className="job-currency-1">Currency</span>
                                <br></br>
                                <select  value={form.budget_type} required name="budget_type" onChange={(e) => { handleChange(e) }} className="select-category-1">
                                    <option value="">Select</option>
                                    <option value="Fixed Price">Fixed Price   :</option>
                                    <option value="No Idea">No Idea</option>
                                    <option value="No Range">No Range</option>
                                </select>
                                <select value={form.currency} required name="currency" onChange={(e) => { handleChange(e) }} className="select-category-1">
                                    <option value="">Select</option>
                                    <option value="£ GBP">£ GBP :</option>
                                    <option value="£ EUR">£ EUR</option>
                                </select>
                                <div className="row">
                                        <div className="col-lg-4">
                                        <label className="label1">Budget</label>
                                <input value={form.budget} required name="budget" onChange={(e) => { handleChange(e) }} id="postcode-1" placeholder="£ 0" type="number" />
                                <br></br>
                                        </div>
                                        <div className="col">
                                            {form.budget_type == "No Idea" ? (
                                                <>
                                                   <label className="label1">Max Budget</label>
                                <input value={form.max_budget} required name="max_budget" onChange={(e) => { handleChange(e) }} id="postcode-1" placeholder="£ 0" type="number" />
                                <br></br>
                                                </>
                                            ) : ("")}
                                        </div>
                                    </div>
                               
                                <label className="label1">Project Location</label>
                                <input value={form.location} required name="location" onChange={(e) => { handleChange(e) }}  id="aipro-barcode-1" placeholder="Geo Locations" type='text' />
                                <br></br>
                                <span className="category-1">Post Code</span> <span className="start-date-job-1">Starting Date <span className="optional">(optional)</span></span>
                                <br></br>
                                <input  value={form.postcode} required name="postcode" onChange={(e) => { handleChange(e) }}  id="postcode-1" type='text' />
                                <input value={form.startdate} required name="startdate" onChange={(e) => { handleChange(e) }} id="postcode-1" type='date' />
                                <br></br>
                                <label className="label1">Project Visibility</label>
                                <br></br>
                                <div className="prj-radio-div">
                                    <input id="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="public" type="radio" /><Icon width="24" height="24" icon="gridicons:multiple-users" /> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                                </div>
                                <div className="prj-radio-div">
                                    <input id="radio-btn" onChange={(e) => { handleChange(e) }} name="visibility" value="private" type="radio" /><Icon icon="ph:lock-simple-fill" width="24" height="24" /> <span className="radio-opt"> Private <span className="optional">(Only freelancers that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
                                </div>
                                <span className="category-1">Project Duration Time</span> <span className="job-expiry-date-1">Expiry Date</span>
                                <br></br>
                                <input value={form.project_duration} required name="project_duration" onChange={(e) => { handleChange(e) }} id="postcode-1" type='text' />
                                <input value={form.expire_date} required name="expire_date" onChange={(e) => { handleChange(e) }} id="postcode-1" type='date' />
                                <br></br>
                                {/* <Link to="/listjobs" role="button"> */}
                                    <button type="submit" className="usr-create-acc-btn">Post a Project</button>
                                {/* </Link> */}
                            </div>
                            <div className="col-5">
                                <div className="n-ip-bg">
                                    <div className="n-list">
                                        <p className="n-tit">NOTE</p>
                                        <ul>
                                            <li className="nte-list">
                                                Describe your project in as much detail as you can
                                                comfortably reveal - it will increase the quality of
                                                proposals you receive and shorten the selection
                                                process.
                                            </li>
                                            <li className="nte-list">
                                                Upload as much relevant information (pictures,
                                                documents, specifications, links, etc) as possible to get
                                                a realistic quote.
                                            </li>
                                            <li className="nte-list">
                                                Match the experience level to your requirements -
                                                remember, you're looking for the best you can afford,
                                                not the cheapest you can get.
                                            </li>
                                            <li className="nte-list">
                                                For more helpful tips, see our guide Post a project
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default PostJob2