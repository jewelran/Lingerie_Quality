import React, { useContext, useEffect, useState } from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faSitemap,
  faFileAlt,
  faHeadset,
  faBell,
  faUserShield,
  
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { userContext } from './../../App';
function Navigation() {

  const [user, setUser] = useState([])
  const [navbar, setNavbar] = useState(false);
  const [admin, setAdmin] = useState([])
  console.log(admin,"this is admin here");
  const localStorageEmail = localStorage.getItem("user")
  const email = localStorageEmail
  useEffect (() => {
    fetch("https://lingerie.herokuapp.com/allUser")
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  },[])
  useEffect(() => {
      const url = "http://localhost:5000/admin"
      fetch(url)
      .then((res) => res.json())
      .then((data)=> {
       setAdmin(data)
      })
  },[])
  const singleUser = user.filter(singleUser => singleUser.email === email)
  const singleAdmin = admin.filter(adminInfo => adminInfo.email === localStorageEmail)
  

  const changeBackground = () => {
    if (window.scrollY>= 20) {
      setNavbar(true)
    }
    else{
        setNavbar(false)
    }
  }
window.addEventListener("scroll", changeBackground)
  return (
    <div className={navbar?"nabBar active sticky-top" : "navBar "}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid ">
            <a className="navbar-brand d-flex align-items-center " href="#">
              <img
              className="profileLogo"
                style={{ width: "100px" , height:"100px" ,background:"#222244", borderRadius:"50%" }}
                src={singleUser[0]?.imgUrl}
                alt=""
              />
             <Link style={{textDecoration:"none"}} to = "/login">
             <h3 className="text-center text-white mt-2 border-bottom rounded p-1 loginBtn ">{singleUser.length?`${singleUser[0]?.name} ${singleUser[0]?.lastName}`: "login" }</h3>
             </Link>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul
                style={{
                  margin: "0px auto",
                  background: "#f1db89",
                  borderRadius: "8px",
                  alignItems:"center",
                  boxShadow: "4px 10px 26px lightgrey"
                }}
                className="navbar-nav"
              >
                <li className="nav-item">
                  <Link  to= "/home" className="nav-link text-center  navIcons  text-center" aria-current="page" href="#">
                    <span style={{display:"block", textAlign:"center", color: "#385723", marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faHome} />
                    </span>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to = "/profile" className="nav-link text-center  navIcons" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#BF9000", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faUsers} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to ="/organizational_chart" className="nav-link text-center  navIcons" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#203864", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faSitemap} />
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to= "/contact" className="nav-link text-center  navIcons" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#7030A0", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faHeadset} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a  
                    className="nav-link text-center  navIcons dropdown-toggle"
                   
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{display:"block", textAlign:"center", color: "rgb(37 189 93)", marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faFileAlt} />
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/qualityManual"  className="dropdown-item" href="#">
                        Quality Manual
                      </Link>
                    </li>
                    <li>
                      <Link to="/job_description" className="dropdown-item" href="#">
                        Job Description
                      </Link>
                    </li>
                    <li>
                      <Link to = "/sopFollowChart" className="dropdown-item" href="#">
                        SOP & Flaw chart
                      </Link>
                    </li>
                    <li>
                      <Link to="/routineAndMethod" className="dropdown-item" href="#">
                        Routine & method
                      </Link>
                    </li>
                    <li>
                      <Link to="/education" className="dropdown-item" href="#">
                        H&M Education
                      </Link>
                    </li>
                    
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/notification" className="nav-link text-center  navIcons" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#0070C0", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faBell} />
                    </span>
                  </Link>
                </li>
               {
                 singleAdmin[0]?.email ?  <li className="nav-item">
                 <Link to="/allUser" className="nav-link text-center  navIcons" href="#">
                   {" "}
                   <span style={{display:"block", textAlign:"center", color: "#0070C0", marginRight: "5px" }}>
                     {" "}
                     <FontAwesomeIcon icon={faUserShield} />
                   </span>
                 </Link>
               </li>:""
               }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
