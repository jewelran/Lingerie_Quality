import React from 'react'
import Footer from '../Footer/Footer'
import "./Notification.css"
import Navigation from './../Navigation/Navigation';
function Notification() {
    return (
        <div className="">
             <Navigation/>
            <div className="col-md-12  notification text-center pt-4">
                        <h1>Notification Here!</h1>
                        <img src="../Images/bgImg/notification_bg.jpg" alt="" />
           
            </div>
            <Footer/>
        </div>
    )
}

export default Notification
