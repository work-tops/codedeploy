import React, { useEffect, useState } from "react";
import Menubar from "../Menubar/Menubar";
import JobDetailsPost from "../Post/JobDetailsPost";
import Footer from "../Footer/Footer";
import newsfeed from "../Images/newsfeed.png"
import profileImg from "../Images/employee.png"
import currency from "../Images/Currency.png"
import { Link, useParams,useHistory } from "react-router-dom";
import { getAllData } from "../../../Services/ProxyService";
import ProjectOwnerHeader from "../Header/ProjectOwnerHeader";
import { Button, Col, Row, Modal, Form } from "react-bootstrap";
import worktops from '../../Components/Project images/Handyman.jpg'
import Divider from "../authentication/Divider";
function JobDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let { jobid } = useParams();
    const [jobdata, setJobdata] = useState([])
    const [board, setBoard] = useState(false)
    const history = useHistory();

    const showboard = () => {
        setBoard(!board)
    }
    const sendProposal = () => {
        var _token = sessionStorage.getItem("token");
        if(_token != null){
            history.push(`/jobdetails/${jobid}/jobproposal`);
        }else{
            history.push("/userlog");
        }
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

    const getJobsById = async () => {
        const response = await getAllData('job/' + jobid);
        setJobdata(response.data.job);
        sessionStorage.setItem("jobdata", JSON.stringify(response.data.job))
    }
    useEffect(() => {
        getJobsById()
    }, [])

// Date length

const today = new Date().toISOString().substr(0, 10);
const expire_date = new Date(jobdata.expire_date);
const timeDiff = expire_date.getTime() - new Date(today).getTime();
const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log(daysDiff);


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <ProjectOwnerHeader />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <JobDetailsPost />
                </div>
                <div className="col-12">
                    <div className="key-description-1">
                        <h2 className="heading">{jobdata.project_title}</h2>
                        <ul type='none' className="key">
                            <li><i class="fa-solid fa-sterling-sign"></i>{getLevel(jobdata?.budget)} Level</li>
                            <li><i class="fa-solid fa-location-dot"></i>{jobdata.location}</li>
                            <li><i class="fa-regular fa-building"></i>{jobdata.category}</li>
                            <li><i class="fa-solid fa-business-time"></i>Duration: {jobdata.project_duration}</li>
                            {/* <Link to={`/jobdetails/${jobid}/jobproposal`}> */}
                                <button className="send-proposal" onClick={()=> sendProposal()}>SEND PROPOSAL</button>
                            {/* </Link> */}
                        </ul>
                    </div>
                    <div className="job-det-cols row">
                        <div className="prj-detail col-6">
                            <p className="sub-title">Project Detail</p>
                            <p className="title-desc">{jobdata.project_description}
                            </p>
                            {/* <p className="skills-req">Skills Requried</p>
                            <br></br>
                            <p className="skills">Fabrication</p>
                            <p className="skills">Templater</p> */}
                        </div>
                        <div className="col-6 economy-desc">
                            <div>
                                <p className="ending-days">Ends In (Days)</p>
                                <p className="days-left">{daysDiff}</p>
                            </div>
                            <div>
                                <div className="flex">
                                    <div>
                                        <img src={currency} alt="euro-currency" className="currency" />
                                    </div>
                                    <div>
                                        <p className="amount"><i class="fa-sharp euros fa-solid fa-sterling-sign"></i>{' '}{jobdata.max_budget}</p>
                                        <p className="received-proposals">Client Budget</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex">
                                    <div className="img-div">
                                        <img src={newsfeed} alt="news-feed" className="news-feed" />
                                    </div>
                                    <div>
                                        <p className="num">5</p>
                                        <p className="proposal">Proposal Received</p>
                                        <p className="proposal-date">Mar 16 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="save">
                                <p className="prj-id">Project ID : : 1484KHON</p>
                                <button className="save-btn"><i class="fa-solid fa-heart"></i>{' '}Saved</button>
                            </div>
                            <div className="personal-profile">
                                <img src={profileImg} className="profile-img" alt="profile-pic" />
                                <p className="emp-name">{jobdata.customer_email}</p>
                                <p className="open-job-1">Name</p>
                                <p className="open-job-2">Profession</p>
                                <p className="open-job-2">Like</p>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="container1 col-6">
                            <div className="row">
                                <div className="col-6">
                                    <p className="clarification-board">Clarification Board</p>

                                </div>
                                <div className="col-6">
                                    <button onClick={showboard} className="ask-a-que">ASK A QUESTION</button>
                                </div>
                            </div>
                            {board == true ? (
                                <>
                                    <input type='text' id="msg-box" placeholder="Type Your Message Here" />
                                    <div className="send-box"><button className="send">Send</button></div>
                                </>
                            ) : ""}

                            {/* Special Addition by UI */}
                            <Row>
                                <Col>
                                    <Row style={{ width: '500px' }} className="mt-3 border border-dark">
                                        <Col className="mt-3" lg={3}>
                                            <img src={worktops} height="60px" width="60px" className="m-3 rounded-circle" />
                                        </Col>
                                        <Col className="mt-3" lg={8}>
                                            <p style={{ fontSize: '14px' }} className="">
                                                Hi There, Yes, | Do Have Designs And It Will Be Comfortable To Do All Task
                                                In Phases With Exact Deadlines.
                                                Can We Have A Short Meeteng To Make Communication Process Faster
                                                And Easier?
                                            </p>
                                            <Button onClick={handleShow} style={{ color: '#ff9f0f', fontSize: '14px' }} className="btn mb-3 bg-transparent border-0">Reply</Button>
                                        </Col>
                                    </Row>
                                    <Row style={{ width: '500px' }} className="mt-3 border border-dark">
                                        <Col className="mt-3" lg={3}>
                                            <img src={worktops} height="60px" width="60px" className="m-3 rounded-circle" />
                                        </Col>
                                        <Col className="mt-3" lg={8}>
                                            <p style={{ fontSize: '14px' }} className="">
                                                Hi There, Yes, | Do Have Designs And It Will Be Comfortable To Do All Task
                                                In Phases With Exact Deadlines.
                                                Can We Have A Short Meeteng To Make Communication Process Faster
                                                And Easier?
                                            </p>
                                            <Button onClick={handleShow} style={{ color: '#ff9f0f', fontSize: '14px' }} className="btn mb-3 bg-transparent border-0">Reply</Button>
                                        </Col>
                                    </Row>
                                    {/*  */}
                                    <div className='d-flex justify-content-between'>
                                        <Modal
                                            show={show}
                                            onHide={() => setShow(false)}
                                            dialogClassName="modal-lg modal-90w"

                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="example-custom-modal-styling-title">
                                                    Please Type Your Message
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form.Group className="mb-3">
                                                    <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Check className="ms-3" />
                                                    <Form.Check.Label>
                                                        I Confirm That This Message Is Essential For The Submission Of My
                                                        Proposal And | Understand That It Will Be Publicly Posted In The
                                                        Project's Clarification Board And In Case It Is Used To Spam Or
                                                        Solely Advertise My Skills, My Rankings Will Be Severely Affected.
                                                    </Form.Check.Label>
                                                </Form.Group>
                                                <div className="m-3">
                                                    <Divider />
                                                </div>
                                                <Button className="btn ms-3 mb-3 bg-transparent" style={{border:'1px solid #0d406b',color:'#0d406b'}}>
                                                    Send
                                                </Button>
                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                    {/*  */}

                                </Col>
                            </Row>

                            {/* Special Addition by UI */}

                        </div>
                        <div className="container2 col-3">
                            <p className="report-title">Report this Project</p>
                            <form>
                                <input type='text' id="report-box" placeholder="Type Reason" />
                                <input type='text' id="desc-box" placeholder="Description" />
                                <input type='button' className="submit" value='Submit' />
                            </form>
                        </div>
                    </div>
                    <br></br>
                </div>
                <div color="col-12">
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default JobDetails