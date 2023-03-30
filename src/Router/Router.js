import React from "react";
import { Route, Switch } from "react-router-dom";
import AiDashboard from "../AIDashboard";
import PostAProject from "../PostAProject";
import ProjectDetails from "../ProjectDetails";
import ProjectListing from "../ProjectListing";
import SignUpForm from "../SignupForm";
import SignUpPage from "../SignUpPage";
import WorktopsProducts from "../WorktopsProduct";


const Routers = () => {
    return (
        <Switch>
            <Route path='/postproject'><PostAProject/></Route>
            <Route exact path='/'><AiDashboard/></Route>
            <Route path='/projectdetails'><ProjectDetails/></Route>
            <Route path='/projectlisting'><ProjectListing/></Route>
            <Route path='/signupform'><SignUpForm/></Route>
            <Route path='/signuppage'><SignUpPage/></Route>
            <Route path='/worktopsdashboard'><WorktopsProducts/></Route>
        </Switch>

    )
}
export default Routers