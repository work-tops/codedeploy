import React from "react";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
import JobPost from "../Post/JobProposalPost";
import Footer from '../Footer/Footer'
import { Icon } from "@iconify/react";
function JobProposal() {
    return (
        <>
            <div className="row">
                <div className="col-12 prj-det-header">
                    <Header />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <JobPost />
                </div>
                <div className="col-12">
                <div className="key-description">
                <h2 className="heading">Custom Website Development</h2>
                <ul type='none' className="key">
                    <li><i className="fa-solid fa-sterling-sign"></i>Medium Level</li>
                    <li><i className="fa-solid fa-location-dot"></i>United Kingdom</li>
                    <li><i className="fa-regular fa-building"></i>Type Fixed</li>
                    <li><i className="fa-solid fa-business-time"></i>Duration: 1 to 3 Months</li>
                </ul>
            </div>
            <div className="layout-1">
                <h5 className="propos-title">Proposal Amount</h5>
                <input type="text" className="proposal-amt-box" placeholder="Enter Your Proposal Amount" /><Icon icon="gridicons:dropdown" width="24" height="24" />
                <fieldset className="proposal-fieldset">
                    <p><span className="pound-sym">(<span className="pounds">£</span>) - 0</span>
                        <span className="proposal-info">"myproject.ai" Service Fee</span>
                        <i className="fa-solid fa-circle-info info_icon"></i>
                    </p>
                </fieldset>
                <fieldset className="proposal-fieldset">
                    <p><span className="pound-sym">(<span className="pounds">£</span>) - 0</span> <span className="proposal-info-1">"Amount You'll Receive after" Service Fee education</span>
                        <i className="fa-solid fa-circle-info info_icon"></i>
                    </p>
                </fieldset>
                <p className="proposal-amt-note">Total Amount the client will see on the proposal</p>
                <select className="completion-time">
                    <option>Add Completion Time</option>
                </select>
                <br></br>
                <textarea className="cover-letter" placeholder="Cover Letter"></textarea>
                <h5 className="propos-title">Upload File (Optional)</h5>
                <div className="attachments">
                    <button>SELECT FILES</button><small>Drop file here to Upload</small>
                </div>
                <button className="proposal-send-btn">SEND</button>
            </div>
                </div>
                <div className="col-12">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default JobProposal