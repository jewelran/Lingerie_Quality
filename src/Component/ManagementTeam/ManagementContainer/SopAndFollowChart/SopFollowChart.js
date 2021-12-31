import React from 'react'
import Navigation from '../../../Navigation/Navigation'

function SopFollowChart() {
    return (
      <div style={{height:"100vh",background: "#2E3141"}}>
      <div  className="">
            <Navigation/>
        </div>
        <h2 style={{textAlign:"center"}}>Routine and method is PROCESSING</h2>
        <div style={{height:"50vh"}} className="d-flex justify-content-center align-items-center">
        <div className="">
        <button class="btn btn-primary" type="button" disabled>
    <span
      class="spinner-grow spinner-grow-sm"
      role="status"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Processing</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span
      class="spinner-grow spinner-grow-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Processing
  </button>
        </div>
 </div>
    </div>
    )
}

export default SopFollowChart
