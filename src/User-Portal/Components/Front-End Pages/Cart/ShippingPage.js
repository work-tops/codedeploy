import React from "react";
import { Button, Col, Navbar, Row, Container, Nav, NavDropdown } from "react-bootstrap";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
function ShippingPage() {
    return (
        <>
            <Row>
                <Col lg={12}>
                    <Header />
                </Col>
                <Col lg={12}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Link</Nav.Link>
                                        <Nav.Link href="#home">Home</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>

                            </Navbar>
                        </div>
                        <div>2</div>
                    </div>
                </Col>
                <Col lg={12}>
                    <Footer />
                </Col>
            </Row>
        </>
    )
}
export default ShippingPage