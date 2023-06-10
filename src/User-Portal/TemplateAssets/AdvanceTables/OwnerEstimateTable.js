import React from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import { Row, Dropdown, Col, Form, Card } from "react-bootstrap";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import NavbarStandard from "../../Components/Header/AdvanceHeader/NavbarStandard";
import CardDropdown from '../common/CardDropdown'
import { Link } from "react-router-dom";
const columns = [
    {
        accessor: 'date',
        Header: 'Date'
    },
    // {
    //     accessor: 'customerName',
    //     Header: 'Customer Name'
    // },
    {
        accessor: 'estimateNo',
        Header: 'Estimate No'
    },
    {
        accessor: 'enquiryNo',
        Header: 'Enquiry No'
    },
    {
        accessor: 'status',
        Header: 'Status'
    },
    {
        accessor: 'amount',
        Header: 'Amount'
    },
    {
        accessor: 'action',
        Header: 'Action'
    }
];

const data = [
    {
        date: '22 MAR 2023',
        customerName: 'Peter Leverkus',
        estimateNo: "MAI/EST/2737",
        enquiryNo: '#2737',
        status: <span className="badge bg-success">
            Paid
        </span>,
        amount: "£ 281.81",
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>
            </div>
        </CardDropdown>
    },
    {
        date: '22 MAR 2023',
        customerName: 'Peter Leverkus',
        estimateNo: "MAI/EST/2737",
        enquiryNo: '#2737',
        status: <span className="badge bg-danger">
            Declined
        </span>,
        amount: "£ 281.81",
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>

            </div>
        </CardDropdown>
    },
    {
        date: '22 MAR 2023',
        customerName: 'Peter Leverkus',
        estimateNo: "MAI/EST/2737",
        enquiryNo: '#2737',
        status: <span className="badge bg-primary">
            New
        </span>,
        amount: "£ 281.81",
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>View</Dropdown.Item>
                <Dropdown.Item>Download</Dropdown.Item>

            </div>
        </CardDropdown>
    },
];

const OwnerEstimateTable = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
            </Row>

        );
    };

    return (
        <>
            <Row>
                <Col lg={12} className="mb-5">
                    <NavbarStandard />
                </Col>
            </Row>
            <div className="container mt-4">
                <Card className="mb-3 btn-reveal-trigger h-100">
                    <Card.Header as="h5" className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                        <h5 className="text-capitalize">
                            Estimate
                        </h5>
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
            </div>
        </>
    )
}
export default OwnerEstimateTable
