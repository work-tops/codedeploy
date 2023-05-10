import React, { useEffect, useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { getAllData } from "../../../Services/ProxyService";


const AdvancedTable = () => {

    const [product, setproducts] = useState([]);
    console.log(product.length)

    const Productlist = async () => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        const response = await getAllData('products');
        var _data = response.data.products.filter(x => x.created_by == _json._id)
        setproducts(_data);
        sessionStorage.setItem("productlength", _data.length)
    }

    useEffect(() => {
        Productlist()
    }, [])


    const columns = [
        {
            accessor: 'proposalID',
            Header: 'Proposal ID'
        },

        {
            accessor: 'projectTitle',
            Header: 'Project Title'
        },

        {
            accessor: 'price',
            Header: 'Price'
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

    const data = product.map(product => ({
        proposalID: "2456781",
        projectTitle: "Emeka Warehouse",
        price: "£ 77.00",
        status: <span className="badge bg-success p-2">Accepted</span>,
        action: <Icon className="ms-3" icon="ic:outline-remove-red-eye" color="#003f6b" width="20" height="20" />
    }));



function BulAction({ selectedRowIds }) {
    return (
        <Row className="flex-between-center mb-3">
            <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                    {
                        Object.keys(selectedRowIds).length > 0 ?
                            'You have selected ' + Object.keys(selectedRowIds).length + ' Proposals'
                            :
                            ''
                    }
                </h5>
            </Col>
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
export default AdvancedTable