
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
            about:"Excellent Knowledge on garment product quality, System Development & management. Basic Knowledge about Web Development, Design & Coding. Highly experienced to Create & execute innovative ideas & methods with proper functionality. Likes to take challenges & feel comfortable to work in Challenging environment.",
            ImgUrl:"https://i.ibb.co/X71FV3x/omar.png",
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
            about:"Excellent Knowledge on garment product quality & Web Development. Full Stack Web Developer. Highly Experienced in HTML, CSS, Bootstrap, JavaScript, ReactJS, & NudeJS. Highly Capable to Develop any web site by using data & Instruction within a short time. ",
            ImgUrl:"https://i.ibb.co/wKJkMZz/jewel-Rana.png",
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
           <div style={{maxWidth:"1480px"}} className=" container d-flex justify-content-around mr-6 ">
           {
                admins.map(admin => <AdminCard key= {admin.id} admin = {admin}></AdminCard>)
            }
           </div>
        </div>
    )
}

export default Admin
