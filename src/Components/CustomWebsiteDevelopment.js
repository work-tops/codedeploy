import React from "react"
import currency from "../Images/Currency.png"
import newsfeed from "../Images/newsfeed.png"
import profileImg from "../Images/employee.png"
import '../CSS/customweb.css'
function ProjectInformation() {
    return (
        <>
            <div className="key-description">
                <h2 className="heading">Custom Website Development</h2>
                <ul type='none' className="key">
                    <li><i class="fa-solid fa-sterling-sign"></i>Medium Level</li>
                    <li><i class="fa-solid fa-location-dot"></i>United Kingdom</li>
                    <li><i class="fa-regular fa-building"></i>Type Fixed</li>
                    <li><i class="fa-solid fa-business-time"></i>Duration: 1 to 3 Months</li>
                    <button className="send-proposal">SEND PROPOSAL</button>
                </ul>
            </div>
            <div className="layout-1">
                <div className="prj-detail">
                    <p className="sub-title">Project Detail</p>
                    <p className="title-desc">A Custom Development Job Involves Designing,Developing,
                        And Maintaining A Unique Website Tailored To a Client's
                        Specific Needs.This Includes Tasks Such As Understanding
                        The Client's Requirements, Creating A User Interface,
                        Developing Functional Features,Optimizing Website Speed
                        and Performance , And Ensuring Website Security.The Job
                        Also Includes Testing and Debugging the Code,Implementing
                        Updates, And Providing Technical Support As Needed.
                    </p>
                    <p className="skills-req">Skills Requried</p>
                    <br></br>
                    <p className="skills">Fabrication</p>
                    <p className="skills">Templater</p>
                </div>
                <div className="economy-desc">
                    <div className="time-period">
                        <p className="ending-days">Ends In (Days)</p>
                        <p className="days-left">10</p>
                    </div>
                    <div className="sensex-euro">
                        <div className="flex">
                            <div className="img-div">
                                <img src={currency} alt="euro-currency" className="currency" />
                            </div>
                            <div>
                                <p className="amount"><i class="fa-sharp euros fa-solid fa-sterling-sign"></i>{' '}3456</p>
                                <p className="received-proposals">Client Budget</p>
                            </div>
                        </div>
                    </div>
                    <div className="sensex-euro">
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
                        <p className="emp-name">Gravita Basnal</p>
                        <p className="open-job-1">Open Jobs</p>
                        <p className="open-job-2">Open Jobs</p>
                        <p className="open-job-2">Open Jobs</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="container1">
                    <p className="clarification-board">Clarification Board</p>
                    <button className="ask-a-que">ASK A QUESTION</button>
                    <input type='text' id="msg-box" placeholder="Type Your Message Here" />
                    <div className="send-box"><button className="send">Send</button></div>
                </div>
                <div className="container2">
                    <p className="report-title">Report this Job</p>
                    <form>
                        <input type='text' id="report-box" placeholder="Select Reason" />
                        <input type='text' id="desc-box" placeholder="Description" /><i class="fa-solid fa-angle-down"></i>
                        <input type='button' className="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </>
    )
}
export default ProjectInformation