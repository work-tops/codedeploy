import React, { useState, useEffect } from "react";
import AiHeader from "../Header/AiHeader";
import AiMenu from "../Menubar/AiMenu";
import { createData, getAllData } from "../../Services/ProxyService";
import toast, { Toaster } from 'react-hot-toast';


function AddJob() {

    const [form, setform] = useState([])
    // console.log(form)

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        setform(myData);
        if(e.target.name == 'category'){
            console.log(e.target.value);
            SubCategory(e.target.value);
        }
    }

    const SubCategory = async (_category)=>{
        var catg = cate.find(x=>x.category == _category);
        setsubcate(catg.sub_category);
    }

    const Addproducts = async () => {
        const productdata = {
            category: form.category,
            sub_category: form.sub_category,
            project_title: form.project_title,
            project_description: form.project_description,
            budget_type: form.budget_type,
            currency: 1000,
            budget: form.budget,
            location: form.location,
            job_status: form.job_status,
            status: form.status,
            project_duration: form.project_duration,
            expire_date: form.expire_date,
            // terms_and_condition: form.terms_and_condition,
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
        Addproducts()
    }

    const cleardata = () => {
        setform({
            category: "",
            sub_category: "",
            project_title: "",
            project_description: "",
            budget_type: "",
            currency: "",
            budget: "",
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


    const Jobslist = async () => {
        const response = await getAllData('master/job_category');
        setcate(response.data.master[0].data);
        // setsubcate(response.data.master[0].data.sub_category);
        // console.log(response.data.master[0].data.sub_category);
    }
    useEffect(() => {
        Jobslist()
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
                                <form onSubmit={(e)=>{formsubmit(e)}} className="add-seller-form">
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
                                    <input  value={form.project_title} required name="project_title" onChange={(e) => { handleChange(e) }} id="aipro-barcode" type='text' />
                                    <label>Description</label>
                                    <textarea   value={form.project_description} required name="project_description" onChange={(e) => { handleChange(e) }} id="aipro-description"></textarea>
                                    <label>Upload Samples</label>
                                    <div className="add_job-attachments">
                                        <span className="drop-files-ph">Drop file here</span>
                                        <span className="drop-files-ph">or Browse to add attachments</span>
                                    </div>
                                    <span className="category">Budget Type</span> <span className="job-currency">Currency</span>
                                    <br></br>
                                    <select value={form.budget_type} required name="budget_type" onChange={(e) => { handleChange(e) }} className="select-budget">
                                        <option value="">Select</option>
                                        <option value="FixedPrice">Fixed Price   :</option>
                                        <option value="No Idea">No Idea</option>
                                        <option value="No Range">No Range</option>
                                    </select>
                                    <select value={form.currency} required name="currency" onChange={(e) => { handleChange(e) }} className="select-budget">
                                    <option value="">Select</option>
                                        <option value="£GBP">£ GBP :</option>
                                        <option value="£ EUR">£ EUR</option>
                                    </select>
                                    <br></br>
                                    <label className="label">Budget</label>
                                    <input value={form.budget} required name="budget" onChange={(e) => { handleChange(e) }} id="postcode" placeholder="£ 0" type="number" />
                                    <br></br>
                                    <label>Project Locations</label>
                                    <input value={form.location} required name="location" onChange={(e) => { handleChange(e) }}  id="prj-locations" placeholder="Geo Locations" type='text' />
                                    <br></br>
                                    <span className="category">Post Code</span> <span className="start-date-job">Starting Date <span className="optional">(optional)</span></span>
                                    <br></br>
                                    <input value={form.postcode} required name="postcode" onChange={(e) => { handleChange(e) }} id="postcode" type='text' />
                                    <input  value={form.startdate} required name="startdate" onChange={(e) => { handleChange(e) }} id="date-to-job" type='date' />
                                    <br></br>
                                    <label>Project Visibility</label>
                                    <div className="prj-radio-div">
                                        <input id="radio-btn" name="public" type="radio" /><i class="fa-solid fa-users"></i> <span className="radio-opt">  Public <span className="optional">(All freelancers can view the project post and send proposals)</span></span>
                                    </div>
                                    <div className="prj-radio-div">
                                        <input id="radio-btn" name="public" type="radio" /><i class="fa-solid public-icon fa-users"></i> <span className="radio-opt"> Public <span className="optional">(Only freelancers that you specifically invite can view the <p className="opt-span">project post and send proposal)</p></span></span>
                                    </div>
                                    <span className="category">Project Duration Time</span> <span className="job-expiry-date">Expiry Date</span>
                                    <br></br>
                                    <input  value={form.project_duration} required name="project_duration" onChange={(e) => { handleChange(e) }} id="postcode" type='text' />
                                    <input  value={form.expire_date} required name="expire_date" onChange={(e) => { handleChange(e) }} id="date-to-job" type='date' />
                                    <br></br>
                                    <button type="submit" className="create-acc-btn">Post a Job</button>
                                    <button className="cancel-btn">Cancel</button>
                                </form>
                            </div>
                            <div className="freelance-form-div">
                                <form className="customer_details-form">
                                    <h5 className="form-title">Customer Details</h5>
                                    <label className="label">Email ID :</label>
                                    <input id="cust-ip-box" type='email' />
                                    <label className="label">Name :</label>
                                    <input id="cust-ip-box" type='text' />
                                    <label className="label">Phone Number :</label>
                                    <input id="cust-ip-box" type='text' />
                                    <label className="label">Postcode :</label>
                                    <input id="cust-ip-box" type='text' />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster/>
        </>
    )
}
export default AddJob