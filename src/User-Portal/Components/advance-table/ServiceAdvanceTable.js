import React, {useEffect, useState} from "react";
import AdvanceTableWrapper from "./AdvanceTableWrapper";
import AdvanceTable from "./AdvanceTable";
import AdvanceTableFooter from "./AdvanceTableFooter";
import { Row, Button, Col, Form,Dropdown } from "react-bootstrap";
import IconButton from "./IconButton";
import product_image from "../Img/product_image.png"
import CardDropdown from '../utilities/CardDropdown'
import { getAllData } from "../../../Services/ProxyService";

const ServiceAdvancedTable = () => {

    const [service, setService] = useState([])

    const Serviceslist = async () => {
        const response = await getAllData('services/all');
        setService(response.data.services);
        sessionStorage.setItem("servicelength", response.data.services.length)
    }

    useEffect(()=>{
        Serviceslist()
    }, [])

    const columns = [
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
            accessor: 'priceType',
            Header: 'PriceType'
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
        const data = service.map(_service => ({
        name: _service.title,
        priceType: _service.price_type,
        email: _service.email,
        price: _service.price,
        status:_service.status == "Active"?<span className="badge bg-success p-2">{_service.status}</span> : <span className="badge p-2 bg-warning">{_service.status}</span>,
        action: <CardDropdown>
                <div className="py-2">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Enable</Dropdown.Item>
                    <Dropdown.Item>View in Store</Dropdown.Item>
                    <Dropdown.Item>Deny</Dropdown.Item>
                    <Dropdown.Item>Disable</Dropdown.Item>
                    <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
                </div>
            </CardDropdown>
      }));
    
    // const data = [
    //     {
    //         name: 'Electronic Servies',
    //         image: <img src={product_image} width="40px" height="35px" />,
    //         priceType: "Per Hour Cost",
    //         email: 'anna@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'homer@example.com',
    //         price: '£100',
    
    //         status: <span className="badge p-2 bg-warning">Draft</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'oscar@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'emily@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'jara@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     }, {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'emily@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'jara@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     }, {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'emily@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'jara@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     }, {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'emily@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'jara@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     },
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'jara@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     }
    //     ,
    //     {
    //         name: 'Minor Home Repair Services',
    
    //         priceType: "Per Hour Cost",
    //         email: 'jara@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     }
    //     ,
    //     {
    //         name: 'Electronic Servies',
    
    //         priceType: "Per Hour Cost",
    //         email: 'jara@example.com',
    //         price: '£100',
    
    //         status: <span className="badge bg-success p-2">Active</span>,
    //         action: <CardDropdown>
    //             <div className="py-2">
    //                 <Dropdown.Item>Edit</Dropdown.Item>
    //                 <Dropdown.Item>Enable</Dropdown.Item>
    //                 <Dropdown.Item>View in Store</Dropdown.Item>
    //                 <Dropdown.Item>Deny</Dropdown.Item>
    //                 <Dropdown.Item>Disable</Dropdown.Item>
    //                 <Dropdown.Item className='text-danger'>Delete</Dropdown.Item>
    //             </div>
    //         </CardDropdown>
    //     }
    // ];

    function BulAction({ selectedRowIds }) {
        return (
            <Row className="flex-between-center mb-3">
                <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
                    <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">
                        {
                            Object.keys(selectedRowIds).length > 0 ?
                                'You have selected ' + Object.keys(selectedRowIds).length + ' Services Lists'
                                :
                                'Services List'
                        }
                    </h5>
                </Col>
                {/* <Row className="flex-end-center mt-2 mb-3">
                    <Col xs="auto">
                        <AdvanceTableSearchBox table />
                    </Col>
                </Row> */}
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
                    classpriceType: 'fs--1 mb-0 overflow-hidden'
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
export default ServiceAdvancedTable
