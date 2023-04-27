import React from "react";
import { Card, Breadcrumb, Button, DropdownButton, Dropdown, Row, Col, Form, Table } from "react-bootstrap";
// import AdvanceTableSearchBox from '../advance-table/AdvanceTableSearchBox'
import AdvancedTable from "../advance-table/AdvancedTable"

function FrontEndAllProducts() {
  return (
    <>
      <div className='d-flex justify-content-between'>
        <div className="m-3">
          <h4>All Products</h4>
        </div>
        <div className="m-3">
          <Row>
            <Col lg={6}>
              <DropdownButton
                variant="outline-secondary"
                title="More Action"
                id="input-group-dropdown-2"
                align="end"
                className="mt-1"
              >
                <Dropdown.Item href="#">Bulk Edit</Dropdown.Item>
                <Dropdown.Item href="#">Add Product By CSV</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col lg={6}>
              <Button className='m-1 bg-success border-success'>Add Product</Button>
            </Col>

          </Row>
        </div>
      </div>
      <div className="mt-3">
        {/* <AdvanceTableSearchBox/> */}
        <AdvancedTable />
      </div>
    </>
  )
}
export default FrontEndAllProducts