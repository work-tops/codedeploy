import React, { useEffect, useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Modal, Form, Dropdown, Card } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Link } from "react-router-dom";
import profile from '../../Components/Projectimages/Handyman.jpg'
import { Icon } from "@iconify/react";

const ProposalListsTable = () => {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const columns = [
        {
            accessor: 'name',
            Header: 'Name'
        },
        {
            accessor: 'image',
            Header: 'Image'
        },
        {
            accessor: 'date',
            Header: 'Date'
        },
        {
            accessor: 'skills',
            Header: 'Skills'
        },

        {
            accessor: 'description',
            Header: 'Description'
        },
        {
            accessor: 'experience',
            Header: 'Experience'
        },
        {
            accessor: 'duration',
            Header: 'Duration'
        },
        {
            accessor: 'budget',
            Header: 'Budget'
        },
        {
            accessor: 'status',
            Header: 'Status'
        },
        {
            accessor: 'action',
            Header: 'Action'
        }
    ];
    const data = [
        {
            name: 'IRIE ARTS INC',
            image:
                <Link to="/profile_publicview">
                    <img src={profile} className="rounded-circle" height={30} width={30} />
                </Link>,
            date: '01 May 2023',
            skills: 'Fabricator , Kitchen Designer',
            experience: '4 Years',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            duration: '2 Months',
            budget: '2300',
            status: <span className="badge bg-success">Accepted</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow} className="text-primary">View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-success">Accept</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-secondary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            name: 'IRIE ARTS INC',
            image: <Link to="/profile_publicview">
                <img src={profile} className="rounded-circle" height={30} width={30} />
            </Link>,
            date: '01 May 2023',
            skills: 'Fabricator , Kitchen Designer',
            experience: '4 Years',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            duration: '2 Months',
            budget: '2300',
            status: <span className="badge bg-danger">Declined</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow} className="text-primary">View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-success">Accept</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-secondary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            name: 'IRIE ARTS INC',
            image: <Link to="/profile_publicview">
                <img src={profile} className="rounded-circle" height={30} width={30} />
            </Link>,
            date: '01 May 2023',
            skills: 'Fabricator , Kitchen Designer',
            experience: '4 Years',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            duration: '2 Months',
            budget: '2300',
            status: <span className="badge bg-warning">Pending</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow} className="text-primary">View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-success">Accept</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-secondary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
        {
            name: 'IRIE ARTS INC',
            image: <Link to="/profile_publicview">
                <img src={profile} className="rounded-circle" height={30} width={30} />
            </Link>,
            date: '01 May 2023',
            skills: 'Fabricator , Kitchen Designer',
            experience: '4 Years',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            duration: '2 Months',
            budget: '2300',
            status: <span className="badge bg-secondary">On Hold</span>,
            action: <CardDropdown>
                <Dropdown.Item onClick={handleShow} className="text-primary">View</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-success">Accept</Dropdown.Item>
                <Dropdown.Item as={Link} to="/proposalDetails" className="text-secondary">Reply</Dropdown.Item>
                <Dropdown.Item as={Link} to="#" className="text-danger">Decline</Dropdown.Item>
            </CardDropdown>
        },
    ]

    function BulAction({ selectedRowIds }) {
        return (
            <>
                <div>
                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        backdrop="static"
                        dialogClassName="modal-xl modal-90w"

                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header className='bg-light'>
                            <Button onClick={handleClose} className='bg-danger border-0'>Close</Button>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col lg={8}>
                                    <Card className='mt-3  me-3'>
                                        <Card.Body>
                                            <Row>
                                                <Col lg={3}>
                                                    <img src={profile} className="mb-3 rounded-circle" width="100px" height="100px" />
                                                    <p className="fw-bold ms-2 text-uppercase  text-900">Soanes IT</p>
                                                </Col>
                                                <Col lg={9}>
                                                    <Card style={{ border: '1px solid #003f6b' }}>
                                                        <Card.Body>
                                                            <h6 style={{ fontSize: '14px' }} className="text-700 fw-semibold">01 Apr 2023</h6>
                                                            <h5 className="mb-3">New Proposal</h5>
                                                            <p className="text-justify" style={{ fontSize: '14px' }}>
                                                                How are you? Sir / Madam Please send admin access details to website, Bitrix and email host.Also Price £200.00
                                                                your Whatsapp numberWill start nowPromise SIX star service.Please see 210 five star reviews of
                                                                many gigs that we have done in our profile Deposit £200
                                                                Many thanks David Soanes, Worthing BN11 4DT England
                                                            </p>
                                                            <p className="text-justify" style={{ fontSize: '14px' }} >
                                                                <span className="d-block mb-2 fw-semibold">
                                                                    Mobile : <span className="text-primary">07900 548 590</span>
                                                                </span>
                                                                <span className="d-block mb-2 fw-semibold">
                                                                    WhatsApp : <span className="text-primary">044 07900 548 590</span>
                                                                </span>
                                                                <span className="d-block mb-2 fw-semibold">
                                                                    Email : <span className="text-primary">info@alwebdezine.com</span>
                                                                </span>
                                                                <span className="d-block mb-2 fw-semibold">
                                                                    Skype : <span className="text-primary">info@alwebdezine.com</span>
                                                                </span>
                                                                <span className="d-block mb-3 fw-semibold">
                                                                    Web : <span className="text-primary">alwebdezine.com</span>
                                                                </span>
                                                                Please see my cv at this link <a href="#">https://surl.link/q0Lck3 https://surl.link/accessRestricted.html?</a> Decline
                                                                u=34452 password is abcdFor screen sharing:------------------Windows: Please search and open Quick
                                                                Assist App and | will send you the codeApple Mac: | will send you a Zoom link. Please send your
                                                                €MAl AAAESS. ~-mmmemmroem oo
                                                                <h6 className="mt-3 mb-3">TEAM</h6>
                                                                Our team of five experts consists of graphic artists, Office 365, IT Support, Wordpress and online
                                                                marketing consultantsREFEREESReferees for email migration ( Please contact by email only )Mr
                                                                Mark Bowen mark@supportedlivinggateway.comMr Colin McGregor colin@tranquilico.comMiss
                                                                Tracie Mckenna tracie.mckenna@1stresponse.org.uk
                                                            </p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={4}>
                                    <Card className='mt-3 me-3'>
                                        <Card.Body>
                                            <p className='text-end'>Fixed Price</p>
                                            <p className='fw-semibold'>Details</p>
                                            <div className='d-flex justify-content-between'>
                                                <p>Deposit</p>
                                                <p className='text-success'>£ 200</p>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <p>Proposal ID</p>
                                                <p className='text-warning'>243623456</p>
                                            </div>
                                            <p role='button' className='fw-semibold text-900'><Icon style={{ marginTop: '-5px' }} icon="flat-color-icons:like" className='me-2' width="20" height="20" />Mark as Favourite</p>
                                            <div className='mt-3 d-flex justify-content-between'>
                                                <Dropdown>
                                                    <Dropdown.Toggle style={{ background: '#003f6b', fontSize: '14px' }} id="dropdown-basic">
                                                        Reply
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to="/proposaldetails" className="text-success">Accept</Dropdown.Item>
                                                        <Dropdown.Item className="text-danger">Decline</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <p role='button' onClick={handleShow1} className='mt-1 ms-3'>Report this Profile</p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Modal.Body>
                    </Modal>
                    {/* </Flex> */}
                    <Modal
                        show={show1}
                        onHide={() => setShow1(false)}
                        backdrop="static"
                        dialogClassName="modal-md modal-90w"
                        centered
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Body>
                            <h5 className='text-uppercase mb-3 text-center'>Report Soanes IT</h5>
                            <h6 style={{ fontSize: '16px' }} className='text-900 mb-3 mt-3'>Why You are reporting to this profile</h6>
                            {/*  */}
                            <Form>
                                <Form.Check type="radio" className="mb-0 mt-3">
                                    <Form.Check.Input name="job-start" type="radio" />
                                    <Form.Check.Label
                                        className="d-inline"
                                        style={{ fontSize: '14px' }}
                                    >
                                        Contact Details are Revealed
                                    </Form.Check.Label>
                                </Form.Check>
                                <Form.Check type="radio" className="mb-0 mt-3">
                                    <Form.Check.Input name="job-start" type="radio" />
                                    <Form.Check.Label
                                        className=" d-inline"
                                        style={{ fontSize: '14px' }}
                                    >
                                        Suggestion to make payment outside PPH
                                    </Form.Check.Label>
                                </Form.Check>
                                <Form.Check type="radio" className="mb-0 mt-3">
                                    <Form.Check.Input name="job-start" type="radio" />
                                    <Form.Check.Label
                                        className=" d-inline"
                                        style={{ fontSize: '14px' }}
                                    >
                                        Promoting Self
                                    </Form.Check.Label>
                                </Form.Check>
                                <Form.Check type="radio" className="mb-0 mt-3">
                                    <Form.Check.Input name="job-start" type="radio" />
                                    <Form.Check.Label
                                        className="d-inline"
                                        style={{ fontSize: '14px' }}
                                    >
                                        Offensive Content
                                    </Form.Check.Label>
                                </Form.Check>
                                <Form.Check type="radio" className="mb-0 mt-3">
                                    <Form.Check.Input name="job-start" type="radio" />
                                    <Form.Check.Label
                                        className=" d-inline"
                                        style={{ fontSize: '14px' }}
                                    >
                                        Spam Content
                                    </Form.Check.Label>
                                </Form.Check>
                                <Form.Check type="radio" className="mb-0 mt-3">
                                    <Form.Check.Input name="job-start" type="radio" />
                                    <Form.Check.Label
                                        className=" d-inline"
                                        style={{ fontSize: '14px' }}
                                    >
                                        Others
                                    </Form.Check.Label>
                                </Form.Check>
                                {/*  */}
                                <Form.Group className='mt-3 mb-3'>
                                    <Form.Label>
                                        Details :
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                    />
                                </Form.Group>
                                <div className='d-flex justify-content-end'>
                                    <Button as={Link} to="/owner" onClick={handleClose1} style={{ background: '#003f6b' }}>Submit</Button>
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    {/*  */}
                </div>



                <Row className="flex-between-center mb-3">
                    <Col xs={12} md={8} lg={7} sm="12" className="mt-3  pe-0">
                        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                            {
                                Object.keys(selectedRowIds).length > 0 ?
                                    'You have selected ' + Object.keys(selectedRowIds).length + ' Proposals'
                                    :
                                    ''
                            }
                        </h5>
                    </Col>
                    {/* <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row> */}
                    <Col xs={12} md={4} lg={5} sm="12" className="mt-3 ms-auto text-end ps-0">
                        {Object.keys(selectedRowIds).length > 0 ? (
                            <div className="d-flex">
                                <Form.Select size="sm" aria-label="Bulk actions">
                                    <option>Bulk Actions</option>
                                    <option value="refund">Refund</option>
                                    <option value="delete">Delete</option>
                                    <option value="archive">Archive</option>
                                </Form.Select>
                                <Button
                                    type="button"
                                    variant="falcon-default"
                                    size="sm"
                                    className="ms-2"
                                >
                                    Apply
                                </Button>
                            </div>
                        ) : (
                            <div id="orders-actions">
                                {/* <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="plus"
                                transform="shrink-3"
                                className='me-2'
                            >
                                <span className="d-none d-sm-inline-block ms-1">New</span>
                            </IconButton> */}
                                {/* <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="external-link-alt"
                                transform="shrink-3"
                            >
                                <span className="d-none d-sm-inline-block ms-1">Export</span>
                            </IconButton> */}
                            </div>
                        )}
                    </Col>
                </Row>
            </>
        );
    };

    return (
        <AdvanceTableWrapper
            columns={columns}
            data={data}
            sortable
            pagination
            perPage={5}
            selection
            selectionColumnWidth={30}
        >
            <BulAction table />
            <AdvanceTable
                table
                headerClassName="bg-200 text-900 text-nowrap align-middle"
                rowClassName="align-middle white-space-nowrap"
                tableProps={{
                    striped: true,
                    classpriceType: 'fs--1 mb-0 overflow-hidden'
                }}
            />
            <div className="mt-3">
                <AdvanceTableFooter
                    rowCount={data.length}
                    table
                    rowInfo
                    navButtons
                    rowsPerPageSelection
                />
            </div>
        </AdvanceTableWrapper>
    )
}
export default ProposalListsTable
