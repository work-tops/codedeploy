import React from "react"

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
                <input type="text" className="proposal-amt-box" placeholder="Enter Your Proposal Amount" />
                <div className="dropdown proposal-amt-dd_div">
                    <button className="btn" id="dropdown-proposal-amt" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    <ul className="dropdown-menu" >
                        <li id="dd-m">
                            <fieldset className="proposal-fieldset">
                                <p><span className="pound-sym">(<span className="pounds">£</span>) - 0</span>
                                    <span className="proposal-info">"myproject.ai" Service Fee</span>
                                    <i className="fa-solid fa-circle-info info_icon"></i>
                                </p>
                            </fieldset>
                            <fieldset className="proposal-fieldset">
                                <p><span className="pound-sym">(<span className="pounds">£</span>) - 0</span> <span className="proposal-info-1">"Amount You'll Receive after" Service Fee education</span>
                                    <i className="fa-solid fa-circle-info info_icon"></i>
                                </p>
                            </fieldset>
                        </li>
                    </ul>
                </div>
                <p className="proposal-amt-note">Total Amount the client will see on the proposal</p>
                <select className="completion-time">
                    <option className="com-time-opt">Add Completion Time</option>
                </select>
                <br></br>
                <textarea className="cover-letter" placeholder="Cover Letter"></textarea>
                <h5 className="propos-title">Upload File (Optional)</h5>
                <div className="attachments">
                    <button>SELECT FILES</button><small>Drop file here to Upload</small>
                </div>
                <button className="proposal-send-btn">SEND</button>
            </div>

        </>
    )
}
export default ProjectInformation