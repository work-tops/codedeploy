import React, { useEffect, useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Card, Col, Form, Modal } from "react-bootstrap";
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
        status: <span className={`badge ${x.is_approved ? 'bg-success' : 'bg-danger'}`}>{x.is_approved == true ? `Accepted` : `Pending`}</span>,
        action: <p className="mt-2" role="button">
            <Link to={'/proposal-details'}>
                View
            </Link>
        </p>
        // action: <Link to={'/proposal-details'}><Icon className="ms-3" icon="ic:outline-remove-red-eye" color="#003f6b" width="20" height="20" /></Link>
    }));



    function BulAction({ }) {
        return (
            <>
                <Row className="flex-between-center mb-3">
                </Row>
            </>
        );
    };

    return (
        <>
            <Card className="mb-3">
                <Card.Header className=" text-uppercase bg-light">
                    <div className="row">
                        <div className="col-lg-10 col-sm-12 col-md-8">
                            <h5>My Proposals</h5>
                        </div>
                        <div className="col-lg-2 col-sm-12 col-md-4">
                            <Form.Label>Sort By</Form.Label>
                            <Form.Select>
                                <option>All</option>
                                <option>Accepeted</option>
                                <option>Pending</option>
                                <option>Declined</option>
                            </Form.Select>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <AdvanceTableWrapper
                        columns={columns}
                        data={data}
                        sortable
                        pagination
                        // perPage={5}
                        // selection
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
        </>
    )
}
export default AdvancedTable