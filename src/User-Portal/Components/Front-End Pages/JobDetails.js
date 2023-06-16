import React, { useEffect, useState, useRef } from "react";
import Menubar from "../Menubar/Menubar";
import JobDetailsPost from "../Post/JobDetailsPost";
import Footer from "../Footer/Footer";
import { Editor } from '@tinymce/tinymce-react';
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

    // 
    const editorRef = useRef(null);

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
                                <Card.Header as="h5" className='bg-light mb-0 mt-1'>Project Details</Card.Header>
                                <Card.Body className="position-relative">
                                    <Row>
                                        <Col xl={12}>
                                            <h6 style={{ fontSize: '16px' }} className="mb-3 text-uppercase">{jobdata.project_title}</h6>
                                            <p style={{ fontSize: '14px' }} className="text-justify">{jobdata.project_description}</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>

                            {user?.role == "Freelancer" && <Card className="mt-3 mb-2">
                                <Card.Header className='bg-white d-flex justify-content-between text-uppercase'>
                                    <h5 className="mt-3 me-1">
                                        Clarification Board
                                    </h5>
                                    <Button onClick={showboard} style={{ background: "#003f6b", fontSize: '14px' }} className="border-0 text-uppercase">
                                        ask a question
                                    </Button>
                                </Card.Header>


                                <Card.Body className="position-relative">
                                    <Row>
                                        <Col xl={12}>
                                            {board == true ? (
                                                <>
                                                    <Form>
                                                        <Form.Group className="mb-3">
                                                            {/* <Form.Control
                                                                as="textarea" id="ask_question"
                                                                placeholder='Type Your Message Here'
                                                                rows={5} /> */}
                                                            <Editor
                                                                onInit={(evt, editor) => editorRef.current = editor}
                                                                initialValue=""
                                                                init={{
                                                                    height: 200,
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
                                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                                }}
                                                            />
                                                        </Form.Group>
                                                        <div className="d-flex gap-2 justify-content-end mb-3">
                                                            <Button id="FileUpload1" style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                                Attachments
                                                            </Button>
                                                            <Button as={Link} to="/freelancer/true" style={{ background: '#003f6b', fontSize: '14px' }} className="text-uppercase border-0">
                                                                Send
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
                            }
                        </Col>
                        <Col lg={4}>
                            {/*  Customize Details  */}
                            <Card className="mt-5 overflow-hidden">
                                <Card.Header className="bg-light">
                                    <div style={{ fontSize: '14px' }}>
                                        <span className="me-1">
                                            <Icon icon="ic:twotone-update" width="20" height="20" hFlip={true} />
                                        </span>
                                        <span className="fw-bold me-1">
                                            Last Update On : <span className="fw-semibold">01/01/2023</span>
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body className="bg-white">
                                    <ul className="list-unstyled fs--1 mb-0">
                                        <p className='text-justiy fw-bold' style={{ fontSize: '14px' }}>
                                            <Icon icon="tabler:currency-pound" className='me-1' style={{ marginTop: '-1px' }} color="#003f6b" width="20" height="20" />
                                            1000
                                            <span className="ms-1 text-primary">(Fixed Price)</span>
                                        </p>
                                        {/* <li>
                                            <p style={{ fontSize: '14px' }} className="fw-semibold ms-1">
                                                <Icon icon="tabler:currency-pound"
                                                    className='me-1'
                                                    style={{ marginTop: '-1px' }}
                                                    color="#003f6b"
                                                    width="20"
                                                    height="20" />
                                                {getLevel(jobdata?.budget)} Level</p>
                                        </li> */}
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
                                            <p className="fw-semibold text-center" style={{ color: '#003f6b' }}> <span className="text-success me-2">{proposalsList?.length}</span>Proposals Received</p>
                                        </Link>
                                        <Button className="border-0 fs--1 text-uppercase me-2" style={{ color: '#fff', background: '#003f6b' }} as={Link} to="/EditPostProject">
                                            Edit
                                        </Button>
                                        <Button onClick={() => sendProposal()} className="border-0  fs--1 text-uppercase" style={{ color: '#fff', background: '#003f6b' }}>
                                            Send Proposal
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
                                                variant="falcon-default"
                                                className=""
                                                as={Link}
                                                to="/wishlist/project"
                                            >
                                                <span className="me-2">
                                                    <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                                    Add to Wishlist
                                                </span>
                                                <span className="">
                                                    <Icon icon="icon-park-solid:like" style={{ marginTop: '-5px' }} color="#df2020" width="20" height="20" /> Remove from Wishlist
                                                </span>
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
                                    <div className="d-flex mt-3 justify-content-center gap-5">
                                        <p role="button" style={{ color: '#003f6b', cursor: 'default' }}>Name</p>
                                        <p role="button" style={{ color: '#003f6b', cursor: 'default' }}>Profession</p>
                                        <p>
                                            <Icon icon="icon-park-outline:like" className="me-1" style={{ marginTop: '-5px' }} width="20" height="20" />
                                            <Icon icon="icon-park-solid:like" style={{ marginTop: '-5px' }} color="#df2020" width="20" height="20" />
                                        </p>
                                    </div>


                                </Card.Body>
                                {/* <Card.Footer className="bg-light">
                                </Card.Footer> */}
                            </Card>
                            }

                            {/* Report This Project */}
                            {user?.role == "Freelancer" &&
                                <Card className="mt-3 mb-3">
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
                <Col className="mt-3">
                    <Footer />
                </Col>
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
