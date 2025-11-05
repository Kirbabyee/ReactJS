import { StrictMode } from 'react';

import Dashboard from './Homepage/Dashboard.jsx';
import Analytics from './Homepage/Analytics.jsx';
import Employees from './Homepage/Employees.jsx';
import LeaveReq from './Homepage/Leave_Request.jsx';
import LeaveHis from './Homepage/Leave_History.jsx';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <App />}, // Redirect to landing page
  {path:"/Dashboard", element: <Dashboard />},
  {path:"/Analytics", element: <Analytics />},
  {path:"/Employees", element: <Employees />},
  {path:"/Leave Request", element: <LeaveReq />},
  {path:"/Leave History", element: <LeaveHis />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
