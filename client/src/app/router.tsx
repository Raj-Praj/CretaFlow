import { createBrowserRouter } from "react-router";
import LandingLayout from "../layouts/landing/LandingLayout";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

export const router =createBrowserRouter([
    {
        path:"/",
        element:<LandingLayout/>,
    },
    {
        path:"/login",
        element:<LoginPage/>
    },
    {
        path:"/register",
        element:<RegisterPage/>
    },

    {
        path:"/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                index:true,
                element:<></>
            },
            {
                path:"/"
            }
        ]

    }
])