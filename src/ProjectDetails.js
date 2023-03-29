import React from "react";
import HeaderPage from "./Components/HeaderPage";
import Menubar from "./Components/Menubar";
import JobPost from "./Components/JobPost";
import ProjectInformation from "./Components/CustomWebsiteDevelopment";
import FooterPageThree from "./Components/FooterPage3";
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