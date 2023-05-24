import React, { useEffect, useState } from "react";
import Menubar from "../Menubar/Menubar";
import JobDetailsPost from "../Post/JobDetailsPost";
import Footer from "../Footer/Footer";
import newsfeed from "../Images/Newsfeed.jpg"
import currency from "../Images/Pound Currency.jpg"
import { Link, useParams, useHistory } from "react-router-dom";
import { getAllData } from "../../../Services/ProxyService";
import ProjectOwnerHeader from "../Header/ProjectOwnerHeader";
import { Button, Col, Row, Card, Modal, Form, Container, Dropdown } from "react-bootstrap";
import worktops from '../../Components/Projectimages/Handyman.jpg'
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { Icon } from "@iconify/react";
import { Divider } from "@mui/material";
import CardDropdown from "../../TemplateAssets/common/CardDropdown";

function JobDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    let { jobid } = useParams();
    const [jobdata, setJobdata] = useState([])
    const [user, setUser] = useState({})
    const [chatList, setChatList] = useState([])
    const [proposalsList, setProposals] = useState([])
    const [board, setBoard] = useState(false)
    const history = useHistory();

    const showboard = () => {
        setBoard(!board)
    }
    const sendProposal = () => {
        console.log('send proposal')
        var _token = sessionStorage.getItem("token");
        if (_token != null) {
            history.push(`/jobproposal/${jobid}/jobproposal`);
        } else {
            history.push("/freelancer/true");
        }
    }
    const getLevel = (value) => {
        if (value <= 1000) {
            return "Low";
        } else if (value > 1000 || value < 3000) {
            return "Medium";
        } else if (value > 3001) {
            return "High";
        }
    }

    const getJobsById = async () => {
        const response = await getAllData('job/' + jobid);
        setJobdata(response.data.job);
        sessionStorage.setItem("jobdata", JSON.stringify(response.data.job))
        getProposals(jobid);
    }
    const getProposals = async (id) => {
        const response = await getAllData('proposals/all');
        var _data = response.data.proposals;
        console.log(id)
        console.log(_data)
        _data = _data.filter(x => x.job._id == id);
        setProposals(_data);
    }
    const askaQuestion = async () => {
        var _data = document.getElementById('ask_question').value;
        var _chatList = [...chatList];
        _chatList.push(_data);
        setChatList(_chatList);
        document.getElementById('ask_question').value = '';
    }
    useEffect(() => {
        getJobsById()
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        setUser(_json);
    }, [])

    // Date length

    const today = new Date().toISOString().substr(0, 10);
    const expire_date = new Date(jobdata.expire_date);
    const timeDiff = expire_date.getTime() - new Date(today).getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(daysDiff);

    return (
        <>

            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
                {/* <Col lg={12} className="mt-5"> */}
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Card className="mt-5">
                                <Card.Header as="h4" className='bg-light text-justify  text-uppercase'>Project Details</Card.Header>
                                <Card.Body className="position-relative">
                                    <Row>
                                        <Col xl={12}>
                                            <p style={{ fontSize: '14px' }} className="text-justify">{jobdata.project_description}</p>
                                            <h6 className="text-uppercase">Skills Required</h6>
                                            <div className='d-flex justify-content-start mt-3 mb-1'>
                                                <span className='badge m-1 rounded-pill p-2' style={{ background: '#d5e5fa', color: '#1c4f93' }}>Fabricator</span>
                                                <span className='badge m-1 rounded-pill p-2' style={{ background: '#ccf6e4', color: '#00864e' }}>Templater</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card className="mt-3 mb-2">
                                {user?.role == "Freelancer" &&
                                    <Card.Header className='bg-white   d-flex justify-content-between text-uppercase'>
                                        <h5 className="mt-3 me-1">
                                            Clarification Board
                                        </h5>
                                        <Button onClick={showboard} style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 text-uppercase">
                                            ask a question
                                        </Button>
                                    </Card.Header>
                                }

                                <Card.Body className="position-relative">
                                    <Row>
                                        <Col xl={12}>
                                            {board == true ? (
                                                <>
                                                    <Form>
                                                        <Form.Group className="mb-3">
                                                            <Form.Control
                                                                as="textarea" id="ask_question"
                                                                placeholder='Type Your Message Here'
                                                                rows={5} />
                                                        </Form.Group>
                                                        <div className="d-flex justify-content-end mb-3">
                                                            <Button as={Link} to="/freelancer/true" onClick={() => { askaQuestion() }} style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                                Submit
                                                            </Button>
                                                        </div>
                                                    </Form>
                                                </>
                                            ) : ""}
                                        </Col>
                                    </Row>
                                    {chatList.map((x) => {

                                        return <Card className="mb-3">
                                            <Card.Body>
                                                <Row>
                                                    <Col className="mt-3" lg={3}>
                                                        <img src={worktops} height="60px" width="60px" className="m-3 rounded-circle" />
                                                    </Col>
                                                    <Col className="mt-3" lg={8}>
                                                        <p style={{ fontSize: '14px' }} className=""> {x} </p>
                                                        <Button
                                                            onClick={handleShow}
                                                            style={{ background: '#003f6b', fontSize: '14px' }}
                                                            className="btn mb-3 text-uppercase border-0">
                                                            Reply
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    })}

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            {/*  Customize Details  */}
                            <Card className="mt-5">
                                <Card.Header className="py-2 text-center  bg-light">
                                    <h5 className="mb-0">{jobdata.project_title}</h5>
                                    
                                </Card.Header>
                                <Card.Body className="bg-white">
                                    <ul className="list-unstyled fs--1 mb-0">

                                        <li>
                                            <p style={{ fontSize: '14px' }} className="fw-semibold ms-1">
                                                <Icon icon="tabler:currency-pound"
                                                    className='me-1'
                                                    style={{ marginTop: '-1px' }}
                                                    color="#003f6b"
                                                    width="20"
                                                    height="20" />
                                                {getLevel(jobdata?.budget)} Level</p>
                                        </li>
                                        <li>
                                            <p style={{ fontSize: '14px' }} className="fw-semibold ms-1">
                                                <Icon icon="material-symbols:location-on"
                                                    className='me-1'
                                                    style={{ marginTop: '-1px' }}
                                                    color="#003f6b"
                                                    width="20"
                                                    height="20" />
                                                {jobdata.location}</p>
                                        </li>
                                        <li>
                                            <p style={{ fontSize: '14px' }} className="fw-semibold ms-1">
                                                <Icon icon="heroicons-outline:office-building"
                                                    color="#003f6b"
                                                    width="20"
                                                    height="20"
                                                    style={{ marginTop: '-1px' }}
                                                    className="me-1"
                                                />
                                                {jobdata.category}</p>
                                        </li>
                                        <li>
                                            <p style={{ fontSize: '14px' }} className="fw-semibold ms-1">
                                                <Icon icon="fa6-solid:business-time"
                                                    color="#003f6b"
                                                    width="20"
                                                    height="20"
                                                    style={{ marginTop: '-1px' }}
                                                    className="me-1"
                                                />
                                                Duration: {jobdata.project_duration}</p>
                                        </li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer className="bg-light">
                                    <div className="d-flex justify-content-between">
                                    <Link to="/proposallist">
                                        <p  className="fw-semibold text-center" style={{ color: '#003f6b' }}> <span className="text-success me-2">{proposalsList?.length}</span>Proposals Received</p>
                                    </Link>
                                    <Button as={Link} to="/EditPostProject">
                                        Edit
                                    </Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                            {/* Customize Details */}

                            {/* Ends In Days  Card*/}
                            {user?.role == "Freelancer" && <Card className="mt-3 py-2">
                                <Card.Body className="bg-white">
                                    {/* Ends In Days */}
                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <p style={{ color: '#003f6b' }} className=" fw-semibold">Ends In </p>
                                            <p className="text-success fw-bold">{daysDiff} Days</p>
                                        </div>
                                        <div>
                                            <p style={{ color: '#003f6b' }} className=" fw-semibold">Client Budget</p>
                                            <p className="text-success text-center fw-bold">£ {jobdata?.budget}</p>
                                        </div>
                                    </div>
                                    {/* Ends In Days */}

                                    {/*  */}

                                    <Divider />
                                    <div className="mb-2">

                                        <p
                                            style={{ fontSize: '12px' }}
                                            className="fw-semibold mt-2 text-center text-uppercase">
                                            Project ID : : 1484KHON
                                        </p>
                                        <div className="d-flex justify-content-center">
                                            <Button
                                                className="bg-transparent  text-danger w-50 border-danger"
                                                as={Link}
                                                to="/wishlist/project"
                                            >
                                                <Icon style={{ marginTop: '-5px' }} icon="flat-color-icons:like" className="me-2" color="#003f6b" width="20" height="20" />  Saved
                                            </Button>
                                        </div>
                                    </div>
                                    {/*  */}
                                    <Divider />
                                    {/* Profile Details */}
                                    <div className="mt-2 d-flex justify-content-center">
                                        <img src={worktops}
                                            className="rounded-circle  border border-dark"
                                            width="80px"
                                            height="75px" />
                                    </div>
                                    <p className="text-center d-none mt-2 fw-semibold">
                                        Email: <span style={{ color: '#003f6b' }} className="fw-semibold">{jobdata.customer_email}</span>
                                    </p>
                                    <div className="d-flex mt-3 justify-content-around">
                                        <p role="button" style={{ color: '#003f6b', cursor: 'default' }}>Name</p>
                                        <p role="button" style={{ color: '#003f6b', cursor: 'default' }}>Profession</p>
                                        <p role="button" style={{ color: '#003f6b', cursor: 'default' }}>Like</p>
                                    </div>
                                    {/* Profile Details */}
                                </Card.Body>
                                <Card.Footer className="bg-light">
                                    <Button onClick={() => sendProposal()} className="border-0 w-100 text-uppercase" style={{ color: '#fff', fontSize: '14px', background: '#003f6b' }}>
                                        Send Proposal
                                    </Button>
                                </Card.Footer>
                            </Card>
                            }

                            {/* Report This Project */}
                            {user?.role == "Freelancer" &&
                                <Card className="mt-3 mb-3 py-2">
                                    <Card.Header as="h5" className="text-uppercase bg-light" >
                                        Report this Project
                                    </Card.Header>
                                    <Card.Body>
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Type Reason"
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Control
                                                    as="textarea"
                                                    placeholder='Description....'
                                                    rows={5} />
                                            </Form.Group>
                                            <div className="d-flex justify-content-center">
                                                <Button as={Link} to="/freelancer/true" style={{ background: '#003f6b', fontSize: '14px' }} className="border-0 w-100 text-uppercase">
                                                    Submit
                                                </Button>
                                            </div>
                                        </Form>

                                    </Card.Body>
                                </Card>
                            }
                        </Col>
                    </Row>
                </Container>
                {/* </Col> */}
            </Row>
            {/* Modal Content */}
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-lg modal-90w"

                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <h6 className="text-uppercase">
                            Please Type Your Message
                        </h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" placeholder='Tag Your Description....' rows={8} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" id="rememberMe" className="mb-0">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label style={{ fontSize: '12px' }} className="mb-0 text-900">
                                I Confirm That This Message Is Essential For The Submission Of My
                                Proposal And | Understand That It Will Be Publicly Posted In The
                                Project's Clarification Board And In Case It Is Used To Spam Or
                                Solely Advertise My Skills, My Rankings Will Be Severely Affected.
                            </Form.Check.Label>
                        </Form.Check>
                    </Form.Group>
                    <div className="d-flex justify-content-end mb-3">
                        <Button onClick={handleClose} style={{ background: '#003f6b' }} className="text-uppercase border-0">
                            Send
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Modal Content */}


        </>
    )
}
export default JobDetails
