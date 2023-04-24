import React from "react";
import LoginForm from '../authentication/LoginForm'
import { Card } from "react-bootstrap";
function UserLogin() {
    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <Card className=" w-50">
                    <Card.Body>
                        <LoginForm />
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default UserLogin
