import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SellerLandingPage from "../SellerLandingPage";
import ProjectOwnerLandingPage from "../ProjectOwnerLandingPage";
import { getAllData } from "../../../../Services/ProxyService";
function OpenProjectCard() {

    const [jobs, setJobs] = useState([])

    const getJobList = async () => {
        const response = await getAllData('jobs/all');
        setJobs(response.data.jobs);
    }
    useEffect(() => {
        getJobList()
    }, [])

    return (
        <>
            <Row>
                <Col lg={12}>
                    <ProjectOwnerLandingPage />
                </Col>
                <Col lg={12}>
                    <Card className="m-5 d-none">
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
                    {jobs.map((data, key) => (
                        <div className="field-box-bg m-5" key={`jobs_${key}`}>
                            <table border="1px solid black" className="user-project-details-table">
                                <tr>
                                    <td className="bg-white tab-clm">
                                        <h6 className="ai-project-tit-frl">{data?.project_title}</h6>
                                        <p className="abt-user">{data?.project_description}
                                        </p>
                                    </td>
                                    <td className="bg-white tab-clm">
                                        <div className="btn-group">
                                        <Link to={`jobdetails/${data._id}`} role="button">
                                            <button type="button" className="btn user-prj-view">View</button>
                                            </Link>
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
                    ))}
                </Col>
            </Row>
        </>
    )
}
export default OpenProjectCard