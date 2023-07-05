import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function YourProjectsSeller() {
    return (
        <>
        <p className="fw-semibold m-5 fs-5">Your Projects</p>
                            <div className="d-flex justify-content-around">
                                <Link to="/dashboard-products">
                                <Button className="btn bg-transparent text-dark border-0">All Products</Button>
                                </Link>
                                <Link to="/dashboard-services">
                                <Button className="btn bg-transparent text-dark border-0">All Services</Button>
                                </Link>
                                <Link to='/user/myproposals'>
                                <Button className="btn bg-transparent text-dark border-0">Proposals</Button>
                                </Link>
                                <Link to='/productenquirescard'>
                                <Button className="btn bg-transparent text-dark border-0">Product Enquires</Button>
                                </Link>
                                <Link to="/reviewscard">
                                <Button className="btn bg-transparent text-dark border-0">Review</Button>
                                </Link>
                            </div>
        </>
    )
}
export default YourProjectsSeller