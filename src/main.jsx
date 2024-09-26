import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import Home from './components/layouts/Home.jsx'
import Dashboard from './components/layouts/Dashboard.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path:"/dashboard",
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProviders>
        <div className=''>
        <RouterProvider router={router}></RouterProvider>
        </div>
        
      </AuthProviders>
      
    
    
  </StrictMode>,
)
