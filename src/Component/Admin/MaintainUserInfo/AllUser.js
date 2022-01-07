import React from 'react'
import Navigation from './../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "../AdminPanel.css"
function AllUser() {
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
     <h3 style={{marginLeft:"30px"}}>Total User: {user.length}</h3>
            <input className='UserSearch' type="search" name="" id="" placeholder='Search Department user' />

     </div>
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

export default AllUser
