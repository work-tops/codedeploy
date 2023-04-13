import React from "react";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
import JobPost from "../Post/JobProposalPost";
import Footer from '../Footer/Footer'
import ProposalSendingContent from "../Others/ProposalSendingContent";
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
                    <ProposalSendingContent/>
                </div>
                <div className="col-12">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default JobProposal