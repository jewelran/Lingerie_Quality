import React from 'react'
import Footer from '../Footer/Footer'
import "./Notification.css"
import Navigation from './../Navigation/Navigation';
import { useState } from 'react';
import { useEffect } from 'react';
import NotificationCard from './NotificationCard';
import notificationImg from "../Images/bgImg/notification_bg.jpg"

function Notification() {

    // notification
    const [notification, setNotification] = useState([])
    useEffect(()=> {
        const url = "https://lingerie.herokuapp.com/allNotification"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data,"this is notification");
            setNotification(data)
        })
    },[])

    return (
        <div className="notification  ">
            <Navigation/>
            <div className="text-center p-3">
                <h1>ATTENTION EVERY BODY!</h1>
            </div>
            <div  className="  d-flex justify-content-center">
                <div className="notificationWrapper">
                <div data-aos="fade-up"
     data-aos-duration="2000" className="col-md-6">
                           <img style={{width:'100%'}} src={notificationImg} alt="" />
                           </div>
             <div className="col-md-6">
             {
                    notification.map(info => <NotificationCard key = {info.id} info = {info}></NotificationCard>)
                }
             </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Notification
