import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProjectOwnerYourProjects(){
return(
    <>
    <p className="fw-semibold m-5 fs-5">Your Projects</p>
                            <div className="d-flex justify-content-around">
                                <Link to="/openProjectCard">
                                <Button className="btn bg-transparent text-dark border-0">Open Projects</Button>
                                </Link>
                                <Link to="/workStreamCard">
                                <Button className="btn bg-transparent text-dark border-0">Workstreams</Button>
                                </Link>
                                <Link to='InvoicedueCard'>
                                <Button className="btn bg-transparent text-dark border-0">Invoice Due</Button>
                                </Link>
                                <Link to='/POproductenquirescard'>
                                <Button className="btn bg-transparent text-dark border-0">Product Enquires</Button>
                                </Link>
                                <Link to="/POReviewsCard">
                                <Button className="btn bg-transparent text-dark border-0">Review</Button>
                                </Link>
                            </div>
    </>
)
}
export default ProjectOwnerYourProjects