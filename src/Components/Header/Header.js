import React from "react";
import { Link } from "react-router-dom";
import profile from '../../Images/employee.png'

function Header() {
    return (
        <div className="header">
            <div>
                <img src="" alt="DECBASE-logo" />
            </div>
            <div className="others">
                <button className="post_a_project">POST A SERVICE</button>
                <div className="dropdown">
                    <a className="btn ddt dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SEARCH
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" id="dropdown-item" href="#">
                                <Link className="route-link" to='/postproject'><span className="search_span">Post</span>Project</Link>
                                <br></br>
                                <small id="small-dd">action...</small>

                            </a>

                        </li>
                        <li>
                            <a className="dropdown-item" id="dropdown-item" href="#">
                                <Link className="route-link" to='/projectlisting'><span className="search_span">Project</span>Listing</Link>
                                <br></br>
                                <small id="small-dd">action...</small></a>
                        </li>
                        <li>
                            <a className="dropdown-item" id="dropdown-item" href="#">
                                <Link className="route-link" to='/projectdetails'><span className="search_span">Job</span>Details</Link>
                                <br></br>
                                <small id="small-dd">action...</small>
                            </a>
                        </li>
                    </ul>
                </div>
                < i className="ri-heart-3-line"></i>
                <i className="ri-mail-line"></i>
                <i className="ri-notification-2-line"></i>
                <div className="profile-div">
                <img src={profile} alt="profile" className="post-profile" />
                </div>
            </div>

        </div>
    )
}
export default Header