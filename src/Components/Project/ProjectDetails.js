import React from "react";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
import JobPost from "../Job/JobPost";
import ProjectInformation from "../Others/CustomWebsiteDevelopment";
import FooterPageThree from "../Footer/FooterPage3";
function ProjectDetails() {
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
            </div>
            {/* <FooterPageThree/> */}
        </>
    )
}
export default ProjectDetails