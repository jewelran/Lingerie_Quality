import React from 'react'
import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Navigate
  } from "react-router-dom";
import { userContext } from '../../App';
function PrivateRoute({children,}) {
    const [userLoggedIn] = useContext(userContext)
    const token = localStorage.getItem("token")
    console.log(token);
    return (
        <div>
            {
               userLoggedIn.email || localStorage.getItem("token") ? children : <Navigate to="/login" />
            }

        </div>
    )
}

export default PrivateRoute
