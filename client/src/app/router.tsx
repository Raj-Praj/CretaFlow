import { createBrowserRouter } from "react-router";
import LandingLayout from "../layouts/landing/LandingLayout";

import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";

 const router =createBrowserRouter([
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
                element:<h1>Overview</h1>
            },
            {
                path:"projects",
                element:<h1>projects</h1>
            },
            {
                path:"tasks",
                element:<h1>tasks</h1>
            },
            {
                path:"chat",
                element:<h1>chat</h1>
            },
            {
                path:"contributions",
                element:<h1>contributions</h1>
            },
            {
                path:"risk-radar",
                element:<h1>risk radar</h1>
            },
            {
                path:"notifications",
                element:<h1>notifications</h1>
            },
            {
                path:"settings",
                element:<h1>settings</h1>
            },
        ],

    },
]);
export default router;