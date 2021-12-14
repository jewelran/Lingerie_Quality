
import React from 'react'
import Footer from '../Footer/Footer';
import AdminCard from './AdminCard';

function Admin() {
    const admins = [
     
        {   
            id:2,
            name:" Omor Faruk ",
            designation:"Sr. Quality Executive" ,
            contact:"017xxxxxxxxx",
            about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium officiis esse ut hic illum aut possimus iure, nulla voluptate?",
            ImgUrl:"https://i.ibb.co/Jr4yRWZ/Omor-Faruq.png",
            facebook:"faFacebook",
            linkedIn:"faLinkedinIn",
            instagram:"faInstagram",
            whatsApp:"faWhatsappSquare",
            twitter:"faTweeter",
            email:"omarfaruq6809@gmail.com "
        },
        {   
            id:2,
            name:" Jewel Rana",
            designation:"Web Developer (QC)" ,
            contact:"017xxxxxxxxx",
            about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium officiis esse ut hic illum aut possimus iure, nulla voluptate?",
            ImgUrl:"https://i.ibb.co/pfT62fd/jewel.png",
            github:"https://github.com/jewelran",
            facebook:"faFacebook",
            linkedIn:"faLinkedinIn",
            instagram:"faInstagram",
            whatsApp:"faWhatsappSquare",
            website:"https://confident-heyrovsky-c8a58c.netlify.app/",
            twitter:"faTweeter",
            email:"mdjewelrana6487@gmail.com"
        },
     
    ]
    return (
        <div className="mt-5 pb-5">
            <h1 style={{fontFamily:"cursive", }} className="text-center mb-2"> <span style={{fontSize:"4rem"}}>S</span>ERVICE</h1>
           <div className="container d-flex justify-content-around mr-6 ">
           {
                admins.map(admin => <AdminCard key= {admin.id} admin = {admin}></AdminCard>)
            }
           </div>
        </div>
    )
}

export default Admin
