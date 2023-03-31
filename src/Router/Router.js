import React from "react";
import { Route, Switch } from "react-router-dom";
import AiDashboard from "../Components/Others/AIDashboard";
import ProjectDetails from "../Components/Project/ProjectDetails";
import ProjectListing from "../Components/Project/ProjectListing";
import SignUpPage from "../Components/User/SignUpPage";
import SignUpForm from "../Components/User/SignupForm";
import PostAProject from "../Components/Project/PostAProject";
import WorktopsProducts from "../Components/Product/WorktopsProduct";


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