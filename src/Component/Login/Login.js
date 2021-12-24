import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserTie } from "@fortawesome/free-solid-svg-icons";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from './firebaseConfig';
import { userContext } from './../../App';
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
function Login() {
  firebase.initializeApp(firebaseConfig);

  const [newUser, setNewUser] = useState(false);
  const [message, setMessage] = useState("")
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
  
  console.log("user context is ready", userLoggedIn);
  const navigate = useNavigate()
  const location = useLocation()

  console.log(navigate, "navigate is here");
  console.log(location, "location is here");
  let { from } = location.state || { from: { pathname: "/" } };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    const imgInfo = new FormData()
    imgInfo.set("key", "941644256336912a1409c0bcfce50071")
    imgInfo.append("image", data.img)
    axios.post("https://api.imgbb.com/1/upload, imgInfo")
    .then(function (response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    })

   handleImg()
    // create user email and password
    if (
      newUser &&
      data.email &&
      data.password &&
      data.password === data.confirmPass
    ) {
      alert("data is ready");
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        // Signed in
        const user = result.user;
      setUserLoggedIn(user)
      localStorage.setItem("user", user.email)
    updateUserInfo(data.fastName)
    fetch("http://localhost:5000/user",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
    .then((response) => {
      if (response) {
        console.log(response);
        alert("data upload successfully")
        window.location.reload()
      }
    })
      navigate(from)
      console.log(user.name);
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        setMessage(errorMessage)
        // ..
      });
    }
   
// sign in with email and password

    if (!newUser && data.email && data.password) {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
  .then((res) => {
      const user= res.user
      const message = "LoggedIn successfully"
      setMessage(message)
      setUserLoggedIn(user)
    localStorage.setItem("loggedInUser",user.email )

      userInfoToken()
     navigate(from)
    // ...
  })
  .catch((error) => {
    var errorMessage = error.message;
    console.log(error.message)
    setMessage(errorMessage);
  });
      
    }

  };

// update user info

const updateUserInfo = (userName) => {
  
const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: userName
  
}).then(() => {
  console.log("user name update successfully");
  // Update successful
  // ...
}).catch((error) => {
  console.log(error);
  // An error occurred
  // ...
});  

}

// verify id token
const userInfoToken = () => {
  firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
    localStorage.setItem("token", idToken)
    console.log(idToken);
  
  })
  .catch(function(error) {
    console.log(error);
  })
}



