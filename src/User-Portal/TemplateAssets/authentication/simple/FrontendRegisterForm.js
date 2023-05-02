import React from "react";
import { Button } from "react-bootstrap";
import Divider from "../../../../Template Assets/components/common/Divider";
import SocialAuthButtons from "../SocialAuthButtons";
import { Link } from "react-router-dom";
function FrontendRegisterForm() {
  return (
    <>
      <div className="d-flex justify-content-around mt-4">
        <Link to="/authentication/simple/seller-sign-up">
          <Button className="p-2 btn btn-light text-primary border border-primary sign-up-btn">Seller Sign Up</Button>
        </Link>
        <Link to="/authentication/simple/project-owner-sign-up">
          <Button className="p-2 btn btn-light text-primary border border-primary sign-up-btn">Project Owner SignUp</Button>
        </Link>
      </div>
      <Divider>or register with</Divider>
      <SocialAuthButtons />
    </>
  )
}
export default FrontendRegisterForm