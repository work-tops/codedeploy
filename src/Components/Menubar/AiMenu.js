import React from "react";
import profile_pic from '../../Images/employee.png'
import ai_logo from '../../Images/ai-logo.png'
import { Link } from "react-router-dom";

function AiMenu() {
    return (
        <>
            <div style={{ position: 'fixed' }}></div>
            <img className="ai-logo mt-4" src={ai_logo} alt="ai-logo" />
            <div className="ai-dropdown-menu">
                <Link to="aiproducts" role="button"><button><i className="fa-brands fa-dropbox"></i> Products</button></Link>
                <button><i class="ri-wallet-line"></i> Freelancer</button>
                <button><i class="fa-solid fa-tag"></i> Products</button>
                <button><i class="fa-solid fa-cube"></i> Services</button>
                <button><i class="fa-solid fa-table"></i> Post a Job</button>
                <button><i class="fa-solid fa-shop"></i> Orders</button>
                <button><i class="fa-solid fa-money-bill-wave"></i> Payments</button>
                <button><i class="fa-solid fa-percent"></i> Commisson</button>
            </div>
            <div>
                <p className="user-title">Profile</p>
                <img className="profile-picture" src={profile_pic} alt='profile-img' />
                <span className="profile-user">Jhon Daniel</span>
                <small className="user-email">jhondaniel@gmail.com</small>
                <button className="user-log-out"><i class="fa-solid fa-right-from-bracket"></i> Log Out</button>
            </div>
        </>
    )
}
export default AiMenu