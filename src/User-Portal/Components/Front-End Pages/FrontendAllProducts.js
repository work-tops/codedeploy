import React from "react";
import { Card, Breadcrumb, Button, DropdownButton, Dropdown, Row, Col, Form, Table } from "react-bootstrap";
// import AdvanceTableSearchBox from '../advance-table/AdvanceTableSearchBox'
import AdvancedTable from "../../TemplateAssets/AdvanceTables/AdvancedTable"
import { Link } from "react-router-dom";


function FrontEndAllProducts() {
  return (
    <>
      <Card className="mb-3">
        <Card.Body className="bg-light">
          <div className='d-flex justify-content-between flex-wrap'>
            <h1 className="mt-2 mb-3">My Products</h1>
            <Link to="/dashboard-addproduct">
              <Button className='m-1 bg-success border-success'>Add Product</Button>
            </Link>
          </div>

          <AdvancedTable />

        </Card.Body>
      </Card>
    </>
  )
}
export default FrontEndAllProducts