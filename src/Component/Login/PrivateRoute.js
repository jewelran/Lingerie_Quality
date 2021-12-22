import React from 'react'
import { useContext } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Navigate
  } from "react-router-dom";
import { userContext } from '../../App';
function PrivateRoute({children, ...rest}) {
    const [userLoggedIn,setUserLoggedIn] = useContext(userContext)
    const auth = "email"
    return (
        <div>
            {
                userLoggedIn.email ? children : <Navigate to="/login" />
            }
        </div>
    )
}

export default PrivateRoute
