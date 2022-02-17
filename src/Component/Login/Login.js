import React, { useContext,  useEffect,  useState } from "react";
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
function Login() {
  firebase.initializeApp(firebaseConfig);

  const [newUser, setNewUser] = useState(false);
  const [message, setMessage] = useState("")
  const [signInUser , setSingInUser] = useState({})
  const [imgUrl, setImgUrl] =useState("") 
  const [quality, setQuality] = useState(false)
  const {name, } =signInUser
  // console.log(signInUser , "sign in user is found");
  const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
  
  console.log("user context is ready", userLoggedIn.email);
  const navigate = useNavigate()
  const location = useLocation()

  // console.log(location, "location is here");
  let { from } = location.state || { from: { pathname: "/" } };

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(signInUser,"this is data")
    
    const {fastName,lastName, email,department,designation,otp} = data;

    const quality = "Quality"
    const production = "Production"
    if (department === department) {
      setQuality(true)
    }else{
      setQuality(false) 
    }
    if (department == quality) {
      const currentOtp = 12345
      if(otp == currentOtp){

    setSingInUser(data)

     }
     else{
       alert("Quality otp is incurrect")
     }
  
    }
   if (department == production) {
     setQuality(true)

     const currentOtp = 1234
     if(otp == currentOtp){
   setSingInUser(data)

    }
    else{
      alert("production otp is incurrect")
    }

   }
   
    // create user email and password
//     if (
//       newUser &&
//       data.email &&
//       data.password &&
//       data.password === data.confirmPass
//     ) {
//       alert("data is ready");
//       firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
//       .then((result) => {
//         // Signed in
//         const user = result.user;
//       setUserLoggedIn(user)
//       localStorage.setItem("user", user.email)
//       updateUserInfo(data.fastName)
//   //  user send to data base
//       if (user) {
//         fetch("https://lingerie.herokuapp.com/user",{
//           method:"POST",
//           headers:{"content-type":"application/json"},
//           body:JSON.stringify({name:fastName,lastName:lastName,department: department, designation:designation, imgUrl:imgUrl, email:email})
//         })
//         .then((response) => {
//           alert("user sign in successfully")

//           if (response) {
//             navigate(from)
//           }
          
//         })
       
//       }
//       console.log(user.name);
//         // ...
//       })
//       .catch((error) => {
//         var errorMessage = error.message;
//         setMessage(errorMessage)
//         // ..
//       });
//     }
   
// // sign in with email and password

//     if (!newUser && data.email && data.password) {
//       firebase.auth().signInWithEmailAndPassword(data.email, data.password)
//   .then((res) => {
//       const user= res.user
//       const message = "LoggedIn successfully"
//       setMessage(message)
//       setUserLoggedIn(user)
//       userInfoToken()
//       localStorage.setItem("user", user.email)
//      navigate(from)
//     // ...
//   })
//   .catch((error) => {
//     var errorMessage = error.message;
//     console.log(error.message)
//     setMessage(errorMessage);
//   });
      
//     }

//   };

// // update user info

// const updateUserInfo = (userName) => {
  
// const user = firebase.auth().currentUser;

// user.updateProfile({
//   displayName: userName
  
// }).then(() => {
//   console.log("user name update successfully");
//   // Update successful
//   // ...
// }).catch((error) => {
//   console.log(error);
//   // An error occurred
//   // ...
// });  

// }

// // verify id token
// const userInfoToken = () => {
//   firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
//     localStorage.setItem("token", idToken)
//     console.log(idToken);
  
//   })
//   .catch(function(error) {
//     console.log(error);
//   })
}



// img upload 
const handleImg=(e) => {
  // console.log(e.target.files[0],"this is img data ");
  // const profileImg = e.target.files[0]
  // const imgInfo = new FormData()
  // imgInfo.set("key", "5bce158fb0a8dfa35765ad620a59622c")
  // imgInfo.append("image", profileImg)
  // axios.post("https://api.imgbb.com/1/upload", imgInfo)
  // .then(function (response) {
  //   console.log(response.data.data.display_url);
  //   const url = response.data.data.display_url
  //   setImgUrl(url)
  // })
  // .catch(function(err) {
  //   console.log(err);
  // })

 
}

  return (
    <div style={{ background: "#222244" }} className="pb-5 pt-5 loginContainer">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center  w-100 pt-5" >
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
                    {/* <input
                      className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                      placeholder="Department"
                      {...register("department", { required: true })}
                    /> */}
                    <label >Department</label>
                      <select {...register("department", { required: true })} className="w-75 text-white rounded-3 bg-transparent border border-secondary">
                        <option   value="Quality">Top Management
</option>
                        <option  value="Production">Business </option>
                        <option value="Management">HR</option>
                        <option value="Others">IT</option>
                        <option value="Others">Accounts</option>
                        <option value="Others">Electrical </option>
                        <option value="Others">Lab</option>
                        <option value="Others">Dyeing </option>
                        <option value="Others">Knitting </option>
                        <option value="Others">Printing</option>
                        <option value="Others">Washing</option>
                        <option value="Others">MQAC</option>
                        <option value="Others">Maintenance </option>
                        <option value="Others">Store</option>
                        <option value="Others">Planning </option>
                        <option value="Others">IE </option>
                        <option value="Others">Sample</option>
                        <option value="Others">CAD</option>
                        <option value="Others">Cutting</option>
                        <option value="Others">Sewing</option>
                        <option value="Others">Finishing</option>
                        <option value="Others">Quality Control</option>
                        <option value="Others">Quality Assurance</option>
                        <option value="Others">Quality System</option>
                        <option value="Others">Technical / Innovative</option>
                      </select>
                    <br />
                   {
                     quality ?<input
                     className="w-100 text-white rounded-3 bg-transparent border border-secondary"
                     style={{ padding: "  7px 10px" }}
                     placeholder="Your OTP Code Here"
                     {...register("otp", { required: true })}
                   />:""
                   }
                    {errors.otp && (
                    <span style={{color: "red", fontSize:"18px" }}>
                    **
                    </span>
                  )}
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
                <div className="">
                  <input   placeholder="Upload Your Image"
                      onChange={handleImg}
                      type="file"
                      id="uploadImg"
                      style={{
                        width: "25%",
                        background: "grey",
                        display: "none",
                      }}  />
                </div>
                <div className="d-flex justify-content-center">
                  <div className="">
                  {errors.img && (
                      <span style={{color: "red", fontSize:"18px" }}>
                       **
                      </span>
                    )}
                    <br />
                 
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
