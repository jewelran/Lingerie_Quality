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
import { faWhatsapp, faFacebook, faInstagram, faGoogle, } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Footer/Footer";
import Navigation from './../Navigation/Navigation';
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
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

  console.log(businessDepartment);
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
      title:"Quality Responsible",
      img: "https://i.ibb.co/ZBRxg24/What.png",
      about:
        "Authority of Product quality Control for KC Lingerie Ltd (Garments Unit). Highly Experienced in Quality & Technical field. Innovative, Creative & Constructive division maker for any situation. Likes to share knowledge to subordinate to develop their skill.",
    },

    {
      id: 2,
      name: "Hamidur Rohman Hamid",
      title:"Production Responsible",
      img: "https://i.ibb.co/kmXBzC4/Head-of-Production.png",
      about:
        "Production Authority of KC Lingerie Ltd (Garments Unit). Highly Experienced in Production & Technical field. Innovative & Constructive division maker for any situation. Likes to share knowledge to subordinate to develop their skill.",
    },
  ];

  return (
    <div className="">
       <Navigation/>
      <div className="container  pt-5 pb-5">
        <div className="d-flex mt-5  justify-content-center">
          <div className="col-md-3  profileImgCard Card">
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
              <h5
                style={{
                  color: "#002060",
                  textAlign: "center",
                  fontFamily: "cursive",
                }}
              >
                Authority of KC Lingerie Ltd.
              </h5>
          
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
              <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="cooProfileIconArea">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </CardActions>
            </div>
          </div>
        </div>
      </div>
      <div  style={{marginTop:"3rem"}} className=" container card-deck    d-flex justify-content-center pb-5">
       {
         profileList.map(profile => <ProfileCard key = {profile.id}  profile={profile}></ProfileCard>)
       }
      </div>

      {/* business container */}

      <div className="p-3    d-flex justify-content-between mb-5 mt-5 ">
        {businessDepartment.map((profile) => (
          <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
            <CardMedia>
              <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
            </CardMedia>
            <CardContent>
            <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
              <Typography gutterBottom variant="h5" component="div">
                <h2>{profile.name}</h2>
              </Typography>
              <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
            <h5>  {profile.position}</h5>
              </Typography>
              <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
              </Typography>
              
           
            </CardContent>
            <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
                <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
                <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
                <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
                <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
                <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
              </CardActions>
            </CardContent>
          </Card>
          
        ))}
      
        
      </div>
      {/* hrdDepartment container */}
      <div className="container    d-flex justify-content-around mb-5 mt-5">
        {hrdDepartment.map((profile) => (
          <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
          <CardMedia>
            <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
          </CardMedia>
          <CardContent>
          <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{profile.name}</h2>
            </Typography>
            <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
          <h5>  {profile.position}</h5>
            </Typography>
            <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
            </Typography>
            
         
          </CardContent>
          <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </CardActions>
          </CardContent>
        </Card>
        ))}
      </div>
      {/* qs team  container*/}
      <div className="p-3    d-flex justify-content-around mb-5 mt-5">
        {qsAndNqc.map((profile) => (
          <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
          <CardMedia>
            <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
          </CardMedia>
          <CardContent>
          <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{profile.name}</h2>
            </Typography>
            <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
          <h5>  {profile.position}</h5>
            </Typography>
            <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
            </Typography>
            
         
          </CardContent>
          <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </CardActions>
          </CardContent>
        </Card>
        ))}
      </div>


      {/* cad sample file container */}
      <div className="p-3    d-flex justify-content-between mb-5 mt-5">
        {cadSamplePlanning.map((profile) => (
          <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
          <CardMedia>
            <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
          </CardMedia>
          <CardContent>
          <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{profile.name}</h2>
            </Typography>
            <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
          <h5>  {profile.position}</h5>
            </Typography>
            <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
            </Typography>
            
         
          </CardContent>
          <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </CardActions>
          </CardContent>
        </Card>
        ))}
      </div>

      {/* IE and store */}
      <div className="container  d-flex justify-content-around mb-5 mt-5">
        {ieAndStore.map((profile) => (
          <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
          <CardMedia>
            <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
          </CardMedia>
          <CardContent>
          <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{profile.name}</h2>
            </Typography>
            <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
          <h5>  {profile.position}</h5>
            </Typography>
            <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
            </Typography>
            
         
          </CardContent>
          <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </CardActions>
          </CardContent>
        </Card>
        ))}
      </div>

      {/* cuttingMaintainceAndEnovation container */}
      <div className="p-3  pt-4  d-flex justify-content-between mb-5 mt-5">
        {cuttingMaintainceAndEnovation.map((profile) => (
           <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
           <CardMedia>
             <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
           </CardMedia>
           <CardContent>
           <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
             <Typography gutterBottom variant="h5" component="div">
               <h2>{profile.name}</h2>
             </Typography>
             <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
           <h5>  {profile.position}</h5>
             </Typography>
             <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
             </Typography>
             
          
           </CardContent>
           <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
               <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
             </CardActions>
           </CardContent>
         </Card>
        ))}
      </div>

      {/* production container */}
      <div className="container  pt-4   d-flex justify-content-around mb-5 mt-5">
        {production.map((profile) => (
           <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
           <CardMedia>
             <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
           </CardMedia>
           <CardContent>
           <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
             <Typography gutterBottom variant="h5" component="div">
               <h2>{profile.name}</h2>
             </Typography>
             <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
           <h5>  {profile.position}</h5>
             </Typography>
             <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
             </Typography>
             
          
           </CardContent>
           <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
               <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
               <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
               <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
             </CardActions>
           </CardContent>
         </Card>
        ))}
      </div>
      {/* quality container */}
      <div className="container pt-4   d-flex justify-content-around mb-5 mt-5">
        {quality.map((profile) => (
          <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
          <CardMedia>
            <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
          </CardMedia>
          <CardContent>
          <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
            <Typography gutterBottom variant="h5" component="div">
              <h2>{profile.name}</h2>
            </Typography>
            <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
          <h5>  {profile.position}</h5>
            </Typography>
            <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
            </Typography>
            
         
          </CardContent>
          <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
              <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
              <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
              <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
            </CardActions>
          </CardContent>
        </Card>
        ))}
      </div>
      {/* finishing and MQac container */}
      <div className="container pt-4   d-flex justify-content-around mb-5 mt-5">
        {finishingAndMqac.map((profile) => (
            <Card className= "profileCard" sx={{ maxWidth: 600, margin:"15px", display: "flex" ,height:"250px"}}>
            <CardMedia>
              <img style={{width:"110%",height:"115%", transition:"translateY(-26px)",borderRadius:"10px", boxShadow:"5px  5px 30px #282C34"}} src={profile.picture} alt="" />
            </CardMedia>
            <CardContent>
            <CardContent style={{marginLeft:"18px", marginTop:"-17px"}}>
              <Typography gutterBottom variant="h5" component="div">
                <h2>{profile.name}</h2>
              </Typography>
              <Typography style={{marginTop:"-7px"}} variant="body2" color="text.secondary">
            <h5>  {profile.position}</h5>
              </Typography>
              <Typography style={{marginTop:"24px"}} variant="body2" color="text.secondary">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti voluptatibus pariatur at odit consequatur?</p>
              </Typography>
              
           
            </CardContent>
            <CardActions style={{marginTop:"-20px", paddingBottom:"6px"}} className="">
                <Button size="small"><h2><FontAwesomeIcon icon={faFacebook}/></h2> </Button>
                <Button size="small"><h2><FontAwesomeIcon icon={faWhatsapp}/></h2></Button>
                <Button size="small"><h2><FontAwesomeIcon icon={faInstagram}/></h2></Button>
                <Button size="small"><h2><FontAwesomeIcon icon={faPhone}/></h2></Button>
                <Button size="small"><a href="mdjewelrana6487@gmail.com"><h2><FontAwesomeIcon icon={faEnvelope}/></h2></a></Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;
