import React from 'react'
import { CardActions, Button } from '@mui/material';
import "./ProfileCard.css"
function ProfileCard() {
    return (
            <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src="https://s3-us-west-1.amazonaws.com/co-directory-images/davidgendelman.jpg" class="img-fluid rounded-start" alt="https://s3-us-west-1.amazonaws.com/co-directory-images/davidgendelman.jpg"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
