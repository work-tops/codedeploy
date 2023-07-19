import React, { useEffect, useState } from "react";
import { Row,Col } from "react-bootstrap";

function PostPg() {
    const [user, setUser] = useState('');

    useEffect(() => {
        var _user = sessionStorage.getItem('user');
        var _json = JSON.parse(_user);
        setUser(_json?.name);
    }, [])

    return (
        <Row style={{background: "#7fa6c7"}}>
            <Col className="p-1" lg={12}>
                <Row>
                    <Col lg={6}>
                        <p style={{fontSize:'32px'}} className="text-start text-capitalize text-white m-5">Hello , {user}</p>
                    </Col>
                    <Col lg={6}>
                        {/* <div className="m-5">
                        <span className="ms-3">Open Projects <span className="badge bg-secondary">0</span></span>
                        <span className="ms-3">WorkStreams <span className="badge bg-secondary">2</span></span>
                        <span className="ms-3">Invoice Due <span className="badge bg-secondary">1</span></span>
                        </div> */}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default PostPg