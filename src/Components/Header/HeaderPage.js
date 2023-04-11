import React from "react";
import Ailogo from '../../Images/Ai-logo.png'

function HeaderPage() {
    return (
        <div className="header">
            <div>
                <img src={Ailogo} alt="DECBASE-logo" width="190px" height="75px"/>
            </div>
            <div className="others">
                <div className="dropdown">
                    <a className="btn ddt dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        SEARCH
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" id="dropdown-item" href="#">
                                <span className="search_span">Post</span>Project
                                <br></br>
                                <small id="small-dd">action...</small>

                            </a>

                        </li>
                        <li>
                            <a className="dropdown-item" id="dropdown-item">
                                <span className="search_span">Project</span>Listing
                                <br></br>
                                <small id="small-dd">action...</small>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" id="dropdown-item" >
                                <span className="search_span">Job</span>Details
                                <br></br>
                                <small id="small-dd">action...</small>
                            </a>


                        </li>
                    </ul>
                </div>
                <button className="options">HOW IT WORKS</button>
                <button className="options">LOG IN</button>
                <button className="options">SIGN UP</button>
                <button className="options">FREELANCER?</button>
            </div>

        </div>
    )
}
export default HeaderPage