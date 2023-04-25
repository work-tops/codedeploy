import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import SellerPortalHeader from "../Header/SellerPortalHeader";
import Menubar from "../Menubar/Menubar";
import PostPg from "../Post/PostPg";
// import AdvancedTable from "./AdvancedTable";
import YourProjectsSeller from "./YourProjects";

function SellerLandingPage() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <SellerPortalHeader />
                </Col>
                <Col lg={12}>
                    <Menubar />
                </Col>
                <Col lg={12}>
                    <PostPg />
                </Col>
                <Col lg={12}>
                    <YourProjectsSeller/>
                </Col>
            </Row>
        </>
    )
}
export default SellerLandingPage



{/* <div className='col-12'>
                <p className="your-prj-tit">Your Projects</p>
                <div className="d-flex justify-content-start">
                    <div><button className="opn-prj-btn">Open Projects</button></div>
                    <div><button className="opn-prj-btn-1">Workstreams</button></div>
                    <div><button className="opn-prj-btn-1">Invoice Due</button></div>
                    <div><button className="opn-prj-btn-1">Product Enquries</button></div>
                    <div><button className="opn-prj-btn-1">Reviews</button></div>
                </div>
                <div className="field-box-bg">
                    <table border="1px solid black" className="user-project-details-table">
                        <tr>
                            <td className="bg-white tab-clm">
                                <h6 className="ai-project-tit-frl">New Kitchen Worktops With Island</h6>
                                <p className="abt-user">Worktops.com reached 12K visitors from 2K
                                    visitors in last 8 months with our internal
                                    team by doing SEO-friendly work.
                                </p>
                            </td>
                            <td className="bg-white tab-clm">
                                <div className="btn-group">
                                    <button type="button" className="btn user-prj-view">View</button>
                                    <button type="button" className="btn user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-white tab-clm">
                                <h6 className="ai-project-tit-frl">New Kitchen Worktops With Island</h6>
                                <p className="abt-user">Worktops.com reached 12K visitors from 2K
                                    visitors in last 8 months with our internal
                                    team by doing SEO-friendly work.
                                </p>
                            </td>
                            <td className="bg-white tab-clm">
                                <div className="btn-group">
                                    <button type="button" className="btn user-prj-view">View</button>
                                    <button type="button" className="btn user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-white tab-clm">
                                <h6 className="ai-project-tit-frl">New Kitchen Worktops With Island</h6>
                                <p className="abt-user">Worktops.com reached 12K visitors from 2K
                                    visitors in last 8 months with our internal
                                    team by doing SEO-friendly work.
                                </p>
                            </td>
                            <td className="bg-white tab-clm">
                                <div className="btn-group">
                                    <button type="button" className="btn user-prj-view">View</button>
                                    <button type="button" className="btn user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-white tab-clm">
                                <h6 className="ai-project-tit-frl">New Kitchen Worktops With Island</h6>
                                <p className="abt-user">Worktops.com reached 12K visitors from 2K
                                    visitors in last 8 months with our internal
                                    team by doing SEO-friendly work.
                                </p>
                            </td>
                            <td className="bg-white tab-clm">
                                <div className="btn-group">
                                    <button type="button" className="btn user-prj-view">View</button>
                                    <button type="button" className="btn user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-white tab-clm">
                                <h6 className="ai-project-tit-frl">New Kitchen Worktops With Island</h6>
                                <p className="abt-user">Worktops.com reached 12K visitors from 2K
                                    visitors in last 8 months with our internal
                                    team by doing SEO-friendly work.
                                </p>
                            </td>
                            <td className="bg-white tab-clm">
                                <div className="btn-group">
                                    <button type="button" className="btn user-prj-view">View</button>
                                    <button type="button" className="btn user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="bg-white tab-clm">
                                <h6 className="ai-project-tit-frl">New Kitchen Worktops With Island</h6>
                                <p className="abt-user">Worktops.com reached 12K visitors from 2K
                                    visitors in last 8 months with our internal
                                    team by doing SEO-friendly work.
                                </p>
                            </td>
                            <td className="bg-white tab-clm">
                                <div className="btn-group">
                                    <button type="button" className="btn user-prj-view">View</button>
                                    <button type="button" className="btn user-prj-dd dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div className="d-flex justify-content-between">
                        <div><button className="btn-back"><Icon icon="ic:baseline-chevron-left" width="24" height="24" /> Previous</button></div>
                        <div ><button className="btn-nxt">Next <Icon icon="material-symbols:chevron-right-rounded" width="24" height="24" /></button></div>
                    </div>
                </div>
            </div> */}