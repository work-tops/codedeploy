import React from "react";
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
                                <span className="search_span">Search</span> Offers
                                <br></br>
                                <small id="small-dd">action...</small>

                            </a>

                        </li>
                        <li>
                            <a class="dropdown-item" id="dropdown-item" href="#">
                                <span className="search_span">Search</span> Freelancers
                                <br></br>
                                <small id="small-dd">action...</small></a>
                        </li>
                        <li>
                            <a class="dropdown-item" id="dropdown-item" href="#">
                                <span className="search_span">Search</span> Projects
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