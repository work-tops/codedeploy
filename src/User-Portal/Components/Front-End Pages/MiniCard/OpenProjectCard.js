import React, { useEffect, useState } from "react";
import { Card, Button, Col, Form, Row, Container, InputGroup, Dropdown } from "react-bootstrap";
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
                    <div className="d-flex justify-content-between">
                        <h4 className="mb-3 text-uppercase">Projects</h4>
                        <div>
                            <Form.Select>
                                <option>All</option>
                                <option>Open</option>
                                <option>Expired</option>
                            </Form.Select>
                        </div>
                    </div>
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
                                    <Col md={8} lg={8}>
                                        <p style={{ fontSize: '14px' }} className="fifty-chars text-justify">{data?.project_description}</p>
                                        {/* <div className="d-flex justify-content-center mb-3"> */}
                                        {/* </div> */}
                                        <p style={{ color: '#003f6b', fontSize: '16px' }} className=" fw-bold">Client Budget<span className="ms-2 text-success text-center fw-bold">£ 200</span></p>
                                    </Col>
                                    <Col md={4} lg={4}>

                                        <InputGroup className="d-flex  justify-content-center mb-3">
                                            <Button as={Link} to={`jobdetails/${data._id}`} className="text-uppercase  border-0" style={{ background: '#003f6b', fontSize: '14px' }}>View</Button>
                                            {/* <Button className="bg-transparent text-dark border-dark"> */}
                                            <Dropdown>
                                                <Dropdown.Toggle style={{ background: '#003f6b', border: "none" }}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item as={Link} className="text-success" to="/proposallist">View Proposals</Dropdown.Item>
                                                    <Dropdown.Item as={Link} className="text-primary" to="/EditPostProject">Edit</Dropdown.Item>
                                                    <Dropdown.Item as={Link} className="text-warning" to="/EditPostProject">Repost</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            {/* </Button> */}
                                        </InputGroup>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    ))}
                    {/* pagination */}
                    <Card className="mt-3 mb-3">
                        <Card.Body>
                            <Row className="g-3 flex-center justify-content-between">
                                <Col xs="auto" className="d-flex align-items-center">
                                    <small className="d-none d-lg-block me-2">Show:</small>
                                    <Form.Select
                                        size="sm"

                                        style={{ maxWidth: '4.875rem' }}
                                    >
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >All</option>
                                    </Form.Select>
                                </Col>
                                <Col xs="auto" className="d-flex">
                                    <div>
                                        <Button
                                            variant="falcon-default"
                                            className="me-2"
                                        >
                                            Preview
                                        </Button>
                                    </div>

                                    <div>
                                        <Button
                                            variant="falcon-default"
                                        >
                                            Next
                                        </Button>

                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    {/* pagination */}
                </Container>
                {/* </Col > */}
            </Row >
        </>
    )
}
export default OpenProjectCard