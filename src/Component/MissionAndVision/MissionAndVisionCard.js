import React from "react";
import "./MissionAndVisionCard.css";
function MissionAndVisionCard() {
  return (
    <div
      style={{ height: "80vh", marginTop: "10rem", marginBottom: "10rem" }}
      className="container   pt-5  pb-5 h-75 d-flex justify-content-between"
    >
        <div class="card vision" style={{ width: "30rem" }}>
          <h2 className="text-center text-dark">MISSION</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border border-white">An item</li>
            <li class="list-group-item border border-white">A second item</li>
            <li class="list-group-item border border-white">A third item</li>
            <li class="list-group-item border border-white">An item</li>
            <li class="list-group-item border border-white">A second item</li>
            <li class="list-group-item border border-white">A third item</li>
            <li class="list-group-item border border-white">An item</li>
            <li class="list-group-item border border-white">A second item</li>
            <li class="list-group-item border border-white">A third item</li>
            <li class="list-group-item border border-white">An item</li>
            <li class="list-group-item border border-white">A second item</li>
            <li class="list-group-item border border-white">A third item</li>
          </ul>
        </div>
      
      <div class="card vision" style={{ width: "30rem" }}>
        <h2 className="text-center text-dark">VISION</h2>
        <ul class="list-group list-group-flush">
          <li class="list-group-item border border-white">An item</li>
          <li class="list-group-item border border-white">A second item</li>
          <li class="list-group-item border border-white">A third item</li>
          <li class="list-group-item border border-white">An item</li>
          <li class="list-group-item border border-white">A second item</li>
          <li class="list-group-item border border-white">A third item</li>
          <li class="list-group-item border border-white">An item</li>
          <li class="list-group-item border border-white">A second item</li>
          <li class="list-group-item border border-white">A third item</li>
          <li class="list-group-item border border-white">An item</li>
          <li class="list-group-item border border-white">A second item</li>
          <li class="list-group-item border border-white">A third item</li>
        </ul>
      </div>
    </div>
  );
}

export default MissionAndVisionCard;
