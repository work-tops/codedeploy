import React from "react";
import { Route, Switch } from "react-router-dom";
import ProposalList from "../Front-End Pages/ProposalList";
import PostJob1 from "../Front-End Pages/PostJob1";
import ListJobs from "../Front-End Pages/ListJobs";
import JobDetails from "../Front-End Pages/JobDetails";
import ProjectListing from "../Front-End Pages/ProjectListing";
import SignUpPage from "../Front-End Pages/SignUpPage";
import SignUpForm from "../Front-End Pages/SignupForm";
import JobProposal from "../Front-End Pages/JobProposal";
import PostJob2 from "../Front-End Pages/PostJob2";
import HomePage from "../Front-End Pages/HomePage";
const FrontEndRouters = () => {
    return (
        <Switch>
            <Route path='/jobproposal'><JobProposal /></Route>
            <Route path='/projectlisting'><ProjectListing /></Route>
            <Route path='/signupform'><SignUpForm /></Route>
            <Route path='/signuppage'><SignUpPage /></Route>
            <Route path="/proposallist"><ProposalList /></Route>
            <Route path="/postjob1"><PostJob1 /></Route>
            <Route path="/postjob2"><PostJob2 /></Route>
            <Route path="/listjobs"><ListJobs /></Route>
            <Route path="/jobdetails"><JobDetails /></Route>
            <Route path="/homepage"><HomePage/></Route>
        </Switch>

    )
}
export default FrontEndRouters