import { StrictMode } from 'react';
import Sign_In from './Login Page/Login.jsx';
import Forgot_Password from './Forgot Password/Forgot_Password.jsx';
import New_Password from './Forgot Password/New_Password.jsx';
import Home from './Home/Home.jsx';

/* Home Sidebar Routing */
import Dashboard from './Home/Dashboard/Dashboard.jsx';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <App />}, // Redirect to landing page
  {path:"/Sign_In", element: <Sign_In />}, // Redirect to sign in 
  {path:"/Forgot_Password", element: <Forgot_Password />}, // Redirect to forgot password
  {path:"/New_Password", element: <New_Password />},
  {path:"/Home/Dashboard", element: <Home />},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
