import React from "react";
import profile_pic from '../../Images/employee.png'
import ai_logo from '../../Images/ai-logo.png'
import { Link } from "react-router-dom";

function AiMenu() {
    return (
        <>

            <img className="ai-logo mt-4" src={ai_logo} alt="ai-logo" />
            <div className="ai-dropdown-menu">
                <button><i className="fa-solid fa-tag"></i> Dashboard</button>
                <Link to="allfreelancer" role="button"><button><i class="fa-solid fa-users"></i> Freelancer</button></Link>
                <Link to="aiproducts" role="button"><button><i className="fa-brands fa-dropbox"></i> Products</button></Link>
                <button><i className="fa-solid fa-cube"></i> Services</button>
                <Link to="alljob" role="button"><button><i className="fa-solid fa-table"></i> Post a Job</button></Link>
                <Link to="allorders" role="button"><button><i className="fa-solid fa-shop"></i> Orders</button></Link>
                <button><i className="fa-solid fa-money-bill-wave"></i> Payments</button>
                <button><i className="fa-solid fa-percent"></i> Commisson</button>
            </div>
            <div className="ms-3">
                <p className="user-title">Profile</p>
                <img className="profile-picture" src={profile_pic} alt='profile-img' />
                <span className="profile-user">Jhon Daniel</span>
                <small className="user-email">jhondaniel@gmail.com</small>
                <br></br>
                <button className="user-log-out"><i class="fa-solid fa-right-from-bracket"></i> Log Out</button>
            </div>
        </>
    )
}
export default AiMenu