import React, { useState } from "react";
import { Icon } from "@iconify/react";
import toast, { Toaster } from 'react-hot-toast';
import { createData } from "../../../Services/ProxyService";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    Card,
    Dropdown,
    Image,
    OverlayTrigger,
    Tooltip,
    InputGroup,
    Row,
    Col,
    Form
} from 'react-bootstrap';
import { getSize } from '../../TemplateAssets/helpers/utils';
import cloudUpload from '../../TemplateAssets/assets/cloud-upload.svg';
import Flex from '../../TemplateAssets/common/Flex';
import CardDropdown from '../../TemplateAssets/common/CardDropdown';











function JobProposal() {
    const jobdatas = sessionStorage.getItem("jobdata")
    const jobdetails = JSON.parse(jobdatas)
    console.log(jobdetails)
    const [form, setform] = useState([])
    const [serviceFee, setServiceFee] = useState(20)
    const [amountUReceive, setAmountUReceive] = useState(20)
    console.log(form)

    const handleChange = (e) => {
        const myData = { ...form };
        myData[e.target.name] = e.target.value;
        if (e.target.name == 'proposal_amount') {
            var _amount = serviceFee + parseInt(e.target.value)
            setAmountUReceive(_amount);
        }
        setform(myData);
    }

    const AddJobproposal = async () => {
        const jobproposal = {
            job: jobdetails,
            proposal_amount: form.proposal_amount,
            commission: 1000,
            amount: 1000,
            completed_duration: form.completed_duration,
            cover_letter: form.cover_letter,
            attachments: [],
            created_by: "1",
        }
        const response = await createData("proposal/new", jobproposal)
        if (response.status === 201) {
            toast.success('Successfully Jobproposal Added')
            cleardata()
        } else {
            toast.error('Something went wrong')
        }
        console.log(response)
    }

    const formsubmit = (e) => {
        e.preventDefault();
        // uploadFile();
        AddJobproposal();
    }
    const cleardata = () => {
        setform({
            proposal_amount: "",
            commission: "",
            amount: "",
            completed_duration: "",
            cover_letter: "",
        });
    }

    // Level comparing 
    let lavel = ""
    if (jobdetails.budget < 1000) {
        lavel = "Low"
    } else if (jobdetails.budget > 1000 || jobdetails.budget < 3000) {
        lavel = "Medium"
    } else if (jobdetails.budget > 3001) {
        lavel = "High"
    }

    // Upload Files(Optional)
    const [cover, setCover] = useState();

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setCover(
                Object.assign(acceptedFiles[0], {
                    preview: URL.createObjectURL(acceptedFiles[0])
                })
            );
        }
    });
    // Upload Files(Optional)

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>

                <Col lg={12} className="mt-5">
                    <Row>
                        <Col lg={8}>
                            <Card className="m-4">
                                <Card.Header as="h6" className="bg-white text-uppercase">
                                    Project Proposal
                                </Card.Header>
                                <Card.Body>
                                    {/* <h6 >Proposal Amount</h6> */}
                                    <Form onSubmit={(e) => { formsubmit(e) }}>
                                        <Form.Group className='mb-3'>
                                            <Form.Label style={{ fontSize: '14px' }} className=" text-700">
                                                Proposal Amount
                                            </Form.Label>

                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    required
                                                    name="proposal_amount"
                                                    value={form.proposal_amount}
                                                    onChange={(e) => { handleChange(e) }}
                                                    type="number"
                                                    placeholder="Enter Your Proposal Amount"
                                                />
                                                <Button className="bg-transparent text-dark border-dark">
                                                    <Icon icon="gridicons:dropdown" width="20" height="20" />
                                                </Button>
                                            </InputGroup>
                                            <p style={{ fontSize: '12px', fontStyle: 'italic' }} className="text-700">Total Amount the client will see on the proposal</p>
                                        </Form.Group>
                                        <Card className="mb-3">
                                            <Card.Body>

                                                <div className="d-flex justify-content-between">
                                                    <p className="fw-bold">(<span className="text-success">£</span>) - {serviceFee}</p>
                                                    <p style={{ fontSize: '12px' }} className="me-2">"myproject.ai" Service Fee<i className="ms-2 text-success fa-solid fa-circle-info "></i></p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className=" fw-bold">(<span className="text-success">£</span>) - {amountUReceive}</p>
                                                    <p style={{ fontSize: '12px' }} className="me-2">"Amount You'll Receive after" Service Fee education <i className="ms-2 text-success fa-solid fa-circle-info"></i></p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: '14px' }} className=" text-700">
                                                Completion Time
                                            </Form.Label>
                                            <Form.Control
                                                required
                                                name="completed_duration"
                                                value={form.completed_duration}
                                                onChange={(e) => { handleChange(e) }}
                                                type="text"
                                                className=""
                                                placeholder="Add completion time" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: '14px' }} className=" text-700">
                                                Cover Letter
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                required
                                                name="cover_letter"
                                                value={form.cover_letter}
                                                onChange={(e) => { handleChange(e) }}
                                                placeholder="Cover Letter"
                                                rows={6} />
                                        </Form.Group>
                                        <div >
                                            <Form.Label className="text-700">
                                                Upload File (Optional)
                                            </Form.Label>
                                            <Card className="mb-3 py-2">
                                                <Card.Body className="bg-white">
                                                    <div {...getRootProps({ className: 'dropzone-area py-6' })}>
                                                        <input {...getInputProps({ multiple: false })} />
                                                        <div className="fs--1">
                                                            <img src={cloudUpload} alt="" width={20} className="me-2" />
                                                            <span className="d-none d-lg-inline">
                                                                Drag your image here
                                                                <br />
                                                                or,{' '}
                                                            </span>
                                                            <Button variant="link" size="sm" className="p-0 fs--1">
                                                                Browse
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    {cover && (
                                                        <div className="mt-3">
                                                            <Flex
                                                                alignItems="center"
                                                                className="btn-reveal-trigger"
                                                                key={cover.path}
                                                            >
                                                                <Image
                                                                    rounded
                                                                    width={40}
                                                                    height={40}
                                                                    src={cover.preview}
                                                                    alt={cover.path}
                                                                />
                                                                <Flex
                                                                    justifyContent="between"
                                                                    direction="column"
                                                                    className="mx-2 flex-1 text-truncate"
                                                                >
                                                                    <h6 className="text-truncate">{cover.path}</h6>
                                                                    <Flex className="position-relative" alignItems="center">
                                                                        <p className="mb-0 fs--1 text-400 line-height-1">
                                                                            <strong>{getSize(cover.size)}</strong>
                                                                        </p>
                                                                    </Flex>
                                                                </Flex>
                                                                <CardDropdown>
                                                                    <div className="py-2">
                                                                        <Dropdown.Item
                                                                            className="text-danger"
                                                                            onClick={() => setCover()}
                                                                        >
                                                                            Remove
                                                                        </Dropdown.Item>
                                                                    </div>
                                                                </CardDropdown>
                                                            </Flex>
                                                        </div>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Form>
                                    <div className="d-flex justify-content-end">
                                        <Button className="border-0" style={{ background: '#003f6b' }} type="submit">
                                            SEND
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            {/*  Customize Details  */}
                            <Card className="m-4">
                                <Card.Header className="py-2 text-center  bg-white">
                                    <h6 className="mb-0">{jobdetails?.project_title}</h6>
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
                                                {lavel} Level</p>
                                        </li>
                                        <li>
                                            <p style={{ fontSize: '14px' }} className="fw-semibold ms-1">
                                                <Icon icon="material-symbols:location-on"
                                                    className='me-1'
                                                    style={{ marginTop: '-1px' }}
                                                    color="#003f6b"
                                                    width="20"
                                                    height="20" />
                                                {jobdetails?.location}
                                            </p>
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
                                                {jobdetails?.category}
                                            </p>
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
                                                Duration: {jobdetails?.project_duration}</p>
                                        </li>
                                    </ul>
                                </Card.Body>

                            </Card>
                            {/* Customize Details */}
                        </Col>
                    </Row>
                </Col>
                <Toaster />
            </Row>
        </>
    )
}
export default JobProposal
