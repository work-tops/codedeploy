import React from "react";
import worktops from "../../Project images/worktops-installation.jpg"
import { Col, Row } from "react-bootstrap";
function ServiceList() {
    return (
        <>
            <h4 className="text-center fw-semibold mt-5">Services</h4>
            <p className="text-center fw-semibold mt-2 w-100">
                From tree surgeons to tilers, from plumbers to plasterers, we have detailed advice on how to choose, hire and
                work with tradespeople and ensure a successful project from start to finish.
            </p>
            <Row className="m-5 me-5">
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Worktops Installation</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Bathroom Fitting</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">BrickLaying</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Carpentry & Joinery</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Carpet Fitting</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Chimneys & fireplaces</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Damp proofing</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Demolition & Clearing</p>
                    </div>
                </Col>
                <Col className="m-5" lg={3}>
                    <div className="mb-3">
                    <img src={worktops} width="100%"/>
                    <p style={{background:'#ebebeb'}} className="p-2 fw-semibold">Driveways</p>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ServiceList