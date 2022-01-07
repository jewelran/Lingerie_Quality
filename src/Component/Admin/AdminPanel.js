import React from 'react'
import Navigation from './../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "./AdminPanel.css"
function AdminPanel() {
  const [user, setUser] = useState([])
  useEffect(() => {
          const url = "http://localhost:5000/alluser";
          fetch(url)
          .then(res => res.json())
          .then(data => {
              setUser(data)
          })
  },[])


    return (
        <div style={{height:"100%",background: "#004", paddingBottom:"20px", minHeight:"100vh"}} className=' '>
          <Navigation></Navigation>
       <div style={{maxWidth:"1800px", margin:'0 auto'}} className=" d-flex justify-content-center">
         <div style={{background:"#003"}} className="col-md-4 ">
           <ul>
             <li><Link to = "/allUser">All User</Link></li>
             <li> <Link to ="/subscriber">All Subscriber</Link> </li>
             <li> <Link to ="/message">Message info</Link> </li>
             <li> <Link to ="/addNotification">Add Notification</Link></li>
           </ul>
         </div>
         <div className="col-md-8">
      <h1>NOtification here</h1>
            <div className="userInfoCard">
                {
                    user.map(userInfo => <div className='userCard'>
                        <div className= " d-flex justify-content-between">
                          <div className="">
                          <img style={{width:"100px", height:"100px",borderRadius:"5px"}} src={userInfo.imgUrl} alt="" />
                          </div>
                          <div className="">
                            <button className='btn btn-danger'>Delete</button>
                          </div>
                        </div>
                        <h6>Name: {userInfo.name} {userInfo.lastName}</h6>
                        <p>Designation: {userInfo.designation}</p>
                        <p>Section: {userInfo.department}</p>
                      

                    </div>)
                }
            </div>
       </div>
       </div>
      </div>
    )
}

export default AdminPanel
