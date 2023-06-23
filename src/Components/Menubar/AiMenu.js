// import React from "react";
// import profile_pic from '../../Images/employee.png'
// import ai_logo from '../../Images/adminpanel_logo.png'
// import { Icon } from '@iconify/react';
// import { Link } from "react-router-dom";
// function AiMenu() {
//     return (
//         <>

//             <img className="ai-logo" src={ai_logo} alt="ai-logo" />
//             <div className="ai-dropdown-menu">
//                 <Link to="dashboard" role="button"><button><Icon icon="radix-icons:dashboard" /> Dashboard</button></Link>
//                 <Link to="allfreelancer" role="button"><button><Icon icon="gridicons:multiple-users" /> Freelancer</button></Link>
//                 <Link to="allproduct" role="button"><button><Icon icon="mdi:tag" /> Products</button></Link>
//                 <Link to="allservices" role="button"><button><Icon icon="bi:box-seam" /> Services</button></Link>
//                 <Link to="alljob" role="button"><button><Icon icon="material-symbols:border-all-outline" /> Post a Job</button></Link>
//                 <Link to="allorders" role="button"><button><Icon icon="mingcute:box-2-line" /> Orders</button></Link>
//                 <button><Icon icon="material-symbols:payments-outline-sharp" /> Payments</button>
//                 <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><Icon icon="mdi:brightness-percent" /> Commisson</button>
//                 <div class="dropdown">
//                     <ul class="dropdown-menu">
//                         <li><Link to="globalcommission" role="button"><a id="drop-list" class="dropdown-item">Global Commisson</a></Link></li>
//                         <li><Link to="servicecommission" role="button"><a id="drop-list" class="dropdown-item">Services Commisson</a></Link></li>
//                         <li><Link to="allcommission" role="button"><a id="drop-list" class="dropdown-item">Category Commisson Settings</a></Link></li>
//                         <li><Link to="allfreelancercommission" role="button"><a id="drop-list" class="dropdown-item">Freelancer Commisson Settings</a></Link></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className="ms-3">
//                 <p className="user-title">Profile</p>
//                 <img className="profile-picture" src={profile_pic} alt='profile-img' />
//                 <span className="profile-user">Jhon Daniel</span>
//                 <small className="user-email">jhondaniel@gmail.com</small>
//                 <br></br></br>
//                 <Link to="ailogin" role="button"><button className="user-log-out"><Icon icon="bx:log-out-circle" width="24" height="24" hFlip={true} /> Log Out</button></Link>
//             </div>
//         </>
//     )
// }
// export default AiMenu

