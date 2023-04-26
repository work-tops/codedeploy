import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SellerLandingPage from "../SellerLandingPage";
import ProjectOwnerLandingPage from "../ProjectOwnerLandingPage";
function OpenProjectCard() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <ProjectOwnerLandingPage />
                </Col>
                <Col lg={12}>
                    <Card className="m-5">
                        <Card.Body>
                            <div className="mt-4 d-flex justify-content-center">
                                <h3 className="text-center">Please Post a Project Here</h3>
                            </div>
                            <div className="mt-4 d-flex justify-content-center">
                                <Link to="/postjob1">
                                    <Button className="btn text-white btn-outline-success">Post Project</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                            <div className="field-box-bg m-5">
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
                                </table>
                            </div>
                </Col>
            </Row>
        </>
    )
}
export default OpenProjectCard