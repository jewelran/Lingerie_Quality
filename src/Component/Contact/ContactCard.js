import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./ContactCard.css"
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
function ContactCard(props) {
  const {ImgUrl,name,about,designation} = props.admin

  
  
  return (
    <div data-aos="fade-up"
    data-aos-duration="2000" className='topContactArea'>
      <div className=" ContactCardArea">
        <div  className="wrapper" style={{lineHeight:"5px"}}>
          <a href="">
            <img   src={ImgUrl} alt="" />
          </a>
         
            <div   className='title'>{name}</div>
            <div  className='place'>{designation}</div>
      
        </div>
        <div className="content">
          {about}
        </div>
        <div className="buttons">
          <div className="btn">
            <button>Message</button>
          </div>
          <div className="btn">
            <button>View profile</button>
          </div>
        </div>
        <div className="icons">
          <li><a href=""><FontAwesomeIcon icon = {faFacebook}/></a></li>
          <li><a href=""><FontAwesomeIcon icon = {faLinkedin}/></a></li>
          <li><a href=""><FontAwesomeIcon icon = {faTwitter}/></a></li>
          <li><a href=""><FontAwesomeIcon icon = {faInstagram}/></a></li>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
