import React from 'react'
import Footer from '../Footer/Footer'
import blog from "../Images/bgImg/blog.png"
import Navigation from './../Navigation/Navigation';

function Contact() {
    return (
        <div style ={{background:"#2E3141"}}>
             <Navigation/>
            <div className="container">
                <img style={{width:"100%", height:"auto"}} src={blog} alt="" />
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
