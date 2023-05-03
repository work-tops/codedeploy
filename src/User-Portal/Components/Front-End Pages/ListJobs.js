import React, {useState, useEffect} from 'react'
import Footer from '../Footer/Footer'
import HeaderPage from '../Header/SellerPortalHeader'
import Menubar from '../Menubar/Menubar'
import ListPost from '../Post/ListJobPost'
import { Link } from 'react-router-dom'
import { getAllData } from "../../../Services/ProxyService";
import ReactPaginate from 'react-paginate';
import ProjectOwnerHeader from '../Header/ProjectOwnerHeader'
import NavbarStandard from '../Header/AdvanceHeader/NavbarStandard'
// import toast, { Toaster } from 'react-hot-toast';
function ListJobs() {
    const [jobs, setjobs] = useState([])
    const [showSpinner, setShowSpinner] = useState(true);
    const Jobslist = async () => {
        const response = await getAllData('jobs/all');
        setjobs(response.data.jobs);
        setShowSpinner(false);
    }
    const getLevel = (value) => {
        if(value <= 1000){
            return "Low";
        }else if(value > 1000 || value < 3000 ){
            return "Medium";
        }else if(value > 3001){
            return "High";
        }
    }

    useEffect(() => {
        Jobslist()
    }, [])

    const [listPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * listPerPage;
    const lists = jobs.slice(pagesVisited, pagesVisited + listPerPage);
    const pageCount = Math.ceil(jobs.length / listPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <>
            <div className='row'>
                <div className='col-12 mt-5'>
                    <NavbarStandard />
                </div>
                <div className='col-12'>
                    <ListPost />
                </div>
                <div className='col-12'>
                    <br></br>
                    <div className="row">
                        <div className='col-3'>
                            <small className="title_desc">Jobs</small>
                            <div>
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
                            {/* <div className="row mt-5">
                                <div className="employee-info col-7">
                                    <p className="Name"><i class="ri-check-double-fill"></i>James Buchanon</p>
                                    <h3 className="list-heading">New L-Shape Kitchen With Island</h3>
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
                                    <Link to="/jobdetails" role="button">
                                        <button className="view">VIEW JOB</button>
                                    </Link>
                                </div>
                            </div> */}
                            <div style={{ height: '0px' }} className="text-center">
                            {showSpinner && (
                                <div
                                    className="spinner-border"
                                    role="status"
                                    style={{ width: '70px', height: '70px', fontSize: "20px", opacity: "0.7" }} // set the width and height here
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            )}
                        </div>
                             {lists.map((data, key) => (
                            <div key={key} className="row mt-5">
                                <div className="employee-info col-7">
                                    <p className="Name"><i class="ri-check-double-fill"></i>{data.customer_email}</p>
                                    <h3 className="list-heading">{data.project_title}</h3>
                                    <p className="emp-description">{data.project_description}</p>
                                    <small className="keywords">Kitchen</small>
                                    <small className="keywords">New</small>
                                    <small className="keywords">Kitchen Worktops with Island</small>

                                </div>
                                <div className="details-to-know col-4">
                                    <p className="highlights"><i class="fa-solid pound fa-sterling-sign"></i>{getLevel(data?.budget)} Level</p>
                                    <p className="highlights">{data?.location}</p>
                                    <p className="highlights"><i class="ri-folder-2-line"></i>{data?.category}</p>
                                    <p className="highlights"><i class="ri-time-fill"></i>20 to 30 days</p>
                                    <p className="highlights"><i class="ri-price-tag-3-fill"></i>Job ID:{data?._id}</p>
                                    <p className="highlights"><i class="ri-heart-3-fill"></i>Click to Save</p>
                                    <Link to={`jobdetails/${data._id}`} role="button">
                                        <button className="view">VIEW JOB</button>
                                    </Link>
                                </div>
                            </div>
                            ))}
                            
                        </div>
                    </div>
                    <div className="mt-5" >
                            <ReactPaginate
                                style={{ padding: "5px", margin: "0px", border: "none" }}
                                // previousLabel={""}
                                // nextLabel={""}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"pagination"}
                                // previousLinkClassName={"previousBttn"}
                                // nextLinkClassName={"nextBttn"}
                                disabledClassName={"disabled"}
                                activeClassName={"active"}
                                total={lists.length}
                            />
                        </div>
                    {/* <div className="btn_group">
                        <button className="previous"><i class="ri-arrow-left-s-line"></i></button>
                        <button className="page">1</button>
                        <button className="page">2</button>
                        <button className="page">3</button>
                        <button className="page">4</button>
                        <button className="page">...</button>
                        <button className="page">177</button>
                        <button className="page">178</button>
                        <button className="Next"><i class="ri-arrow-right-s-line"></i></button>
                    </div> */}
                </div>
                <div className='col-12'>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default ListJobs