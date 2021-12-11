import React from 'react'
import Footer from '../Footer/Footer'
import notificationImg from "../Images/bgImg/notification_bg.jpg"
import "./Notification.css"
import Navigation from './../Navigation/Navigation';
function Notification() {
    return (
        <div className="notification ">
            <Navigation/>
            <div className="col-md-12   text-center pt-4 container mb-5 mt-5 pt-5 pb-5 d-flex justify-content-aground align-items-center">
                       <div className="p-3">
                       <h1>ATTENTION EVERYBODY!</h1>
                       
                       <div className="d-flex pt-3 ">
                       <div className="col-md-6">
                           <img style={{width:'100%'}} src={notificationImg} alt="" />
                           </div>
                           <div style={{boxShadow:"#a39e9e 0px 9px 20px 10px", height:"auto"}}  className="col-md-6 text-start rounded justify-content-center, align-items-center p-3 ">
                               <div className="">
                               <h4>Provider Name</h4>
                               <h1>Notification Caption here</h1>
                               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores repellendus temporibus. Sapiente assumenda saepe aut facere placeat omnis aliquam!</p>
                               <span>Date amd time here</span>
                               </div>
                           </div>
                       </div>
                          
                       </div>
                       
           
            </div>
            <Footer/>
        </div>
    )
}

export default Notification
