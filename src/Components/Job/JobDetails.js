import React from "react";


function JobDetails() {
    return (
        <>
            <div className="job-details">
                <div>
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
                            <div className="slidecontainer">
                                <input type="range" min="1" max="1000" className="slider" id="myRange" />
                            </div>
                        </div>
                        <div className="job_search">
                            <p className="job_title">Categories</p>
                            <input type='text' id="enter" placeholder="Search Category" />
                            <button className="search-category_1">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
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
                            <button className="search-category_2">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
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
                <div>
                    <div className="requirements">
                        <div className="employee-info">
                            <p className="Name"><i className="ri-check-double-fill"></i>James Buchanon</p>
                            <h3 id="product-type">New L-Shape Kitchen With Island</h3>
                            <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                and maintaining a unique website tailored to a client's specific
                                needs.This includes tasks such as understanding the clients requirements...
                            </p>
                            <small className="keywords">Kitchen</small>
                            <small className="keywords">New</small>
                            <small className="keywords">Kitchen Worktops with Island</small>

                        </div>
                        <div className="details-to-know">
                            <p className="highlights"><i className="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                            <p className="highlights">United Kingdom</p>
                            <p className="highlights"><i className="ri-folder-2-line"></i>Type Fixed</p>
                            <p className="highlights"><i className="ri-time-fill"></i>20 to 30 days</p>
                            <p className="highlights"><i className="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                            <p className="highlights"><i className="ri-heart-3-fill"></i>Click to Save</p>
                            <button className="view">VIEW JOB</button>
                        </div>
                    </div>
                    <div className="requirements">
                        <div className="employee-info">
                            <p className="Name"><i className="ri-check-double-fill"></i>James Buchanon</p>
                            <h3 id="product-type">New L-Shape Kitchen With Island</h3>
                            <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                and maintaining a unique website tailored to a client's specific
                                needs.This includes tasks such as understanding the clients requirements...
                            </p>
                            <small className="keywords">Kitchen</small>
                            <small className="keywords">New</small>
                            <small className="keywords">Kitchen Worktops with Island</small>

                        </div>
                        <div className="details-to-know">
                            <p className="highlights"><i className="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                            <p className="highlights">United Kingdom</p>
                            <p className="highlights"><i className="ri-folder-2-line"></i>Type Fixed</p>
                            <p className="highlights"><i className="ri-time-fill"></i>20 to 30 days</p>
                            <p className="highlights"><i className="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                            <p className="highlights"><i className="ri-heart-3-fill"></i>Click to Save</p>
                            <button className="view">VIEW JOB</button>
                        </div>
                    </div>
                    <div className="requirements">
                        <div className="employee-info">
                            <p className="Name"><i className="ri-check-double-fill"></i>James Buchanon</p>
                            <h3 id="product-type">New L-Shape Kitchen With Island</h3>
                            <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                and maintaining a unique website tailored to a client's specific
                                needs.This includes tasks such as understanding the clients requirements...
                            </p>
                            <small className="keywords">Kitchen</small>
                            <small className="keywords">New</small>
                            <small className="keywords">Kitchen Worktops with Island</small>

                        </div>
                        <div className="details-to-know">
                            <p className="highlights"><i className="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                            <p className="highlights">United Kingdom</p>
                            <p className="highlights"><i className="ri-folder-2-line"></i>Type Fixed</p>
                            <p className="highlights"><i className="ri-time-fill"></i>20 to 30 days</p>
                            <p className="highlights"><i className="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                            <p className="highlights"><i className="ri-heart-3-fill"></i>Click to Save</p>
                            <button className="view">VIEW JOB</button>
                        </div>
                    </div>
                    <div className="requirements">
                        <div className="employee-info">
                            <p className="Name"><i className="ri-check-double-fill"></i>James Buchanon</p>
                            <h3 id="product-type">New L-Shape Kitchen With Island</h3>
                            <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                and maintaining a unique website tailored to a client's specific
                                needs.This includes tasks such as understanding the clients requirements...
                            </p>
                            <small className="keywords">Kitchen</small>
                            <small className="keywords">New</small>
                            <small className="keywords">Kitchen Worktops with Island</small>

                        </div>
                        <div className="details-to-know">
                            <p className="highlights"><i className="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                            <p className="highlights">United Kingdom</p>
                            <p className="highlights"><i className="ri-folder-2-line"></i>Type Fixed</p>
                            <p className="highlights"><i className="ri-time-fill"></i>20 to 30 days</p>
                            <p className="highlights"><i className="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                            <p className="highlights"><i className="ri-heart-3-fill"></i>Click to Save</p>
                            <button className="view">VIEW JOB</button>
                        </div>
                    </div>
                    <div className="requirements">
                        <div className="employee-info">
                            <p className="Name"><i className="ri-check-double-fill"></i>James Buchanon</p>
                            <h3 id="product-type">New L-Shape Kitchen With Island</h3>
                            <p className="emp-description">A Custom Web Development Job involves designing,developing,
                                and maintaining a unique website tailored to a client's specific
                                needs.This includes tasks such as understanding the clients requirements...
                            </p>
                            <small className="keywords">Kitchen</small>
                            <small className="keywords">New</small>
                            <small className="keywords">Kitchen Worktops with Island</small>

                        </div>
                        <div className="details-to-know">
                            <p className="highlights"><i className="fa-solid pound fa-sterling-sign"></i>Medium Level</p>
                            <p className="highlights">United Kingdom</p>
                            <p className="highlights"><i className="ri-folder-2-line"></i>Type Fixed</p>
                            <p className="highlights"><i className="ri-time-fill"></i>20 to 30 days</p>
                            <p className="highlights"><i className="ri-price-tag-3-fill"></i>Job ID:1234MKJH</p>
                            <p className="highlights"><i className="ri-heart-3-fill"></i>Click to Save</p>
                            <button className="view">VIEW JOB</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn_group">
                <button className="previous"><i className="ri-arrow-left-s-line"></i></button>
                <button className="page">1</button>
                <button className="page">2</button>
                <button className="page">3</button>
                <button className="page">4</button>
                <button className="page">...</button>
                <button className="page">177</button>
                <button className="page">178</button>
                <button className="Next"><i className="ri-arrow-right-s-line"></i></button>
            </div>
        </>
    )
}
export default JobDetails