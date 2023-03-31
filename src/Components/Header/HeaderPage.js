import React from "react";
import { Link } from "react-router-dom";
import '../../CSS/header.css'
function HeaderPage() {
    return (
        <div className="header">
            <div>
                <img src="" alt="DECBASE-logo" />
            </div>
            <div className="others">
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
                            <a class="dropdown-item" id="dropdown-item">
                                <Link className="route-link" to='/projectlisting'><span className="search_span">Project</span>Listing</Link>
                                <br></br>
                                <small id="small-dd">action...</small>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" id="dropdown-item" >
                                <Link className="route-link" to='/projectdetails'><span className="search_span">Job</span>Details</Link>
                                <br></br>
                                <small id="small-dd">action...</small>
                            </a>


                        </li>
                    </ul>
                </div>
                <Link><button className="options">HOW IT WORKS</button></Link>
                <Link to='/'><button className="options">LOG IN</button></Link>
                <Link to='/signupform'><button className="options">SIGN UP</button></Link>
                <Link><button className="options">FREELANCER?</button></Link>
            </div>

        </div>
    )
}
export default HeaderPage