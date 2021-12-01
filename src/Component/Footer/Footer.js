import React from "react";
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
import { faClock, faLocationArrow, faMailBulk, faMapPin, faPhone, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import Navigation from './../Navigation/Navigation';
import { Button } from '@mui/material';
function Footer() {

  const dateAndTime = new Date().toDateString()
  return (
    <div className="bg-dark h-50">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="d-flex">
          <div className="col-md-3 ">
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
          <div className="col-md-3">
            <h1>
              <span style={{ textDecoration: "underline" }}>Get</span> In Touch
            </h1>
            <ul style={{lineHeight:"45px"}}>
                <li> <span><FontAwesomeIcon icon={faMapPin}/></span>57/1 street Narayongonj , Bangladesh  </li>
                <li> <span><FontAwesomeIcon icon={faPhone}/></span>019xxxxxxxxxx  </li>
                <li> <span><FontAwesomeIcon icon={faMailBulk}/></span>mdexample@gmail.com  </li>
                <li> <span><FontAwesomeIcon icon={faClock}/></span> {dateAndTime} </li>
            
            </ul>
          
          </div>
          <div className="col-md-3">
            <h1>
              <span style={{ textDecoration: "underline" }}>Useful</span> Links
            </h1>
              <ul>
                <li><a href="">Useful link here</a></li>
                <li><a href="">Useful link here</a></li>
                <li><a href="">Useful link here</a></li>
                <li><a href="">Useful link here</a></li>
                <li><a href="">Useful link here</a></li>
              </ul>
         
          </div>
          <div className="col-md-3">
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
            <div className="col-md-6">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempore reiciendis laborum repellendus natus tenetur perferendis, beatae hic, culpa distinctio vitae ut, blanditiis obcaecati dolorem! Iusto tempora reprehenderit ad. Amet nisi odio dolor maxime explicabo repellendus rerum nemo culpa voluptatem exercitationem quia provident id enim, consequuntur recusandae, vitae impedit maiores.</p>
            </div>
           
          </div>
          <div className=" d-flex justify-content-center">
              <form action="">
              <input type="text" placeholder="Your name" />
              <input type="text"  placeholder="Your Email"/>
              <button className="btn btn-danger submitBtn">Submit</button>
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
