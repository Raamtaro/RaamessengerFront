import { createBrowserRouter } from "react-router-dom";

/**
 * Component Imports
 */
import App from "../App.jsx"; //Top level Outlet

//Logged out views
import Landing from "../Landing/Landing.jsx";
import Login from "../Auth/Login/Login.jsx";
import Signup from "../Auth/Signup/Signup.jsx";


//Protected Route views
import ProtectedRoute from "./ProtectedRoute.jsx"; //This wrapper redirects the user back to the login screen if they try and access something without the access token being present.



const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    //Landing.jsx
                    path: '/',
                    element: <Landing />
                },
                {
                    //Signup.jsx
                    path: '/signup',
                    element: <Signup />
                },
                {
                    //Login.jsx
                    path: '/login',
                    element: <Login />
                }

            ]
        }
    ]
)

export default router