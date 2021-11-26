import React from 'react'
import { CardActions, Button } from '@mui/material';
import "./ProfileCard.css"
function ProfileCard(props) {
  console.log(props);
    return (
            <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "780px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src={props.profile.img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{props.profile.name}</h5>
        <p class="card-text">{props.profile.about}</p>
        <CardActions>
          <Button size="small" color="primary">
            Facebook
          </Button>
          <Button size="small" color="primary">
          Whatsapp
          </Button>
          <Button size="small" color="primary">
          Linkedin
          </Button>
         
        </CardActions>
      </div>
    </div>
  </div>
  
</div>
    )
}

export default ProfileCard
