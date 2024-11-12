import { createBrowserRouter } from "react-router-dom";

/**
 * Component Imports
 */
import App from "../App.jsx"; //Top level Outlet

//Logged out views
import Landing from "../Landing/Landing.jsx";
import Login from "../Auth/Login/Login.jsx";
import Signup from "../Auth/Signup/Signup.jsx";

//Logged In views
import UserMain from "../Logged-In-Views/UserMain/UserMain.jsx";
import ConversationControl from "../Logged-In-Views/UserMain/NestedRoutes/ConversationControl/ConversationControl.jsx"

import UserProfile from "../Logged-In-Views/UserProfile/UserProfile.jsx";

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
                },

                /**
                 * Protected Routes
                 * 
                 * UserMain and UserProfile will have Outlets
                 */

                {
                    //UserMain.jsx
                    path: '/user/:id',
                    element: <ProtectedRoute> <UserMain/> </ProtectedRoute>,
                    children: [
                        {
                            //ConversationControl
                            path: 'conversation/:id',
                            element: <ConversationControl />
                        }
                    ]
                },

                {
                    //UserProfile.jsx
                    path: '/profile/:id',
                    element: <ProtectedRoute> <UserProfile /> </ProtectedRoute>,
                    children: []
                }


            ]
        }
    ]
)

export default router