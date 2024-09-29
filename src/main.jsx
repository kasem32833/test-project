import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import Home from "./components/layouts/Home.jsx";
import Dashboard from "./components/layouts/Dashboard.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import Create from "./components/Create.jsx";
import Users from "./components/Users.jsx";
import Edit from "./components/Edit.jsx";
import Delete from "./components/Delete.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoutes>
  //       <Dashboard></Dashboard>
  //     </PrivateRoutes>
  //   ),
  
  // },
  {
  
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
        path:"/dashboard",
        element: <Users></Users>
        },
        {
        path:"/dashboard/create",
        element:<Create></Create>
        },
        {
        path:"/dashboard/edit/:id",
        element: <Edit></Edit>
        },
        {
        path:"/dashboard/delete",
        element: <Delete></Delete>
        }
        
      ]
  
  }
]);



createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <AuthProviders>
        <div className="">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </AuthProviders>
    </Provider>
  
);
