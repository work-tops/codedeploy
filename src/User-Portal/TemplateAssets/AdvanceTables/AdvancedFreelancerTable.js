import React from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form } from "react-bootstrap";
import IconButton from "../common/IconButton";
import AdvanceTableSearchBox from "../common/advance-table/AdvanceTableSearchBox";
import product_image from "../Images/product_image.png"
import CardDropdown from "../common/CardDropdown";
import { Dropdown } from "react-bootstrap";
const columns = [
    {
        accessor: 'freelancerId',
        Header: 'Freelancer ID'
    },
    {
        accessor: 'image',
        Header: 'Freelancer Profile'
    },
    {
        accessor: 'name',
        Header: 'Name'
    },
    {
        accessor: 'bussinessName',
        Header: 'Bussiness Name'
    },
    {
        accessor: 'verification',
        Header: 'Verification'
    },
    {
        accessor: 'date',
        Header: 'Date'
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
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Steve",
        bussinessName: 'anna',
        verification: <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Sam",
        bussinessName: 'homer',
        verification: <span className="badge p-2 bg-warning">Not Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-warning">Approval Pending</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "George",
        bussinessName: 'oscar',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-secondary">Change Password</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Franncis",
        bussinessName: 'emily',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Andreson",
        bussinessName: 'jara',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Manikandan",
        bussinessName: 'emily',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Vishnu",
        bussinessName: 'jara',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Harish",
        bussinessName: 'emily',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Saravanan",
        bussinessName: 'jara',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Rahim",
        bussinessName: 'emily',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Kumar",
        bussinessName: 'jara',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Jagan",
        bussinessName: 'jara',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        freelancerId: '664345',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Gopal",
        bussinessName: 'jara',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        freelancerId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Abigail",
        bussinessName: 'jara',
        verification:  <span className="badge p-2 bg-success">Verified</span>,
        date: "31 Mar 2023",
        status: <span className="badge p-2 bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Send Message</Dropdown.Item>
                <Dropdown.Item>Change Password</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
];

const AdvancedFreelancerTable = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Freelancer Lists'
                                :
                                'Freelancer List'
                        }
                    </h5>
                </Col>
                        <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row>
                <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
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
                            <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="plus"
                                transform="shrink-3"
                                className='me-2'
                            >
                                <span className="d-none d-sm-inline-block ms-1">New</span>
                            </IconButton>
                            <IconButton
                                variant="falcon-default"
                                size="sm"
                                icon="external-link-alt"
                                transform="shrink-3"
                            >
                                <span className="d-none d-sm-inline-block ms-1">Export</span>
                            </IconButton>
                        </div>
                    )}
                </Col>
            </Row>
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
                    className: 'fs--1 mb-0 overflow-hidden'
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
export default AdvancedFreelancerTable
