import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
function LoginPortal() {
    return (
        <>
            <div className="col-12">
                <Header />
            </div>
            <div className="col-12">
                <Menubar />
            </div>
            <div className="col-12  mt-5">

                <Card className="ms-3 me-3">
                    <Card.Body>
                    <div className="w-100 d-flex justify-content-around flex-column mt-4">

                            <h3 className="w-100 text-center mb-3">Login Portal:</h3>
                            {" "}
                            <div className="mb-3 d-flex justify-content-center">
                                <Link to="/userlog">
                                    <Button className="p-2 btn btn-light text-primary border border-primary sign-up-btn">Home Owner Login</Button>
                                </Link>
                            </div>
                            <p className="text-center mb-3">Dont Have an Account ? <Link to='/registerportal'>Create Account</Link></p>
                            {" "}
                            <div className="mb-3 d-flex justify-content-center">
                                <Link to="/userlog">
                                    <Button className="p-2 mt-3 btn btn-light text-primary border border-primary sign-up-btn">Trade Login</Button>
                                </Link>
                            </div>
                            {/* <p className="text-center">Dont Have an Account ? <Link to='/registerportal'>Create Account</Link></p> */}
                            {' '}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default LoginPortal