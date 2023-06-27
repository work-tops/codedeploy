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
import { Dropdown, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../../User-Portal/Components/Projectimages/BathroomFitting.jpg'
import trainer from '../../User-Portal/Components/Projectimages/trainer.png'
import logo from '../../User-Portal/Components/Projectimages/My Project white logo-01.png'
function AdminHeader() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <nav style={{ background: '#003f6b' }} className="navbar fixed-top navbar-top navbar-expand-xl">
                        <Icon icon="ci:hamburger-md" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" className="ms-3 cursor-pointer" color="white" width="24" height="24" />
                        <a className="navbar-brand me-1 me-sm-3">
                            <div className="d-flex align-items-center">
                                <img
                                    className="logo-image ms-5"
                                    style={{ width: '135px', marginRight: '3px', marginLeft: '5px' }}
                                    title="MYPROJECT.AI"
                                    src={logo}
                                    alt="MAI Logo"
                                />

                            </div>
                        </a>
                        <div>
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


            {/* <button class="btn btn-primary mb-1" type="button" >Left Offcanvas</button> */}
            <div style={{ background: '#003f6b' }} class="offcanvas offcanvas-start" id="offcanvasLeft" tabindex="-1" aria-labelledby="offcanvasLeftLabel">
                <div class="offcanvas-header">
                    <Link to="/dashboard">
                        <img
                            className="logo-image"
                            style={{ width: '135px' }}
                            title="MYPROJECT.AI"
                            src={logo}
                            alt="MAI Logo"
                        />
                    </Link>
                    <Icon icon="ion:close" className="cursor-pointer" width="24" height="24" data-bs-dismiss="offcanvas" aria-label="Close" color="white" />
                    {/* <button style={{ color: '#fff' }} class="btn-close text-reset " type="button" ></button> */}
                </div>
                {/* <hr className="text-white"></hr> */}
                <div class="offcanvas-body">
                    <Link to="/dashboard">
                        <p className="fw-semibold text-white" role="button">Dashboard</p>
                    </Link>
                    <Link to="/allproduct">
                        <p className="fw-semibold text-white" role="button">Products</p>
                    </Link>
                    <Link to="/AllTraders">
                        <p className="fw-semibold text-white" role="button">Traders</p>
                    </Link>
                    <Link to="/AllOwner">
                        <p className="fw-semibold text-white" role="button">Owners</p>
                    </Link>
                    <Link to="/AllServices">
                        <p className="fw-semibold text-white" role="button">Services</p>
                    </Link>
                    <Link to="/AllJob">
                        <p className="fw-semibold text-white" role="button">Jobs</p>
                    </Link>
                    <Link to="/AllOrders">
                        <p className="fw-semibold text-white" role="button">Orders</p>
                    </Link>
                    <div class="dropdown mb-3">
                        <a class="text-700 fw-semibold text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Commission
                        </a>

                        <ul class="dropdown-menu">
                            <li>
                                <Link to="/globalcommission">
                                    <a class="dropdown-item" href="#">Global Commission</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AllTradercommission">
                                    <a class="dropdown-item" href="#">Trader Commission</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Servicecommission">
                                    <a class="dropdown-item" href="#">Service Commission</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/AllCategoryCommission">
                                    <a class="dropdown-item" href="#">Category Commission</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/ShippingRate">
                        <p className="fw-semibold text-white" role="button">Shipping Rate</p>
                    </Link>
                    <Link to="/Payments">
                        <p className="fw-semibold text-white" role="button">Payments</p>
                    </Link>
                    <Link to="/AllReviews">
                        <p className="fw-semibold text-white" role="button">Reviews</p>
                    </Link>
                    <Link to="/AllEnquires">
                        <p className="fw-semibold text-white" role="button">Conversation</p>
                    </Link>
                </div>
            </div >
        </>
    )
}
export default AdminHeader