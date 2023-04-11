import React from "react";
import profile_pic from '../../Images/employee.png'
import ai_logo from '../../Images/adminpanel_logo.png'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
function AiMenu() {
    return (
        <>

            <img className="ai-logo" src={ai_logo} alt="ai-logo" />
            <div className="ai-dropdown-menu">
                <Link to="dashboard" role="button"><button><Icon icon="radix-icons:dashboard" /> Dashboard</button></Link>
                <Link to="allfreelancer" role="button"><button><Icon icon="gridicons:multiple-users" /> Freelancer</button></Link>
                <Link to="allproduct" role="button"><button><Icon icon="mdi:tag" /> Products</button></Link>
                <Link to="allservices" role="button"><button><Icon icon="bi:box-seam" /> Services</button></Link>
                <Link to="alljob" role="button"><button><Icon icon="material-symbols:border-all-outline" /> Post a Job</button></Link>
                <Link to="allorders" role="button"><button><Icon icon="mingcute:box-2-line" /> Orders</button></Link>
                <button><Icon icon="material-symbols:payments-outline-sharp" /> Payments</button>
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><Icon icon="mdi:brightness-percent" /> Commisson</button>
                <div class="dropdown">
                    <ul class="dropdown-menu">
                        <li><Link to="globalcommission" role="button"><a id="drop-list" class="dropdown-item">Global Commisson</a></Link></li>
                        <li><Link to="servicecommission" role="button"><a id="drop-list" class="dropdown-item">Services Commisson</a></Link></li>
                        <li><Link to="allcommission" role="button"><a id="drop-list" class="dropdown-item">Category Commisson Settings</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className="ms-3">
                <p className="user-title">Profile</p>
                <img className="profile-picture" src={profile_pic} alt='profile-img' />
                <span className="profile-user">Jhon Daniel</span>
                <small className="user-email">jhondaniel@gmail.com</small>
                <br></br>
                <Link to="signuppage" role="button"><button className="user-log-out"><Icon icon="bx:log-out-circle" width="24" height="24" hFlip={true} /> Log Out</button></Link>
            </div>
        </>
    )
}
export default AiMenu