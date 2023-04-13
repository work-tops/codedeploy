import React from 'react'
import Header from '../Header/Header'
import JobDetails from '../Job/JobDetails'
import Menubar from '../Menubar/Menubar'
import PostPage from '../Others/PostPage'
import Footer from '../Footer/Footer'
function ProjectListing() {
    return (
        <div className='row'>
            <div className='col-12 prj-det-header'>
                <Header />
            </div>
            <div className='col-12'>
                <Menubar />
            </div>
            <div className='col-12'>
                <PostPage />
            </div>
            <div className='col-12'>
                <JobDetails />
            </div>
            <Footer />
        </div>
    )
}
export default ProjectListing