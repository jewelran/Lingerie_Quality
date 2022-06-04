import React, { useState } from 'react'
import Navigation from './../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import "../AdminPanel.css"
import { useEffect } from 'react';
function SubscriberInfo() {
  const [subscribe, setSubscribe] = useState([]);
  useEffect(()=> {
    const url = "https://lingerie.herokuapp.com/subscriber";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setSubscribe(data)
    })
  },[])
    return (
        <div style={{height:"100vh",background: "#004"}} className=' '>
        <Navigation></Navigation>
     <div className="container d-flex justify-content-center mt-4">
       <div style={{background:"#002",maxHeight:"500px"}} className="col-md-3 ">
         <ul>
         <Link to = "/allUser"> <li style={{color:"white"}}>All User</li></Link>
         <Link to ="/subscriber"><li> All Subscriber </li></Link>
         <Link to ="/message"><li> Message info </li></Link>
         <Link to ="/addNotification"> <li>Add Notification</li></Link>
         </ul>
       </div>
       <div className="col-md-9">
     <div className=" d-flex justify-content-around">
     <h3 style={{marginLeft:"30px"}}>Total Subscriber: {subscribe.length}</h3>
    

     </div>
            <div className="userInfoCard">
            {
                subscribe.map(info => <li style={{ margin:"10px",borderBottom:"1px solid grey",padding:"7px",marginLeft:"1rem",display:"flex",flexWrap:"wrap"}} key = {subscribe.email}>
                 <div  style={{lineHeight:"15px",minWidth:"200px", maxWidth:"500px"}}>
                 <h4>{info.name}</h4>
                   <span>{info.email}</span>
                 </div>
                </li>)
              }
            </div>
       </div>
     </div>
    </div>
    )
}

export default SubscriberInfo
