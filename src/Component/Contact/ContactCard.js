import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faGithub,
  faTwitter,
  faOpencart,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
 function ContactCard(props) {
     const {name, ImgUrl,designation, about, github, facebook, linkedIn, instagram,whatsApp,website,twitter, email} = props.admin
  return (
    <Card sx={{ maxWidth: 445 , height:625, backgroundColor:"#adb5bd"}}>
      <CardMedia
        component="img"
        height="340"

        image={ImgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
       {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {designation}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
         {about}
        </Typography>

      </CardContent>
     <CardActions className="mediaBtn d-flex justify-content-center align-items-center">
           <div className="">
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
                  <FontAwesomeIcon icon={faLinkedin} />
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
           </div>
          </CardActions>
    </Card>
  );
}

export default ContactCard