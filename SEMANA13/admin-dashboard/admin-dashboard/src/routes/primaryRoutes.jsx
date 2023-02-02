import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

export const primaryRoutes = createBrowserRouter([
    {
        path: '/',
        element: <PrimaryLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            }
        ]
    }
])