import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../../User-Portal/Components/Projectimages/BathroomFitting.jpg'
import trainer from '../../User-Portal/Components/Projectimages/trainer.png'
function AdminHeader() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <nav style={{ background: '#003f6b' }} className="navbar fixed-top navbar-top navbar-expand-lg">
                        <button className="btn navbar-toggler-humburger-icon navbar-toggler  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle Navigation"><Icon icon="material-symbols:menu" color="white" width="20" height="20" /><span className="toggle-line"></span></button>
                        <a className="navbar-brand me-1 me-sm-3">
                            <div className="d-flex align-items-center">
                                <img
                                    className="logo-image"
                                    style={{ width: '110px', marginRight: '3px', marginLeft: '5px' }}
                                    title="MYPROJECT.AI"
                                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTKPFQ2xkQ7dLyfk2V8MUCOwyx2Gre0wGxHTyZaJA8svDFmGn2a-Wbvs628WHzM1B60HM3gzHf5kIDINBYUtF_PSvLzz0LM8VzqWzUsb-wDfnTkSD3j2-vvObqiX4n3sKcOiy4Si3172Y5ZGlhueKM-8UhCYFbI4Ak_pwKdPJaOWn8Ivbv8NlWcmUPfg/s600/MP-logo.png"
                                    alt="MAI Logo"
                                />
                            </div>
                        </a>
                        <div>
                        </div>

                        <div className="navbar-collapse scrollbar collapse" id="navbarStandard" >
                            <ul className=" ms-lg-5 navbar-nav" data-top-nav-dropdowns="data-top-nav-dropdowns">
                                {/* Dashboard */}
                                <li>
                                    <Link to="/dashboard" className="link-item">
                                        <a
                                            title='Dashboard'
                                            className="text-uppercase text-white nav-link"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            id="dashboards"
                                        >
                                            Dashboard
                                        </a>
                                    </Link>
                                </li>
                                {/* Dashboard */}
                                {/* Products */}
                                <li className="nav-item dropdown">
                                    <a
                                        title='Products'
                                        className="text-uppercase text-white nav-link "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="dashboards"
                                    >
                                        Products
                                    </a>
                                    <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                        <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                            <Link to="/allproduct">
                                                <a title='All Product' className="text-uppercase dropdown-item text-900 fw-medium">All Products</a>
                                            </Link>
                                            <Link to="/addproduct">
                                                <a title='Add Product' className="text-uppercase dropdown-item text-900 fw-medium">Add Products</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                {/* Products */}
                                {/* Freelancer */}
                                <li className="nav-item dropdown">
                                    <a
                                        title='Freelancer'
                                        className="text-uppercase text-white nav-link "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="dashboards"
                                    >
                                        Freelancer
                                    </a>
                                    <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                        <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                            <Link to="/allfreelancer">
                                                <a title='All Freelancer' className="text-uppercase dropdown-item text-900 fw-medium">All Freelancers</a>
                                            </Link>
                                            <Link to="/addfreelancer">
                                                <a title='Add Freelancer' className="text-uppercase dropdown-item text-900 fw-medium">Add Freelancers</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                {/* Freelancer */}
                                {/* Services */}
                                <li className="nav-item dropdown">
                                    <a
                                        title='Services'
                                        className="text-uppercase text-white nav-link "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="dashboards"
                                    >
                                        Services
                                    </a>
                                    <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                        <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                            <Link to="/allservices">
                                                <a title='All Services' className="text-uppercase dropdown-item text-900 fw-medium">All Services</a>
                                            </Link>
                                            <Link to="/addservices">
                                                <a title='Add Services' className="text-uppercase dropdown-item text-900 fw-medium">Add Services</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                {/* Services */}
                                {/* Post A Job */}
                                <li className="nav-item dropdown">
                                    <a
                                        title='Post a Job'
                                        className="text-uppercase text-white nav-link "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="dashboards"
                                    >
                                        Post A Job
                                    </a>
                                    <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                        <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                            <Link to="/alljob">
                                                <a title='All Jobs' className="text-uppercase dropdown-item text-900 fw-medium">All Jobs</a>
                                            </Link>
                                            <Link to="/addjob">
                                                <a title='Add Jobs' className="text-uppercase dropdown-item text-900 fw-medium">Add Jobs</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                {/* Post A Job */}
                                {/* Orders */}
                                <li className="nav-item dropdown">
                                    <a
                                        title='Orders'
                                        className="text-uppercase text-white nav-link "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="dashboards"
                                    >
                                        Orders
                                    </a>
                                    <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                        <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                            <Link to="/allorders">
                                                <a title='All Orders' className="text-uppercase dropdown-item text-900 fw-medium">All Orders</a>
                                            </Link>
                                            <Link to="/ShippingRate">
                                                <a title='Shipping Cost' className="text-uppercase dropdown-item text-900 fw-medium">Shipping Cost</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                {/* Orders */}
                                {/* Payments */}
                                <li>
                                    <Link to="/payments" className="link-item">
                                        <a
                                            title='Payments'
                                            className="text-uppercase text-white nav-link"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            id="dashboards"
                                        >
                                            Payments
                                        </a>
                                    </Link>
                                </li>
                                {/* Dashboard */}
                                {/* Commission */}
                                <li className="nav-item dropdown">
                                    <a
                                        title='Commission'
                                        className="text-uppercase text-white nav-link "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="dashboards"
                                    >
                                        Commission
                                    </a>
                                    <div className="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="dashboards">
                                        <div className="bg-white dark__bg-1000 rounded-3 py-2">
                                            <Link to="/globalcommission">
                                                <a title='Global Commission' className="text-uppercase dropdown-item text-900 fw-medium">Global Commission</a>
                                            </Link>
                                            <Link to="/servicecommission">
                                                <a title='Service Commission' className="text-uppercase dropdown-item text-900 fw-medium">Service Commission</a>
                                            </Link>
                                            <Link to="/allfreelancercommission">
                                                <a title='Freelancer Commission' className="text-uppercase dropdown-item text-900 fw-medium">Freelancer Commission</a>
                                            </Link>
                                            <Link to="/allcommission">
                                                <a title='Category Commission' className="text-uppercase dropdown-item text-900 fw-medium">Category Commission</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                                {/* Commission */}
                                {/* Conversation */}
                                <li>
                                    <Link to="/AllEnquires" className="link-item">
                                        <a
                                            title='Conversation'
                                            className="text-uppercase text-white nav-link"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            id="dashboards"
                                        >
                                            Conversation
                                        </a>
                                    </Link>
                                </li>
                                {/* Conversation */}
                                {/* Reviews */}
                                <li>
                                    <Link to="/AllReviews" className="link-item">
                                        <a
                                            title='Reviews'
                                            className="text-uppercase text-white nav-link"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            id="dashboards"
                                        >
                                            Reviews
                                        </a>
                                    </Link>
                                </li>
                                {/* Reviews */}

                            </ul>

                        </div>
                        <ul class="navbar-nav navbar-nav-icons ms-auto  flex-row align-items-center">

                            {/* Notifications */}
                            <Dropdown navbar={true} as="li">
                                <Dropdown.Toggle
                                    bsPrefix="toggle"
                                    as={Link}
                                    title='Notifications'
                                    to="#!"
                                    className=""
                                >
                                    <Icon icon="mdi:bell" color="white" width="20" height="20" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end  dropdown-menu-start dropdown-menu-card dropdown-menu-notification " aria-labelledby="navbarDropdownNotification" data-bs-popper="static">
                                    <div className="card card-notification  shadow-none">
                                        <div className="card-header">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-auto">
                                                    <h6 className="card-header-title mb-0">Notifications</h6>
                                                </div>
                                                <div className="col-auto ps-0 ps-sm-3"><a className="card-link fw-normal" href="#">Mark all as read</a></div>
                                            </div>
                                        </div>
                                        <div className="scrollbar-overlay" style={{ maxHeight: "19rem" }} data-simplebar="init">
                                            <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                                                <div className="simplebar-height-auto-observer-wrapper">
                                                    <div className="simplebar-height-auto-observer">
                                                    </div>
                                                </div>
                                                {/* New Messages */}
                                                <div className="simplebar-mask">
                                                    <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                                                        <div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "auto", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: '0px' }}>
                                                            <div className="list-group list-group-flush fw-normal fs--1">
                                                                <div className="list-group-title border-bottom">NEW</div>
                                                                <Link to="/chat">
                                                                    <div className="list-group-item">
                                                                        <a className="notification notification-flush notification-unread" href="#!">
                                                                            <div className="notification-avatar">
                                                                                <div className="avatar avatar-2xl me-3">
                                                                                    <img className="rounded-circle" src={profile} alt="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="notification-body">
                                                                                <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                                                                <span className="notification-time">Just now</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </Link>
                                                                <Link to="/chat">
                                                                    <div className="list-group-item">
                                                                        <a className="notification notification-flush notification-unread" href="#!">
                                                                            <div className="notification-avatar">
                                                                                <div className="avatar avatar-2xl me-3">
                                                                                    <div className="avatar-name rounded-circle"><span>AB</span></div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="notification-body">
                                                                                <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                                                                <span className="notification-time">9hr</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </Link>
                                                                {/* Earlier Messages */}
                                                                <div className="list-group-title border-bottom">EARLIER</div>
                                                                <Link to="/chat">
                                                                    <div className="list-group-item">
                                                                        <a className="notification notification-flush" href="#!">
                                                                            <div className="notification-avatar">
                                                                                <div className="avatar avatar-2xl me-3">
                                                                                    <img className="rounded-circle" src={profile} alt="" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="notification-body">
                                                                                <p className="mb-1"><strong style={{ fontSize: "14px" }}>Emma Watson</strong> replied to your comment : "Hello world"</p>
                                                                                <span className="notification-time">1d</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "513px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden", }}><div className="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar" style={{ height: "180px", display: "block", transform: "translate3d(0px, 59px, 0px)" }}></div></div></div>
                                        <div className="card-footer text-center border-top">
                                            <Link title='Click here to see your Notifications' to="/Notifications">
                                                <a className="card-link d-block">View all</a>
                                            </Link>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                            <li className="nav-item dropdown">
                                {/* Profile */}
                                <div>
                                    <Dropdown navbar={true} as="li">
                                        <Dropdown.Toggle
                                            bsPrefix="toggle"
                                            as={Link}
                                            to="#!"
                                            className="pe-0 nav-link"
                                        >
                                            <div title='Profile' className="avatar me-1 avatar-xl">
                                                <img className="rounded-circle" src={trainer} alt="" />
                                            </div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-card me-2 dropdown-menu-end">
                                            <div className="bg-white rounded-2 py-2 dark__bg-1000">
                                                <Dropdown.Item className="fw-bold text-success" href="#!">
                                                    <FontAwesomeIcon icon="crown" className="me-1" />
                                                    <span>Peter</span>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item>
                                                    Sign Out
                                                </Dropdown.Item>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </nav >
                </div>
            </div >
        </>
    )
}
export default AdminHeader