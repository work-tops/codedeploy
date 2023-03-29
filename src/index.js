import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'
import PostAProject from './PostAProject';
import ProjectListing from './ProjectListing';
import SignUpPage from './SignUpPage'
import SignUpForm from './SignupForm';
import ProjectDetails from './ProjectDetails'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import WorktopsProducts from './WorktopsProduct';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Task-1-(Note:This is a Heading for another task  */}
    {/* <PostAProject /> */}
    {/* <ProjectListing/> */}
    {/* <ProjectDetails /> */}
    {/* <SignUpPage /> */}
    {/* <SignUpForm/> */}
    {/*Task-2-(Note:This is a Heading for another task)*/}
    <WorktopsProducts/>
  </React.StrictMode>
);
reportWebVitals();

