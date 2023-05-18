// import { React, useState } from "react";
// import { Card, Row, Col, Container, Form, Modal, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import profile from '../Projectimages/Handyman.jpg'
// import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
// import profile_1 from '../Images/employee.png'
// function Notifications() {
//     const [show2, setShow2] = useState(false);

//     const handleClose2 = () => setShow2(false);
//     const handleShow2 = () => setShow2(true);
//     return (
//         <>
//             {/*  */}
//                 <div class="dropdown-menu dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg show" aria-labelledby="navbarDropdownNotification" data-bs-popper="static">
//                     <div class="card card-notification shadow-none">
//                         <div class="card-header">
//                             <div class="row justify-content-between align-items-center">
//                                 <div class="col-auto">
//                                     <h6 class="card-header-title mb-0">Notifications</h6>
//                                 </div>
//                                 <div class="col-auto ps-0 ps-sm-3"><a class="card-link fw-normal" href="#">Mark all as read</a></div>
//                             </div>
//                         </div>
//                         <div class="scrollbar-overlay" style={{ maxHeight: "19rem" }} data-simplebar="init">
//                             <div class="simplebar-wrapper" style={{ margin: "0px" }}>
//                                 <div class="simplebar-height-auto-observer-wrapper">
//                                     <div class="simplebar-height-auto-observer">
//                                     </div>
//                                 </div>
//                                 <div class="simplebar-mask">
//                                     <div class="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
//                                         <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "auto", overflow: "hidden scroll" }}><div class="simplebar-content" style={{ padding: '0px' }}>
//                                             <div class="list-group list-group-flush fw-normal fs--1">
//                                                 <div class="list-group-title border-bottom">NEW</div>
//                                                 <div class="list-group-item">
//                                                     <a class="notification notification-flush notification-unread" href="#!">
//                                                         <div class="notification-avatar">
//                                                             <div class="avatar avatar-2xl me-3">
//                                                                 <img class="rounded-circle" src="../../../assets/img/team/1-thumb.png" alt="" />
//                                                             </div>
//                                                         </div>
//                                                         <div class="notification-body">
//                                                             <p class="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello world 😍"</p>
//                                                             <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">💬</span>Just now</span>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                                 <div class="list-group-item">
//                                                     <a class="notification notification-flush notification-unread" href="#!">
//                                                         <div class="notification-avatar">
//                                                             <div class="avatar avatar-2xl me-3">
//                                                                 <div class="avatar-name rounded-circle"><span>AB</span></div>
//                                                             </div>
//                                                         </div>
//                                                         <div class="notification-body">
//                                                             <p class="mb-1"><strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status</p>
//                                                             <span class="notification-time">
//                                                                 <span class="me-2 fab fa-gratipay text-danger"></span>9hr</span>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                                 <div class="list-group-title border-bottom">EARLIER</div>
//                                                 <div class="list-group-item">
//                                                     <a class="notification notification-flush" href="#!">
//                                                         <div class="notification-avatar">
//                                                             <div class="avatar avatar-2xl me-3">
//                                                                 <img class="rounded-circle" src="../../../assets/img/icons/weather-sm.jpg" alt="" />
//                                                             </div>
//                                                         </div>
//                                                         <div class="notification-body">
//                                                             <p class="mb-1">The forecast today shows a low of 20℃ in California. See today's weather.</p>
//                                                             <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">🌤️</span>1d</span>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                                 <div class="list-group-item">
//                                                     <a class="border-bottom-0 notification-unread  notification notification-flush" href="#!">
//                                                         <div class="notification-avatar">
//                                                             <div class="avatar avatar-xl me-3">
//                                                                 <img class="rounded-circle" src="../../../assets/img/logos/oxford.png" alt="" />
//                                                             </div>
//                                                         </div>
//                                                         <div class="notification-body">
//                                                             <p class="mb-1"><strong>University of Oxford</strong> created an event : "Causal Inference Hilary 2019"</p>
//                                                             <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">✌️</span>1w</span>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                                 <div class="list-group-item">
//                                                     <a class="border-bottom-0 notification notification-flush" href="#!">
//                                                         <div class="notification-avatar">
//                                                             <div class="avatar avatar-xl me-3">
//                                                                 <img class="rounded-circle" src="../../../assets/img/team/10.jpg" alt="" />
//                                                             </div>
//                                                         </div>
//                                                         <div class="notification-body">
//                                                             <p class="mb-1"><strong>James Cameron</strong> invited to join the group: United Nations International Children's Fund</p>
//                                                             <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">🙋‍</span>2d</span>
//                                                         </div>
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div></div></div></div><div class="simplebar-placeholder" style={{ width: "auto", height: "513px" }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: "hidden", }}><div class="simplebar-scrollbar" style={{ width: "0px", display: "none" }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div class="simplebar-scrollbar" style={{ height: "180px", display: "block", transform: "translate3d(0px, 59px, 0px)" }}></div></div></div>
//                         <div class="card-footer text-center border-top"><a class="card-link d-block" href="../../../app/social/notifications.html">View all</a></div>
//                     </div>
//                 </div>

//         </>
//     )
// }
// export default Notifications