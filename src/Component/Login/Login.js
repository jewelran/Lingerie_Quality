import React, { useState } from "react";
import login from "../Images/loginForm.jpg";
import signIn from "../Images/signIn.jpg";
function Login() {
  const [loginUser, setLoginUser] = useState(false);

  return (
    <div style={{ background: "#222244" }} className="pb-5">
      <div className="container">
        <h3 className="text-center">
          {loginUser ? <span>SignIn</span> : <span>SignUp</span>}
        </h3>
        <div className="d-flex justify-content-center">
          {loginUser ? (
            <div className="w-50">
              <img
                style={{ width: "400px", height: "500px" }}
                src={login}
                alt="loginImg"
              />
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <div>
                <img
                  style={{ width: "400px", height: "500px" }}
                  src={signIn}
                  alt="singInImg"
                />
              </div>
            </div>
          )}
        </div>
        <div className="text-center">
          {loginUser ? (
            <p onClick={() => setLoginUser(!loginUser)}>
              Already a member?:{" "}
              <span style={{ cursor: "pointer" }} className="text-danger">
                SignUp
              </span>
            </p>
          ) : (
            <p onClick={() => setLoginUser(!loginUser)}>
              Not a member?:{" "}
              <span
                style={{ cursor: "pointer" }}
                className="text-danger pointer"
              >
                singIn
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
