import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';

const router = createBrowserRouter([

{
  path:"/",
  element: <App/>,
},
{
  path:"/login",
  element: <Login/>,
},
{
  path:"/register",
  element : <Register/>,
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
