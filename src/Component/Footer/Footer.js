import React from "react";
import { useForm } from "react-hook-form";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faTelegram,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faGlobeEurope,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import Navigation from "./../Navigation/Navigation";
import { Button } from "@mui/material";
function Footer() {
  const dateAndTime = new Date().toDateString();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://lingerie.herokuapp.com/subscriber",{
      method:"POST",
      headers:{"content-type": "application/json"},
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response) {
        alert("data upload successfully")
        window.location.reload()
      }
    })
  };

  console.log(watch("example"));
  return (
    <div className="bg-dark h-50">
      <div className="container footerContainer">
        <div className=" footerWrapper justify-content-between">
          <div className="col-md-4 ">
            <h1>
              <span style={{ borderBottom: "3px solid white" }}> About</span> Us
            </h1>
            <p style={{textAlign:"justify"}}>
            We Started our journey in 2011 as a 100% export oriented garment industry. We always respect our customer demand & work as hard as possible to achieve our goal with innovative & excellent ideas and methods that align with trends. We are Committed to our customers to provide the best quality product and maintain all of their restrictions. We have established the most precise quality control system in our premises to secure product quality standards.
            </p>
        
          </div>
          <div style={{margin:"0px 15px"}} className="col-md-3">
            <h1>
              <span style={{ textDecoration: "underline" }}>Get</span> In Touch
            </h1>
            <div style={{marginLeft:"38px"}} className="">
              <div className="">
              <h2 className="rounded text-primary">
                <FontAwesomeIcon icon={faFacebook} /> <span style={{fontSize:"23px", color:"white", marginLeft:"8px"}}>Facebook</span>
              </h2>
              <h2 className="rounded text-primary ">
                <FontAwesomeIcon icon={faTwitter} /> <span style={{fontSize:"23px", color:"white", marginLeft:"8px"}}>Twitter</span>
              </h2>
              <h2 className="rounded text-primary ">
                <FontAwesomeIcon icon={faInstagram} /> <span style={{fontSize:"23px", color:"white", marginLeft:"8px"}}>Instagram</span>
              </h2>
              <h2 className="rounded text-primary ">
                <FontAwesomeIcon icon={faLinkedin} /> <span style={{fontSize:"23px", color:"white", marginLeft:"8px"}}>Linkedin</span>
              </h2>
           
              </div>
            </div>
          </div>
        
          <div className="col-md-5">
            <h1>
              <span style={{ textDecoration: "underline" }}>Latest</span>{" "}
              Projects
            </h1>
            <div className="footerImgGallery">
              <div className="">
                <img
                  src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M="
                  alt="img"
                />
                <img
                  src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M="
                  alt="img"
                />
                <img
                  src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M="
                  alt="img"
                />
                <img
                  src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M="
                  alt="img"
                />
              
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className=" container pt-4 pb-5">
        <div className=" d-flex justify-content-center">
          <div className="col-md-8">
            <p className="text-center">
            Please Hit the Subscribe Button below with your name and Email to Get in touch with us. You are always welcome to share your valuable comments & Suggestions through our contact box. 
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)} className="footerFormWrap">
            <div className="text-center">
            <input className="bg-transparent border  border-secondary m-4 text-white p-2 rounded" {...register("name", { required: true })} placeholder="Your Name" />
            <br />
            {errors.name && <span className="text-danger">**</span>}
            </div>
              <div className="text-center">
              <input className="bg-transparent border  border-secondary m-4 text-white p-2 rounded" {...register("email", { required: true })}  placeholder="Enter Your Email"/>
              <br />
            {errors.email && <span className="text-danger">**</span>}
              </div>
          <div className="mt-4">
          <input className="btn btn-dark border border-danger text-secondary" type="submit"  value="Subscribe"/>
          </div>
           
          </form>
        </div>
        
      </div>
      <div className="text-center bg-black p-3 text-white">
          <p>@Foolish Developer.All Right Reserved</p>
        </div>
    </div>
  );
}

export default Footer;
