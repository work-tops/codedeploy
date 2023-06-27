import React, { useEffect, useState } from "react";
import { Card, Button, Col, Form, Row, Container, InputGroup, Dropdown } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { getAllData } from "../../../../Services/ProxyService";
import ProjectOwnerLandingPage from '../ProjectOwnerLandingPage'
import { Icon } from "@iconify/react";
import NavbarStandard from "../../Header/AdvanceHeader/NavbarStandard";
import Footer from "../../Footer/Footer";


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

    // 
    const history = useHistory();
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);

        if (selectedValue === 'In Progress') {
            history.push('/WorkstreamDetails');
        }
    };
    // 

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
                            <Form.Select value={selectedOption} onChange={handleChange}>
                                <option>All</option>
                                <option>Open</option>

                                <option value="In Progress">In Progress</option>
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
                                                    <Dropdown.Item as={Link} className="text-warning" to="/RepostProject">Repost</Dropdown.Item>
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
                    <div className="card mb-3 mt-3">
                        <div className="card-body">
                            <div className="row g-3 flex-center justify-content-md-between">
                                <div className="col-auto">
                                    <form className="row gx-2">
                                        <div className="col-auto"><small>Show:</small></div>
                                        <div className="col-auto"> <select className="form-select form-select-sm" aria-label="Show courses">
                                            <option selected="selected" value="9">9</option>
                                            <option value="20">20</option>
                                            <option value="50">50</option>
                                        </select></div>
                                    </form>
                                </div>
                                <div className="col-auto"> <button className="btn btn-falcon-default btn-sm me-2" type="button" disabled="disabled" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Prev" data-bs-original-title="Prev">
                                    <span className="fas fa-chevron-left"></span></button><a className="btn btn-sm btn-falcon-default text-primary me-2" href="#!">1</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">2</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">3</a><a className="btn btn-sm btn-falcon-default me-2" href="#!">
                                        <span className="fas fa-ellipsis-h"></span></a><a className="btn btn-sm btn-falcon-default me-2" href="#!">303</a><button className="btn btn-falcon-default btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Next" data-bs-original-title="Next">
                                        <span className="fas fa-chevron-right">  </span></button></div>
                            </div>
                        </div>
                    </div>
                    {/* pagination */}
                </Container>
                {/* </Col > */}
            </Row >
            <Col lg={12}>
                <Footer />
            </Col>
        </>
    )
}
export default OpenProjectCard