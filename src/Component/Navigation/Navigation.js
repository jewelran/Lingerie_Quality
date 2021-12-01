import React from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUsers,
  faSitemap,
  faFileAlt,
  faHeadset,
  faBell,
  
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div style={{ background:"indigo",}} className ="sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid ">
            <a className="navbar-brand d-flex align-items-center " href="#">
              <img
                style={{ width: "100px" }}
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt=""
              />
             <Link style={{textDecoration:"none"}} to = "/login">
             <h3 className="text-center text-white border border-white rounded p-1 ">Login</h3>
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
                  <Link  to= "/home" className="nav-link text-center active text-center" aria-current="page" href="#">
                    <span style={{display:"block", textAlign:"center", color: "#385723", marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faHome} />
                    </span>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to = "/profile" className="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#BF9000", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faUsers} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to ="/organizational_chart" className="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#203864", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faSitemap} />
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to= "/contact" className="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#7030A0", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faHeadset} />
                    </span>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a  
                    className="nav-link text-center dropdown-toggle"
                   
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
                      <Link to="/*"  className="dropdown-item" href="#">
                        Quality Manual
                      </Link>
                    </li>
                    <li>
                      <Link to="/job_description" className="dropdown-item" href="#">
                        Job Description
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SOP & Flaw chart
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Routine & method
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        H&M Education
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Quality Report
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/notification" className="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#0070C0", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faBell} />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
