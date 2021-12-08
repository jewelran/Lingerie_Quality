import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ManagementCard from "./ManagementCard";
import "./ManagementTeam.css"
import Navigation from './../Navigation/Navigation';
import jobDescription from "../jobDescription.json"
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
                    <li>Head of Quality</li>
                    <li>Deputy Manager(quality)</li>
                    <li>Ass.Manager (Quality)</li>
                    <li>Sr.Quality Executive</li>
                    <li>Quality Executive</li>
                    <li>GPQ</li>
                    <li>Sr. Auditor / Auditor Quality</li>
                    <li>MIS Officer</li>
                    <li>In-Charge (Quality)</li>
                    <li>Sr. QC</li>
                    <li>QC</li>
                    <li>Supervisor (Check)</li>
                    <li>Line QC</li>
                    <li>QI / Ord Qi</li>
                    <li>Reporter</li>
                    <li>Loader</li>
                    <li>Spot Remover</li>
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
