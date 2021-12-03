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
} from "@fortawesome/free-brands-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
function AdminCard(props) {
  const { name, id, about, github, website, twitter, designation, ImgUrl } =
    props.admin;
  console.log(name, id);

  const meediaIcons = () => {
    alert("No Development");
  };
  return (
    <Card sx={{ maxWidth: 800, marginLeft: "1rem", height: "260px" }}>
      <CardActionArea className="d-flex">
        <CardMedia
          className="adminImg"
          component="img"
        
          image={ImgUrl}
          alt="green iguana"
        />
        <div className="layer "> </div>
        <div className="layer2 d-flex justify-content-center align-items-center"> 
       <div className="">
        <button className="btn btn-danger">view Profile</button>
       </div>
        </div>
        <CardContent style={{ marginTop: "-5rem" }}>
          <Typography  gutterBottom variant="h5" component="div">
            <h2>{name}</h2>
          </Typography>
          <Typography style={{marginTop:"-17px", marginBottom:"20px"}} gutterBottom variant="h8" component="div">
            <h5>{designation}</h5>
          </Typography>
          <Typography variant="body2" style={{color:"#212525"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CardActions className="mt-5 mediaBtn">
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
              <a href="" onClick={() => meediaIcons()}>
                <h2>
                  {" "}
                  <FontAwesomeIcon icon={faWhatsapp} />
                </h2>
              </a>
            </Button>
            {github ? (
              <Button size="small" color="primary">
                <a href="" onClick={() => meediaIcons()}>
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
                <a href="" onClick={() => meediaIcons()}>
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
                <a href="" onClick={() => meediaIcons()}>
                  <h2>
                    {" "}
                    <FontAwesomeIcon icon={faTwitter} />
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
