import { React, useState } from "react";
import { Card, Row, Col, Container, Form, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import profile from '../Projectimages/Handyman.jpg'
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import profile_1 from '../Images/employee.png'
function Notifications() {
    return (
        <>
            <div className="row">
                <div className="mb-5 col-12">
                    <NavbarStandard />
                </div>
            </div>
            <div className="ms-3 me-3 mt-4 card overflow-hidden mb-3">
                <div className="card-header bg-light">
                    <div className="row flex-between-center">
                        <div className="col-sm-auto">
                            <h5 className="mb-1 mb-md-0">Your Notifications</h5>
                        </div>
                        <div className="col-sm-auto fs--1">
                            <a className="font-sans-serif ms-2 ms-sm-3" href="#!">Mark all as read</a>
                        </div>
                    </div>
                </div>
                <div className="card-body fs--1 p-0">
                    <Link to="/chat">
                        <a className="border-bottom-0 notification rounded-0 border-x-0 border-300" href="#!">
                            <div className="notification-avatar">
                                <div className="avatar avatar-xl me-3">
                                    <img className="rounded-circle" src={profile_1} alt="" />
                                </div>
                            </div>
                            <div className="notification-body">
                                <p className="mb-1">Announcing the winners of the <span className="fw-semibold">The only book awards</span> decided by you, the readers. Check out the champions and runners-up in all 21 categories now!</p>
                                <span className="notification-time">Just Now</span>
                            </div>
                        </a>
                    </Link>
                    <Link to="/chat">
                        <a className="border-bottom-0 notification-unread notification rounded-0 border-x-0 border-300" href="#!">
                            <div className="notification-avatar">
                                <div className="avatar avatar-xl me-3">
                                    <img className="rounded-circle" src={profile} alt="" />
                                </div>
                            </div>
                            <div className="notification-body">
                                <p className="mb-1">Last chance to vote in <span className="fw-semibold">The 2018 Falcon Choice Awards</span>! See what made it to the Final Round and help your favorites take home the win. Voting closes on November 26</p>
                                <span className="notification-time">15m</span>
                            </div>
                        </a>
                    </Link>
                    <Link to="/chat">
                        <a className="border-bottom-0 notification rounded-0 border-x-0 border-300" href="#!">
                            <div className="notification-avatar">
                                <div className="avatar avatar-xl me-3">
                                    <img className="rounded-circle" src={profile} alt="" />
                                </div>
                            </div>
                            <div className="notification-body">
                                <p className="mb-1"><span className="fw-semibold">Jennifer Kent</span> declared you as a <span className="fw-semibold">President</span> of Computer Science and Engineering Society</p>
                                <span className="notification-time">1h</span>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

        </>
    )
}
export default Notifications