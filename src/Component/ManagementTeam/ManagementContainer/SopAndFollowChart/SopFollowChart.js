import React from 'react'
import Navigation from '../../../Navigation/Navigation'

function SopFollowChart() {
    return (
        <div>
            <div className="">
                <Navigation/>
            </div>

            <h2 style={{textAlign:"center"}}>SOP AND FOLLOW CHART PROCESSING</h2>
            <div   className="">
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
    )
}

export default SopFollowChart
