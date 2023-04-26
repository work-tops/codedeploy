import React from "react";
import AdvanceTableWrapper from "../advance-table/AdvanceTableWrapper";
import AdvanceTable from "../advance-table/AdvanceTable";
import { Row, Button, Col, Form, Card } from "react-bootstrap";
// import CardDropdown from '../utilities/CardDropdown'
const columns = [
    {
        accessor: 'date',
        Header: 'Date'
    },
    {
        accessor: 'invoice',
        Header: 'Invoice No'
    },
    {
        accessor: 'description',
        Header: 'Description'
    },
    {
        accessor: 'amount',
        Header: 'Amount'
    },
    {
        accessor:'status',
        Header:'Status'
    }
];

const data = [
    {
        date: '22 MAR 2023',
        invoice: "#M24AZQ",
        description: <span className="w-50">
            Invoice #3611731-1 paid to Alhaz Abdul K. for Project do 15... (Approved)
        </span>,
        amount: "£ 281.81",
        status:"Paid"
    },
    {
        date: '22 MAR 2023',
        invoice: "#M24AZQ",
        description: <span className="w-50">
            Invoice #3611731-1 paid to Alhaz Abdul K. for Project do 15... (Approved)
        </span>,
        amount: "£ 281.81",
        status:"Paid"
    },
    {
        date: '22 MAR 2023',
        invoice: "#M24AZQ",
        description: <span className="w-50">
            Invoice #3611731-1 paid to Alhaz Abdul K. for Project do 15... (Approved)
        </span>,
        amount: "£ 281.81",
        status:"Paid"
    },

];

const InvoiceTable = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
            </Row>

        );
    };

    return (
        <Card>
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

                    {/* <div>
                <AdvanceTableFooter
                className="mt-3"
                rowCount={data.length}
                table
                rowInfo
                navButtons
                rowsPerPageSelection
                />
            </div > */}
                </AdvanceTableWrapper>
            </Card.Body>
        </Card>
    )
}
export default InvoiceTable
