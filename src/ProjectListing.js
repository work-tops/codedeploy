import './App.css'
import FooterPage from './Components/FooterPage'
import HeaderPage from './Components/HeaderPage'
import JobDetails from './Components/JobDetails'
import Menubar from './Components/Menubar'
import PostPage from './Components/PostPage'
function ProjectListing(){
return(
    <>
    <HeaderPage/>
    <Menubar/>
    <PostPage/>
    <JobDetails/>
    <FooterPage/>
    </>
)
}
export default ProjectListing