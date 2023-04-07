import React from "react";


function JobDetails() {
    return (
        <>
            <h5 className="propos-title">Your Project</h5>
            <fieldset className="user-project-details">
                <div className="d-flex justify-content-between">
                    <div>
                        <h6 className="ai-project-tit-frl">New Kitchen Worktops With Island</h6>
                        <p className="abt-user">Worktops.com reached 12K visitors from 2K
                            visitors in last 8 months with our internal
                            team by doing SEO-friendly work.
                        </p>
                    </div>
                    <div>
                        <div className="btn-group">
                            <button type="button" className="btn bg-white user-prj-view">View</button>
                            <button type="button" className="btn bg-primary user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
export default JobDetails
