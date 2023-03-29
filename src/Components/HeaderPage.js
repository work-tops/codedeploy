import React from "react";
import '../CSS/header.css'
function HeaderPage() {
    return (
        <div className="header">
            <div>
                <img src="" alt="DECBASE-logo" />
            </div>
            <div className="others">
                <div class="dropdown">
                    <a class="btn ddt dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                <p className="options">HOW IT WORKS</p>
                <p className="options">LOG IN</p>
                <p className="options">SIGN UP</p>
                <p className="options">FREELANCER?</p>
            </div>

        </div>
    )
}
export default HeaderPage