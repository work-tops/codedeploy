import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import './index.css';
import './User-Portal/Components/User-portal.css'
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Routers from './Router/Router';
import FrontEndRouters from './User-Portal/Components/FrontEndRouters/FrontendRouters';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers />
      <FrontEndRouters />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

