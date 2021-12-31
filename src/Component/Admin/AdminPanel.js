import React from 'react'
import Navigation from './../Navigation/Navigation';

function AdminPanel() {
    return (
        <div style={{height:"100vh",background: "#000"}}>
        <div  className="">
              <Navigation/>
          </div>
         <div className="container d-flex justify-content-center mt-5">
         <img style={{width:"50%",height:"40vh",}} src="https://i0.wp.com/www.wishesquotesimages.com/wp-content/uploads/2020/11/happy-new-year-2022-gif-with-quotes.gif?fit=480%2C258&ssl=1" alt="" />
         </div>
          <h2 style={{textAlign:"center"}}>Admin panel is PROCESSING</h2>
          <div style={{height:"50vh"}} className="d-flex justify-content-center">
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

export default AdminPanel