// img upload 
const handleImg=(e) => {
  console.log(e,"this is img data ");
}

  return (
    <div style={{ background: "#222244" }} className="pb-5 pt-5 loginContainer">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center  w-100 pt-5" style={{height:"80vh"}}>
          <div
            style={{ justifyContent: "center" , }}
            className="border loginInput p-5"
          >
            <h3 style={{ fontFamily: "cursive" }} className="pb-4">
              {!newUser ? <span>Log-In</span> : <span>Sign-Up</span>}
            </h3>
            {newUser ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between">
                  <div className="">
                  {errors.fastName && (
                      <span style={{color: "red", fontSize:"18px" }}>
                      **
                      </span>
                    )}
                    <br />
                    <input
                      className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                      placeholder="Fast name"
                      {...register("fastName", { required: true })}
                    />
                    <br />
                
                  </div>
                  <div className="">
                  {errors.lastName && (
                      <span style={{color: "red", fontSize:"18px" }}>
                      **
                      </span>
                    )}
                    <br />
                    <input
                      placeholder="Last name"
                      className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                      {...register("lastName", { required: true })}
                    />
                    <br />
                  
                  </div>
                </div>

                <div className="">
                {errors.email && (
                    <span style={{color: "red", fontSize:"18px", marginBottom: "10px" }}>
                   **
                    </span>
                  )}
                  <br />
                  <input
                    className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                    placeholder="Enter your Email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  <br />
                
                </div>
                <div className="">
                {errors.company && (
                    <span style={{color: "red", fontSize:"18px" }}>
                    **
                    </span>
                  )}
                  <br />
                  <input
                    className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                    style={{ padding: "  7px 10px" }}
                    placeholder="Your Company name"
                    {...register("company", { required: true })}
                  />
                  <br />
                
                </div>
                <div className="d-flex justify-content-between">
                  <div className="">
                  {errors.department && (
                      <span style={{color: "red", fontSize:"18px" }}>
                       **
                      </span>
                    )}
                    <br />
                    <input
                      className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                      placeholder="Department"
                      {...register("department", { required: true })}
                    />
                    <br />
                   
                  </div>
                  <div className="">
                  {errors.designation && (
                      <span style={{color: "red", fontSize:"18px" }}>
                        **
                      </span>
                    )}
                    <br />
                    <input
                      placeholder="Designation"
                      className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                      {...register("designation", { required: true })}
                    />
                    <br />
                   
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="">
                  {errors.password && (
                      <span style={{color: "red", fontSize:"18px" }}>**</span>
                    )}
                    <br />
                    <input
                      className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                      placeholder="Password"
                      type="password"
                      {...register("password", { required: true })}
                    />
                    <br />
                   
                  </div>
                  <br />
                  <div className="">
                  {errors.confirmPass && (
                      <span style={{color: "red", fontSize:"18px" }}>**</span>
                    )}
                    <br />
                    <input
                      placeholder="Confirm password"
                      className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                      type="password"
                      {...register("confirmPass", { required: true })}
                    />
                    <br />
                  
                  </div>
                </div>
                <br />
                      <div className="">
                        <p>{message}</p>
                      </div>
                <br />
                <div className="d-flex justify-content-center">
                  <div className="">
                  {errors.img && (
                      <span style={{color: "red", fontSize:"18px" }}>
                       **
                      </span>
                    )}
                    <br />
                    <input
                      placeholder="Upload Your Image"
                      onChange={handleImg}
                      type="file"
                      id="uploadImg"
                      style={{
                        width: "25%",
                        background: "grey",
                        display: "none",
                      }}
                      className="text-white"
                      {...register("img", { required: true })}
                    />
                    <label htmlFor="uploadImg" className="uploadBtn">
                      <span className="uploadImgIcon">
                   

                        <FontAwesomeIcon icon={faUserTie} />
                      </span>
                    </label>
                    <br />
                  </div>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                  <input
                    className="w-50 bg-danger"
                    style={{
                      color: "white",
                      padding: "10px 30px",
                      borderRadius: "20px",
                    }}
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                  {errors.email && (
                  <span style={{color: "red", fontSize:"18px" }}>**</span>
                )}
                <br />
                <input
                  className="w-100  text-white rounded-3 bg-transparent border border-secondary"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="enter your Email"
                />
                <br />

              
                <br />
                {errors.password && (
                  <span style={{color: "red", fontSize:"18px" }}>**</span>
                )}

                <br />
                <input
                  className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="enter your password"
                />
                <br />
                
                {
                  message
                }
                <br />
                <div className="d-flex justify-content-center">
                  <input
                    className="w-50 bg-danger"
                    style={{
                      color: "white",
                      padding: "10px 30px",
                      borderRadius: "20px",
                    }}
                    type="submit"
                    value="SignIn"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="text-center mt-5">
          {newUser ? (
            <p
              style={{ display: "inline-block" }}
              className="fs-5"
              onClick={() => setNewUser(!newUser)}
            >
              
              Already a member? :{" "}
              <span
                style={{ cursor: "pointer", marginLeft: "5px" }}
                className="text-danger"
              >
               Log in
              </span>
            </p>
          ) : (
            <p
              style={{ display: "inline-block" }}
              className="fs-5 "
              onClick={() => setNewUser(!newUser)}
            >
              Not a member? :{" "}
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  borderBottom: "2px solid red",
                }}
                className="text-danger pointer"
              >
               SignUp
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
