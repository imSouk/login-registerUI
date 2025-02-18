import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './pages/register.jsx';
import { createUser } from './utils.js';
import { loginRequest } from './utils.js';
import Dashboard from './pages/Dashboard.jsx';

const router = createBrowserRouter([

{
  path:"/",
  element: <App loginRequest = {loginRequest}/>,
},
{
  path:"/register",
  element : <Register createUser = {createUser}/>,
},
{
  path:"/Dashboard",
  element : <Dashboard/>,
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
