import React from "react";
import ManagementCard from "./ManagementCard";
import "./ManagementTeam.css"
function ManagementTeam() {
  return (
    <div>
      <div className="container pb-5 mt-5 ">
        <div className="d-flex">
          <div className="sideBer col-md-3 pt-2 " >
            <h3>All Information </h3>
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
          <div className="sideContainer col-md-8 pt-2 container-fluid">
           <ManagementCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagementTeam;
