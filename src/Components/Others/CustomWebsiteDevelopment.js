import React from "react"
import currency from "../../Images/Currency.png"
import newsfeed from "../../Images/newsfeed.png"
import profileImg from "../../Images/employee.png"


function ProjectInformation() {
    return (
        <>
            <div className="key-description">
                <h2 className="heading">Custom Website Development</h2>
                <ul type='none' className="key">
                    <li><i className="fa-solid fa-sterling-sign"></i>Medium Level</li>
                    <li><i className="fa-solid fa-location-dot"></i>United Kingdom</li>
                    <li><i className="fa-regular fa-building"></i>Type Fixed</li>
                    <li><i className="fa-solid fa-business-time"></i>Duration: 1 to 3 Months</li>
                </ul>
            </div>
            <div className="layout-1">
                <h5 className="propos-title">Proposal Amount</h5>
                <input type="text" className="proposal-amt-box" placeholder="Enter Your Proposal Amount"/>
            </div>
        </>
    )
}
export default ProjectInformation