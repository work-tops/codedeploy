import React from "react";
import AdvanceTableWrapper from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../../User-Portal/TemplateAssets/common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Card } from "react-bootstrap";
import CardDropdown from "../../User-Portal/TemplateAssets/common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import { Icon } from "@iconify/react";
import AdminHeader from "../Menubar/AiMenu";
import { Link } from "react-router-dom";
const columns = [
    {
        accessor: 'enquireId',
        Header: 'Enquire ID',
    },
    {
        accessor: 'customerName',
        Header: 'Customer Name'
    },
    {
        accessor: 'traderName',
        Header: 'Trader Name'
    },
    {
        accessor: 'QueryTitle',
        Header: 'Query Title'
    },
    {
        accessor: 'date',
        Header: 'Date'
    },

    {
        accessor: 'status',
        Header: 'Status'
    },

];

const data = [
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        enquireId: "623643",
        QueryTitle: "Master Card",
        date: "10 April 2023",
        status: <span className="badge  bg-success">Open</span>,

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-danger">Closed</span>,
        enquireId: "623643", QueryTitle: "Master Card", date: "10 April 2023",

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Master Card", date: "10 April 2023",

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Master Card", date: "10 April 2023",

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "eBay", date: "10 April 2023",

    }, {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "eBay", date: "10 April 2023",

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Facebook", date: "10 April 2023",

    }, {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Facebook", date: "10 April 2023",

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Gilletee", date: "10 April 2023",

    }, {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Gilletee", date: "10 April 2023",

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Gilletee", date: "10 April 2023",

    },
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-danger">Closed</span>,
        enquireId: "623643", QueryTitle: "Master Card", date: "10 April 2023",

    }
    ,
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Master Card", date: "10 April 2023",

    }
    ,
    {
        customerName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Peter Leverkus</p>
            </Link>
        </>,
        traderName: <>
            <Link to="/ConversationDetails">
                <p className="fs--1">Gms</p>
            </Link>
        </>,
        status: <span className="badge  bg-success">Open</span>,
        enquireId: "623643", QueryTitle: "Master Card", date: "10 April 2023",

    }
];

const AllEnquires = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            // Object.keys(selectedRowIds).length > 0 ?
                            //     'You have selected ' + Object.keys(selectedRowIds).length + 'Lists'
                            //     :
                            //     ''
                        }
                    </h5>
                </Col>
                <Row className="flex-end-center mt-2 mb-3">
                    <Col xs="auto">
                        {/* <AdvanceTableSearchBox table /> */}
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
                            <Button variant="falcon-default"
                                size="sm" className="fs--1"><Icon icon="entypo:export" width="18" height="18" className="" /><span className="d-none ms-2 d-lg-inline">Export</span>
                            </Button>
                        </div>
                    )}
                </Col>
            </Row>
        );
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <AdminHeader />
                </Col>
                <Col lg={12} className="mt-4">
                    <Card className="ms-3 me-3 mb-3">
                        <Card.Header className="bg-light" as={"h5"}>
                            All Enquires<span className="ms-1 fs--1 badge bg-secondary">#100</span>
                        </Card.Header>
                        <Card.Body>

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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default AllEnquires
