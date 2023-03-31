import React from "react";
import HeaderPage from "../Header/HeaderPage";
import Menubar from "../Menubar/Menubar";
import JobPost from "../Job/JobPost";
import ProjectInformation from "../Others/CustomWebsiteDevelopment";
import FooterPageThree from "../Footer/FooterPage3";
function ProjectDetails(){
    return(
        <>
        <HeaderPage/>
        <Menubar/>
        <JobPost/>
        <ProjectInformation/>
        <FooterPageThree/>
        </>
    )
}
export default ProjectDetails