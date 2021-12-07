import React from 'react'
import Carousel from './../Carousel/Carousel';
import Admin from './../Admin/Admin';
import MissionAndVisionCard from './../MissionAndVision/MissionAndVisionCard';
import Slogan from '../Slogan/Slogan';
import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';
import Gallery from '../Gallery/Gallery';

function Home() {
    return (
        <div>
             <Navigation/>
            <Carousel/>
            <MissionAndVisionCard/>
            <Gallery/>
            <Slogan/>
            <Admin/>
            <Footer/>
        </div>
    )
}

export default Home
