import React, { useEffect,useState } from 'react'
import "./ManagementTeam.css"
import jobDescription from "../jobDescription.json"
import SopFollowChart from './ManagementContainer/SopAndFollowChart/SopFollowChart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  
function ManagementCard() {
    const [jobInfo, setJobInfo] =useState([])
    console.log(jobInfo, "job in here");
const {uId} = useParams()
console.log(uId, "this is useParams");
    useEffect(() =>{
        setJobInfo(jobDescription)
    },[])
const id = 7;
    const singleJobInfo = jobInfo.filter(info => info.index === id)
    console.log(singleJobInfo);
    return (
        <div className= "container">
          
            <div style={{ color:"black", paddingBottom:"3%", paddingTop:"1rem", fontFamily:"tahoma"}}>
                <div className="">
                    <div className="text-center formAddress">
                        <h1>KC Lingerie Ltd.</h1>
                        <p>57/1 Water works road , Godnail, Narayangonj-1400</p>
                        <h5>Quality Control Department</h5>
                    </div>
                    <div className="border-bottom pb-1">
                      <div className="d-flex justify-content-center formTitle">
                      <h2 className='text-center d-inline-block'>Job description</h2>
                      </div>
                        <div className="">
                            {
                                singleJobInfo.map(headerInfo => <div>
                                    {
                                        headerInfo.headerTitle.map(info=><li>
                                            <div className="d-flex">
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Title / Designation</span>  <span style={{marginLeft:"14rem"}}>:{info.title}</span>
                                            </div>
                                           
                                            <div className="d-flex">
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Required Academic Qualification</span>  <span style={{marginLeft:"7rem"}}>:{info.qualification}</span>
                                            </div>
                                           
                                            <div className="d-flex">
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Required Experience</span>  <span style={{marginLeft:"13rem"}}>:{info.experience}</span>
                                            </div>
                                           
                                            <div className="d-flex">
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Report To</span>  <span style={{marginLeft:"18.4rem"}}>:{info.reportTo}</span>
                                            </div>
                                           
                                            <div className="d-flex">
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Work Area</span>  <span style={{marginLeft:"18rem"}}>:{info.workArea}</span>
                                            </div>
                                           

                                        </li> )
                                    }
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="mt-2" style={{textAlign:"justify !important"}}> 
                    {
                                singleJobInfo.map(headerInfo => <div>
                                    {
                                        headerInfo.purposeOfThePosition.map(info=><li>
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Purpose of the Position</span> : <span>{info.position}</span>
                                         

                                        </li> )
                                    }
                                </div>)
                            }
                    </div>
                    <div className="mt-2">
                    {
                                singleJobInfo.map(headerInfo => <div>
                                         <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Responsibilities</span>
                                    {
                                        headerInfo.responsibilities.map(info=><li>
                                        
                                            {
                                                info.li_1?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_1}</div> </li> : ""
                                            }
                                         
                                         
                                            {
                                                info.li_2?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_2}</div> </li> : ""
                                            }
                                         
                                            {
                                                info.li_3?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_3}</div> </li> : ""
                                            }
                                         
                                            {
                                                info.li_4?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_4}</div> </li> : ""
                                            }
                                         
                                            {
                                                info.li_5?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_5}</div> </li> : ""
                                            }
                                         
                                            {
                                                info.li_6?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_6}</div> </li> : ""
                                            }
                                         
                                            {
                                                info.li_7?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_7}</div> </li> : ""
                                            }
                                         
                                            {
                                                info.li_8?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_8}</div> </li> : ""
                                            }
                                         
                                            {
                                                info.li_9?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_9}</div> </li> : ""
                                            }
                                           
                                         

                                        </li> )
                                    }
                                </div>)
                            }
                    </div>
                    <div className="mt-2">
                    {
                                singleJobInfo.map(headerInfo => <div>
                                         <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Authority</span>
                                    {
                                        headerInfo.authority.map(info=><li>
                                       {
                                         info.li_1?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_1}</div> </li> : ""
                                        }
                                            
                                       {
                                         info.li_2?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_2}</div> </li> : ""
                                        }
                                            
                                       {
                                         info.li_3?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_3}</div> </li> : ""
                                        }
                                            
                                       {
                                         info.li_4?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_4}</div> </li> : ""
                                        }
                                            
                                       {
                                         info.li_5?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_5}</div> </li> : ""
                                        }
                                            
                                       {
                                         info.li_6?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_6}</div> </li> : ""
                                        }
                                            
                                       {
                                         info.li_7?  <li style = {{listStyle:"circle",lineHeight:'22px'}}> <div style={{marginTop:"-1rem",marginLeft:"2rem",lineHeight:"15px"}}>{info.li_7}</div> </li> : ""
                                        }
                                            

                                        </li> )
                                    }
                                </div>)
                            }
                    </div>
                    <div className="mt-2">
                    {
                                singleJobInfo.map(headerInfo => <div>
                                         <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Report to be maintain</span>
                                    {
                                        headerInfo.maintained.map(info=><li>

                                            {
                                                info.li_1? <li style = {{listStyleType:"number"}}>{info.li_1}</li> :""
                                            }
                                            {
                                                info.li_2? <li style = {{listStyleType:"number"}}>{info.li_2}</li> :""
                                            }
                                            {
                                                info.li_3? <li style = {{listStyleType:"number"}}>{info.li_3}</li> :""
                                            }

                                            {
                                                info.li_4? <li style = {{listStyleType:"number"}}>{info.li_4}</li> :""
                                            }

                                            {
                                                info.li_5? <li style = {{listStyleType:"number"}}>{info.li_5}</li> :""
                                            }
                                            {
                                                info.li_6? <li style = {{listStyleType:"number"}}>{info.li_6}</li> :""
                                            }
                                            {
                                                info.li_7? <li style = {{listStyleType:"number"}}>{info.li_7}</li> :""
                                            }
                                            {
                                                info.li_8? <li style = {{listStyleType:"number"}}>{info.li_8}</li> :""
                                            }
                                            {
                                                info.li_9? <li style = {{listStyleType:"number"}}>{info.li_9}</li> :""
                                            }
                                            {
                                                info.li_10? <li style = {{listStyleType:"number"}}>{info.li_10}</li> :""
                                            }
                                           
                                             
                                    

                                        </li> )
                                    }
                                </div>)
                            }
                    </div>
                </div>
                <div  className="d-flex justify-content-between mt-3 border-top border-secondary">
                    <div style={{fontSize:"14px", lineHeight:"15px"}} className="fw-bold text-secondary">
                        <span style={{marginLeft:"5rem", borderBottom:"1px solid grey", marginBottom:"2rem"}}>  Copy To</span>
                        <li>01. Recipient ------------01 Copy</li>
                        <li>02. Dept. Head ------------01 Copy</li>
                        <li>03. HR Department ---------01 Copy</li>
                    </div>
                    <div className="">
                        <img src="" alt="" />
                        <h3>Authorized By</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ManagementCard
