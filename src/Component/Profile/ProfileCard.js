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
      <div className=" pt-5 pb-5 m-5">
        <div  className=" qualityAndProdContainer mt-5 justify-content-between">
          <div style={{width:"16rem"}} className=" col-md-4  profileImgCard underProfileImg Card">
            <img style={{ width: "100%" }} src={img} alt="" />
          </div>
          
          <div className="col-md-7 profileImgTitle underProfileCard  bg-light Title p-3">
            <div className="ml-3">
              <h3
                style={{
                  color: "#002060",
                  textAlign: "center",
                  lineHeight: "7px",
                  fontFamily: "arial",
                }}
              >
            {name}
              </h3>
              <h5
                style={{
                  color: "#002060",
                  textAlign: "center",
                  fontFamily: "arial",
                }}
              >
                {title}
              </h5>
          
              <p>
                <span
                  style={{
                    fontSize: "25px",
                    color: "#4e4c4c",
                    textDecoration: "underline",
                    fontFamily:"cursive",
                  }}
                >
                  About:
                </span>{" "}
                <span
                  style={{
                    marginLeft: "1rem",
                    color: "#002060",
                    fontFamily: "cursive",
                    fontSize:"17px"
                  }}
                >
                 {about}
                </span>
              </p>
              <CardActions style={{marginTop:"10px"}} className="cooProfileIconArea">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </CardActions>
            </div>
          </div>
        </div>
      </div>




    )
}

export default ProfileCard
