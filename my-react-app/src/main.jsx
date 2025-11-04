import { StrictMode } from 'react';

import Dashboard from './Homepage/Dashboard.jsx';
import Analytics from './Homepage/Analytics.jsx';
import Employees from './Homepage/Employees.jsx';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <App />}, // Redirect to landing page
  {path:"/Dashboard", element: <Dashboard />},
  {path:"/Analytics", element: <Analytics />},
  {path:"/Employees", element: <Employees />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
