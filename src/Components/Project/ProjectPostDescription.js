import React from "react";
function Description() {
    return (
        <div className="project-description">
            <strong>Post A Project</strong>
            <div>
                <p className="head">Job Description</p>
                <input id="job-title" type='text' placeholder="Job Title" />
            </div>
            <div className="select-box">
                <select>
                    <option>Select Project Lavel</option>
                </select>
                <select>
                    <option>Select Job Duration</option>
                </select>
            </div>
            <div className="select-box">
                <select>
                    <option>Select Freelance Lavel</option>
                </select>
                <select>
                    <option>Select English Lavel</option>
                </select>
            </div>
            <div className="select-box">
                <select>
                    <option>Project COST</option>
                </select>
                <input id="prj_exp" type='text' placeholder="PROJECT EXPIRY DATE" />
            </div>
            <div>
                <p className="head">Job Categories</p>
                <select id="job-categories">
                    <option>Select Service Categories</option>
                </select>
            </div>
            <div className="select-box">
                <p className="head">Skills Required</p>
                <select >
                    <option>Select Response Time</option>
                </select>
                <button>ADD SKILLS</button>
            </div>
            <div>
                <p className="head">Job Description</p>
                <div className="tool_bar">
                    <div className="tool-1">
                        <button className="arrow" disabled>
                            <i className="ri-arrow-go-back-line"></i>
                        </button>
                        <button disabled>
                            <i className="ri-arrow-go-forward-line"></i>
                        </button>
                        <button>
                            <i className="ri-add-fill"></i>
                            <i className="ri-arrow-down-s-fill"></i>
                        </button>
                        <button>
                            <i className="ri-image-line"></i>
                        </button>
                        <button>
                            Formats<i className="ri-arrow-down-s-fill"></i>
                        </button>
                        <button>
                            <i className="ri-bold"></i>
                        </button>
                        <button>
                            <i className="ri-italic"></i>
                        </button>
                    </div>
                    <div className="tool-2">
                        <i className="ri-align-left"></i>
                        <i className="ri-align-center"></i>
                        <i className="ri-align-right"></i>
                        <i className="ri-align-justify"></i>
                        <i className="ri-arrow-left-s-line"></i>
                        <i className="ri-arrow-right-s-line"></i>
                    </div>
                    <input id="word-doc" type='text' />
                </div>
            </div>
            <div className="select-box">
                <p className="head">Your Location</p>
                <select>
                    <option>Your Location</option>
                </select>
                <input id="prj_exp" type='text' placeholder="Address" />
                <iframe src="https://www.google.co.in/maps/@13.1017637,80.2107071,17z" />
            </div>
            <p className="head">Your Attachments</p>
            <div className="attachments">
                <button>SELECT FILES</button><small>Drop file here to Upload</small>
            </div>
            <div className="post-project">
                <span>Save all the changes made by you<button className="post_a_project">POST A PROJECT</button></span>
            </div>
        </div>
    )
}
export default Description