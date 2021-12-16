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
const id = 5
    const singleJobInfo = jobInfo.filter(info => info.index === id)
    console.log(singleJobInfo);
    return (
        <div className= "container">
          
            <div style={{maxWidth:"95%", color:"black", paddingBottom:"3%"}}>
                <div className="">
                    <div className="">
                        <h1>KC LINGERIE LID.</h1>
                        <p>57/1 Water works road , Godnail, Narayangonj-1400</p>
                        <h3>Quality Control Department</h3>
                    </div>
                    <div className="border-bottom pb-1">
                        <h1>Job description</h1>
                        <div className="">
                            {
                                singleJobInfo.map(headerInfo => <div>
                                    {
                                        headerInfo.headerTitle.map(info=><li>
                                            <span style={{fontSize:"23px", textDecoration:"underline"}}>Title / Designation</span> : <span>{info.title}</span>
                                            <br />
                                            <span style={{fontSize:"23px", textDecoration:"underline"}}>Required Academic Qualification</span> : <span>{info.qualification}</span>
                                            <br />
                                            <span style={{fontSize:"23px", textDecoration:"underline"}}>experience</span> : <span>{info.experience}</span>
                                            <br />
                                            <span style={{fontSize:"23px", textDecoration:"underline"}}>Report To</span> : <span>{info.reportTo}</span>
                                            <br />
                                            <span  style={{fontSize:"23px", textDecoration:"underline"}}>Work Area</span> : <span>{info.workArea}</span>
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
                                            <span style={{fontSize:"23px", textDecoration:"underline"}}>Purpose of the Position</span> : <span>{info.position}</span>
                                         

                                        </li> )
                                    }
                                </div>)
                            }
                    </div>
                    <div className="mt-2">
                    {
                                singleJobInfo.map(headerInfo => <div>
                                         <span style={{fontSize:"23px", textDecoration:"underline"}}>Purpose of the Position</span>
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
                                         <span style={{fontSize:"23px", textDecoration:"underline"}}>Authority</span>
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
                                         <span style={{fontSize:"23px", textDecoration:"underline"}}>Report to be maintain</span>
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
