import React from "react";
import AdvanceTableWrapper from "../advance-table/AdvanceTableWrapper";
import AdvanceTable from "../advance-table/AdvanceTable";
import AdvanceTableFooter from "../advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form } from "react-bootstrap";
import IconButton from "../advance-table/IconButton";
import product_image from "../Img/product_image.png"
// import CardDropdown from '../utilities/CardDropdown'
const columns = [
    {
        accessor: 'productId',
        Header: 'Product ID'
    },
    {
        accessor: 'image',
        Header: 'Image'
    },
    {
        accessor: 'name',
        Header: 'Name'
    },
    {
        accessor: 'email',
        Header: 'Seller',
        Cell: rowData => {
            const { email } = rowData.row.original
            return (
                <a href={'mailto:' + email}>
                    {email}
                </a>
            )
        }
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
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'anna@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "PORTUM KC NATURAL DEKTON",
        email: 'homer@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge p-2 bg-warning">Approval Pending</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'oscar@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge p-2 bg-secondary">Disabled</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'emily@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "PORTUM KC NATURAL DEKTON",
        email: 'jara@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    }, {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'emily@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "FANTASY BROWN GRANITE123",
        email: 'jara@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    }, {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'emily@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "VENDOME TERRAZZO",
        email: 'jara@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    }, {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "WHITE ROSE ONYXz",
        email: 'emily@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'jara@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    },
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'jara@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    }
    ,
    {
        productId: '664345',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'jara@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    }
    ,
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'jara@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge bg-success p-2">Approved</span>,

    }
];

const AdvancedTable = () => {
    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 m-3 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Product Lists'
                                :
                                'Product List'
                        }
                    </h5>
                </Col>

                <Col xs={8} sm="auto" className="ms-auto  m-3 text-end ps-0">
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
                        <div id="orders-actions m-3">
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

            <AdvanceTableFooter
                className="mt-3"
                rowCount={data.length}
                table
                rowInfo
                navButtons
                rowsPerPageSelection
            />
        </AdvanceTableWrapper>
    )
}
export default AdvancedTable
