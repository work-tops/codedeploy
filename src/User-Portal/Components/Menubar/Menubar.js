import React from "react";
import { Dropdown, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Menubar() {
    return (
        <>
            <Row className="bg-danger">
                <Col lg={12}>
                    <div className="d-flex justify-content-end m-2">
                        <Link to="/user/addproduct">
                            <Button className="btn  btn-outline-secondary bg-light text-dark w-100">
                                Product
                            </Button>
                        </Link>
                        <Link to="">
                            <Button className="btn btn-outline-secondary bg-light text-dark w-100">
                                Services
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row >
        </>
    )
}
export default Menubar