import React from "react";
import profile_pic from '../../Images/employee.png'
import ai_logo from '../../Images/ai-logo.png'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
function AiMenu() {
    return (
        <>

            <img className="ai-logo mt-4" src={ai_logo} alt="ai-logo" />
            <div className="ai-dropdown-menu">
                <Link to="dashboard" role="button"><button><Icon icon="radix-icons:dashboard" /> Dashboard</button></Link>
                <Link to="allfreelancer" role="button"><button><Icon icon="gridicons:multiple-users" /> Freelancer</button></Link>
                <Link to="aiproducts" role="button"><button><Icon icon="mdi:tag" /> Products</button></Link>
                <button><Icon icon="bi:box-seam" /> Services</button>
                <Link to="alljob" role="button"><button><Icon icon="material-symbols:border-all-outline" /> Post a Job</button></Link>
                <Link to="allorders" role="button"><button><Icon icon="mingcute:box-2-line" /> Orders</button></Link>
                <button><Icon icon="material-symbols:payments-outline-sharp" /> Payments</button>
                <button><Icon icon="mdi:brightness-percent" /> Commisson</button>
            </div>
            <div className="ms-3">
                <p className="user-title">Profile</p>
                <img className="profile-picture" src={profile_pic} alt='profile-img' />
                <span className="profile-user">Jhon Daniel</span>
                <small className="user-email">jhondaniel@gmail.com</small>
                <br></br>
                <button className="user-log-out"><Icon icon="bx:log-out-circle" width="24" height="24" hFlip={true} /> Log Out</button>
            </div>
        </>
    )
}
export default AiMenu