import React, { useEffect, useState } from 'react'
import Navigation from './../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import "../AdminPanel.css"
function Message() {
  const [userMessage, setUserMessage]= useState([]);
  useEffect(()=> {
    const url = "http://localhost:5000/notification";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUserMessage(data)
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
     <h3 style={{marginLeft:"30px"}}>Total User message: {userMessage.length} </h3>
            <input className='UserSearch' type="search" name="" id="" placeholder='Search Department user' />

     </div>
            <div className="userInfoCard">
              {
                userMessage.map(message => <li style={{ margin:"10px",borderBottom:"1px solid grey",padding:"7px",marginLeft:"1rem",display:"flex",flexWrap:"wrap"}} key = {message.email}>
                 <div  style={{lineHeight:"15px",minWidth:"400px", maxWidth:"500px"}}>
                 <h4>{message.name}</h4>
                   <p>{message.massage}</p>
                   <span>{message.email}</span>
                 </div>
                </li>)
              }
            </div>
       </div>
     </div>
    </div>
    )
}

export default Message
