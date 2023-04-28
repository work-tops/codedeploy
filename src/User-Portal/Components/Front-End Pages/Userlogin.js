import React, {useState} from "react";
import LoginForm from '../authentication/LoginForm'
import { Card } from "react-bootstrap";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menubar from "../Menubar/Menubar";


function UserLogin() {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-12">
                    <Menubar />
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-center m-3">
                        <Card className=" w-50">
                            <Card.Body>
                                <h1 className="text-center">Login</h1>
                                <LoginForm />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserLogin
