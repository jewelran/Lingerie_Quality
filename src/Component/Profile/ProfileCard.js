import React from 'react'
import { CardActions, Button } from '@mui/material';
import "./ProfileCard.css"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import cooOfCompany from "../Images/CooOfCompany.png";

function ProfileCard(props) {
  console.log(props);
    return (
      <div className="">
        <div className="border m-3 p-3 rounded bg-white text-dark">
          <div style={{height:"213px"}} className="d-flex justify-content-center">
            <div  className=" topProfileImgArea  ">
              <img className = "TopProfileImg"  src={cooOfCompany} alt="img" />
            </div>
            <div style={{marginLeft:"15px"}} className="">
              <h2>name:</h2>
              <h4>Title</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veritatis distinctio ea ipsa eligendi inventore.</p>
              <div className="d-flex">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    )
}

export default ProfileCard
