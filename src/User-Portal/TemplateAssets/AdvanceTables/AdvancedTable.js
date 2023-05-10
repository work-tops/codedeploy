import React, { useEffect, useState } from "react";
import AdvanceTableWrapper from "../common/advance-table/AdvanceTableWrapper";
import AdvanceTable from "../common/advance-table/AdvanceTable";
import AdvanceTableFooter from "../common/advance-table/AdvanceTableFooter";
import { Row, Button, Col, Form } from "react-bootstrap";
import IconButton from "../common/IconButton";
import AdvanceTableSearchBox from "../common/advance-table/AdvanceTableSearchBox";
import product_image from "../Images/product_image.png"
import CardDropdown from "../common/CardDropdown";
import { Dropdown } from "react-bootstrap";
import { getAllData } from "../../../Services/ProxyService";
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "PORTUM KC NATURAL DEKTON",
        email: 'homer@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge p-2 bg-warning">Approval Pending</span>,
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'oscar@example.com',
        price: '£100',
        quantity: "10 Pcs",
        status: <span className="badge p-2 bg-secondary">Disabled</span>,
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'emily@example.com',
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "PORTUM KC NATURAL DEKTON",
        email: 'jara@example.com',
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
    }, {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'emily@example.com',
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "FANTASY BROWN GRANITE123",
        email: 'jara@example.com',
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
    }, {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'emily@example.com',
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "VENDOME TERRAZZO",
        email: 'jara@example.com',
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
    }, {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "WHITE ROSE ONYXz",
        email: 'emily@example.com',
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'jara@example.com',
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
    {
        productId: '643456',
        image: <img src={product_image} width="40px" height="35px" />,
        name: "Marble",
        email: 'jara@example.com',
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
    }
];

const AdvancedTable = () => { 

    const [product, setproducts] = useState([]);
    console.log(product.length)

    const Productlist = async () => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        const response = await getAllData('products');
        var _data = response.data.products.filter(x=> x.created_by == _json._id)
        setproducts(_data);
        sessionStorage.setItem("productlength", _data.length)
    }

    useEffect(() => {
        Productlist()
    }, [])


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

    const data = product.map(product => ({
        productId: product._id,
        image: <img src={product.attachments[0].url} width="40px" height="35px" />,
        name: product.name,
        email: product.seller_email,
        price: `£${product.variant[0].pricing.price}`,
        quantity: `${product.variant[0].inventory.quantity} Pcs`,
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
        </CardDropdown>,
    }));



    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Product Lists'
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
