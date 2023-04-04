import FooterPage from '../Footer/FooterPage'
import Header from '../Header/Header'
import HeaderPage from '../Header/HeaderPage'
import JobDetails from '../Job/JobDetails'
import Menubar from '../Menubar/Menubar'
import PostPage from '../Others/PostPage'
function ProjectListing(){
return(
    <div className='row'>
    <div className='col-12 prj-det-header'>
    <Header/>
    </div>
    <div className='col-12'>
    <Menubar/>
    </div>
    <div className='col-12'>
    <PostPage/>
    </div>
    <div className='col-12'>
    <JobDetails/>
    </div>
    {/* <FooterPage/> */}
    </div>
)
}
export default ProjectListing