import React from "react";
import Ailogo from '../Images/proposal-ai-logo.png'
import { Link } from "react-router-dom";
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
                <Link to="/hiw" role="button">
                <button className="options">HOW IT WORKS</button>
                </Link>
                <Link to="/signup" role="button">
                <button className="options">LOG IN</button>
                </Link>
                <Link to="/signup" role="button">
                <button className="options">SIGN UP</button>
                </Link>
                <Link to="/frl" role="button">
                <button className="options">FREELANCER?</button>
                </Link>
            </div>

        </div>
    )
}
export default HeaderPage