import { React, useState, useRef } from "react";
import { Tab, Card, Modal, Form, Button, Col, Row, Tooltip, Container, OverlayTrigger, Collapse, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from '../Projectimages/Handyman.jpg'
import { Icon } from "@iconify/react";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
function Chat() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    // 
    const editorRef = useRef(null);


    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col lg={12} className="mt-5">
                        <Tab.Container
                            id="left-tabs-example"
                        >
                            <Card className="card-chat overflow-hidden mb-3">

                                <Card.Header className="d-flex justify-content-between bg-light">
                                    <h5>
                                        Messages
                                    </h5>
                                    {/* <Link to="#" onClick={handleShow5} className="font-sans-serif ms-2 ms-sm-3">
                                        Notification Settings
                                    </Link> */}
                                </Card.Header>
                                <Card.Body className="d-flex p-0 h-100">
                                    {/* ChatSidebar  */}
                                    <div className="mt-2">

                                        <div className="chat-sidebar">
                                            <div className="contacts-list " data-simplebar="init"><div className="simplebar-wrapper" style={{ margin: "0px" }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}><div className="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: "100%", overflow: "hidden scroll" }}><div className="simplebar-content" style={{ padding: "0px" }}>
                                                <div className="nav nav-tabs border-0 flex-column" role="tablist" aria-orientation="vertical">
                                                    <div className="hover-actions-trigger chat-contact nav-item active" role="tab" id="chat-link-0" data-bs-toggle="tab" data-bs-target="#chat-0" aria-controls="chat-0" aria-selected="true">
                                                        <div className="d-md-none  d-lg-block">
                                                            <div className="dropdown dropdown-active-trigger dropdown-chat"><button className="hover-actions btn btn-link btn-sm text-400 dropdown-caret-none dropdown-toggle end-0 fs-0 mt-4 me-1 z-index-1 pb-2 mb-n2" type="button" data-boundary="viewport" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg className="svg-inline--fa fa-cog fa-w-16" data-fa-transform="shrink-3 down-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.75em" }}><g transform="translate(256 256)"><g transform="translate(0, 128)  scale(0.8125, 0.8125)  rotate(0 0 0)"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" transform="translate(-256 -256)"></path></g></g></svg></button>
                                                                <div className="dropdown-menu dropdown-menu-end border py-2 rounded-2"><a className="dropdown-item" onClick={setShow2}><span>Mute</span> <Icon className="me-2" icon="ion:volume-mute" width="20" height="20" />Muted </a>
                                                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Archive <span>Archived</span></a><a className="dropdown-item text-danger" onClick={setShow3}>Delete</a>
                                                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Mark as Unread</a><a className="dropdown-item" onClick={handleShow4}><span>Block</span> <span>Unblock</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex p-3">
                                                            <div className="avatar avatar-xl status-online">
                                                                <img className="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                            <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-0 chat-contact-title">Peter Leverkus</h6><span className="message-time fs--2">Tue</span>
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <div className="chat-contact-content pe-3">Peter Leverkus
                                                                        sent
                                                                        6 photos</div>
                                                                    <div className="position-absolute bottom-0 end-0 hover-hide"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-actions-trigger chat-contact nav-item" role="tab" id="chat-link-2" data-bs-toggle="tab" data-bs-target="#chat-2" aria-controls="chat-2" aria-selected="false" tabindex="-1">
                                                        <div className="d-md-none d-lg-block">
                                                            <div className="dropdown dropdown-active-trigger dropdown-chat"><button className="hover-actions btn btn-link btn-sm text-400 dropdown-caret-none dropdown-toggle end-0 fs-0 mt-4 me-1 z-index-1 pb-2 mb-n2" type="button" data-boundary="viewport" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg className="svg-inline--fa fa-cog fa-w-16" data-fa-transform="shrink-3 down-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.75em" }}><g transform="translate(256 256)"><g transform="translate(0, 128)  scale(0.8125, 0.8125)  rotate(0 0 0)"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" transform="translate(-256 -256)"></path></g></g></svg></button>
                                                                <div className="dropdown-menu dropdown-menu-end border py-2 rounded-2"><a className="dropdown-item" onClick={setShow2}> <span>Mute</span> <Icon className="me-2" icon="ion:volume-mute" width="20" height="20" />Muted</a>
                                                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Archive <span>Archived</span></a><a className="dropdown-item text-danger" onClick={setShow3}>Delete</a>
                                                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Mark as Unread</a><a className="dropdown-item" onClick={handleShow4}><span>Block</span> <span>Unblock</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex p-3">
                                                            <div className="avatar status-away avatar-xl">
                                                                <img className="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                            <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-0 chat-contact-title">Jhon Lee</h6><span className="message-time fs--2">Sun</span>
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <div className="chat-contact-content pe-3">You: What are you doing?</div>
                                                                    <div className="position-absolute bottom-0 end-0 hover-hide"><svg className="svg-inline--fa fa-check fa-w-16 text-success" data-fa-transform="shrink-5 down-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.75em" }}><g transform="translate(256 256)"><g transform="translate(0, 128)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" transform="translate(-256 -256)"></path></g></g></svg></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="hover-actions-trigger chat-contact nav-item" role="tab" id="chat-link-2" data-bs-toggle="tab" data-bs-target="#chat-2" aria-controls="chat-2" aria-selected="false" tabindex="-1">
                                                        <div className="d-md-none d-lg-block">
                                                            <div className="dropdown dropdown-active-trigger dropdown-chat"><button className="hover-actions btn btn-link btn-sm text-400 dropdown-caret-none dropdown-toggle end-0 fs-0 mt-4 me-1 z-index-1 pb-2 mb-n2" type="button" data-boundary="viewport" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg className="svg-inline--fa fa-cog fa-w-16" data-fa-transform="shrink-3 down-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.75em" }}><g transform="translate(256 256)"><g transform="translate(0, 128)  scale(0.8125, 0.8125)  rotate(0 0 0)"><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" transform="translate(-256 -256)"></path></g></g></svg></button>
                                                                <div className="dropdown-menu dropdown-menu-end border py-2 rounded-2"><a className="dropdown-item" onClick={setShow2}> <span>Mute</span> <Icon className="me-2" icon="ion:volume-mute" width="20" height="20" />Unmute</a>
                                                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Archive <span>Archived</span></a><a className="dropdown-item text-danger" onClick={setShow3}>Delete</a>
                                                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Mark as Unread</a><a className="dropdown-item" onClick={handleShow4}><span>Block</span> <span>Unblock</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex p-3">
                                                            <div className="avatar status-away avatar-xl">
                                                                <img className="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                            <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                                <div className="d-flex justify-content-between">
                                                                    <h6 className="mb-0 chat-contact-title">Emma Watson</h6><span className="message-time fs--2">Sun</span>
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <div className="chat-contact-content pe-3">You: Hi</div>
                                                                    <div className="position-absolute bottom-0 end-0 hover-hide"><svg className="svg-inline--fa fa-check fa-w-16 text-success" data-fa-transform="shrink-5 down-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.75em" }}><g transform="translate(256 256)"><g transform="translate(0, 128)  scale(0.6875, 0.6875)  rotate(0 0 0)"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" transform="translate(-256 -256)"></path></g></g></svg></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div></div></div></div><div className="simplebar-placeholder" style={{ width: "auto", height: "739px" }}></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}><div className=" simplebar-visible" style={{ width: "0px", display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "hidden" }}><div className="simplebar-scrollbar simplebar-visible" style={{ height: "25px", transform: "translate3d(0px, 0px, 0px)", display: "block" }}></div></div></div>
                                            <form className="contacts-search-wrapper">
                                                <div className="form-group mb-0 position-relative d-md-none d-lg-block w-100 h-100"><input className="form-control form-control-sm chat-contacts-search border-0 h-100" type="text" placeholder="Search contacts ..." /><svg className="svg-inline--fa fa-search fa-w-16 contacts-search-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></div><button className="btn btn-sm btn-transparent d-none d-md-inline-block d-lg-none"><svg className="svg-inline--fa fa-search fa-w-16 fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></button>
                                            </form>
                                            {/* <ChatContactsSearch /> */}
                                            <Form className="contacts-search-wrapper">
                                                <Form.Group className="mb-0 position-relative d-md-none d-lg-block w-100 h-100">
                                                    <Form.Control
                                                        className="chat-contacts-search border-0 h-100"
                                                        placeholder="Search contacts ..."
                                                        size="sm"
                                                    />
                                                    <FontAwesomeIcon icon="search" className="contacts-search-icon" />
                                                </Form.Group>
                                                <Button
                                                    variant="transparent"
                                                    size="sm"
                                                    className="d-none d-md-inline-block d-lg-none"
                                                    type="submit"
                                                >
                                                    <FontAwesomeIcon icon="search" className="fs--1" />
                                                </Button>
                                            </Form>
                                        </div>
                                    </div>
                                    {/* <ChatContactsSearch /> */}

                                    {/* <ChatContent /> */}

                                    {/* ChatContentHeader */}
                                    <div className="card-chat-content">
                                        <div className="card-chat-pane">
                                            <div className="chat-content-header">
                                                {/* <Row className="">
                                                    <Col xs={6} md={8} className=""> */}
                                                <div
                                                    className="pe-3 text-700 d-md-none contacts-list-show cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon="chevron-left" />
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="min-w-0">
                                                            <h5 className="mb-0 text-truncate fs-0">Peter Leverkus</h5>
                                                            <div className="fs--2 text-400">
                                                                Active 7h ago
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <Form.Group className="">
                                                            <Form.Label>
                                                                Filter by Messages
                                                            </Form.Label>
                                                            <Form.Control type="text" placeholder="Search Messages" className="form-control-sm mr-sm-2" />
                                                        </Form.Group>
                                                    </div>
                                                    <div className="col">
                                                        <Form.Group className="">
                                                            <Form.Label>
                                                                Filter by Date
                                                            </Form.Label>
                                                            <Form.Control type="date" className="form-control-sm mr-sm-2" />
                                                        </Form.Group>
                                                    </div>
                                                </div>

                                                {/* </Col>

                                                </Row> */}
                                            </div>

                                            {/*  */}
                                            <div className="chat-content-body" style={{ display: "inherit" }}>
                                                <div className="conversation-info" data-index="0">
                                                    <div className="h-100 overflow-auto scrollbar">
                                                        <div className="d-flex position-relative align-items-center p-3 border-bottom">
                                                            <div className="avatar avatar-xl status-online">
                                                                <img className="rounded-circle" src={profile} alt="" />
                                                            </div>
                                                            <div className="flex-1 ms-2 d-flex flex-between-center">
                                                                <h6 className="mb-0"><a className="text-decoration-none stretched-link text-700" href="../pages/user/profile.html">Peter Leverkus</a></h6>
                                                                <div className="dropdown z-index-1"><button className="btn btn-link btn-sm text-400 dropdown-toggle dropdown-caret-none me-n3" type="button" id="profile-dropdown-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg className="svg-inline--fa fa-cog fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg></button>
                                                                    <div className="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="profile-dropdown-0"><a className="dropdown-item" href="#!">Mute</a>
                                                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="#!">Archive</a><a className="dropdown-item text-danger" href="#!">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="px-3 pt-2">
                                                            <div className="nav flex-column font-sans-serif fw-medium">
                                                                <a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!">
                                                                    <span className="conversation-info-icon">
                                                                        <svg className="svg-inline--fa fa-search fa-w-16 me-1" data-fa-transform="shrink-1 down-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.6875em" }}>
                                                                            <g transform="translate(256 256)">
                                                                                <g transform="translate(0, 96)  scale(0.9375, 0.9375)  rotate(0 0 0)">
                                                                                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" transform="translate(-256 -256)"></path></g></g></svg>
                                                                    </span>
                                                                    Search in Conversation
                                                                </a>
                                                                <a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!">
                                                                    <span className="conversation-info-icon">
                                                                        <svg className="svg-inline--fa fa-pencil-alt fa-w-16 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.5em" }}>
                                                                            <g transform="translate(256 256)">
                                                                                <g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)">
                                                                                    <path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" transform="translate(-256 -256)"></path></g></g></svg>
                                                                    </span>
                                                                    Edit Nicknames
                                                                </a>
                                                                <a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!">
                                                                    <span className="conversation-info-icon">
                                                                        <svg className="svg-inline--fa fa-palette fa-w-16 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.5em" }}><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" transform="translate(-256 -256)"></path></g></g></svg>
                                                                    </span>
                                                                    <span>Change Color</span>
                                                                </a>
                                                                <a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!">
                                                                    <span className="conversation-info-icon">
                                                                        <svg className="svg-inline--fa fa-thumbs-up fa-w-16 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{ transformOrigin: "0.5em 0.5em" }}>
                                                                            <g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" transform="translate(-256 -256)"></path></g></g></svg></span>Change Emoji</a><a className="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span className="conversation-info-icon"><svg className="svg-inline--fa fa-bell fa-w-14 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" style={{ transformOrigin: '0.4375em 0.5em' }}><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" transform="translate(-224 -256)"></path></g></g></svg>
                                                                            </span>Notifications</a>
                                                            </div>
                                                        </div>
                                                        <hr className="my-2" />
                                                        <div className="px-3" id="others-info-0">
                                                            <div className="title" id="shared-media-title-0"><a className="btn btn-link btn-accordion hover-text-decoration-none dropdown-indicator" href="#shared-media-0" data-bs-toggle="collapse" aria-expanded="false" aria-controls="shared-media-0">Shared media</a></div>
                                                            <div className="collapse" id="shared-media-0" aria-labelledby="shared-media-title-0" data-parent="#others-info-0">
                                                                <div className="row mx-n1">
                                                                    <div className="col-6 col-md-4 px-1"><a href={profile} data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src={profile} alt="" /></a></div>
                                                                    <div className="col-6 col-md-4 px-1"><a href={profile} data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src={profile} alt="" /></a></div>
                                                                    <div className="col-6 col-md-4 px-1"> <a href={profile} data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src={profile} alt="" /></a></div>
                                                                    <div className="col-6 col-md-4 px-1"> <a href={profile} data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src={profile} alt="" /></a></div>
                                                                    <div className="col-6 col-md-4 px-1"> <a href={profile} data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src={profile} alt="" /></a></div>
                                                                    <div className="col-6 col-md-4 px-1"> <a href={profile} data-gallery="images-1"><img className="img-fluid rounded-1 mb-2" src={profile} alt="" /></a></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-content-scroll-area scrollbar">
                                                    <div className="d-flex position-relative p-3 border-bottom mb-3 align-items-center">

                                                        <div className="avatar avatar-2xl status-online me-3">
                                                            <img className="rounded-circle" src={profile} alt="" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <Link to="/profile_publicview">
                                                                <h6 className="mb-0"><a className="text-decoration-none stretched-link text-700">Peter Leverkus</a></h6>
                                                            </Link>
                                                            <p className="mb-0">You friends with Peter Leverkus. Say hi to start the conversation</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-center fs--2 text-500"><span>May 5, 2019, 11:54 am</span></div>
                                                    <div className="d-flex p-3">
                                                        <div className="avatar avatar-l me-2">
                                                            <Link to="/profile_publicview">
                                                                <img className="rounded-circle" src={profile} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex align-items-center">
                                                                    <div className="chat-message bg-200 p-2 rounded-2">Yes, in an organization stature, this is a must. Besides, we need to quickly establish all other professional appearances, e.g., having a website where members’ profile will be displayed along with additional organizational information. Providing services to existing members is more important than attracting new members at this moment, in my opinion..</div>
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="text-400 fs--2"><span>11:54 am</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3">
                                                        <div className="avatar avatar-l me-2">
                                                            <Link to="/profile_publicview">
                                                                <img className="rounded-circle" src={profile} alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex align-items-center">
                                                                    <div className="chat-message bg-200 p-2 rounded-2">What are you doing?</div>
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="text-400 fs--2"><span>11:54 am</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3">
                                                        <div className="flex-1 d-flex justify-content-end">
                                                            <div className="w-100 w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex flex-end-center">
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                                                        <li className="list-inline-item"><a><li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li></a></li></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                    <div className="bg-primary text-white p-2 rounded-2 chat-message light">
                                                                        <p className="mb-0">I took this pic </p>
                                                                        <a href={profile} data-gallery="gallery-3">
                                                                            <img className="rounded" src={profile} alt="" width="150" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="text-400 fs--2 text-end">11:54 am<svg className="svg-inline--fa fa-check fa-w-16 ms-2 text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3">
                                                        <div className="flex-1 d-flex justify-content-end">
                                                            <div className="w-100 w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex flex-end-center">
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                    <div className="bg-primary text-white p-2 rounded-2 chat-message light">Nothing!</div>
                                                                </div>
                                                                <div className="text-400 fs--2 text-end">11:54 am<svg className="svg-inline--fa fa-check fa-w-16 ms-2 text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-center fs--2 text-500"><span>May 6, 2019, 11:54 am</span></div>
                                                    <div className="d-flex p-3">
                                                        <div className="avatar avatar-l me-2">
                                                            <img className="rounded-circle" src={profile} alt="" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex align-items-center">
                                                                    <div className="chat-message bg-200 p-2 rounded-2">How are you?</div>
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="text-400 fs--2"><span>11:54 am</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3">
                                                        <div className="flex-1 d-flex justify-content-end">
                                                            <div className="w-100 w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex flex-end-center">
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                    <div className="bg-primary text-white p-2 rounded-2 chat-message light">Fine</div>
                                                                </div>
                                                                <div className="text-400 fs--2 text-end">11:54 am<svg className="svg-inline--fa fa-check-double fa-w-16 ms-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-double" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"></path></svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-center fs--2 text-500"><span>May 7, 2019, 11:54 am</span></div>
                                                    <div className="d-flex p-3">
                                                        <div className="flex-1 d-flex justify-content-end">
                                                            <div className="w-100 w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex flex-end-center">
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                    <div className="chat-message chat-gallery">
                                                                        <div className="row mx-n1">
                                                                            <div className="col-6 col-md-4 px-1" style={{ minWidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-1"><img src={profile} alt="" className="img-fluid rounded mb-2" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-1"><img src={profile} alt="" className="img-fluid rounded mb-2" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-1"><img src={profile} alt="" className="img-fluid rounded mb-2" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-1"><img src={profile} alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-1"><img src={profile} alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-1"><img src={profile} alt="" className="img-fluid rounded" /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="text-400 fs--2 text-end">11:54 am<svg className="svg-inline--fa fa-check fa-w-16 ms-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3">
                                                        <div className="avatar avatar-l me-2">
                                                            <img className="rounded-circle" src={profile} alt="" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex align-items-center">
                                                                    <div className="chat-message bg-200 p-2 rounded-2">I took some excellent images yesterday.</div>
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="text-400 fs--2"><span>11:54 am</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-center fs--2 text-500"><span>May 8, 2019, 11:54 am</span></div>
                                                    <div className="d-flex p-3">
                                                        <div className="flex-1 d-flex justify-content-end">
                                                            <div className="w-100 w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex flex-end-center">
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 me-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                    <div className="bg-primary text-white p-2 rounded-2 chat-message light">Give me the images.</div>
                                                                </div>
                                                                <div className="text-400 fs--2 text-end">11:54 am</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex p-3">
                                                        <div className="avatar avatar-l me-2">
                                                            <img className="rounded-circle" src={profile} alt="" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="w-xxl-75">
                                                                <div className="hover-actions-trigger d-flex align-items-center">
                                                                    <div className="chat-message chat-gallery">
                                                                        <div className="row mx-n1">
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-2"><img src={profile} alt="" className="img-fluid rounded mb-2" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-2"><img src={profile} alt="" className="img-fluid rounded mb-2" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-2"><img src={profile} alt="" className="img-fluid rounded mb-2" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-2"><img src={profile} alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-2"><img src={profile} alt="" className="img-fluid rounded mb-2 mb-lg-0" /></a>
                                                                            </div>
                                                                            <div className="col-6 col-md-4 px-1" style={{ minwidth: '50px' }}>
                                                                                <a href={profile} data-gallery="gallery-2"><img src={profile} alt="" className="img-fluid rounded" /></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="hover-actions position-relative list-inline mb-0 text-400 ms-2">
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Reply" data-bs-original-title="Reply"><li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Reply"><FontAwesomeIcon icon="fa-solid fa-share" flip="horizontal" /></a></li></a></li>
                                                                        <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow1} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Forward" data-bs-original-title="Forward"><svg className="svg-inline--fa fa-share fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a></li>
                                                                        {/* <li className="list-inline-item"><a className="chat-option cursor-pointer" onClick={handleShow} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><svg className="svg-inline--fa fa-edit fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg></a></li> */}
                                                                        <li className="list-inline-item"><a className="chat-option" href="#!" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Remove" data-bs-original-title="Remove"><svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="text-400 fs--2"><span>11:54 am</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/*  */}
                                        </div>

                                        {/* Archieved Chat's */}
                                        <div className="text-center text-capitalize">This Chat has Been Ended By <span style={{ color: "#003f6b" }}>Peter Leverkus</span></div>
                                        {/* Archieved Chat's */}
                                        <Form className="">
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                initialValue=""
                                                init={{
                                                    height: 150,
                                                    menubar: false,
                                                    // plugins: [
                                                    //     'advlist autolink lists link image charmap print preview anchor',
                                                    //     'searchreplace visualblocks code fullscreen',
                                                    //     'insertdatetime media table paste code help wordcount'
                                                    // ],
                                                    toolbar: 'undo redo | formatselect | ' +
                                                        'bold italic  | alignleft aligncenter ' +
                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                        'removeformat ',
                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                                }}
                                            />
                                        </Form>
                                            <div className="d-flex gap-2 justify-content-end m-3">
                                                <Button id="FileUpload1" style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                    Attachments
                                                </Button>
                                                <Button as={Link} to="/freelancer/true" style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                    Send
                                                </Button>
                                            </div>
                                    </div>


                                    {/* Edit Modal */}
                                    <Modal
                                        show={show}
                                        onHide={() => setShow(false)}
                                        dialogClassName="modal-lg modal-90w"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header>
                                            <h5 className="text-900">Edit Your Message</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                placeholder="Edit your message"
                                                className="resize-none"
                                            />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="d-flex justify-content-end gap-2">
                                                <Button className="btn bg-success border-0">Edit</Button>
                                                <Button onClick={handleClose} className="btn bg-danger border-0">Cancel</Button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Edit Modal */}

                                    {/* Forward Modal */}
                                    <Modal
                                        show={show1}
                                        onHide={() => setShow1(false)}
                                        dialogClassName="modal-lg modal-90w"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header>
                                            <h4 className="text-900">
                                                Forward Message
                                                <small style={{ fontWeight: '400', fontSize: '14px' }} className="d-block mt-2">Select Upto 5 Contacts</small>
                                            </h4>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5 className="text-center">Forward to
                                                <span style={{ background: '#003f6b' }} className="badge m-1">
                                                    Peter Leverkus
                                                    <span>
                                                        <Icon icon="ic:sharp-close" className="ms-2" width="15" height="15" />
                                                    </span>
                                                </span>
                                                <span style={{ background: '#003f6b' }} className="badge m-1">
                                                    Jhon Lee
                                                    <span>
                                                        <Icon icon="ic:sharp-close" className="ms-2" width="15" height="15" />
                                                    </span>
                                                </span>
                                            </h5>
                                            <div className="d-flex p-3">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="mt-1 me-2"
                                                >
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="cursor-pointer"
                                                    />
                                                </Form.Check>
                                                <div className="avatar avatar-xl avatar-sm avatar-md avatar-lg">
                                                    <img className="rounded-circle" src={profile} alt="" />
                                                </div>
                                                <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-0  mt-2 chat-contact-title">John Lee</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex p-3">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="mt-1 me-2"
                                                >
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="cursor-pointer"
                                                    />
                                                </Form.Check>
                                                <div className="avatar avatar-xl avatar-sm avatar-md avatar-lg">
                                                    <img className="rounded-circle" src={profile} alt="" />
                                                </div>
                                                <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-0  mt-2 chat-contact-title">Peter Leverkus</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex p-3">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="mt-1 me-2"
                                                >
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="cursor-pointer"
                                                    />
                                                </Form.Check>
                                                <div className="avatar avatar-xl avatar-sm avatar-md avatar-lg">
                                                    <img className="rounded-circle" src={profile} alt="" />
                                                </div>
                                                <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-0  mt-2 chat-contact-title">John Lee</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex p-3">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="mt-1 me-2"
                                                >
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="cursor-pointer"
                                                    />
                                                </Form.Check>
                                                <div className="avatar avatar-xl avatar-sm avatar-md avatar-lg">
                                                    <img className="rounded-circle" src={profile} alt="" />
                                                </div>
                                                <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-0  mt-2 chat-contact-title">John Lee</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex p-3">
                                                <Form.Check
                                                    type="checkbox"
                                                    className="mt-1 me-2"
                                                >
                                                    <Form.Check.Input
                                                        type="checkbox"
                                                        className="cursor-pointer"
                                                    />
                                                </Form.Check>
                                                <div className="avatar avatar-xl avatar-sm avatar-md avatar-lg">
                                                    <img className="rounded-circle" src={profile} alt="" />
                                                </div>
                                                <div className="flex-1 chat-contact-body ms-2 d-md-none d-lg-block">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="mb-0  mt-2 chat-contact-title">John Lee</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <div className="d-flex justify-content-end gap-2">
                                                <Button className="btn bg-success border-0">Forward</Button>
                                                <Button onClick={handleClose1} className="btn bg-danger border-0">Cancel</Button>
                                            </div>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Forward Modal */}

                                    {/* Mute Modal */}
                                    <Modal
                                        show={show2}
                                        onHide={() => setShow2(false)}
                                        dialogClassName="modal-sm modal-90w"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header>
                                            <h5>Mute For <span>8 Hours</span></h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className="d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    8 Hours
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className="d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    1 Week
                                                </Form.Check.Label>
                                            </Form.Check>
                                            <Form.Check type="radio" className="mb-0 mt-3">
                                                <Form.Check.Input name="job-start" type="radio" />
                                                <Form.Check.Label
                                                    className="d-inline"
                                                    style={{ fontSize: '14px' }}
                                                >
                                                    1 Year
                                                </Form.Check.Label>
                                            </Form.Check>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={handleClose2} className="bg-success border-0">Mute</Button>
                                        </Modal.Footer>
                                    </Modal>

                                    {/* Delete Chat Modal */}
                                    <Modal
                                        show={show3}
                                        onHide={() => setShow3(false)}
                                        dialogClassName="modal-md modal-90w"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header>
                                            <h5>Delete Chat ?</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h6 className="text-center">
                                                Are You Sure You Want to <span className="text-danger">Delete</span> this Chat ?
                                            </h6 >
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={handleClose3} className="bg-danger border-0">Delete</Button>
                                            <Button onClick={handleClose3} className="bg-secondary border-0">Cancel</Button>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Delete Chat Modal */}


                                    {/* Unblock Chat */}
                                    <Modal
                                        show={show4}
                                        onHide={() => setShow4(false)}
                                        dialogClassName="modal-md modal-90w"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header>
                                            <h5><span>Block</span> <span>Unblock</span> Chat ?</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h6 className="text-center">
                                                Are You Sure You Want to <span style={{ color: "#003f6b" }}>Block</span> <span style={{ color: "#003f6b" }}>Unblock</span> this Chat ?
                                            </h6 >
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button onClick={handleClose4} style={{ background: "#003f6b" }} className="border-0">Block</Button>
                                            <Button onClick={handleClose4} style={{ background: "#003f6b" }} className="border-0">Unblock</Button>
                                            <Button onClick={handleClose4} className="bg-danger border-0">Cancel</Button>
                                        </Modal.Footer>
                                    </Modal>
                                    {/* Unblock Chat */}


                                </Card.Body>
                            </Card>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default Chat