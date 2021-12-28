import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ManagementCard from "./ManagementCard";
import "./ManagementTeam.css"
import Navigation from './../Navigation/Navigation';
import jobDescription from "../jobDescription.json"

function ManagementTeam() {
  
  const [jobDescriptionInfo, setJonDescription] =useState([])
  const [departmentId, setDepartmentId] = useState("")

  const jobInfo = jobDescription;
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
    setDepartmentId(uId)

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
                     <li  onClick={() => handleClick(21)}>Sr. Auditor / Auditor Quality</li>
                     <li  onClick={() => handleClick(6)}>MIS Officer</li>
                     <li  onClick={() => handleClick(7)}>In-Charge (Quality)

                      <ul className="">
                         <li  onClick={() => handleClick(7)}>Fabric Store</li>
                         <li  onClick={() => handleClick(8)}>Cutting</li>
                         <li  onClick={() => handleClick(9)}>Sewing</li>
                         <li  onClick={() => handleClick(10)}>Finishing</li>
                      </ul>
                    </li>
                     <li  onClick={() => handleClick(12)}>Sr. QC
{/*                       
                      <ul className="">
                          <li  onClick={() => handleClick("")}>Cutting</li>
                          <li  onClick={() => handleClick("")}>Sewing</li>
                        </ul> */}
                        
                     </li>
                     <li  onClick={() => handleClick(18)}>QC
                     {/* <ul className="">
                          <li  onClick={() => handleClick("")}>External Part</li>
                          <li  onClick={() => handleClick("")}>Spreading & Marker</li>
                        </ul> */}
                     </li>
                     <li  onClick={() => handleClick(14)}>Supervisor (Check)
                     {/* <ul className="">
                          <li  onClick={() => handleClick("")}>Fabric Store</li>
                          <li  onClick={() => handleClick("")}>Cut & Print Panel Inspection</li>
                          <li  onClick={() => handleClick("")}>Recut Panel Inspection</li>
                          <li  onClick={() => handleClick("")}>End Table Inspection</li>
                          <li  onClick={() => handleClick("")}>Finishing Inspection</li>
                        </ul> */}
                     
                     </li>
                     <li  onClick={() => handleClick(22)}>Line QC</li>
                     <li  onClick={() => handleClick(25)}>QI / Ord Qi </li>
                     {/* <ul className="qiSubmenu">
                          <li  onClick={() => handleClick("")}>Fabric Inspection</li>
                          <li  onClick={() => handleClick("")}>Spreading & Marker Inspection</li>
                          <li  onClick={() => handleClick("")}>Cut & Print Panel Inspection</li>
                          <li  onClick={() => handleClick("")}>Band knife & Auto Cutter Inspection</li>
                          <li  onClick={() => handleClick("")}>End Table Inspection</li>
                          <li  onClick={() => handleClick("")}>Finishing Inspection</li>
                        </ul> */}
                     <li  onClick={() => handleClick(14)}>Reporter</li>
                     <li  onClick={() => handleClick(24)}>Loader</li>
                     <li  onClick={() => handleClick(23)}>Spot Remover</li>
                </ul>

          </div>
          <div className="sideContainer col-md-8 pt-2 container container-fluid bg-white">
           <ManagementCard departmentId ={departmentId} />
          </div>
         
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ManagementTeam;
