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
    fetch("http://localhost:5000/subscriber",{
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
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-between">
          <div className="col-md-4 ">
            <h1>
              <span style={{ borderBottom: "3px solid white" }}> About</span> Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga
              necessitatibus quaerat corrupti commodi quisquam repudiandae nisi
              saepe obcaecati nemo blanditiis nostrum cumque, officia rem
              provident eligendi incidunt laudantium? Laborum,
            </p>
            <div className=" d-flex justify-content-around ">
              <h2 className="rounded text-primary">
                <FontAwesomeIcon icon={faFacebook} />
              </h2>
              <h2 className="rounded text-primary ">
                <FontAwesomeIcon icon={faTwitter} />
              </h2>
              <h2 className="rounded text-primary ">
                <FontAwesomeIcon icon={faInstagram} />
              </h2>
              <h2 className="rounded text-primary ">
                <FontAwesomeIcon icon={faLinkedin} />
              </h2>
              <h2 className="rounded text-primary ">
                <FontAwesomeIcon icon={faWhatsapp} />
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <h1>
              <span style={{ textDecoration: "underline" }}>Get</span> In Touch
            </h1>
            <ul>
                <li> <span className="fs-4  mediaIcon"><FontAwesomeIcon icon= {faMapPin}/> </span> <span style={{marginLeft:"10px"}}>Narayongonj, Dhaka , Bangladesh</span> </li>
                <li><a href="mailto:"><span className="fs-4  mediaIcon"><FontAwesomeIcon icon = {faEnvelope}/></span> <span style={{marginLeft:"10px"}}>mdjewelrana6487@gmail.com</span> </a></li>
                <li><a href="https://confident-heyrovsky-c8a58c.netlify.app/" target="_blank"><span className="fs-4  mediaIcon"><FontAwesomeIcon icon = {faGlobeEurope}/></span> <span style={{marginLeft:"10px"}}>website</span></a></li>
                <li><a href=""> <span className="fs-4  mediaIcon"><FontAwesomeIcon icon= {faLinkedin}/></span> <span style={{marginLeft:"10px"}}>linkedin</span></a></li>
               
            </ul>  
          </div>
        
          <div className="col-md-4">
            <h1>
              <span style={{ textDecoration: "underline" }}>Latest</span>{" "}
              Projects
            </h1>
            <div className="footerImgGallery">
              <div className="d-flex">
                <img
                  src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M="
                  alt="img"
                />
                <img
                  src="https://media.istockphoto.com/photos/scientists-working-in-the-laboratory-picture-id1096502340?k=20&m=1096502340&s=170667a&w=0&h=MEUpYktW-DkcMetQsardZkKPwPlO9HtZkNy1EEA4j5M="
                  alt="img"
                />
              </div>
              <div className="d-flex">
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              tempore reiciendis laborum repellendus natus tenetur perferendis,
              beatae hic, culpa distinctio vitae ut, blanditiis obcaecati
              dolorem! Iusto tempora reprehenderit ad. 
            </p>
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex">
            <div className="text-center">
            <input className="bg-transparent border  border-secondary m-4 text-white p-2 rounded" {...register("name", { required: true })} placeholder="Your Name" />
            <br />
            {errors.name && <span className="text-danger">Name is required</span>}
            </div>
              <div className="text-center">
              <input className="bg-transparent border  border-secondary m-4 text-white p-2 rounded" {...register("email", { required: true })}  placeholder="Enter Your Email"/>
              <br />
            {errors.email && <span className="text-danger">Email is required</span>}
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
