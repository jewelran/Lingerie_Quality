import React from "react";
import cooOfCompany from "../Images/CooOfCompany.png";
import "./Profile.css";
import ProfileCard from './ProfileCard';
function Profile() {

    const profileList = [
        {
            id:1,
            name:'Jewel Hossain'
        },
        {
            id:2,
            name:'Majharul Islam'
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
                Authority of KC Lingerie Ltd. Dynamic, Innovative & Constructive
                solver of any kind of difficulties. Excellent experienced in
                Marketing, Business, Management, Technical & Ethics. Wish to
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
    </div>
  );
}

export default Profile;
