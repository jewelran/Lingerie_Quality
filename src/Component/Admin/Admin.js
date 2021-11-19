import React from 'react'
import AdminCard from './AdminCard';

function Admin() {
    const admins = [
        {   
            id:1,
            name:" Jewel Hossain",
            designation:"head of Quality" ,
            contact:"017xxxxxxxxx"
        },
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
        <div className="mt-5">
           <div className="container d-flex justify-content-around mr-3 ">
           {
                admins.map(admin => <AdminCard key= {admin.id} admin = {admin}></AdminCard>)
            }
           </div>
        </div>
    )
}

export default Admin
