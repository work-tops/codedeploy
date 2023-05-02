import React from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form } from "react-bootstrap";
import IconButton from "../common/IconButton";
import AdvanceTableSearchBox from "../common/advance-table/AdvanceTableSearchBox";
// import product_image from "../../Images/product_image.png"
import CardDropdown from "../common/CardDropdown";
import { Dropdown } from "react-bootstrap";
const columns = [
    {
        accessor: 'jobId',
        Header: 'Job ID'
    },
    {
        accessor: 'category',
        Header: 'Category'
    },
    {
        accessor: 'title',
        Header: 'Title'
    },
    {
        accessor: 'budget',
        Header: 'Budget'
    },
    {
        accessor: 'jobStatus',
        Header: 'Job Status'
    },
    {
        accessor: 'expDate',
        Header: 'Exp Date'
    },
    {
        accessor: 'status',
        Header: 'Status'
    },
    {
        accessor: 'createdDate',
        Header: 'Created Date        '
    },
    {
        accessor: 'modifiedDate',
        Header: 'Modified Date'
    },
    {
        accessor: 'action',
        Header: 'Action'
    }
];

const data = [
    {
        jobId: '643456',
        category: 'Bar ',
        title: 'test-project-4',
        budget: '123',
        jobStatus: <span className="badge  bg-warning">Processing</span>,
        expDate: "31 Mar 2023",createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bar ',
        title: 'test-project-4',
        budget: '123',
        jobStatus: <span className="badge  bg-danger">Not Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-warning">Approval Pending</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'ct-3 ',
        title: 'test-project-3',
        budget: '123',
        jobStatus: <span className="badge  bg-success">Completed</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-secondary">Disabled</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'ct-3 ',
        title: 'test-project-11',
        budget: '1213',
        jobStatus: <span className="badge  bg-success">Completed</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-danger">Expired</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'ct-3 ',
        title: 'test-project-13',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        jobId: '643456',
        category: 'Bedroom ',
        title: 'test-project-5',
        budget: '1213',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bedroom',
        title: 'test-project-1',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        jobId: '643456',
        category: 'Attic ',
        title: 'test-project-15',
        budget: '1213',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bathroom ',
        title: 'test-project-7',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }, {
        jobId: '643456',
        category: 'Bathroom ',
        title: 'test-project-4',
        budget: '1213',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Bathroom ',
        title: 'test-project-10',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        jobId: '643456',
        category: 'Attic ',
        title: 'test-project-14',
        budget: '077',
        jobStatus: <span className="badge  bg-danger">Not Hired</span>,
        expDate: "31 Mar 2023", createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        jobId: '664345',
        category: 'Attic ',
        title: 'test-project-08',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023",createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
    ,
    {
        jobId: '643456',
        category: 'Bar ',
        title: 'test-project-9',
        budget: '077',
        jobStatus: <span className="badge  bg-primary">Hired</span>,
        expDate: "31 Mar 2023",createdDate: "02 Apr 2023",modifiedDate:"22 Apr 2023",
        status: <span className="badge  bg-success">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>Deny</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    }
];

const AdvancedJobTable = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Job Lists'
                                :
                                'Job List'
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
export default AdvancedJobTable
