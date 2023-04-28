import { Button, Row, Col } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";


function ProfileMenu() {
    return (
        <>
        <div className="justify-content-between">
            <h4 className="m-3">Account Setting</h4>
            <div>
                <Button className="bg-primary text-white border-0 ms-3">Back</Button>
            </div>
        </div>
            <Link to="/MyProfile">
                <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                    My Profile
                </Button>
            </Link>

            <Link to="/BussinessInformation">
                <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                    Bussiness Setting
                </Button>
            </Link>

            <Link to="/paymentinfo">
                <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                    Payment Info
                </Button>
            </Link>
            <Link to="/invoice">
                <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                    Invoices
                </Button>
            </Link>


            <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                Notifications
            </Button>


            <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                Calenders
            </Button>


            <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                Project
            </Button>

            <Link to="/userlog">
                <Button className="m-3 d-block btn bg-transparent text-dark border border-0">
                    Logout
                </Button>
            </Link>

        </>
    )
}
export default ProfileMenu