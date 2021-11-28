import React from 'react'
import Carousel from './../Carousel/Carousel';
import Admin from './../Admin/Admin';
import MissionAndVisionCard from './../MissionAndVision/MissionAndVisionCard';
import Slogan from '../Slogan/Slogan';

function Home() {
    return (
        <div>
            <Carousel/>
            <MissionAndVisionCard/>
            <Slogan/>
            <Admin/>
          
        </div>
    )
}

export default Home
