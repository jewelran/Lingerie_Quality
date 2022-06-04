import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
         <div style={{background:"#002",maxHeight:"800px",height:"auto"}} className="col-md-3 ">
         <ul>
         <Link to = "/allUser"> <li style={{color:"white", fontWeight:"bold",padding:"10px 20px", backgroundColor:"orange",margin:"10px"}}>All User</li></Link>
         <Link to ="/subscriber"><li style={{color:"white", fontWeight:"bold",padding:"10px 20px", backgroundColor:"orange",margin:"10px"}}> All Subscriber </li></Link>
         <Link to ="/message"><li style={{color:"white", fontWeight:"bold",padding:"10px 20px", backgroundColor:"orange",margin:"10px"}}> Message info </li></Link>
         <Link to ="/addNotification"> <li style={{color:"white", fontWeight:"bold",padding:"10px 20px", backgroundColor:"orange",margin:"10px"}}>Add Notification</li></Link>
         </ul>
       </div>
    </div>
  )
}

export default Sidebar