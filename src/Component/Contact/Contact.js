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
import serviceImg from "../Images/bgImg/service.svg"

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
    fetch("https://lingerie.herokuapp.com/message", {
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
          about:"Excellent Knowledge on garment product quality, System Development & management. Basic Knowledge about Web Development, Design & Coding. Highly experienced to Create & execute innovative ideas & methods with proper functionality. Likes to take challenges & feel comfortable to work in Challenging environment.",
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
          about:"Excellent Knowledge on garment product quality & Web Development. Full Stack Web Developer. Highly Experienced in HTML, CSS, Bootstrap, JavaScript, ReactJS, & NudeJS. Highly Capable to Develop any web site by using data & Instruction within a short time. ",
          ImgUrl:"https://i.ibb.co/YyXVR9Q/jewel.png",
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

      <div data-aos="fade-down"
     data-aos-duration="2000" className="mb-5 d-flex justify-content-center align-items-center">
        <img src={serviceImg} alt="" />
      </div>
    <div className=" contactCardWrap justify-content-around">
    {
          admins.map(admin => <ContactCard key = {admin.id} admin = {admin}></ContactCard>)
        }
    </div>
     </div>
        <div data-aos="fade-down"
     data-aos-duration="2000" className="">
          <h1 className="border-bottom p-1 border-secondary">GET IN TOUCH</h1>
          <p className=" pt-3 pb-3">
            You want to talk to me about the problem? I'd be happy to! Just let
            me know when is good for you via the form below or use any of the
            social media channels.{" "}
          </p>
          <div  className="contactWrap justify-content-around">
            <div data-aos="fade-left"
     data-aos-duration="1500" className="col-md-5 pb-4 text-white">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <h6>NAME</h6>
                <input  style={{width:"90%"}}  className=" rounded text-white bg-transparent border border-secondary" placeholder="Your Name" {...register("name", { required: true })} />
                <br />
                {errors.name && <span className="text-danger">**</span>}
                <br />
                <br />
                <h6>EMAIL</h6>

                <input  type="email"  style={{width:"90%"}} className=" rounded text-white bg-transparent border border-secondary" placeholder="Your Email" {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="text-danger">**</span>}
                <br />
                <br />
                <h6>MESSAGE</h6>
                <textarea   className="rounded bg-transparent text-white" rows="5" cols="63" placeholder="Your Comments" {...register("massage", { required: true })} />
                <br />
                {errors.massage && <span className="text-danger">**</span>}
                <br />
                <br />
                <button className="btn btn-secondary bg-transparent hover-danger ">SEND MESSAGE</button>
              </form>
            </div>
            <div data-aos="fade-right"
     data-aos-duration="1500" className="col-md-5 contactMedia">
            <ul>
                <li> <span className="fs-4  mediaIcon"><FontAwesomeIcon icon= {faPhone}/> </span> <span style={{marginLeft:"10px"}}> <a href="tel:+8801708648728">Call now</a> <span className="fs-3">/</span> 01947946784</span> </li>
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
