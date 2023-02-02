import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AutoValidation from "./AutoValidation";

export const primaryRoutes = createBrowserRouter([
    {
        path: '/',
        element: <PrimaryLayout/>,
        children: [
            {
                index: 'true',
                element: <AutoValidation/>,
                children:[
                    {
                        index:'/',
                        element: <HomePage/>
                    }
                ]
            },
            {
                path: 'login',
                element: <LoginPage/>
            }
        ]
    }
])