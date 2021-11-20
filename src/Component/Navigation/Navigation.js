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
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div style={{ background:"indigo",}} className ="sticky-top">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                style={{ width: "100px" }}
                src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
                alt=""
              />
              <h3 className="text-center border border-dark rounded">User</h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul
                style={{
                  margin: "0px auto",
                  background: "#f1db89",
                  borderRadius: "8px",
                  boxShadow: "inset #41464b 1px 1px 20px 5px",
                }}
                class="navbar-nav"
              >
                <li class="nav-item">
                  <Link  to= "/home" class="nav-link text-center active text-center" aria-current="page" href="#">
                    <span style={{display:"block", textAlign:"center", color: "#385723", marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faHome} />
                    </span>{" "}
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#BF9000", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faUsers} />
                    </span>
                    Profile
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#203864", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faSitemap} />
                    </span>
                    Manage Quality
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#7030A0", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faHeadset} />
                    </span>
                    Contact
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link text-center dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{display:"block", textAlign:"center", color: "rgb(37 189 93)", marginRight: "5px" }}>
                      <FontAwesomeIcon icon={faFileAlt} />
                    </span>
                    Documents
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link to="/*"  class="dropdown-item" href="#">
                        Quality Manual
                      </Link>
                    </li>
                    <li>
                      <Link to="/job_description" class="dropdown-item" href="#">
                        Job Description
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        SOP & Flaw chart
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Routine & method
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        H&M Education
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Quality Report
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-center" href="#">
                    {" "}
                    <span style={{display:"block", textAlign:"center", color: "#0070C0", marginRight: "5px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faBell} />
                    </span>
                    Notification
                  </a>
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
