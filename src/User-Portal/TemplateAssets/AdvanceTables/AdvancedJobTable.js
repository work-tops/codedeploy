import React, { useEffect, useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import { Row, Button, Col, Form, Modal } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


const AdvancedJobTable = () => {

    const columns = [
        {
            accessor: 'productId',
            Header: 'Item Details'
        },
        {
            accessor: 'image',
            Header: 'Quantity'
        },
        {
            accessor: 'name',
            Header: 'Rate'
        },
        
        {
            accessor: 'price',
            Header: 'Price'
        },
        {
            accessor: 'quantity',
            Header: 'Quantity'
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
        productId: <>
        <textarea rows={3} className="form-control"></textarea>
        </>,
        image: <>
        <input type="number" className="w-lg-50 form-control"/>
        </>,
        name:  <>
        <input type="number" className="w-lg-50 form-control"/>
        </>,
        email: 'anna@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,
        action: <CardDropdown>
            <div className="py-2">
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Enable</Dropdown.Item>
                <Dropdown.Item>View in Store</Dropdown.Item>
                <Dropdown.Item>Reassign</Dropdown.Item>
                <Dropdown.Item>Disable</Dropdown.Item>
                <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
            </div>
        </CardDropdown>
    },
   
]


    function BulAction({ selectedRowIds }) {
        return (
            <></>
        );
    };

    return (
        <AdvanceTableWrapper
            columns={columns}
            data={data}
            sortable
            pagination
            // perPage={5}
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
            
        </AdvanceTableWrapper>
    )
}
export default AdvancedJobTable
