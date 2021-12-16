import React, { useEffect,useState } from 'react'
import "./ManagementTeam.css"
import jobDescription from "../jobDescription.json"
import SopFollowChart from './ManagementContainer/SopAndFollowChart/SopFollowChart';
function ManagementCard() {
    const [jobInfo, setJobInfo] =useState([])
    console.log(jobInfo, "job in here");

    useEffect(() =>{
        setJobInfo(jobDescription)
    },[])
const id = 0;
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
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Title / Designation</span> : <span>{info.title}</span>
                                            <br />
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Required Academic Qualification</span> : <span>{info.qualification}</span>
                                            <br />
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Required Experience</span> : <span>{info.experience}</span>
                                            <br />
                                            <span style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Report To</span> : <span>{info.reportTo}</span>
                                            <br />
                                            <span  style={{fontSize:"16px" ,fontWeight:"bold" , textDecoration:"underline"}}>Work Area</span> : <span>{info.workArea}</span>
                                            <br />

                                        </li> )
                                    }
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="mt-2">
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
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_1}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_2}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_3}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_4}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_5}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_6}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_7}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_8}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_9}</li>
                                         

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
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_1}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_2}</li>
                                            <li style = {{listStyle:"upper-roman"}}>{info.li_3}</li>
                                           
                                           
                                         

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
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_1}</li>
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_2}</li>
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_3}</li>
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_4}</li>
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_5}</li>
                                            <li style = {{listStyleType:"upper-roman"}}>{info.li_6}</li>
                                           
                                             
                                    

                                        </li> )
                                    }
                                </div>)
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagementCard
