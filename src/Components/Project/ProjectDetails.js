import React from "react";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
import JobPost from "../Job/JobPost";
import ProjectInformation from "../Others/CustomWebsiteDevelopment";
import Footer from '../Footer/Footer'
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
                    <ProjectInformation />
                </div>
                <div className="col-12">
                    <Footer/>
                </div>
            </div>
        </>
    )
}
export default JobProposal