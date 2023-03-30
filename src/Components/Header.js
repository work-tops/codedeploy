import React from "react";
import { Link } from "react-router-dom";
import '../CSS/header.css'
function Header() {
    return (
        <div className="header">
            <div>
                <img src="" alt="DECBASE-logo" />
            </div>
            <div className="others">
                <button className="post_a_project">POST A PROJECT</button>
                <div class="dropdown">
                    <a class="btn ddt dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SEARCH
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" id="dropdown-item" href="#">
                            <Link className="route-link" to='/postproject'><span className="search_span">Post</span>Project</Link>
                                <br></br>
                                <small id="small-dd">action...</small>

                            </a>

                        </li>
                        <li>
                            <a class="dropdown-item" id="dropdown-item" href="#">
                            <Link className="route-link" to='/projectlisting'><span className="search_span">Project</span>Listing</Link>
                                <br></br>
                                <small id="small-dd">action...</small></a>
                        </li>
                        <li>
                            <a class="dropdown-item" id="dropdown-item" href="#">
                            <Link className="route-link" to='/projectdetails'><span className="search_span">Job</span>Details</Link>
                                <br></br>
                                <small id="small-dd">action...</small>
                            </a>


                        </li>
                    </ul>
                </div>
                < i class="ri-heart-3-line"></i>
                <i class="ri-mail-line"></i>
                <i class="ri-notification-2-line"></i>
                <img src="" alt="profile" className="profile" />
            </div>

        </div>
    )
}
export default Header