import React from 'react'
import { CardActions, Button } from '@mui/material';
import "./ProfileCard.css"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function ProfileCard(props) {
  const {name, img, id ,title, about} =props.profile
    return (
      <div className="">
        <div className="border m-3 p-3 rounded bg-white text-dark">
          <div style={{height:"213px"}} className="d-flex justify-content-center">
            <div  className=" topProfileImgArea  ">
              <img className = "TopProfileImg"  src={img} alt="img" />
            </div>
            <div style={{marginLeft:"15px"}} className="">
              <h2>{name}</h2>
              <h4>{title}</h4>
              <p>{about}</p>
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
