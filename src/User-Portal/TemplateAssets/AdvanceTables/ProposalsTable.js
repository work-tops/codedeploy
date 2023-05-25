import React, { useEffect, useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form, Modal } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { getAllData } from "../../../Services/ProxyService";
import { Link } from "react-router-dom";


const AdvancedTable = () => {

    const [proposals, setProposals] = useState([]);
    const [user, setUser] = useState([]);

    const getProposals = async () => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        setUser(_json);
        const response = await getAllData('proposals/all');
        var _data = response.data.proposals;
        _data = _data.filter(x => x.created_by == _json._id);
        setProposals(_data);
    }
    useEffect(() => {
        getProposals();
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

    const data = proposals.map(x => ({
        proposalID: x?._id,
        projectTitle: x?.job?.project_title,
        price: x?.amount,
        status: <span className={`badge ${x.is_approved ? 'bg-success' : 'bg-danger'} p-2`}>{x.is_approved == true ? `Accepted` : `Pending`}</span>,
        action: <p className="mt-2" role="button">
            <Link to={'/proposalDetails'}>
                View
            </Link>
        </p>
        // action: <Link to={'/proposalDetails'}><Icon className="ms-3" icon="ic:outline-remove-red-eye" color="#003f6b" width="20" height="20" /></Link>
    }));



    function BulAction({ selectedRowIds }) {
        return (
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
                {/*  */}
                
                {/*  */}
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