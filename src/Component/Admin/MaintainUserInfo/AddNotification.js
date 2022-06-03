import React,{useEffect, useState} from 'react'
import Navigation from './../../Navigation/Navigation';
import { Link } from 'react-router-dom';
import "../AdminPanel.css"
import { useForm } from "react-hook-form";
function AddNotification() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [notification, setNotification] = useState([])
    const onSubmit = data => {
        const timeAndDate = new Date().toDateString()
        const url = "https://lingerie.herokuapp.com/adminNotification"
        fetch(url, {
            method:"POST",
            headers: {"content-type": "application/json"},
            body:JSON.stringify({title:data.title, description:data.description, time:timeAndDate, provider:data.name})
        })
        .then((response) => {
            if (response) {
                window.location.reload()
            }
        })
    };
// FIND NOTIFICATION
    useEffect(() => {
            const url = "https://lingerie.herokuapp.com/allNotification"
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setNotification(data)
            })
    },[])
// DELETE NOTIFICATIONS
    const deleteSms =(id) => {
      const url = `http://localhost:5000/removeNotification/${id}`
      fetch(url, {
        method:"DELETE",
      })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remainingNotification = notification.filter(notification => notification._id !== id) 
          setNotification(remainingNotification)
        }
      })
     

    }
    return (
        <div style={{minHeight:"100vh",background: "#004", height:"100%"}} className=' '>
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
    
    
     
            <div className="AddNotificationCard ">
              <div className="">
              <h4>Add Notification</h4>
             
            <form onSubmit={handleSubmit(onSubmit)}>
        <p>name</p>
      <input {...register("name", { required: true })} placeholder='Title' />
      <br />
      {errors.name && <span style={{color:"red"}}>**</span>}
      <br />
      <br />
        <p>Title</p>
      <input {...register("title", { required: true })} placeholder='Title' />
      <br />
      {errors.title && <span style={{color:"red"}}>**</span>}
      <br />
      <br />
      <p>Description</p>
      <input {...register("description", { required: true })}  placeholder='Description'/>
      <br />
      {errors.description && <span style={{color:"red"}}>**</span>}
      <br />
      <br />
      <input type="submit" className='button' />
    </form>
              </div>
            </div>
       </div>
     </div>
     <div className="container">
     <h3 style={{marginLeft:"30px"}}>Total Notification: {notification.length}</h3>
     </div>
     <div className="container notificationContainer">
         {
             notification.map(info => <div key={info._id} className='notificationWrap'>
                 <div className="d-flex justify-content-end notificationDeleteBtn">
                 <button onClick={() => deleteSms(info._id)} className="btn btn-danger">Remove</button>
                 </div>
                 <h4 style={{textAlign:"center"}}>{info.provider}</h4>
                 <h5>{info.title}</h5>
                 <p>{info.description}</p>
                 <div className="border p-1 border-secondary">
                <span>Notification time: {info.time}</span>
                 </div>
             </div>)
         }
     </div>
    </div>
    )
}

export default AddNotification
