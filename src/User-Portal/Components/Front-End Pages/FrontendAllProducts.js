import React from "react";
import { Card, Breadcrumb, Button, DropdownButton, Dropdown, Row, Col, Form, Table } from "react-bootstrap";
// import AdvanceTableSearchBox from '../advance-table/AdvanceTableSearchBox'
import AdvancedTable from "../../TemplateAssets/AdvanceTables/AdvancedTable"
import { Link } from "react-router-dom";


function FrontEndAllProducts() {
  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <div className='d-flex justify-content-between'>
            {/* <div className="m-3"> */}
            <h4 className="mt-2">All Products</h4>
            {/* </div> */}
            {/* <div className="m-3"> */}

            <Link to="/user/addproduct">
              <Button className='m-1 bg-success border-success'>Add Product</Button>
            </Link>

            {/* </div> */}
          </div>
         
            <AdvancedTable />
         
        </Card.Body>
      </Card>
    </>
  )
}
export default FrontEndAllProducts