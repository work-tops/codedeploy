import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, InputGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllData } from "../../../../Services/ProxyService";
import ProjectOwnerLandingPage from '../ProjectOwnerLandingPage'
import { Icon } from "@iconify/react";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";

function OpenProjectCard() {

    const [jobs, setJobs] = useState([])
    const getJobList = async () => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        const response = await getAllData('jobs/all');
        var _data = response.data.jobs.filter(x => x.created_by == _json._id)
        setJobs(_data);
    }
    useEffect(() => {
        getJobList()
    }, [])

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <ProjectOwnerLandingPage />
                </Col>
                {/* <Col lg={12}> */}
                <Container>
                    <h4 className="mb-3 text-uppercase">Open Projects</h4>
                    <Card className="mb-3 d-none">
                        <Card.Body>
                            <div className="mt-4 d-flex justify-content-center">
                                <h3 className="text-center">Please Post a Project Here</h3>
                            </div>
                            <div className="mt-4 d-flex justify-content-center">
                                <Link to="/postproject">
                                    <Button style={{ background: '#003f6b', fontSize: '14px' }} className="border-0 text-uppercase">Post Project</Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>

                    {jobs.map((data, key) => (
                        <Card className="mb-3" key={`jobs_${key}`}>
                            <Card.Header className="bg-light">
                                <h5 className="text-uppercase">{data?.project_title}</h5>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col lg={8}>
                                        <p style={{ fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: "nowrap", }} className="text-justify">{data?.project_description}</p>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="d-flex justify-content-center mb-3">
                                            <p style={{ color: '#003f6b' }} className=" fw-semibold">Client Budget<span className="ms-2 text-success text-center fw-bold">£ 200</span></p>
                                        </div>
                                        <InputGroup className="d-flex justify-content-center mb-3">
                                            <Button as={Link} to={`jobdetails/${data._id}`} className="text-uppercase  border-0" style={{ background: '#003f6b', fontSize: '14px' }}>View</Button>
                                            {/* <Button className="bg-transparent text-dark border-dark"> */}
                                            <Dropdown>
                                                <Dropdown.Toggle style={{ background: '#003f6b', border: "none" }}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item as={Link} to="/proposallist">View Proposals</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {/* </Button> */}
                                        </InputGroup>
                                    </Col>
                                </Row>
                                {/* <table border="1px solid black" className="user-project-details-table">
                                    <tr>
                                        <td className="bg-white tab-clm">
                                            <p className="abt-user">{data?.project_description}
                                            </p>
                                        </td>
                                        <td className="bg-white tab-clm">
                                            <div className="btn-group">
                                                
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
                                </table> */}
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
                {/* </Col > */}
            </Row >
        </>
    )
}
export default OpenProjectCard