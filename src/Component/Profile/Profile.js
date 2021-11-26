import React, { useState, useEffect } from "react";
import cooOfCompany from "../Images/CooOfCompany.png";
import "./Profile.css";
import ProfileCard from "./ProfileCard";
import { CardActions, Button } from "@mui/material";
import managementFile from "../business.json";
import ieAndStoreFile from "../ieAndStore.json";
import cuttingMaintainceAndEnovationFile from "../cuttingMaintainceAndEnovation.json";
import productionFile from "../production.json";
import qualityFile from "../quality.json";
import qsAndNqcFile from "../qsAndNqc.json";
import cadAndSampleFile from "../cadSamplePlaninng.json";
import finishingAndMqacFile from "../finishing&Mqac.json";
import hrd from "../hrd.json";

import "./ProfileCard.css";
function Profile() {
  const [businessDepartment, setBusinessDepartment] = useState([]);
  const [hrdDepartment, setHrdDepartment] = useState([]);
  const [finishingAndMqac, setFinishingAndMqac] = useState([]);
  const [cadSamplePlanning, setCadSamplePlanning] = useState([])
  const [production, setProduction] = useState([]);
  const [cuttingMaintainceAndEnovation, setCuttingMaintainceAndEnovation] = useState([]);
  const [quality, setQuality] = useState([]);
  const [qsAndNqc, setQsAndNqc] = useState([]);
  const [ieAndStore, setIeAndStore] = useState([]);

  
  
  console.log(businessDepartment, hrd);
  useEffect(() => {
    setBusinessDepartment(managementFile);
    setHrdDepartment(hrd)
    setCadSamplePlanning(cadAndSampleFile)
    setIeAndStore(ieAndStoreFile)
    setQuality(qualityFile)
    setFinishingAndMqac(finishingAndMqacFile)
    setCuttingMaintainceAndEnovation(cuttingMaintainceAndEnovationFile)
    setProduction(productionFile)
    setQsAndNqc(qsAndNqcFile)
  }, []);



  const profileList = [
    {
      id: 1,
      name: "Jewel Hossain",
      img: "https://i.ibb.co/QmZqDVB/IMG-20200731-233054-335.jpg",
      about:
        "Authority of Product quality Control for KC Lingerie Ltd (Garments Unit). Highly Experienced in Quality & Technical field. Innovative, Creative & Constructive division maker for any situation. Likes to share knowledge to subordinate to develop their skill.",
    },

    {
      id: 2,
      name: "Hamidur Rohman Hamid",
      img: "https://i.ibb.co/0jrQkSz/IMG-3992-removebg-preview.png",
      about:
        "Production Authority of KC Lingerie Ltd (Garments Unit). Highly Experienced in Production & Technical field. Innovative & Constructive division maker for any situation. Likes to share knowledge to subordinate to develop their skill.",
    },
  ];

  return (
    <div className="">
      <div className="container pt-5 pb-5">
        <div className="d-flex mt-5  justify-content-center">
          <div className="col-md-3 profileImgCard">
            <img style={{ width: "100%" }} src={cooOfCompany} alt="" />
          </div>
          <div className="col-md-7  bg-light profileImgTitle p-3">
            <div className="ml-3">
              <h3
                style={{
                  color: "#002060",
                  textAlign: "center",
                  lineHeight: "7px",
                  fontFamily: "cursive",
                }}
              >
                Mahbubur Rahman Russell
              </h3>
              <h6
                style={{
                  color: "#002060",
                  textAlign: "center",
                  fontFamily: "cursive",
                }}
              >
                Authority of KC Lingerie Ltd.
              </h6>
              <p
                style={{
                  color: "#002060",
                  fontFamily: "cursive",
                  lineHeight: "9px",
                }}
              >
                <span>Email:</span> <span>russell@knitconcern.com</span>
              </p>
              <p
                style={{
                  color: "#002060",
                  fontFamily: "cursive",
                  lineHeight: "9px",
                }}
              >
                <span>Phone:</span> <span>+880 1713-000533</span>
              </p>
              <p>
                <span
                  style={{
                    fontSize: "25px",
                    color: "#4e4c4c",
                    textDecoration: "underline",
                    fontFamily:"cursive"
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
                  Dynamic, Innovative & Constructive solver of any kind of
                  difficulties. Excellent experienced in Marketing, Business,
                  Management, Technical & Ethics. Likes to dream the develop of
                  company and is determined to make it a reality. Leading
                  Subordinate for a better future & to be self dependent.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container card-deck d-flex justify-content-center pb-5">
        {profileList.map((profile) => (
          <ProfileCard key={profile.id} profile={profile}>
            {" "}
          </ProfileCard>
        ))}
      </div>

            {/* business container */}

      <div
        style={{ padding: "2rem" }}
        className="  card-deck d-flex justify-content-center"
      >
        {businessDepartment.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* hrdDepartment container */}

      <div
        style={{ padding: "2rem" }}
        className="   card-deck d-flex justify-content-around"
      >
        {hrdDepartment.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* qs team  container*/}
      <div
        style={{ padding: "2rem" }}
        className="   card-deck d-flex justify-content-between "
      >
        {qsAndNqc.map((profile) => (
          <div
            className=" profileCardContainer col-md-4 h-25  border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
{/* cad sample file container */}
      <div
        style={{ padding: "2rem" }}
        className="  card-deck d-flex justify-content-center"
      >
        {cadSamplePlanning.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>

            {/* IE and store */}
      <div
        style={{ padding: "2rem" }}
        className="  card-deck d-flex justify-content-center"
      >
        {ieAndStore.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* cuttingMaintainceAndEnovation container */}
      <div
        style={{ padding: "2rem" }}
        className="  card-deck d-flex justify-content-center"
      >
        {cuttingMaintainceAndEnovation.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>

   
{/* production container */}
      <div
        style={{ padding: "2rem" }}
        className="  card-deck d-flex justify-content-center"
      >
        {production.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* quality container */}
      <div
        style={{ padding: "2rem" }}
        className="  card-deck d-flex justify-content-center"
      >
        {quality.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    {/* finishing and MQac container */}
      <div
        style={{ padding: "2rem" }}
        className="  card-deck d-flex justify-content-center"
      >
        {finishingAndMqac.map((profile) => (
          <div
            className="  profileCardContainer  col-md-4 h-25 border d-flex m-2  text-dark "
            key={profile.id}
          >
            <div className="col-md-4">
              <img src={profile.picture} alt="" />
            </div>
            <div className=" profileDescription col-md-7">
              <h3 className="text-center">{profile.name}</h3>
              <p>{profile.about}</p>
              <div className="media">
                <button className="btn btn-primary ml-1">facebook</button>
                <button className="btn btn-primary ml-1">linkedIn</button>
                <button className="btn btn-primary">WhatsUp</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
