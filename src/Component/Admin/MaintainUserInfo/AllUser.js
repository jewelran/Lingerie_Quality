import React from 'react'
import Navigation from './../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "../AdminPanel.css"
import Sidebar from './Sidebar';
function AllUser() {
    const [user, setUser] = useState([])
    console.log(user, "user here");
    useEffect(() => {
            const url = "https://lingerie.herokuapp.com/alluser";
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    },[])

const handleDeleteUser= (id) => {
  console.log(id, "this is user id");
  const url = `https://lingerie.herokuapp.com/deleteUser/${id}`
  fetch(url, {
    method:"DELETE"
  })
  .then(res  => res.json())
  .then(data => {
    if (data.deletedCount > 0) {
      const remainingUser = user.filter(user => user._id !== id)
      setUser(remainingUser)
    }
  })
  
  
}

    return (
        <div style={{height:"100vh",background: "#004"}} className=' '>
        <Navigation></Navigation>
     <div className="container d-flex justify-content-center mt-4">
     
       <div className="">
         <Sidebar></Sidebar>
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
                            <button onClick={()=> handleDeleteUser(userInfo._id)} className='btn btn-danger' >Delete</button>
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
