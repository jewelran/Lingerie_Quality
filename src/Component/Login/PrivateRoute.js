import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from "react-router-dom";
function PrivateRoute({children, ...rest}) {
    const auth = "email"
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    )
}

export default PrivateRoute
