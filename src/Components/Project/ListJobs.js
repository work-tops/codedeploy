import React from 'react'
import Footer from '../Footer/Footer'
import HeaderPage from '../Header/HeaderPage'
import Menubar from '../Menubar/Menubar'
import ListPost from '../Post/ListPost'
function ListJobs() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <HeaderPage />
                </div>
                <div className='col-12'>
                    <Menubar />
                </div>
                <div className='col-12'>
                    <ListPost />
                </div>
                <div className='col-12'>
                    <div className="job-details row">
                        <div className='col-3'>
                            <small className="title_desc">Jobs</small>
                            <div className="flex-for-jobs">
                                <div className="job_search">
                                    <p className="job_title">Search By Geo Location</p>
                                    <input type='text' id="enter" placeholder="Geo Location" />
                                </div>
                                <div className="job_search">
                                    <p className="job_title">Search By Keyword</p>
                                    <input type='text' id="enter" placeholder="Geo Location" />
                                </div>
                                <div className="job_search">
                                    <p className="job_title">Price Range</p>
                                    <p className="price">$0-1000$</p>
                                    <div class="slidecontainer">
                                        <input type="range" min="1" max="1000" class="slider" id="myRange" />
                                    </div>
                                </div>
                                <div className="job_search">
                                    <p className="job_title">Categories</p>
                                    <input type='text' id="enter" placeholder="Search Category" />
                                    <form className="scroll">
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                    </form>

                                </div>
                                <div className="job_search">
                                    <p className="job_title">Location</p>
                                    <input type='text' id="enter" placeholder="Search Category" />
                                    <form className="scroll">
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                    </form>
                                </div>
                                <div className="job_search">
                                    <p className="job_title">Skills</p>
                                    <input type='text' id="enter" placeholder="Geo Location" />
                                    <form className="scroll">
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                    </form>
                                </div>
                                <div className="job_search">
                                    <p className="job_title">Projects Length</p>
                                    <form className="scroll">
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                        <br></br>
                                        <input type='checkbox' id="checkbox" />Kitchen Worktops
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className="row mt-5">
                                <div className="employee-info col-7">
                                    <p className="Name"><i class="ri-check-double-fill"></i>James Buchanon</p>
                                    <h3 className="ms-3">New L-Shape Kitchen With Island</h3>
                                    <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                        and maintaining a unique website tailored to a client's specific
                                        needs.This includes tasks such as understanding the clients requirements...
                                    </p>
                                    <small className="keywords">Kitchen</small>
                                    <small className="keywords">New</small>
                                    <small className="keywords">Kitchen Worktops with Island</small>

                                </div>
                                <div className="details-to-know col-4">
                                    <p className="highlights"><i class="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                                    <p className="highlights">United Kingdom</p>
                                    <p className="highlights"><i class="ri-folder-2-line"></i>Type Fixed</p>
                                    <p className="highlights"><i class="ri-time-fill"></i>20 to 30 days</p>
                                    <p className="highlights"><i class="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                                    <p className="highlights"><i class="ri-heart-3-fill"></i>Click to Save</p>
                                    <button className="view">VIEW JOB</button>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="employee-info col-7">
                                    <p className="Name"><i class="ri-check-double-fill"></i>James Buchanon</p>
                                    <h3 className="ms-3">New L-Shape Kitchen With Island</h3>
                                    <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                        and maintaining a unique website tailored to a client's specific
                                        needs.This includes tasks such as understanding the clients requirements...
                                    </p>
                                    <small className="keywords">Kitchen</small>
                                    <small className="keywords">New</small>
                                    <small className="keywords">Kitchen Worktops with Island</small>

                                </div>
                                <div className="details-to-know col-4">
                                    <p className="highlights"><i class="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                                    <p className="highlights">United Kingdom</p>
                                    <p className="highlights"><i class="ri-folder-2-line"></i>Type Fixed</p>
                                    <p className="highlights"><i class="ri-time-fill"></i>20 to 30 days</p>
                                    <p className="highlights"><i class="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                                    <p className="highlights"><i class="ri-heart-3-fill"></i>Click to Save</p>
                                    <button className="view">VIEW JOB</button>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="employee-info col-7">
                                    <p className="Name"><i class="ri-check-double-fill"></i>James Buchanon</p>
                                    <h3 className="ms-3">New L-Shape Kitchen With Island</h3>
                                    <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                        and maintaining a unique website tailored to a client's specific
                                        needs.This includes tasks such as understanding the clients requirements...
                                    </p>
                                    <small className="keywords">Kitchen</small>
                                    <small className="keywords">New</small>
                                    <small className="keywords">Kitchen Worktops with Island</small>

                                </div>
                                <div className="details-to-know col-4">
                                    <p className="highlights"><i class="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                                    <p className="highlights">United Kingdom</p>
                                    <p className="highlights"><i class="ri-folder-2-line"></i>Type Fixed</p>
                                    <p className="highlights"><i class="ri-time-fill"></i>20 to 30 days</p>
                                    <p className="highlights"><i class="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                                    <p className="highlights"><i class="ri-heart-3-fill"></i>Click to Save</p>
                                    <button className="view">VIEW JOB</button>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="employee-info col-7">
                                    <p className="Name"><i class="ri-check-double-fill"></i>James Buchanon</p>
                                    <h3 className='ms-3'>New L-Shape Kitchen With Island</h3>
                                    <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                        and maintaining a unique website tailored to a client's specific
                                        needs.This includes tasks such as understanding the clients requirements...
                                    </p>
                                    <small className="keywords">Kitchen</small>
                                    <small className="keywords">New</small>
                                    <small className="keywords">Kitchen Worktops with Island</small>

                                </div>
                                <div className="details-to-know col-4">
                                    <p className="highlights"><i class="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                                    <p className="highlights">United Kingdom</p>
                                    <p className="highlights"><i class="ri-folder-2-line"></i>Type Fixed</p>
                                    <p className="highlights"><i class="ri-time-fill"></i>20 to 30 days</p>
                                    <p className="highlights"><i class="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                                    <p className="highlights"><i class="ri-heart-3-fill"></i>Click to Save</p>
                                    <button className="view">VIEW JOB</button>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="employee-info col-7">
                                    <p className="Name"><i class="ri-check-double-fill"></i>James Buchanon</p>
                                    <h3 className="ms-3">New L-Shape Kitchen With Island</h3>
                                    <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                        and maintaining a unique website tailored to a client's specific
                                        needs.This includes tasks such as understanding the clients requirements...
                                    </p>
                                    <small className="keywords">Kitchen</small>
                                    <small className="keywords">New</small>
                                    <small className="keywords">Kitchen Worktops with Island</small>

                                </div>
                                <div className="details-to-know col-4">
                                    <p className="highlights"><i class="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                                    <p className="highlights">United Kingdom</p>
                                    <p className="highlights"><i class="ri-folder-2-line"></i>Type Fixed</p>
                                    <p className="highlights"><i class="ri-time-fill"></i>20 to 30 days</p>
                                    <p className="highlights"><i class="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                                    <p className="highlights"><i class="ri-heart-3-fill"></i>Click to Save</p>
                                    <button className="view">VIEW JOB</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="btn_group">
                        <button className="previous"><i class="ri-arrow-left-s-line"></i></button>
                        <button className="page">1</button>
                        <button className="page">2</button>
                        <button className="page">3</button>
                        <button className="page">4</button>
                        <button className="page">...</button>
                        <button className="page">177</button>
                        <button className="page">178</button>
                        <button className="Next"><i class="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>
                <div className='col-12'>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default ListJobs