import React, { useState } from "react";
import { useForm } from "react-hook-form";
import login from "../Images/loginForm.jpg";
import signIn from "../Images/signIn.jpg";
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faAviato } from "@fortawesome/free-brands-svg-icons";
function Login() {
  const [loginUser, setLoginUser] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
  };

  console.log(watch("example"));

  return (
    <div  style={{ background: "#222244" }} className="pb-5 pt-5 loginContainer">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center  w-100 pt-5">
          <div
            style={{ justifyContent: "center" ,}}
            className="border loginInput p-5"
          >
            
            <h3 style={{fontFamily:"cursive"}} className="pb-4">
              {loginUser ? <span>Log-In</span> : <span>Sign-Up</span>}
            </h3>
            {loginUser ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="w-100 text-white rounded-3"
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="enter your Email"
                />
                <br />

                {errors.email && (
                  <span style={{ color: "red" }}>Email is required</span>
                )}
                <br />
                <br />
                <input
                  className="w-100 text-white rounded-3"
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="enter your password"
                />
                <br />
                {errors.password && (
                  <span style={{ color: "red" }}>Password is required</span>
                )}

                <br />
                <br />
               <div className="d-flex justify-content-center">
               <input
                  className="w-50 bg-danger"
                  style={{ color: "white", padding: "10px 30px", borderRadius:"20px" }}
                  type="submit"
                  value="SignIn"
                />
               </div>
              </form>
            
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <input
                      className="w-100 text-white rounded-3"
                      placeholder="Fast name"
                      {...register("fastName", { required: true })}
                    />
                    <br />
                    {errors.fastName && (
                      <span style={{ color: "red" }}>
                        Last name is required
                      </span>
                    )}
                    <br/>
                  </div>
                  <div className="">
                    <input
                      placeholder="Last name"
                      className="w-100 text-white rounded-3"
                      {...register("lastName", { required: true })}
                    />
                    <br />
                    {errors.lastName && (
                      <span style={{ color: "red" }}>
                        Last name is required
                      </span>
                    )}
                     <br/>
                  </div>
                </div>

               <div className="">
               <input
                  className="w-100 text-white rounded-3"
                  placeholder="Enter your Email"
                  type="email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span style={{ color: "red" , marginBottom:"10px" }}>Email is required</span>
                )}
                  <br/>
               </div>
                <div className="">
                    <input
                      className="w-100 text-white rounded-3"
                      style={{ padding: "  7px 10px" }}
                      placeholder="Your Company name"
                      {...register("company", { required: true })}
                    />
                    <br />
                    {errors.company && (
                      <span style={{ color: "red" }}>
                       Company name is required
                      </span>
                    )}
                      <br/>
                  </div>
                <div className="d-flex justify-content-between">
                  <div className="">
                    <input
                      className="w-100 text-white rounded-3"
                      placeholder="department"
                      {...register("department", { required: true })}
                    />
                    <br />
                    {errors.department && (
                      <span style={{ color: "red" }}>Department is required</span>
                    )}
                     <br/>
                  </div>
                  <div className="">
                    <input
                      placeholder="designation"
                      className="w-100 text-white rounded-3"
                      {...register("designation", { required: true })}
                    />
                    <br />
                    {errors.designation && (
                      <span style={{ color: "red" }}>
                        Designation is required
                      </span>
                    )}
                     <br/>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="">
                    <input
                      className="w-100 text-white rounded-3"
                      placeholder="Password"
                      type="password"
                      {...register("password", { required: true })}
                    />
                    <br />
                    {errors.password && (
                      <span style={{ color: "red" }}>Password is required</span>
                    )}
                     <br/>
                  </div>
                  <br />
                  <div className="">
                    <input
                      placeholder="Confirm password"
                      className="w-100 text-white rounded-3"
                      type="password"
                  
                      {...register("confirmPass", { required: true })}
                    />
                    <br />
                    {errors.confirmPass && (
                      <span style={{ color: "red" }}>
                        Password is required
                      </span>
                    )}
                     <br/>
                  </div>
                </div>
                <br />
             
                <br />
                <div className="d-flex justify-content-center">
                   <div className="">
                   <input
                      placeholder="Upload Your Image"
                      type="file"
                      id= "uploadImg"
                      style={{
                        width: "25%",
                        background: "grey",
                        display:"none"
                      }}
                      className="text-white"
                      {...register("img", { required: true })}
                    />
                    <label htmlFor="uploadImg" className="uploadBtn"><span className="uploadImgIcon"><FontAwesomeIcon icon={faUserTie}/></span></label>
                    <br />
                    {errors.img && (
                      <span style={{ color: "red" }}>
                        Your Photo is required
                      </span>
                    )}
                     <br/>
                   </div>
                  </div>
               <div className="d-flex justify-content-center">
               <input
                  className="w-50 bg-danger"
                  style={{ color: "white", padding: "10px 30px", borderRadius:"20px" }}
                  type="submit"
                  value="Sign Up"
                />
               </div>
              </form>
            )}
          </div>
        </div>
        <div className="text-center mt-5">
          {loginUser ? (
            <p style={{display:"inline-block"}} className="fs-5" onClick={() => setLoginUser(!loginUser)}>
              Not a member? :{" "}
              <span
                style={{ cursor: "pointer", marginLeft: "5px" }}
                className="text-danger"
              >
                SignUp
              </span>
            </p>
          ) : (
            <p style={{display:"inline-block"}} className="fs-5 "  onClick={() => setLoginUser(!loginUser)}>
              Already a member? :{" "}
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: "5px",
                  borderBottom: "2px solid red",
                }}
                className="text-danger pointer"
              >
                Log-in
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
