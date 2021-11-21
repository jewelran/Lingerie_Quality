import React from 'react'
import AdminCard from './AdminCard';
import HeaderImg from "../Images/quality.png";
function Admin() {
    const admins = [
     
        {   
            id:2,
            name:" Omor Faruk ",
            designation:"Sr. Quality Executive" ,
            contact:"017xxxxxxxxx"
        },
        {   
            id:3,
            name:" Jewel Rana",
            designation:"Web Developer (QC)" ,
            contact:"017xxxxxxxxx"
        },
     
    ]
    return (
        <div className="mt-5 pb-5">
               <div style={{marginTop:"10rem"}} className="container">
        <img className="w-100" src={HeaderImg} alt="" />
      </div>
            <h1 className="text-center mb-5">FOR HELP</h1>
           <div className="container d-flex justify-content-around mr-3 ">
           {
                admins.map(admin => <AdminCard key= {admin.id} admin = {admin}></AdminCard>)
            }
           </div>
           <div className="pt-5">
               <img className="w-100" src="https://1.bp.blogspot.com/-bMGcwzwmcWA/YJ-HdIkZpyI/AAAAAAAAAWI/JH9ak0_4kLEp4DPqA6vEhiy-O3AQKmcaACLcBGAsYHQ/s1600/Screenshot%2B%25281075%2529.webp" alt="" />
           </div>
        </div>
    )
}

export default Admin
