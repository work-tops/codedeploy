import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Divider from "../authentication/Divider";
import SocialAuthButtons from "../authentication/SocialAuthButtons";
import Header from "../Header/Header";
import Menubar from "../Menubar/Menubar";
function RegisterPortal() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
                    <Menubar/>
                </div>
                <div className="col-12">
                <Card className="m-5">
                <Card.Body>
                    <div className="w-100 d-flex justify-content-around flex-column mt-4">

                        <h3 className="w-100 text-center mb-3">Register Portal:</h3>
                        {" "}
                        <div className="mb-3 d-flex justify-content-center">
                            <Link to="/sellersignup">
                                <Button className="p-2 btn btn-light text-primary border border-primary sign-up-btn">Seller SignUp</Button>
                            </Link>
                        </div>
                        <p className="text-center mb-3">Already Have an Account ? <Link to='/userlog'>Log In</Link></p>
                        {" "}
                        <div className="mb-3 d-flex justify-content-center">
                            <Link to="/projectownersignup">
                                <Button className="p-2 mt-3 btn btn-light text-primary border border-primary sign-up-btn">Project Owner Signup</Button>
                            </Link>
                        </div>
                        {' '}
                    </div>
                    <Divider>Or Register With</Divider>
                    <SocialAuthButtons />
                </Card.Body>
            </Card>
                </div>
            </div>
           
        </>
    )
}
export default RegisterPortal