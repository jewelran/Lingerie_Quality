import React from 'react'
import "./MissionAndVisionCard.css"
function MissionAndVisionCard() {
  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <div className="container h-100">
        <div className="d-flex  pb-5 h-75">
          <div className="col-md-7  missionContainer">
            <h2 className="text-center">MISSION</h2>
            <ul>
              <li>Secure product quality as per buyer demand.</li>
              <li>Maintain all routine of buyer at all stage of work.</li>
              <li>Sustain quality standard for long time.</li>
              <li>Ensure all safety requirement at work stage.</li>
            
            </ul>
          </div>
          <div className="col-md-5 ">
            <img  style ={{ width:"100%"}}src="https://newstar-online.com/wp-content/uploads/2019/07/big-image-1080x675.png" alt="" />
          </div>
        </div>
        <div className="d-flex  visionContainer mt-5 h-75">
          <div className="col-md-5 ">
            <img style={{width:"100%"}} src="https://newstar-online.com/wp-content/uploads/2019/07/big-image-1080x675.png" alt="" />
          </div>
          <div className="col-md-7 ">
            <h3 className="text-center">VISION</h3>
            <ul>
              <li>Stablish zero defect project.</li>
              <li>No stope order.</li>
              <li>No customer claim.</li>
              <li>Create best quality standard.</li>
              <li>Be an Idol on Quality.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionAndVisionCard
