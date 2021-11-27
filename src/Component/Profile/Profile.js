import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cooOfCompany from "../Images/CooOfCompany.png";
import "./Profile.css";
import ProfileCard from "./ProfileCard";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
function Profile() {
  const [businessDepartment, setBusinessDepartment] = React.useState([]);
  const [hrdDepartment, setHrdDepartment] = useState([]);
  const [finishingAndMqac, setFinishingAndMqac] = useState([]);
  const [cadSamplePlanning, setCadSamplePlanning] = useState([]);
  const [production, setProduction] = useState([]);
  const [cuttingMaintainceAndEnovation, setCuttingMaintainceAndEnovation] =
    useState([]);
  const [quality, setQuality] = useState([]);
  const [qsAndNqc, setQsAndNqc] = useState([]);
  const [ieAndStore, setIeAndStore] = useState([]);

  console.log(businessDepartment, hrd);
  useEffect(() => {
    setBusinessDepartment(managementFile);
    setHrdDepartment(hrd);
    setCadSamplePlanning(cadAndSampleFile);
    setIeAndStore(ieAndStoreFile);
    setQuality(qualityFile);
    setFinishingAndMqac(finishingAndMqacFile);
    setCuttingMaintainceAndEnovation(cuttingMaintainceAndEnovationFile);
    setProduction(productionFile);
    setQsAndNqc(qsAndNqcFile);
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
          <div className="col-md-3 profileImgCard Card">
            <img style={{ width: "100%" }} src={cooOfCompany} alt="" />
          </div>
          <div className="col-md-7 profileImgTitle  bg-light Title p-3">
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
                    fontFamily: "cursive",
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
      <div className=" container card-deckprofileCard   d-flex justify-content-center pb-5">
        {profileList.map((profile) => (
          <ProfileCard key={profile.id} profile={profile}>
            {" "}
          </ProfileCard>
        ))}
      </div>

      {/* business container */}

      <div className="p-3profileCard   d-flex justify-content-between mb-5 ">
        {businessDepartment.map((profile) => (
          <Card className= "profileCard" sx={{ maxWidth: 550, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <CardActions>
                <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
                <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* hrdDepartment container */}
      <div className="container    d-flex justify-content-around mb-5">
        {hrdDepartment.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* qs team  container*/}
      <div className="container    d-flex justify-content-around mb-5">
        {qsAndNqc.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* cad sample file container */}
      <div className="p-3    d-flex justify-content-between mb-5">
        {cadSamplePlanning.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* IE and store */}
      <div className="container  d-flex justify-content-around mb-5">
        {ieAndStore.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* cuttingMaintainceAndEnovation container */}
      <div className="p-3    d-flex justify-content-between mb-5">
        {cuttingMaintainceAndEnovation.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* production container */}
      <div className="container    d-flex justify-content-around mb-5">
        {production.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* quality container */}
      <div className="container   d-flex justify-content-around mb-5">
        {quality.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* finishing and MQac container */}
      <div className="container   d-flex justify-content-around mb-5">
        {finishingAndMqac.map((profile) => (
          <Card className="profileCard" sx={{ maxWidth: 545, display: "flex" }}>
            <CardMedia
              component="img"
              className=".css-o69gx8-MuiCardMedia-root "
              image={profile.picture}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {profile.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>

              <CardActions>
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Profile;
