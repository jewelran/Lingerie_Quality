import React from 'react'
import Navigation from './../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import "../AdminPanel.css"
function Message() {
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
     <h3 style={{marginLeft:"30px"}}>Total User message: </h3>
            <input className='UserSearch' type="search" name="" id="" placeholder='Search Department user' />

     </div>
            <div className="userInfoCard">
            
            </div>
       </div>
     </div>
    </div>
    )
}

export default Message
