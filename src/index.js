import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Routers from './Router/Router';
import AiDashboard from './AIDashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
         <Routers/>
     </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

