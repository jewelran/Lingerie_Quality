import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../Footer/Footer";
import blog from "../Images/bgImg/blog.png";
import Navigation from "./../Navigation/Navigation";
import Admin from "./../Admin/Admin";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobeEurope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css"
import ContactCard from "./ContactCard";

function Contact() {
    const [massageInfo, setMassageInfo] = useState({})
    console.log(massageInfo);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/message", {
      method:"POST",
      headers:{"content-type": "application/json"},
      body: JSON.stringify(data)

    })
    .then((response) => {
      if (response) {
        
       console.log("data insert in mongodb", response);
        if (response) {
          window.location.reload()
        }
      }
    })
  
    
   
    };
    
    console.log(watch("example")); 
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
    <div style={{ background: "#2E3141" }}>
      <Navigation />
      <div className="container">
     <div className=" pt-5 pb-5 ">

       <h3 className="text-center pb-4 fs-1" style={{fontFamily:"cursive"}}><span>S</span><span>ervice</span></h3>
    <div className="d-flex justify-content-around">
    {
          admins.map(admin => <ContactCard key = {admin.id} admin = {admin}></ContactCard>)
        }
    </div>
     </div>
        <div className="">
          <h1 className="border-bottom p-1 border-secondary">GET IN TOUCH</h1>
          <p className=" pt-3 pb-3">
            You want to talk to me about the problem? I'd be happy to! Just let
            me know when is good for you via the form below or use any of the
            social media channels.{" "}
          </p>
          <div className="d-flex justify-content-around">
            <div className="col-md-5 pb-4 text-white">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <h6>NAME</h6>
                <input  style={{width:"90%"}}  className=" rounded text-white bg-transparent border border-secondary" placeholder="Your Name" {...register("name", { required: true })} />
                <br />
                {errors.name && <span className="text-danger">This field is required</span>}
                <br />
                <br />
                <h6>EMAIL</h6>

                <input   style={{width:"90%"}} className=" rounded text-white bg-transparent border border-secondary" placeholder="Your Email" {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="text-danger">This field is required</span>}
                <br />
                <br />
                <h6>MESSAGE</h6>
                <textarea   className="rounded bg-transparent text-white" rows="5" cols="63" placeholder="Your Comments" {...register("massage", { required: true })} />
                <br />
                {errors.massage && <span className="text-danger">massage field is required</span>}
                <br />
                <br />
                <button className="btn btn-secondary bg-transparent hover-danger ">SEND MESSAGE</button>
              </form>
            </div>
            <div className="col-md-5 contactMedia">
            <ul>
                <li> <span className="fs-4  mediaIcon"><FontAwesomeIcon icon= {faPhone}/> </span> <span style={{marginLeft:"10px"}}>01708648728 <span className="fs-3">/</span> 01947946784</span> </li>
                <li><a href="mailto:"><span className="fs-4  mediaIcon"><FontAwesomeIcon icon = {faEnvelope}/></span> <span style={{marginLeft:"10px"}}>Email</span> </a></li>
                <li><a href="https://confident-heyrovsky-c8a58c.netlify.app/" target="_blank"><span className="fs-4  mediaIcon"><FontAwesomeIcon icon = {faGlobeEurope}/></span> <span style={{marginLeft:"10px"}}>website</span></a></li>
                <li><a href=""> <span className="fs-4  mediaIcon"><FontAwesomeIcon icon= {faLinkedin}/></span> <span style={{marginLeft:"10px"}}>linkedin</span></a></li>
               
            </ul>  
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
