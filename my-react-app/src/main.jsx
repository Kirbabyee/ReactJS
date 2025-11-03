import { StrictMode } from 'react';

import Dashboard from './Homepage/Dashboard.jsx';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <App />}, // Redirect to landing page
  {path:"/Dashboard", element: <Dashboard />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
