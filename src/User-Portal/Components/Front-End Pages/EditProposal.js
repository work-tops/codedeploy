import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import toast, { Toaster } from 'react-hot-toast';
import { createData } from "../../../Services/ProxyService";
import NavbarStandard from "../Header/AdvanceHeader/NavbarStandard";
import { useHistory } from "react-router-dom";
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Button,
    Card,
    Dropdown,
    Image,
    InputGroup,
    Row,
    Col,
    Form,
    Container
} from 'react-bootstrap';
import { getSize } from '../../TemplateAssets/helpers/utils';
import cloudUpload from '../../TemplateAssets/assets/cloud-upload.svg';
import Flex from '../../TemplateAssets/common/Flex';
import CardDropdown from '../../TemplateAssets/common/CardDropdown';

function EditProposal() {

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

                {/* <Col lg={12} className="mt-4"> */}
                <Container className="mt-5">
                    <Row>
                        <Col lg={8}>
                            <Card className="mb-3">
                                <Card.Header as="h4" className="bg-light text-uppercase">
                                    Edit Your Proposal
                                </Card.Header>
                                <Card.Body>
                                    {/* <h6 >Proposal Amount</h6> */}
                                    <Form>
                                        <Form.Group className='mb-3'>
                                            <Form.Label style={{ fontSize: '14px' }} className=" text-700">
                                                Proposal Amount<span className="ms-1 text-danger">*</span>
                                            </Form.Label>

                                            <InputGroup className="mb-3">
                                                <Form.Control
                                                    required
                                                    name="proposal_amount"
                                                    // value={form.proposal_amount}
                                                    // onChange={(e) => { handleChange(e) }}
                                                    value="200"
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
                                                    <p className="fw-bold">(<span className="text-success">£</span>) - 20</p>
                                                    <p style={{ fontSize: '12px' }} className="me-2">"myproject.ai" Service Fee<i className="ms-2 text-success fa-solid fa-circle-info "></i></p>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <p className=" fw-bold">(<span className="text-success">£</span>) - 220</p>
                                                    <p style={{ fontSize: '12px' }} className="me-2">"Amount You'll Receive after" Service Fee education <i className="ms-2 text-success fa-solid fa-circle-info"></i></p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: '14px' }} className=" text-700">
                                                Completion Time<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                required
                                                name="completed_duration"
                                                value="2 Years"
                                                // value={form.completed_duration}
                                                // onChange={(e) => { handleChange(e) }}
                                                type="text"
                                                className=""
                                                placeholder="Add completion time" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label style={{ fontSize: '14px' }} className=" text-700">
                                                Cover Letter<span className="ms-1 text-danger">*</span>
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                required
                                                name="cover_letter"
                                                value="
                                                How are you? Sir / Madam Please send admin access details to website, Bitrix and email host.Also Price £200.00 your Whatsapp numberWill start nowPromise SIX star service.Please see 210 five star reviews of many gigs that we have done in our profile Deposit £200 Many thanks David Soanes, Worthing BN11 4DT England

Please see my cv at this link https://surl.link/q0Lck3 https://surl.link/accessRestricted.html? Decline u=34452 password is abcdFor screen sharing:------------------Windows: Please search and open Quick Assist App and | will send you the codeApple Mac: | will send you a Zoom link. Please send your €MAl AAAESS. ~-mmmemmroem oo
TEAM
Our team of five experts consists of graphic artists, Office 365, IT Support, Wordpress and online marketing consultantsREFEREESReferees for email migration ( Please contact by email only )Mr Mark Bowen mark@supportedlivinggateway.comMr Colin McGregor colin@tranquilico.comMiss Tracie Mckenna tracie.mckenna@1stresponse.org.uk
                                                "
                                                // onChange={(e) => { handleChange(e) }}
                                                placeholder="Cover Letter"
                                                rows={6} />
                                        </Form.Group>
                                        <div >
                                            <Form.Label className="text-700">
                                                Upload File
                                            </Form.Label>

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

                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <Button className="border-0 mt-3" style={{ background: '#003f6b', fontSize: '14px' }} type="submit">
                                                SEND
                                            </Button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            {/*  Customize Details  */}
                            <Card className="mb-3">
                                <Card.Header className="py-2 text-center  bg-light">
                                    <h4 className="mb-0">WHITE ATTICA SUPER NATURAL QUARTZ</h4>
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
                                                Low </p>
                                        </li>
                                        <li>
                                            <p style={{ fontSize: '14px' }} className="fw-semibold ms-1">
                                                <Icon icon="material-symbols:location-on"
                                                    className='me-1'
                                                    style={{ marginTop: '-1px' }}
                                                    color="#003f6b"
                                                    width="20"
                                                    height="20" />
                                                Chennai
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
                                                Attic
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
                                                Duration: 2 Years</p>
                                        </li>
                                    </ul>
                                </Card.Body>

                            </Card>
                            {/* Customize Details */}
                            
                        </Col>
                    </Row>
                    {/* </Col> */}
                </Container>
                <Toaster />
            </Row>
        </>
    )
}
export default EditProposal