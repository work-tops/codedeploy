import React, {useState} from "react";
import Menubar from "../Menubar/Menubar";
import JobPost from "../Post/JobProposalPost";
import Footer from '../Footer/Footer'
import { Icon } from "@iconify/react";
import { Form } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';
import ProjectOwnerHeader from "../Header/ProjectOwnerHeader";
import { createData } from "../../../Services/ProxyService";
function JobProposal() {
    const jobdatas = sessionStorage.getItem("jobdata")
    const jobdetails = JSON.parse(jobdatas)
    console.log(jobdetails)
    const [form, setform] = useState([])
    const [serviceFee, setServiceFee] = useState(20)
    const [amountUReceive, setAmountUReceive] = useState(20)
    console.log(form)

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        if(e.target.name == 'proposal_amount'){
            var _amount = serviceFee+ parseInt(e.target.value)
            setAmountUReceive(_amount);
        }
        setform(myData);
    }

    const AddJobproposal = async () => {
        const jobproposal = {
            job: jobdetails,
            proposal_amount: form.proposal_amount,
            commission: 1000,
            amount: 1000,
            completed_duration: form.completed_duration,
            cover_letter: form.cover_letter,
            attachments: [],
            created_by: "1",
        }
        const response = await createData("proposal/new", jobproposal)
        if (response.status === 201) {
            toast.success('Successfully Jobproposal Added')
            cleardata()
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        e.preventDefault();
        // uploadFile();
        AddJobproposal();
    }
    const cleardata = () => {
        setform({
            proposal_amount: "",
            commission: "",
            amount: "",
            completed_duration: "",
            cover_letter: "",
        });
    }

    // Level comparing 
    let lavel = ""
    if(jobdetails.budget < 1000){
        lavel="Low"
    }else if(jobdetails.budget > 1000 || jobdetails.budget < 3000 ){
        lavel="Medium"
    }else if(jobdetails.budget > 3001){
        lavel="High"
    }

    return (
        <>
            <div className="row">
                <div className="col-12 prj-det-header">
                    <ProjectOwnerHeader />

                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <JobPost />
                </div>
                <div className="col-12">
                    <div className="key-description">
                        <h2 className="heading">{jobdetails?.project_title}</h2>
                        <ul type='none' className="key">
                            <li><i className="fa-solid fa-sterling-sign"></i>{lavel} Level</li>
                            <li><i className="fa-solid fa-location-dot"></i>{jobdetails?.location}</li>
                            <li><i className="fa-regular fa-building"></i>{jobdetails?.category}</li>
                            <li><i className="fa-solid fa-business-time"></i>{jobdetails?.project_duration}</li>
                        </ul>
                    </div>
                    <form onSubmit={(e)=>{formsubmit(e)}}>
                        <div className="layout-1">
                            <h5 className="propos-title">Proposal Amount</h5>
                            <input required name="proposal_amount" value={form.proposal_amount} onChange={(e)=>{handleChange(e)}} type="number" className="proposal-amt-box" placeholder="Enter Your Proposal Amount" /><Icon icon="gridicons:dropdown" width="24" height="24" />
                            <fieldset className="proposal-fieldset">
                                <p><span className="pound-sym">(<span className="pounds">£</span>) - {serviceFee}</span>
                                    <span className="proposal-info">"myproject.ai" Service Fee</span>
                                    <i className="fa-solid fa-circle-info info_icon"></i>
                                </p>
                            </fieldset>
                            <fieldset className="proposal-fieldset">
                                <p><span className="pound-sym">(<span className="pounds">£</span>) - {amountUReceive}</span> <span className="proposal-info-1">"Amount You'll Receive after" Service Fee education</span>
                                    <i className="fa-solid fa-circle-info info_icon"></i>
                                </p>
                            </fieldset>
                            <p className="proposal-amt-note">Total Amount the client will see on the proposal</p>
                            <Form.Control required name="completed_duration" value={form.completed_duration} onChange={(e)=>{handleChange(e)}} type="text" className="w-50 ms-5" placeholder="Add completion time" />
                            <br></br>
                            <textarea required name="cover_letter" value={form.cover_letter} onChange={(e)=>{handleChange(e)}} className="cover-letter" placeholder="Cover Letter"></textarea>
                            <h5 className="propos-title">Upload File (Optional)</h5>
                            <div className="attachments">
                                <button type="button">SELECT FILES</button><small>Drop file here to Upload</small>
                            </div>
                            <button type="submit" className="proposal-send-btn">SEND</button>
                        </div>
                    </form>
                </div>
                <Toaster/>
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default JobProposal