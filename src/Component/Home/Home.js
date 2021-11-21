import React from 'react'
import Header from './../Header/Header';
import Navigation from './../Navigation/Navigation';
import Carousel from './../Carousel/Carousel';
import Admin from './../Admin/Admin';
import MissionAndVisionCard from './../MissionAndVision/MissionAndVisionCard';

function Home() {
    return (
        <div>
            <Carousel/>
            <MissionAndVisionCard/>
            <Admin/>
          
        </div>
    )
}

export default Home
