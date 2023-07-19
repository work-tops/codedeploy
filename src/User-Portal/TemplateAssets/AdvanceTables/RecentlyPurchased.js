import React, { useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Modal, Col, Card } from "react-bootstrap";
import CardDropdown from "../common/CardDropdown";
import { Link } from "react-router-dom";
import product_image from '../../Components/Images/Granite.png'
const RecentlyPurchased = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const columns = [
        {
            accessor: 'image',
            Header: 'Product Image'
        },
        {
            accessor: 'productName',
            Header: 'Product Name'
        },
        {
            accessor: 'date',
            Header: 'Purchase Date'
        },
        {
            accessor: 'invoice',
            Header: 'Invoice'
        },
        {
            accessor: 'price',
            Header: 'Price'
        },

        {
            accessor: 'status',
            Header: 'Payment'
        },

    ];
    const data = [
        {
            productName: 'CALACATTA LIGHT QUARTZ',
            image: <img src={product_image} width="40px" height="35px" />,
            date: '10 May 2023',
            invoice: '#FA613145',
            price: '£ 308.69',
            status: <span className="badge bg-success">Successful</span>,

        }
    ]

    function BulAction({ selectedRowIds }) {
        return (
            <>
                <Row className="flex-between-center mb-3">
                    <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                        {/* <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                            {
                                Object.keys(selectedRowIds).length > 0 ?
                                    'You have selected ' + Object.keys(selectedRowIds).length + ' Enquiries'
                                    :
                                    ''
                            }
                        </h5> */}
                    </Col>
                    {/* <Row className="flex-end-center mt-2 mb-3">
                            <Col xs="auto">
                                <AdvanceTableSearchBox table />
                            </Col>
                        </Row> */}
                    <Col xs={8} sm="auto" className="ms-auto text-end ps-0">
                        {Object.keys(selectedRowIds).length > 0 ? (
                            <div className="d-flex">
                                {/* <Form.Select size="sm" aria-label="Bulk actions">
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
                                </Button> */}
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
        <Card className="btn-reveal-trigger h-100">
            <Card.Header className="d-flex gap-2 flex-wrap flex-between-center bg-white ">
                <h2 className="text-capitalize">
                    Recently Purchased
                </h2>
            </Card.Header>
            <Card.Body>
                <AdvanceTableWrapper
                    columns={columns}
                    data={data}
                    sortable
                    pagination
                    perPage={5}
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
    )
}
export default RecentlyPurchased
