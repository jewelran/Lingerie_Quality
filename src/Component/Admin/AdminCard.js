import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./AdminCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faRetweet } from '@fortawesome/free-solid-svg-icons';
function AdminCard(props) {
    const {name, id,about, github,website, twitter, designation} = props.admin
    console.log(name , id);

    const meediaIcons = () => {
      alert("No Development")
    }
    return (
      
        <Card sx={{ maxWidth:800 ,marginLeft:"1rem"}}>
        <CardActionArea className="d-flex">
          <CardMedia
          className="adminImg"
            component="img"
            height="160"
            image="https://www.realmenrealstyle.com/wp-content/uploads/2021/07/5-10.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h8" component="div">
              {designation}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
            <CardActions className ="mt-2 mediaBtn">
          <Button size="small" color="primary">
              <a href=""> <h2><FontAwesomeIcon icon={faInstagram}/></h2> </a>
          </Button>
          <Button size="small" color="primary">
            <a href=""> <h2><FontAwesomeIcon icon={faFacebook}/></h2> </a>
          </Button>
          <Button size="small" color="primary">
           <a href="" onClick= {() => meediaIcons()}><h2> <FontAwesomeIcon icon={faWhatsapp}/></h2></a>
          </Button>
          {
              github ? <Button size="small" color="primary">
              <a href="" onClick= {() => meediaIcons()}><h2> <FontAwesomeIcon icon={faGithub}/></h2></a>
             </Button> : ""
          }
          {
              website ? <Button size="small" color="primary">
              <a href="" onClick= {() => meediaIcons()}><h2> <FontAwesomeIcon icon={faGlobeEurope}/></h2></a>
             </Button> : ""
          }
          {
              twitter ? <Button size="small" color="primary">
              <a href="" onClick= {() => meediaIcons()}><h2> <FontAwesomeIcon icon={faTwitter}/></h2></a>
             </Button> : ""
          }
        </CardActions>
          </CardContent>
        </CardActionArea>
       
      </Card>
        
    )
}

export default AdminCard
