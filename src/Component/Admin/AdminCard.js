import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./AdminCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faGithub,
  faTwitter,
  faOpencart,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
function AdminCard(props) {
  const { name, id, about, github, website, twitter, designation, ImgUrl,email } =
    props.admin;

;
  return (
    <Card  className="adminCard">
      <CardActionArea className="d-flex profileContainer">
        <CardMedia
          className="adminImg"
          component="img"
          image={ImgUrl}
          alt="green iguana"
        />
      <div className="details">
        <div className="content d-flex justify-content-center align-items-center">
        <button className="btn btn-danger border-none adminProfileBtn">View Profile</button>
        </div>
        
        
      </div>   
     
        <CardContent style={{ marginTop: "-1rem" }}>
          <Typography  gutterBottom variant="h5" component="div">
            <h2>{name}</h2>
          </Typography>
          <Typography style={{marginTop:"-17px", marginBottom:"20px"}} gutterBottom variant="h8" component="div">
            <h5>{designation}</h5>
          </Typography>
          <Typography variant="body2" style={{color:"#212525",padding:"5px",fontSize:"16px", textAlign:"justify"}}>
           {about}
          </Typography>
          <CardActions className=" mediaBtn">
            <Button size="small" color="primary">
              <a href="">
                {" "}
                <h2>
                  <FontAwesomeIcon icon={faInstagram} />
                </h2>{" "}
              </a>
            </Button>
            <Button size="small" color="primary">
              <a href="">
                {" "}
                <h2>
                  <FontAwesomeIcon icon={faFacebook} />
                </h2>{" "}
              </a>
            </Button>
            <Button size="small" color="primary">
              <a href="" >
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faWhatsapp} />
                </h2>
              </a>
            </Button>
            {github ? (
              <Button size="small" color="primary">
                <a href={github}  target="_blank">
                  <h2>
                    {" "}
                    <FontAwesomeIcon icon={faGithub} />
                  </h2>
                </a>
              </Button>
            ) : (
              ""
            )}
            {website ? (
              <Button size="small" color="primary">
                <a href={website} target="_blank">
                  
                  <h2>
                    {" "}
                    <FontAwesomeIcon icon={faGlobeEurope} />
                  </h2>
                </a>
              </Button>
            ) : (
              ""
            )}
            {twitter ? (
              <Button size="small" color="primary">
                <a href="" >
                  <h2>
                    {" "}
                    <FontAwesomeIcon icon={faTwitter} />
                  </h2>
                </a>
              </Button>
            ) : (
              ""
            )}
            {email ? (
              <Button size="small" color="primary">
                <a href={`mailto:${email}`} >
                  <h2>
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} />
                  </h2>
                </a>
              </Button>
            ) : (
              ""
            )}
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AdminCard;
