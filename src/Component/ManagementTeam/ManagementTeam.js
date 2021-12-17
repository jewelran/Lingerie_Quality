import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ManagementCard from "./ManagementCard";
import "./ManagementTeam.css"
import Navigation from './../Navigation/Navigation';
import jobDescription from "../jobDescription.json"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,useNavigate
} from "react-router-dom";
function ManagementTeam() {
  
  const [jobDescriptionInfo, setJonDescription] =useState([])

  const jobInfo = jobDescription;
  const index = 7;
  const uniqJonDescription = jobDescriptionInfo.filter(info => info.index === index)
  console.log("this is uniq object", uniqJonDescription);
  useEffect(() => {
    setJonDescription(jobInfo)
  },[])
  console.log(jobDescriptionInfo);
  const management = [
    {
      Id:1,
      name:"Head of Quality"
    },
    {
      Id:2,
      name:"Deputy Manager(quality)"
    },
    {
      Id:4,
      name:"Ass.Manager (Quality)"
    },
    {
      Id:5,
      name:"Sr.Quality Executive"
    },
    {
      Id:6,
      name:"Quality Executive"
    },
    {
      Id:7,
      name:"GPQ"
    }
  ]

  const handleClick = (uId) =>{
    console.log(uId);

  }
  return (
    <div>
       <Navigation/>
      <div  className="container  pb-5 mt-5 ">
        <div className="manageContainer">
          <div className="sideBer col-md-3 pt-2 h-75" >
            <h3>Job Description </h3>
            
              <select style={{cursor:"pointer"}} name="" id="" className="bg-dark text-white p-2 selection">
                {
                  management.map(manage => <option  style={{background:"black", color:"white", padding:"5px"}}>
                    {manage.name}
                  </option>)
                }
              </select>
            
                <ul>
                     <li  onClick={() => handleClick(0)}>Head of Quality</li>
                     <li  onClick={() => handleClick(1)}>Deputy Manager(quality)</li>
                     <li  onClick={() => handleClick(2)}>Ass.Manager (Quality)</li>
                     <li  onClick={() => handleClick(3)}>Sr.Quality Executive</li>
                     <li  onClick={() => handleClick(4)}>Quality Executive</li>
                     <li  onClick={() => handleClick(5)}>GPQ</li>
                     <li  onClick={() => handleClick(6)}>Sr. Auditor / Auditor Quality</li>
                     <li  onClick={() => handleClick(7)}>MIS Officer</li>
                     <li  onClick={() => handleClick(8)}>In-Charge (Quality)

                      <ul className="">
                         <li  onClick={() => handleClick(0)}>Fabric Store</li>
                         <li  onClick={() => handleClick(0)}>Cutting</li>
                         <li  onClick={() => handleClick(0)}>Sewing</li>
                         <li  onClick={() => handleClick(0)}>Finishing</li>
                      </ul>
                    </li>
                     <li  onClick={() => handleClick(9)}>Sr. QC
                      
                      <ul className="">
                          <li  onClick={() => handleClick(0)}>Cutting</li>
                          <li  onClick={() => handleClick(0)}>Sewing</li>
                        </ul>
                        
                     </li>
                     <li  onClick={() => handleClick(10)}>QC
                     <ul className="">
                          <li  onClick={() => handleClick(0)}>External Part</li>
                          <li  onClick={() => handleClick(0)}>Spreading & Marker</li>
                        </ul>
                     </li>
                     <li  onClick={() => handleClick(11)}>Supervisor (Check)
                     <ul className="">
                          <li  onClick={() => handleClick(0)}>Fabric Store</li>
                          <li  onClick={() => handleClick(0)}>Cut & Print Panel Inspection</li>
                          <li  onClick={() => handleClick(0)}>Recut Panel Inspection</li>
                          <li  onClick={() => handleClick(0)}>End Table Inspection</li>
                          <li  onClick={() => handleClick(0)}>Finishing Inspection</li>
                        </ul>
                     
                     </li>
                     <li  onClick={() => handleClick(12)}>Line QC</li>
                     <li  onClick={() => handleClick(13)}>QI / Ord Qi
                     <ul className="">
                          <li  onClick={() => handleClick(0)}>Fabric Inspection</li>
                          <li  onClick={() => handleClick(0)}>Spreading & Marker Inspection</li>
                          <li  onClick={() => handleClick(0)}>Cut & Print Panel Inspection</li>
                          <li  onClick={() => handleClick(0)}>Band knife & Auto Cutter Inspection</li>
                          <li  onClick={() => handleClick(0)}>End Table Inspection</li>
                          <li  onClick={() => handleClick(0)}>Finishing Inspection</li>
                        </ul>
                     
                     </li>
                     <li  onClick={() => handleClick(14)}>Reporter</li>
                     <li  onClick={() => handleClick(15)}>Loader</li>
                     <li  onClick={() => handleClick(16)}>Spot Remover</li>
                </ul>

          </div>
          <div className="sideContainer col-md-8 pt-2 container container-fluid bg-white">
           <ManagementCard/>
          </div>
         
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ManagementTeam;
