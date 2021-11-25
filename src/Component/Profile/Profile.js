import React from "react";
import cooOfCompany from "../Images/CooOfCompany.png";
import "./Profile.css";
import ProfileCard from './ProfileCard';
import { CardActions, Button } from '@mui/material';
import "./ProfileCard.css"
function Profile() {

    const profileList = [
        {
            id:1,
            name:'Jewel Hossain',
            img:"https://i.ibb.co/QmZqDVB/IMG-20200731-233054-335.jpg",
            about: "Authority of Product quality Control for KC Lingerie Ltd (Garments Unit). Highly Experienced in Quality & Technical field. Innovative, Creative & Constructive division maker for any situation. Likes to share knowledge to subordinate to develop their skill.",
        },
        {
            id:2,
            name:'Hamidur Rohman Hamid',
            img:"https://i.ibb.co/0jrQkSz/IMG-3992-removebg-preview.png",
            about: "Production Authority of KC Lingerie Ltd (Garments Unit). Highly Experienced in Production & Technical field. Innovative & Constructive division maker for any situation. Likes to share knowledge to subordinate to develop their skill.",
            
        },
     
    ]

  return (
    <div className="">
      <div className="container pt-5 pb-5">
        <div className="d-flex mt-5  justify-content-center">
          <div className="col-md-3 profileImgCard">
            <img style={{ width: "100%" }} src={cooOfCompany} alt="" />
          </div>
          <div className="col-md-7  bg-light profileImgTitle p-3">
            <div className="ml-3">
            <h3 style={{ color: "#002060", textAlign: "center" ,lineHeight:"7px", fontFamily:"cursive"}}>
                Mahbubur Rahman Russel
              
            </h3>
            <h6 style={{ color: "#002060", textAlign: "center", fontFamily:"cursive" }}>Authority of KC Lingerie Ltd.</h6>
            <p style={{ color: "#002060", fontFamily:"cursive" , lineHeight:"9px" }}>
              <span>Email:</span> <span>russell@knitconcern.com</span>
            </p>
            <p style={{ color: "#002060", fontFamily:"cursive" , lineHeight:"9px"}}>
              <span>Phone:</span> <span>+880 1713-000533</span>
            </p>
            <p>
              <span
                style={{
                  fontSize: "25px",
                  color: "#4e4c4c",
                  textDecoration: "underline",
                }}
              >
                About:
              </span>{" "}
              <span
                style={{
                  marginLeft: "1rem",
                  color: "#002060",
                  fontWeight: "bold",
                  fontFamily: "cursive",
                }}
              >
                Dynamic, Innovative & Constructive
                solver of any kind of difficulties. Excellent experienced in
                Marketing, Business, Management, Technical & Ethics. Likes to
                dream the develop of company and is determined to make it a
                reality. Leading Subordinate for a better future & to be self
                dependent.
              </span>
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container card-deck d-flex justify-content-center pb-5">
          {
              profileList.map(profile => <ProfileCard key= {profile.id} profile = {profile}> </ProfileCard>)
          }
      </div>

      <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src={profileList[0].img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">About</p>
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
      <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src={profileList[0].img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">About</p>
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
      <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src={profileList[0].img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">About</p>
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
      <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src={profileList[0].img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">About</p>
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
      <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src={profileList[0].img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">About</p>
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
      <div class="card ProfileCardContainer mb-3 m-2 shadow p-3 mb-5 bg-body rounded" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{height:'200px'}} src={profileList[0].img} class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Name</h5>
        <p class="card-text">About</p>
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

  
    </div>
  );
}

export default Profile;
