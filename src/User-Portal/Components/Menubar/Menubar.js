import React from "react";
import { Dropdown, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Menubar() {
    return (
        <>
            <Row style={{background: "#F4F2F2"}}>
                <Col lg={12}>
                    <Row>
                        <div className="d-flex justify-content-end m-2">
                            <Col lg={1}>
                                <Link to="/productlist">
                                    <Button className="btn bg-transparent text-dark border-0">
                                        Product
                                    </Button>
                                </Link>
                            </Col>
                            <Col lg={1}>
                                <Link to="/servicelist">
                                    <Button className="btn bg-transparent text-dark border-0">
                                        Services
                                    </Button>
                                </Link>
                            </Col>
                        </div>
                    </Row>
                </Col >
            </Row >
        </>
    )
}
export default Menubar