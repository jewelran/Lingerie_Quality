import React from 'react'
import organizational from "../Images/bgImg/organogram.png"
import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';
function OrganizationalChart () {
    return (
        <div>
             <Navigation/>
            <div className="bg-white p-3 h-100">
                <img style ={{width:"100%", height:"100vh"}}  src={organizational } alt="img" />
            </div>
            <Footer/>
        </div>
    )
}

export default OrganizationalChart 

